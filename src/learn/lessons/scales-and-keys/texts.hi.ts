/** The Hindi texts of *Scales and keys*' lessons, by lesson id. `World.loadTexts("hi")` loads them as one chunk. */
import type { WorldTexts } from "../../model";
import { fMajorHi } from "./f-major.hi";
import { fingerOverTheThumbHi } from "./finger-over-the-thumb.hi";
import { flatsHi } from "./flats.hi";
import { gMajorHi } from "./g-major.hi";
import { halfAndWholeStepsHi } from "./half-and-whole-steps.hi";
import { jingleBellsHi } from "./jingle-bells.hi";
import { keySignaturesHi } from "./key-signatures.hi";
import { sharpsHi } from "./sharps.hi";
import { theCMajorScaleHi } from "./the-c-major-scale.hi";

export const texts: WorldTexts = {
  "f-major": fMajorHi,
  "finger-over-the-thumb": fingerOverTheThumbHi,
  flats: flatsHi,
  "g-major": gMajorHi,
  "half-and-whole-steps": halfAndWholeStepsHi,
  "jingle-bells": jingleBellsHi,
  "key-signatures": keySignaturesHi,
  sharps: sharpsHi,
  "the-c-major-scale": theCMajorScaleHi,
};
