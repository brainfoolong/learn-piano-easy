/** *Black key groups* in French. */
import type { Translation } from "../../../i18n/translation";
import type { BlackKeyGroupsTexts } from "./black-key-groups.en";

export const blackKeyGroupsFr: Translation<BlackKeyGroupsTexts> = {
  title: "Les groupes de touches noires",
  steps: {
    "see-the-groups": {
      text: "Regarde les touches noires. Elles forment des groupes : d’abord un groupe de deux, puis un groupe de trois. Cette alternance se répète sur tout le piano.",
    },
    "smaller-group-quiz": {
      text: "Combien de touches noires compte le petit groupe ?",
      answers: ["Une", "Deux", "Trois", "Quatre"],
    },
    "two-left": {
      text: "Trouve un groupe de deux touches noires. Joue sa touche de gauche.",
    },
    "two-right": {
      text: "Maintenant, joue la touche de droite d’un groupe de deux touches noires.",
    },
    "group-of-three": {
      text: "À côté de chaque groupe de deux, il y a un groupe de trois touches noires. Il est un peu plus large, alors tu le repères vite.",
    },
    "three-left": {
      text: "Trouve un groupe de trois touches noires. Joue sa touche de gauche.",
    },
    "three-middle": {
      text: "Maintenant, joue la touche du milieu d’un groupe de trois touches noires.",
    },
    "all-five": {
      text: "Joue toutes les touches noires d’un groupe de deux, puis celles du groupe de trois juste à côté, de gauche à droite.",
    },
    "find-your-way": {
      text: "Les touches blanches se ressemblent toutes. Qu’est-ce qui t’aide à te repérer sur le piano ?",
      answers: ["La couleur des touches blanches", "Les groupes de deux et de trois touches noires", "La taille de chaque touche"],
    },
    "three-right": {
      text: "Une dernière recherche : joue la touche de droite d’un groupe de trois touches noires.",
    },
    recap: {
      text: "Bravo. Tu sais te repérer grâce aux touches noires.",
      points: [
        "Les touches noires forment des groupes de deux et de trois.",
        "Les deux groupes alternent sur tout le piano.",
        "Les groupes te montrent où tu es sur le clavier.",
      ],
    },
  },
};
