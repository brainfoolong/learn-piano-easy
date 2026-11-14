/** The Russian texts of *First melodies*' lessons, by lesson id. `World.loadTexts("ru")` loads them as one chunk. */
import type { WorldTexts } from "../../model";
import { handsTakeTurnsRu } from "./hands-take-turns.ru";
import { leftHandCPositionRu } from "./left-hand-c-position.ru";
import { maryRu } from "./mary-had-a-little-lamb.ru";
import { maryFirstPhraseRu } from "./mary-first-phrase.ru";
import { repeatedNotesRu } from "./repeated-notes.ru";
import { rightHandCPositionRu } from "./right-hand-c-position.ru";
import { skipsRu } from "./skips.ru";
import { stepsRu } from "./steps.ru";
import { twinkleFirstPhraseRu } from "./twinkle-first-phrase.ru";

export const texts: WorldTexts = {
  "hands-take-turns": handsTakeTurnsRu,
  "left-hand-c-position": leftHandCPositionRu,
  "mary-first-phrase": maryFirstPhraseRu,
  "mary-had-a-little-lamb": maryRu,
  "repeated-notes": repeatedNotesRu,
  "right-hand-c-position": rightHandCPositionRu,
  skips: skipsRu,
  steps: stepsRu,
  "twinkle-first-phrase": twinkleFirstPhraseRu,
};
