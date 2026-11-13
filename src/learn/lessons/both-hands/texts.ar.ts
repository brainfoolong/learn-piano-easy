/** The Arabic texts of *Both hands*' lessons, by lesson id. `World.loadTexts("ar")` loads them as one chunk. */
import type { WorldTexts } from "../../model";
import { aHeldBassNoteAr } from "./a-held-bass-note.ar";
import { changingTheBassOnTheBeatAr } from "./changing-the-bass-on-the-beat.ar";
import { dottedRhythmAr } from "./dotted-rhythm.ar";
import { eighthNotesAr } from "./eighth-notes.ar";
import { handsApartThenTogetherAr } from "./hands-apart-then-together.ar";
import { movingTheHandAr } from "./moving-the-hand.ar";
import { odeToJoyBothHandsAr } from "./ode-to-joy.ar";
import { openFifthsAr } from "./open-fifths.ar";
import { tuneAndBassTogetherAr } from "./tune-and-bass-together.ar";

export const texts: WorldTexts = {
  "a-held-bass-note": aHeldBassNoteAr,
  "changing-the-bass-on-the-beat": changingTheBassOnTheBeatAr,
  "dotted-rhythm": dottedRhythmAr,
  "eighth-notes": eighthNotesAr,
  "hands-apart-then-together": handsApartThenTogetherAr,
  "moving-the-hand": movingTheHandAr,
  "ode-to-joy": odeToJoyBothHandsAr,
  "open-fifths": openFifthsAr,
  "tune-and-bass-together": tuneAndBassTogetherAr,
};
