/**
 * *Hands take turns*, a lesson of *First melodies*: both hands sit in C position at once, an octave
 * apart, and a tune passes from one hand to the other while the other waits.
 *
 * A demo plays a call in the right hand and its echo in the left first. The learner then answers which
 * hand plays the low notes, hears a phrase and its echo, plays two short phrases that switch hands, and
 * ends on a longer phrase with three turns. The texts are `hands-take-turns.en.ts` and
 * `hands-take-turns.de.ts` beside it.
 */
import type { Lesson } from "../../model";
import { handsTakeTurnsDe } from "./hands-take-turns.de";
import { handsTakeTurnsEn } from "./hands-take-turns.en";

export const handsTakeTurns: Lesson = {
  id: "hands-take-turns",
  steps: [
    {
      id: "call-and-answer",
      kind: "demo",
      bpm: 90,
      notes: [
        { note: 60, at: 0, beats: 1 },
        { note: 62, at: 1, beats: 1 },
        { note: 64, at: 2, beats: 2 },
        { note: 48, at: 4, beats: 1 },
        { note: 50, at: 5, beats: 1 },
        { note: 52, at: 6, beats: 2 },
      ],
    },
    { id: "both-positions", kind: "explain" },
    { id: "low-hand-quiz", kind: "quiz", right: 0 },
    { id: "echo-listen", kind: "listen", pairs: [[64, 52], [48, 60], [55, 55]], pass: 0.66 },
    { id: "first-turn", kind: "play-notes", notes: [60, 62, 64, 48, 50, 52] },
    { id: "second-turn", kind: "play-notes", notes: [67, 65, 64, 55, 53, 52] },
    { id: "one-waits", kind: "explain" },
    { id: "long-phrase", kind: "play-notes", notes: [60, 62, 64, 64, 48, 50, 52, 52, 67, 65, 64, 62, 60, 55, 53, 52, 50, 48] },
    { id: "recap", kind: "recap" },
  ],
  texts: { en: handsTakeTurnsEn, de: handsTakeTurnsDe },
};
