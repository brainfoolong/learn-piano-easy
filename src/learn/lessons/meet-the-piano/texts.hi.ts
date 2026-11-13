/** The Hindi texts of *Meet the piano*'s lessons, by lesson id. `World.loadTexts("hi")` loads them as one chunk. */
import type { WorldTexts } from "../../model";
import { blackKeyGroupsHi } from "./black-key-groups.hi";
import { findCHi } from "./find-c.hi";
import { fingerNumbersHi } from "./finger-numbers.hi";
import { highAndLowHi } from "./high-and-low.hi";
import { keyHuntHi } from "./key-hunt.hi";
import { octavesHi } from "./octaves.hi";
import { sittingAtThePianoHi } from "./sitting-at-the-piano.hi";
import { theWhiteKeysHi } from "./the-white-keys.hi";
import { welcomeHi } from "./welcome.hi";

export const texts: WorldTexts = {
  "black-key-groups": blackKeyGroupsHi,
  "find-c": findCHi,
  "finger-numbers": fingerNumbersHi,
  "high-and-low": highAndLowHi,
  "key-hunt": keyHuntHi,
  octaves: octavesHi,
  "sitting-at-the-piano": sittingAtThePianoHi,
  "the-white-keys": theWhiteKeysHi,
  welcome: welcomeHi,
};
