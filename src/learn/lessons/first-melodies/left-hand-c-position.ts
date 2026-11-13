/**
 * *Left hand in C position*, a lesson of *First melodies*: the left hand rests on C D E F G one octave
 * below middle C, with the little finger on C and the thumb on G.
 *
 * A demo plays the five keys up and down first. The learner then places the hand, answers which finger
 * plays C, finds a key by its finger, plays the five keys up and down, and plays steps, skips and
 * repeated notes with the left hand. The texts are `left-hand-c-position.en.ts` and
 * `left-hand-c-position.de.ts` beside it.
 */
import type { Lesson } from "../../model";
import { leftHandCPositionEn } from "./left-hand-c-position.en";

export const leftHandCPosition: Lesson = {
  id: "left-hand-c-position",
  steps: [
    {
      id: "left-hand-demo",
      kind: "demo",
      bpm: 90,
      notes: [
        { note: 48, at: 0, beats: 1, finger: 5, hand: "left" },
        { note: 50, at: 1, beats: 1, finger: 4, hand: "left" },
        { note: 52, at: 2, beats: 1, finger: 3, hand: "left" },
        { note: 53, at: 3, beats: 1, finger: 2, hand: "left" },
        { note: 55, at: 4, beats: 1, finger: 1, hand: "left" },
        { note: 53, at: 5, beats: 1, finger: 2, hand: "left" },
        { note: 52, at: 6, beats: 1, finger: 3, hand: "left" },
        { note: 50, at: 7, beats: 1, finger: 4, hand: "left" },
        { note: 48, at: 8, beats: 2, finger: 5, hand: "left" },
      ],
    },
    { id: "place-left-hand", kind: "explain" },
    { id: "c-finger-quiz", kind: "quiz", right: 2 },
    { id: "find-left-thumb", kind: "find-key", key: 55, anyOctave: false },
    { id: "find-left-middle", kind: "find-key", key: 52, anyOctave: false },
    { id: "up-and-down", kind: "play-notes", notes: [48, 50, 52, 53, 55, 53, 52, 50, 48] },
    { id: "left-steps", kind: "play-notes", notes: [55, 53, 52, 53, 55] },
    { id: "left-skips-repeats", kind: "play-notes", notes: [48, 52, 52, 55, 55, 52, 48] },
    { id: "recap", kind: "recap" },
  ],
  texts: { en: leftHandCPositionEn },
};
