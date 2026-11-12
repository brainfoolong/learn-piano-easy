/**
 * The quantizer: a song's notes become measures of voices, each a run of chords and rests with note values.
 *
 * Decisions, and what each costs:
 * - Time is counted in slots, a third of the minimum note value, so the binary grid and the triplet grid
 *   are both whole numbers. A note snaps to the minimum value, a 32nd by default, and lasts at least one.
 * - A beat is a triplet when three onsets fill it evenly and the binary grid cannot place them. Its notes
 *   snap to thirds of the beat. Only whole beats are tested, so a cut-short measure has no triplets.
 * - A staff holds at most two voices. A note joins a chord of the same start and end, then a voice that
 *   is free at its start, then a new voice. With both busy, the voice that frees first is cut short at
 *   the note's start, or the note joins its chord when that starts with it.
 * - In each measure the voices are ordered by their mean pitch, highest first. A voice with no note in
 *   a measure is left out of it, and an empty measure holds one voice of rests.
 * - A chord or rest splits at each barline and each triplet beat's edge, then into the longest values
 *   that show the beat. A value either starts on a beat and lasts whole beats, or stays inside one beat
 *   and starts on a multiple of its undotted value. A split chord is tied to its next piece, so a note
 *   across a barline is tied.
 * - A run of rest shorter than `hideRestsBelow` is kept with `hidden` set, so it still takes its time.
 * - The clef is chosen per staff from its median pitch, bass below middle C, when `autoClef` is on.
 *   Otherwise the first staff is treble and the rest are bass.
 * - A `timeSignature` override replaces the song's signatures from tick 0.
 *
 * Bounds: the work is linear in the notes and measures, plus a sort of each track's notes.
 *
 * Gaps: a triplet's notes last whole thirds, and a note held past its triplet beat is tied at the beat's
 * end. Double dots and tuplets other than triplets are not found.
 */

import type { Song, SongTrack } from "../midi/song";

export type Clef = "treble" | "bass";

/** A note value: `base` is 1 for a whole note, 4 for a quarter, 32 for a 32nd. */
export interface NoteValue {
  base: number;
  dotted: boolean;
  /** It plays two thirds of its length, as one of three in a triplet. */
  triplet: boolean;
}

interface Timed {
  tick: number;
  ticks: number;
  value: NoteValue;
}

/** Notes struck together. `pitches` ascend. `tied` ties every pitch to the voice's next event. */
export interface SheetChord extends Timed {
  kind: "chord";
  pitches: number[];
  tied: boolean;
}

/** A rest. A `hidden` one takes its time but is not drawn. */
export interface SheetRest extends Timed {
  kind: "rest";
  hidden: boolean;
}

export type SheetEvent = SheetChord | SheetRest;

/** A measure's place and signature. Every staff shares the same measures. */
export interface SheetMeasure {
  index: number;
  tick: number;
  ticks: number;
  numerator: number;
  denominator: number;
}

/** One track's staff. `measures[m][v]` holds the events of voice `v` of measure `m`, in time order. */
export interface SheetStaff {
  track: number;
  clef: Clef;
  measures: SheetEvent[][][];
}

export interface Sheet {
  /** The song's ticks per quarter note, which gives each measure its beat. */
  ticksPerQuarter: number;
  measures: SheetMeasure[];
  staves: SheetStaff[];
}

export interface QuantizeOptions {
  /** The shortest note value the grid holds, as a `NoteValue.base` from 4 to 64. */
  minimumValue: number;
  /** A run of rest shorter than this `NoteValue.base` is hidden. Null hides none. */
  hideRestsBelow: number | null;
  autoClef: boolean;
  /** Replaces the song's time signatures when set. */
  timeSignature: { numerator: number; denominator: number } | null;
  /** The tracks shown, or null for every track with notes. Percussion is never shown. */
  tracks: readonly number[] | null;
}

export const DEFAULT_QUANTIZE: QuantizeOptions = {
  minimumValue: 32,
  hideRestsBelow: null,
  autoClef: true,
  timeSignature: null,
  tracks: null,
};

/** A staff holds this many voices at most. */
export const MAX_VOICES = 2;

/** Middle C. A staff whose median pitch is below it gets a bass clef. */
const MIDDLE_C = 60;

/** How far, in slots, an onset may sit from a third of its beat and still make a triplet. */
const TRIPLET_TOLERANCE = 1.5;

/** A measure, with its start, length and beat in slots. */
interface Frame extends SheetMeasure {
  start: number;
  end: number;
  beat: number;
}

/** A triplet beat, from `start` for `length` slots. */
interface Span {
  start: number;
  length: number;
}

/** A chord of one voice, in slots. */
interface Chord {
  start: number;
  end: number;
  pitches: number[];
}

