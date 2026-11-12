/**
 * The skip test of *Reading music*: one checking step from each of five lessons. Four read notes in
 * both clefs, by name and by playing, and one asks a step from a skip. `src/learn/skip-test.ts` builds
 * the test from these picks.
 */
import type { SkipPick } from "../../model";
import { bassLandmarks } from "./bass-landmarks";
import { readingStepsAndSkips } from "./reading-steps-and-skips";
import { theBassClef } from "./the-bass-clef";
import { theTrebleClef } from "./the-treble-clef";
import { trebleLandmarks } from "./treble-landmarks";

export const readingMusicSkipPicks: SkipPick[] = [
  { lesson: theTrebleClef, step: "name-treble-notes" },
  { lesson: trebleLandmarks, step: "read-treble-landmarks" },
  { lesson: theBassClef, step: "name-bass-notes" },
  { lesson: bassLandmarks, step: "play-bass-landmarks" },
  { lesson: readingStepsAndSkips, step: "step-or-skip-quiz" },
];
