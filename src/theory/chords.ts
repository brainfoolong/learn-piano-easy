/**
 * Chords: which chord a set of notes forms, its name, its Roman numeral in a key, and what each of its
 * notes is, as a chord tone or a scale degree.
 *
 * A set of notes is folded onto its pitch classes and compared with every shape on every root. A shape
 * matches only when the pitch classes are exactly its tones, doubled or not, in any octave.
 *
 * Decisions, and what each costs:
 * - A chord is named only when its notes match one shape clearly, so a wrong label never appears. A
 *   melody note over a chord, or a missing fifth, leaves it unnamed.
 * - A set that matches on two roots, such as Csus2 and Gsus4, takes the root its bass note gives. With
 *   neither root in the bass, it is unnamed. Augmented and diminished seventh chords resolve this way.
 * - The sixth chords are left out, since C6 holds the same notes as Am7 and the bass alone cannot tell
 *   a learner which was meant.
 * - A Roman numeral names the root's degree in the key, with its case and sign from the chord's quality.
 *   It shows no inversion figures, because the chord's name already shows the bass after a slash.
 * - Degrees in a minor key count from the natural minor scale, so G major in C minor is V, and B
 *   diminished is ♯vii°. A root off the scale takes ♭ or ♯ before its degree.
 *
 * Bounds: naming a set is 12 roots by `SHAPES.length` shapes. `chordSpans` sorts the notes' edges once.
 */

import type { Note } from "../midi/song";
import type { Key } from "./key";
import { type NameStyle, pitchClass, pitchClassName } from "./note-names";

/** The qualities of chord this module names. */
export type ChordQuality = "major" | "minor" | "diminished" | "augmented" | "sus2" | "sus4" | "dominant7" | "major7" | "minor7" | "half-diminished7" | "diminished7";

/** A chord's shape: its tones in semitones above the root, and how each is written. */
interface ChordShape {
  quality: ChordQuality;
  intervals: readonly number[];
  /** The chord tone each interval is, such as `3` or `♭7`, in the order of `intervals`. */
  tones: readonly string[];
  /** What follows the root in the chord's name, such as `m7`. */
  suffix: string;
  /** Whether its Roman numeral is lower case. */
  minor: boolean;
  /** What follows its Roman numeral, such as `°7`. */
  numeral: string;
}

const SHAPES: readonly ChordShape[] = [
  { quality: "major", intervals: [0, 4, 7], tones: ["R", "3", "5"], suffix: "", minor: false, numeral: "" },
  { quality: "minor", intervals: [0, 3, 7], tones: ["R", "♭3", "5"], suffix: "m", minor: true, numeral: "" },
  { quality: "diminished", intervals: [0, 3, 6], tones: ["R", "♭3", "♭5"], suffix: "dim", minor: true, numeral: "°" },
  { quality: "augmented", intervals: [0, 4, 8], tones: ["R", "3", "♯5"], suffix: "aug", minor: false, numeral: "+" },
  { quality: "sus2", intervals: [0, 2, 7], tones: ["R", "2", "5"], suffix: "sus2", minor: false, numeral: "sus2" },
  { quality: "sus4", intervals: [0, 5, 7], tones: ["R", "4", "5"], suffix: "sus4", minor: false, numeral: "sus4" },
  { quality: "dominant7", intervals: [0, 4, 7, 10], tones: ["R", "3", "5", "♭7"], suffix: "7", minor: false, numeral: "7" },
  { quality: "major7", intervals: [0, 4, 7, 11], tones: ["R", "3", "5", "7"], suffix: "maj7", minor: false, numeral: "maj7" },
  { quality: "minor7", intervals: [0, 3, 7, 10], tones: ["R", "♭3", "5", "♭7"], suffix: "m7", minor: true, numeral: "7" },
  { quality: "half-diminished7", intervals: [0, 3, 6, 10], tones: ["R", "♭3", "♭5", "♭7"], suffix: "m7♭5", minor: true, numeral: "ø7" },
  { quality: "diminished7", intervals: [0, 3, 6, 9], tones: ["R", "♭3", "♭5", "𝄫7"], suffix: "dim7", minor: true, numeral: "°7" },
];

/** Each semitone above the tonic as a scale degree, in a major key. */
const MAJOR_DEGREES = ["1", "♭2", "2", "♭3", "3", "4", "♯4", "5", "♭6", "6", "♭7", "7"];
/** Each semitone above the tonic as a scale degree, in a minor key, counted from the natural minor. */
const MINOR_DEGREES = ["1", "♭2", "2", "3", "♯3", "4", "♯4", "5", "6", "♯6", "7", "♯7"];
const NUMERALS = ["I", "II", "III", "IV", "V", "VI", "VII"];

