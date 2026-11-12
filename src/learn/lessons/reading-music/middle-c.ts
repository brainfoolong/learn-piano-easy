/**
 * *Middle C*, the third lesson of *Reading music*: middle C is written on its own short ledger line just
 * below the treble staff, and it is the C the learner already knows near the middle of the keyboard.
 *
 * A demo plays C, D and E up and down, so the learner hears the notes before reading them. The learner
 * then learns where middle C is written and answers a quiz on it, and presses it on the keyboard. Next
 * come its neighbours D and E, which the learner names and then plays from the staff. The texts are
 * `middle-c.en.ts` and `middle-c.de.ts` beside it.
 */
import type { Lesson } from "../../model";
import { middleCDe } from "./middle-c.de";
import { middleCEn } from "./middle-c.en";

export const middleC: Lesson = {
  id: "middle-c",
  steps: [
    {
      id: "c-d-e-demo",
      kind: "demo",
      bpm: 80,
      notes: [
        { note: 60, at: 0, beats: 1 },
        { note: 62, at: 1, beats: 1 },
        { note: 64, at: 2, beats: 1 },
        { note: 62, at: 3, beats: 1 },
        { note: 60, at: 4, beats: 2 },
      ],
    },
    { id: "the-ledger-line", kind: "explain" },
    { id: "where-quiz", kind: "quiz", right: 1 },
    { id: "the-c-you-know", kind: "explain" },
    { id: "press-middle-c", kind: "find-key", key: 60, anyOctave: false },
    { id: "name-middle-c", kind: "read-note", clef: "treble", answer: "name", notes: [60, 67, 60], pass: 0.66 },
    { id: "the-neighbours", kind: "explain" },
    { id: "neighbour-quiz", kind: "quiz", right: 2 },
    { id: "name-c-d-e", kind: "read-note", clef: "treble", answer: "name", notes: [60, 62, 64, 62, 60, 64], pass: 0.66 },
    { id: "play-c-d-e", kind: "read-note", clef: "treble", answer: "play", notes: [64, 60, 62, 60, 64, 62], pass: 0.66 },
    { id: "recap", kind: "recap" },
  ],
  texts: { en: middleCEn, de: middleCDe },
};