/** A note value with its length in slots. */
interface Sized {
  value: NoteValue;
  slots: number;
}

/** The sheet of `song`: its measures, and one staff per shown track. */
export function quantize(song: Pick<Song, "tempoMap" | "tracks">, overrides: Partial<QuantizeOptions> = {}): Sheet {
  const options = { ...DEFAULT_QUANTIZE, ...overrides };
  const shown = song.tracks.filter(
    (track) => track.notes.length > 0 && !track.percussion && (options.tracks?.includes(track.index) ?? true),
  );
  const ticksPerQuarter = song.tempoMap.ticksPerQuarter;
  const slotTicks = (ticksPerQuarter * 4) / options.minimumValue / 3;
  const lastTick = Math.max(0, ...shown.flatMap((track) => track.notes.map((note) => note.endTick)));
  const signatures = options.timeSignature
    ? [{ tick: 0, ...options.timeSignature, ticksPerMeasure: ((ticksPerQuarter * 4) / options.timeSignature.denominator) * options.timeSignature.numerator }]
    : song.tempoMap.signatures;
  const frames = framesOf(signatures, lastTick, slotTicks, options.minimumValue);
  const values = valuesOf(options.minimumValue);
  const hideSlots = options.hideRestsBelow === null ? 0 : (3 * options.minimumValue) / options.hideRestsBelow;

  const staves = shown.map((track, i): SheetStaff => {
    const grid = new Grid(frames, tripletsOf(track, frames, slotTicks));
    const voices = voicesOf(grid.place(track, slotTicks));
    // Each voice's first chord not yet ended, so finding a measure's chords never rescans a voice.
    const first = voices.map(() => 0);
    const measures = frames.map((frame) => {
      const within = voices.map((voice, v) => {
        while (first[v]! < voice.length && voice[first[v]!]!.end <= frame.start) first[v]!++;
        const chords: Chord[] = [];
        for (let k = first[v]!; k < voice.length && voice[k]!.start < frame.end; k++) chords.push(voice[k]!);
        return chords;
      });
      return measureOf(frame, within, grid, values, slotTicks, hideSlots);
    });
    return { track: track.index, clef: clefOf(track, i, options.autoClef), measures };
  });
  const measures = frames.map(({ index, tick, ticks, numerator, denominator }) => ({ index, tick, ticks, numerator, denominator }));
  return { ticksPerQuarter, measures, staves };
}

/** The clef of `track`, the `position`th staff shown. */
function clefOf(track: SongTrack, position: number, autoClef: boolean): Clef {
  if (!autoClef) return position === 0 ? "treble" : "bass";
  const pitches = track.notes.map((note) => note.pitch).sort((a, b) => a - b);
  const mid = pitches.length >> 1;
  const median = pitches.length % 2 === 1 ? pitches[mid]! : (pitches[mid - 1]! + pitches[mid]!) / 2;
  return median < MIDDLE_C ? "bass" : "treble";
}

/** The measures from tick 0 until `lastTick`, at least one. A measure cut short by a signature counts. */
function framesOf(
  signatures: readonly { tick: number; numerator: number; denominator: number; ticksPerMeasure: number }[],
  lastTick: number,
  slotTicks: number,
  minimumValue: number,
): Frame[] {
  const frames: Frame[] = [];
  for (let i = 0; i < signatures.length; i++) {
    const signature = signatures[i]!;
    const until = signatures[i + 1]?.tick ?? Infinity;
    for (let tick = signature.tick; tick < until; tick += signature.ticksPerMeasure) {
      if (tick >= lastTick && frames.length > 0) return frames;
      const ticks = Math.min(signature.ticksPerMeasure, until - tick);
      frames.push({
        index: frames.length,
        tick,
        ticks,
        numerator: signature.numerator,
        denominator: signature.denominator,
        start: Math.round(tick / slotTicks),
        end: Math.round((tick + ticks) / slotTicks),
        beat: Math.max(1, Math.round((3 * minimumValue) / signature.denominator)),
      });
    }
  }
  return frames;
}

/** Every plain and dotted value down to `minimumValue`, longest first. */
function valuesOf(minimumValue: number): Sized[] {
  const values: Sized[] = [];
  for (let base = 1; base <= minimumValue; base *= 2) {
    const slots = (3 * minimumValue) / base;
    if (base * 2 <= minimumValue) values.push({ value: { base, dotted: true, triplet: false }, slots: slots * 1.5 });
    values.push({ value: { base, dotted: false, triplet: false }, slots });
  }
  return values;
}

