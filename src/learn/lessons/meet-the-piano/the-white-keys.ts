/**
 * *The white keys*, a lesson of *Meet the piano*: the white keys are named with seven letters, C D E F G
 * A B, and then the letters start again. Each letter is found from the groups of black keys.
 *
 * It follows `find-c` and leads to `octaves`. The structure is here, and the texts are
 * `the-white-keys.en.ts` and `the-white-keys.de.ts` beside it.
 */
import type { Lesson } from "../../model";
import { theWhiteKeysEn } from "./the-white-keys.en";

export const theWhiteKeys: Lesson = {
  id: "the-white-keys",
  steps: [
    {
      id: "c-to-c",
      kind: "demo",
      bpm: 90,
      notes: [
        { note: 60, at: 0, beats: 1 },
        { note: 62, at: 1, beats: 1 },
        { note: 64, at: 2, beats: 1 },
        { note: 65, at: 3, beats: 1 },
        { note: 67, at: 4, beats: 1 },
        { note: 69, at: 5, beats: 1 },
        { note: 71, at: 6, beats: 1 },
        { note: 72, at: 7, beats: 2 },
      ],
    },
    { id: "seven-letters", kind: "explain", illustration: "black-key-groups" },
    { id: "find-d", kind: "find-key", key: 62, anyOctave: true },
    { id: "find-e", kind: "find-key", key: 64, anyOctave: true },
    { id: "find-f", kind: "find-key", key: 65, anyOctave: true },
    { id: "find-g", kind: "find-key", key: 67, anyOctave: true },
    { id: "find-a", kind: "find-key", key: 69, anyOctave: true },
    { id: "find-b", kind: "find-key", key: 71, anyOctave: true },
    { id: "play-c-to-c", kind: "play-notes", notes: [60, 62, 64, 65, 67, 69, 71, 72] },
    { id: "letters-quiz", kind: "quiz", right: 1 },
    { id: "recap", kind: "recap" },
  ],
  texts: { en: theWhiteKeysEn },
};
