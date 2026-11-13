/** The Portuguese texts of *First melodies*' lessons, by lesson id. `World.loadTexts("pt")` loads them as one chunk. */
import type { WorldTexts } from "../../model";
import { handsTakeTurnsPt } from "./hands-take-turns.pt";
import { leftHandCPositionPt } from "./left-hand-c-position.pt";
import { maryPt } from "./mary-had-a-little-lamb.pt";
import { maryFirstPhrasePt } from "./mary-first-phrase.pt";
import { repeatedNotesPt } from "./repeated-notes.pt";
import { rightHandCPositionPt } from "./right-hand-c-position.pt";
import { skipsPt } from "./skips.pt";
import { stepsPt } from "./steps.pt";
import { twinkleFirstPhrasePt } from "./twinkle-first-phrase.pt";

export const texts: WorldTexts = {
  "hands-take-turns": handsTakeTurnsPt,
  "left-hand-c-position": leftHandCPositionPt,
  "mary-first-phrase": maryFirstPhrasePt,
  "mary-had-a-little-lamb": maryPt,
  "repeated-notes": repeatedNotesPt,
  "right-hand-c-position": rightHandCPositionPt,
  skips: skipsPt,
  steps: stepsPt,
  "twinkle-first-phrase": twinkleFirstPhrasePt,
};
