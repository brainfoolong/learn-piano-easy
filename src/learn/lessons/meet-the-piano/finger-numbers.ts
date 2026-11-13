/**
 * *Finger numbers*, the last lesson of *Meet the piano* before its key hunt: each finger has a number,
 * from the thumb as 1 to the little finger as 5, the same on both hands.
 *
 * The right hand comes first, then the left hand, whose numbers mirror it. The learner then plays five
 * keys with fingers 1 to 5, a short pattern read as numbers, and five keys with the left hand. The
 * texts are `finger-numbers.en.ts` and `finger-numbers.de.ts` beside it.
 */
import type { Lesson } from "../../model";
import { fingerNumbersEn } from "./finger-numbers.en";

export const fingerNumbers: Lesson = {
  id: "finger-numbers",
  steps: [
    { id: "right-hand-numbers", kind: "explain" },
    { id: "finger-three-quiz", kind: "quiz", right: 1 },
    { id: "left-hand-numbers", kind: "explain" },
    { id: "left-thumb-quiz", kind: "quiz", right: 0 },
    {
      id: "five-fingers-demo",
      kind: "demo",
      bpm: 80,
      notes: [
        { note: 60, at: 0, beats: 1 },
        { note: 62, at: 1, beats: 1 },
        { note: 64, at: 2, beats: 1 },
        { note: 65, at: 3, beats: 1 },
        { note: 67, at: 4, beats: 2 },
      ],
    },
    { id: "right-hand-five", kind: "play-notes", notes: [60, 62, 64, 65, 67] },
    { id: "finger-pattern", kind: "play-notes", notes: [60, 64, 67, 64, 60] },
    { id: "left-hand-five", kind: "play-notes", notes: [48, 50, 52, 53, 55] },
    { id: "recap", kind: "recap" },
  ],
  texts: { en: fingerNumbersEn },
};
