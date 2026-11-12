/**
 * The engraver: one measure of a sheet becomes positioned symbols and the SVG that draws them.
 *
 * Decisions, and what each costs:
 * - A measure engraves every staff at once, so notes struck together line up across a grand staff.
 *   Each distinct onset is a column, and the stretch after it grows with the square root of its
 *   length, so a whole note takes more room than a quarter but not four times as much.
 * - The upper voice of a two-voice measure stems up and the lower stems down. A lone chord stems away
 *   from the middle line, by the note farthest from it, and a note on the middle line stems down. A
 *   beamed group takes one direction from all its notes.
 * - Eighths and shorter in one beat share a beam, and a rest breaks it. The beat is the signature's,
 *   except that 6/8, 9/8 and 12/8 beam in threes. A second beam joins neighbours that both have it, and
 *   a lone one is a stub towards its neighbour.
 * - An accidental shows when a note's alteration differs from the last one on its step in the measure,
 *   or from the key signature before that. Both voices share that memory, and a note tied in from the
 *   last measure shows none. Accidentals within a sixth of each other take separate columns.
 * - A tie to the next measure runs to the barline, and the next measure starts its half from the
 *   left. Ties bow away from the stems.
 * - A rest that fills its measure is drawn as a whole rest in the middle, whatever the meter.
 * - The SVG uses `currentColor`, so the page's colour styles it. Each chord is a group with its staff,
 *   voice and tick as data attributes, for the sheet views to mark.
 *
 * Bounds: the work is linear in the measure's events, with a sort of its chords and onsets.
 *
 * Gaps: a key change writes no naturals to cancel the old signature. Two voices whose accidentals or
 * seconds meet at one onset may overlap. Slurs, dynamics and fingering are not drawn. No goal owns
 * these yet.
 */

import type { Key } from "../theory/key";
import { DIGITS, GLYPHS, type Glyph, glyphSvg, HEAD_WIDTH, restGlyph, round, WHOLE_HEAD_WIDTH } from "./glyphs";
import type { Clef, Sheet, SheetChord, SheetEvent, SheetMeasure, SheetStaff } from "./quantize";
import { type Signature, signatureOf, signatureSteps, spell, TOP_STEP } from "./spelling";

export type Accidental = "sharp" | "flat" | "natural";
export type StemDirection = "up" | "down";

export interface EngraveOptions {
  /** Pixels per staff space. */
  space: number;
  /** The key in force, or undefined for no signature. */
  key: Key | undefined;
  /** Which signs open the measure, as at the start of a line or where one changes. */
  clef: boolean;
  keySignature: boolean;
  timeSignature: boolean;
  /** Stretches the measure to this many pixels when it is wider than the natural width. */
  width: number | null;
}

export const DEFAULT_ENGRAVE: EngraveOptions = { space: 10, key: undefined, clef: false, keySignature: false, timeSignature: false, width: null };

export interface EngravedNote {
  pitch: number;
  step: number;
  x: number;
  y: number;
  accidental: Accidental | null;
}

export interface EngravedChord {
  voice: number;
  tick: number;
  /** The left edge of its column. */
  x: number;
  notes: EngravedNote[];
  stem: StemDirection | null;
  stemX: number;
  /** The y of the stem's free end. */
  stemTip: number;
  /** The index of its beam in the staff's `beams`, or null when it has a flag or none. */
  beam: number | null;
}

export interface EngravedRest {
  voice: number;
  tick: number;
  x: number;
  y: number;
  base: number;
}

export interface EngravedStaff {
  track: number;
  clef: Clef;
  /** The y of the top line. */
  top: number;
  chords: EngravedChord[];
  rests: EngravedRest[];
  /** Each beam as the indexes of its chords in `chords`. */
  beams: number[][];
}

export interface EngravedMeasure {
  index: number;
  width: number;
  height: number;
  /** The x of each onset's column, in tick order, for a cursor to follow. */
  columns: { tick: number; x: number }[];
  staves: EngravedStaff[];
  svg: string;
}

