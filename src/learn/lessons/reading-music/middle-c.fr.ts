/** *Middle C* in French. */
import type { Translation } from "../../../i18n/translation";
import type { MiddleCTexts } from "./middle-c.en";

export const middleCFr: Translation<MiddleCTexts> = {
  title: "Le do central",
  steps: {
    "c-d-e-demo": {
      text: "Regarde et écoute. Le piano joue do, ré et mi, puis redescend au do. Bientôt, tu liras ces trois notes sur la portée.",
    },
    "the-ledger-line": {
      text: "Le do central se place sous la portée en clef de sol. Il a sa propre petite ligne, qui le traverse en son milieu. Cette petite ligne s’appelle une ligne supplémentaire.",
    },
    "where-quiz": {
      text: "Où s’écrit le do central ?",
      answers: [
        "Sur la ligne du bas de la portée",
        "Sur une petite ligne supplémentaire juste sous la portée",
        "Au milieu de la portée",
      ],
    },
    "the-c-you-know": {
      text: "C’est le do que tu connais déjà. Il se trouve près du milieu du piano, juste à gauche de deux touches noires. Maintenant, tu sais aussi le lire.",
    },
    "press-middle-c": {
      text: "Joue le do central sur le piano.",
    },
    "name-middle-c": {
      text: "Nomme chaque note de la portée. Cherche la petite ligne supplémentaire.",
    },
    "the-neighbours": {
      text: "Le do central a deux proches voisines. Le ré est accroché juste sous la ligne du bas. Le mi est posé sur la ligne du bas.",
    },
    "neighbour-quiz": {
      text: "Quelle note se trouve sur la ligne du bas de la portée en clef de sol ?",
      answers: ["Do", "Ré", "Mi"],
    },
    "name-c-d-e": {
      text: "Nomme chaque note : do, ré ou mi. Pars de la ligne supplémentaire et compte vers le haut.",
    },
    "play-c-d-e": {
      text: "Maintenant, joue chaque note que tu vois. Chacune est le do central ou l’une de ses proches voisines.",
    },
    recap: {
      text: "Bravo. Tu sais maintenant lire le do central.",
      points: [
        "Le do central se place sur une petite ligne supplémentaire, sous la portée en clef de sol.",
        "C’est le do près du milieu du piano.",
        "Le ré est accroché sous la ligne du bas, et le mi est posé dessus.",
      ],
    },
  },
};
