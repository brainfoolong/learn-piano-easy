/** The Chinese texts of *Meet the piano*'s lessons, by lesson id. `World.loadTexts("zh")` loads them as one chunk. */
import type { WorldTexts } from "../../model";
import { blackKeyGroupsZh } from "./black-key-groups.zh";
import { findCZh } from "./find-c.zh";
import { fingerNumbersZh } from "./finger-numbers.zh";
import { highAndLowZh } from "./high-and-low.zh";
import { keyHuntZh } from "./key-hunt.zh";
import { octavesZh } from "./octaves.zh";
import { sittingAtThePianoZh } from "./sitting-at-the-piano.zh";
import { theWhiteKeysZh } from "./the-white-keys.zh";
import { welcomeZh } from "./welcome.zh";

export const texts: WorldTexts = {
  "black-key-groups": blackKeyGroupsZh,
  "find-c": findCZh,
  "finger-numbers": fingerNumbersZh,
  "high-and-low": highAndLowZh,
  "key-hunt": keyHuntZh,
  octaves: octavesZh,
  "sitting-at-the-piano": sittingAtThePianoZh,
  "the-white-keys": theWhiteKeysZh,
  welcome: welcomeZh,
};
