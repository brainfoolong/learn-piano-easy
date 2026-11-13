/** The Indonesian texts of *Scales and keys*' lessons, by lesson id. `World.loadTexts("id")` loads them as one chunk. */
import type { WorldTexts } from "../../model";
import { fMajorId } from "./f-major.id";
import { fingerOverTheThumbId } from "./finger-over-the-thumb.id";
import { flatsId } from "./flats.id";
import { gMajorId } from "./g-major.id";
import { halfAndWholeStepsId } from "./half-and-whole-steps.id";
import { jingleBellsId } from "./jingle-bells.id";
import { keySignaturesId } from "./key-signatures.id";
import { sharpsId } from "./sharps.id";
import { theCMajorScaleId } from "./the-c-major-scale.id";

export const texts: WorldTexts = {
  "f-major": fMajorId,
  "finger-over-the-thumb": fingerOverTheThumbId,
  flats: flatsId,
  "g-major": gMajorId,
  "half-and-whole-steps": halfAndWholeStepsId,
  "jingle-bells": jingleBellsId,
  "key-signatures": keySignaturesId,
  sharps: sharpsId,
  "the-c-major-scale": theCMajorScaleId,
};
