/**
 * *Phrases*, a lesson of *Expression*: music speaks in sentences, and a phrase is one musical sentence,
 * often four bars long and shown by a long slur.
 *
 * A demo plays a question phrase and its answer, each swelling and fading. The learner learns what a
 * phrase is and what a long slur shows, and plays the question phrase. They learn to breathe between
 * phrases and play question and answer with a breath between them. They hear why the first sounds open
 * and the second finished, and name the note that ends an answer. A second demo rises and falls in
 * loudness, and the learner finds where a phrase is loudest. They shape both phrases themselves and say
 * when to breathe. The texts are `phrases.en.ts` and `phrases.de.ts` beside it.
 */
import type { Lesson } from "../../model";
import { phrasesEn } from "./phrases.en";

export const phrases: Lesson = {
  id: "phrases",
  steps: [
    {
      id: "phrase-demo",
      kind: "demo",
      bpm: 96,
      notes: [
        { note: 60, at: 0, beats: 1, velocity: 48, finger: 1 },
        { note: 62, at: 1, beats: 1, velocity: 56, finger: 2 },
        { note: 64, at: 2, beats: 1, velocity: 66, finger: 3 },
        { note: 65, at: 3, beats: 1, velocity: 76, finger: 4 },
        { note: 67, at: 4, beats: 2, velocity: 96, finger: 5 },
        { note: 64, at: 6, beats: 2, velocity: 84, finger: 3 },
        { note: 65, at: 8, beats: 1, velocity: 72, finger: 4 },
        { note: 64, at: 9, beats: 1, velocity: 62, finger: 3 },
        { note: 62, at: 10, beats: 1, velocity: 54, finger: 2 },
        { note: 64, at: 11, beats: 1, velocity: 50, finger: 3 },
        { note: 62, at: 12, beats: 3, velocity: 44, finger: 2 },
        { note: 60, at: 16, beats: 1, velocity: 48, finger: 1 },
        { note: 62, at: 17, beats: 1, velocity: 56, finger: 2 },
        { note: 64, at: 18, beats: 1, velocity: 66, finger: 3 },
        { note: 65, at: 19, beats: 1, velocity: 76, finger: 4 },
        { note: 67, at: 20, beats: 2, velocity: 104, finger: 5 },
        { note: 64, at: 22, beats: 2, velocity: 88, finger: 3 },
        { note: 65, at: 24, beats: 1, velocity: 72, finger: 4 },
        { note: 64, at: 25, beats: 1, velocity: 60, finger: 3 },
        { note: 62, at: 26, beats: 1, velocity: 52, finger: 2 },
        { note: 62, at: 27, beats: 1, velocity: 46, finger: 2 },
        { note: 60, at: 28, beats: 4, velocity: 40, finger: 1 },
      ],
    },
    { id: "musical-sentences", kind: "explain" },
    { id: "what-is-a-phrase", kind: "quiz", right: 1 },
    { id: "the-long-slur", kind: "explain" },
    { id: "slur-shows", kind: "quiz", right: 0 },
    { id: "play-question", kind: "play-notes", notes: [60, 62, 64, 65, 67, 64, 65, 64, 62, 64, 62] },
    { id: "breathe", kind: "explain" },
    { id: "question-and-answer", kind: "play-notes", notes: [60, 62, 64, 65, 67, 64, 65, 64, 62, 64, 62, 60, 62, 64, 65, 67, 64, 65, 64, 62, 62, 60] },
    { id: "open-and-home", kind: "explain" },
    { id: "which-ends-answer", kind: "quiz", right: 3 },
    {
      id: "rise-and-fall-demo",
      kind: "demo",
      bpm: 80,
      notes: [
        { note: 60, at: 0, beats: 1, velocity: 40, finger: 1 },
        { note: 62, at: 1, beats: 1, velocity: 55, finger: 2 },
        { note: 64, at: 2, beats: 1, velocity: 72, finger: 3 },
        { note: 65, at: 3, beats: 1, velocity: 90, finger: 4 },
        { note: 67, at: 4, beats: 1, velocity: 110, finger: 5 },
        { note: 65, at: 5, beats: 1, velocity: 90, finger: 4 },
        { note: 64, at: 6, beats: 1, velocity: 72, finger: 3 },
        { note: 62, at: 7, beats: 1, velocity: 55, finger: 2 },
        { note: 60, at: 8, beats: 2, velocity: 40, finger: 1 },
      ],
    },
    { id: "where-loudest", kind: "quiz", right: 2 },
    { id: "shape-both-phrases", kind: "play-notes", notes: [60, 62, 64, 65, 67, 64, 65, 64, 62, 64, 62, 60, 62, 64, 65, 67, 64, 65, 64, 62, 62, 60] },
    { id: "when-to-breathe", kind: "quiz", right: 1 },
    { id: "recap", kind: "recap" },
  ],
  texts: { en: phrasesEn },
};
