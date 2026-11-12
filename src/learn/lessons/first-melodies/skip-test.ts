/**
 * The skip test of *First melodies*: one checking step from each of five lessons, the phrase that uses
 * the lesson's whole idea. `src/learn/skip-test.ts` builds the test from these picks.
 */
import type { SkipPick } from "../../model";
import { handsTakeTurns } from "./hands-take-turns";
import { leftHandCPosition } from "./left-hand-c-position";
import { maryFirstPhrase } from "./mary-first-phrase";
import { skips } from "./skips";
import { steps } from "./steps";

export const firstMelodiesSkipPicks: SkipPick[] = [
  { lesson: steps, step: "stepping-tune" },
  { lesson: skips, step: "mixed-phrase" },
  { lesson: leftHandCPosition, step: "left-skips-repeats" },
  { lesson: handsTakeTurns, step: "long-phrase" },
  { lesson: maryFirstPhrase, step: "whole-phrase" },
];
