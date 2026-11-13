/** The Indonesian texts of *Expression*' lessons, by lesson id. `World.loadTexts("id")` loads them as one chunk. */
import type { WorldTexts } from "../../model";
import { crescendoAndDiminuendoId } from "./crescendo-and-diminuendo.id";
import { furEliseRareId } from "./fur-elise.id";
import { legatoId } from "./legato.id";
import { loudAndSoftId } from "./loud-and-soft.id";
import { phrasesId } from "./phrases.id";
import { playingWithFeelingId } from "./playing-with-feeling.id";
import { slowingDownId } from "./slowing-down.id";
import { staccatoId } from "./staccato.id";
import { theSustainPedalId } from "./the-sustain-pedal.id";

export const texts: WorldTexts = {
  "crescendo-and-diminuendo": crescendoAndDiminuendoId,
  "fur-elise": furEliseRareId,
  legato: legatoId,
  "loud-and-soft": loudAndSoftId,
  phrases: phrasesId,
  "playing-with-feeling": playingWithFeelingId,
  "slowing-down": slowingDownId,
  staccato: staccatoId,
  "the-sustain-pedal": theSustainPedalId,
};