/** Staff spaces above the first staff, below the last, and between two staves. */
const TOP_PAD = 5;
const BOTTOM_PAD = 5;
const STAFF_GAP = 8;
const STEM = 0.12;
const ACCIDENTAL_COLUMN = 1.1;
const ACCIDENTALS: Record<number, Accidental> = { [-1]: "flat", 0: "natural", 1: "sharp" };

interface NoteLayout {
  pitch: number;
  step: number;
  alter: number;
  accidental: Accidental | null;
  accColumn: number;
  /** Staff spaces from the chord's column, for the second of a second. */
  shift: number;
  tiedIn: boolean;
}

interface ChordLayout {
  voice: number;
  event: SheetChord;
  levels: number;
  stem: StemDirection | null;
  beam: number | null;
  notes: NoteLayout[];
  /** Staff spaces the whole chord moves right, clear of the other voice. */
  offset: number;
  accColumns: number;
  headWidth: number;
}

interface StaffLayout {
  staff: SheetStaff;
  top: number;
  middle: number;
  voices: SheetEvent[][];
  chords: ChordLayout[];
  beams: number[][];
}

/** Measure `index` of `sheet`, engraved with every staff. */
export function engraveMeasure(sheet: Sheet, index: number, overrides: Partial<EngraveOptions> = {}): EngravedMeasure {
  const options = { ...DEFAULT_ENGRAVE, ...overrides };
  const S = options.space;
  const measure = sheet.measures[index]!;
  const signature = signatureOf(options.key);
  const layouts = sheet.staves.map((staff) => layoutStaff(staff, index, measure, sheet.ticksPerQuarter, options.key, signature));

  // The header, in staff spaces.
  let cursor = 0.8;
  const clefX = cursor + 0.2;
  if (options.clef) cursor = clefX + 2.4 + 0.6;
  const keyX = cursor;
  if (options.keySignature && signature.letters.length > 0) cursor += signature.letters.length + 0.6;
  const timeX = cursor + 0.2;
  const timeDigits = [String(measure.numerator), String(measure.denominator)];
  if (options.timeSignature) cursor = timeX + 1.2 * Math.max(...timeDigits.map((d) => d.length)) + 0.8;
  const contentStart = cursor;

  // The columns: each onset's room before it, for accidentals, and its stretch after.
  const onsets = new Map<number, { pad: number; extra: number }>();
  const onset = (tick: number) => onsets.get(tick) ?? onsets.set(tick, { pad: 0, extra: 0 }).get(tick)!;
  for (const layout of layouts) {
    for (const event of layout.voices.flat()) {
      const entry = onset(event.tick);
      if (event.value.dotted) entry.extra = Math.max(entry.extra, 0.7);
    }
    for (const chord of layout.chords) {
      const entry = onset(chord.event.tick);
      const left = chord.notes.some((n) => n.shift < 0) ? chord.headWidth : 0;
      const right = chord.notes.some((n) => n.shift > 0) ? chord.headWidth : 0;
      entry.pad = Math.max(entry.pad, left + (chord.accColumns > 0 ? chord.accColumns * ACCIDENTAL_COLUMN + 0.2 : 0));
      entry.extra = Math.max(entry.extra, chord.offset + right + chord.headWidth - HEAD_WIDTH);
    }
  }
  const ticks = [...onsets.keys()].sort((a, b) => a - b);
  const end = measure.tick + measure.ticks;
  const gaps = ticks.map((tick, i) => {
    const length = (ticks[i + 1] ?? end) - tick;
    const { extra } = onsets.get(tick)!;
    return Math.max(2.4, 1.4 + 2.4 * Math.sqrt(length / sheet.ticksPerQuarter)) + extra;
  });
  const pads = ticks.map((tick) => onsets.get(tick)!.pad);
  const sum = (values: number[]) => values.reduce((a, b) => a + b, 0);
  const natural = contentStart + 1 + sum(pads) + sum(gaps) + (ticks.length === 0 ? 4 : 0);
  const gapTotal = sum(gaps);
  const stretch = options.width !== null && options.width / S > natural && gapTotal > 0 ? 1 + (options.width / S - natural) / gapTotal : 1;
  const width = (natural + (stretch - 1) * gapTotal) * S;
  const columnX = new Map<number, number>();
  let x = contentStart + 1;
  ticks.forEach((tick, i) => {
    x += pads[i]!;
    columnX.set(tick, x * S);
    x += gaps[i]! * stretch;
  });

  const height = (TOP_PAD + BOTTOM_PAD + layouts.length * 4 + Math.max(0, layouts.length - 1) * STAFF_GAP) * S;
  const parts: string[] = [];
  const staves = layouts.map((layout, s) => {
    const top = (TOP_PAD + s * (4 + STAFF_GAP)) * S;
    const drawn = drawStaff(layout, top, S, measure, sheet.ticksPerQuarter, columnX, width, contentStart * S, parts);
    if (options.clef) {
      const glyph = layout.staff.clef === "treble" ? GLYPHS.treble : GLYPHS.bass;
      parts.push(glyphSvg(glyph, clefX * S, top + (layout.staff.clef === "treble" ? 3 : 1) * S, S));
    }
    if (options.keySignature) {
      const glyph = signature.alter === 1 ? GLYPHS.sharp : GLYPHS.flat;
      signatureSteps(signature, layout.staff.clef).forEach((step, i) => {
        parts.push(glyphSvg(glyph, (keyX + i) * S, top + ((layout.top - step) / 2) * S, S));
      });
    }
    if (options.timeSignature) {
      const columns = Math.max(...timeDigits.map((d) => d.length));
      timeDigits.forEach((digits, row) => {
        const left = timeX + (1.2 * (columns - digits.length)) / 2;
        [...digits].forEach((digit, i) => {
          parts.push(glyphSvg(DIGITS[Number(digit)]!, (left + 1.2 * i) * S, top + (1 + 2 * row) * S, S));
        });
      });
    }
    return drawn;
  });

  // The staff lines and the barline, which joins every staff.
  const lines: string[] = [];
  for (const staff of staves) for (let k = 0; k < 5; k++) lines.push(`M0 ${round(staff.top + k * S)}H${round(width)}`);
  if (staves.length > 0) {
    const barX = round(width - (STEM / 2) * S);
    lines.push(`M${barX} ${round(staves[0]!.top)}V${round(staves.at(-1)!.top + 4 * S)}`);
  }
  const frame = `<path d="${lines.join("")}" fill="none" stroke="currentColor" stroke-width="${round(0.1 * S)}"/>`;
  const svg =
    `<svg xmlns="http://www.w3.org/2000/svg" width="${round(width)}" height="${round(height)}" viewBox="0 0 ${round(width)} ${round(height)}"` +
    ` overflow="visible" fill="currentColor">${frame}${parts.join("")}</svg>`;
  const columns = ticks.map((tick) => ({ tick, x: columnX.get(tick)! }));
  return { index, width, height, columns, staves, svg };
}

