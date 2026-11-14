/** *The key hunt* in French. */
import type { Translation } from "../../../i18n/translation";
import type { KeyHuntTexts } from "./key-hunt.en";

export const keyHuntFr: Translation<KeyHuntTexts> = {
  title: "La chasse aux touches",
  steps: {
    ready: {
      text: "C’est parti pour la chasse aux touches ! Pour chaque touche, tu as huit secondes. Repère-toi grâce aux groupes de touches noires.",
    },
    "any-c": {
      text: "Trouve un do.",
    },
    "middle-c": {
      text: "Maintenant, trouve le do central, le do au milieu du piano.",
    },
    "any-f": {
      text: "Trouve un fa.",
    },
    "any-g": {
      text: "Trouve un sol.",
    },
    "any-d": {
      text: "Trouve un ré.",
    },
    "any-b": {
      text: "Trouve un si.",
    },
    "three-middle": {
      text: "Trouve la touche noire du milieu d’un groupe de trois.",
    },
    "any-e": {
      text: "Trouve un mi.",
    },
    "any-a": {
      text: "Trouve un la.",
    },
    "high-c": {
      text: "Dernière touche ! Trouve le do une octave au-dessus du do central.",
    },
    recap: {
      text: "Tu as terminé la chasse aux touches. Tu sais te repérer sur le piano.",
      points: [
        "Les touches noires te guident, en groupes de deux et de trois.",
        "Sept noms désignent les touches blanches, de do à si.",
        "Le même nom revient une octave plus haut.",
      ],
    },
  },
};
