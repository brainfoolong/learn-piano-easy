/**
 * *A held bass note*, a lesson of *Both hands*: the left hand plays one long bass note and holds it,
 * while the right hand plays a tune over it.
 *
 * A demo plays a whole note in the left hand under four quarter notes in the right. The learner answers
 * when the bass lets go, then plays one bar and two bars over a whole-note bass. A second demo plays a
 * bass of half notes, which changes every two beats, and the learner answers and plays it too. Each
 * check presses the bass as a chord with the tune's first note, then the tune's single notes. The judge
 * never checks how long a key is held, so the texts ask the learner to hold it, and the demos show it.
 * The texts are `a-held-bass-note.en.ts` and `a-held-bass-note.de.ts` beside it.
 */
import type { Lesson } from "../../model";
import { aHeldBassNoteDe } from "./a-held-bass-note.de";
import { aHeldBassNoteEn } from "./a-held-bass-note.en";

export const aHeldBassNote: Lesson = {
  id: "a-held-bass-note",
  skills: ["held-bass"],
  steps: [
    {
      id: "bass-under-tune",
      kind: "demo",
      bpm: 80,
      notes: [
        { note: 48, at: 0, beats: 4 },
        { note: 60, at: 0, beats: 1 },
        { note: 62, at: 1, beats: 1 },
        { note: 64, at: 2, beats: 1 },
        { note: 65, at: 3, beats: 1 },
        { note: 55, at: 4, beats: 4 },
        { note: 67, at: 4, beats: 1 },
        { note: 65, at: 5, beats: 1 },
        { note: 64, at: 6, beats: 1 },
        { note: 62, at: 7, beats: 1 },
      ],
    },
    { id: "hold-it", kind: "explain" },
    { id: "let-go-quiz", kind: "quiz", right: 0 },
    { id: "first-bar", kind: "play-notes", notes: [[48, 60], 62, 64, 65] },
    { id: "both-bars", kind: "play-notes", notes: [[48, 60], 62, 64, 65, [55, 67], 65, 64, 62] },
    { id: "half-bass", kind: "explain" },
    {
      id: "half-note-bass",
      kind: "demo",
      bpm: 80,
      notes: [
        { note: 48, at: 0, beats: 2 },
        { note: 64, at: 0, beats: 1 },
        { note: 65, at: 1, beats: 1 },
        { note: 55, at: 2, beats: 2 },
        { note: 67, at: 2, beats: 1 },
        { note: 65, at: 3, beats: 1 },
        { note: 53, at: 4, beats: 2 },
        { note: 64, at: 4, beats: 1 },
        { note: 62, at: 5, beats: 1 },
        { note: 48, at: 6, beats: 2 },
        { note: 60, at: 6, beats: 2 },
      ],
    },
    { id: "half-bass-quiz", kind: "quiz", right: 1 },
    { id: "half-bass-tune", kind: "play-notes", notes: [[48, 64], 65, [55, 67], 65, [53, 64], 62, [48, 60]] },
    { id: "recap", kind: "recap" },
  ],
  texts: { en: aHeldBassNoteEn, de: aHeldBassNoteDe },
};
