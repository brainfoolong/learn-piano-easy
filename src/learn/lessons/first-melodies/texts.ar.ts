/** The Arabic texts of *First melodies*' lessons, by lesson id. `World.loadTexts("ar")` loads them as one chunk. */
import type { WorldTexts } from "../../model";
import { handsTakeTurnsAr } from "./hands-take-turns.ar";
import { leftHandCPositionAr } from "./left-hand-c-position.ar";
import { maryAr } from "./mary-had-a-little-lamb.ar";
import { maryFirstPhraseAr } from "./mary-first-phrase.ar";
import { repeatedNotesAr } from "./repeated-notes.ar";
import { rightHandCPositionAr } from "./right-hand-c-position.ar";
import { skipsAr } from "./skips.ar";
import { stepsAr } from "./steps.ar";
import { twinkleFirstPhraseAr } from "./twinkle-first-phrase.ar";

export const texts: WorldTexts = {
  "hands-take-turns": handsTakeTurnsAr,
  "left-hand-c-position": leftHandCPositionAr,
  "mary-first-phrase": maryFirstPhraseAr,
  "mary-had-a-little-lamb": maryAr,
  "repeated-notes": repeatedNotesAr,
  "right-hand-c-position": rightHandCPositionAr,
  skips: skipsAr,
  steps: stepsAr,
  "twinkle-first-phrase": twinkleFirstPhraseAr,
};
