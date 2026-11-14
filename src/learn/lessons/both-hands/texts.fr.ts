/** The French texts of *Both hands*' lessons, by lesson id. `World.loadTexts("fr")` loads them as one chunk. */
import type { WorldTexts } from "../../model";
import { aHeldBassNoteFr } from "./a-held-bass-note.fr";
import { changingTheBassOnTheBeatFr } from "./changing-the-bass-on-the-beat.fr";
import { dottedRhythmFr } from "./dotted-rhythm.fr";
import { eighthNotesFr } from "./eighth-notes.fr";
import { handsApartThenTogetherFr } from "./hands-apart-then-together.fr";
import { movingTheHandFr } from "./moving-the-hand.fr";
import { odeToJoyBothHandsFr } from "./ode-to-joy.fr";
import { openFifthsFr } from "./open-fifths.fr";
import { tuneAndBassTogetherFr } from "./tune-and-bass-together.fr";

export const texts: WorldTexts = {
  "a-held-bass-note": aHeldBassNoteFr,
  "changing-the-bass-on-the-beat": changingTheBassOnTheBeatFr,
  "dotted-rhythm": dottedRhythmFr,
  "eighth-notes": eighthNotesFr,
  "hands-apart-then-together": handsApartThenTogetherFr,
  "moving-the-hand": movingTheHandFr,
  "ode-to-joy": odeToJoyBothHandsFr,
  "open-fifths": openFifthsFr,
  "tune-and-bass-together": tuneAndBassTogetherFr,
};
