/**
 * *High and low*, the second lesson of *Meet the piano*: keys to the left sound lower, and keys to the
 * right sound higher.
 *
 * A demo climbs from low to high first, so the learner hears the idea before reading it. Two `listen`
 * steps frame the playing: the first with wide jumps, the last with neighbouring keys, which uses the
 * whole idea. The texts are `high-and-low.en.ts` and `high-and-low.de.ts` beside it.
 */
import type { Lesson } from "../../model";
import { highAndLowEn } from "./high-and-low.en";

export const highAndLow: Lesson = {
  id: "high-and-low",
  steps: [
    {
      id: "low-to-high",
      kind: "demo",
      bpm: 100,
      notes: [
        { note: 48, at: 0, beats: 1 },
        { note: 52, at: 1, beats: 1 },
        { note: 55, at: 2, beats: 1 },
        { note: 60, at: 3, beats: 1 },
        { note: 64, at: 4, beats: 1 },
        { note: 67, at: 5, beats: 1 },
        { note: 72, at: 6, beats: 2 },
      ],
    },
    { id: "left-is-low", kind: "explain" },
    {
      id: "wide-listen",
      kind: "listen",
      pairs: [
        [48, 72],
        [72, 52],
        [60, 60],
        [55, 67],
      ],
      pass: 0.75,
    },
    { id: "climb-up", kind: "play-notes", notes: [60, 62, 64, 65, 67] },
    { id: "climb-down", kind: "play-notes", notes: [67, 65, 64, 62, 60] },
    { id: "low-then-high", kind: "play-notes", notes: [48, 60, 72] },
    { id: "which-way", kind: "quiz", right: 1 },
    {
      id: "close-listen",
      kind: "listen",
      pairs: [
        [60, 62],
        [65, 64],
        [67, 67],
        [59, 57],
      ],
      pass: 0.75,
    },
    { id: "recap", kind: "recap" },
  ],
  texts: { en: highAndLowEn },
};
