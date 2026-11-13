/** The Chinese texts of *Both hands*' lessons, by lesson id. `World.loadTexts("zh")` loads them as one chunk. */
import type { WorldTexts } from "../../model";
import { aHeldBassNoteZh } from "./a-held-bass-note.zh";
import { changingTheBassOnTheBeatZh } from "./changing-the-bass-on-the-beat.zh";
import { dottedRhythmZh } from "./dotted-rhythm.zh";
import { eighthNotesZh } from "./eighth-notes.zh";
import { handsApartThenTogetherZh } from "./hands-apart-then-together.zh";
import { movingTheHandZh } from "./moving-the-hand.zh";
import { odeToJoyBothHandsZh } from "./ode-to-joy.zh";
import { openFifthsZh } from "./open-fifths.zh";
import { tuneAndBassTogetherZh } from "./tune-and-bass-together.zh";

export const texts: WorldTexts = {
  "a-held-bass-note": aHeldBassNoteZh,
  "changing-the-bass-on-the-beat": changingTheBassOnTheBeatZh,
  "dotted-rhythm": dottedRhythmZh,
  "eighth-notes": eighthNotesZh,
  "hands-apart-then-together": handsApartThenTogetherZh,
  "moving-the-hand": movingTheHandZh,
  "ode-to-joy": odeToJoyBothHandsZh,
  "open-fifths": openFifthsZh,
  "tune-and-bass-together": tuneAndBassTogetherZh,
};
