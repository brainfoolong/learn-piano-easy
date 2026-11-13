/**
 * *Right hand in C position*, the first lesson of *First melodies*: the right hand rests on C, D, E, F
 * and G from middle C, with the thumb on middle C and one finger on each key.
 *
 * A demo plays the five keys first, and an explain names the position. Two quizzes then match fingers
 * to keys, and two key hunts call a key by its finger. The learner ends with two short phrases read as
 * finger numbers. The texts are `right-hand-c-position.en.ts` and `right-hand-c-position.de.ts` beside it.
 */
import type { Lesson } from "../../model";
import { rightHandCPositionEn } from "./right-hand-c-position.en";

export const rightHandCPosition: Lesson = {
  id: "right-hand-c-position",
  steps: [
    {
      id: "position-demo",
      kind: "demo",
      bpm: 80,
      notes: [
        { note: 60, at: 0, beats: 1, finger: 1 },
        { note: 62, at: 1, beats: 1, finger: 2 },
        { note: 64, at: 2, beats: 1, finger: 3 },
        { note: 65, at: 3, beats: 1, finger: 4 },
        { note: 67, at: 4, beats: 2, finger: 5 },
      ],
    },
    { id: "c-position", kind: "explain" },
    { id: "finger-g-quiz", kind: "quiz", right: 2 },
    { id: "finger-four-key", kind: "find-key", key: 65, anyOctave: false },
    { id: "finger-two-key", kind: "find-key", key: 62, anyOctave: false },
    { id: "finger-three-quiz", kind: "quiz", right: 1 },
    { id: "finger-pattern", kind: "play-notes", notes: [60, 64, 62, 65, 67] },
    { id: "finger-walk-down", kind: "play-notes", notes: [67, 65, 64, 62, 60] },
    { id: "recap", kind: "recap" },
  ],
  texts: { en: rightHandCPositionEn },
};
