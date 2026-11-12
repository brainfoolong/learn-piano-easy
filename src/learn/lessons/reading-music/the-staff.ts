/**
 * *The staff*, the first lesson of *Reading music*: music is written on five lines and four spaces, a
 * note sits on a line or in a space, and a note higher on the staff sounds higher.
 *
 * Three explanations bring in the lines, the spaces and where a note sits, each checked at once by a
 * quiz. Then a demo climbs from the bottom line to the top line, so the learner hears higher on the staff
 * as higher in sound. A `listen` step and two quizzes check it, and a recap closes the lesson. No step
 * names a note yet, since the clef comes in the next lesson. The texts are `the-staff.en.ts` and
 * `the-staff.de.ts` beside it.
 */
import type { Lesson } from "../../model";
import { theStaffDe } from "./the-staff.de";
import { theStaffEn } from "./the-staff.en";

export const theStaff: Lesson = {
  id: "the-staff",
  steps: [
    { id: "five-lines", kind: "explain" },
    { id: "lines-quiz", kind: "quiz", right: 1 },
    { id: "four-spaces", kind: "explain" },
    { id: "spaces-quiz", kind: "quiz", right: 1 },
    { id: "line-or-space", kind: "explain" },
    { id: "line-or-space-quiz", kind: "quiz", right: 0 },
    { id: "higher-is-higher", kind: "explain" },
    {
      id: "climb-demo",
      kind: "demo",
      bpm: 90,
      notes: [
        { note: 64, at: 0, beats: 1 },
        { note: 65, at: 1, beats: 1 },
        { note: 67, at: 2, beats: 1 },
        { note: 69, at: 3, beats: 1 },
        { note: 71, at: 4, beats: 1 },
        { note: 72, at: 5, beats: 1 },
        { note: 74, at: 6, beats: 1 },
        { note: 76, at: 7, beats: 1 },
        { note: 77, at: 8, beats: 2 },
      ],
    },
    {
      id: "higher-or-lower-listen",
      kind: "listen",
      pairs: [
        [64, 71],
        [77, 67],
        [69, 69],
        [65, 74],
      ],
      pass: 0.75,
    },
    { id: "top-or-bottom-quiz", kind: "quiz", right: 1 },
    { id: "first-line-quiz", kind: "quiz", right: 0 },
    { id: "recap", kind: "recap" },
  ],
  texts: { en: theStaffEn, de: theStaffDe },
};
