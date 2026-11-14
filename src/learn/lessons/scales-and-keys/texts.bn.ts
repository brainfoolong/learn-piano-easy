/** The Bengali texts of *Scales and keys*' lessons, by lesson id. `World.loadTexts("bn")` loads them as one chunk. */
import type { WorldTexts } from "../../model";
import { fMajorBn } from "./f-major.bn";
import { fingerOverTheThumbBn } from "./finger-over-the-thumb.bn";
import { flatsBn } from "./flats.bn";
import { gMajorBn } from "./g-major.bn";
import { halfAndWholeStepsBn } from "./half-and-whole-steps.bn";
import { jingleBellsBn } from "./jingle-bells.bn";
import { keySignaturesBn } from "./key-signatures.bn";
import { sharpsBn } from "./sharps.bn";
import { theCMajorScaleBn } from "./the-c-major-scale.bn";

export const texts: WorldTexts = {
  "f-major": fMajorBn,
  "finger-over-the-thumb": fingerOverTheThumbBn,
  flats: flatsBn,
  "g-major": gMajorBn,
  "half-and-whole-steps": halfAndWholeStepsBn,
  "jingle-bells": jingleBellsBn,
  "key-signatures": keySignaturesBn,
  sharps: sharpsBn,
  "the-c-major-scale": theCMajorScaleBn,
};
