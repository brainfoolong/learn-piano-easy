/** *Twinkle's first phrase* in French. */
import type { Translation } from "../../../i18n/translation";
import type { TwinkleFirstPhraseTexts } from "./twinkle-first-phrase.en";

export const twinkleFirstPhraseFr: Translation<TwinkleFirstPhraseTexts> = {
  title: "« Ah ! vous dirai-je, maman » : première phrase",
  steps: {
    "phrase-demo": {
      text: "Écoute la première phrase de la chanson « Ah ! vous dirai-je, maman ». Une de ses notes sort de la position de do.",
    },
    "one-key-past": {
      text: "Cette note, c’est le la : la touche blanche juste après le sol. La main reste en position de do. L’auriculaire s’écarte d’une touche vers la droite pour jouer le la.",
    },
    "find-a": {
      text: "Pose la main droite en position de do. Écarte l’auriculaire au-delà du sol et joue le la.",
    },
    "leap-quiz": {
      text: "La mélodie commence sur do, puis fait un grand saut vers le haut. Sur quelle note arrive-t-elle ?",
      answers: ["Ré", "Mi", "Sol"],
    },
    "climb-up": {
      text: "Joue la première partie : do deux fois, sol deux fois, la deux fois, puis sol. Le pouce joue les deux do, et l’auriculaire joue tout le reste, en s’écartant jusqu’au la puis en revenant.",
    },
    "walk-down": {
      text: "Maintenant, la deuxième partie descend pas à pas : fa, mi, ré et do, chacun deux fois. Joue-les avec les doigts 4, 3, 2 et 1.",
    },
    "whole-phrase": {
      text: "Assemble les deux parties. Joue toute la phrase sans t’arrêter.",
    },
    recap: {
      text: "Bravo. Pour la première fois, tu as joué une touche au-delà de tes cinq doigts.",
      points: [
        "Une mélodie peut quitter la position de do le temps d’une note.",
        "L’auriculaire s’écarte du sol jusqu’au la.",
        "Une mélodie peut faire un grand saut, comme de do jusqu’à sol.",
      ],
    },
  },
};
