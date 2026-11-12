/**
 * The skip test of *Meet the piano*: one checking step from each of five lessons, the one that uses
 * the lesson's whole idea. `src/learn/skip-test.ts` builds the test from these picks.
 */
import type { SkipPick } from "../../model";
import { blackKeyGroups } from "./black-key-groups";
import { findC } from "./find-c";
import { highAndLow } from "./high-and-low";
import { octaves } from "./octaves";
import { theWhiteKeys } from "./the-white-keys";

export const meetThePianoSkipPicks: SkipPick[] = [
  { lesson: highAndLow, step: "close-listen" },
  { lesson: blackKeyGroups, step: "three-right" },
  { lesson: findC, step: "cs-low-to-high" },
  { lesson: theWhiteKeys, step: "play-c-to-c" },
  { lesson: octaves, step: "e-above" },
];
