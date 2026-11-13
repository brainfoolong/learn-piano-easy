/** The Portuguese texts of *Both hands*' lessons, by lesson id. `World.loadTexts("pt")` loads them as one chunk. */
import type { WorldTexts } from "../../model";
import { aHeldBassNotePt } from "./a-held-bass-note.pt";
import { changingTheBassOnTheBeatPt } from "./changing-the-bass-on-the-beat.pt";
import { dottedRhythmPt } from "./dotted-rhythm.pt";
import { eighthNotesPt } from "./eighth-notes.pt";
import { handsApartThenTogetherPt } from "./hands-apart-then-together.pt";
import { movingTheHandPt } from "./moving-the-hand.pt";
import { odeToJoyBothHandsPt } from "./ode-to-joy.pt";
import { openFifthsPt } from "./open-fifths.pt";
import { tuneAndBassTogetherPt } from "./tune-and-bass-together.pt";

export const texts: WorldTexts = {
  "a-held-bass-note": aHeldBassNotePt,
  "changing-the-bass-on-the-beat": changingTheBassOnTheBeatPt,
  "dotted-rhythm": dottedRhythmPt,
  "eighth-notes": eighthNotesPt,
  "hands-apart-then-together": handsApartThenTogetherPt,
  "moving-the-hand": movingTheHandPt,
  "ode-to-joy": odeToJoyBothHandsPt,
  "open-fifths": openFifthsPt,
  "tune-and-bass-together": tuneAndBassTogetherPt,
};
