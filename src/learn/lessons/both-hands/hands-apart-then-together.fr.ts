/** *Hands apart, then together* in French. */
import type { Translation } from "../../../i18n/translation";
import type { HandsApartThenTogetherTexts } from "./hands-apart-then-together.en";

export const handsApartThenTogetherFr: Translation<HandsApartThenTogetherTexts> = {
  title: "Mains séparées, puis ensemble",
  steps: {
    "three-passes": {
      text: "Écoute trois fois une courte mélodie. C’est d’abord la main droite qui la joue, puis la main gauche, et enfin les deux mains ensemble.",
    },
    "why-apart": {
      text: "Une main seule, c’est plus facile à apprendre. Quand les deux mains connaissent leurs notes, tu les réunis.",
    },
    "first-step-quiz": {
      text: "Tu commences un nouveau morceau à deux mains. Que travailles-tu d’abord ?",
      answers: ["Chaque main seule", "Les deux mains ensemble, au tempo", "Seulement la main gauche, jamais la droite"],
    },
    "right-alone": {
      text: "D’abord la main droite. Commence sur le do central et joue do ré mi ré do.",
    },
    "left-alone": {
      text: "Maintenant, la main gauche seule. Commence sur le do une octave plus bas et joue la même suite do ré mi ré do.",
    },
    "together-steps": {
      text: "Maintenant, les deux mains ensemble. Joue chaque paire de touches au même moment. Pour commencer, chaque main joue un do.",
    },
    "slow-together": {
      text: "Jouer à deux mains, c’est nouveau, alors va lentement. La vitesse viendra plus tard, quand les deux mains seront à l’aise ensemble.",
    },
    "mirror-tune": {
      text: "Voici une nouvelle mélodie. Les mains s’écartent puis reviennent, comme dans un miroir.",
    },
    "mirror-right": {
      text: "Main droite seule. Joue mi fa sol fa mi.",
    },
    "mirror-left": {
      text: "Main gauche seule. Joue mi ré do ré mi, en partant du mi sous le do central. Ainsi, la main gauche descend, alors que la main droite montait.",
    },
    "mirror-together": {
      text: "Maintenant, joue-les ensemble. Prends ton temps, et joue chaque paire de touches en même temps.",
    },
    recap: {
      text: "Bravo. Pour la première fois, tu as joué à deux mains en même temps.",
      points: [
        "Travaille d’abord un nouveau morceau mains séparées.",
        "Ensuite, réunis les deux mains, lentement.",
        "Les mains peuvent aller dans le même sens ou en sens contraire.",
      ],
    },
  },
};
