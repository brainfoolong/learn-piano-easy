/** The Bengali texts of *Expression*' lessons, by lesson id. `World.loadTexts("bn")` loads them as one chunk. */
import type { WorldTexts } from "../../model";
import { crescendoAndDiminuendoBn } from "./crescendo-and-diminuendo.bn";
import { furEliseRareBn } from "./fur-elise.bn";
import { legatoBn } from "./legato.bn";
import { loudAndSoftBn } from "./loud-and-soft.bn";
import { phrasesBn } from "./phrases.bn";
import { playingWithFeelingBn } from "./playing-with-feeling.bn";
import { slowingDownBn } from "./slowing-down.bn";
import { staccatoBn } from "./staccato.bn";
import { theSustainPedalBn } from "./the-sustain-pedal.bn";

export const texts: WorldTexts = {
  "crescendo-and-diminuendo": crescendoAndDiminuendoBn,
  "fur-elise": furEliseRareBn,
  legato: legatoBn,
  "loud-and-soft": loudAndSoftBn,
  phrases: phrasesBn,
  "playing-with-feeling": playingWithFeelingBn,
  "slowing-down": slowingDownBn,
  staccato: staccatoBn,
  "the-sustain-pedal": theSustainPedalBn,
};
