/** The lessons of *Chords*, in order, its boss and its skip test's picks. The world loads them as one chunk. */
import type { WorldLessons } from "../../model";
import { albertiBass } from "./alberti-bass";
import { brokenChords } from "./broken-chords";
import { canonInDRare } from "./canon-in-d";
import { cFAndG } from "./c-f-and-g";
import { inversions } from "./inversions";
import { majorTriads } from "./major-triads";
import { minorTriads } from "./minor-triads";
import { chordsSkipPicks } from "./skip-test";
import { theWaltzBass } from "./the-waltz-bass";
import { whatAChordIs } from "./what-a-chord-is";

export const chords: WorldLessons = {
  lessons: [whatAChordIs, majorTriads, minorTriads, cFAndG, inversions, brokenChords, theWaltzBass, albertiBass],
  boss: canonInDRare,
  translations: { de: () => import("./texts.de").then((module) => module.texts) },
  skipPicks: chordsSkipPicks,
};
