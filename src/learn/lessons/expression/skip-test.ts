/**
 * The skip test of *Expression*: one checking step from each of five lessons. The boss plays a smooth,
 * soft tune in A minor over broken chords, in phrases that end with a held note. So the picks play a
 * legato phrase, legato and staccato mixed, two shaped phrases, an ending, and a broken A minor.
 * No pick needs touch or the pedal, so the test runs the same on every input.
 * `src/learn/skip-test.ts` builds the test from these picks.
 */
import type { SkipPick } from "../../model";
import { legato } from "./legato";
import { phrases } from "./phrases";
import { playingWithFeeling } from "./playing-with-feeling";
import { slowingDown } from "./slowing-down";
import { staccato } from "./staccato";

export const expressionSkipPicks: SkipPick[] = [
  { lesson: legato, step: "slurred-phrase" },
  { lesson: staccato, step: "mixed-phrase" },
  { lesson: phrases, step: "shape-both-phrases" },
  { lesson: slowingDown, step: "ending-with-fermata" },
  { lesson: playingWithFeeling, step: "play-sad" },
];
