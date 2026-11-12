/**
 * The song notation: our own songs are written as text, one string per hand, and this module turns them
 * into MIDI files. `tools/make-our-songs.ts` and `tools/make-original-songs.ts` write through it,
 * and `tools/song-meter.ts` reads its fingers.
 *
 * `"E4:1 D4:1 | C4:2"` is E4 for one unit, D4 for one unit, then C4 for two. A unit is the beat of the
 * song's time signature, so an eighth in 6/8, split into the song's `steps`. `C4+E4+G4:2` is a chord,
 * `r` is a rest, and `|` ends a bar. A finger follows a slash: `E4/3:1` is E4 with finger 3. A chord
 * takes one finger per pitch in the same order, as in `C3+G3/5+1:4`.
 *
 * The pedal is a third line in the same notation. `P:4` holds it down for four units and `r:4` keeps it
 * up. Two `P` tokens in a row lift and press it again between them, as a pedal change does.
 *
 * Decisions, and what each costs:
 * - Every bar must fill its time signature exactly, or the run throws. A typo in a melody never ships.
 * - A finger is optional per token, and a token that names any finger names one for each pitch.
 * - Each file is format 1 with two tracks: the right hand first, holding the tempo, the time signature,
 *   the key signature and the pedal, then the left hand. `autoHands` gives them their hands by their mean pitch.
 * - Each note ends a 32nd before its full length, or a quarter of it when that is shorter, so two
 *   repeated notes show as two notes.
 * - A song without a pedal line writes no controller event, and one without a key writes no key
 *   signature, so a song that leaves both out keeps the same bytes.
 */
import type { MidiEvent, MidiFile } from "../src/midi/smf-read";
import { SUSTAIN_CONTROLLER } from "../src/midi/song";
import type { Finger } from "../src/theory/fingering";
import type { Key } from "../src/theory/key";

/** The ticks of a quarter note in every song of the notation. */
export const TICKS_PER_BEAT = 480;

/** How much earlier than its full length each note ends, in ticks: a 32nd. */
const GAP_TICKS = TICKS_PER_BEAT / 8;

/** The gap of a note `ticks` long: a 32nd, or a quarter of the note when that is shorter. */
function gap(ticks: number): number {
  return Math.min(GAP_TICKS, ticks / 4);
}

/** One song of two hands in the notation, before it is written. */
export interface TwoHandSong {
  title: string;
  /** The file's name in its folder under `public/songs/`. */
  file: string;
  /** From 1, the easiest, to 10. */
  difficulty: number;
  /** Quarter notes per minute. */
  bpm: number;
  numerator: number;
  denominator: number;
  /** The units each beat splits into, 1 when it is left out. 2 in 4/4 makes a unit an eighth. */
  steps?: number;
  right: string;
  left: string;
  /** The pedal line, `P` down and `r` up, or none for a song without the pedal. */
  pedal?: string;
  /** The key signature the file names, or none for a song that leaves its key to detection. */
  key?: Key;
}

/** The sharps of the signature of `key`, negative for flats, from -6 to 6. */
export function sharpsOf(key: Key): number {
  const major = key.mode === "major" ? key.tonic : (key.tonic + 3) % 12;
  const fifths = (major * 7) % 12;
  return fifths > 6 ? fifths - 12 : fifths;
}

/** The semitones of each note letter above C. */
const LETTER_STEPS: Record<string, number> = { C: 0, D: 2, E: 4, F: 5, G: 7, A: 9, B: 11 };

