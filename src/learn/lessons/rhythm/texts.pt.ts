/** The Portuguese texts of *Rhythm*'s lessons, by lesson id. `World.loadTexts("pt")` loads them as one chunk. */
import type { WorldTexts } from "../../model";
import { countingToFourPt } from "./counting-to-four.pt";
import { halfNotesPt } from "./half-notes.pt";
import { odeToJoyPt } from "./ode-to-joy.pt";
import { quarterNotesPt } from "./quarter-notes.pt";
import { restsPt } from "./rests.pt";
import { tempoAndTheMetronomePt } from "./tempo-and-the-metronome.pt";
import { theBeatPt } from "./the-beat.pt";
import { threeFourTimePt } from "./three-four-time.pt";
import { wholeNotesPt } from "./whole-notes.pt";

export const texts: WorldTexts = {
  "counting-to-four": countingToFourPt,
  "half-notes": halfNotesPt,
  "ode-to-joy": odeToJoyPt,
  "quarter-notes": quarterNotesPt,
  rests: restsPt,
  "tempo-and-the-metronome": tempoAndTheMetronomePt,
  "the-beat": theBeatPt,
  "three-four-time": threeFourTimePt,
  "whole-notes": wholeNotesPt,
};
