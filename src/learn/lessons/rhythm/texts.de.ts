/** The German texts of *Rhythm*'s lessons, by lesson id. `World.loadTexts("de")` loads them as one chunk. */
import type { WorldTexts } from "../../model";
import { countingToFourDe } from "./counting-to-four.de";
import { halfNotesDe } from "./half-notes.de";
import { odeToJoyDe } from "./ode-to-joy.de";
import { quarterNotesDe } from "./quarter-notes.de";
import { restsDe } from "./rests.de";
import { tempoAndTheMetronomeDe } from "./tempo-and-the-metronome.de";
import { theBeatDe } from "./the-beat.de";
import { threeFourTimeDe } from "./three-four-time.de";
import { wholeNotesDe } from "./whole-notes.de";

export const texts: WorldTexts = {
  "counting-to-four": countingToFourDe,
  "half-notes": halfNotesDe,
  "ode-to-joy": odeToJoyDe,
  "quarter-notes": quarterNotesDe,
  rests: restsDe,
  "tempo-and-the-metronome": tempoAndTheMetronomeDe,
  "the-beat": theBeatDe,
  "three-four-time": threeFourTimeDe,
  "whole-notes": wholeNotesDe,
};
