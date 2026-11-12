/**
 * *Reading steps and skips*, the last lesson of *Reading music* before its boss: a tune is read by its
 * moves. A step goes from a line to the next space, or a space to the next line. A skip goes from line
 * to line, or space to space.
 *
 * A demo climbs by steps, then by skips, on the treble staff first. Explains show each move on the
 * staff, and a quiz checks each. The learner then reads a note by its move from a landmark. They name
 * the next song's first note, play its notes and its opening. The texts are
 * `reading-steps-and-skips.en.ts` and `reading-steps-and-skips.de.ts` beside it.
 */
import type { Lesson } from "../../model";
import { readingStepsAndSkipsDe } from "./reading-steps-and-skips.de";
import { readingStepsAndSkipsEn } from "./reading-steps-and-skips.en";

export const readingStepsAndSkips: Lesson = {
  id: "reading-steps-and-skips",
  steps: [
    {
      id: "moves-demo",
      kind: "demo",
      bpm: 80,
      notes: [
        { note: 64, at: 0, beats: 1 },
        { note: 65, at: 1, beats: 1 },
        { note: 67, at: 2, beats: 2 },
        { note: 64, at: 4, beats: 1 },
        { note: 67, at: 5, beats: 1 },
        { note: 71, at: 6, beats: 2 },
      ],
    },
    { id: "step-on-the-staff", kind: "explain" },
    { id: "step-from-line-quiz", kind: "quiz", right: 0 },
    { id: "skip-on-the-staff", kind: "explain" },
    { id: "step-or-skip-quiz", kind: "quiz", right: 1 },
    { id: "space-to-line-quiz", kind: "quiz", right: 0 },
    { id: "read-by-moves", kind: "explain" },
    { id: "skip-from-e-quiz", kind: "quiz", right: 2 },
    { id: "first-note", kind: "read-note", clef: "treble", answer: "name", notes: [67], pass: 1 },
    { id: "song-notes", kind: "read-note", clef: "treble", answer: "play", notes: [62, 64, 67, 69, 71], pass: 0.6 },
    { id: "song-opening", kind: "play-notes", notes: [67, 67, 67, 62, 64, 64, 62] },
    { id: "opening-move-quiz", kind: "quiz", right: 0 },
    { id: "recap", kind: "recap" },
  ],
  texts: { en: readingStepsAndSkipsEn, de: readingStepsAndSkipsDe },
};
