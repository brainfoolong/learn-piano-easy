/**
 * *The treble clef*, the second lesson of *Reading music*: the treble clef curls around the second line,
 * which makes that line G, and the learner names its neighbours by stepping along the lines and spaces.
 *
 * An explanation brings in the clef, and a second shows the curl around the G line, checked by a quiz.
 * A demo plays that G, and the learner plays it from the staff. Then the neighbours A and F, and B and E
 * a step further, each heard or asked at once. The learner plays notes near G from the staff, then names
 * them in `name-treble-notes`, the step the world's skip test picks. A recap closes the lesson. The texts
 * are `the-treble-clef.en.ts` and `the-treble-clef.de.ts` beside it.
 */
import type { Lesson } from "../../model";
import { theTrebleClefDe } from "./the-treble-clef.de";
import { theTrebleClefEn } from "./the-treble-clef.en";

export const theTrebleClef: Lesson = {
  id: "the-treble-clef",
  steps: [
    { id: "a-clef-starts-the-staff", kind: "explain" },
    { id: "the-g-line", kind: "explain" },
    { id: "g-line-quiz", kind: "quiz", right: 1 },
    {
      id: "hear-g-demo",
      kind: "demo",
      bpm: 80,
      notes: [
        { note: 67, at: 0, beats: 2 },
        { note: 67, at: 2, beats: 2 },
      ],
    },
    { id: "play-g", kind: "read-note", clef: "treble", answer: "play", notes: [67], pass: 1 },
    { id: "g-neighbours", kind: "explain" },
    {
      id: "neighbours-demo",
      kind: "demo",
      bpm: 80,
      notes: [
        { note: 67, at: 0, beats: 1 },
        { note: 69, at: 1, beats: 1 },
        { note: 67, at: 2, beats: 1 },
        { note: 65, at: 3, beats: 1 },
        { note: 67, at: 4, beats: 2 },
      ],
    },
    { id: "space-above-g-quiz", kind: "quiz", right: 1 },
    { id: "one-more-step", kind: "explain" },
    { id: "middle-line-quiz", kind: "quiz", right: 2 },
    { id: "play-treble-notes", kind: "read-note", clef: "treble", answer: "play", notes: [67, 69, 65, 71], pass: 0.75 },
    { id: "name-treble-notes", kind: "read-note", clef: "treble", answer: "name", notes: [67, 69, 65, 67, 71, 64], pass: 0.66 },
    { id: "recap", kind: "recap" },
  ],
  texts: { en: theTrebleClefEn, de: theTrebleClefDe },
};
