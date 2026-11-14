/** The French texts of *Rhythm*'s lessons, by lesson id. `World.loadTexts("fr")` loads them as one chunk. */
import type { WorldTexts } from "../../model";
import { countingToFourFr } from "./counting-to-four.fr";
import { halfNotesFr } from "./half-notes.fr";
import { odeToJoyFr } from "./ode-to-joy.fr";
import { quarterNotesFr } from "./quarter-notes.fr";
import { restsFr } from "./rests.fr";
import { tempoAndTheMetronomeFr } from "./tempo-and-the-metronome.fr";
import { theBeatFr } from "./the-beat.fr";
import { threeFourTimeFr } from "./three-four-time.fr";
import { wholeNotesFr } from "./whole-notes.fr";

export const texts: WorldTexts = {
  "counting-to-four": countingToFourFr,
  "half-notes": halfNotesFr,
  "ode-to-joy": odeToJoyFr,
  "quarter-notes": quarterNotesFr,
  rests: restsFr,
  "tempo-and-the-metronome": tempoAndTheMetronomeFr,
  "the-beat": theBeatFr,
  "three-four-time": threeFourTimeFr,
  "whole-notes": wholeNotesFr,
};
