/** The French texts of *First melodies*' lessons, by lesson id. `World.loadTexts("fr")` loads them as one chunk. */
import type { WorldTexts } from "../../model";
import { handsTakeTurnsFr } from "./hands-take-turns.fr";
import { leftHandCPositionFr } from "./left-hand-c-position.fr";
import { maryFr } from "./mary-had-a-little-lamb.fr";
import { maryFirstPhraseFr } from "./mary-first-phrase.fr";
import { repeatedNotesFr } from "./repeated-notes.fr";
import { rightHandCPositionFr } from "./right-hand-c-position.fr";
import { skipsFr } from "./skips.fr";
import { stepsFr } from "./steps.fr";
import { twinkleFirstPhraseFr } from "./twinkle-first-phrase.fr";

export const texts: WorldTexts = {
  "hands-take-turns": handsTakeTurnsFr,
  "left-hand-c-position": leftHandCPositionFr,
  "mary-first-phrase": maryFirstPhraseFr,
  "mary-had-a-little-lamb": maryFr,
  "repeated-notes": repeatedNotesFr,
  "right-hand-c-position": rightHandCPositionFr,
  skips: skipsFr,
  steps: stepsFr,
  "twinkle-first-phrase": twinkleFirstPhraseFr,
};
