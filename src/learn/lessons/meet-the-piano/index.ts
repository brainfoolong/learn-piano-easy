/** The lessons of *Meet the piano*, in order, its key hunt and its skip test's picks. The world loads them as one chunk. */
import type { WorldLessons } from "../../model";
import { blackKeyGroups } from "./black-key-groups";
import { findC } from "./find-c";
import { fingerNumbers } from "./finger-numbers";
import { highAndLow } from "./high-and-low";
import { keyHunt } from "./key-hunt";
import { octaves } from "./octaves";
import { sittingAtThePiano } from "./sitting-at-the-piano";
import { meetThePianoSkipPicks } from "./skip-test";
import { theWhiteKeys } from "./the-white-keys";
import { welcome } from "./welcome";

export const meetThePiano: WorldLessons = {
  lessons: [welcome, highAndLow, blackKeyGroups, findC, theWhiteKeys, octaves, sittingAtThePiano, fingerNumbers],
  boss: keyHunt,
  skipPicks: meetThePianoSkipPicks,
};
