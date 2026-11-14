/** *Whole notes* in French. */
import type { Translation } from "../../../i18n/translation";
import type { WholeNotesTexts } from "./whole-notes.en";

export const wholeNotesFr: Translation<WholeNotesTexts> = {
  title: "Les rondes",
  steps: {
    "halves-then-whole-demo": {
      text: "Regarde et écoute. D’abord deux blanches. Ensuite, une seule note dure aussi longtemps que les deux réunies.",
    },
    "what-a-whole-note-is": {
      text: "Une ronde dure quatre temps. Tu la joues sur le premier temps et tu la tiens pendant les trois autres. Compte « 1, 2, 3, 4 » sur chaque ronde.",
    },
    "whole-beats-quiz": {
      text: "Combien de temps dure une ronde ?",
      answers: ["Deux temps", "Trois temps", "Quatre temps"],
    },
    "four-beats-three-ways-demo": {
      text: "Écoute quatre temps remplis de trois façons. D’abord une ronde, puis deux blanches, puis quatre noires. Chaque groupe a la même durée.",
    },
    "same-as-whole-quiz": {
      text: "Qu’est-ce qui dure aussi longtemps qu’une ronde ?",
      answers: ["Une blanche", "Deux blanches", "Deux noires"],
    },
    "quarters-in-whole-quiz": {
      text: "Combien de noires durent aussi longtemps qu’une ronde ?",
      answers: ["Deux", "Quatre", "Huit"],
    },
    "play-and-hold": {
      text: "Pose la main droite en position de do. Joue do, mi et sol, et garde chaque touche enfoncée pendant que tu comptes « 1, 2, 3, 4 ». L’étape attend chaque note, alors rien ne presse.",
    },
    "count-to-four": {
      text: "Appuie sur une touche au choix à chaque clic. Compte « 1, 2, 3, 4 » en même temps, deux fois de suite. Chaque « 1, 2, 3, 4 » dure une ronde.",
    },
    recap: {
      text: "Bravo. Tu connais maintenant la ronde.",
      points: ["Une ronde dure quatre temps.", "Tu la joues, puis tu la tiens pendant trois temps de plus.", "Une ronde dure autant que deux blanches ou quatre noires."],
    },
  },
};
