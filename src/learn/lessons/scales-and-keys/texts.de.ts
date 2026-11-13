/** The German texts of *Scales and keys*' lessons, by lesson id. `World.loadTexts("de")` loads them as one chunk. */
import type { WorldTexts } from "../../model";
import { fMajorDe } from "./f-major.de";
import { fingerOverTheThumbDe } from "./finger-over-the-thumb.de";
import { flatsDe } from "./flats.de";
import { gMajorDe } from "./g-major.de";
import { halfAndWholeStepsDe } from "./half-and-whole-steps.de";
import { jingleBellsDe } from "./jingle-bells.de";
import { keySignaturesDe } from "./key-signatures.de";
import { sharpsDe } from "./sharps.de";
import { theCMajorScaleDe } from "./the-c-major-scale.de";

export const texts: WorldTexts = {
  "f-major": fMajorDe,
  "finger-over-the-thumb": fingerOverTheThumbDe,
  flats: flatsDe,
  "g-major": gMajorDe,
  "half-and-whole-steps": halfAndWholeStepsDe,
  "jingle-bells": jingleBellsDe,
  "key-signatures": keySignaturesDe,
  sharps: sharpsDe,
  "the-c-major-scale": theCMajorScaleDe,
};
