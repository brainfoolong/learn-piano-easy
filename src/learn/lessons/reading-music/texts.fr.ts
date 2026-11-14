/** The French texts of *Reading music*'s lessons, by lesson id. `World.loadTexts("fr")` loads them as one chunk. */
import type { WorldTexts } from "../../model";
import { bassLandmarksFr } from "./bass-landmarks.fr";
import { middleCFr } from "./middle-c.fr";
import { oldMacDonaldFr } from "./old-macdonald.fr";
import { readingStepsAndSkipsFr } from "./reading-steps-and-skips.fr";
import { theBassClefFr } from "./the-bass-clef.fr";
import { theGrandStaffFr } from "./the-grand-staff.fr";
import { theStaffFr } from "./the-staff.fr";
import { theTrebleClefFr } from "./the-treble-clef.fr";
import { trebleLandmarksFr } from "./treble-landmarks.fr";

export const texts: WorldTexts = {
  "bass-landmarks": bassLandmarksFr,
  "middle-c": middleCFr,
  "old-macdonald": oldMacDonaldFr,
  "reading-steps-and-skips": readingStepsAndSkipsFr,
  "the-bass-clef": theBassClefFr,
  "the-grand-staff": theGrandStaffFr,
  "the-staff": theStaffFr,
  "the-treble-clef": theTrebleClefFr,
  "treble-landmarks": trebleLandmarksFr,
};
