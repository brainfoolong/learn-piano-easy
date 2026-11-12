/**
 * *Slowing down*, a lesson of *Expression*: the tempo can change on purpose. *rit.* and *rall.* slow
 * down little by little, a fermata holds one note longer, and *a tempo* returns to the first speed.
 *
 * A demo plays a phrase that slows at its end, and the learner names what *rit.* asks. They tap a steady
 * beat, then play the ending and slow it themselves. A second demo holds a note under a fermata, and a
 * third slows and then returns *a tempo*, each followed by a quiz. The learner then names where *rit.*
 * is most often found, plays an ending that slows onto a held chord, and names what *rall.* means. A
 * demo's tempo is fixed, so each slowing is built into its notes' starts and lengths. The texts are
 * `slowing-down.en.ts` and `slowing-down.de.ts` beside it.
 */
import type { Lesson } from "../../model";
import { slowingDownDe } from "./slowing-down.de";
import { slowingDownEn } from "./slowing-down.en";

export const slowingDown: Lesson = {
  id: "slowing-down",
  steps: [
    {
      id: "slowing-demo",
      kind: "demo",
      bpm: 80,
      notes: [
        { note: 60, at: 0, beats: 1, velocity: 72 },
        { note: 62, at: 1, beats: 1, velocity: 72 },
        { note: 64, at: 2, beats: 1, velocity: 72 },
        { note: 65, at: 3, beats: 1, velocity: 72 },
        { note: 67, at: 4, beats: 1, velocity: 72 },
        { note: 65, at: 5, beats: 1.25, velocity: 64 },
        { note: 64, at: 6.25, beats: 1.5, velocity: 56 },
        { note: 62, at: 7.75, beats: 1.75, velocity: 48 },
        { note: 60, at: 9.5, beats: 3, velocity: 44 },
      ],
    },
    { id: "what-ritardando-is", kind: "explain" },
    { id: "rit-means", kind: "quiz", right: 0 },
    { id: "steady-tap", kind: "rhythm-tap", bpm: 80, taps: 8, pass: 0.75 },
    { id: "play-the-ending", kind: "play-notes", notes: [67, 65, 64, 62, 60] },
    { id: "what-a-fermata-is", kind: "explain" },
    {
      id: "fermata-demo",
      kind: "demo",
      bpm: 80,
      notes: [
        { note: 60, at: 0, beats: 1 },
        { note: 62, at: 1, beats: 1 },
        { note: 64, at: 2, beats: 1 },
        { note: 65, at: 3, beats: 1 },
        { note: 67, at: 4, beats: 4 },
        { note: 65, at: 8, beats: 1 },
        { note: 64, at: 9, beats: 1 },
        { note: 62, at: 10, beats: 1 },
        { note: 60, at: 11, beats: 2 },
      ],
    },
    { id: "fermata-means", kind: "quiz", right: 3 },
    { id: "back-in-tempo", kind: "explain" },
    {
      id: "a-tempo-demo",
      kind: "demo",
      bpm: 88,
      notes: [
        { note: 60, at: 0, beats: 1 },
        { note: 62, at: 1, beats: 1 },
        { note: 64, at: 2, beats: 1 },
        { note: 65, at: 3, beats: 1 },
        { note: 67, at: 4, beats: 1 },
        { note: 65, at: 5, beats: 1.25 },
        { note: 64, at: 6.25, beats: 1.5 },
        { note: 62, at: 7.75, beats: 2 },
        { note: 64, at: 9.75, beats: 1 },
        { note: 65, at: 10.75, beats: 1 },
        { note: 67, at: 11.75, beats: 1 },
        { note: 72, at: 12.75, beats: 2 },
      ],
    },
    { id: "a-tempo-means", kind: "quiz", right: 1 },
    { id: "where-rit-goes", kind: "quiz", right: 2 },
    { id: "ending-with-fermata", kind: "play-notes", notes: [64, 62, 60, 62, 64, 64, [48, 55, 64]] },
    { id: "rall-means", kind: "quiz", right: 0 },
    { id: "recap", kind: "recap" },
  ],
  texts: { en: slowingDownEn, de: slowingDownDe },
};
