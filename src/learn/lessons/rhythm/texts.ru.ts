/** The Russian texts of *Rhythm*'s lessons, by lesson id. `World.loadTexts("ru")` loads them as one chunk. */
import type { WorldTexts } from "../../model";
import { countingToFourRu } from "./counting-to-four.ru";
import { halfNotesRu } from "./half-notes.ru";
import { odeToJoyRu } from "./ode-to-joy.ru";
import { quarterNotesRu } from "./quarter-notes.ru";
import { restsRu } from "./rests.ru";
import { tempoAndTheMetronomeRu } from "./tempo-and-the-metronome.ru";
import { theBeatRu } from "./the-beat.ru";
import { threeFourTimeRu } from "./three-four-time.ru";
import { wholeNotesRu } from "./whole-notes.ru";

export const texts: WorldTexts = {
  "counting-to-four": countingToFourRu,
  "half-notes": halfNotesRu,
  "ode-to-joy": odeToJoyRu,
  "quarter-notes": quarterNotesRu,
  rests: restsRu,
  "tempo-and-the-metronome": tempoAndTheMetronomeRu,
  "the-beat": theBeatRu,
  "three-four-time": threeFourTimeRu,
  "whole-notes": wholeNotesRu,
};
