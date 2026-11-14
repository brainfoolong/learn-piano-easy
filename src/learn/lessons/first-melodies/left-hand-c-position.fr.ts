/** *Left hand in C position* in French. */
import type { Translation } from "../../../i18n/translation";
import type { LeftHandCPositionTexts } from "./left-hand-c-position.en";

export const leftHandCPositionFr: Translation<LeftHandCPositionTexts> = {
  title: "Main gauche en position de do",
  steps: {
    "left-hand-demo": {
      text: "Écoute cinq touches sous le do central, en montant puis en redescendant. Dans cette leçon, c’est la main gauche qui les joue.",
    },
    "place-left-hand": {
      text: "Trouve le do situé une octave sous le do central. Pose dessus l’auriculaire gauche, le doigt 5, puis un doigt sur chaque touche blanche à sa droite. Le pouce, le doigt 1, repose sur sol.",
    },
    "c-finger-quiz": {
      text: "La main gauche est en position de do. Quel doigt joue do ?",
      answers: ["Doigt 1, le pouce", "Doigt 3, le majeur", "Doigt 5, l’auriculaire"],
    },
    "find-left-thumb": {
      text: "Garde la main en place. Joue la touche sous le pouce gauche.",
    },
    "find-left-middle": {
      text: "Maintenant, joue la touche sous le doigt 3 de la main gauche.",
    },
    "up-and-down": {
      text: "Joue les cinq touches en montant puis en redescendant. Compte les doigts au fur et à mesure : 5, 4, 3, 2, 1, puis retour à 5.",
    },
    "left-steps": {
      text: "Maintenant, des pas avec la main gauche, en partant du pouce. Chaque note passe à la touche blanche voisine.",
    },
    "left-skips-repeats": {
      text: "Garde la main gauche en position de do. Joue des sauts et des notes répétées : do, mi mi, sol sol, mi, do. Joue-les avec les doigts 5, 3, 3, 1, 1, 3, 5.",
    },
    recap: {
      text: "Bravo. La main gauche a maintenant sa propre place sur les touches.",
      points: [
        "La main gauche repose sur do ré mi fa sol, une octave sous le do central.",
        "L’auriculaire, le doigt 5, joue do, et le pouce joue sol.",
        "Les numéros vont dans le sens inverse de ceux de la main droite.",
      ],
    },
  },
};
