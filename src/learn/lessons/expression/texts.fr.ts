/** The French texts of *Expression*' lessons, by lesson id. `World.loadTexts("fr")` loads them as one chunk. */
import type { WorldTexts } from "../../model";
import { crescendoAndDiminuendoFr } from "./crescendo-and-diminuendo.fr";
import { furEliseRareFr } from "./fur-elise.fr";
import { legatoFr } from "./legato.fr";
import { loudAndSoftFr } from "./loud-and-soft.fr";
import { phrasesFr } from "./phrases.fr";
import { playingWithFeelingFr } from "./playing-with-feeling.fr";
import { slowingDownFr } from "./slowing-down.fr";
import { staccatoFr } from "./staccato.fr";
import { theSustainPedalFr } from "./the-sustain-pedal.fr";

export const texts: WorldTexts = {
  "crescendo-and-diminuendo": crescendoAndDiminuendoFr,
  "fur-elise": furEliseRareFr,
  legato: legatoFr,
  "loud-and-soft": loudAndSoftFr,
  phrases: phrasesFr,
  "playing-with-feeling": playingWithFeelingFr,
  "slowing-down": slowingDownFr,
  staccato: staccatoFr,
  "the-sustain-pedal": theSustainPedalFr,
};
