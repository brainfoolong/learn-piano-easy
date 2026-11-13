/**
 * *Moving the hand*, a lesson of *Both hands*: the right hand leaves C position during a rest and lands
 * in G position, with its thumb on the G above middle C, then plays there.
 *
 * A demo plays a phrase in C position, a rest, and the same phrase in G position first. The learner then
 * finds the new thumb key, answers which key two fingers land on, and reads the five notes of G position.
 * They play a phrase in each position, and end on both phrases in one go with the move between them. The
 * texts are `moving-the-hand.en.ts` and `moving-the-hand.de.ts` beside it.
 */
import type { Lesson } from "../../model";
import { movingTheHandEn } from "./moving-the-hand.en";

export const movingTheHand: Lesson = {
  id: "moving-the-hand",
  skills: ["position-change"],
  steps: [
    {
      id: "phrase-then-move",
      kind: "demo",
      bpm: 80,
      notes: [
        { note: 60, at: 0, beats: 1, finger: 1 },
        { note: 62, at: 1, beats: 1, finger: 2 },
        { note: 64, at: 2, beats: 1, finger: 3 },
        { note: 65, at: 3, beats: 1, finger: 4 },
        { note: 67, at: 4, beats: 2, finger: 5 },
        { note: 67, at: 8, beats: 1, finger: 1 },
        { note: 69, at: 9, beats: 1, finger: 2 },
        { note: 71, at: 10, beats: 1, finger: 3 },
        { note: 72, at: 11, beats: 1, finger: 4 },
        { note: 74, at: 12, beats: 2, finger: 5 },
      ],
    },
    { id: "new-position", kind: "explain" },
    { id: "new-thumb", kind: "find-key", key: 67, anyOctave: false },
    { id: "little-finger-quiz", kind: "quiz", right: 0 },
    { id: "middle-finger-quiz", kind: "quiz", right: 1 },
    { id: "read-g-position", kind: "read-note", clef: "treble", answer: "name", notes: [67, 71, 69, 74, 72], pass: 0.8 },
    { id: "c-position-phrase", kind: "play-notes", notes: [60, 62, 64, 65, 64, 62, 60] },
    { id: "g-position-phrase", kind: "play-notes", notes: [67, 69, 71, 72, 71, 69, 67] },
    { id: "move-in-a-rest", kind: "explain" },
    { id: "move-and-play", kind: "play-notes", notes: [60, 62, 64, 65, 64, 62, 60, 67, 69, 71, 72, 71, 69, 67] },
    { id: "recap", kind: "recap" },
  ],
  texts: { en: movingTheHandEn },
};
