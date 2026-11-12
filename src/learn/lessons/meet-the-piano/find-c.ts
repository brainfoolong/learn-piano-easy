/**
 * *Find C*, a lesson of *Meet the piano*: C is the white key just left of each group of two black keys,
 * and the C near the middle of the piano is middle C.
 *
 * It follows `black-key-groups` and leads to `the-white-keys`. The structure is here, and the texts are
 * `find-c.en.ts` and `find-c.de.ts` beside it.
 */
import type { Lesson } from "../../model";
import { findCDe } from "./find-c.de";
import { findCEn } from "./find-c.en";

export const findC: Lesson = {
  id: "find-c",
  steps: [
    {
      id: "hear-cs",
      kind: "demo",
      bpm: 80,
      notes: [
        { note: 48, at: 0, beats: 1 },
        { note: 60, at: 1, beats: 1 },
        { note: 72, at: 2, beats: 1 },
        { note: 84, at: 3, beats: 2 },
      ],
    },
    { id: "c-rule", kind: "explain", illustration: "black-key-groups" },
    { id: "find-any-c", kind: "find-key", key: 60, anyOctave: true },
    { id: "middle-c", kind: "explain" },
    { id: "find-middle-c", kind: "find-key", key: 60, anyOctave: false },
    { id: "find-high-c", kind: "find-key", key: 72, anyOctave: false },
    { id: "find-low-c", kind: "find-key", key: 48, anyOctave: false },
    { id: "cs-low-to-high", kind: "play-notes", notes: [48, 60, 72, 84] },
    { id: "c-quiz", kind: "quiz", right: 1 },
    { id: "recap", kind: "recap" },
  ],
  texts: { en: findCEn, de: findCDe },
};
