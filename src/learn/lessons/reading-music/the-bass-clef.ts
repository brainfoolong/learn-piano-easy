/**
 * *The bass clef*, the fifth lesson of *Reading music*: the bass clef writes the low notes, mostly for the
 * left hand. Its two dots sit around the fourth line, which makes that line the F below middle C.
 *
 * A demo plays the low notes of the left-hand C position first. The learner then answers which clef
 * writes low notes, and which line the clef's dots mark. Next the learner plays the F on that line, reads
 * where its neighbours sit, and names notes around F. The texts are `the-bass-clef.en.ts` and
 * `the-bass-clef.de.ts` beside it.
 */
import type { Lesson } from "../../model";
import { theBassClefEn } from "./the-bass-clef.en";

export const theBassClef: Lesson = {
  id: "the-bass-clef",
  steps: [
    {
      id: "low-notes-demo",
      kind: "demo",
      bpm: 90,
      notes: [
        { note: 48, at: 0, beats: 1 },
        { note: 50, at: 1, beats: 1 },
        { note: 52, at: 2, beats: 1 },
        { note: 53, at: 3, beats: 1 },
        { note: 55, at: 4, beats: 2 },
      ],
    },
    { id: "what-the-bass-clef-is", kind: "explain" },
    { id: "low-notes-clef-quiz", kind: "quiz", right: 1 },
    { id: "the-f-line", kind: "explain" },
    { id: "f-line-quiz", kind: "quiz", right: 1 },
    { id: "play-bass-f", kind: "read-note", clef: "bass", answer: "play", notes: [53], pass: 1 },
    { id: "neighbours-of-f", kind: "explain" },
    { id: "name-bass-notes", kind: "read-note", clef: "bass", answer: "name", notes: [53, 55, 52, 53, 50, 57], pass: 0.66 },
    { id: "recap", kind: "recap" },
  ],
  texts: { en: theBassClefEn },
};
