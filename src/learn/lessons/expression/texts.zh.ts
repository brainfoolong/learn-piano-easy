/** The Chinese texts of *Expression*'s lessons, by lesson id. `World.loadTexts("zh")` loads them as one chunk. */
import type { WorldTexts } from "../../model";
import { crescendoAndDiminuendoZh } from "./crescendo-and-diminuendo.zh";
import { furEliseRareZh } from "./fur-elise.zh";
import { legatoZh } from "./legato.zh";
import { loudAndSoftZh } from "./loud-and-soft.zh";
import { phrasesZh } from "./phrases.zh";
import { playingWithFeelingZh } from "./playing-with-feeling.zh";
import { slowingDownZh } from "./slowing-down.zh";
import { staccatoZh } from "./staccato.zh";
import { theSustainPedalZh } from "./the-sustain-pedal.zh";

export const texts: WorldTexts = {
  "crescendo-and-diminuendo": crescendoAndDiminuendoZh,
  "fur-elise": furEliseRareZh,
  legato: legatoZh,
  "loud-and-soft": loudAndSoftZh,
  phrases: phrasesZh,
  "playing-with-feeling": playingWithFeelingZh,
  "slowing-down": slowingDownZh,
  staccato: staccatoZh,
  "the-sustain-pedal": theSustainPedalZh,
};
