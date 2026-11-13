/**
 * *The C major scale*, a lesson of *Scales and keys*: eight white keys from C up to the next C, built
 * from whole steps and half steps, and played by the right hand with the thumb tucked under.
 *
 * A demo plays the scale up first, with fingers 1 2 3, the thumb under to F, then 2 3 4 5. Two explains name the scale and its pattern of steps, and a quiz
 * checks where the first half step lies. The learner then plays the scale in parts: C, D and E with
 * fingers 1 to 3, the thumb tucked under to F, and the last five keys. The scale is played whole going
 * up, then going down. The texts are `the-c-major-scale.en.ts` and `the-c-major-scale.de.ts` beside it.
 */
import type { Lesson } from "../../model";
import { theCMajorScaleEn } from "./the-c-major-scale.en";

export const theCMajorScale: Lesson = {
  id: "the-c-major-scale",
  skills: ["thumb-under"],
  steps: [
    {
      id: "scale-demo",
      kind: "demo",
      bpm: 80,
      notes: [
        { note: 60, at: 0, beats: 1, finger: 1 },
        { note: 62, at: 1, beats: 1, finger: 2 },
        { note: 64, at: 2, beats: 1, finger: 3 },
        { note: 65, at: 3, beats: 1, finger: 1 },
        { note: 67, at: 4, beats: 1, finger: 2 },
        { note: 69, at: 5, beats: 1, finger: 3 },
        { note: 71, at: 6, beats: 1, finger: 4 },
        { note: 72, at: 7, beats: 2, finger: 5 },
      ],
    },
    { id: "what-a-scale-is", kind: "explain" },
    { id: "scale-pattern", kind: "explain" },
    { id: "first-half-step", kind: "quiz", right: 2 },
    { id: "first-three", kind: "play-notes", notes: [60, 62, 64] },
    { id: "thumb-under", kind: "explain" },
    { id: "which-finger-on-f", kind: "quiz", right: 1 },
    { id: "tuck-to-f", kind: "play-notes", notes: [60, 62, 64, 65] },
    { id: "last-five", kind: "play-notes", notes: [65, 67, 69, 71, 72] },
    { id: "scale-up", kind: "play-notes", notes: [60, 62, 64, 65, 67, 69, 71, 72] },
    { id: "scale-down", kind: "play-notes", notes: [72, 71, 69, 67, 65, 64, 62, 60] },
    { id: "recap", kind: "recap" },
  ],
  texts: { en: theCMajorScaleEn },
};
