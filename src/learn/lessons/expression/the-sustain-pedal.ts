/**
 * *The sustain pedal*, a lesson of *Expression*: the right pedal keeps notes sounding after the keys are
 * let go, and it is changed with each new chord so the chords do not blur.
 *
 * A demo plays broken C major short, then held on as the pedal holds it. The learner learns what the
 * pedal does and how the right foot sits on it, heel on the floor. They hold the pedal down through a
 * broken C major chord. They learn the marks Ped., the star and the bracket line, and say what the star
 * asks. They play broken C, F, G and C chords without the pedal, then learn why the pedal changes with
 * each chord, and play them again with a pedal change at each chord. Each pedal step names a demo and a
 * quiz that replace it on an input without a MIDI keyboard. The texts are `the-sustain-pedal.en.ts` and
 * `the-sustain-pedal.de.ts` beside it.
 */
import type { Lesson } from "../../model";
import { theSustainPedalEn } from "./the-sustain-pedal.en";

export const theSustainPedal: Lesson = {
  id: "the-sustain-pedal",
  skills: ["pedal"],
  steps: [
    {
      id: "pedal-demo",
      kind: "demo",
      bpm: 72,
      notes: [
        { note: 48, at: 0, beats: 0.5 },
        { note: 52, at: 1, beats: 0.5 },
        { note: 55, at: 2, beats: 0.5 },
        { note: 60, at: 3, beats: 0.5 },
        { note: 48, at: 4, beats: 4 },
        { note: 52, at: 5, beats: 3 },
        { note: 55, at: 6, beats: 2 },
        { note: 60, at: 7, beats: 1 },
      ],
    },
    { id: "what-the-pedal-does", kind: "explain" },
    { id: "pedal-keeps", kind: "quiz", right: 2 },
    { id: "foot-on-pedal", kind: "explain" },
    { id: "which-foot", kind: "quiz", right: 3 },
    {
      id: "pedal-down-c",
      kind: "play-notes",
      notes: [48, 52, 55],
      pedal: [true, true, true],
      needs: "pedal",
      instead: [
        {
          id: "hear-pedal-hold",
          kind: "demo",
          bpm: 72,
          notes: [
            { note: 48, at: 0, beats: 4 },
            { note: 52, at: 1, beats: 3 },
            { note: 55, at: 2, beats: 2 },
          ],
        },
        { id: "what-pedal-did", kind: "quiz", right: 0 },
      ],
    },
    { id: "pedal-marks", kind: "explain" },
    { id: "star-means", kind: "quiz", right: 1 },
    { id: "chords-without-pedal", kind: "play-notes", notes: [48, 52, 55, 48, 53, 57, 47, 50, 55, 48, 52, 55] },
    { id: "chords-blur", kind: "explain" },
    {
      id: "change-the-pedal",
      kind: "play-notes",
      notes: [48, 52, 55, 48, 53, 57, 47, 50, 55, 48, 52, 55],
      pedal: [false, true, true, false, true, true, false, true, true, false, true, true],
      needs: "pedal",
      instead: [
        {
          id: "hear-pedal-change",
          kind: "demo",
          bpm: 72,
          notes: [
            { note: 48, at: 0, beats: 3 },
            { note: 52, at: 1, beats: 2 },
            { note: 55, at: 2, beats: 1 },
            { note: 48, at: 3, beats: 3 },
            { note: 53, at: 4, beats: 2 },
            { note: 57, at: 5, beats: 1 },
            { note: 47, at: 6, beats: 3 },
            { note: 50, at: 7, beats: 2 },
            { note: 55, at: 8, beats: 1 },
            { note: 48, at: 9, beats: 4 },
            { note: 52, at: 10, beats: 3 },
            { note: 55, at: 11, beats: 2 },
          ],
        },
        { id: "why-change", kind: "quiz", right: 2 },
      ],
    },
    { id: "recap", kind: "recap" },
  ],
  texts: { en: theSustainPedalEn },
};
