/** The Indonesian texts of *First melodies*' lessons, by lesson id. `World.loadTexts("id")` loads them as one chunk. */
import type { WorldTexts } from "../../model";
import { handsTakeTurnsId } from "./hands-take-turns.id";
import { leftHandCPositionId } from "./left-hand-c-position.id";
import { maryId } from "./mary-had-a-little-lamb.id";
import { maryFirstPhraseId } from "./mary-first-phrase.id";
import { repeatedNotesId } from "./repeated-notes.id";
import { rightHandCPositionId } from "./right-hand-c-position.id";
import { skipsId } from "./skips.id";
import { stepsId } from "./steps.id";
import { twinkleFirstPhraseId } from "./twinkle-first-phrase.id";

export const texts: WorldTexts = {
  "hands-take-turns": handsTakeTurnsId,
  "left-hand-c-position": leftHandCPositionId,
  "mary-first-phrase": maryFirstPhraseId,
  "mary-had-a-little-lamb": maryId,
  "repeated-notes": repeatedNotesId,
  "right-hand-c-position": rightHandCPositionId,
  skips: skipsId,
  steps: stepsId,
  "twinkle-first-phrase": twinkleFirstPhraseId,
};
