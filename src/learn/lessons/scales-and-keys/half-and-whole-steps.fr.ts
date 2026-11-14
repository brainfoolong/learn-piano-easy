/** *Half and whole steps* in French. */
import type { Translation } from "../../../i18n/translation";
import type { HalfAndWholeStepsTexts } from "./half-and-whole-steps.en";

export const halfAndWholeStepsFr: Translation<HalfAndWholeStepsTexts> = {
  title: "Demi-tons et tons",
  steps: {
    "key-by-key": {
      text: "Écoute le piano monter de do à mi. Il joue toutes les touches en chemin, les noires aussi.",
    },
    "half-step": {
      text: "Chaque mouvement de cette montée était un demi-ton. Un demi-ton va à la touche voisine, noire ou blanche, sans aucune touche entre les deux.",
    },
    "half-step-from-c": {
      text: "À toi. Joue le do central, puis la touche noire juste à sa droite, et joue cette paire deux fois. Chaque mouvement est un demi-ton.",
    },
    "no-black-key-between": {
      text: "Regarde mi et fa. Il n’y a pas de touche noire entre eux. De mi à fa, c’est donc un demi-ton, tout comme de si à do.",
    },
    "white-half-step": {
      text: "Quelles touches blanches sont à un demi-ton l’une de l’autre ?",
      answers: ["Do et ré", "Mi et fa", "Fa et sol"],
    },
    "e-f-and-b-c": {
      text: "Joue le mi et le fa au-dessus du do central. Puis joue le si et le do juste au-dessus. Ce sont deux demi-tons entre touches blanches.",
    },
    "whole-step": {
      text: "Deux demi-tons font un ton. Un ton saute une touche. De do à ré, c’est un ton, car une touche noire se trouve entre les deux.",
    },
    "whole-and-half": {
      text: "Écoute : de do à ré, c’est un ton, et de ré à mi, c’est un ton. Puis de mi à fa, ce n’est qu’un demi-ton.",
    },
    "whole-steps-from-c": {
      text: "À toi. Joue le do central, ré et mi. Chaque mouvement est un ton, par-dessus une touche noire.",
    },
    "f-to-g": {
      text: "De fa à sol en montant, est-ce un demi-ton ou un ton ?",
      answers: ["Un ton", "Un demi-ton"],
    },
    "whole-step-above-e": {
      text: "Joue la touche située un ton au-dessus de mi. Compte deux demi-tons vers le haut, et attention : le premier arrive sur fa.",
    },
    recap: {
      text: "Bravo. Tu sais maintenant mesurer la distance entre deux touches.",
      points: [
        "Un demi-ton va à la touche voisine, noire ou blanche.",
        "De mi à fa et de si à do, ce sont des demi-tons entre touches blanches.",
        "Un ton vaut deux demi-tons, avec une touche entre les deux.",
      ],
    },
  },
};