/** The ticks one beam spans in `measure`: its beat, or three eighths in a compound meter. */
function beamTicksOf(measure: SheetMeasure, ticksPerQuarter: number): number {
  const beat = (ticksPerQuarter * 4) / measure.denominator;
  const compound = measure.denominator === 8 && measure.numerator % 3 === 0 && measure.numerator > 3;
  return compound ? beat * 3 : beat;
}

/** The stem that points away from `middle` for notes at `steps`. */
function directionOf(steps: readonly number[], middle: number): StemDirection {
  return Math.max(...steps) - middle >= middle - Math.min(...steps) ? "down" : "up";
}

/** Everything about one staff's measure that its horizontal place does not decide. */
function layoutStaff(staff: SheetStaff, index: number, measure: SheetMeasure, ticksPerQuarter: number, key: Key | undefined, signature: Signature): StaffLayout {
  const top = TOP_STEP[staff.clef];
  const middle = top - 4;
  const voices = staff.measures[index] ?? [];
  const two = voices.length >= 2;
  const tiedIn = new Set<number>();
  for (const voice of (index > 0 ? staff.measures[index - 1] : undefined) ?? []) {
    const last = voice.at(-1);
    if (last?.kind === "chord" && last.tied) for (const pitch of last.pitches) tiedIn.add(pitch);
  }

  const beamTicks = beamTicksOf(measure, ticksPerQuarter);
  const chords: ChordLayout[] = [];
  const beams: number[][] = [];
  voices.forEach((events, voice) => {
    let group: number[] = [];
    let groupBeat = -1;
    const close = () => {
      if (group.length > 1) {
        for (const c of group) chords[c]!.beam = beams.length;
        beams.push(group);
      }
      group = [];
    };
    for (const event of events) {
      if (event.kind === "rest") {
        close();
        continue;
      }
      const base = event.value.base;
      const levels = base >= 8 ? Math.round(Math.log2(base)) - 2 : 0;
      const beat = Math.floor((event.tick - measure.tick) / beamTicks);
      if (levels === 0 || beat !== groupBeat) close();
      const notes = event.pitches.map((pitch): NoteLayout => {
        const { step, alter } = spell(pitch, key);
        return { pitch, step, alter, accidental: null, accColumn: 0, shift: 0, tiedIn: event.tick === measure.tick && tiedIn.has(pitch) };
      });
      const stem = base < 2 ? null : two ? (voice === 0 ? "up" : "down") : directionOf(notes.map((n) => n.step), middle);
      const headWidth = base < 2 ? WHOLE_HEAD_WIDTH : HEAD_WIDTH;
      chords.push({ voice, event, levels, stem, beam: null, notes, offset: 0, accColumns: 0, headWidth });
      if (levels > 0) {
        group.push(chords.length - 1);
        groupBeat = beat;
      }
    }
    close();
  });

  if (!two) {
    for (const beam of beams) {
      const stem = directionOf(beam.flatMap((c) => chords[c]!.notes.map((n) => n.step)), middle);
      for (const c of beam) chords[c]!.stem = stem;
    }
  }

  for (const chord of chords) {
    // The upper note of a second sits beside the stem: right of an up stem, left of a down one.
    const up = chord.stem !== "down";
    let previous: NoteLayout | undefined;
    for (const note of up ? chord.notes : [...chord.notes].reverse()) {
      if (previous && Math.abs(note.step - previous.step) === 1 && previous.shift === 0) note.shift = up ? chord.headWidth : -chord.headWidth;
      previous = note;
    }
  }

  const keyAlter = new Map(signature.letters.map((letter) => [letter, signature.alter]));
  const memory = new Map<number, number>();
  const inTime = [...chords].sort((a, b) => a.event.tick - b.event.tick || a.voice - b.voice);
  for (const chord of inTime) {
    for (const note of chord.notes) {
      const current = memory.get(note.step) ?? keyAlter.get(note.step % 7) ?? 0;
      if (!note.tiedIn && note.alter !== current) note.accidental = ACCIDENTALS[note.alter]!;
      memory.set(note.step, note.alter);
    }
    const columns: number[][] = [];
    for (const note of [...chord.notes].reverse()) {
      if (!note.accidental) continue;
      let column = 0;
      while (columns[column]?.some((step) => Math.abs(step - note.step) < 6)) column++;
      (columns[column] ??= []).push(note.step);
      note.accColumn = column;
    }
    chord.accColumns = columns.length;
  }

  // A lower voice whose notes meet the upper voice's at one onset moves right of them.
  for (const lower of chords) {
    if (lower.voice !== 1) continue;
    const upper = chords.find((c) => c.voice === 0 && c.event.tick === lower.event.tick);
    if (upper && Math.min(...upper.notes.map((n) => n.step)) - Math.max(...lower.notes.map((n) => n.step)) <= 1) lower.offset = upper.headWidth;
  }

  return { staff, top, middle, voices, chords, beams };
}

