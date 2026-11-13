/**
 * *The grand staff*, the seventh lesson of *Reading music*: piano music joins a treble staff for the
 * right hand and a bass staff for the left with a brace. Middle C sits on a ledger line between them,
 * and belongs to both.
 *
 * A demo climbs from low C to high C across both staves first. The learner then matches each staff to
 * its hand and finds middle C between them. They name and play the landmark notes in each clef, middle
 * C in both. The texts are `the-grand-staff.en.ts` and `the-grand-staff.de.ts` beside it.
 */
import type { Lesson } from "../../model";
import { theGrandStaffEn } from "./the-grand-staff.en";

export const theGrandStaff: Lesson = {
  id: "the-grand-staff",
  steps: [
    {
      id: "climb-demo",
      kind: "demo",
      bpm: 80,
      notes: [
        { note: 48, at: 0, beats: 1 },
        { note: 53, at: 1, beats: 1 },
        { note: 60, at: 2, beats: 1 },
        { note: 67, at: 3, beats: 1 },
        { note: 72, at: 4, beats: 2 },
      ],
    },
    { id: "two-staves", kind: "explain" },
    { id: "which-hand-quiz", kind: "quiz", right: 0 },
    { id: "middle-c-between", kind: "explain" },
    { id: "middle-c-quiz", kind: "quiz", right: 1 },
    { id: "treble-names", kind: "read-note", clef: "treble", answer: "name", notes: [67, 60, 72], pass: 0.66 },
    { id: "bass-names", kind: "read-note", clef: "bass", answer: "name", notes: [53, 60, 48], pass: 0.66 },
    { id: "low-c-staff-quiz", kind: "quiz", right: 1 },
    { id: "bass-play", kind: "read-note", clef: "bass", answer: "play", notes: [48, 53, 60], pass: 0.66 },
    { id: "treble-play", kind: "read-note", clef: "treble", answer: "play", notes: [60, 67, 72], pass: 0.66 },
    { id: "recap", kind: "recap" },
  ],
  texts: { en: theGrandStaffEn },
};
