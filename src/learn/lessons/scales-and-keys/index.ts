/** The lessons of *Scales and keys*, in order, its boss and its skip test's picks. The world loads them as one chunk. */
import type { WorldLessons } from "../../model";
import { fMajor } from "./f-major";
import { fingerOverTheThumb } from "./finger-over-the-thumb";
import { flats } from "./flats";
import { gMajor } from "./g-major";
import { halfAndWholeSteps } from "./half-and-whole-steps";
import { jingleBells } from "./jingle-bells";
import { keySignatures } from "./key-signatures";
import { sharps } from "./sharps";
import { scalesAndKeysSkipPicks } from "./skip-test";
import { theCMajorScale } from "./the-c-major-scale";

export const scalesAndKeys: WorldLessons = {
  lessons: [halfAndWholeSteps, sharps, flats, theCMajorScale, fingerOverTheThumb, gMajor, fMajor, keySignatures],
  boss: jingleBells,
  translations: {
    de: () => import("./texts.de").then((module) => module.texts),
    es: () => import("./texts.es").then((module) => module.texts),
    zh: () => import("./texts.zh").then((module) => module.texts),
    hi: () => import("./texts.hi").then((module) => module.texts),
    ar: () => import("./texts.ar").then((module) => module.texts),
    pt: () => import("./texts.pt").then((module) => module.texts),
  },
  skipPicks: scalesAndKeysSkipPicks,
};
