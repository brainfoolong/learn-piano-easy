/**
 * *Tempo and the metronome*, the eighth and last lesson of *Rhythm* before its boss: tempo is how fast
 * the beat goes, counted in beats per minute, and a metronome clicks it.
 *
 * Two demos play the same phrase in the C position slowly and then fast. The learner then answers which
 * of 60 and 120 beats per minute is faster and how to start a new piece. Two taps follow, a slow one at
 * 60 and a faster one at 104, and a recap points to the boss. The texts are
 * `tempo-and-the-metronome.en.ts` and `tempo-and-the-metronome.de.ts` beside it.
 */
import type { Lesson, PhraseNote } from "../../model";
import { tempoAndTheMetronomeDe } from "./tempo-and-the-metronome.de";
import { tempoAndTheMetronomeEn } from "./tempo-and-the-metronome.en";

/** The phrase both demos play: up from middle C to G and back, one beat each and the last note two. */
const PHRASE: PhraseNote[] = [60, 62, 64, 65, 67, 65, 64, 62, 60].map((note, index) => ({ note, at: index, beats: index === 8 ? 2 : 1 }));

export const tempoAndTheMetronome: Lesson = {
  id: "tempo-and-the-metronome",
  steps: [
    { id: "slow-demo", kind: "demo", bpm: 60, notes: PHRASE },
    { id: "fast-demo", kind: "demo", bpm: 120, notes: PHRASE },
    { id: "what-tempo-is", kind: "explain" },
    { id: "faster-tempo-quiz", kind: "quiz", right: 1 },
    { id: "slow-first", kind: "explain" },
    { id: "slow-first-quiz", kind: "quiz", right: 0 },
    { id: "slow-tap", kind: "rhythm-tap", bpm: 60, taps: 8, pass: 0.75 },
    { id: "faster-tap", kind: "rhythm-tap", bpm: 104, taps: 12, pass: 0.75 },
    { id: "recap", kind: "recap" },
  ],
  texts: { en: tempoAndTheMetronomeEn, de: tempoAndTheMetronomeDe },
};
