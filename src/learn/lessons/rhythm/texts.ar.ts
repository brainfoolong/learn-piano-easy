/** The Arabic texts of *Rhythm*'s lessons, by lesson id. `World.loadTexts("ar")` loads them as one chunk. */
import type { WorldTexts } from "../../model";
import { countingToFourAr } from "./counting-to-four.ar";
import { halfNotesAr } from "./half-notes.ar";
import { odeToJoyAr } from "./ode-to-joy.ar";
import { quarterNotesAr } from "./quarter-notes.ar";
import { restsAr } from "./rests.ar";
import { tempoAndTheMetronomeAr } from "./tempo-and-the-metronome.ar";
import { theBeatAr } from "./the-beat.ar";
import { threeFourTimeAr } from "./three-four-time.ar";
import { wholeNotesAr } from "./whole-notes.ar";

export const texts: WorldTexts = {
  "counting-to-four": countingToFourAr,
  "half-notes": halfNotesAr,
  "ode-to-joy": odeToJoyAr,
  "quarter-notes": quarterNotesAr,
  rests: restsAr,
  "tempo-and-the-metronome": tempoAndTheMetronomeAr,
  "the-beat": theBeatAr,
  "three-four-time": threeFourTimeAr,
  "whole-notes": wholeNotesAr,
};
