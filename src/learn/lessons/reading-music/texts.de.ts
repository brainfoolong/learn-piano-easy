/** The German texts of *Reading music*'s lessons, by lesson id. `World.loadTexts("de")` loads them as one chunk. */
import type { WorldTexts } from "../../model";
import { bassLandmarksDe } from "./bass-landmarks.de";
import { middleCDe } from "./middle-c.de";
import { oldMacDonaldDe } from "./old-macdonald.de";
import { readingStepsAndSkipsDe } from "./reading-steps-and-skips.de";
import { theBassClefDe } from "./the-bass-clef.de";
import { theGrandStaffDe } from "./the-grand-staff.de";
import { theStaffDe } from "./the-staff.de";
import { theTrebleClefDe } from "./the-treble-clef.de";
import { trebleLandmarksDe } from "./treble-landmarks.de";

export const texts: WorldTexts = {
  "bass-landmarks": bassLandmarksDe,
  "middle-c": middleCDe,
  "old-macdonald": oldMacDonaldDe,
  "reading-steps-and-skips": readingStepsAndSkipsDe,
  "the-bass-clef": theBassClefDe,
  "the-grand-staff": theGrandStaffDe,
  "the-staff": theStaffDe,
  "the-treble-clef": theTrebleClefDe,
  "treble-landmarks": trebleLandmarksDe,
};
