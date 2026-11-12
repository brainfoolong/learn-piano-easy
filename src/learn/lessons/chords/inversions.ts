/**
 * *Inversions*, a lesson of *Chords*: a triad's three notes can stack in another order. Moving the bottom
 * note up an octave turns C-E-G into E-G-C, and then into G-C-E.
 *
 * A demo plays C major in root position, first inversion and second inversion. The learner plays each,
 * names the chord E-G-C, and climbs the three shapes up the keys. A second demo shows why inversions
 * help: C-E-G, C-F-A, B-D-G and C-E-G sit close, so the hand barely moves. The learner names C-F-A,
 * plays the four chords, and plays them again over a bass note. The texts are `inversions.en.ts` and
 * `inversions.de.ts` beside it.
 */
import type { Lesson } from "../../model";
import { inversionsDe } from "./inversions.de";
import { inversionsEn } from "./inversions.en";

export const inversions: Lesson = {
  id: "inversions",
  skills: ["triads", "position-change"],
  steps: [
    {
      id: "inversions-demo",
      kind: "demo",
      bpm: 72,
      notes: [
        { note: 60, at: 0, beats: 2 },
        { note: 64, at: 0, beats: 2 },
        { note: 67, at: 0, beats: 2 },
        { note: 64, at: 2, beats: 2 },
        { note: 67, at: 2, beats: 2 },
        { note: 72, at: 2, beats: 2 },
        { note: 67, at: 4, beats: 4 },
        { note: 72, at: 4, beats: 4 },
        { note: 76, at: 4, beats: 4 },
      ],
    },
    { id: "same-three-notes", kind: "explain" },
    { id: "root-position", kind: "play-notes", notes: [[60, 64, 67]] },
    { id: "first-inversion", kind: "explain" },
    { id: "play-first-inversion", kind: "play-notes", notes: [[64, 67, 72]] },
    { id: "which-chord-is-e-g-c", kind: "quiz", right: 2 },
    { id: "second-inversion", kind: "explain" },
    { id: "play-second-inversion", kind: "play-notes", notes: [[67, 72, 76]] },
    { id: "climb-the-inversions", kind: "play-notes", notes: [[60, 64, 67], [64, 67, 72], [67, 72, 76], [72, 76, 79]] },
    { id: "move-less", kind: "explain" },
    {
      id: "close-chords-demo",
      kind: "demo",
      bpm: 72,
      notes: [
        { note: 60, at: 0, beats: 2 },
        { note: 64, at: 0, beats: 2 },
        { note: 67, at: 0, beats: 2 },
        { note: 60, at: 2, beats: 2 },
        { note: 65, at: 2, beats: 2 },
        { note: 69, at: 2, beats: 2 },
        { note: 59, at: 4, beats: 2 },
        { note: 62, at: 4, beats: 2 },
        { note: 67, at: 4, beats: 2 },
        { note: 60, at: 6, beats: 4 },
        { note: 64, at: 6, beats: 4 },
        { note: 67, at: 6, beats: 4 },
      ],
    },
    { id: "which-chord-is-c-f-a", kind: "quiz", right: 1 },
    { id: "close-chords", kind: "play-notes", notes: [[60, 64, 67], [60, 65, 69], [59, 62, 67], [60, 64, 67]] },
    {
      id: "close-chords-with-bass",
      kind: "play-notes",
      notes: [[48, 60, 64, 67], [53, 60, 65, 69], [55, 59, 62, 67], [48, 60, 64, 67]],
    },
    { id: "recap", kind: "recap" },
  ],
  texts: { en: inversionsEn, de: inversionsDe },
};
