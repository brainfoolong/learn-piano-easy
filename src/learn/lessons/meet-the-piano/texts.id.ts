/** The Indonesian texts of *Meet the piano*'s lessons, by lesson id. `World.loadTexts("id")` loads them as one chunk. */
import type { WorldTexts } from "../../model";
import { blackKeyGroupsId } from "./black-key-groups.id";
import { findCId } from "./find-c.id";
import { fingerNumbersId } from "./finger-numbers.id";
import { highAndLowId } from "./high-and-low.id";
import { keyHuntId } from "./key-hunt.id";
import { octavesId } from "./octaves.id";
import { sittingAtThePianoId } from "./sitting-at-the-piano.id";
import { theWhiteKeysId } from "./the-white-keys.id";
import { welcomeId } from "./welcome.id";

export const texts: WorldTexts = {
  "black-key-groups": blackKeyGroupsId,
  "find-c": findCId,
  "finger-numbers": fingerNumbersId,
  "high-and-low": highAndLowId,
  "key-hunt": keyHuntId,
  octaves: octavesId,
  "sitting-at-the-piano": sittingAtThePianoId,
  "the-white-keys": theWhiteKeysId,
  welcome: welcomeId,
};
