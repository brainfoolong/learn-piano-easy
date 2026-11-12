/**
 * *Hands apart, then together*, a lesson of *Both hands*: a new piece is practised with each hand alone
 * first, and only then with both hands at once.
 *
 * A demo plays a short tune in the right hand, then in the left, then in both together. The learner
 * answers what to practise first, plays the tune with each hand alone and then with both. A second tune
 * moves the hands in opposite directions and runs through the same three passes. The together checks
 * use chord entries, so each left note sounds with its right note. The texts are
 * `hands-apart-then-together.en.ts` and `hands-apart-then-together.de.ts` beside it.
 */
import type { Lesson } from "../../model";
import { handsApartThenTogetherDe } from "./hands-apart-then-together.de";
import { handsApartThenTogetherEn } from "./hands-apart-then-together.en";

export const handsApartThenTogether: Lesson = {
  id: "hands-apart-then-together",
  steps: [
    {
      id: "three-passes",
      kind: "demo",
      bpm: 90,
      notes: [
        { note: 60, at: 0, beats: 1 },
        { note: 62, at: 1, beats: 1 },
        { note: 64, at: 2, beats: 1 },
        { note: 62, at: 3, beats: 1 },
        { note: 60, at: 4, beats: 2 },
        { note: 48, at: 7, beats: 1 },
        { note: 50, at: 8, beats: 1 },
        { note: 52, at: 9, beats: 1 },
        { note: 50, at: 10, beats: 1 },
        { note: 48, at: 11, beats: 2 },
        { note: 48, at: 14, beats: 1 },
        { note: 60, at: 14, beats: 1 },
        { note: 50, at: 15, beats: 1 },
        { note: 62, at: 15, beats: 1 },
        { note: 52, at: 16, beats: 1 },
        { note: 64, at: 16, beats: 1 },
        { note: 50, at: 17, beats: 1 },
        { note: 62, at: 17, beats: 1 },
        { note: 48, at: 18, beats: 2 },
        { note: 60, at: 18, beats: 2 },
      ],
    },
    { id: "why-apart", kind: "explain" },
    { id: "first-step-quiz", kind: "quiz", right: 0 },
    { id: "right-alone", kind: "play-notes", notes: [60, 62, 64, 62, 60] },
    { id: "left-alone", kind: "play-notes", notes: [48, 50, 52, 50, 48] },
    { id: "together-steps", kind: "play-notes", notes: [[48, 60], [50, 62], [52, 64], [50, 62], [48, 60]] },
    { id: "slow-together", kind: "explain" },
    {
      id: "mirror-tune",
      kind: "demo",
      bpm: 80,
      notes: [
        { note: 52, at: 0, beats: 1 },
        { note: 64, at: 0, beats: 1 },
        { note: 50, at: 1, beats: 1 },
        { note: 65, at: 1, beats: 1 },
        { note: 48, at: 2, beats: 1 },
        { note: 67, at: 2, beats: 1 },
        { note: 50, at: 3, beats: 1 },
        { note: 65, at: 3, beats: 1 },
        { note: 52, at: 4, beats: 2 },
        { note: 64, at: 4, beats: 2 },
      ],
    },
    { id: "mirror-right", kind: "play-notes", notes: [64, 65, 67, 65, 64] },
    { id: "mirror-left", kind: "play-notes", notes: [52, 50, 48, 50, 52] },
    { id: "mirror-together", kind: "play-notes", notes: [[52, 64], [50, 65], [48, 67], [50, 65], [52, 64]] },
    { id: "recap", kind: "recap" },
  ],
  texts: { en: handsApartThenTogetherEn, de: handsApartThenTogetherDe },
};