/** A named chord: its root and bass as pitch classes, and its quality. */
export interface Chord {
  root: number;
  bass: number;
  quality: ChordQuality;
}

/** A stretch of ticks over which the sounding notes form one chord. `endTick` is excluded. */
export interface ChordSpan {
  startTick: number;
  endTick: number;
  chord: Chord;
}

/** The notes `chordSpans` reads: a pitch and a span in ticks. */
export type ChordNote = Pick<Note, "pitch" | "startTick" | "endTick">;

function shapeOf(quality: ChordQuality): ChordShape {
  return SHAPES.find((shape) => shape.quality === quality)!;
}

/** The chord MIDI pitches `pitches` form, or undefined when they match no shape clearly. */
export function detectChord(pitches: readonly number[]): Chord | undefined {
  if (pitches.length === 0) return undefined;
  const classes = new Set(pitches.map(pitchClass));
  if (classes.size < 3) return undefined;
  const bass = pitchClass(Math.min(...pitches));
  const matches: Chord[] = [];
  for (let root = 0; root < 12; root++) {
    for (const shape of SHAPES) {
      if (shape.intervals.length === classes.size && shape.intervals.every((interval) => classes.has(pitchClass(root + interval)))) {
        matches.push({ root, bass, quality: shape.quality });
      }
    }
  }
  if (matches.length === 1) return matches[0];
  const onBass = matches.filter((chord) => chord.root === bass);
  return onBass.length === 1 ? onBass[0] : undefined;
}

/** The name of `chord`, such as `Am7` or `C/E`, spelt in `style`. Pass the key's accidentals to follow it. */
export function chordName(chord: Chord, style: NameStyle = {}): string {
  const name = `${pitchClassName(chord.root, style)}${shapeOf(chord.quality).suffix}`;
  return chord.bass === chord.root ? name : `${name}/${pitchClassName(chord.bass, style)}`;
}

/** The scale degree of pitch class `pc` in `key`, such as `5` or `♭3`. */
export function scaleDegree(pc: number, key: Key): string {
  return (key.mode === "major" ? MAJOR_DEGREES : MINOR_DEGREES)[pitchClass(pc - key.tonic)]!;
}

/** The Roman numeral of `chord` in `key`, such as `V7`, `ii` or `♭VII`. */
export function romanNumeral(chord: Chord, key: Key): string {
  const degree = scaleDegree(chord.root, key);
  const sign = degree.length > 1 ? degree.slice(0, -1) : "";
  const numeral = NUMERALS[Number(degree.slice(-1)) - 1]!;
  const shape = shapeOf(chord.quality);
  return `${sign}${shape.minor ? numeral.toLowerCase() : numeral}${shape.numeral}`;
}

/** What pitch class `pc` is in `chord`, such as `R`, `♭3` or `5`, or undefined when it is not one of its tones. */
export function chordTone(pc: number, chord: Chord): string | undefined {
  const shape = shapeOf(chord.quality);
  const index = shape.intervals.indexOf(pitchClass(pc - chord.root));
  return index < 0 ? undefined : shape.tones[index];
}

/**
 * The stretches of `notes` whose sounding notes form a chord, in order. Two stretches next to each other
 * with the same chord are one, and a stretch with no clear chord is left out.
 */
export function chordSpans(notes: readonly ChordNote[]): ChordSpan[] {
  const edges = [...new Set(notes.flatMap((note) => (note.endTick > note.startTick ? [note.startTick, note.endTick] : [])))].sort((a, b) => a - b);
  const byStart = notes.filter((note) => note.endTick > note.startTick).sort((a, b) => a.startTick - b.startTick);
  const spans: ChordSpan[] = [];
  let sounding: ChordNote[] = [];
  let next = 0;
  for (let i = 0; i + 1 < edges.length; i++) {
    const startTick = edges[i]!;
    const endTick = edges[i + 1]!;
    sounding = sounding.filter((note) => note.endTick > startTick);
    while (next < byStart.length && byStart[next]!.startTick <= startTick) sounding.push(byStart[next++]!);
    const chord = detectChord(sounding.map((note) => note.pitch));
    if (!chord) continue;
    const last = spans.at(-1);
    if (last && last.endTick === startTick && sameChord(last.chord, chord)) last.endTick = endTick;
    else spans.push({ startTick, endTick, chord });
  }
  return spans;
}

function sameChord(a: Chord, b: Chord): boolean {
  return a.root === b.root && a.bass === b.bass && a.quality === b.quality;
}
