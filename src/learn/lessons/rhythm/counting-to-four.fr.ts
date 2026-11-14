/** *Counting to four* in French. */
import type { Translation } from "../../../i18n/translation";
import type { CountingToFourTexts } from "./counting-to-four.en";

export const countingToFourFr: Translation<CountingToFourTexts> = {
  title: "Compter jusqu’à quatre",
  steps: {
    "bars-demo": {
      text: "Regarde et écoute. Un do grave ouvre chaque groupe de quatre temps, et un sol sonne sur les trois autres.",
    },
    "what-a-bar-is": {
      text: "Les temps se regroupent en mesures, et une barre de mesure termine chaque mesure. Ici, chaque mesure a quatre temps, comptés 1, 2, 3, 4. C’est la mesure à quatre temps (4/4), et le premier temps est le plus fort.",
    },
    "beats-in-a-bar-quiz": {
      text: "Combien de temps compte une mesure à 4/4 ?",
      answers: ["Trois temps", "Quatre temps", "Huit temps"],
    },
    "strongest-beat-quiz": {
      text: "Quel temps de la mesure est le plus fort ?",
      answers: ["1er temps", "2e temps", "4e temps"],
    },
    "count-aloud-tap": {
      text: "Appuie sur Démarrer, puis appuie sur une touche au choix à chaque clic. Compte à voix haute en même temps : 1, 2, 3, 4. Dis le 1 un peu plus fort.",
    },
    "fill-a-bar-quiz": {
      text: "Lequel de ces groupes remplit une mesure à 4/4 ?",
      answers: ["Deux blanches", "Trois noires", "Une ronde et une noire"],
    },
    recap: {
      text: "Bravo. Tu sais maintenant compter des mesures à quatre temps.",
      points: ["Les temps se regroupent en mesures, et une barre de mesure termine chaque mesure.", "Dans une mesure à 4/4, tu comptes 1, 2, 3, 4.", "Le premier temps est le plus fort de la mesure."],
    },
  },
};
