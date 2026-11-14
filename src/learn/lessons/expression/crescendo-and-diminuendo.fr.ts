/** *Crescendo and diminuendo* in French. */
import type { Translation } from "../../../i18n/translation";
import type { CrescendoAndDiminuendoTexts } from "./crescendo-and-diminuendo.en";

export const crescendoAndDiminuendoFr: Translation<CrescendoAndDiminuendoTexts> = {
  title: "Crescendo et diminuendo",
  steps: {
    "crescendo-demo": {
      text: "Écoute do, ré, mi, fa et sol. Chaque note sonne un peu plus fort que la précédente.",
    },
    "getting-louder": {
      text: "Jouer de plus en plus fort, peu à peu, c’est un crescendo. La partition l’indique par cresc., ou par un soufflet qui s’ouvre <, de plus en plus large à mesure que le son grandit.",
    },
    "what-cresc-asks": {
      text: "Tu vois cresc. sous la portée. Que te demande cette indication ?",
      answers: ["Jouer de plus en plus doux", "Jouer de plus en plus fort", "Jouer plus vite", "Jouer les notes plus haut"],
    },
    "play-crescendo": {
      text: "Joue do, ré, mi, fa et sol en crescendo, en partant du do central. Enfonce do, ré et mi lentement et en douceur, puis fa et sol vite et franchement.",
    },
    "hear-crescendo": {
      text: "Écoute do, ré, mi, fa et sol joués en crescendo. Chaque touche s’enfonce un peu plus vite que la précédente.",
    },
    "how-crescendo-changed": {
      text: "Comment le son a-t-il changé de la première note à la dernière ?",
      answers: ["Il est resté doux", "Il est devenu plus doux", "Il est resté fort", "Il est devenu plus fort"],
    },
    "diminuendo-demo": {
      text: "Maintenant, écoute sol, fa, mi, ré et do. Chaque note sonne un peu plus doux que la précédente.",
    },
    "getting-softer": {
      text: "Jouer de plus en plus doux, peu à peu, c’est un diminuendo, noté dim. On l’appelle aussi decrescendo, noté decresc. Un soufflet qui se ferme > demande la même chose.",
    },
    "which-hairpin-softer": {
      text: "Quelle indication te demande de jouer de plus en plus doux ?",
      answers: ["Le soufflet qui se ferme >", "Le soufflet qui s’ouvre <", "L’indication f", "L’indication mf"],
    },
    "play-diminuendo": {
      text: "Joue sol, fa, mi, ré et do en diminuendo, en partant du sol au-dessus du do central. Enfonce sol, fa et mi vite et franchement, puis ré et do lentement et en douceur.",
    },
    "hear-diminuendo": {
      text: "Écoute sol, fa, mi, ré et do joués en diminuendo. Chaque touche s’enfonce un peu plus lentement que la précédente.",
    },
    "how-diminuendo-changed": {
      text: "Comment le son a-t-il changé de la première note à la dernière ?",
      answers: ["Il est devenu plus fort", "Il est resté fort", "Il est devenu plus doux", "Il est resté doux"],
    },
    "swell-and-fade": {
      text: "Souvent, une phrase devient plus forte en montant et plus douce en descendant. Elle enfle puis s’éteint, comme une vague.",
    },
    "play-swell": {
      text: "Joue du do central jusqu’au sol, puis redescends jusqu’au do. Joue de plus en plus fort en montant, puis de plus en plus doux en descendant. Cette étape vérifie les notes, alors laisse ton oreille juger la force.",
    },
    "how-it-ends": {
      text: "Une phrase commence p, avec un soufflet qui s’ouvre < en dessous. Comment doit-elle finir ?",
      answers: ["Plus doux que p", "Aussi doux qu’au début", "Plus vite qu’au début", "Plus fort qu’au début"],
    },
    recap: {
      text: "Bravo. Tu sais maintenant jouer de plus en plus fort et de plus en plus doux.",
      points: [
        "Un crescendo devient plus fort. Il est noté cresc. ou indiqué par un soufflet qui s’ouvre <.",
        "Un diminuendo devient plus doux. Il est noté dim., decresc. ou indiqué par un soufflet qui se ferme >.",
        "Une phrase enfle souvent en montant et s’éteint en descendant.",
      ],
    },
  },
};
