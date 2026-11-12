/**
 * *Repeated notes*, the fourth lesson of *First melodies*: a note can sound twice or more in a row, and
 * the finger stays on its key and plays it again.
 *
 * A demo plays a phrase with repeats in the C position first. The learner then hears whether two notes
 * are the same, plays repeats on E, D and G, answers how many keys a repeat uses, and plays a phrase
 * that mixes steps, skips and repeats. The texts are `repeated-notes.en.ts` and `repeated-notes.de.ts`
 * beside it.
 */
import type { Lesson } from "../../model";
import { repeatedNotesDe } from "./repeated-notes.de";
import { repeatedNotesEn } from "./repeated-notes.en";

export const repeatedNotes: Lesson = {
  id: "repeated-notes",
  steps: [
    {
      id: "repeat-demo",
      kind: "demo",
      bpm: 90,
      notes: [
        { note: 64, at: 0, beats: 1 },
        { note: 64, at: 1, beats: 1 },
        { note: 64, at: 2, beats: 2 },
        { note: 62, at: 4, beats: 1 },
        { note: 62, at: 5, beats: 1 },
        { note: 62, at: 6, beats: 2 },
        { note: 64, at: 8, beats: 1 },
        { note: 67, at: 9, beats: 1 },
        { note: 67, at: 10, beats: 2 },
      ],
    },
    { id: "what-a-repeat-is", kind: "explain" },
    {
      id: "same-or-not",
      kind: "listen",
      pairs: [
        [64, 64],
        [64, 67],
        [62, 62],
        [65, 64],
      ],
      pass: 0.75,
    },
    { id: "repeat-e-d", kind: "play-notes", notes: [64, 64, 64, 62, 62, 62] },
    { id: "repeat-after-skip", kind: "play-notes", notes: [64, 67, 67] },
    { id: "how-many-keys-quiz", kind: "quiz", right: 0 },
    { id: "mixed-phrase", kind: "play-notes", notes: [60, 60, 62, 64, 64, 67, 65, 64, 62, 60] },
    { id: "recap", kind: "recap" },
  ],
  texts: { en: repeatedNotesEn, de: repeatedNotesDe },
};
