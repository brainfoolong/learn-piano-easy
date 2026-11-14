/** *The white keys* in French. */
import type { Translation } from "../../../i18n/translation";
import type { TheWhiteKeysTexts } from "./the-white-keys.en";

export const theWhiteKeysFr: Translation<TheWhiteKeysTexts> = {
  title: "Les touches blanches",
  steps: {
    "c-to-c": {
      text: "Écoute et regarde. Le piano joue toutes les touches blanches, du do central jusqu’au do suivant.",
    },
    "seven-letters": {
      text: "Les touches blanches portent sept noms : do, ré, mi, fa, sol, la, si. Après si, les noms recommencent à do. Les touches noires te montrent où se trouve chaque note.",
    },
    "find-d": {
      text: "Le ré se trouve entre les deux touches noires d’un groupe de deux. Trouve un ré.",
    },
    "find-e": {
      text: "Le mi est la touche blanche juste à droite d’un groupe de deux touches noires. Trouve un mi.",
    },
    "find-f": {
      text: "Le fa est la touche blanche juste à gauche d’un groupe de trois touches noires. Trouve un fa.",
    },
    "find-g": {
      text: "Le sol se trouve entre la première et la deuxième touche noire d’un groupe de trois. Trouve un sol.",
    },
    "find-a": {
      text: "Le la se trouve entre la deuxième et la troisième touche noire d’un groupe de trois. Trouve un la.",
    },
    "find-b": {
      text: "Le si est la touche blanche juste à droite d’un groupe de trois touches noires. Trouve un si.",
    },
    "play-c-to-c": {
      text: "Maintenant, joue toutes les touches blanches, du do central jusqu’au do suivant. Dis le nom de chaque note en la jouant.",
    },
    "letters-quiz": {
      text: "Sur les touches blanches, quelle note vient après si ?",
      answers: ["La", "Do", "Ré"],
    },
    recap: {
      text: "Bravo. Tu connais le nom de chaque touche blanche.",
      points: [
        "Les touches blanches s’appellent do, ré, mi, fa, sol, la, si.",
        "Après si, les noms recommencent à do.",
        "Les groupes de deux et de trois touches noires te montrent où se trouve chaque note.",
      ],
    },
  },
};
