/**
 * *Quarter notes*, the second lesson of *Rhythm*: a quarter note lasts one beat, so you play one note on
 * each click.
 *
 * A demo plays quarter notes on middle C at a steady tempo first. The learner then answers how many
 * beats a quarter note lasts and taps a quarter note on every click. A second demo plays the start of
 * *Ode to Joy* in quarter notes, and the learner plays it in the C position. The texts are
 * `quarter-notes.en.ts` and `quarter-notes.de.ts` beside it.
 */
import type { Lesson } from "../../model";
import { quarterNotesEn } from "./quarter-notes.en";

export const quarterNotes: Lesson = {
  id: "quarter-notes",
  steps: [
    {
      id: "quarter-demo",
      kind: "demo",
      bpm: 80,
      notes: [
        { note: 60, at: 0, beats: 1 },
        { note: 60, at: 1, beats: 1 },
        { note: 60, at: 2, beats: 1 },
        { note: 60, at: 3, beats: 1 },
        { note: 60, at: 4, beats: 1 },
        { note: 60, at: 5, beats: 1 },
        { note: 60, at: 6, beats: 1 },
        { note: 60, at: 7, beats: 1 },
      ],
    },
    { id: "what-a-quarter-note-is", kind: "explain" },
    { id: "quarter-beats-quiz", kind: "quiz", right: 0 },
    { id: "quarter-taps", kind: "rhythm-tap", bpm: 80, taps: 8, pass: 0.75 },
    {
      id: "phrase-demo",
      kind: "demo",
      bpm: 80,
      notes: [
        { note: 64, at: 0, beats: 1 },
        { note: 64, at: 1, beats: 1 },
        { note: 65, at: 2, beats: 1 },
        { note: 67, at: 3, beats: 1 },
        { note: 67, at: 4, beats: 1 },
        { note: 65, at: 5, beats: 1 },
        { note: 64, at: 6, beats: 1 },
        { note: 62, at: 7, beats: 1 },
      ],
    },
    { id: "quarter-phrase", kind: "play-notes", notes: [64, 64, 65, 67, 67, 65, 64, 62] },
    { id: "recap", kind: "recap" },
  ],
  texts: { en: quarterNotesEn },
};
