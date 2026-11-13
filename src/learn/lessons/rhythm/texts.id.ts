/** The Indonesian texts of *Rhythm*'s lessons, by lesson id. `World.loadTexts("id")` loads them as one chunk. */
import type { WorldTexts } from "../../model";
import { countingToFourId } from "./counting-to-four.id";
import { halfNotesId } from "./half-notes.id";
import { odeToJoyId } from "./ode-to-joy.id";
import { quarterNotesId } from "./quarter-notes.id";
import { restsId } from "./rests.id";
import { tempoAndTheMetronomeId } from "./tempo-and-the-metronome.id";
import { theBeatId } from "./the-beat.id";
import { threeFourTimeId } from "./three-four-time.id";
import { wholeNotesId } from "./whole-notes.id";

export const texts: WorldTexts = {
  "counting-to-four": countingToFourId,
  "half-notes": halfNotesId,
  "ode-to-joy": odeToJoyId,
  "quarter-notes": quarterNotesId,
  rests: restsId,
  "tempo-and-the-metronome": tempoAndTheMetronomeId,
  "the-beat": theBeatId,
  "three-four-time": threeFourTimeId,
  "whole-notes": wholeNotesId,
};
