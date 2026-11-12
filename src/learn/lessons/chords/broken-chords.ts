/**
 * *Broken chords*, a lesson of *Chords*: a chord's notes can sound one after another instead of
 * together, and the chord still sounds.
 *
 * A demo plays C major broken up and down. The learner plays the chord together, then broken up, and
 * names the chord a broken C-E-G makes. They play the up-and-down pattern C-E-G-E, then C, F, G and C
 * broken in the right hand, and pick the broken chord from four patterns. A second demo puts a broken
 * chord in the left hand under a tune. The learner plays the left hand alone, then both hands together.
 * The texts are `broken-chords.en.ts` and `broken-chords.de.ts` beside it.
 */
import type { Lesson } from "../../model";
import { brokenChordsDe } from "./broken-chords.de";
import { brokenChordsEn } from "./broken-chords.en";

export const brokenChords: Lesson = {
  id: "broken-chords",
  skills: ["broken-chords"],
  steps: [
    {
      id: "broken-demo",
      kind: "demo",
      bpm: 80,
      notes: [
        { note: 60, at: 0, beats: 1 },
        { note: 64, at: 1, beats: 1 },
        { note: 67, at: 2, beats: 1 },
        { note: 72, at: 3, beats: 1 },
        { note: 67, at: 4, beats: 1 },
        { note: 64, at: 5, beats: 1 },
        { note: 60, at: 6, beats: 2 },
      ],
    },
    { id: "one-after-another", kind: "explain" },
    { id: "chord-together", kind: "play-notes", notes: [[60, 64, 67]] },
    { id: "broken-up", kind: "play-notes", notes: [60, 64, 67] },
    { id: "which-chord-broken", kind: "quiz", right: 1 },
    { id: "up-and-down", kind: "explain" },
    { id: "broken-up-and-down", kind: "play-notes", notes: [60, 64, 67, 64, 60, 64, 67, 64, 60] },
    { id: "three-chords-broken", kind: "play-notes", notes: [60, 64, 67, 64, 65, 69, 72, 69, 67, 71, 74, 71, 60, 64, 67] },
    { id: "which-is-broken", kind: "quiz", right: 3 },
    { id: "left-hand-broken", kind: "explain" },
    {
      id: "left-hand-demo",
      kind: "demo",
      bpm: 72,
      notes: [
        { note: 48, at: 0, beats: 1 },
        { note: 52, at: 1, beats: 1 },
        { note: 55, at: 2, beats: 1 },
        { note: 52, at: 3, beats: 1 },
        { note: 43, at: 4, beats: 1 },
        { note: 47, at: 5, beats: 1 },
        { note: 50, at: 6, beats: 1 },
        { note: 47, at: 7, beats: 1 },
        { note: 48, at: 8, beats: 1 },
        { note: 52, at: 9, beats: 1 },
        { note: 55, at: 10, beats: 1 },
        { note: 52, at: 11, beats: 1 },
        { note: 64, at: 0, beats: 2 },
        { note: 67, at: 2, beats: 2 },
        { note: 62, at: 4, beats: 2 },
        { note: 67, at: 6, beats: 2 },
        { note: 60, at: 8, beats: 4 },
      ],
    },
    { id: "left-hand-alone", kind: "play-notes", notes: [48, 52, 55, 52, 43, 47, 50, 47, 48, 52, 55, 52] },
    { id: "tune-over-broken-chords", kind: "play-notes", notes: [[48, 64], 52, [55, 67], 52, [43, 62], 47, [50, 67], 47, [48, 60], 52, 55, 52] },
    { id: "recap", kind: "recap" },
  ],
  texts: { en: brokenChordsEn, de: brokenChordsDe },
};
