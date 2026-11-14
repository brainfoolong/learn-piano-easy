/** *Repeated notes* in French. */
import type { Translation } from "../../../i18n/translation";
import type { RepeatedNotesTexts } from "./repeated-notes.en";

export const repeatedNotesFr: Translation<RepeatedNotesTexts> = {
  title: "Les notes répétées",
  steps: {
    "repeat-demo": {
      text: "Regarde et écoute. Certaines notes se répètent plusieurs fois, et la main ne bouge pas.",
    },
    "what-a-repeat-is": {
      text: "Une note peut se répéter. Le doigt reste sur sa touche et la rejoue. Laisse la touche remonter entre les deux notes.",
    },
    "same-or-not": {
      text: "Tu entends chaque fois deux notes. Par rapport à la première, la deuxième est-elle plus aiguë, plus grave ou pareille ?",
    },
    "repeat-e-d": {
      text: "Pose la main droite en position de do. Joue mi trois fois avec le doigt 3, puis ré trois fois avec le doigt 2.",
    },
    "repeat-after-skip": {
      text: "Maintenant, un saut puis une note répétée. Joue mi avec le doigt 3, puis sol deux fois avec le doigt 5.",
    },
    "how-many-keys-quiz": {
      text: "Tu joues do, do, do. Combien de touches joues-tu ?",
      answers: ["Une touche, trois fois", "Trois touches différentes"],
    },
    "mixed-phrase": {
      text: "Cette mélodie a des pas, des sauts et des notes répétées. Garde la main en position de do et suis la touche marquée.",
    },
    recap: {
      text: "Bravo. Tu sais maintenant jouer des notes répétées.",
      points: ["Une note répétée rejoue la même touche.", "Le doigt reste sur sa touche et la laisse remonter.", "Une mélodie peut mélanger pas, sauts et notes répétées."],
    },
  },
};
