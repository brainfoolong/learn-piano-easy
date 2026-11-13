/**
 * *Half notes*, the third lesson of *Rhythm*: a half note lasts two beats, so the learner plays it and
 * holds it through the next beat.
 *
 * A demo plays four quarter notes and then half notes first, so the learner hears the longer notes. The
 * learner then answers how many beats a half note lasts, and plays a phrase while holding each note. Next
 * the learner keeps the beat with the metronome while counting "1-2". Two quizzes ask which note is
 * longer and how many half notes fill four beats. The texts are `half-notes.en.ts` and `half-notes.de.ts` beside it.
 */
import type { Lesson } from "../../model";
import { halfNotesEn } from "./half-notes.en";

export const halfNotes: Lesson = {
  id: "half-notes",
  steps: [
    {
      id: "quarters-then-halves-demo",
      kind: "demo",
      bpm: 80,
      notes: [
        { note: 60, at: 0, beats: 1 },
        { note: 60, at: 1, beats: 1 },
        { note: 60, at: 2, beats: 1 },
        { note: 60, at: 3, beats: 1 },
        { note: 64, at: 4, beats: 2 },
        { note: 64, at: 6, beats: 2 },
        { note: 67, at: 8, beats: 2 },
        { note: 67, at: 10, beats: 2 },
      ],
    },
    { id: "what-a-half-note-is", kind: "explain" },
    { id: "half-beats-quiz", kind: "quiz", right: 1 },
    { id: "play-and-hold", kind: "play-notes", notes: [60, 62, 64, 62, 60] },
    { id: "count-one-two", kind: "rhythm-tap", bpm: 70, taps: 8, pass: 0.75 },
    { id: "which-is-longer-quiz", kind: "quiz", right: 1 },
    { id: "halves-in-four-quiz", kind: "quiz", right: 1 },
    { id: "recap", kind: "recap" },
  ],
  texts: { en: halfNotesEn },
};
