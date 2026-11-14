/** The Bengali texts of *Both hands*' lessons, by lesson id. `World.loadTexts("bn")` loads them as one chunk. */
import type { WorldTexts } from "../../model";
import { aHeldBassNoteBn } from "./a-held-bass-note.bn";
import { changingTheBassOnTheBeatBn } from "./changing-the-bass-on-the-beat.bn";
import { dottedRhythmBn } from "./dotted-rhythm.bn";
import { eighthNotesBn } from "./eighth-notes.bn";
import { handsApartThenTogetherBn } from "./hands-apart-then-together.bn";
import { movingTheHandBn } from "./moving-the-hand.bn";
import { odeToJoyBothHandsBn } from "./ode-to-joy.bn";
import { openFifthsBn } from "./open-fifths.bn";
import { tuneAndBassTogetherBn } from "./tune-and-bass-together.bn";

export const texts: WorldTexts = {
  "a-held-bass-note": aHeldBassNoteBn,
  "changing-the-bass-on-the-beat": changingTheBassOnTheBeatBn,
  "dotted-rhythm": dottedRhythmBn,
  "eighth-notes": eighthNotesBn,
  "hands-apart-then-together": handsApartThenTogetherBn,
  "moving-the-hand": movingTheHandBn,
  "ode-to-joy": odeToJoyBothHandsBn,
  "open-fifths": openFifthsBn,
  "tune-and-bass-together": tuneAndBassTogetherBn,
};
