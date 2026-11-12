/**
 * *Eighth notes*, a lesson of *Both hands*: two eighth notes fill one beat, and you count them
 * "1 and 2 and".
 *
 * A demo plays quarter notes and then eighth notes on middle C first. The learner answers how many
 * eighths fill a beat, learns to count "and", and taps every eighth of a slow beat. The tap's tempo is
 * twice the beat's, so each click is one eighth. A demo then plays a phrase with eighths over a held
 * bass note, and the learner plays it with a chord for each bass note. The texts are
 * `eighth-notes.en.ts` and `eighth-notes.de.ts` beside it.
 */
import type { Lesson } from "../../model";
import { eighthNotesDe } from "./eighth-notes.de";
import { eighthNotesEn } from "./eighth-notes.en";

export const eighthNotes: Lesson = {
  id: "eighth-notes",
  skills: ["eighth-notes"],
  steps: [
    {
      id: "eighth-demo",
      kind: "demo",
      bpm: 60,
      notes: [
        { note: 60, at: 0, beats: 1 },
        { note: 60, at: 1, beats: 1 },
        { note: 60, at: 2, beats: 1 },
        { note: 60, at: 3, beats: 1 },
        { note: 60, at: 4, beats: 0.5 },
        { note: 60, at: 4.5, beats: 0.5 },
        { note: 60, at: 5, beats: 0.5 },
        { note: 60, at: 5.5, beats: 0.5 },
        { note: 60, at: 6, beats: 0.5 },
        { note: 60, at: 6.5, beats: 0.5 },
        { note: 60, at: 7, beats: 0.5 },
        { note: 60, at: 7.5, beats: 0.5 },
      ],
    },
    { id: "what-an-eighth-note-is", kind: "explain" },
    { id: "eighths-per-beat-quiz", kind: "quiz", right: 1 },
    { id: "count-and", kind: "explain" },
    {
      id: "counting-demo",
      kind: "demo",
      bpm: 60,
      notes: [
        { note: 60, at: 0, beats: 1 },
        { note: 62, at: 1, beats: 1 },
        { note: 64, at: 2, beats: 0.5 },
        { note: 64, at: 2.5, beats: 0.5 },
        { note: 67, at: 3, beats: 1 },
      ],
    },
    { id: "eighth-taps", kind: "rhythm-tap", bpm: 120, taps: 8, pass: 0.75 },
    { id: "eighths-per-bar-quiz", kind: "quiz", right: 2 },
    {
      id: "phrase-demo",
      kind: "demo",
      bpm: 70,
      notes: [
        { note: 48, at: 0, beats: 4 },
        { note: 60, at: 0, beats: 0.5 },
        { note: 62, at: 0.5, beats: 0.5 },
        { note: 64, at: 1, beats: 0.5 },
        { note: 65, at: 1.5, beats: 0.5 },
        { note: 67, at: 2, beats: 2 },
        { note: 48, at: 4, beats: 4 },
        { note: 67, at: 4, beats: 0.5 },
        { note: 65, at: 4.5, beats: 0.5 },
        { note: 64, at: 5, beats: 0.5 },
        { note: 62, at: 5.5, beats: 0.5 },
        { note: 60, at: 6, beats: 2 },
      ],
    },
    { id: "eighth-phrase", kind: "play-notes", notes: [[48, 60], 62, 64, 65, 67, [48, 67], 65, 64, 62, 60] },
    { id: "recap", kind: "recap" },
  ],
  texts: { en: eighthNotesEn, de: eighthNotesDe },
};
