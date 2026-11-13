/**
 * *Steps*, the second lesson of *First melodies*: a step moves from one key to the very next white key,
 * up or down, and in C position the finger next door plays it.
 *
 * A demo plays a stepping tune first, and an explain names the step. A quiz and a listening test check
 * the idea by eye and by ear. The learner then steps up, steps down, and plays a short stepping tune, all
 * in C position. The texts are `steps.en.ts` and `steps.de.ts` beside it.
 */
import type { Lesson } from "../../model";
import { stepsEn } from "./steps.en";

export const steps: Lesson = {
  id: "steps",
  steps: [
    {
      id: "steps-demo",
      kind: "demo",
      bpm: 80,
      notes: [
        { note: 60, at: 0, beats: 1 },
        { note: 62, at: 1, beats: 1 },
        { note: 64, at: 2, beats: 1 },
        { note: 65, at: 3, beats: 1 },
        { note: 64, at: 4, beats: 1 },
        { note: 62, at: 5, beats: 1 },
        { note: 60, at: 6, beats: 2 },
      ],
    },
    { id: "what-a-step-is", kind: "explain" },
    { id: "which-is-a-step", kind: "quiz", right: 0 },
    {
      id: "hear-steps",
      kind: "listen",
      pairs: [
        [60, 62],
        [64, 62],
        [65, 67],
        [64, 64],
        [67, 65],
        [62, 60],
        [62, 64],
        [65, 64],
      ],
      pass: 0.75,
    },
    { id: "step-up", kind: "play-notes", notes: [60, 62, 64, 65, 67] },
    { id: "step-down", kind: "play-notes", notes: [67, 65, 64, 62, 60] },
    { id: "next-finger-quiz", kind: "quiz", right: 1 },
    { id: "step-up-and-down", kind: "play-notes", notes: [60, 62, 64, 65, 67, 65, 64, 62, 60] },
    { id: "stepping-tune", kind: "play-notes", notes: [60, 62, 64, 62, 64, 65, 64, 62, 60] },
    { id: "recap", kind: "recap" },
  ],
  texts: { en: stepsEn },
};
