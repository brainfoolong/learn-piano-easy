/** *Find C* in French. */
import type { Translation } from "../../../i18n/translation";
import type { FindCTexts } from "./find-c.en";

export const findCFr: Translation<FindCTexts> = {
  title: "Trouver le do",
  steps: {
    "hear-cs": {
      text: "Écoute et regarde. Le piano joue quatre touches, du grave à l’aigu. Elles ont toutes le même nom : do.",
    },
    "c-rule": {
      text: "Cherche un groupe de deux touches noires. La touche blanche juste à sa gauche est un do. Chaque groupe de deux a un do à côté de lui.",
    },
    "find-any-c": {
      text: "Trouve un do n’importe où sur le piano. Cherche deux touches noires, puis joue la touche blanche à leur gauche.",
    },
    "middle-c": {
      text: "Le do près du milieu du piano a son propre nom : le do central. Beaucoup de morceaux commencent sur ce do, alors tu le rencontreras souvent.",
    },
    "find-middle-c": {
      text: "Maintenant, joue le do central, le do le plus proche du milieu du piano.",
    },
    "find-high-c": {
      text: "Trouve le do suivant, à droite du do central. Il sonne plus aigu.",
    },
    "find-low-c": {
      text: "Maintenant, trouve le do juste à gauche du do central. Il sonne plus grave.",
    },
    "cs-low-to-high": {
      text: "Joue quatre do, du grave à l’aigu, en partant du do juste sous le do central. À chaque fois, cherche le groupe de deux touches noires suivant, vers la droite.",
    },
    "c-quiz": {
      text: "Où se trouve le do ?",
      answers: [
        "Juste à droite d’un groupe de deux touches noires",
        "Juste à gauche d’un groupe de deux touches noires",
        "Juste à gauche d’un groupe de trois touches noires",
      ],
    },
    recap: {
      text: "Bravo. Tu sais trouver un do n’importe où sur le piano.",
      points: [
        "Le do est la touche blanche juste à gauche de chaque groupe de deux touches noires.",
        "On trouve des do partout sur le piano, du grave à l’aigu.",
        "Le do près du milieu s’appelle le do central.",
      ],
    },
  },
};
