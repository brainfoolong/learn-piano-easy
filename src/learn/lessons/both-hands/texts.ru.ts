/** The Russian texts of *Both hands*' lessons, by lesson id. `World.loadTexts("ru")` loads them as one chunk. */
import type { WorldTexts } from "../../model";
import { aHeldBassNoteRu } from "./a-held-bass-note.ru";
import { changingTheBassOnTheBeatRu } from "./changing-the-bass-on-the-beat.ru";
import { dottedRhythmRu } from "./dotted-rhythm.ru";
import { eighthNotesRu } from "./eighth-notes.ru";
import { handsApartThenTogetherRu } from "./hands-apart-then-together.ru";
import { movingTheHandRu } from "./moving-the-hand.ru";
import { odeToJoyBothHandsRu } from "./ode-to-joy.ru";
import { openFifthsRu } from "./open-fifths.ru";
import { tuneAndBassTogetherRu } from "./tune-and-bass-together.ru";

export const texts: WorldTexts = {
  "a-held-bass-note": aHeldBassNoteRu,
  "changing-the-bass-on-the-beat": changingTheBassOnTheBeatRu,
  "dotted-rhythm": dottedRhythmRu,
  "eighth-notes": eighthNotesRu,
  "hands-apart-then-together": handsApartThenTogetherRu,
  "moving-the-hand": movingTheHandRu,
  "ode-to-joy": odeToJoyBothHandsRu,
  "open-fifths": openFifthsRu,
  "tune-and-bass-together": tuneAndBassTogetherRu,
};
