/** The French texts of *Scales and keys*' lessons, by lesson id. `World.loadTexts("fr")` loads them as one chunk. */
import type { WorldTexts } from "../../model";
import { fMajorFr } from "./f-major.fr";
import { fingerOverTheThumbFr } from "./finger-over-the-thumb.fr";
import { flatsFr } from "./flats.fr";
import { gMajorFr } from "./g-major.fr";
import { halfAndWholeStepsFr } from "./half-and-whole-steps.fr";
import { jingleBellsFr } from "./jingle-bells.fr";
import { keySignaturesFr } from "./key-signatures.fr";
import { sharpsFr } from "./sharps.fr";
import { theCMajorScaleFr } from "./the-c-major-scale.fr";

export const texts: WorldTexts = {
  "f-major": fMajorFr,
  "finger-over-the-thumb": fingerOverTheThumbFr,
  flats: flatsFr,
  "g-major": gMajorFr,
  "half-and-whole-steps": halfAndWholeStepsFr,
  "jingle-bells": jingleBellsFr,
  "key-signatures": keySignaturesFr,
  sharps: sharpsFr,
  "the-c-major-scale": theCMajorScaleFr,
};