/** Draws `layout` with its top line at `top`, appending SVG to `parts`, and returns where it put each symbol. */
function drawStaff(
  layout: StaffLayout,
  top: number,
  S: number,
  measure: SheetMeasure,
  ticksPerQuarter: number,
  columnX: ReadonlyMap<number, number>,
  width: number,
  contentStart: number,
  parts: string[],
): EngravedStaff {
  const yOf = (step: number) => top + ((layout.top - step) / 2) * S;
  const middleY = yOf(layout.middle);
  const two = layout.voices.length >= 2;

  const chords = layout.chords.map((chord): EngravedChord => {
    const x = columnX.get(chord.event.tick)!;
    const left = x + chord.offset * S;
    const notes = chord.notes.map((n) => ({ pitch: n.pitch, step: n.step, x: left + n.shift * S, y: yOf(n.step), accidental: n.accidental }));
    const ys = notes.map((n) => n.y);
    const length = (3.5 + Math.max(0, chord.levels - 1) * 0.6) * S;
    let stemX = 0;
    let stemTip = 0;
    if (chord.stem === "up") {
      stemX = left + chord.headWidth * S - (STEM / 2) * S;
      stemTip = Math.min(Math.min(...ys) - length, middleY);
    } else if (chord.stem === "down") {
      stemX = left + (STEM / 2) * S;
      stemTip = Math.max(Math.max(...ys) + length, middleY);
    }
    return { voice: chord.voice, tick: chord.event.tick, x, notes, stem: chord.stem, stemX, stemTip, beam: chord.beam };
  });

  // Each beam is a straight line that leaves every stem at least its length, sloped by at most a space.
  const beamSvg: string[] = [];
  for (const beam of layout.beams) {
    const group = beam.map((c) => chords[c]!);
    const levels = beam.map((c) => layout.chords[c]!.levels);
    const up = group[0]!.stem === "up";
    const sign = up ? -1 : 1;
    const outer = group.map((c) => (up ? Math.min(...c.notes.map((n) => n.y)) : Math.max(...c.notes.map((n) => n.y))));
    const reach = Math.max(3.5, 2.5 + Math.max(...levels) * 0.75) * S;
    const x0 = group[0]!.stemX;
    const span = group.at(-1)!.stemX - x0;
    const rise = Math.max(-S, Math.min(S, outer.at(-1)! - outer[0]!));
    const slope = span > 0 ? rise / span : 0;
    const starts = group.map((c, i) => outer[i]! + sign * reach - slope * (c.stemX - x0));
    const y0 = up ? Math.min(...starts) : Math.max(...starts);
    const lineAt = (x: number) => y0 + slope * (x - x0);
    for (const c of group) c.stemTip = lineAt(c.stemX);
    const thickness = 0.5 * S * -sign;
    const segment = (xa: number, xb: number, level: number) => {
      const off = (level - 1) * 0.75 * S * -sign;
      const ya = lineAt(xa) + off;
      const yb = lineAt(xb) + off;
      beamSvg.push(`M${round(xa)} ${round(ya)}L${round(xb)} ${round(yb)}L${round(xb)} ${round(yb + thickness)}L${round(xa)} ${round(ya + thickness)}Z`);
    };
    const half = (STEM / 2) * S;
    segment(x0 - half, group.at(-1)!.stemX + half, 1);
    for (let level = 2; level <= Math.max(...levels); level++) {
      group.forEach((c, i) => {
        if (levels[i]! < level) return;
        if ((levels[i + 1] ?? 0) >= level) segment(c.stemX - half, group[i + 1]!.stemX + half, level);
        else if ((levels[i - 1] ?? 0) < level) segment(i > 0 ? c.stemX - S : c.stemX - half, i > 0 ? c.stemX + half : c.stemX + S, level);
      });
    }
  }

  layout.chords.forEach((chord, i) => {
    const drawn = chords[i]!;
    const out: string[] = [];
    const head = chord.event.value.base < 2 ? GLYPHS.wholeHead : chord.event.value.base === 2 ? GLYPHS.halfHead : GLYPHS.blackHead;
    const ledgers = new Map<number, [number, number]>();
    const bottom = layout.top - 8;
    drawn.notes.forEach((note, k) => {
      out.push(glyphSvg(head, note.x, note.y, S));
      const layoutNote = chord.notes[k]!;
      if (note.accidental) {
        const leftmost = Math.min(...drawn.notes.map((n) => n.x));
        const ax = leftmost - (0.2 + (layoutNote.accColumn + 1) * ACCIDENTAL_COLUMN) * S;
        out.push(glyphSvg(GLYPHS[note.accidental], ax, note.y, S));
      }
      const ledgerSteps: number[] = [];
      for (let s = layout.top + 2; s <= note.step; s += 2) ledgerSteps.push(s);
      for (let s = bottom - 2; s >= note.step; s -= 2) ledgerSteps.push(s);
      for (const s of ledgerSteps) {
        const [a, b] = ledgers.get(s) ?? [Infinity, -Infinity];
        ledgers.set(s, [Math.min(a, note.x), Math.max(b, note.x + chord.headWidth * S)]);
      }
      if (chord.event.value.dotted) {
        const right = Math.max(...drawn.notes.map((n) => n.x)) + chord.headWidth * S;
        const onLine = (layout.top - note.step) % 2 === 0;
        const dy = onLine ? (two && chord.voice === 1 ? 0.5 : -0.5) * S : 0;
        out.push(glyphSvg(GLYPHS.dot, right + 0.35 * S, note.y + dy, S));
      }
    });
    for (const [s, [a, b]] of ledgers) {
      out.push(`<path d="M${round(a - 0.4 * S)} ${round(yOf(s))}H${round(b + 0.4 * S)}" stroke="currentColor" stroke-width="${round(0.14 * S)}"/>`);
    }
    if (drawn.stem) {
      const ys = drawn.notes.map((n) => n.y);
      const start = drawn.stem === "up" ? Math.max(...ys) : Math.min(...ys);
      out.push(`<path d="M${round(drawn.stemX)} ${round(start)}V${round(drawn.stemTip)}" stroke="currentColor" stroke-width="${round(STEM * S)}"/>`);
      if (drawn.beam === null) {
        for (let k = 0; k < chord.levels; k++) {
          const y = drawn.stemTip + (drawn.stem === "up" ? k : -k) * 0.8 * S;
          out.push(glyphSvg(GLYPHS.flag, drawn.stemX - (STEM / 2) * S, y, S, drawn.stem === "down"));
        }
      }
    }
    parts.push(`<g class="chord" data-staff="${layout.staff.track}" data-voice="${chord.voice}" data-tick="${chord.event.tick}">${out.join("")}</g>`);
  });
  if (beamSvg.length > 0) parts.push(`<path d="${beamSvg.join("")}"/>`);

  // Rests: the upper voice's raised and the lower's dropped, by whole spaces, clear of the other voice.
  const rests: EngravedRest[] = [];
  layout.voices.forEach((events, voice) => {
    for (const event of events) {
      if (event.kind !== "rest" || event.hidden) continue;
      const whole = event.ticks === measure.ticks;
      const base = whole ? 1 : event.value.base;
      const glyph = restGlyph(base);
      let shift = two ? (voice === 0 ? (base <= 2 ? -1 : -2) : 2) : 0;
      const others = layout.chords.flatMap((chord, i) => {
        const overlaps = chord.voice !== voice && chord.event.tick < event.tick + event.ticks && event.tick < chord.event.tick + chord.event.ticks;
        return overlaps ? chords[i]!.notes.map((n) => (n.y - middleY) / S) : [];
      });
      if (two && others.length > 0) {
        shift = voice === 0 ? Math.min(shift, Math.floor(Math.min(...others) - 2.5)) : Math.max(shift, Math.ceil(Math.max(...others) + 2.5));
      }
      const x = whole ? (contentStart + width) / 2 - (glyph.width / 2) * S : columnX.get(event.tick)!;
      const y = middleY + shift * S;
      parts.push(glyphSvg(glyph, x, y, S));
      if (event.value.dotted && !whole) parts.push(glyphSvg(GLYPHS.dot, x + (glyph.width + 0.3) * S, y - 0.5 * S, S));
      rests.push({ voice, tick: event.tick, x, y, base });
    }
  });

  drawTies(layout, chords, S, width, contentStart, parts);
  drawTriplets(layout, chords, top, S, measure, ticksPerQuarter, columnX, parts);
  return { track: layout.staff.track, clef: layout.staff.clef, top, chords, rests, beams: layout.beams };
}

