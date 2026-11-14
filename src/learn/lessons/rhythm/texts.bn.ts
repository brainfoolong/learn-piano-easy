/** The Bengali texts of *Rhythm*'s lessons, by lesson id. `World.loadTexts("bn")` loads them as one chunk. */
import type { WorldTexts } from "../../model";
import { countingToFourBn } from "./counting-to-four.bn";
import { halfNotesBn } from "./half-notes.bn";
import { odeToJoyBn } from "./ode-to-joy.bn";
import { quarterNotesBn } from "./quarter-notes.bn";
import { restsBn } from "./rests.bn";
import { tempoAndTheMetronomeBn } from "./tempo-and-the-metronome.bn";
import { theBeatBn } from "./the-beat.bn";
import { threeFourTimeBn } from "./three-four-time.bn";
import { wholeNotesBn } from "./whole-notes.bn";

export const texts: WorldTexts = {
  "counting-to-four": countingToFourBn,
  "half-notes": halfNotesBn,
  "ode-to-joy": odeToJoyBn,
  "quarter-notes": quarterNotesBn,
  rests: restsBn,
  "tempo-and-the-metronome": tempoAndTheMetronomeBn,
  "the-beat": theBeatBn,
  "three-four-time": threeFourTimeBn,
  "whole-notes": wholeNotesBn,
};
