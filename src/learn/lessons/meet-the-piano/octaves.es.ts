/** *Octaves* in Spanish. */
import type { Translation } from "../../../i18n/translation";
import type { OctavesTexts } from "./octaves.en";

export const octavesEs: Translation<OctavesTexts> = {
  title: "Las octavas",
  steps: {
    "three-cs": {
      text: "Escucha tres teclas do, de grave a agudo. Mira dónde está cada una en el piano.",
    },
    "same-letter": {
      text: "Cuenta las teclas blancas hacia arriba desde el do: do re mi fa sol la si, y otra vez do. El mismo nombre vuelve en la octava tecla blanca, contando la tecla de partida. Esa distancia se llama octava.",
    },
    "count-quiz": {
      text: "¿Cuántas teclas blancas hay de un do al siguiente do, contando los dos?",
      answers: ["Cinco", "Ocho", "Doce"],
    },
    "sound-alike": {
      text: "Dos notas a una octava de distancia suenan parecidas, como si fueran la misma nota. Una de ellas es más aguda que la otra.",
    },
    "octave-listen": {
      text: "Cada vez oyes dos notas. ¿La segunda es más aguda, más grave o igual que la primera?",
    },
    "e-above": {
      text: "El primer mi por encima del do central está dos teclas blancas a su derecha. Presiona el mi que está una octava más arriba de ese mi.",
    },
    "c-below": {
      text: "Ahora ve al otro lado. Presiona el do que está una octava por debajo del do central.",
    },
    "octave-pair": {
      text: "Toca tú una octava: el primer mi por encima del do central y luego el mi una octava más arriba. Escucha qué parecidos suenan.",
    },
    "octave-quiz": {
      text: "¿Qué es una octava?",
      answers: [
        "Dos teclas que están una junto a la otra",
        "Las dos teclas negras de un grupo",
        "La distancia de una nota a la siguiente nota del mismo nombre: ocho teclas blancas, contando las dos",
      ],
    },
    recap: {
      text: "Bien hecho. Ya sabes qué es una octava.",
      points: [
        "El mismo nombre vuelve en la octava tecla blanca, contando la primera.",
        "Esa distancia es una octava.",
        "Dos notas a una octava de distancia suenan parecidas, y una es más aguda.",
      ],
    },
  },
};