/** The index of the last frame starting at or before `slot`, or 0. */
function frameIndexAt(frames: readonly Frame[], slot: number): number {
  let low = 0;
  let high = frames.length - 1;
  while (low < high) {
    const mid = (low + high + 1) >> 1;
    if (frames[mid]!.start <= slot) low = mid;
    else high = mid - 1;
  }
  return low;
}

/** The whole beat holding `slot`, or undefined when its measure cuts it short or `slot` is past the end. */
function beatAt(frames: readonly Frame[], slot: number): Span | undefined {
  const frame = frames[frameIndexAt(frames, slot)]!;
  if (slot < frame.start || slot >= frame.end) return undefined;
  const start = frame.start + Math.floor((slot - frame.start) / frame.beat) * frame.beat;
  return start + frame.beat <= frame.end ? { start, length: frame.beat } : undefined;
}

/** The beats of `track` that three evenly spaced onsets fill, in order. */
function tripletsOf(track: SongTrack, frames: readonly Frame[], slotTicks: number): Span[] {
  const onsets = new Map<number, { beat: Span; offsets: number[] }>();
  for (const note of track.notes) {
    const raw = note.startTick / slotTicks;
    const beat = beatAt(frames, Math.round(raw));
    if (!beat) continue;
    const entry = onsets.get(beat.start) ?? { beat, offsets: [] };
    entry.offsets.push(raw - beat.start);
    onsets.set(beat.start, entry);
  }
  const triplets: Span[] = [];
  for (const { beat, offsets } of onsets.values()) {
    const third = beat.length / 3;
    // A third the binary grid already holds needs no triplet.
    if (!Number.isInteger(third) || third % 3 === 0) continue;
    const clusters: number[][] = [];
    for (const offset of offsets.sort((a, b) => a - b)) {
      const last = clusters[clusters.length - 1];
      if (last && offset - last[0]! <= TRIPLET_TOLERANCE) last.push(offset);
      else clusters.push([offset]);
    }
    const even = clusters.every((cluster, k) => {
      const mean = cluster.reduce((sum, offset) => sum + offset, 0) / cluster.length;
      return Math.abs(mean - k * third) <= TRIPLET_TOLERANCE;
    });
    if (clusters.length === 3 && even) triplets.push(beat);
  }
  return triplets.sort((a, b) => a.start - b.start);
}

/** The measures and triplet beats of one staff, which say where a slot snaps. */
class Grid {
  constructor(
    readonly frames: readonly Frame[],
    readonly triplets: readonly Span[],
  ) {}

  /** The triplet beat holding `slot`, from its start to before its end. */
  tripletAt(slot: number): Span | undefined {
    const triplet = this.triplets[this.tripletIndexAfter(slot) - 1];
    return triplet && slot < triplet.start + triplet.length ? triplet : undefined;
  }

  /** The start of the first triplet beat after `slot`, or Infinity. */
  nextTripletStart(slot: number): number {
    return this.triplets[this.tripletIndexAfter(slot)]?.start ?? Infinity;
  }

  /** The index of the first triplet beat starting after `slot`. */
  private tripletIndexAfter(slot: number): number {
    let low = 0;
    let high = this.triplets.length;
    while (low < high) {
      const mid = (low + high) >> 1;
      if (this.triplets[mid]!.start <= slot) low = mid + 1;
      else high = mid;
    }
    return low;
  }

  /** `raw` slots snapped: to thirds inside a triplet beat, else to the minimum value. */
  private snap(raw: number, inside: (triplet: Span, slot: number) => boolean): number {
    const slot = Math.round(raw);
    const triplet = this.tripletAt(slot);
    if (triplet && inside(triplet, slot)) {
      const third = triplet.length / 3;
      return triplet.start + Math.min(3, Math.max(0, Math.round((raw - triplet.start) / third))) * third;
    }
    return Math.round(raw / 3) * 3;
  }

  /** The notes of `track` in slots, snapped and clipped to the last measure. */
  place(track: SongTrack, slotTicks: number): { pitch: number; start: number; end: number }[] {
    const last = this.frames[this.frames.length - 1]!.end;
    return track.notes.map((note) => {
      const start = this.snap(note.startTick / slotTicks, (t, slot) => slot >= t.start && slot < t.start + t.length);
      let end = this.snap(note.endTick / slotTicks, (t, slot) => slot > t.start && slot < t.start + t.length);
      // The shortest note is a third of its triplet beat, or one minimum value of 3 slots.
      if (end <= start) end = start + (this.tripletAt(start)?.length ?? 9) / 3;
      return { pitch: note.pitch, start, end: Math.min(end, Math.max(last, start + 1)) };
    });
  }
}

