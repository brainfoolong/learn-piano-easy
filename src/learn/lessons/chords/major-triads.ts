/**
 * *Major triads*, a lesson of *Chords*: a major triad is its root, the key four half steps up, and the
 * key three half steps above that.
 *
 * A demo plays the C, F, G and C major triads. The learner counts the half steps of C, E and G in a
 * quiz, and learns the recipe and the fingering 1, 3 and 5. They build C, F and G major, each key by key
 * and then together. A second quiz counts four half steps up from D and lands on F♯, which the learner
 * finds and uses to play D major. The left hand plays C major with 5, 3 and 1. A last demo and play walk
 * C, F, G and C major in the right hand. The texts are `major-triads.en.ts` and `major-triads.de.ts`
 * beside it.
 */
import type { Lesson } from "../../model";
import { majorTriadsEn } from "./major-triads.en";

export const majorTriads: Lesson = {
  id: "major-triads",
  skills: ["triads"],
  steps: [
    {
      id: "major-demo",
      kind: "demo",
      bpm: 66,
      notes: [
        { note: 60, at: 0, beats: 2, finger: 1 },
        { note: 64, at: 0, beats: 2, finger: 3 },
        { note: 67, at: 0, beats: 2, finger: 5 },
        { note: 65, at: 2, beats: 2, finger: 1 },
        { note: 69, at: 2, beats: 2, finger: 3 },
        { note: 72, at: 2, beats: 2, finger: 5 },
        { note: 67, at: 4, beats: 2, finger: 1 },
        { note: 71, at: 4, beats: 2, finger: 3 },
        { note: 74, at: 4, beats: 2, finger: 5 },
        { note: 60, at: 6, beats: 4, finger: 1 },
        { note: 64, at: 6, beats: 4, finger: 3 },
        { note: 67, at: 6, beats: 4, finger: 5 },
      ],
    },
    { id: "count-the-steps", kind: "explain" },
    { id: "half-steps-c-to-e", kind: "quiz", right: 2 },
    { id: "major-recipe", kind: "explain" },
    { id: "right-hand-fingers", kind: "explain" },
    { id: "c-major-triad", kind: "play-notes", notes: [60, 64, 67, [60, 64, 67]] },
    { id: "f-major-triad", kind: "play-notes", notes: [65, 69, 72, [65, 69, 72]] },
    { id: "g-major-triad", kind: "play-notes", notes: [67, 71, 74, [67, 71, 74]] },
    { id: "four-up-from-d", kind: "quiz", right: 0 },
    { id: "find-f-sharp", kind: "find-key", key: 66, anyOctave: true },
    { id: "d-major-triad", kind: "play-notes", notes: [62, 66, 69, [62, 66, 69]] },
    { id: "left-hand-fingers", kind: "explain" },
    { id: "left-c-major", kind: "play-notes", notes: [48, 52, 55, [48, 52, 55]] },
    {
      id: "chord-walk-demo",
      kind: "demo",
      bpm: 66,
      notes: [
        { note: 60, at: 0, beats: 2, finger: 1 },
        { note: 64, at: 0, beats: 2, finger: 3 },
        { note: 67, at: 0, beats: 2, finger: 5 },
        { note: 65, at: 2, beats: 2, finger: 1 },
        { note: 69, at: 2, beats: 2, finger: 3 },
        { note: 72, at: 2, beats: 2, finger: 5 },
        { note: 67, at: 4, beats: 2, finger: 1 },
        { note: 71, at: 4, beats: 2, finger: 3 },
        { note: 74, at: 4, beats: 2, finger: 5 },
        { note: 60, at: 6, beats: 4, finger: 1 },
        { note: 64, at: 6, beats: 4, finger: 3 },
        { note: 67, at: 6, beats: 4, finger: 5 },
      ],
    },
    {
      id: "chord-walk",
      kind: "play-notes",
      notes: [
        [60, 64, 67],
        [65, 69, 72],
        [67, 71, 74],
        [60, 64, 67],
      ],
    },
    { id: "recap", kind: "recap" },
  ],
  texts: { en: majorTriadsEn },
};
