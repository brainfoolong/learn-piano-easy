/**
 * *Octaves*, a lesson of *Meet the piano*: the same letter comes back every eight white keys, and that
 * distance is an octave. Two notes an octave apart sound alike, and one is higher.
 *
 * It follows *The white keys* and leads to *Sitting at the piano*. The texts are `octaves.en.ts` and
 * `octaves.de.ts` beside it.
 */
import type { Lesson } from "../../model";
import { octavesDe } from "./octaves.de";
import { octavesEn } from "./octaves.en";

export const octaves: Lesson = {
  id: "octaves",
  steps: [
    {
      id: "three-cs",
      kind: "demo",
      bpm: 80,
      notes: [
        { note: 48, at: 0, beats: 2 },
        { note: 60, at: 2, beats: 2 },
        { note: 72, at: 4, beats: 2 },
      ],
    },
    { id: "same-letter", kind: "explain" },
    { id: "count-quiz", kind: "quiz", right: 1 },
    { id: "sound-alike", kind: "explain" },
    {
      id: "octave-listen",
      kind: "listen",
      pairs: [
        [60, 72],
        [72, 60],
        [64, 64],
        [55, 67],
      ],
      pass: 0.75,
    },
    { id: "e-above", kind: "find-key", key: 76, anyOctave: false },
    { id: "c-below", kind: "find-key", key: 48, anyOctave: false },
    { id: "octave-pair", kind: "play-notes", notes: [64, 76] },
    { id: "octave-quiz", kind: "quiz", right: 2 },
    { id: "recap", kind: "recap" },
  ],
  texts: { en: octavesEn, de: octavesDe },
};
