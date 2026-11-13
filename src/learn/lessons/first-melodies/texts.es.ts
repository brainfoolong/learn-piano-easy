/** The Spanish texts of *First melodies*' lessons, by lesson id. `World.loadTexts("es")` loads them as one chunk. */
import type { WorldTexts } from "../../model";
import { handsTakeTurnsEs } from "./hands-take-turns.es";
import { leftHandCPositionEs } from "./left-hand-c-position.es";
import { maryEs } from "./mary-had-a-little-lamb.es";
import { maryFirstPhraseEs } from "./mary-first-phrase.es";
import { repeatedNotesEs } from "./repeated-notes.es";
import { rightHandCPositionEs } from "./right-hand-c-position.es";
import { skipsEs } from "./skips.es";
import { stepsEs } from "./steps.es";
import { twinkleFirstPhraseEs } from "./twinkle-first-phrase.es";

export const texts: WorldTexts = {
  "hands-take-turns": handsTakeTurnsEs,
  "left-hand-c-position": leftHandCPositionEs,
  "mary-first-phrase": maryFirstPhraseEs,
  "mary-had-a-little-lamb": maryEs,
  "repeated-notes": repeatedNotesEs,
  "right-hand-c-position": rightHandCPositionEs,
  skips: skipsEs,
  steps: stepsEs,
  "twinkle-first-phrase": twinkleFirstPhraseEs,
};
