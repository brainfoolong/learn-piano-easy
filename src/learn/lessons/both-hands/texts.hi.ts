/** The Hindi texts of *Both hands*' lessons, by lesson id. `World.loadTexts("hi")` loads them as one chunk. */
import type { WorldTexts } from "../../model";
import { aHeldBassNoteHi } from "./a-held-bass-note.hi";
import { changingTheBassOnTheBeatHi } from "./changing-the-bass-on-the-beat.hi";
import { dottedRhythmHi } from "./dotted-rhythm.hi";
import { eighthNotesHi } from "./eighth-notes.hi";
import { handsApartThenTogetherHi } from "./hands-apart-then-together.hi";
import { movingTheHandHi } from "./moving-the-hand.hi";
import { odeToJoyBothHandsHi } from "./ode-to-joy.hi";
import { openFifthsHi } from "./open-fifths.hi";
import { tuneAndBassTogetherHi } from "./tune-and-bass-together.hi";

export const texts: WorldTexts = {
  "a-held-bass-note": aHeldBassNoteHi,
  "changing-the-bass-on-the-beat": changingTheBassOnTheBeatHi,
  "dotted-rhythm": dottedRhythmHi,
  "eighth-notes": eighthNotesHi,
  "hands-apart-then-together": handsApartThenTogetherHi,
  "moving-the-hand": movingTheHandHi,
  "ode-to-joy": odeToJoyBothHandsHi,
  "open-fifths": openFifthsHi,
  "tune-and-bass-together": tuneAndBassTogetherHi,
};
