/**
 * *Tune and bass together*, a lesson of *Both hands*: a short tune of four bars in the right hand, over
 * a bass note in the left hand on beat one of each bar.
 *
 * A demo plays the whole tune with its bass first. The learner then plays the tune alone, names the beat
 * the bass comes in on, hears and plays the bass alone, and puts both together. A chord entry marks each
 * beat one, where both hands sound, and a single note each beat where only the tune moves. The texts are
 * `tune-and-bass-together.en.ts` and `tune-and-bass-together.de.ts` beside it.
 */
import type { Lesson } from "../../model";
import { tuneAndBassTogetherDe } from "./tune-and-bass-together.de";
import { tuneAndBassTogetherEn } from "./tune-and-bass-together.en";

export const tuneAndBassTogether: Lesson = {
  id: "tune-and-bass-together",
  steps: [
    {
      id: "whole-tune",
      kind: "demo",
      bpm: 90,
      notes: [
        { note: 48, at: 0, beats: 4 },
        { note: 60, at: 0, beats: 1 },
        { note: 62, at: 1, beats: 1 },
        { note: 64, at: 2, beats: 1 },
        { note: 65, at: 3, beats: 1 },
        { note: 55, at: 4, beats: 4 },
        { note: 67, at: 4, beats: 1 },
        { note: 65, at: 5, beats: 1 },
        { note: 64, at: 6, beats: 1 },
        { note: 62, at: 7, beats: 1 },
        { note: 55, at: 8, beats: 4 },
        { note: 62, at: 8, beats: 1 },
        { note: 64, at: 9, beats: 1 },
        { note: 65, at: 10, beats: 1 },
        { note: 62, at: 11, beats: 1 },
        { note: 48, at: 12, beats: 4 },
        { note: 60, at: 12, beats: 4 },
      ],
    },
    { id: "two-layers", kind: "explain" },
    { id: "tune-alone", kind: "play-notes", notes: [60, 62, 64, 65, 67, 65, 64, 62, 62, 64, 65, 62, 60] },
    { id: "bass-beat-quiz", kind: "quiz", right: 0 },
    {
      id: "bass-demo",
      kind: "demo",
      bpm: 90,
      notes: [
        { note: 48, at: 0, beats: 4 },
        { note: 55, at: 4, beats: 4 },
        { note: 55, at: 8, beats: 4 },
        { note: 48, at: 12, beats: 4 },
      ],
    },
    { id: "bass-alone", kind: "play-notes", notes: [48, 55, 55, 48] },
    { id: "press-together", kind: "explain" },
    { id: "first-half", kind: "play-notes", notes: [[48, 60], 62, 64, 65, [55, 67], 65, 64, 62] },
    { id: "held-bass-quiz", kind: "quiz", right: 1 },
    { id: "whole-tune-together", kind: "play-notes", notes: [[48, 60], 62, 64, 65, [55, 67], 65, 64, 62, [55, 62], 64, 65, 62, [48, 60]] },
    { id: "recap", kind: "recap" },
  ],
  texts: { en: tuneAndBassTogetherEn, de: tuneAndBassTogetherDe },
};
