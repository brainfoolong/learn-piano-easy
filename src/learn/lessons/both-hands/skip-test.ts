/**
 * The skip test of *Both hands*: one checking step from each of five lessons. Three play both hands
 * together, and two check the rhythms of the boss. `src/learn/skip-test.ts` builds the test from these picks.
 */
import type { SkipPick } from "../../model";
import { aHeldBassNote } from "./a-held-bass-note";
import { dottedRhythm } from "./dotted-rhythm";
import { eighthNotes } from "./eighth-notes";
import { movingTheHand } from "./moving-the-hand";
import { openFifths } from "./open-fifths";

export const bothHandsSkipPicks: SkipPick[] = [
  { lesson: aHeldBassNote, step: "both-bars" },
  { lesson: openFifths, step: "three-fifths" },
  { lesson: movingTheHand, step: "move-and-play" },
  { lesson: eighthNotes, step: "eighth-taps" },
  { lesson: dottedRhythm, step: "dotted-quarter-quiz" },
];
