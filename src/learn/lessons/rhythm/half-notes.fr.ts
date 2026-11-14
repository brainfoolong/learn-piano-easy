/** *Half notes* in French. */
import type { Translation } from "../../../i18n/translation";
import type { HalfNotesTexts } from "./half-notes.en";

export const halfNotesFr: Translation<HalfNotesTexts> = {
  title: "Les blanches",
  steps: {
    "quarters-then-halves-demo": {
      text: "Regarde et écoute. D’abord quatre notes courtes, une sur chaque temps. Ensuite, chaque note dure deux fois plus longtemps.",
    },
    "what-a-half-note-is": {
      text: "Une blanche dure deux temps. Tu la joues sur le premier temps et tu la tiens jusqu’à la fin du deuxième. Compte « 1, 2 » sur chaque blanche.",
    },
    "half-beats-quiz": {
      text: "Combien de temps dure une blanche ?",
      answers: ["Un temps", "Deux temps", "Quatre temps"],
    },
    "play-and-hold": {
      text: "Pose la main droite en position de do. Joue do, ré, mi, ré, do, et garde chaque touche enfoncée pendant que tu comptes « 1, 2 ». L’étape attend chaque note, alors rien ne presse.",
    },
    "count-one-two": {
      text: "Appuie sur une touche au choix à chaque clic. Compte « 1, 2, 1, 2 » en même temps. Chaque « 1, 2 » dure une blanche.",
    },
    "which-is-longer-quiz": {
      text: "Quelle note dure le plus longtemps ?",
      answers: ["Une noire", "Une blanche"],
    },
    "halves-in-four-quiz": {
      text: "Combien de blanches remplissent quatre temps ?",
      answers: ["Une", "Deux", "Quatre"],
    },
    recap: {
      text: "Bravo. Tu connais maintenant la blanche.",
      points: ["Une blanche dure deux temps.", "Tu la joues, puis tu la tiens jusqu’à la fin du temps suivant.", "Deux blanches remplissent quatre temps."],
    },
  },
};
