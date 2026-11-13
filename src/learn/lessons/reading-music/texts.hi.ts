/** The Hindi texts of *Reading music*'s lessons, by lesson id. `World.loadTexts("hi")` loads them as one chunk. */
import type { WorldTexts } from "../../model";
import { bassLandmarksHi } from "./bass-landmarks.hi";
import { middleCHi } from "./middle-c.hi";
import { oldMacDonaldHi } from "./old-macdonald.hi";
import { readingStepsAndSkipsHi } from "./reading-steps-and-skips.hi";
import { theBassClefHi } from "./the-bass-clef.hi";
import { theGrandStaffHi } from "./the-grand-staff.hi";
import { theStaffHi } from "./the-staff.hi";
import { theTrebleClefHi } from "./the-treble-clef.hi";
import { trebleLandmarksHi } from "./treble-landmarks.hi";

export const texts: WorldTexts = {
  "bass-landmarks": bassLandmarksHi,
  "middle-c": middleCHi,
  "old-macdonald": oldMacDonaldHi,
  "reading-steps-and-skips": readingStepsAndSkipsHi,
  "the-bass-clef": theBassClefHi,
  "the-grand-staff": theGrandStaffHi,
  "the-staff": theStaffHi,
  "the-treble-clef": theTrebleClefHi,
  "treble-landmarks": trebleLandmarksHi,
};
