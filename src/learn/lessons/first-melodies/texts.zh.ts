/** The Chinese texts of *First melodies*' lessons, by lesson id. `World.loadTexts("zh")` loads them as one chunk. */
import type { WorldTexts } from "../../model";
import { handsTakeTurnsZh } from "./hands-take-turns.zh";
import { leftHandCPositionZh } from "./left-hand-c-position.zh";
import { maryZh } from "./mary-had-a-little-lamb.zh";
import { maryFirstPhraseZh } from "./mary-first-phrase.zh";
import { repeatedNotesZh } from "./repeated-notes.zh";
import { rightHandCPositionZh } from "./right-hand-c-position.zh";
import { skipsZh } from "./skips.zh";
import { stepsZh } from "./steps.zh";
import { twinkleFirstPhraseZh } from "./twinkle-first-phrase.zh";

export const texts: WorldTexts = {
  "hands-take-turns": handsTakeTurnsZh,
  "left-hand-c-position": leftHandCPositionZh,
  "mary-first-phrase": maryFirstPhraseZh,
  "mary-had-a-little-lamb": maryZh,
  "repeated-notes": repeatedNotesZh,
  "right-hand-c-position": rightHandCPositionZh,
  skips: skipsZh,
  steps: stepsZh,
  "twinkle-first-phrase": twinkleFirstPhraseZh,
};
