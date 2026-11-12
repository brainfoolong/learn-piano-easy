/**
 * Spelling: where a pitch sits on a staff, which accidental it carries, and the key signature.
 *
 * Decisions, and what each costs:
 * - A pitch is spelt with sharps in a sharp key and with flats in a flat key, as `keyAccidentals`
 *   says. A white key is always spelt by its own letter, so F major's B♮ reads B and F♯ major's E♯
 *   reads F♮. Double sharps and flats never appear.
 * - A staff position is a diatonic step: seven per octave, from 0 for the C of MIDI octave −1.
 *
 * Bounds: every function is constant time.
 */

import { type Key, keyAccidentals } from "../theory/key";
import { pitchClass } from "../theory/note-names";
import type { Clef } from "./quantize";

/** A pitch on the staff: its diatonic step and its alteration, −1 for a flat to 1 for a sharp. */
export interface Spelt {
  step: number;
  alter: number;
}

/** Each pitch class as a letter, 0 for C to 6 for B, and an alteration. */
const SHARP_SPELLING = [[0, 0], [0, 1], [1, 0], [1, 1], [2, 0], [3, 0], [3, 1], [4, 0], [4, 1], [5, 0], [5, 1], [6, 0]] as const;
const FLAT_SPELLING = [[0, 0], [1, -1], [1, 0], [2, -1], [2, 0], [3, 0], [4, -1], [4, 0], [5, -1], [5, 0], [6, -1], [6, 0]] as const;

/** The letters a signature alters, in the order it writes them. */
const SHARP_ORDER = [3, 0, 4, 1, 5, 2, 6];
const FLAT_ORDER = [6, 2, 5, 1, 4, 0, 3];

/** Where a treble signature writes each accidental, as steps. A bass one writes them two octaves down. */
const TREBLE_SHARP_STEPS = [38, 35, 39, 36, 33, 37, 34];
const TREBLE_FLAT_STEPS = [34, 37, 33, 36, 32, 35, 31];

/** The step of each clef's top line: F5 for treble and A3 for bass. */
export const TOP_STEP: Record<Clef, number> = { treble: 38, bass: 26 };

/** `pitch` spelt as `key` spells it, or with sharps when there is no key. */
export function spell(pitch: number, key: Key | undefined): Spelt {
  const flats = key !== undefined && keyAccidentals(key) === "flats";
  const [letter, alter] = (flats ? FLAT_SPELLING : SHARP_SPELLING)[pitchClass(pitch)]!;
  return { step: (Math.floor(pitch / 12) - 1) * 7 + letter, alter };
}

/** A key signature: the alteration it applies, and the letters it alters in the order written. */
export interface Signature {
  alter: 1 | -1;
  letters: number[];
}

/** The signature of `key`, empty for C major, A minor, or no key. */
export function signatureOf(key: Key | undefined): Signature {
  if (!key) return { alter: 1, letters: [] };
  const major = key.mode === "major" ? key.tonic : pitchClass(key.tonic + 3);
  // Seven semitones is one fifth, and 7 × 7 ≡ 1 (mod 12), so this counts the fifths up from C.
  const fifths = (7 * major) % 12;
  if (keyAccidentals(key) === "flats") return { alter: -1, letters: FLAT_ORDER.slice(0, (12 - fifths) % 12) };
  return { alter: 1, letters: SHARP_ORDER.slice(0, fifths) };
}

/** The steps at which `signature` writes its accidentals on a staff of `clef`. */
export function signatureSteps(signature: Signature, clef: Clef): number[] {
  const steps = signature.alter === 1 ? TREBLE_SHARP_STEPS : TREBLE_FLAT_STEPS;
  const shift = clef === "treble" ? 0 : -14;
  return steps.slice(0, signature.letters.length).map((step) => step + shift);
}
