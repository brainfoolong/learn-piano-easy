/** *Mary's first phrase* in French. */
import type { Translation } from "../../../i18n/translation";
import type { MaryFirstPhraseTexts } from "./mary-first-phrase.en";

export const maryFirstPhraseFr: Translation<MaryFirstPhraseTexts> = {
  title: "La première phrase de Mary",
  steps: {
    "phrase-demo": {
      text: "Écoute la première moitié de Mary Had a Little Lamb. Elle est faite de pas, de notes répétées et d’un saut : tu connais déjà tout cela.",
    },
    "first-note-quiz": {
      text: "Sur quelle note la mélodie commence-t-elle ?",
      answers: ["Do", "Mi", "Sol"],
    },
    "the-fingers": {
      text: "Garde la main droite en position de do, le pouce sur le do central. La mélodie utilise quatre doigts : 1 sur do, 2 sur ré, 3 sur mi et 5 sur sol.",
    },
    "g-finger-quiz": {
      text: "Quel doigt joue sol ?",
      answers: ["Doigt 2", "Doigt 3", "Doigt 5"],
    },
    "bars-one-two": {
      text: "Joue le début : mi, ré, do, ré, puis mi trois fois. Joue-les avec les doigts 3, 2, 1, 2, puis 3, 3, 3.",
    },
    "bars-three-four": {
      text: "Maintenant, la partie suivante : ré trois fois, puis mi, puis sol deux fois. Joue-les avec les doigts 2, 2, 2, puis 3, 5, 5.",
    },
    "whole-phrase": {
      text: "Maintenant, joue toute la phrase sans t’arrêter : mi ré do ré mi mi mi, ré ré ré, mi sol sol.",
    },
    recap: {
      text: "Bravo. Tu as joué la première moitié d’un vrai morceau.",
      points: [
        "Des pas, des notes répétées et un saut forment cette mélodie.",
        "On apprend une mélodie par petits bouts, puis on les assemble.",
        "Les numéros de doigts indiquent à la main où aller.",
      ],
    },
  },
};
