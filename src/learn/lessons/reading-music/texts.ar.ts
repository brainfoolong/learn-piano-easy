/** The Arabic texts of *Reading music*'s lessons, by lesson id. `World.loadTexts("ar")` loads them as one chunk. */
import type { WorldTexts } from "../../model";
import { bassLandmarksAr } from "./bass-landmarks.ar";
import { middleCAr } from "./middle-c.ar";
import { oldMacDonaldAr } from "./old-macdonald.ar";
import { readingStepsAndSkipsAr } from "./reading-steps-and-skips.ar";
import { theBassClefAr } from "./the-bass-clef.ar";
import { theGrandStaffAr } from "./the-grand-staff.ar";
import { theStaffAr } from "./the-staff.ar";
import { theTrebleClefAr } from "./the-treble-clef.ar";
import { trebleLandmarksAr } from "./treble-landmarks.ar";

export const texts: WorldTexts = {
  "bass-landmarks": bassLandmarksAr,
  "middle-c": middleCAr,
  "old-macdonald": oldMacDonaldAr,
  "reading-steps-and-skips": readingStepsAndSkipsAr,
  "the-bass-clef": theBassClefAr,
  "the-grand-staff": theGrandStaffAr,
  "the-staff": theStaffAr,
  "the-treble-clef": theTrebleClefAr,
  "treble-landmarks": trebleLandmarksAr,
};
