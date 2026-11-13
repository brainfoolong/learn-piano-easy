/** The Arabic texts of *Meet the piano*'s lessons, by lesson id. `World.loadTexts("ar")` loads them as one chunk. */
import type { WorldTexts } from "../../model";
import { blackKeyGroupsAr } from "./black-key-groups.ar";
import { findCAr } from "./find-c.ar";
import { fingerNumbersAr } from "./finger-numbers.ar";
import { highAndLowAr } from "./high-and-low.ar";
import { keyHuntAr } from "./key-hunt.ar";
import { octavesAr } from "./octaves.ar";
import { sittingAtThePianoAr } from "./sitting-at-the-piano.ar";
import { theWhiteKeysAr } from "./the-white-keys.ar";
import { welcomeAr } from "./welcome.ar";

export const texts: WorldTexts = {
  "black-key-groups": blackKeyGroupsAr,
  "find-c": findCAr,
  "finger-numbers": fingerNumbersAr,
  "high-and-low": highAndLowAr,
  "key-hunt": keyHuntAr,
  octaves: octavesAr,
  "sitting-at-the-piano": sittingAtThePianoAr,
  "the-white-keys": theWhiteKeysAr,
  welcome: welcomeAr,
};
