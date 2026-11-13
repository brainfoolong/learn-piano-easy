/**
 * *Half and whole steps*, the first lesson of *Scales and keys*: a half step is the very next key,
 * black or white, and a whole step is two half steps, with one key between.
 *
 * A demo climbs from C to E key by key first. The learner plays a half step from C, meets the two
 * white pairs with no black key between, E and F and B and C, then hears and plays whole steps. A
 * find-key asks the whole step above E, which is a black key. The texts are `half-and-whole-steps.en.ts`
 * and `half-and-whole-steps.de.ts` beside it.
 */
import type { Lesson } from "../../model";
import { halfAndWholeStepsEn } from "./half-and-whole-steps.en";

export const halfAndWholeSteps: Lesson = {
  id: "half-and-whole-steps",
  steps: [
    {
      id: "key-by-key",
      kind: "demo",
      bpm: 72,
      notes: [
        { note: 60, at: 0, beats: 1 },
        { note: 61, at: 1, beats: 1 },
        { note: 62, at: 2, beats: 1 },
        { note: 63, at: 3, beats: 1 },
        { note: 64, at: 4, beats: 2 },
      ],
    },
    { id: "half-step", kind: "explain" },
    { id: "half-step-from-c", kind: "play-notes", notes: [60, 61, 60, 61] },
    { id: "no-black-key-between", kind: "explain" },
    { id: "white-half-step", kind: "quiz", right: 1 },
    { id: "e-f-and-b-c", kind: "play-notes", notes: [64, 65, 71, 72] },
    { id: "whole-step", kind: "explain" },
    {
      id: "whole-and-half",
      kind: "demo",
      bpm: 72,
      notes: [
        { note: 60, at: 0, beats: 1 },
        { note: 62, at: 1, beats: 1 },
        { note: 64, at: 2, beats: 1 },
        { note: 65, at: 3, beats: 2 },
      ],
    },
    { id: "whole-steps-from-c", kind: "play-notes", notes: [60, 62, 64] },
    { id: "f-to-g", kind: "quiz", right: 0 },
    { id: "whole-step-above-e", kind: "find-key", key: 66, anyOctave: true },
    { id: "recap", kind: "recap" },
  ],
  texts: { en: halfAndWholeStepsEn },
};
