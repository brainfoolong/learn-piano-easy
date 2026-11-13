/** The Portuguese texts of *Expression*' lessons, by lesson id. */
import type { WorldTexts } from "../../model";
import { crescendoAndDiminuendoPt } from "./crescendo-and-diminuendo.pt";
import { furEliseRarePt } from "./fur-elise.pt";
import { legatoPt } from "./legato.pt";
import { loudAndSoftPt } from "./loud-and-soft.pt";
import { phrasesPt } from "./phrases.pt";
import { playingWithFeelingPt } from "./playing-with-feeling.pt";
import { slowingDownPt } from "./slowing-down.pt";
import { staccatoPt } from "./staccato.pt";
import { theSustainPedalPt } from "./the-sustain-pedal.pt";

export const texts: WorldTexts = {
  "crescendo-and-diminuendo": crescendoAndDiminuendoPt,
  "fur-elise": furEliseRarePt,
  legato: legatoPt,
  "loud-and-soft": loudAndSoftPt,
  phrases: phrasesPt,
  "playing-with-feeling": playingWithFeelingPt,
  "slowing-down": slowingDownPt,
  staccato: staccatoPt,
  "the-sustain-pedal": theSustainPedalPt,
};
