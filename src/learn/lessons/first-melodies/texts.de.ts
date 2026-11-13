/** The German texts of *First melodies*' lessons, by lesson id. `World.loadTexts("de")` loads them as one chunk. */
import type { WorldTexts } from "../../model";
import { handsTakeTurnsDe } from "./hands-take-turns.de";
import { leftHandCPositionDe } from "./left-hand-c-position.de";
import { maryDe } from "./mary.de";
import { maryFirstPhraseDe } from "./mary-first-phrase.de";
import { repeatedNotesDe } from "./repeated-notes.de";
import { rightHandCPositionDe } from "./right-hand-c-position.de";
import { skipsDe } from "./skips.de";
import { stepsDe } from "./steps.de";
import { twinkleFirstPhraseDe } from "./twinkle-first-phrase.de";

export const texts: WorldTexts = {
  "hands-take-turns": handsTakeTurnsDe,
  "left-hand-c-position": leftHandCPositionDe,
  "mary-first-phrase": maryFirstPhraseDe,
  "mary-had-a-little-lamb": maryDe,
  "repeated-notes": repeatedNotesDe,
  "right-hand-c-position": rightHandCPositionDe,
  skips: skipsDe,
  steps: stepsDe,
  "twinkle-first-phrase": twinkleFirstPhraseDe,
};
