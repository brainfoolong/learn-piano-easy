/**
 * *The Alberti bass*, a lesson of *Chords*: the left hand breaks a chord low, high, middle, high in
 * eighths, with fingers 5, 1, 3 and 1.
 *
 * A demo plays the pattern over C, F, G7 and C first. An explain names the order, and a quiz checks it.
 * After the fingering, the learner plays the pattern on C. Explains show the G7 shape B, F and D, and F
 * in second inversion as C, F and A, so the hand barely moves. A quiz checks the thumb's key on F. The
 * learner plays each shape, changes chords in a row, hears a short tune over the bass and plays it. The
 * boss is in D major, whose key signature no earlier lesson teaches. A demo plays the D major scale and
 * names its two sharps, a quiz checks them, and the learner plays the scale. The boss's left hand plays
 * pairs of a low note and a higher one, jumps down an octave between some pairs, reaches D2 and ends on
 * D major. A demo plays it, and the learner plays the pairs, then the chord. Its right hand plays
 * thirds on F♯ and C♯, which a demo plays before the learner does. The texts are `alberti-bass.en.ts`
 * and `alberti-bass.de.ts` beside it.
 */
import type { Finger } from "../../../theory/fingering";
import type { Lesson, PhraseNote } from "../../model";
import { albertiBassDe } from "./alberti-bass.de";
import { albertiBassEn } from "./alberti-bass.en";

/** One bar of eighths in the left hand: low, high, middle, high, twice, with fingers 5, 1, 3, 1, starting at beat `at`. */
function bar(low: number, middle: number, high: number, at: number): PhraseNote[] {
  const fingers: Finger[] = [5, 1, 3, 1];
  return [low, high, middle, high, low, high, middle, high].map((note, i) => ({ note, at: at + i / 2, beats: 0.5, finger: fingers[i % 4]!, hand: "left" }));
}

/** The fingers of the D major scale up and back down, as C major's are: 1 2 3 1 2 3 4 5, then 4 3 2 1 3 2 1. */
const D_MAJOR_FINGERS: Finger[] = [1, 2, 3, 1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 2, 1];

/** The fingers of the boss's thirds: 3 and 5 first, as the text places them, then one finger lower each. The hand moves down for the last. */
const THIRDS_FINGERS: [Finger, Finger][] = [
  [3, 5],
  [2, 4],
  [1, 3],
  [1, 3],
];

/** The D major scale from the D above middle C, up and back down, with F♯ and C♯. */
const D_MAJOR = [62, 64, 66, 67, 69, 71, 73, 74, 73, 71, 69, 67, 66, 64, 62];

/** The boss's left hand over one turn of its ground: a pair per chord, from D3 and A3 down to D2 and back up. */
const CANON_BASS = [50, 57, 45, 52, 47, 54, 42, 49, 43, 50, 38, 45, 43, 50, 45, 52];

/** The D major chord the boss's left hand ends on: D3, F♯3 and A3. */
const LEFT_D_MAJOR = [50, 54, 57];

/** The boss's thirds in the right hand, falling from D5 and F♯5 to A4 and C♯5. */
const CANON_THIRDS = [
  [74, 78],
  [73, 76],
  [71, 74],
  [69, 73],
];

export const albertiBass: Lesson = {
  id: "alberti-bass",
  skills: ["alberti-bass", "broken-chords"],
  steps: [
    {
      id: "alberti-demo",
      kind: "demo",
      bpm: 80,
      notes: [
        ...bar(48, 52, 55, 0),
        ...bar(48, 53, 57, 4),
        ...bar(47, 50, 53, 8),
        { note: 48, at: 12, beats: 2, finger: 5, hand: "left" },
        { note: 52, at: 12, beats: 2, finger: 3, hand: "left" },
        { note: 55, at: 12, beats: 2, finger: 1, hand: "left" },
      ],
    },
    { id: "what-alberti-is", kind: "explain" },
    { id: "pattern-order", kind: "quiz", right: 2 },
    { id: "five-one-three-one", kind: "explain" },
    { id: "c-alberti", kind: "play-notes", notes: [48, 55, 52, 55, 48, 55, 52, 55] },
    { id: "g7-shape", kind: "explain" },
    { id: "g7-alberti", kind: "play-notes", notes: [47, 53, 50, 53, 47, 53, 50, 53] },
    { id: "f-second-inversion", kind: "explain" },
    { id: "thumb-on-f", kind: "quiz", right: 1 },
    { id: "f-alberti", kind: "play-notes", notes: [48, 57, 53, 57, 48, 57, 53, 57] },
    { id: "change-chords", kind: "play-notes", notes: [48, 55, 52, 55, 48, 57, 53, 57, 47, 53, 50, 53, 48, 55, 52, 55] },
    {
      id: "alberti-tune-demo",
      kind: "demo",
      bpm: 72,
      notes: [
        ...bar(48, 52, 55, 0),
        { note: 64, at: 0, beats: 2, finger: 3 },
        { note: 67, at: 2, beats: 2, finger: 5 },
        ...bar(47, 50, 53, 4),
        { note: 62, at: 4, beats: 2, finger: 2 },
        { note: 65, at: 6, beats: 2, finger: 4 },
        { note: 48, at: 8, beats: 2, finger: 5, hand: "left" },
        { note: 60, at: 8, beats: 2, finger: 1 },
      ],
    },
    {
      id: "alberti-tune",
      kind: "play-notes",
      notes: [[48, 64], 55, 52, 55, [48, 67], 55, 52, 55, [47, 62], 53, 50, 53, [47, 65], 53, 50, 53, [48, 60]],
    },
    {
      id: "d-major-demo",
      kind: "demo",
      bpm: 80,
      notes: D_MAJOR.map((note, i) => ({ note, at: i, beats: i === D_MAJOR.length - 1 ? 2 : 1, finger: D_MAJOR_FINGERS[i]! })),
    },
    { id: "two-sharps", kind: "quiz", right: 0 },
    { id: "d-major-scale", kind: "play-notes", notes: D_MAJOR },
    {
      id: "canon-bass-demo",
      kind: "demo",
      bpm: 76,
      notes: [
        ...CANON_BASS.map((note, i): PhraseNote => ({ note, at: i, beats: 1, finger: i % 2 === 0 ? 5 : 1, hand: "left" })),
        ...LEFT_D_MAJOR.map((note, i): PhraseNote => ({ note, at: CANON_BASS.length, beats: 2, finger: ([5, 3, 1] as const)[i]!, hand: "left" })),
      ],
    },
    { id: "canon-bass", kind: "play-notes", notes: CANON_BASS },
    { id: "left-d-major", kind: "play-notes", notes: [...LEFT_D_MAJOR, LEFT_D_MAJOR] },
    {
      id: "black-key-thirds-demo",
      kind: "demo",
      bpm: 72,
      notes: CANON_THIRDS.flatMap((third, i) => third.map((note, j) => ({ note, at: i * 2, beats: 2, finger: THIRDS_FINGERS[i]![j]! }))),
    },
    { id: "black-key-thirds", kind: "play-notes", notes: CANON_THIRDS },
    { id: "recap", kind: "recap" },
  ],
  texts: { en: albertiBassEn, de: albertiBassDe },
};
