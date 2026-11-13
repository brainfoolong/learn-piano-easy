/** The boss of *First melodies* in Spanish. */
import type { Translation } from "../../../i18n/translation";
import type { MaryTexts } from "./mary-had-a-little-lamb.en";

export const maryEs: Translation<MaryTexts> = {
  title: "Jefe final: Mary Had a Little Lamb",
  steps: {
    intro: {
      text: "Este mundo termina con una canción entera. La tocas en el reproductor, y este espera cada una de tus notas.",
    },
    song: {
      text: "Toca los ocho compases de Mary Had a Little Lamb con la mano derecha.",
    },
  },
};
