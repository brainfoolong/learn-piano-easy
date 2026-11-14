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
  translations: {
    de: () => import("./texts.de").then((module) => module.texts),
    es: () => import("./texts.es").then((module) => module.texts),
    zh: () => import("./texts.zh").then((module) => module.texts),
    hi: () => import("./texts.hi").then((module) => module.texts),
    ar: () => import("./texts.ar").then((module) => module.texts),
    pt: () => import("./texts.pt").then((module) => module.texts),
    id: () => import("./texts.id").then((module) => module.texts),
    bn: () => import("./texts.bn").then((module) => module.texts),
    ru: () => import("./texts.ru").then((module) => module.texts),
  },
  skipPicks: chordsSkipPicks,
};
