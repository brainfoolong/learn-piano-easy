/**
 * *F major*, a lesson of *Scales and keys*: the scale pattern started on F needs one black key, B♭, and
 * the right hand passes its thumb under after finger 4.
 *
 * A demo plays the F major scale up and down first, the thumb under to C and finger 4 over onto B♭. The learner then works out that the fourth key is B♭, finds
 * it, learns the fingering 1-2-3-4, thumb under, 1-2-3-4, and plays the scale up and down. A short tune
 * in F major over an F and C fifth in the left hand ends the lesson. The fifth is a chord entry, so
 * both keys must be pressed. The texts are `f-major.en.ts` and `f-major.de.ts` beside it.
 */
import type { Lesson } from "../../model";
import { fMajorDe } from "./f-major.de";
import { fMajorEn } from "./f-major.en";

export const fMajor: Lesson = {
  id: "f-major",
  steps: [
    {
      id: "f-major-sound",
      kind: "demo",
      bpm: 72,
      notes: [
        { note: 65, at: 0, beats: 1, finger: 1 },
        { note: 67, at: 1, beats: 1, finger: 2 },
        { note: 69, at: 2, beats: 1, finger: 3 },
        { note: 70, at: 3, beats: 1, finger: 4 },
        { note: 72, at: 4, beats: 1, finger: 1 },
        { note: 74, at: 5, beats: 1, finger: 2 },
        { note: 76, at: 6, beats: 1, finger: 3 },
        { note: 77, at: 7, beats: 1, finger: 4 },
        { note: 76, at: 8, beats: 1, finger: 3 },
        { note: 74, at: 9, beats: 1, finger: 2 },
        { note: 72, at: 10, beats: 1, finger: 1 },
        { note: 70, at: 11, beats: 1, finger: 4 },
        { note: 69, at: 12, beats: 1, finger: 3 },
        { note: 67, at: 13, beats: 1, finger: 2 },
        { note: 65, at: 14, beats: 2, finger: 1 },
      ],
    },
    { id: "pattern-on-f", kind: "explain" },
    { id: "after-a", kind: "quiz", right: 1 },
    { id: "find-b-flat", kind: "find-key", key: 70, anyOctave: true },
    { id: "f-fingering", kind: "explain" },
    { id: "where-thumb-under", kind: "quiz", right: 0 },
    { id: "f-scale-up", kind: "play-notes", notes: [65, 67, 69, 70, 72, 74, 76, 77] },
    { id: "f-scale-down", kind: "play-notes", notes: [77, 76, 74, 72, 70, 69, 67, 65] },
    {
      id: "tune-in-f",
      kind: "demo",
      bpm: 72,
      notes: [
        { note: 41, at: 0, beats: 4, finger: 5, hand: "left" },
        { note: 48, at: 0, beats: 4, finger: 1, hand: "left" },
        { note: 65, at: 0, beats: 1, finger: 1 },
        { note: 69, at: 1, beats: 1, finger: 3 },
        { note: 72, at: 2, beats: 1, finger: 5 },
        { note: 70, at: 3, beats: 1, finger: 4 },
        { note: 41, at: 4, beats: 4, finger: 5, hand: "left" },
        { note: 48, at: 4, beats: 4, finger: 1, hand: "left" },
        { note: 69, at: 4, beats: 1, finger: 3 },
        { note: 67, at: 5, beats: 1, finger: 2 },
        { note: 65, at: 6, beats: 2, finger: 1 },
      ],
    },
    { id: "tune-and-fifth", kind: "play-notes", notes: [[41, 48, 65], 69, 72, 70, [41, 48, 69], 67, 65] },
    { id: "recap", kind: "recap" },
  ],
  texts: { en: fMajorEn, de: fMajorDe },
};
