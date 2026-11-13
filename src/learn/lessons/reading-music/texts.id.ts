/** The Indonesian texts of *Reading music*'s lessons, by lesson id. `World.loadTexts("id")` loads them as one chunk. */
import type { WorldTexts } from "../../model";
import { bassLandmarksId } from "./bass-landmarks.id";
import { middleCId } from "./middle-c.id";
import { oldMacDonaldId } from "./old-macdonald.id";
import { readingStepsAndSkipsId } from "./reading-steps-and-skips.id";
import { theBassClefId } from "./the-bass-clef.id";
import { theGrandStaffId } from "./the-grand-staff.id";
import { theStaffId } from "./the-staff.id";
import { theTrebleClefId } from "./the-treble-clef.id";
import { trebleLandmarksId } from "./treble-landmarks.id";

export const texts: WorldTexts = {
  "bass-landmarks": bassLandmarksId,
  "middle-c": middleCId,
  "old-macdonald": oldMacDonaldId,
  "reading-steps-and-skips": readingStepsAndSkipsId,
  "the-bass-clef": theBassClefId,
  "the-grand-staff": theGrandStaffId,
  "the-staff": theStaffId,
  "the-treble-clef": theTrebleClefId,
  "treble-landmarks": trebleLandmarksId,
};
