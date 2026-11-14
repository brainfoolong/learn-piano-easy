/** The lessons of *First melodies*, in order, its boss and its skip test's picks. The world loads them as one chunk. */
import type { WorldLessons } from "../../model";
import { handsTakeTurns } from "./hands-take-turns";
import { leftHandCPosition } from "./left-hand-c-position";
import { mary } from "./mary-had-a-little-lamb";
import { maryFirstPhrase } from "./mary-first-phrase";
import { repeatedNotes } from "./repeated-notes";
import { rightHandCPosition } from "./right-hand-c-position";
import { skips } from "./skips";
import { firstMelodiesSkipPicks } from "./skip-test";
import { steps } from "./steps";
import { twinkleFirstPhrase } from "./twinkle-first-phrase";

export const firstMelodies: WorldLessons = {
  lessons: [rightHandCPosition, steps, skips, repeatedNotes, leftHandCPosition, handsTakeTurns, maryFirstPhrase, twinkleFirstPhrase],
  boss: mary,
  translations: {
    de: () => import("./texts.de").then((module) => module.texts),
    es: () => import("./texts.es").then((module) => module.texts),
    zh: () => import("./texts.zh").then((module) => module.texts),
    hi: () => import("./texts.hi").then((module) => module.texts),
    ar: () => import("./texts.ar").then((module) => module.texts),
    pt: () => import("./texts.pt").then((module) => module.texts),
    id: () => import("./texts.id").then((module) => module.texts),
    bn: () => import("./texts.bn").then((module) => module.texts),
  },
  skipPicks: firstMelodiesSkipPicks,
};
