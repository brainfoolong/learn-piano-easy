/**
 * *Key signatures*, a lesson of *Scales and keys*: the sharps or flats at the start of each staff line
 * say which notes are always raised or lowered, and so which key the music is in.
 *
 * Two explains teach the idea, and three quizzes name the key of one sharp, one flat and none. A
 * `read-note` shows that a note keeps its letter, since its staff shows no key signature. The learner
 * then plays a phrase in G major that needs F♯ and one in F major that needs B♭. The texts are
 * `key-signatures.en.ts` and `key-signatures.de.ts` beside it.
 */
import type { Lesson } from "../../model";
import { keySignaturesEn } from "./key-signatures.en";

export const keySignatures: Lesson = {
  id: "key-signatures",
  steps: [
    { id: "signs-at-the-start", kind: "explain" },
    { id: "every-octave", kind: "explain" },
    { id: "one-sharp", kind: "quiz", right: 0 },
    { id: "one-flat", kind: "quiz", right: 1 },
    { id: "no-signs", kind: "quiz", right: 2 },
    { id: "letter-stays", kind: "read-note", clef: "treble", answer: "name", notes: [77, 65, 71, 69], pass: 0.75 },
    { id: "f-in-g-major", kind: "quiz", right: 0 },
    {
      id: "phrase-in-g",
      kind: "demo",
      bpm: 72,
      notes: [
        { note: 74, at: 0, beats: 1 },
        { note: 76, at: 1, beats: 1 },
        { note: 78, at: 2, beats: 1 },
        { note: 79, at: 3, beats: 1 },
        { note: 78, at: 4, beats: 1 },
        { note: 76, at: 5, beats: 1 },
        { note: 74, at: 6, beats: 2 },
      ],
    },
    { id: "play-in-g", kind: "play-notes", notes: [74, 76, 78, 79, 78, 76, 74] },
    { id: "b-in-f-major", kind: "quiz", right: 1 },
    { id: "play-in-f", kind: "play-notes", notes: [65, 67, 69, 70, 72, 70, 69, 67, 65] },
    { id: "recap", kind: "recap" },
  ],
  texts: { en: keySignaturesEn },
};
