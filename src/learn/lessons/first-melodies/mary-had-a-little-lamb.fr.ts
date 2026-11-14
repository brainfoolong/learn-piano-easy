/** The boss of *First melodies* in French. */
import type { Translation } from "../../../i18n/translation";
import type { MaryTexts } from "./mary-had-a-little-lamb.en";

export const maryFr: Translation<MaryTexts> = {
  title: "Épreuve finale : Mary Had a Little Lamb",
  steps: {
    intro: {
      text: "Ce monde se termine par un morceau entier. Tu le joues dans le lecteur, et il attend chacune de tes notes.",
    },
    song: {
      text: "Joue les huit mesures de Mary Had a Little Lamb à la main droite.",
    },
  },
};
