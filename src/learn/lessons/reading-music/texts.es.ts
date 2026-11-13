/** The Spanish texts of *Reading music*' lessons, by lesson id. `World.loadTexts("es")` loads them as one chunk. */
import type { WorldTexts } from "../../model";
import { bassLandmarksEs } from "./bass-landmarks.es";
import { middleCEs } from "./middle-c.es";
import { oldMacDonaldEs } from "./old-macdonald.es";
import { readingStepsAndSkipsEs } from "./reading-steps-and-skips.es";
import { theBassClefEs } from "./the-bass-clef.es";
import { theGrandStaffEs } from "./the-grand-staff.es";
import { theStaffEs } from "./the-staff.es";
import { theTrebleClefEs } from "./the-treble-clef.es";
import { trebleLandmarksEs } from "./treble-landmarks.es";

export const texts: WorldTexts = {
  "bass-landmarks": bassLandmarksEs,
  "middle-c": middleCEs,
  "old-macdonald": oldMacDonaldEs,
  "reading-steps-and-skips": readingStepsAndSkipsEs,
  "the-bass-clef": theBassClefEs,
  "the-grand-staff": theGrandStaffEs,
  "the-staff": theStaffEs,
  "the-treble-clef": theTrebleClefEs,
  "treble-landmarks": trebleLandmarksEs,
};
