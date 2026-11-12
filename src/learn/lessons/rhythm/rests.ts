/**
 * *Rests*, the fifth lesson of *Rhythm*: a rest is a beat of silence that still counts. A quarter rest
 * lasts one beat, and a half rest lasts two.
 *
 * A demo plays three bars of four beats in the C position, with gaps where the rests fall. The learner
 * then meets the quarter rest and counts its silence in a quiz, meets the half rest and names its length,
 * and adds up a bar of notes and rests. A second demo plays a phrase in C position with a quarter rest
 * and a half rest, and the learner plays it in time with the clicks. That `rhythm-tap` step judges the
 * rests: a key played in a rest, or held into it, fails the round. The texts are `rests.en.ts` and
 * `rests.de.ts` beside it.
 */
import type { Lesson, PhraseNote } from "../../model";
import { restsDe } from "./rests.de";
import { restsEn } from "./rests.en";

/** C D E, a quarter rest, E D, a half rest, then C as a half note. */
const PHRASE: PhraseNote[] = [
  { note: 60, at: 0, beats: 1 },
  { note: 62, at: 1, beats: 1 },
  { note: 64, at: 2, beats: 1 },
  { note: 64, at: 4, beats: 1 },
  { note: 62, at: 5, beats: 1 },
  { note: 60, at: 8, beats: 2 },
];

export const rests: Lesson = {
  id: "rests",
  steps: [
    {
      id: "rests-demo",
      kind: "demo",
      bpm: 80,
      notes: [
        { note: 60, at: 0, beats: 1 },
        { note: 60, at: 1, beats: 1 },
        { note: 60, at: 3, beats: 1 },
        { note: 64, at: 4, beats: 1 },
        { note: 64, at: 5, beats: 1 },
        { note: 67, at: 8, beats: 2 },
        { note: 67, at: 11, beats: 1 },
      ],
    },
    { id: "what-a-rest-is", kind: "explain" },
    { id: "quarter-rest-quiz", kind: "quiz", right: 0 },
    { id: "half-rest", kind: "explain" },
    { id: "half-rest-quiz", kind: "quiz", right: 1 },
    { id: "fill-a-bar-quiz", kind: "quiz", right: 2 },
    { id: "phrase-with-rests", kind: "demo", bpm: 80, notes: PHRASE },
    { id: "play-with-rests", kind: "rhythm-tap", bpm: 80, taps: 10, notes: PHRASE, pass: 0.8 },
    { id: "recap", kind: "recap" },
  ],
  texts: { en: restsEn, de: restsDe },
};
