/**
 * The learner's keyboard: which keys it has, as a range of MIDI note numbers, and the presets of common
 * keyboard sizes.
 *
 * Only the first and the last key are stored. A preset is a shape, a number of keys and the note it
 * starts on, so a preset shifted by octaves is still that preset. The range is the piano the scene
 * draws and the keys the input listens to, so the screen matches the learner's keyboard key for key.
 *
 * Every range lies inside the 88 keys of a piano, MIDI notes 21 to 108, because the songs are piano
 * music. A range starts and ends on white keys, as every real keyboard does, and spans at least an
 * octave and its top note. Notes are named by `noteName` in `src/theory/note-names.ts`.
 */
import { FIRST_NOTE, LAST_NOTE, isBlack, type KeyRange } from "../render/key-layout";
import { noteName } from "../theory/note-names";

/** A range spans at least this many keys, one octave and its top note. */
export const MIN_KEYS = 13;

export interface KeyboardPreset {
  /** The number of keys, which is also the preset's id. */
  keys: number;
  /** The range at the octave the preset is usually built at. */
  range: KeyRange;
}

/** Common keyboard sizes, largest first. Each starts on the note such keyboards usually start on. */
export const KEYBOARD_PRESETS: readonly KeyboardPreset[] = [
  preset(21, 108), // 88 keys: every digital and acoustic piano
  preset(28, 103), // 76 keys: arranger keyboards and stage pianos, E to G
  preset(28, 100), // 73 keys: stage pianos, E to E
  preset(36, 96), // 61 keys: most home keyboards and synthesizers, C to C
  preset(36, 84), // 49 keys: controllers and small keyboards, C to C
  preset(41, 84), // 44 keys: compact keyboards, F to C
  preset(48, 84), // 37 keys: compact controllers and synthesizers, C to C
  preset(53, 84), // 32 keys: mini controllers, F to C
  preset(48, 72), // 25 keys: mini controllers, C to C
];

/** The range a learner starts with: a full piano. */
export const DEFAULT_RANGE: KeyRange = { first: FIRST_NOTE, last: LAST_NOTE };

function preset(first: number, last: number): KeyboardPreset {
  return { keys: last - first + 1, range: { first, last } };
}

/** The number of keys in `range`, black keys included. */
export function keyCount(range: KeyRange): number {
  return range.last - range.first + 1;
}

/** The preset `range` has the shape of, at any octave, or undefined for a custom range. */
export function presetOf(range: KeyRange): KeyboardPreset | undefined {
  return KEYBOARD_PRESETS.find(
    (p) => keyCount(p.range) === keyCount(range) && (range.first - p.range.first) % 12 === 0,
  );
}

/** The label of a preset, such as `61 keys, C2 to C7`. */
export function presetLabel(p: KeyboardPreset): string {
  return `${p.keys} keys, ${noteName(p.range.first)} to ${noteName(p.range.last)}`;
}

/**
 * A range the learner typed, made valid: put in order, clamped to the 88 keys, widened outwards to a
 * white key at each end, and grown upwards, then downwards, to at least `MIN_KEYS`.
 */
export function normalizeRange(first: number, last: number): KeyRange {
  let low = clamp(Math.round(Math.min(first, last)));
  let high = clamp(Math.round(Math.max(first, last)));
  while (isBlack(low)) low--;
  while (isBlack(high)) high++;
  while (high - low + 1 < MIN_KEYS && high < LAST_NOTE) high = nextWhite(high);
  while (high - low + 1 < MIN_KEYS && low > FIRST_NOTE) low = nextWhite(low, -1);
  return { first: low, last: high };
}

/**
 * `range` moved by whole octaves, as a keyboard's octave buttons move it. A move that would leave the
 * 88 keys is refused, and the range comes back unchanged.
 */
export function shiftOctaves(range: KeyRange, octaves: number): KeyRange {
  const first = range.first + 12 * octaves;
  const last = range.last + 12 * octaves;
  return first < FIRST_NOTE || last > LAST_NOTE ? range : { first, last };
}

export function inRange(pitch: number, range: KeyRange): boolean {
  return pitch >= range.first && pitch <= range.last;
}

/** `pitch` moved by whole octaves into `range`, to the nearest octave that fits. */
export function foldIntoRange(pitch: number, range: KeyRange): number {
  let folded = pitch;
  while (folded < range.first) folded += 12;
  while (folded > range.last) folded -= 12;
  return folded;
}

const STEPS: Readonly<Record<string, number>> = { C: 0, D: 2, E: 4, F: 5, G: 7, A: 9, B: 11, H: 11 };

/**
 * The MIDI note of a typed name, such as `C4`, `f#3`, `Bb0` or `C♯4`, or of a plain number such as `60`.
 * The German `H3` reads as `B3`, so a name the German locale writes reads back. `B` is always B.
 * Anything else, or a note outside MIDI's 0 to 127, gives undefined.
 */
export function parsePitch(text: string): number | undefined {
  const t = text.trim();
  const pitch = /^\d+$/.test(t)
    ? Number(t)
    : (() => {
        const m = /^([A-Ha-h])([#♯b♭]?)(-?\d+)$/.exec(t);
        if (m === null) return undefined;
        const accidental = m[2] === "#" || m[2] === "♯" ? 1 : m[2] === "" ? 0 : -1;
        return (Number(m[3]) + 1) * 12 + (STEPS[(m[1] as string).toUpperCase()] as number) + accidental;
      })();
  return pitch !== undefined && pitch >= 0 && pitch <= 127 ? pitch : undefined;
}

function clamp(pitch: number): number {
  return Math.min(LAST_NOTE, Math.max(FIRST_NOTE, pitch));
}

function nextWhite(pitch: number, step: 1 | -1 = 1): number {
  let next = pitch + step;
  while (isBlack(next)) next += step;
  return next;
}
