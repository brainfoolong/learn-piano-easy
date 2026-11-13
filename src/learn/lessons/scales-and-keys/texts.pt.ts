/** The Portuguese texts of *Scales and keys*' lessons, by lesson id. `World.loadTexts("pt")` loads them as one chunk. */
import type { WorldTexts } from "../../model";
import { fMajorPt } from "./f-major.pt";
import { fingerOverTheThumbPt } from "./finger-over-the-thumb.pt";
import { flatsPt } from "./flats.pt";
import { gMajorPt } from "./g-major.pt";
import { halfAndWholeStepsPt } from "./half-and-whole-steps.pt";
import { jingleBellsPt } from "./jingle-bells.pt";
import { keySignaturesPt } from "./key-signatures.pt";
import { sharpsPt } from "./sharps.pt";
import { theCMajorScalePt } from "./the-c-major-scale.pt";

export const texts: WorldTexts = {
  "f-major": fMajorPt,
  "finger-over-the-thumb": fingerOverTheThumbPt,
  flats: flatsPt,
  "g-major": gMajorPt,
  "half-and-whole-steps": halfAndWholeStepsPt,
  "jingle-bells": jingleBellsPt,
  "key-signatures": keySignaturesPt,
  sharps: sharpsPt,
  "the-c-major-scale": theCMajorScalePt,
};
