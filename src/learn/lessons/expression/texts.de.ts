/** The German texts of *Expression*'s lessons, by lesson id. `World.loadTexts("de")` loads them as one chunk. */
import type { WorldTexts } from "../../model";
import { crescendoAndDiminuendoDe } from "./crescendo-and-diminuendo.de";
import { furEliseRareDe } from "./fur-elise.de";
import { legatoDe } from "./legato.de";
import { loudAndSoftDe } from "./loud-and-soft.de";
import { phrasesDe } from "./phrases.de";
import { playingWithFeelingDe } from "./playing-with-feeling.de";
import { slowingDownDe } from "./slowing-down.de";
import { staccatoDe } from "./staccato.de";
import { theSustainPedalDe } from "./the-sustain-pedal.de";

export const texts: WorldTexts = {
  "crescendo-and-diminuendo": crescendoAndDiminuendoDe,
  "fur-elise": furEliseRareDe,
  legato: legatoDe,
  "loud-and-soft": loudAndSoftDe,
  phrases: phrasesDe,
  "playing-with-feeling": playingWithFeelingDe,
  "slowing-down": slowingDownDe,
  staccato: staccatoDe,
  "the-sustain-pedal": theSustainPedalDe,
};
