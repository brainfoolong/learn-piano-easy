/** The Indonesian texts of *Both hands*' lessons, by lesson id. `World.loadTexts("id")` loads them as one chunk. */
import type { WorldTexts } from "../../model";
import { aHeldBassNoteId } from "./a-held-bass-note.id";
import { changingTheBassOnTheBeatId } from "./changing-the-bass-on-the-beat.id";
import { dottedRhythmId } from "./dotted-rhythm.id";
import { eighthNotesId } from "./eighth-notes.id";
import { handsApartThenTogetherId } from "./hands-apart-then-together.id";
import { movingTheHandId } from "./moving-the-hand.id";
import { odeToJoyBothHandsId } from "./ode-to-joy.id";
import { openFifthsId } from "./open-fifths.id";
import { tuneAndBassTogetherId } from "./tune-and-bass-together.id";

export const texts: WorldTexts = {
  "a-held-bass-note": aHeldBassNoteId,
  "changing-the-bass-on-the-beat": changingTheBassOnTheBeatId,
  "dotted-rhythm": dottedRhythmId,
  "eighth-notes": eighthNotesId,
  "hands-apart-then-together": handsApartThenTogetherId,
  "moving-the-hand": movingTheHandId,
  "ode-to-joy": odeToJoyBothHandsId,
  "open-fifths": openFifthsId,
  "tune-and-bass-together": tuneAndBassTogetherId,
};
