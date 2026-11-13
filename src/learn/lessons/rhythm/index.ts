/** The lessons of *Rhythm*, in order, its boss and its skip test's picks. The world loads them as one chunk. */
import type { WorldLessons } from "../../model";
import { countingToFour } from "./counting-to-four";
import { halfNotes } from "./half-notes";
import { odeToJoy } from "./ode-to-joy";
import { quarterNotes } from "./quarter-notes";
import { rests } from "./rests";
import { rhythmSkipPicks } from "./skip-test";
import { tempoAndTheMetronome } from "./tempo-and-the-metronome";
import { theBeat } from "./the-beat";
import { threeFourTime } from "./three-four-time";
import { wholeNotes } from "./whole-notes";

export const rhythm: WorldLessons = {
  lessons: [theBeat, quarterNotes, halfNotes, wholeNotes, rests, countingToFour, threeFourTime, tempoAndTheMetronome],
  boss: odeToJoy,
  translations: {
    de: () => import("./texts.de").then((module) => module.texts),
    es: () => import("./texts.es").then((module) => module.texts),
    zh: () => import("./texts.zh").then((module) => module.texts),
  },
  skipPicks: rhythmSkipPicks,
};
