/** The boss of *First melodies* in Portuguese. */
import type { Translation } from "../../../i18n/translation";
import type { MaryTexts } from "./mary-had-a-little-lamb.en";

export const maryPt: Translation<MaryTexts> = {
  title: "Desafio final: Mary Had a Little Lamb",
  steps: {
    intro: {
      text: "Este mundo termina com uma música inteira. Você toca no player, e ele espera cada uma das suas notas.",
    },
    song: {
      text: "Toque os oito compassos de Mary Had a Little Lamb com a mão direita.",
    },
  },
};
