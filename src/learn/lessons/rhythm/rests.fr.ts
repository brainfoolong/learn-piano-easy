/** *Rests* in French. */
import type { Translation } from "../../../i18n/translation";
import type { RestsTexts } from "./rests.en";

export const restsFr: Translation<RestsTexts> = {
  title: "Les silences",
  steps: {
    "rests-demo": {
      text: "Regarde et écoute. Sur certains temps, le piano se tait, mais la pulsation continue.",
    },
    "what-a-rest-is": {
      text: "Un silence, c’est un moment sans son dans la musique. Tu ne joues rien, mais tu le comptes quand même. Un soupir dure un temps, comme une noire.",
    },
    "quarter-rest-quiz": {
      text: "Tu joues do, do, un soupir, puis do. Combien de temps de silence y a-t-il ?",
      answers: ["Un temps", "Deux temps", "Aucun temps"],
    },
    "half-rest": {
      text: "Une demi-pause dure deux temps, comme une blanche. Tu ne joues rien et tu comptes deux temps avant de rejouer.",
    },
    "half-rest-quiz": {
      text: "Combien de temps de silence dure une demi-pause ?",
      answers: ["Un temps", "Deux temps", "Quatre temps"],
    },
    "fill-a-bar-quiz": {
      text: "Tu joues une noire, puis un soupir, puis une blanche. Ça fait combien de temps ?",
      answers: ["Deux temps", "Trois temps", "Quatre temps"],
    },
    "phrase-with-rests": {
      text: "Regarde et écoute. Le piano joue do, ré, mi, fait un silence d’un temps, puis joue mi, ré. Il fait un silence de deux temps et finit sur do.",
    },
    "play-with-rests": {
      text: "À toi, après une mesure de décompte. Joue do, ré, mi sur les clics, puis lève le doigt pendant un temps de silence. Joue mi, ré, ne joue rien pendant deux temps, et finis sur do.",
    },
    recap: {
      text: "Bravo. Tu connais maintenant tes premiers silences.",
      points: ["Un silence se compte, même s’il ne sonne pas.", "Un soupir dure un temps.", "Une demi-pause dure deux temps."],
    },
  },
};