/** The MIDI note number of a name such as `C4`, `F#3` or `Bb2`, middle C being `C4`. */
export function pitchOf(name: string): number {
  const match = /^([A-G])([#b]?)(-?\d)$/.exec(name);
  if (!match) throw new Error(`"${name}" is not a note name`);
  const shift = match[2] === "#" ? 1 : match[2] === "b" ? -1 : 0;
  return (Number(match[3]) + 1) * 12 + LETTER_STEPS[match[1]!]! + shift;
}

/**
 * One note or chord of a hand: its pitches, none for a rest, the finger of each pitch where the text
 * names one, and its start and length in ticks.
 */
export interface HandNote {
  pitches: number[];
  fingers: (Finger | undefined)[];
  tick: number;
  ticks: number;
}

/** The fingers of `text`, such as `5+1`, for `count` pitches. Throws on a wrong count or a finger past 5. */
function fingersOf(text: string | undefined, count: number, where: string): (Finger | undefined)[] {
  if (text === undefined) return Array.from({ length: count }, () => undefined);
  const fingers = text.split("+").map(Number);
  if (fingers.length !== count || fingers.some((finger) => !Number.isInteger(finger) || finger < 1 || finger > 5)) {
    throw new Error(`${where}: "${text}" is not one finger from 1 to 5 per pitch`);
  }
  return fingers as Finger[];
}

/** One span of the pedal line: down or up, and its start and length in ticks. */
export interface PedalSpan {
  down: boolean;
  tick: number;
  ticks: number;
}

/**
 * The tokens of a line in the notation, each read by `read` from its name and its finger text, with
 * `unit` ticks per unit. Throws on a token that is not one, or a bar that does not fill.
 */
function parseLine<T>(
  text: string,
  unit: number,
  unitsPerBar: number,
  what: string,
  read: (name: string, fingerText: string | undefined, where: string) => T,
): { value: T; tick: number; ticks: number }[] {
  const out: { value: T; tick: number; ticks: number }[] = [];
  let tick = 0;
  text.split("|").forEach((bar, index) => {
    let units = 0;
    const where = `${what}, bar ${index + 1}`;
    for (const token of bar.trim().split(/\s+/)) {
      const [head, length] = token.split(":");
      const [name, fingerText] = (head ?? "").split("/");
      const count = Number(length);
      if (!name || !Number.isInteger(count) || count <= 0) throw new Error(`${where}: "${token}" is not a note`);
      out.push({ value: read(name, fingerText, where), tick, ticks: count * unit });
      tick += count * unit;
      units += count;
    }
    if (units !== unitsPerBar) throw new Error(`${where} holds ${units} units, not ${unitsPerBar}`);
  });
  return out;
}

/** The notes of a hand written in the notation, with `unit` ticks per unit. Throws on a bar that does not fill. */
export function parseHand(text: string, unit: number, unitsPerBar: number, what: string): HandNote[] {
  return parseLine(text, unit, unitsPerBar, what, (name, fingerText, where) => {
    const pitches = name === "r" ? [] : name.split("+").map(pitchOf);
    return { pitches, fingers: fingersOf(fingerText, pitches.length, where) };
  }).map(({ value, tick, ticks }) => ({ ...value, tick, ticks }));
}

/** The spans of a pedal line, with `unit` ticks per unit. Throws on a token other than `P` or `r`. */
export function parsePedal(text: string, unit: number, unitsPerBar: number, what: string): PedalSpan[] {
  return parseLine(text, unit, unitsPerBar, what, (name, fingerText, where) => {
    if ((name !== "P" && name !== "r") || fingerText !== undefined) throw new Error(`${where}: "${name}" is not P or r`);
    return name === "P";
  }).map(({ value, tick, ticks }) => ({ down: value, tick, ticks }));
}

/** A meta event of `type` with its raw `data` and its decoded `fields`. */
function meta(tick: number, type: number, data: number[], fields: object): MidiEvent {
  return { tick, delta: 0, kind: "meta", type, data: Uint8Array.from(data), ...fields } as MidiEvent;
}

/** The sustain events of the pedal line's `notes` on `channel`: down at each `P`, up at its end. */
function pedalEvents(spans: PedalSpan[], channel: number): MidiEvent[] {
  const events: MidiEvent[] = [];
  for (const span of spans) {
    if (!span.down) continue;
    events.push({ tick: span.tick, delta: 0, kind: "controller", channel, controller: SUSTAIN_CONTROLLER, value: 127 });
    events.push({ tick: span.tick + span.ticks, delta: 0, kind: "controller", channel, controller: SUSTAIN_CONTROLLER, value: 0 });
  }
  return events;
}

/** The events of one hand on `channel`, with `extra` events, sorted, with their deltas set and an end of track. */
function handEvents(head: MidiEvent[], notes: HandNote[], channel: number, velocity: number, extra: MidiEvent[] = []): MidiEvent[] {
  const events: MidiEvent[] = [...head];
  for (const note of notes) {
    for (const pitch of note.pitches) {
      events.push({ tick: note.tick, delta: 0, kind: "noteOn", channel, note: pitch, velocity });
      events.push({ tick: note.tick + note.ticks - gap(note.ticks), delta: 0, kind: "noteOff", channel, note: pitch, velocity: 0 });
    }
  }
  // A pedal change lifts before it presses, and a stable sort keeps that order at one tick.
  const ups = extra.filter((event) => event.kind === "controller" && event.value === 0);
  const downs = extra.filter((event) => !ups.includes(event));
  events.push(...ups, ...downs);
  // A stable sort by tick keeps each note-off before a note-on at the same tick, and the head first.
  events.sort((a, b) => a.tick - b.tick);
  const end = notes.reduce((last, note) => Math.max(last, note.tick + note.ticks), 0);
  events.push(meta(end, 0x2f, [], { meta: "endOfTrack" }));
  let previous = 0;
  for (const event of events) {
    event.delta = event.tick - previous;
    previous = event.tick;
  }
  return events;
}

/** The text of `name` as the bytes of a track name. */
function nameEvent(name: string): MidiEvent {
  return meta(0, 0x03, [...new TextEncoder().encode(name)], { meta: "trackName", text: name });
}

/** The ticks of one unit of `song`. */
function unitOf(song: TwoHandSong): number {
  return (TICKS_PER_BEAT * 4) / song.denominator / (song.steps ?? 1);
}

/** The notes of `song`'s right hand, left hand and pedal line, parsed. */
export function parseSong(song: TwoHandSong): { right: HandNote[]; left: HandNote[]; pedal: PedalSpan[] } {
  const unit = unitOf(song);
  const perBar = song.numerator * (song.steps ?? 1);
  return {
    right: parseHand(song.right, unit, perBar, `${song.title}, right hand`),
    left: parseHand(song.left, unit, perBar, `${song.title}, left hand`),
    pedal: song.pedal === undefined ? [] : parsePedal(song.pedal, unit, perBar, `${song.title}, pedal`),
  };
}

/** The MIDI file of `song`: the right hand's track, then the left hand's. */
export function twoHandMidi(song: TwoHandSong): MidiFile {
  const { right, left, pedal } = parseSong(song);
  const microseconds = Math.round(60_000_000 / song.bpm);
  const head = [
    nameEvent("Right hand"),
    meta(0, 0x51, [(microseconds >> 16) & 0xff, (microseconds >> 8) & 0xff, microseconds & 0xff], {
      meta: "tempo",
      microsecondsPerBeat: microseconds,
    }),
    meta(0, 0x58, [song.numerator, Math.log2(song.denominator), 24, 8], {
      meta: "timeSignature",
      numerator: song.numerator,
      denominator: song.denominator,
      clocksPerClick: 24,
      thirtySecondsPerBeat: 8,
    }),
  ];
  if (song.key !== undefined) {
    const sharps = sharpsOf(song.key);
    const minor = song.key.mode === "minor";
    head.push(meta(0, 0x59, [sharps & 0xff, minor ? 1 : 0], { meta: "keySignature", sharps, minor }));
  }
  return {
    format: 1,
    division: { kind: "ticks", ticksPerBeat: TICKS_PER_BEAT },
    tracks: [
      { events: handEvents(head, right, 0, 80, pedalEvents(pedal, 0)) },
      { events: handEvents([nameEvent("Left hand")], left, 1, 64) },
    ],
    problems: [],
  };
}

/** The fingers `song` writes, per hand, keyed by `fingerKey`. A pitch without a written finger is absent. */
export function writtenFingers(song: TwoHandSong): { right: Map<string, Finger>; left: Map<string, Finger> } {
  const { right, left } = parseSong(song);
  const of = (notes: HandNote[]) => {
    const map = new Map<string, Finger>();
    for (const note of notes) {
      note.pitches.forEach((pitch, at) => {
        const finger = note.fingers[at];
        if (finger !== undefined) map.set(fingerKey(note.tick, pitch), finger);
      });
    }
    return map;
  };
  return { right: of(right), left: of(left) };
}

/** The key a note's finger is stored under: its start tick and its pitch. */
export function fingerKey(tick: number, pitch: number): string {
  return `${tick}:${pitch}`;
}
