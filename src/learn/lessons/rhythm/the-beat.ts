/**
 * *The beat*, the first lesson of *Rhythm*: music has a steady beat, like a heartbeat or walking steps.
 *
 * A demo plays a tune over a low C that sounds on every beat. The learner then taps the beat slowly with
 * the metronome, answers whether a beat speeds up or stays steady, and taps a longer round a little
 * faster. The texts are `the-beat.en.ts` and `the-beat.de.ts` beside it.
 */
import type { Lesson } from "../../model";
import { theBeatEn } from "./the-beat.en";

export const theBeat: Lesson = {
  id: "the-beat",
  steps: [
    {
      id: "beat-demo",
      kind: "demo",
      bpm: 76,
      notes: [
        { note: 48, at: 0, beats: 1 },
        { note: 48, at: 1, beats: 1 },
        { note: 48, at: 2, beats: 1 },
        { note: 48, at: 3, beats: 1 },
        { note: 48, at: 4, beats: 1 },
        { note: 48, at: 5, beats: 1 },
        { note: 48, at: 6, beats: 1 },
        { note: 48, at: 7, beats: 1 },
        { note: 60, at: 0, beats: 1 },
        { note: 64, at: 1, beats: 1 },
        { note: 67, at: 2, beats: 1 },
        { note: 64, at: 3, beats: 1 },
        { note: 65, at: 4, beats: 1 },
        { note: 64, at: 5, beats: 1 },
        { note: 62, at: 6, beats: 1 },
        { note: 60, at: 7, beats: 1 },
      ],
    },
    { id: "what-the-beat-is", kind: "explain" },
    { id: "tap-the-beat", kind: "rhythm-tap", bpm: 72, taps: 8, pass: 0.75 },
    { id: "steady-beat-quiz", kind: "quiz", right: 1 },
    { id: "tap-a-longer-beat", kind: "rhythm-tap", bpm: 80, taps: 12, pass: 0.75 },
    { id: "recap", kind: "recap" },
  ],
  texts: { en: theBeatEn },
};
