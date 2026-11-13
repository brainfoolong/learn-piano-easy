/**
 * *G major*, a lesson of *Scales and keys*: the major scale's pattern started on G needs F♯, so the half
 * step stays just below the top.
 *
 * A demo plays the G major scale up and down first, the thumb under to C and finger 3 over onto B. The learner walks the pattern up from G, finds that a whole step
 * above E is F♯, and finds F♯ on the keys. They play the scale up and down with the fingering of C major,
 * hear F and F♯ side by side, and end on a short tune with F♯ over a G and D fifth. The texts are
 * `g-major.en.ts` and `g-major.de.ts` beside it.
 */
import type { Lesson } from "../../model";
import { gMajorDe } from "./g-major.de";
import { gMajorEn } from "./g-major.en";

export const gMajor: Lesson = {
  id: "g-major",
  steps: [
    {
      id: "g-scale-demo",
      kind: "demo",
      bpm: 72,
      notes: [
        { note: 67, at: 0, beats: 1, finger: 1 },
        { note: 69, at: 1, beats: 1, finger: 2 },
        { note: 71, at: 2, beats: 1, finger: 3 },
        { note: 72, at: 3, beats: 1, finger: 1 },
        { note: 74, at: 4, beats: 1, finger: 2 },
        { note: 76, at: 5, beats: 1, finger: 3 },
        { note: 78, at: 6, beats: 1, finger: 4 },
        { note: 79, at: 7, beats: 1, finger: 5 },
        { note: 78, at: 8, beats: 1, finger: 4 },
        { note: 76, at: 9, beats: 1, finger: 3 },
        { note: 74, at: 10, beats: 1, finger: 2 },
        { note: 72, at: 11, beats: 1, finger: 1 },
        { note: 71, at: 12, beats: 1, finger: 3 },
        { note: 69, at: 13, beats: 1, finger: 2 },
        { note: 67, at: 14, beats: 2, finger: 1 },
      ],
    },
    { id: "pattern-from-g", kind: "explain" },
    { id: "whole-step-above-e", kind: "quiz", right: 0 },
    { id: "one-sharp", kind: "explain" },
    { id: "find-f-sharp", kind: "find-key", key: 78, anyOctave: true },
    { id: "same-fingering", kind: "explain" },
    { id: "g-scale-up", kind: "play-notes", notes: [67, 69, 71, 72, 74, 76, 78, 79] },
    { id: "g-scale-down", kind: "play-notes", notes: [79, 78, 76, 74, 72, 71, 69, 67] },
    {
      id: "hear-f-and-f-sharp",
      kind: "listen",
      pairs: [
        [65, 66],
        [66, 65],
        [66, 66],
        [78, 79],
        [79, 78],
        [77, 78],
      ],
      pass: 0.75,
    },
    {
      id: "g-tune-demo",
      kind: "demo",
      bpm: 72,
      notes: [
        { note: 43, at: 0, beats: 4, finger: 5, hand: "left" },
        { note: 50, at: 0, beats: 4, finger: 1, hand: "left" },
        { note: 67, at: 0, beats: 1, finger: 4 },
        { note: 66, at: 1, beats: 1, finger: 3 },
        { note: 64, at: 2, beats: 1, finger: 2 },
        { note: 66, at: 3, beats: 1, finger: 3 },
        { note: 43, at: 4, beats: 4, finger: 5, hand: "left" },
        { note: 50, at: 4, beats: 4, finger: 1, hand: "left" },
        { note: 67, at: 4, beats: 1, finger: 4 },
        { note: 69, at: 5, beats: 1, finger: 5 },
        { note: 67, at: 6, beats: 2, finger: 4 },
      ],
    },
    { id: "g-tune", kind: "play-notes", notes: [[43, 50, 67], 66, 64, 66, [43, 50, 67], 69, 67] },
    { id: "recap", kind: "recap" },
  ],
  texts: { en: gMajorEn, de: gMajorDe },
};
