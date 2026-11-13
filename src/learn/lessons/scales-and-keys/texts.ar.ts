/** The Arabic texts of *Scales and keys*' lessons, by lesson id. `World.loadTexts("ar")` loads them as one chunk. */
import type { WorldTexts } from "../../model";
import { fMajorAr } from "./f-major.ar";
import { fingerOverTheThumbAr } from "./finger-over-the-thumb.ar";
import { flatsAr } from "./flats.ar";
import { gMajorAr } from "./g-major.ar";
import { halfAndWholeStepsAr } from "./half-and-whole-steps.ar";
import { jingleBellsAr } from "./jingle-bells.ar";
import { keySignaturesAr } from "./key-signatures.ar";
import { sharpsAr } from "./sharps.ar";
import { theCMajorScaleAr } from "./the-c-major-scale.ar";

export const texts: WorldTexts = {
  "f-major": fMajorAr,
  "finger-over-the-thumb": fingerOverTheThumbAr,
  flats: flatsAr,
  "g-major": gMajorAr,
  "half-and-whole-steps": halfAndWholeStepsAr,
  "jingle-bells": jingleBellsAr,
  "key-signatures": keySignaturesAr,
  sharps: sharpsAr,
  "the-c-major-scale": theCMajorScaleAr,
};
