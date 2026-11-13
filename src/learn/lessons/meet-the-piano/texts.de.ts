/** The German texts of *Meet the piano*'s lessons, by lesson id. `World.loadTexts("de")` loads them as one chunk. */
import type { WorldTexts } from "../../model";
import { blackKeyGroupsDe } from "./black-key-groups.de";
import { findCDe } from "./find-c.de";
import { fingerNumbersDe } from "./finger-numbers.de";
import { highAndLowDe } from "./high-and-low.de";
import { keyHuntDe } from "./key-hunt.de";
import { octavesDe } from "./octaves.de";
import { sittingAtThePianoDe } from "./sitting-at-the-piano.de";
import { theWhiteKeysDe } from "./the-white-keys.de";
import { welcomeDe } from "./welcome.de";

export const texts: WorldTexts = {
  "black-key-groups": blackKeyGroupsDe,
  "find-c": findCDe,
  "finger-numbers": fingerNumbersDe,
  "high-and-low": highAndLowDe,
  "key-hunt": keyHuntDe,
  octaves: octavesDe,
  "sitting-at-the-piano": sittingAtThePianoDe,
  "the-white-keys": theWhiteKeysDe,
  welcome: welcomeDe,
};
