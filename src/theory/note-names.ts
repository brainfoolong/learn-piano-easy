/**
 * Note names: the one home for how a MIDI pitch is written, in letters or solfège, with sharps or flats,
 * with or without its octave.
 *
 * Decisions, and what each costs:
 * - Solfège is fixed do: Do is always C, whatever the key. It then follows the letters one for one, and
 *   needs no key to name a note. A learner of movable do reads the key and counts from its tonic.
 * - The seventh syllable is Si, as most fixed-do countries write it, and the fifth is Sol.
 * - An accidental is written ♯ or ♭, never `#` or `b`, so `Bb` cannot be read as two notes. Typed
 *   names still accept both, through `parsePitch` in `src/keyboard/range.ts`.
 * - A black key is spelled with sharps or flats as a whole, never mixed. Which one a key uses is
 *   `keyAccidentals` in `src/theory/key.ts`, so a name follows the song's key.
 * - The octave is scientific: 60 is C4, and 21 is A0. A pitch below 12 has octave -1.
 * - Letters follow the locale, the live one unless a style names its own. German letters call B an H,
 *   and B♭ a B, as German teaching books do. The accidentals stay ♯ and ♭, never *Cis* or *Es*, so a
 *   name keeps one shape in every locale. Solfège is the same in every locale.
 * - Code that keys on a letter, such as the answers of a `read-note` step, names `locale: "en"`, and
 *   shows the letter through its catalog.
 *
 * Bounds: every name is a table lookup, with no allocation beyond the returned text.
 */
import { liveLocale } from "../i18n/live";
import type { Locale } from "../i18n/locale";

/** How a note's letter is written: `C D E` or `Do Re Mi`. */
export type NamingSystem = "letters" | "solfege";

/** How a black key is spelled: C♯ or D♭. */
export type Accidentals = "sharps" | "flats";

/** How a name is written. Every field is optional, and a missing one takes `DEFAULT_NAME_STYLE`'s. */
export interface NameStyle {
  system?: NamingSystem;
  accidentals?: Accidentals;
  /** Whether the octave number follows the name, as in `C4`. */
  octave?: boolean;
  /** The locale whose letters name the note. Missing, it is the live locale. */
  locale?: Locale;
}

/** Letters, with sharps, with the octave: 61 is `C♯4`. */
export const DEFAULT_NAME_STYLE: Readonly<Required<Omit<NameStyle, "locale">>> = { system: "letters", accidentals: "sharps", octave: true };

const LETTERS = ["C", "D", "E", "F", "G", "A", "B"] as const;
const GERMAN_LETTERS = ["C", "D", "E", "F", "G", "A", "H"] as const;
const SOLFEGE = ["Do", "Re", "Mi", "Fa", "Sol", "La", "Si"] as const;

/** Each pitch class as a letter index and an accidental: 0 natural, 1 sharp, -1 flat. */
const SHARP_SPELLING: readonly (readonly [number, number])[] = [
  [0, 0], [0, 1], [1, 0], [1, 1], [2, 0], [3, 0], [3, 1], [4, 0], [4, 1], [5, 0], [5, 1], [6, 0],
];
const FLAT_SPELLING: readonly (readonly [number, number])[] = [
  [0, 0], [1, -1], [1, 0], [2, -1], [2, 0], [3, 0], [4, -1], [4, 0], [5, -1], [5, 0], [6, -1], [6, 0],
];

/** The pitch class of `pitch`, from 0 for C to 11 for B, for any integer, negative ones included. */
export function pitchClass(pitch: number): number {
  return ((pitch % 12) + 12) % 12;
}

/** The scientific octave of `pitch`: 4 for 60 to 71. */
export function octaveOf(pitch: number): number {
  return Math.floor(pitch / 12) - 1;
}

/** The name of pitch class `pc` (0 to 11, or any integer folded onto them) without an octave, such as `F♯` or `Fa♯`. */
export function pitchClassName(pc: number, style: NameStyle = {}): string {
  const spelling = (style.accidentals ?? DEFAULT_NAME_STYLE.accidentals) === "flats" ? FLAT_SPELLING : SHARP_SPELLING;
  const [letter, accidental] = spelling[pitchClass(pc)]!;
  const solfege = (style.system ?? DEFAULT_NAME_STYLE.system) === "solfege";
  const german = !solfege && (style.locale ?? liveLocale()) === "de";
  if (german && letter === 6 && accidental === -1) return "B";
  const names = solfege ? SOLFEGE : german ? GERMAN_LETTERS : LETTERS;
  return `${names[letter]}${accidental === 1 ? "♯" : accidental === -1 ? "♭" : ""}`;
}

/** The name of MIDI pitch `pitch` in `style`, such as `C♯4`, `D♭4` or `Re♭4`. */
export function noteName(pitch: number, style: NameStyle = {}): string {
  const name = pitchClassName(pitch, style);
  return (style.octave ?? DEFAULT_NAME_STYLE.octave) ? `${name}${octaveOf(pitch)}` : name;
}
