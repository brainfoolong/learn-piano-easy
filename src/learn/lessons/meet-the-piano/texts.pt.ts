/** The Portuguese texts of *Meet the piano*' lessons, by lesson id. `World.loadTexts("pt")` loads them as one chunk. */
import type { WorldTexts } from "../../model";
import { blackKeyGroupsPt } from "./black-key-groups.pt";
import { findCPt } from "./find-c.pt";
import { fingerNumbersPt } from "./finger-numbers.pt";
import { highAndLowPt } from "./high-and-low.pt";
import { keyHuntPt } from "./key-hunt.pt";
import { octavesPt } from "./octaves.pt";
import { sittingAtThePianoPt } from "./sitting-at-the-piano.pt";
import { theWhiteKeysPt } from "./the-white-keys.pt";
import { welcomePt } from "./welcome.pt";

export const texts: WorldTexts = {
  "black-key-groups": blackKeyGroupsPt,
  "find-c": findCPt,
  "finger-numbers": fingerNumbersPt,
  "high-and-low": highAndLowPt,
  "key-hunt": keyHuntPt,
  octaves: octavesPt,
  "sitting-at-the-piano": sittingAtThePianoPt,
  "the-white-keys": theWhiteKeysPt,
  welcome: welcomePt,
};
