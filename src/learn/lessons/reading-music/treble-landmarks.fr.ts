/** *Treble landmarks* in French. */
import type { Translation } from "../../../i18n/translation";
import type { TrebleLandmarksTexts } from "./treble-landmarks.en";

export const trebleLandmarksFr: Translation<TrebleLandmarksTexts> = {
  title: "Notes repères en clef de sol",
  steps: {
    "landmarks-demo": {
      text: "Regarde et écoute. Le piano joue le do central, puis le sol, puis le do au-dessus. Ces trois notes sont tes notes repères.",
    },
    "three-landmarks": {
      text: "Une note repère, c’est une note que tu reconnais d’un coup d’œil. Le do central est sur sa ligne supplémentaire, et le sol sur la deuxième ligne. Le do aigu est dans le troisième interligne en partant du bas.",
    },
    "high-c-quiz": {
      text: "Où se trouve le do aigu sur la portée en clef de sol ?",
      answers: [
        "Sur la deuxième ligne",
        "Sur une ligne supplémentaire sous la portée",
        "Dans le troisième interligne en partant du bas",
      ],
    },
    "name-landmarks": {
      text: "Nomme chaque note repère : do ou sol.",
    },
    "count-from-a-landmark": {
      text: "Toute autre note se trouve à quelques pas d’une note repère. D’une ligne à l’interligne suivant, c’est un pas, et d’un interligne à la ligne suivante aussi. Chaque pas vers le haut donne la note suivante.",
    },
    "count-quiz": {
      text: "Une note est un pas au-dessus du sol, dans l’interligne au-dessus de la deuxième ligne. Quelle note est-ce ?",
      answers: ["Fa", "La", "Si"],
    },
    "name-neighbours": {
      text: "Nomme chaque note. Trouve la note repère la plus proche, puis compte les pas vers le haut ou vers le bas.",
    },
    "read-treble-landmarks": {
      text: "Joue chaque note que tu vois sur la portée en clef de sol. Certaines sont des notes repères, et les autres sont à un pas d’une note repère.",
    },
    recap: {
      text: "Bravo. Tu connais maintenant trois notes repères en clef de sol.",
      points: [
        "Le do central est sur une ligne supplémentaire, sous la portée.",
        "Le sol est sur la deuxième ligne, et le do aigu dans le troisième interligne.",
        "Pour trouver n’importe quelle note, compte les pas depuis la note repère la plus proche.",
      ],
    },
  },
};
