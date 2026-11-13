/** The Chinese texts of *Reading music*'s lessons, by lesson id. `World.loadTexts("zh")` loads them as one chunk. */
import type { WorldTexts } from "../../model";
import { bassLandmarksZh } from "./bass-landmarks.zh";
import { middleCZh } from "./middle-c.zh";
import { oldMacDonaldZh } from "./old-macdonald.zh";
import { readingStepsAndSkipsZh } from "./reading-steps-and-skips.zh";
import { theBassClefZh } from "./the-bass-clef.zh";
import { theGrandStaffZh } from "./the-grand-staff.zh";
import { theStaffZh } from "./the-staff.zh";
import { theTrebleClefZh } from "./the-treble-clef.zh";
import { trebleLandmarksZh } from "./treble-landmarks.zh";

export const texts: WorldTexts = {
  "bass-landmarks": bassLandmarksZh,
  "middle-c": middleCZh,
  "old-macdonald": oldMacDonaldZh,
  "reading-steps-and-skips": readingStepsAndSkipsZh,
  "the-bass-clef": theBassClefZh,
  "the-grand-staff": theGrandStaffZh,
  "the-staff": theStaffZh,
  "the-treble-clef": theTrebleClefZh,
  "treble-landmarks": trebleLandmarksZh,
};
