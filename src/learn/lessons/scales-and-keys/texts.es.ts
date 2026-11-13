/** The Spanish texts of *Scales and keys*' lessons, by lesson id. `World.loadTexts("es")` loads them as one chunk. */
import type { WorldTexts } from "../../model";
import { fMajorEs } from "./f-major.es";
import { fingerOverTheThumbEs } from "./finger-over-the-thumb.es";
import { flatsEs } from "./flats.es";
import { gMajorEs } from "./g-major.es";
import { halfAndWholeStepsEs } from "./half-and-whole-steps.es";
import { jingleBellsEs } from "./jingle-bells.es";
import { keySignaturesEs } from "./key-signatures.es";
import { sharpsEs } from "./sharps.es";
import { theCMajorScaleEs } from "./the-c-major-scale.es";

export const texts: WorldTexts = {
  "f-major": fMajorEs,
  "finger-over-the-thumb": fingerOverTheThumbEs,
  flats: flatsEs,
  "g-major": gMajorEs,
  "half-and-whole-steps": halfAndWholeStepsEs,
  "jingle-bells": jingleBellsEs,
  "key-signatures": keySignaturesEs,
  sharps: sharpsEs,
  "the-c-major-scale": theCMajorScaleEs,
};
