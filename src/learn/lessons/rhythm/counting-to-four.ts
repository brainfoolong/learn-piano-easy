/**
 * *Counting to four*, the sixth lesson of *Rhythm*: beats group into bars of four, counted 1 2 3 4. The
 * first beat of a bar is the strongest, a bar line ends each bar, and this is 4/4 time.
 *
 * A demo plays four bars, with a low C on each first beat and G on the other three. The learner then
 * reads what a bar is, answers how many beats a bar of 4/4 holds and which beat is the strongest, taps
 * sixteen beats while counting aloud, and picks the note lengths that fill a bar. The texts are
 * `counting-to-four.en.ts` and `counting-to-four.de.ts` beside it.
 */
import type { Lesson } from "../../model";
import { countingToFourDe } from "./counting-to-four.de";
import { countingToFourEn } from "./counting-to-four.en";

export const countingToFour: Lesson = {
  id: "counting-to-four",
  steps: [
    {
      id: "bars-demo",
      kind: "demo",
      bpm: 90,
      notes: [0, 4, 8, 12].flatMap((bar) => [
        { note: 48, at: bar, beats: 1 },
        { note: 67, at: bar + 1, beats: 1 },
        { note: 67, at: bar + 2, beats: 1 },
        { note: 67, at: bar + 3, beats: 1 },
      ]),
    },
    { id: "what-a-bar-is", kind: "explain" },
    { id: "beats-in-a-bar-quiz", kind: "quiz", right: 1 },
    { id: "strongest-beat-quiz", kind: "quiz", right: 0 },
    { id: "count-aloud-tap", kind: "rhythm-tap", bpm: 80, taps: 16, pass: 0.75 },
    { id: "fill-a-bar-quiz", kind: "quiz", right: 0 },
    { id: "recap", kind: "recap" },
  ],
  texts: { en: countingToFourEn, de: countingToFourDe },
};
