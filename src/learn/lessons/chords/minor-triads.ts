/**
 * *Minor triads*, a lesson of *Chords*: a minor triad swaps the thirds of a major one, a minor third
 * below and a major third on top, so the middle note of a major triad drops a half step.
 *
 * A demo plays C major, then C minor. An explain swaps the thirds, and a quiz checks the size of a minor
 * third. The learner lowers E to E♭, finds E♭ and plays C major then C minor, and hears the middle note
 * drop. They play A, D and E minor on white keys, a quiz asks which note turns G major into G minor, and
 * they play D and G in major then minor. The texts are `minor-triads.en.ts` and `minor-triads.de.ts`
 * beside it.
 */
import type { Lesson } from "../../model";
import { minorTriadsDe } from "./minor-triads.de";
import { minorTriadsEn } from "./minor-triads.en";

export const minorTriads: Lesson = {
  id: "minor-triads",
  skills: ["triads"],
  steps: [
    {
      id: "major-then-minor",
      kind: "demo",
      bpm: 66,
      notes: [
        { note: 60, at: 0, beats: 2, finger: 1 },
        { note: 64, at: 0, beats: 2, finger: 3 },
        { note: 67, at: 0, beats: 2, finger: 5 },
        { note: 60, at: 3, beats: 3, finger: 1 },
        { note: 63, at: 3, beats: 3, finger: 3 },
        { note: 67, at: 3, beats: 3, finger: 5 },
      ],
    },
    { id: "thirds-swap", kind: "explain" },
    { id: "minor-third-size", kind: "quiz", right: 1 },
    { id: "lower-the-middle", kind: "explain" },
    { id: "find-e-flat", kind: "find-key", key: 63, anyOctave: true },
    {
      id: "c-major-to-minor",
      kind: "play-notes",
      notes: [
        [60, 64, 67],
        [60, 63, 67],
        [60, 64, 67],
        [60, 63, 67],
      ],
    },
    {
      id: "hear-the-middle-drop",
      kind: "listen",
      pairs: [
        [64, 63],
        [63, 64],
        [63, 63],
        [66, 65],
        [65, 66],
        [70, 70],
      ],
      pass: 0.75,
    },
    { id: "white-key-minors", kind: "explain" },
    { id: "a-minor", kind: "play-notes", notes: [[57, 60, 64], [57, 60, 64]] },
    {
      id: "d-and-e-minor",
      kind: "play-notes",
      notes: [
        [62, 65, 69],
        [64, 67, 71],
        [62, 65, 69],
      ],
    },
    { id: "g-major-to-minor", kind: "quiz", right: 0 },
    {
      id: "major-minor-pairs",
      kind: "play-notes",
      notes: [
        [62, 66, 69],
        [62, 65, 69],
        [67, 71, 74],
        [67, 70, 74],
      ],
    },
    { id: "recap", kind: "recap" },
  ],
  texts: { en: minorTriadsEn, de: minorTriadsDe },
};
