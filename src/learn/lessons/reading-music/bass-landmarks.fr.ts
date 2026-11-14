/** *Bass landmarks* in French. */
import type { Translation } from "../../../i18n/translation";
import type { BassLandmarksTexts } from "./bass-landmarks.en";

export const bassLandmarksFr: Translation<BassLandmarksTexts> = {
  title: "Notes repères en clef de fa",
  steps: {
    "landmarks-demo": {
      text: "Regarde et écoute. Le piano joue trois notes repères de la clef de fa : le do grave, le fa et le do central. Une note repère, c’est une note que tu reconnais d’un coup d’œil.",
    },
    "low-c": {
      text: "Le do grave est dans le deuxième interligne en partant du bas de la portée en clef de fa. C’est le do sous le do central. En position de do, l’auriculaire gauche le joue.",
    },
    "play-low-c": {
      text: "Voici le do grave dans le deuxième interligne. Joue-le sur le clavier.",
    },
    "middle-c-above": {
      text: "Le do central est sur sa propre ligne supplémentaire, juste au-dessus de la portée en clef de fa. C’est le même do central que tu as vu sous la portée en clef de sol.",
    },
    "middle-c-quiz": {
      text: "Où se trouve le do central en clef de fa ?",
      answers: [
        "Sur une ligne supplémentaire juste sous la portée",
        "Sur une ligne supplémentaire juste au-dessus de la portée",
        "Sur la ligne du milieu",
      ],
    },
    "fourth-line-quiz": {
      text: "Quelle note repère se trouve sur la quatrième ligne en partant du bas ?",
      answers: ["Le do grave", "Le fa", "Le do central"],
    },
    "count-from-a-landmark": {
      text: "D’une ligne à l’interligne suivant, c’est un pas, donc une note plus loin. Pour lire une note, pars de la note repère la plus proche. Puis compte les pas vers le haut ou vers le bas.",
    },
    "count-quiz": {
      text: "Une note est sur la ligne du milieu, un pas au-dessus du do grave. Quelle note est-ce ?",
      answers: ["Si", "Ré", "Mi"],
    },
    "play-bass-landmarks": {
      text: "Joue chaque note que tu vois sur la portée en clef de fa. Certaines sont des notes repères, et les autres sont à un ou deux pas d’une note repère.",
    },
    "name-by-counting": {
      text: "Nomme chaque note. Appuie sur son nom. Compte depuis la note repère la plus proche : le do grave, le fa ou le do central.",
    },
    recap: {
      text: "Bravo. Tu sais te repérer sur la portée en clef de fa.",
      points: [
        "Le do grave est dans le deuxième interligne.",
        "Le fa est sur la quatrième ligne, entre les deux points de la clef.",
        "Le do central est sur une ligne supplémentaire, juste au-dessus de la portée.",
        "Pour lire n’importe quelle note, compte depuis la note repère la plus proche.",
      ],
    },
  },
};
