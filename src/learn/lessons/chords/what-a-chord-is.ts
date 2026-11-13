/**
 * *What a chord is*, a lesson of *Chords*: a chord is several keys pressed together, and three keys
 * stacked in thirds make a triad.
 *
 * A demo plays C, E and G one by one, then together. The learner meets the third as a two-note chord and
 * plays thirds up the white keys, then mixes thirds with the open fifth they know. A quiz counts the key
 * a third skips. Two thirds stacked give the triad C, E and G, which the learner plays and then moves up
 * the white keys in one hand shape. A second quiz picks a triad from its keys. The texts are
 * `what-a-chord-is.en.ts` and `what-a-chord-is.de.ts` beside it.
 */
import type { Lesson } from "../../model";
import { whatAChordIsEn } from "./what-a-chord-is.en";

export const whatAChordIs: Lesson = {
  id: "what-a-chord-is",
  skills: ["two-note-chords", "triads"],
  steps: [
    {
      id: "chord-demo",
      kind: "demo",
      bpm: 72,
      notes: [
        { note: 60, at: 0, beats: 1, finger: 1 },
        { note: 64, at: 1, beats: 1, finger: 3 },
        { note: 67, at: 2, beats: 1, finger: 5 },
        { note: 60, at: 3, beats: 3, finger: 1 },
        { note: 64, at: 3, beats: 3, finger: 3 },
        { note: 67, at: 3, beats: 3, finger: 5 },
      ],
    },
    { id: "several-keys", kind: "explain" },
    { id: "a-third", kind: "explain" },
    { id: "thirds-up", kind: "play-notes", notes: [[60, 64], [62, 65], [64, 67]] },
    { id: "skipped-key", kind: "quiz", right: 1 },
    { id: "thirds-and-fifths", kind: "explain" },
    { id: "third-then-fifth", kind: "play-notes", notes: [[60, 64], [60, 67], [60, 64], [60, 67]] },
    { id: "stack-thirds", kind: "explain" },
    {
      id: "triad-demo",
      kind: "demo",
      bpm: 72,
      notes: [
        { note: 60, at: 0, beats: 2, finger: 1 },
        { note: 64, at: 0, beats: 2, finger: 3 },
        { note: 60, at: 2, beats: 2, finger: 1 },
        { note: 64, at: 2, beats: 2, finger: 3 },
        { note: 67, at: 2, beats: 2, finger: 5 },
      ],
    },
    { id: "first-triad", kind: "play-notes", notes: [[60, 64, 67], [60, 64, 67]] },
    { id: "which-is-a-triad", kind: "quiz", right: 2 },
    {
      id: "triads-up",
      kind: "play-notes",
      notes: [
        [60, 64, 67],
        [62, 65, 69],
        [64, 67, 71],
        [60, 64, 67],
      ],
    },
    { id: "recap", kind: "recap" },
  ],
  texts: { en: whatAChordIsEn },
};
