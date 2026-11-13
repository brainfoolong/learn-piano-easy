/** The Spanish texts of *Both hands*' lessons, by lesson id. `World.loadTexts("es")` loads them as one chunk. */
import type { WorldTexts } from "../../model";
import { aHeldBassNoteEs } from "./a-held-bass-note.es";
import { changingTheBassOnTheBeatEs } from "./changing-the-bass-on-the-beat.es";
import { dottedRhythmEs } from "./dotted-rhythm.es";
import { eighthNotesEs } from "./eighth-notes.es";
import { handsApartThenTogetherEs } from "./hands-apart-then-together.es";
import { movingTheHandEs } from "./moving-the-hand.es";
import { odeToJoyBothHandsEs } from "./ode-to-joy.es";
import { openFifthsEs } from "./open-fifths.es";
import { tuneAndBassTogetherEs } from "./tune-and-bass-together.es";

export const texts: WorldTexts = {
  "a-held-bass-note": aHeldBassNoteEs,
  "changing-the-bass-on-the-beat": changingTheBassOnTheBeatEs,
  "dotted-rhythm": dottedRhythmEs,
  "eighth-notes": eighthNotesEs,
  "hands-apart-then-together": handsApartThenTogetherEs,
  "moving-the-hand": movingTheHandEs,
  "ode-to-joy": odeToJoyBothHandsEs,
  "open-fifths": openFifthsEs,
  "tune-and-bass-together": tuneAndBassTogetherEs,
};
