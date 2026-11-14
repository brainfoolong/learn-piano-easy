/** *C, F and G* in French. */
import type { Translation } from "../../../i18n/translation";
import type { CFAndGTexts } from "./c-f-and-g.en";

export const cFAndGFr: Translation<CFAndGTexts> = {
  title: "Do, fa et sol",
  steps: {
    "progression-demo": {
      text: "Écoute quatre accords : do, fa, sol, puis retour à do. On dirait un petit morceau qui vient se poser sur do.",
    },
    "three-main-chords": {
      text: "Construis un accord de trois notes sur les premier, quatrième et cinquième degrés de la gamme de do majeur. Tu obtiens do, fa et sol, les trois accords principaux de do majeur.",
    },
    "fourth-step": {
      text: "Monte la gamme de do majeur à partir de do. Quelle note est son quatrième degré ?",
      answers: ["Mi", "Sol", "Ré", "Fa"],
    },
    "the-f-triad": {
      text: "L’accord de fa majeur, c’est fa, la et do. C’est un accord parfait, comme do majeur, donc les doigts gardent la même position.",
    },
    "c-and-f": {
      text: "À toi. Joue do majeur depuis le do central avec les doigts 1, 3 et 5. Puis place le pouce sur le fa au-dessus du do central pour l’accord de fa majeur, et reviens à do.",
    },
    "g-triad-notes": {
      text: "L’accord de sol majeur repose sur le cinquième degré de la gamme. Quelles notes le forment ?",
      answers: ["Sol, si bémol et ré", "Sol, si et ré", "Sol, la et si", "Fa, la et do"],
    },
    "c-and-g": {
      text: "Joue do majeur depuis le do central, puis place le pouce sur le sol au-dessus du do central pour l’accord de sol majeur, et reviens à do.",
    },
    "move-the-hand": {
      text: "Lève toute la main d’un accord au suivant. Garde les doigts 1, 3 et 5 dans leur position, et laisse le pouce trouver la nouvelle fondamentale.",
    },
    "c-f-g-c": {
      text: "Joue quatre accords à la main droite : do-mi-sol depuis le do central, puis fa-la-do, sol-si-ré et do-mi-sol. Rien ne presse entre les accords.",
    },
    "left-hand-chords": {
      text: "La main gauche joue les mêmes accords plus bas, avec les doigts 5, 3 et 1. Le doigt 5 se pose sur la fondamentale.",
    },
    "left-c-f-g-c": {
      text: "Pose le doigt 5 de la main gauche sur le do sous le do central. Joue do, fa, sol et do, en amenant le doigt 5 sur chaque fondamentale.",
    },
    "tune-demo": {
      text: "Voici une courte mélodie sur les trois accords. La main gauche joue chaque accord, et la main droite joue deux notes au-dessus.",
    },
    tune: {
      text: "Pose le pouce droit sur le sol au-dessus du do central. Joue chaque accord avec la première note de sa mesure, puis la deuxième note seule. La dernière mesure n’a pas de deuxième note.",
    },
    recap: {
      text: "Bravo. Tu sais maintenant jouer les trois accords principaux de do majeur.",
      points: [
        "Do, fa et sol sont les accords de trois notes sur les premier, quatrième et cinquième degrés de do majeur.",
        "L’accord de fa majeur, c’est fa, la et do, et l’accord de sol majeur, c’est sol, si et ré.",
        "Pour passer d’un accord à l’autre, lève toute la main et garde sa position.",
        "Passer de sol à do sonne comme une fin.",
      ],
    },
  },
};
