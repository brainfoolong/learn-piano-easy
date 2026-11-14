/** *High and low* in French. */
import type { Translation } from "../../../i18n/translation";
import type { HighAndLowTexts } from "./high-and-low.en";

export const highAndLowFr: Translation<HighAndLowTexts> = {
  title: "Aigu et grave",
  steps: {
    "low-to-high": {
      text: "Écoute et regarde. Le piano joue des touches, du côté gauche jusqu’au côté droit.",
    },
    "left-is-low": {
      text: "Tu as entendu le son monter ? Les touches de gauche sonnent plus grave, et celles de droite sonnent plus aigu.",
    },
    "wide-listen": {
      text: "Tu entends deux notes. Par rapport à la première, la deuxième est-elle plus aiguë, plus grave ou pareille ?",
    },
    "climb-up": {
      text: "Maintenant, tu montes. Joue les touches indiquées de gauche à droite, et écoute le son monter.",
    },
    "climb-down": {
      text: "Et on redescend. Joue les touches indiquées de droite à gauche, et écoute le son descendre.",
    },
    "low-then-high": {
      text: "De grands sauts : joue les trois touches indiquées, du grave à l’aigu.",
    },
    "which-way": {
      text: "La main se déplace vers la droite sur les touches. Que devient le son ?",
      answers: ["Il devient plus grave", "Il devient plus aigu", "Il reste pareil"],
    },
    "close-listen": {
      text: "Écoute bien : les deux notes sont toutes proches, ou c’est la même note. La deuxième est-elle plus aiguë, plus grave ou pareille ?",
    },
    recap: {
      text: "Bravo. Tu sais entendre et jouer l’aigu et le grave.",
      points: [
        "Les touches de gauche sonnent plus grave.",
        "Les touches de droite sonnent plus aigu.",
        "Deux notes peuvent aussi sonner pareil.",
      ],
    },
  },
};
