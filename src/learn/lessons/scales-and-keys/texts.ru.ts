/** The Russian texts of *Scales and keys*' lessons, by lesson id. `World.loadTexts("ru")` loads them as one chunk. */
import type { WorldTexts } from "../../model";
import { fMajorRu } from "./f-major.ru";
import { fingerOverTheThumbRu } from "./finger-over-the-thumb.ru";
import { flatsRu } from "./flats.ru";
import { gMajorRu } from "./g-major.ru";
import { halfAndWholeStepsRu } from "./half-and-whole-steps.ru";
import { jingleBellsRu } from "./jingle-bells.ru";
import { keySignaturesRu } from "./key-signatures.ru";
import { sharpsRu } from "./sharps.ru";
import { theCMajorScaleRu } from "./the-c-major-scale.ru";

export const texts: WorldTexts = {
  "f-major": fMajorRu,
  "finger-over-the-thumb": fingerOverTheThumbRu,
  flats: flatsRu,
  "g-major": gMajorRu,
  "half-and-whole-steps": halfAndWholeStepsRu,
  "jingle-bells": jingleBellsRu,
  "key-signatures": keySignaturesRu,
  sharps: sharpsRu,
  "the-c-major-scale": theCMajorScaleRu,
};