/** The ties of a staff: to the next chord of the voice, to the barline, or in from the last measure. */
function drawTies(layout: StaffLayout, chords: EngravedChord[], S: number, width: number, contentStart: number, parts: string[]): void {
  const byEvent = new Map(layout.chords.map((chord, i) => [chord.event as SheetEvent, i]));
  const arcs: string[] = [];
  layout.chords.forEach((chord, i) => {
    const drawn = chords[i]!;
    const side = (note: EngravedNote) => (drawn.stem === "up" ? 1 : drawn.stem === "down" ? -1 : note.step >= layout.middle ? -1 : 1);
    const headRight = (note: EngravedNote) => note.x + chord.headWidth * S;
    chord.notes.forEach((layoutNote, k) => {
      const note = drawn.notes[k]!;
      if (layoutNote.tiedIn) arcs.push(arc(contentStart - 0.2 * S, note.x - 0.15 * S, note.y, side(note), S));
      if (!chord.event.tied) return;
      const events = layout.voices[chord.voice]!;
      const next = events[events.indexOf(chord.event) + 1];
      const target = next ? byEvent.get(next) : undefined;
      const to = target === undefined ? undefined : chords[target]!.notes.find((n) => n.pitch === note.pitch);
      arcs.push(arc(headRight(note) + 0.15 * S, to ? to.x - 0.15 * S : width - 0.5 * S, note.y, side(note), S));
    });
  });
  if (arcs.length > 0) parts.push(`<path d="${arcs.join("")}"/>`);
}

