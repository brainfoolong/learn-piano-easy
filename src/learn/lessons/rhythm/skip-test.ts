/**
 * The skip test of *Rhythm*: one checking step from each of five lessons. Three keep a beat on the
 * metronome, and two ask how beats fill a bar. `src/learn/skip-test.ts` builds the test from these picks.
 */
import type { SkipPick } from "../../model";
import { countingToFour } from "./counting-to-four";
import { quarterNotes } from "./quarter-notes";
import { rests } from "./rests";
import { tempoAndTheMetronome } from "./tempo-and-the-metronome";
import { threeFourTime } from "./three-four-time";

export const rhythmSkipPicks: SkipPick[] = [
  { lesson: quarterNotes, step: "quarter-taps" },
  { lesson: rests, step: "fill-a-bar-quiz" },
  { lesson: countingToFour, step: "count-aloud-tap" },
  { lesson: threeFourTime, step: "beats-in-a-bar-quiz" },
  { lesson: tempoAndTheMetronome, step: "faster-tap" },
];
