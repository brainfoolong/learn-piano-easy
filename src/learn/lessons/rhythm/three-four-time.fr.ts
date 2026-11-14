/** *Three-four time* in French. */
import type { Translation } from "../../../i18n/translation";
import type { ThreeFourTimeTexts } from "./three-four-time.en";

export const threeFourTimeFr: Translation<ThreeFourTimeTexts> = {
  title: "La mesure à trois temps",
  steps: {
    "waltz-demo": {
      text: "Regarde et écoute. Une note grave sonne sur le premier temps, et des notes plus aiguës sur les deux suivants. La formule se répète.",
    },
    "beats-in-threes": {
      text: "Certaines musiques regroupent leurs temps par trois. Tu comptes 1, 2, 3, 1, 2, 3, et le premier temps est le plus fort. C’est la mesure à trois temps (3/4), celle de la valse.",
    },
    "beats-in-a-bar-quiz": {
      text: "Combien de temps compte une mesure à 3/4 ?",
      answers: ["Deux", "Trois", "Quatre"],
    },
    "which-is-a-waltz-quiz": {
      text: "Une valse est à 3/4. Comment la comptes-tu ?",
      answers: ["1, 2, 3, 1, 2, 3", "1, 2, 3, 4, 1, 2, 3, 4"],
    },
    "tap-in-threes": {
      text: "Appuie sur Démarrer et écoute d’abord quatre clics. Ensuite, appuie sur une touche au choix à chaque clic, et compte 1, 2, 3 à voix haute. Dis chaque 1 un peu plus fort.",
    },
    recap: {
      text: "Bravo. Tu sais maintenant compter par trois.",
      points: ["Certaines musiques regroupent leurs temps par trois.", "Une mesure à 3/4 a trois temps, comptés 1, 2, 3.", "Le premier temps est le plus fort, comme dans une valse."],
    },
  },
};
