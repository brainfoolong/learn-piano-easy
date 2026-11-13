/** The Arabic texts of *Expression*'s lessons, by lesson id. `World.loadTexts("ar")` loads them as one chunk. */
import type { WorldTexts } from "../../model";
import { crescendoAndDiminuendoAr } from "./crescendo-and-diminuendo.ar";
import { furEliseRareAr } from "./fur-elise.ar";
import { legatoAr } from "./legato.ar";
import { loudAndSoftAr } from "./loud-and-soft.ar";
import { phrasesAr } from "./phrases.ar";
import { playingWithFeelingAr } from "./playing-with-feeling.ar";
import { slowingDownAr } from "./slowing-down.ar";
import { staccatoAr } from "./staccato.ar";
import { theSustainPedalAr } from "./the-sustain-pedal.ar";

export const texts: WorldTexts = {
  "crescendo-and-diminuendo": crescendoAndDiminuendoAr,
  "fur-elise": furEliseRareAr,
  legato: legatoAr,
  "loud-and-soft": loudAndSoftAr,
  phrases: phrasesAr,
  "playing-with-feeling": playingWithFeelingAr,
  "slowing-down": slowingDownAr,
  staccato: staccatoAr,
  "the-sustain-pedal": theSustainPedalAr,
};