/** A tie from `x1` to `x2` beside a note at `y`, bowing down for `side` 1 and up for −1. */
function arc(x1: number, x2: number, y: number, side: number, S: number): string {
  const dx = Math.max(x2 - x1, 0.5 * S);
  const y0 = y + side * 0.45 * S;
  const bow = Math.min(S, 0.25 * S + dx * 0.08) * side;
  const thin = 0.18 * S * side;
  const c1 = x1 + dx * 0.25;
  const c2 = x1 + dx * 0.75;
  const xb = x1 + dx;
  return (
    `M${round(x1)} ${round(y0)}C${round(c1)} ${round(y0 + bow)} ${round(c2)} ${round(y0 + bow)} ${round(xb)} ${round(y0)}` +
    `C${round(c2)} ${round(y0 + bow - thin)} ${round(c1)} ${round(y0 + bow - thin)} ${round(x1)} ${round(y0)}Z`
  );
}

/** A small 3 beyond the stems of each triplet beat of each voice. */
function drawTriplets(
  layout: StaffLayout,
  chords: EngravedChord[],
  top: number,
  S: number,
  measure: SheetMeasure,
  ticksPerQuarter: number,
  columnX: ReadonlyMap<number, number>,
  parts: string[],
): void {
  const beat = (ticksPerQuarter * 4) / measure.denominator;
  const byEvent = new Map(layout.chords.map((chord, i) => [chord.event as SheetEvent, chords[i]!]));
  const scale = 0.55 * S;
  for (const events of layout.voices) {
    const groups = new Map<number, SheetEvent[]>();
    for (const event of events) {
      if (!event.value.triplet) continue;
      const key = Math.floor((event.tick - measure.tick) / beat);
      groups.set(key, [...(groups.get(key) ?? []), event]);
    }
    for (const group of groups.values()) {
      const xs = group.map((e) => columnX.get(e.tick)!);
      const center = (Math.min(...xs) + Math.max(...xs) + HEAD_WIDTH * S) / 2;
      const stemmed = group.map((e) => byEvent.get(e)).filter((c): c is EngravedChord => c?.stem != null);
      let y = top - 1.5 * S;
      if (stemmed.length > 0) {
        const up = stemmed[0]!.stem === "up";
        const tips = stemmed.map((c) => c.stemTip);
        y = up ? Math.min(...tips) - 1.2 * S : Math.max(...tips) + 1.2 * S;
      }
      const three: Glyph = DIGITS[3]!;
      parts.push(glyphSvg(three, center - (three.width / 2) * scale, y, scale));
    }
  }
}
