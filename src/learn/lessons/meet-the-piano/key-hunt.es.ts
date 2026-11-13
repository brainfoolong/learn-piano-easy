/** *The key hunt* in Spanish. */
import type { Translation } from "../../../i18n/translation";
import type { KeyHuntTexts } from "./key-hunt.en";

export const keyHuntEs: Translation<KeyHuntTexts> = {
  title: "La caza de teclas",
  steps: {
    ready: {
      text: "¡Hora de la caza de teclas! Tienes ocho segundos para cada tecla. Oriéntate con los grupos de teclas negras.",
    },
    "any-c": { text: "Encuentra un do cualquiera." },
    "middle-c": { text: "Ahora encuentra el do central, el do en el centro del piano." },
    "any-f": { text: "Encuentra un fa cualquiera." },
    "any-g": { text: "Encuentra un sol cualquiera." },
    "any-d": { text: "Encuentra un re cualquiera." },
    "any-b": { text: "Encuentra un si cualquiera." },
    "three-middle": { text: "Encuentra la tecla negra del medio de un grupo de tres." },
    "any-e": { text: "Encuentra un mi cualquiera." },
    "any-a": { text: "Encuentra un la cualquiera." },
    "high-c": { text: "¡La última! Encuentra el do una octava por encima del do central." },
    recap: {
      text: "Terminaste la caza de teclas. Ya te orientas por todo el piano.",
      points: [
        "Las teclas negras te guían, en grupos de dos y de tres.",
        "Las teclas blancas tienen siete nombres, de do a si.",
        "El mismo nombre vuelve una octava más arriba.",
      ],
    },
  },
};
