/** The lessons of *Expression*, in order, its boss and its skip test's picks. The world loads them as one chunk. */
import type { WorldLessons } from "../../model";
import { crescendoAndDiminuendo } from "./crescendo-and-diminuendo";
import { furEliseRare } from "./fur-elise";
import { legato } from "./legato";
import { loudAndSoft } from "./loud-and-soft";
import { phrases } from "./phrases";
import { playingWithFeeling } from "./playing-with-feeling";
import { expressionSkipPicks } from "./skip-test";
import { slowingDown } from "./slowing-down";
import { staccato } from "./staccato";
import { theSustainPedal } from "./the-sustain-pedal";

export const expression: WorldLessons = {
  lessons: [loudAndSoft, crescendoAndDiminuendo, legato, staccato, phrases, theSustainPedal, slowingDown, playingWithFeeling],
  boss: furEliseRare,
  translations: {
    de: () => import("./texts.de").then((module) => module.texts),
    es: () => import("./texts.es").then((module) => module.texts),
  },
  skipPicks: expressionSkipPicks,
};
