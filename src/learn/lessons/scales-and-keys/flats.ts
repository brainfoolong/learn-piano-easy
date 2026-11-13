/**
 * *Flats*, a lesson of *Scales and keys*: a flat lowers a note a half step, to the very next key on its
 * left, and one black key carries two names.
 *
 * A demo plays B and B flat, then E and E flat. The learner finds both flats, hears notes go down a half
 * step, learns that C sharp and D flat are the same key, and plays a phrase of half steps down. No
 * `read-note` step is used, since the staff would draw a black key as a sharp. The texts are
 * `flats.en.ts` and `flats.de.ts` beside it.
 */
import type { Lesson } from "../../model";
import { flatsEn } from "./flats.en";

export const flats: Lesson = {
  id: "flats",
  steps: [
    {
      id: "flat-sound",
      kind: "demo",
      bpm: 60,
      notes: [
        { note: 71, at: 0, beats: 1 },
        { note: 70, at: 1, beats: 2 },
        { note: 64, at: 4, beats: 1 },
        { note: 63, at: 5, beats: 2 },
      ],
    },
    { id: "what-a-flat-is", kind: "explain" },
    { id: "find-b-flat", kind: "find-key", key: 70, anyOctave: true },
    { id: "find-e-flat", kind: "find-key", key: 63, anyOctave: true },
    { id: "which-is-e-flat", kind: "quiz", right: 2 },
    {
      id: "hear-flats",
      kind: "listen",
      pairs: [
        [71, 70],
        [64, 63],
        [63, 64],
        [70, 70],
        [69, 70],
        [72, 71],
      ],
      pass: 0.75,
    },
    { id: "two-names", kind: "explain" },
    { id: "other-name-quiz", kind: "quiz", right: 0 },
    { id: "half-steps-down", kind: "play-notes", notes: [71, 70, 69, 64, 63, 62] },
    { id: "recap", kind: "recap" },
  ],
  texts: { en: flatsEn },
};
