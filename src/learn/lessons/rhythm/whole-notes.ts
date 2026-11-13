/**
 * *Whole notes*, the fourth lesson of *Rhythm*: a whole note lasts four beats, as long as two half notes
 * or four quarter notes.
 *
 * A demo plays two half notes and then a whole note first, so the learner hears the longest note. The
 * learner then answers how many beats a whole note lasts. A second demo fills four beats with a whole
 * note, two halves and four quarters. Two quizzes ask what lasts as long as a whole note. Last, the learner plays whole
 * notes while holding them and keeps the beat while counting "1-2-3-4". The texts are `whole-notes.en.ts`
 * and `whole-notes.de.ts` beside it.
 */
import type { Lesson } from "../../model";
import { wholeNotesEn } from "./whole-notes.en";

export const wholeNotes: Lesson = {
  id: "whole-notes",
  steps: [
    {
      id: "halves-then-whole-demo",
      kind: "demo",
      bpm: 80,
      notes: [
        { note: 64, at: 0, beats: 2 },
        { note: 64, at: 2, beats: 2 },
        { note: 60, at: 4, beats: 4 },
      ],
    },
    { id: "what-a-whole-note-is", kind: "explain" },
    { id: "whole-beats-quiz", kind: "quiz", right: 2 },
    {
      id: "four-beats-three-ways-demo",
      kind: "demo",
      bpm: 80,
      notes: [
        { note: 60, at: 0, beats: 4 },
        { note: 64, at: 4, beats: 2 },
        { note: 64, at: 6, beats: 2 },
        { note: 67, at: 8, beats: 1 },
        { note: 67, at: 9, beats: 1 },
        { note: 67, at: 10, beats: 1 },
        { note: 67, at: 11, beats: 1 },
      ],
    },
    { id: "same-as-whole-quiz", kind: "quiz", right: 1 },
    { id: "quarters-in-whole-quiz", kind: "quiz", right: 1 },
    { id: "play-and-hold", kind: "play-notes", notes: [60, 64, 67] },
    { id: "count-to-four", kind: "rhythm-tap", bpm: 80, taps: 8, pass: 0.75 },
    { id: "recap", kind: "recap" },
  ],
  texts: { en: wholeNotesEn },
};
