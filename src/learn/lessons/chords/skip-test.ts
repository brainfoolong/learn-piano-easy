/**
 * The skip test of *Chords*: one checking step from each of five lessons. The boss presses two keys
 * of a chord as one, moves the hand from chord to chord, and breaks chords in the left hand. So the
 * picks play triads, D major, a walk through C, F and G, inversions and broken chords.
 * `src/learn/skip-test.ts` builds the test from these picks.
 */
import type { SkipPick } from "../../model";
import { brokenChords } from "./broken-chords";
import { cFAndG } from "./c-f-and-g";
import { inversions } from "./inversions";
import { majorTriads } from "./major-triads";
import { whatAChordIs } from "./what-a-chord-is";

export const chordsSkipPicks: SkipPick[] = [
  { lesson: whatAChordIs, step: "triads-up" },
  { lesson: majorTriads, step: "d-major-triad" },
  { lesson: cFAndG, step: "c-f-g-c" },
  { lesson: inversions, step: "close-chords" },
  { lesson: brokenChords, step: "three-chords-broken" },
];
