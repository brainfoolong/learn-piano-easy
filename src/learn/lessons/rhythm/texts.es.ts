/** The Spanish texts of *Rhythm*'s lessons, by lesson id. `World.loadTexts("es")` loads them as one chunk. */
import type { WorldTexts } from "../../model";
import { countingToFourEs } from "./counting-to-four.es";
import { halfNotesEs } from "./half-notes.es";
import { odeToJoyEs } from "./ode-to-joy.es";
import { quarterNotesEs } from "./quarter-notes.es";
import { restsEs } from "./rests.es";
import { tempoAndTheMetronomeEs } from "./tempo-and-the-metronome.es";
import { theBeatEs } from "./the-beat.es";
import { threeFourTimeEs } from "./three-four-time.es";
import { wholeNotesEs } from "./whole-notes.es";

export const texts: WorldTexts = {
  "counting-to-four": countingToFourEs,
  "half-notes": halfNotesEs,
  "ode-to-joy": odeToJoyEs,
  "quarter-notes": quarterNotesEs,
  rests: restsEs,
  "tempo-and-the-metronome": tempoAndTheMetronomeEs,
  "the-beat": theBeatEs,
  "three-four-time": threeFourTimeEs,
  "whole-notes": wholeNotesEs,
};
