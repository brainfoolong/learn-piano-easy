/** The Hindi texts of *First melodies*' lessons, by lesson id. `World.loadTexts("hi")` loads them as one chunk. */
import type { WorldTexts } from "../../model";
import { handsTakeTurnsHi } from "./hands-take-turns.hi";
import { leftHandCPositionHi } from "./left-hand-c-position.hi";
import { maryHi } from "./mary-had-a-little-lamb.hi";
import { maryFirstPhraseHi } from "./mary-first-phrase.hi";
import { repeatedNotesHi } from "./repeated-notes.hi";
import { rightHandCPositionHi } from "./right-hand-c-position.hi";
import { skipsHi } from "./skips.hi";
import { stepsHi } from "./steps.hi";
import { twinkleFirstPhraseHi } from "./twinkle-first-phrase.hi";

export const texts: WorldTexts = {
  "hands-take-turns": handsTakeTurnsHi,
  "left-hand-c-position": leftHandCPositionHi,
  "mary-first-phrase": maryFirstPhraseHi,
  "mary-had-a-little-lamb": maryHi,
  "repeated-notes": repeatedNotesHi,
  "right-hand-c-position": rightHandCPositionHi,
  skips: skipsHi,
  steps: stepsHi,
  "twinkle-first-phrase": twinkleFirstPhraseHi,
};
