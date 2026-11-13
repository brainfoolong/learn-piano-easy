/**
 * *Three-four time*, the seventh lesson of *Rhythm*: some music groups its beats in threes, counted
 * 1 2 3 with the first beat strongest, as in a waltz.
 *
 * A demo plays four bars of a waltz first, a low note on beat 1 and two higher notes on beats 2 and 3.
 * The learner then answers how many beats a 3/4 bar has and how a waltz is counted, taps twelve beats
 * while counting 1 2 3 aloud, and reads a recap. The texts are `three-four-time.en.ts` and
 * `three-four-time.de.ts` beside it.
 */
import type { Lesson } from "../../model";
import { threeFourTimeEn } from "./three-four-time.en";

export const threeFourTime: Lesson = {
  id: "three-four-time",
  steps: [
    {
      id: "waltz-demo",
      kind: "demo",
      bpm: 120,
      notes: [
        { note: 48, at: 0, beats: 1 },
        { note: 64, at: 1, beats: 1 },
        { note: 67, at: 1, beats: 1 },
        { note: 64, at: 2, beats: 1 },
        { note: 67, at: 2, beats: 1 },
        { note: 43, at: 3, beats: 1 },
        { note: 62, at: 4, beats: 1 },
        { note: 65, at: 4, beats: 1 },
        { note: 62, at: 5, beats: 1 },
        { note: 65, at: 5, beats: 1 },
        { note: 43, at: 6, beats: 1 },
        { note: 62, at: 7, beats: 1 },
        { note: 65, at: 7, beats: 1 },
        { note: 62, at: 8, beats: 1 },
        { note: 65, at: 8, beats: 1 },
        { note: 48, at: 9, beats: 1 },
        { note: 64, at: 10, beats: 1 },
        { note: 67, at: 10, beats: 1 },
        { note: 64, at: 11, beats: 1 },
        { note: 67, at: 11, beats: 1 },
      ],
    },
    { id: "beats-in-threes", kind: "explain" },
    { id: "beats-in-a-bar-quiz", kind: "quiz", right: 1 },
    { id: "which-is-a-waltz-quiz", kind: "quiz", right: 0 },
    { id: "tap-in-threes", kind: "rhythm-tap", bpm: 90, taps: 12, pass: 0.75 },
    { id: "recap", kind: "recap" },
  ],
  texts: { en: threeFourTimeEn },
};