/** The voices of the placed notes, each a run of chords that never overlap. */
function voicesOf(notes: { pitch: number; start: number; end: number }[]): Chord[][] {
  const voices: Chord[][] = [];
  const sorted = [...notes].sort((a, b) => a.start - b.start || b.pitch - a.pitch);
  for (const note of sorted) {
    const lastOf = (voice: Chord[]): Chord => voice[voice.length - 1]!;
    const join = (chord: Chord): void => {
      if (!chord.pitches.includes(note.pitch)) chord.pitches.push(note.pitch);
    };
    const fresh = (): Chord => ({ start: note.start, end: note.end, pitches: [note.pitch] });
    const same = voices.find((voice) => lastOf(voice).start === note.start && lastOf(voice).end === note.end);
    if (same) {
      join(lastOf(same));
      continue;
    }
    const free = voices.find((voice) => lastOf(voice).end <= note.start);
    if (free) free.push(fresh());
    else if (voices.length < MAX_VOICES) voices.push([fresh()]);
    else {
      const voice = voices.reduce((a, b) => (lastOf(b).end < lastOf(a).end ? b : a));
      const chord = lastOf(voice);
      if (chord.start === note.start) join(chord);
      else {
        chord.end = note.start;
        voice.push(fresh());
      }
    }
  }
  return voices;
}

/** The voices of one measure of a staff, from each voice's chords that overlap it. */
function measureOf(
  frame: Frame,
  voices: readonly Chord[][],
  grid: Grid,
  values: readonly Sized[],
  slotTicks: number,
  hideSlots: number,
): SheetEvent[][] {
  const timed = (start: number, sized: Sized): Timed => ({
    tick: start * slotTicks,
    ticks: sized.slots * slotTicks,
    value: sized.value,
  });
  const filled: { pitch: number; events: SheetEvent[] }[] = [];
  for (const chords of voices) {
    if (chords.length === 0) continue;
    const events: SheetEvent[] = [];
    const rest = (from: number, to: number): void => {
      const hidden = to - from < hideSlots;
      for (const piece of pieces(from, to, frame, grid, values)) {
        events.push({ kind: "rest", ...timed(piece.start, piece), hidden });
      }
    };
    let cursor = frame.start;
    for (const chord of chords) {
      const from = Math.max(chord.start, frame.start);
      const to = Math.min(chord.end, frame.end);
      if (from > cursor) rest(cursor, from);
      const split = pieces(from, to, frame, grid, values);
      const pitches = [...chord.pitches].sort((a, b) => a - b);
      split.forEach((piece, k) => {
        const tied = k < split.length - 1 || chord.end > to;
        events.push({ kind: "chord", ...timed(piece.start, piece), pitches, tied });
      });
      cursor = to;
    }
    if (cursor < frame.end) rest(cursor, frame.end);
    const all = chords.flatMap((chord) => chord.pitches);
    filled.push({ pitch: all.reduce((sum, pitch) => sum + pitch, 0) / all.length, events });
  }
  if (filled.length === 0) {
    const events: SheetEvent[] = [];
    for (const piece of pieces(frame.start, frame.end, frame, grid, values)) {
      events.push({ kind: "rest", ...timed(piece.start, piece), hidden: frame.end - frame.start < hideSlots });
    }
    return [events];
  }
  return filled.sort((a, b) => b.pitch - a.pitch).map((voice) => voice.events);
}

/** The note values that fill `from` to `to` of `frame`, split at each triplet beat's edge. */
function pieces(from: number, to: number, frame: Frame, grid: Grid, values: readonly Sized[]): (Sized & { start: number })[] {
  const out: (Sized & { start: number })[] = [];
  let at = from;
  while (at < to) {
    const triplet = grid.tripletAt(at);
    if (triplet) {
      const third = triplet.length / 3;
      const stop = Math.min(to, triplet.start + triplet.length);
      const thirds = (stop - at) / third;
      if (thirds === 1 || thirds === 2) {
        const base = (frame.denominator * 2) / thirds;
        out.push({ start: at, value: { base, dotted: false, triplet: true }, slots: stop - at });
        at = stop;
        continue;
      }
    }
    const stop = Math.min(to, grid.nextTripletStart(at));
    const left = stop - at;
    const offset = at - frame.start;
    const fits = (v: Sized): boolean => {
      if (v.slots > left) return false;
      if (offset % frame.beat === 0 && v.slots % frame.beat === 0) return true;
      const inOneBeat = Math.floor(offset / frame.beat) === Math.floor((offset + v.slots - 1) / frame.beat);
      return inOneBeat && offset % (v.value.dotted ? (v.slots * 2) / 3 : v.slots) === 0;
    };
    const sized =
      values.find(fits) ??
      values.find((v) => v.slots <= left) ?? { value: values[values.length - 1]!.value, slots: left };
    out.push({ start: at, ...sized });
    at += sized.slots;
  }
  return out;
}
