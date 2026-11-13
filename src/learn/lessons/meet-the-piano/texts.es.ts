/** The Spanish texts of *Meet the piano*' lessons, by lesson id. `World.loadTexts("es")` loads them as one chunk. */
import type { WorldTexts } from "../../model";
import { blackKeyGroupsEs } from "./black-key-groups.es";
import { findCEs } from "./find-c.es";
import { fingerNumbersEs } from "./finger-numbers.es";
import { highAndLowEs } from "./high-and-low.es";
import { keyHuntEs } from "./key-hunt.es";
import { octavesEs } from "./octaves.es";
import { sittingAtThePianoEs } from "./sitting-at-the-piano.es";
import { theWhiteKeysEs } from "./the-white-keys.es";
import { welcomeEs } from "./welcome.es";

export const texts: WorldTexts = {
  "black-key-groups": blackKeyGroupsEs,
  "find-c": findCEs,
  "finger-numbers": fingerNumbersEs,
  "high-and-low": highAndLowEs,
  "key-hunt": keyHuntEs,
  octaves: octavesEs,
  "sitting-at-the-piano": sittingAtThePianoEs,
  "the-white-keys": theWhiteKeysEs,
  welcome: welcomeEs,
};
