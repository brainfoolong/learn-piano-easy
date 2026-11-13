/** The Spanish texts of *Expression*' lessons, by lesson id. */
import type { WorldTexts } from "../../model";
import { crescendoAndDiminuendoEs } from "./crescendo-and-diminuendo.es";
import { furEliseRareEs } from "./fur-elise.es";
import { legatoEs } from "./legato.es";
import { loudAndSoftEs } from "./loud-and-soft.es";
import { phrasesEs } from "./phrases.es";
import { playingWithFeelingEs } from "./playing-with-feeling.es";
import { slowingDownEs } from "./slowing-down.es";
import { staccatoEs } from "./staccato.es";
import { theSustainPedalEs } from "./the-sustain-pedal.es";

export const texts: WorldTexts = {
  "crescendo-and-diminuendo": crescendoAndDiminuendoEs,
  "fur-elise": furEliseRareEs,
  legato: legatoEs,
  "loud-and-soft": loudAndSoftEs,
  phrases: phrasesEs,
  "playing-with-feeling": playingWithFeelingEs,
  "slowing-down": slowingDownEs,
  staccato: staccatoEs,
  "the-sustain-pedal": theSustainPedalEs,
};
