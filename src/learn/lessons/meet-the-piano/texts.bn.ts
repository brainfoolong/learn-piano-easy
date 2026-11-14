/** The Bengali texts of *Meet the piano*'s lessons, by lesson id. `World.loadTexts("bn")` loads them as one chunk. */
import type { WorldTexts } from "../../model";
import { blackKeyGroupsBn } from "./black-key-groups.bn";
import { findCBn } from "./find-c.bn";
import { fingerNumbersBn } from "./finger-numbers.bn";
import { highAndLowBn } from "./high-and-low.bn";
import { keyHuntBn } from "./key-hunt.bn";
import { octavesBn } from "./octaves.bn";
import { sittingAtThePianoBn } from "./sitting-at-the-piano.bn";
import { theWhiteKeysBn } from "./the-white-keys.bn";
import { welcomeBn } from "./welcome.bn";

export const texts: WorldTexts = {
  "black-key-groups": blackKeyGroupsBn,
  "find-c": findCBn,
  "finger-numbers": fingerNumbersBn,
  "high-and-low": highAndLowBn,
  "key-hunt": keyHuntBn,
  octaves: octavesBn,
  "sitting-at-the-piano": sittingAtThePianoBn,
  "the-white-keys": theWhiteKeysBn,
  welcome: welcomeBn,
};
