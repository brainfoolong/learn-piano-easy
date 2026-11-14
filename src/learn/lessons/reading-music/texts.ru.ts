/** The Russian texts of *Reading music*'s lessons, by lesson id. `World.loadTexts("ru")` loads them as one chunk. */
import type { WorldTexts } from "../../model";
import { bassLandmarksRu } from "./bass-landmarks.ru";
import { middleCRu } from "./middle-c.ru";
import { oldMacDonaldRu } from "./old-macdonald.ru";
import { readingStepsAndSkipsRu } from "./reading-steps-and-skips.ru";
import { theBassClefRu } from "./the-bass-clef.ru";
import { theGrandStaffRu } from "./the-grand-staff.ru";
import { theStaffRu } from "./the-staff.ru";
import { theTrebleClefRu } from "./the-treble-clef.ru";
import { trebleLandmarksRu } from "./treble-landmarks.ru";

export const texts: WorldTexts = {
  "bass-landmarks": bassLandmarksRu,
  "middle-c": middleCRu,
  "old-macdonald": oldMacDonaldRu,
  "reading-steps-and-skips": readingStepsAndSkipsRu,
  "the-bass-clef": theBassClefRu,
  "the-grand-staff": theGrandStaffRu,
  "the-staff": theStaffRu,
  "the-treble-clef": theTrebleClefRu,
  "treble-landmarks": trebleLandmarksRu,
};
