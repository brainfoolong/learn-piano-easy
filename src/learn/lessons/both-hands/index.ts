/** The lessons of *Both hands*, in order, its boss and its skip test's picks. The world loads them as one chunk. */
import type { WorldLessons } from "../../model";
import { aHeldBassNote } from "./a-held-bass-note";
import { changingTheBassOnTheBeat } from "./changing-the-bass-on-the-beat";
import { dottedRhythm } from "./dotted-rhythm";
import { eighthNotes } from "./eighth-notes";
import { handsApartThenTogether } from "./hands-apart-then-together";
import { movingTheHand } from "./moving-the-hand";
import { odeToJoyRare } from "./ode-to-joy";
import { openFifths } from "./open-fifths";
import { bothHandsSkipPicks } from "./skip-test";
import { tuneAndBassTogether } from "./tune-and-bass-together";

export const bothHands: WorldLessons = {
  lessons: [handsApartThenTogether, aHeldBassNote, openFifths, changingTheBassOnTheBeat, tuneAndBassTogether, movingTheHand, eighthNotes, dottedRhythm],
  boss: odeToJoyRare,
  skipPicks: bothHandsSkipPicks,
};
