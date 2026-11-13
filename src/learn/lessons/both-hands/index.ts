/** The lessons of *Both hands*, in order, its boss and its skip test's picks. The world loads them as one chunk. */
import type { WorldLessons } from "../../model";
import { aHeldBassNote } from "./a-held-bass-note";
import { changingTheBassOnTheBeat } from "./changing-the-bass-on-the-beat";
import { dottedRhythm } from "./dotted-rhythm";
import { eighthNotes } from "./eighth-notes";
import { handsApartThenTogether } from "./hands-apart-then-together";
import { movingTheHand } from "./moving-the-hand";
import { odeToJoyBothHands } from "./ode-to-joy";
import { openFifths } from "./open-fifths";
import { bothHandsSkipPicks } from "./skip-test";
import { tuneAndBassTogether } from "./tune-and-bass-together";

export const bothHands: WorldLessons = {
  lessons: [handsApartThenTogether, aHeldBassNote, openFifths, changingTheBassOnTheBeat, tuneAndBassTogether, movingTheHand, eighthNotes, dottedRhythm],
  boss: odeToJoyBothHands,
  translations: {
    de: () => import("./texts.de").then((module) => module.texts),
    es: () => import("./texts.es").then((module) => module.texts),
    zh: () => import("./texts.zh").then((module) => module.texts),
    hi: () => import("./texts.hi").then((module) => module.texts),
    ar: () => import("./texts.ar").then((module) => module.texts),
    pt: () => import("./texts.pt").then((module) => module.texts),
  },
  skipPicks: bothHandsSkipPicks,
};
