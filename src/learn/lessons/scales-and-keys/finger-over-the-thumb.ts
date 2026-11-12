/**
 * *Finger over the thumb*, a lesson of *Scales and keys*: going down the C major scale, the right hand's
 * finger 3 crosses over the thumb, and the left hand does the same going up.
 *
 * A demo plays the right hand down from C5 to middle C first. The learner plays the top five notes, then
 * the crossing onto E, then the whole way down. The left hand then goes up from C3 to C4 with the same
 * crossing, and the lesson ends on the right hand's scale up and down. The texts are
 * `finger-over-the-thumb.en.ts` and `finger-over-the-thumb.de.ts` beside it.
 */
import type { Lesson } from "../../model";
import { fingerOverTheThumbDe } from "./finger-over-the-thumb.de";
import { fingerOverTheThumbEn } from "./finger-over-the-thumb.en";

export const fingerOverTheThumb: Lesson = {
  id: "finger-over-the-thumb",
  skills: ["finger-over"],
  steps: [
    {
      id: "down-demo",
      kind: "demo",
      bpm: 72,
      notes: [
        { note: 72, at: 0, beats: 1 },
        { note: 71, at: 1, beats: 1 },
        { note: 69, at: 2, beats: 1 },
        { note: 67, at: 3, beats: 1 },
        { note: 65, at: 4, beats: 1 },
        { note: 64, at: 5, beats: 1 },
        { note: 62, at: 6, beats: 1 },
        { note: 60, at: 7, beats: 2 },
      ],
    },
    { id: "finger-over", kind: "explain" },
    { id: "which-finger-crosses", kind: "quiz", right: 1 },
    { id: "top-five-down", kind: "play-notes", notes: [72, 71, 69, 67, 65] },
    { id: "cross-onto-e", kind: "play-notes", notes: [65, 64, 62, 60] },
    { id: "right-hand-down", kind: "play-notes", notes: [72, 71, 69, 67, 65, 64, 62, 60] },
    { id: "left-hand-up", kind: "explain" },
    {
      id: "left-hand-demo",
      kind: "demo",
      bpm: 72,
      notes: [
        { note: 48, at: 0, beats: 1 },
        { note: 50, at: 1, beats: 1 },
        { note: 52, at: 2, beats: 1 },
        { note: 53, at: 3, beats: 1 },
        { note: 55, at: 4, beats: 1 },
        { note: 57, at: 5, beats: 1 },
        { note: 59, at: 6, beats: 1 },
        { note: 60, at: 7, beats: 2 },
      ],
    },
    { id: "left-cross-key", kind: "quiz", right: 0 },
    { id: "left-scale-up", kind: "play-notes", notes: [48, 50, 52, 53, 55, 57, 59, 60] },
    {
      id: "scale-up-and-down",
      kind: "play-notes",
      notes: [60, 62, 64, 65, 67, 69, 71, 72, 71, 69, 67, 65, 64, 62, 60],
    },
    { id: "recap", kind: "recap" },
  ],
  texts: { en: fingerOverTheThumbEn, de: fingerOverTheThumbDe },
};
