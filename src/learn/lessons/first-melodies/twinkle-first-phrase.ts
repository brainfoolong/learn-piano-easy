/**
 * *Twinkle's first phrase*, the last lesson of *First melodies* before its boss: a tune can leave the
 * five-finger position for one note.
 *
 * The learner hears the first phrase of *Twinkle Twinkle Little Star*, which leaps from C up to G and
 * reaches A, one key past G. They find A, stretching the little finger to it, and name the note of the
 * leap. They then play the phrase in two chunks, and the whole phrase at the end. The texts are
 * `twinkle-first-phrase.en.ts` and `twinkle-first-phrase.de.ts` beside it.
 */
import type { Lesson } from "../../model";
import { twinkleFirstPhraseDe } from "./twinkle-first-phrase.de";
import { twinkleFirstPhraseEn } from "./twinkle-first-phrase.en";

export const twinkleFirstPhrase: Lesson = {
  id: "twinkle-first-phrase",
  steps: [
    {
      id: "phrase-demo",
      kind: "demo",
      bpm: 90,
      notes: [
        { note: 60, at: 0, beats: 1 },
        { note: 60, at: 1, beats: 1 },
        { note: 67, at: 2, beats: 1 },
        { note: 67, at: 3, beats: 1 },
        { note: 69, at: 4, beats: 1 },
        { note: 69, at: 5, beats: 1 },
        { note: 67, at: 6, beats: 2 },
        { note: 65, at: 8, beats: 1 },
        { note: 65, at: 9, beats: 1 },
        { note: 64, at: 10, beats: 1 },
        { note: 64, at: 11, beats: 1 },
        { note: 62, at: 12, beats: 1 },
        { note: 62, at: 13, beats: 1 },
        { note: 60, at: 14, beats: 2 },
      ],
    },
    { id: "one-key-past", kind: "explain" },
    { id: "find-a", kind: "find-key", key: 69, anyOctave: false },
    { id: "leap-quiz", kind: "quiz", right: 2 },
    { id: "climb-up", kind: "play-notes", notes: [60, 60, 67, 67, 69, 69, 67] },
    { id: "walk-down", kind: "play-notes", notes: [65, 65, 64, 64, 62, 62, 60] },
    { id: "whole-phrase", kind: "play-notes", notes: [60, 60, 67, 67, 69, 69, 67, 65, 65, 64, 64, 62, 62, 60] },
    { id: "recap", kind: "recap" },
  ],
  texts: { en: twinkleFirstPhraseEn, de: twinkleFirstPhraseDe },
};
