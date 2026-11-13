/** The Portuguese texts of *Reading music*' lessons, by lesson id. `World.loadTexts("pt")` loads them as one chunk. */
import type { WorldTexts } from "../../model";
import { bassLandmarksPt } from "./bass-landmarks.pt";
import { middleCPt } from "./middle-c.pt";
import { oldMacDonaldPt } from "./old-macdonald.pt";
import { readingStepsAndSkipsPt } from "./reading-steps-and-skips.pt";
import { theBassClefPt } from "./the-bass-clef.pt";
import { theGrandStaffPt } from "./the-grand-staff.pt";
import { theStaffPt } from "./the-staff.pt";
import { theTrebleClefPt } from "./the-treble-clef.pt";
import { trebleLandmarksPt } from "./treble-landmarks.pt";

export const texts: WorldTexts = {
  "bass-landmarks": bassLandmarksPt,
  "middle-c": middleCPt,
  "old-macdonald": oldMacDonaldPt,
  "reading-steps-and-skips": readingStepsAndSkipsPt,
  "the-bass-clef": theBassClefPt,
  "the-grand-staff": theGrandStaffPt,
  "the-staff": theStaffPt,
  "the-treble-clef": theTrebleClefPt,
  "treble-landmarks": trebleLandmarksPt,
};
