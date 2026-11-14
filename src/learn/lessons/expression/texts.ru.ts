/** The Russian texts of *Expression*' lessons, by lesson id. `World.loadTexts("ru")` loads them as one chunk. */
import type { WorldTexts } from "../../model";
import { crescendoAndDiminuendoRu } from "./crescendo-and-diminuendo.ru";
import { furEliseRareRu } from "./fur-elise.ru";
import { legatoRu } from "./legato.ru";
import { loudAndSoftRu } from "./loud-and-soft.ru";
import { phrasesRu } from "./phrases.ru";
import { playingWithFeelingRu } from "./playing-with-feeling.ru";
import { slowingDownRu } from "./slowing-down.ru";
import { staccatoRu } from "./staccato.ru";
import { theSustainPedalRu } from "./the-sustain-pedal.ru";

export const texts: WorldTexts = {
  "crescendo-and-diminuendo": crescendoAndDiminuendoRu,
  "fur-elise": furEliseRareRu,
  legato: legatoRu,
  "loud-and-soft": loudAndSoftRu,
  phrases: phrasesRu,
  "playing-with-feeling": playingWithFeelingRu,
  "slowing-down": slowingDownRu,
  staccato: staccatoRu,
  "the-sustain-pedal": theSustainPedalRu,
};
