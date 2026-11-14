/** The Bengali texts of *Reading music*'s lessons, by lesson id. `World.loadTexts("bn")` loads them as one chunk. */
import type { WorldTexts } from "../../model";
import { bassLandmarksBn } from "./bass-landmarks.bn";
import { middleCBn } from "./middle-c.bn";
import { oldMacDonaldBn } from "./old-macdonald.bn";
import { readingStepsAndSkipsBn } from "./reading-steps-and-skips.bn";
import { theBassClefBn } from "./the-bass-clef.bn";
import { theGrandStaffBn } from "./the-grand-staff.bn";
import { theStaffBn } from "./the-staff.bn";
import { theTrebleClefBn } from "./the-treble-clef.bn";
import { trebleLandmarksBn } from "./treble-landmarks.bn";

export const texts: WorldTexts = {
  "bass-landmarks": bassLandmarksBn,
  "middle-c": middleCBn,
  "old-macdonald": oldMacDonaldBn,
  "reading-steps-and-skips": readingStepsAndSkipsBn,
  "the-bass-clef": theBassClefBn,
  "the-grand-staff": theGrandStaffBn,
  "the-staff": theStaffBn,
  "the-treble-clef": theTrebleClefBn,
  "treble-landmarks": trebleLandmarksBn,
};
