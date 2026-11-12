/**
 * *Reading steps and skips*, the last lesson of *Reading music* before its boss: a tune is read by its
 * moves. A step goes from a line to the next space, or a space to the next line. A skip goes from line
 * to line, or space to space.
 *
 * A demo climbs by steps, then by skips, on the treble staff first. Explains show each move on the
 * staff, and a quiz checks each. The learner then reads a note by its move from a landmark, and names
 * the next song's first note. The boss starts with the right thumb on D, which no earlier lesson
 * teaches, so a demo shows the hand on D E G A B, and the learner plays those keys up and down. They
 * then play the song's notes and its opening in that position. The boss also has a dotted quarter, an
 * eighth rest and a dotted half, which *Both hands* teaches only later. A demo plays the two bars that
 * hold them, a quiz checks the dotted half, and the learner plays both bars in time. The texts are
 * `reading-steps-and-skips.en.ts` and `reading-steps-and-skips.de.ts` beside it.
 */
import type { Lesson, PhraseNote } from "../../model";
import { readingStepsAndSkipsDe } from "./reading-steps-and-skips.de";
import { readingStepsAndSkipsEn } from "./reading-steps-and-skips.en";

/** Bars 2 and 4 of the boss: E, E, a dotted quarter D and an eighth rest, then a dotted half G and D. */
const DOTTED: PhraseNote[] = [
  { note: 64, at: 0, beats: 1 },
  { note: 64, at: 1, beats: 1 },
  { note: 62, at: 2, beats: 1.5 },
  { note: 67, at: 4, beats: 3 },
  { note: 62, at: 7, beats: 1 },
];

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
    {
      id: "hand-on-d",
      kind: "demo",
      bpm: 80,
      notes: [
        { note: 62, at: 0, beats: 1 },
        { note: 64, at: 1, beats: 1 },
        { note: 67, at: 2, beats: 1 },
        { note: 69, at: 3, beats: 1 },
        { note: 71, at: 4, beats: 2 },
        { note: 69, at: 6, beats: 1 },
        { note: 67, at: 7, beats: 1 },
        { note: 64, at: 8, beats: 1 },
        { note: 62, at: 9, beats: 2 },
      ],
    },
    { id: "d-position", kind: "play-notes", notes: [62, 64, 67, 69, 71, 69, 67, 64, 62] },
    { id: "song-notes", kind: "read-note", clef: "treble", answer: "play", notes: [62, 64, 67, 69, 71], pass: 0.6 },
    { id: "song-opening", kind: "play-notes", notes: [67, 67, 67, 62, 64, 64, 62] },
    { id: "opening-move-quiz", kind: "quiz", right: 0 },
    { id: "dotted-demo", kind: "demo", bpm: 80, notes: DOTTED },
    { id: "dotted-half-quiz", kind: "quiz", right: 1 },
    { id: "dotted-tap", kind: "rhythm-tap", bpm: 80, taps: 8, notes: DOTTED, pass: 0.8 },
    { id: "recap", kind: "recap" },
  ],
  texts: { en: readingStepsAndSkipsEn, de: readingStepsAndSkipsDe },
};
