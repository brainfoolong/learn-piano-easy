/** The French texts of *Meet the piano*'s lessons, by lesson id. `World.loadTexts("fr")` loads them as one chunk. */
import type { WorldTexts } from "../../model";
import { blackKeyGroupsFr } from "./black-key-groups.fr";
import { findCFr } from "./find-c.fr";
import { fingerNumbersFr } from "./finger-numbers.fr";
import { highAndLowFr } from "./high-and-low.fr";
import { keyHuntFr } from "./key-hunt.fr";
import { octavesFr } from "./octaves.fr";
import { sittingAtThePianoFr } from "./sitting-at-the-piano.fr";
import { theWhiteKeysFr } from "./the-white-keys.fr";
import { welcomeFr } from "./welcome.fr";

export const texts: WorldTexts = {
  "black-key-groups": blackKeyGroupsFr,
  "find-c": findCFr,
  "finger-numbers": fingerNumbersFr,
  "high-and-low": highAndLowFr,
  "key-hunt": keyHuntFr,
  octaves: octavesFr,
  "sitting-at-the-piano": sittingAtThePianoFr,
  "the-white-keys": theWhiteKeysFr,
  welcome: welcomeFr,
};
