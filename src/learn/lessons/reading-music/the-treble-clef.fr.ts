/** *The treble clef* in French. */
import type { Translation } from "../../../i18n/translation";
import type { TheTrebleClefTexts } from "./the-treble-clef.en";

export const theTrebleClefFr: Translation<TheTrebleClefTexts> = {
  title: "La clef de sol",
  steps: {
    "a-clef-starts-the-staff": {
      text: "Chaque portée commence par une clef. La clef te dit quelle note se trouve sur chaque ligne et dans chaque interligne. La main droite lit surtout la clef de sol.",
    },
    "the-g-line": {
      text: "La clef de sol s’enroule autour de la deuxième ligne en partant du bas. Cette ligne est le sol, et c’est pour ça qu’on l’appelle clef de sol. C’est le premier sol au-dessus du do central.",
    },
    "g-line-quiz": {
      text: "Autour de quelle ligne la clef de sol s’enroule-t-elle ?",
      answers: ["La ligne du bas", "La deuxième ligne en partant du bas", "La ligne du haut"],
    },
    "hear-g-demo": {
      text: "Écoute. Voici le sol de la deuxième ligne, joué deux fois.",
    },
    "play-g": {
      text: "Cette note est sur la ligne du sol. Joue-la sur le piano.",
    },
    "g-neighbours": {
      text: "À partir du sol, tu trouves ses voisines. Un pas plus haut, dans l’interligne au-dessus, c’est le la. Un pas plus bas, dans l’interligne en dessous, c’est le fa.",
    },
    "neighbours-demo": {
      text: "Regarde et écoute : sol, un pas vers le haut jusqu’au la, retour au sol, un pas vers le bas jusqu’au fa, et retour au sol.",
    },
    "space-above-g-quiz": {
      text: "Une note est dans l’interligne juste au-dessus de la ligne du sol. Quelle note est-ce ?",
      answers: ["Fa", "La", "Si"],
    },
    "one-more-step": {
      text: "Continue pas à pas, de note en note. Au-dessus du la vient le si, sur la ligne du milieu. Sous le fa vient le mi, sur la ligne du bas.",
    },
    "middle-line-quiz": {
      text: "Quelle note se trouve sur la ligne du milieu en clef de sol ?",
      answers: ["Sol", "La", "Si"],
    },
    "play-treble-notes": {
      text: "Joue chaque note que tu vois. Trouve d’abord la ligne du sol, puis compte les pas vers le haut ou vers le bas.",
    },
    "name-treble-notes": {
      text: "Maintenant, nomme chaque note. Pars de la ligne du sol et avance pas à pas vers le haut ou vers le bas.",
    },
    recap: {
      text: "Bravo. Tu sais lire tes premières notes en clef de sol.",
      points: [
        "La clef de sol s’enroule autour de la deuxième ligne, celle du sol.",
        "Un pas vers le haut ou vers le bas mène à la ligne ou à l’interligne suivant, et à la note suivante.",
        "Autour du sol se trouvent mi, fa, la et si.",
      ],
    },
  },
};
