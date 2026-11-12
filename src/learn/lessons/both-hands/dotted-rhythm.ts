/**
 * *The dotted rhythm*, a lesson of *Both hands*: a dot after a note adds half its length, so a dotted
 * quarter lasts one and a half beats and an eighth fills the beat after it.
 *
 * A demo plays the end of *Ode to Joy* in even quarter notes and then in the dotted rhythm first. The
 * learner then learns what a dot does, hears a dotted half, and counts the beats of a dotted half and a
 * dotted quarter in quizzes. A last demo plays the four bars of *Ode to Joy* with the dotted rhythm in
 * bar 4, and the learner plays them in C position. The boss's left hand changes between C with G, a
 * fifth, and D with G, a fourth that fingers 4 and 1 play. A demo plays both pairs, and the learner
 * plays them. The texts are `dotted-rhythm.en.ts` and `dotted-rhythm.de.ts` beside it.
 */
import type { Lesson } from "../../model";
import { dottedRhythmDe } from "./dotted-rhythm.de";
import { dottedRhythmEn } from "./dotted-rhythm.en";

/** The boss's two bass pairs, twice: C3 with G3, a fifth, and D3 with G3, a fourth. */
const FIFTH_AND_FOURTH = [
  [48, 55],
  [50, 55],
  [48, 55],
  [50, 55],
];

export const dottedRhythm: Lesson = {
  id: "dotted-rhythm",
  skills: ["dotted-rhythm"],
  steps: [
    {
      id: "even-and-dotted-demo",
      kind: "demo",
      bpm: 70,
      notes: [
        { note: 64, at: 0, beats: 1 },
        { note: 64, at: 1, beats: 1 },
        { note: 62, at: 2, beats: 1 },
        { note: 62, at: 3, beats: 1 },
        { note: 64, at: 4, beats: 1.5 },
        { note: 62, at: 5.5, beats: 0.5 },
        { note: 62, at: 6, beats: 2 },
      ],
    },
    { id: "what-a-dot-does", kind: "explain" },
    {
      id: "dotted-half-demo",
      kind: "demo",
      bpm: 80,
      notes: [
        { note: 60, at: 0, beats: 3 },
        { note: 64, at: 3, beats: 3 },
        { note: 67, at: 6, beats: 3 },
      ],
    },
    { id: "dotted-half-quiz", kind: "quiz", right: 1 },
    { id: "dotted-quarter", kind: "explain" },
    { id: "dotted-quarter-quiz", kind: "quiz", right: 1 },
    { id: "partner-quiz", kind: "quiz", right: 1 },
    {
      id: "ode-demo",
      kind: "demo",
      bpm: 90,
      notes: [
        { note: 64, at: 0, beats: 1 },
        { note: 64, at: 1, beats: 1 },
        { note: 65, at: 2, beats: 1 },
        { note: 67, at: 3, beats: 1 },
        { note: 67, at: 4, beats: 1 },
        { note: 65, at: 5, beats: 1 },
        { note: 64, at: 6, beats: 1 },
        { note: 62, at: 7, beats: 1 },
        { note: 60, at: 8, beats: 1 },
        { note: 60, at: 9, beats: 1 },
        { note: 62, at: 10, beats: 1 },
        { note: 64, at: 11, beats: 1 },
        { note: 64, at: 12, beats: 1.5 },
        { note: 62, at: 13.5, beats: 0.5 },
        { note: 62, at: 14, beats: 2 },
      ],
    },
    { id: "ode-phrase", kind: "play-notes", notes: [64, 64, 65, 67, 67, 65, 64, 62, 60, 60, 62, 64, 64, 62, 62] },
    {
      id: "fourth-demo",
      kind: "demo",
      bpm: 90,
      notes: FIFTH_AND_FOURTH.flatMap((pair, i) => pair.map((note) => ({ note, at: i * 4, beats: 4 }))),
    },
    { id: "fifth-and-fourth", kind: "play-notes", notes: FIFTH_AND_FOURTH },
    { id: "recap", kind: "recap" },
  ],
  texts: { en: dottedRhythmEn, de: dottedRhythmDe },
};
