/**
 * The skip test of *Scales and keys*: one checking step from each of five lessons. Three play scales,
 * since the boss's tune walks the steps of C major, and two ask about half steps and keys.
 * `src/learn/skip-test.ts` builds the test from these picks.
 */
import type { SkipPick } from "../../model";
import { fingerOverTheThumb } from "./finger-over-the-thumb";
import { gMajor } from "./g-major";
import { halfAndWholeSteps } from "./half-and-whole-steps";
import { keySignatures } from "./key-signatures";
import { theCMajorScale } from "./the-c-major-scale";

export const scalesAndKeysSkipPicks: SkipPick[] = [
  { lesson: halfAndWholeSteps, step: "white-half-step" },
  { lesson: theCMajorScale, step: "scale-up" },
  { lesson: fingerOverTheThumb, step: "scale-up-and-down" },
  { lesson: gMajor, step: "g-scale-up" },
  { lesson: keySignatures, step: "no-signs" },
];
