/** The Chinese texts of *Scales and keys*' lessons, by lesson id. `World.loadTexts("zh")` loads them as one chunk. */
import type { WorldTexts } from "../../model";
import { fMajorZh } from "./f-major.zh";
import { fingerOverTheThumbZh } from "./finger-over-the-thumb.zh";
import { flatsZh } from "./flats.zh";
import { gMajorZh } from "./g-major.zh";
import { halfAndWholeStepsZh } from "./half-and-whole-steps.zh";
import { jingleBellsZh } from "./jingle-bells.zh";
import { keySignaturesZh } from "./key-signatures.zh";
import { sharpsZh } from "./sharps.zh";
import { theCMajorScaleZh } from "./the-c-major-scale.zh";

export const texts: WorldTexts = {
  "f-major": fMajorZh,
  "finger-over-the-thumb": fingerOverTheThumbZh,
  flats: flatsZh,
  "g-major": gMajorZh,
  "half-and-whole-steps": halfAndWholeStepsZh,
  "jingle-bells": jingleBellsZh,
  "key-signatures": keySignaturesZh,
  sharps: sharpsZh,
  "the-c-major-scale": theCMajorScaleZh,
};
