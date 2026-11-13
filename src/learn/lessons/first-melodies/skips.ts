/**
 * *Skips*, the third lesson of *First melodies*: a skip jumps over one white key, so it leaves out one
 * finger between, such as C to E with the thumb and finger 3.
 *
 * A demo plays skips up and down in the C position first, then a quiz names the skip from C. The
 * learner plays skips up and back down, tells a step from a skip, and plays a phrase that mixes both.
 * The texts are `skips.en.ts` and `skips.de.ts` beside it.
 */
import type { Lesson } from "../../model";
import { skipsEn } from "./skips.en";

export const skips: Lesson = {
  id: "skips",
  steps: [
    {
      id: "skip-demo",
      kind: "demo",
      bpm: 80,
      notes: [
        { note: 60, at: 0, beats: 1 },
        { note: 64, at: 1, beats: 1 },
        { note: 67, at: 2, beats: 1 },
        { note: 64, at: 3, beats: 1 },
        { note: 60, at: 4, beats: 2 },
      ],
    },
    { id: "what-a-skip-is", kind: "explain" },
    { id: "skip-from-c-quiz", kind: "quiz", right: 1 },
    { id: "skips-up", kind: "play-notes", notes: [60, 64, 62, 65, 64, 67] },
    { id: "skips-down", kind: "play-notes", notes: [67, 64, 65, 62, 64, 60] },
    { id: "step-or-skip-quiz", kind: "quiz", right: 0 },
    { id: "mixed-phrase", kind: "play-notes", notes: [60, 62, 64, 67, 65, 64, 62, 60] },
    { id: "recap", kind: "recap" },
  ],
  texts: { en: skipsEn },
};
