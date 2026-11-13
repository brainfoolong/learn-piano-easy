/** The Hindi texts of *Rhythm*'s lessons, by lesson id. `World.loadTexts("hi")` loads them as one chunk. */
import type { WorldTexts } from "../../model";
import { countingToFourHi } from "./counting-to-four.hi";
import { halfNotesHi } from "./half-notes.hi";
import { odeToJoyHi } from "./ode-to-joy.hi";
import { quarterNotesHi } from "./quarter-notes.hi";
import { restsHi } from "./rests.hi";
import { tempoAndTheMetronomeHi } from "./tempo-and-the-metronome.hi";
import { theBeatHi } from "./the-beat.hi";
import { threeFourTimeHi } from "./three-four-time.hi";
import { wholeNotesHi } from "./whole-notes.hi";

export const texts: WorldTexts = {
  "counting-to-four": countingToFourHi,
  "half-notes": halfNotesHi,
  "ode-to-joy": odeToJoyHi,
  "quarter-notes": quarterNotesHi,
  rests: restsHi,
  "tempo-and-the-metronome": tempoAndTheMetronomeHi,
  "the-beat": theBeatHi,
  "three-four-time": threeFourTimeHi,
  "whole-notes": wholeNotesHi,
};
