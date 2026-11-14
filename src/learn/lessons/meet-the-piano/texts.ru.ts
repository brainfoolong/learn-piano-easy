/** The Russian texts of *Meet the piano*'s lessons, by lesson id. `World.loadTexts("ru")` loads them as one chunk. */
import type { WorldTexts } from "../../model";
import { blackKeyGroupsRu } from "./black-key-groups.ru";
import { findCRu } from "./find-c.ru";
import { fingerNumbersRu } from "./finger-numbers.ru";
import { highAndLowRu } from "./high-and-low.ru";
import { keyHuntRu } from "./key-hunt.ru";
import { octavesRu } from "./octaves.ru";
import { sittingAtThePianoRu } from "./sitting-at-the-piano.ru";
import { theWhiteKeysRu } from "./the-white-keys.ru";
import { welcomeRu } from "./welcome.ru";

export const texts: WorldTexts = {
  "black-key-groups": blackKeyGroupsRu,
  "find-c": findCRu,
  "finger-numbers": fingerNumbersRu,
  "high-and-low": highAndLowRu,
  "key-hunt": keyHuntRu,
  octaves: octavesRu,
  "sitting-at-the-piano": sittingAtThePianoRu,
  "the-white-keys": theWhiteKeysRu,
  welcome: welcomeRu,
};
