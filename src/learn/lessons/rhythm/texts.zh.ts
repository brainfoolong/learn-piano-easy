/** The Chinese texts of *Rhythm*'s lessons, by lesson id. `World.loadTexts("zh")` loads them as one chunk. */
import type { WorldTexts } from "../../model";
import { countingToFourZh } from "./counting-to-four.zh";
import { halfNotesZh } from "./half-notes.zh";
import { odeToJoyZh } from "./ode-to-joy.zh";
import { quarterNotesZh } from "./quarter-notes.zh";
import { restsZh } from "./rests.zh";
import { tempoAndTheMetronomeZh } from "./tempo-and-the-metronome.zh";
import { theBeatZh } from "./the-beat.zh";
import { threeFourTimeZh } from "./three-four-time.zh";
import { wholeNotesZh } from "./whole-notes.zh";

export const texts: WorldTexts = {
  "counting-to-four": countingToFourZh,
  "half-notes": halfNotesZh,
  "ode-to-joy": odeToJoyZh,
  "quarter-notes": quarterNotesZh,
  rests: restsZh,
  "tempo-and-the-metronome": tempoAndTheMetronomeZh,
  "the-beat": theBeatZh,
  "three-four-time": threeFourTimeZh,
  "whole-notes": wholeNotesZh,
};
