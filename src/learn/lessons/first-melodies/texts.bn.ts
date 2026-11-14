/** The Bengali texts of *First melodies*' lessons, by lesson id. `World.loadTexts("bn")` loads them as one chunk. */
import type { WorldTexts } from "../../model";
import { handsTakeTurnsBn } from "./hands-take-turns.bn";
import { leftHandCPositionBn } from "./left-hand-c-position.bn";
import { maryBn } from "./mary-had-a-little-lamb.bn";
import { maryFirstPhraseBn } from "./mary-first-phrase.bn";
import { repeatedNotesBn } from "./repeated-notes.bn";
import { rightHandCPositionBn } from "./right-hand-c-position.bn";
import { skipsBn } from "./skips.bn";
import { stepsBn } from "./steps.bn";
import { twinkleFirstPhraseBn } from "./twinkle-first-phrase.bn";

export const texts: WorldTexts = {
  "hands-take-turns": handsTakeTurnsBn,
  "left-hand-c-position": leftHandCPositionBn,
  "mary-first-phrase": maryFirstPhraseBn,
  "mary-had-a-little-lamb": maryBn,
  "repeated-notes": repeatedNotesBn,
  "right-hand-c-position": rightHandCPositionBn,
  skips: skipsBn,
  steps: stepsBn,
  "twinkle-first-phrase": twinkleFirstPhraseBn,
};
