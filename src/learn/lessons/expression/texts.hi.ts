/** The Hindi texts of *Expression*'s lessons, by lesson id. `World.loadTexts("hi")` loads them as one chunk. */
import type { WorldTexts } from "../../model";
import { crescendoAndDiminuendoHi } from "./crescendo-and-diminuendo.hi";
import { furEliseRareHi } from "./fur-elise.hi";
import { legatoHi } from "./legato.hi";
import { loudAndSoftHi } from "./loud-and-soft.hi";
import { phrasesHi } from "./phrases.hi";
import { playingWithFeelingHi } from "./playing-with-feeling.hi";
import { slowingDownHi } from "./slowing-down.hi";
import { staccatoHi } from "./staccato.hi";
import { theSustainPedalHi } from "./the-sustain-pedal.hi";

export const texts: WorldTexts = {
  "crescendo-and-diminuendo": crescendoAndDiminuendoHi,
  "fur-elise": furEliseRareHi,
  legato: legatoHi,
  "loud-and-soft": loudAndSoftHi,
  phrases: phrasesHi,
  "playing-with-feeling": playingWithFeelingHi,
  "slowing-down": slowingDownHi,
  staccato: staccatoHi,
  "the-sustain-pedal": theSustainPedalHi,
};
