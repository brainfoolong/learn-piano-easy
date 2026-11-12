/** The lessons of *Reading music*, in order, its boss and its skip test's picks. The world loads them as one chunk. */
import type { WorldLessons } from "../../model";
import { bassLandmarks } from "./bass-landmarks";
import { middleC } from "./middle-c";
import { oldMacDonald } from "./old-macdonald";
import { readingStepsAndSkips } from "./reading-steps-and-skips";
import { readingMusicSkipPicks } from "./skip-test";
import { theBassClef } from "./the-bass-clef";
import { theGrandStaff } from "./the-grand-staff";
import { theStaff } from "./the-staff";
import { theTrebleClef } from "./the-treble-clef";
import { trebleLandmarks } from "./treble-landmarks";

export const readingMusic: WorldLessons = {
  lessons: [theStaff, theTrebleClef, middleC, trebleLandmarks, theBassClef, bassLandmarks, theGrandStaff, readingStepsAndSkips],
  boss: oldMacDonald,
  skipPicks: readingMusicSkipPicks,
};
