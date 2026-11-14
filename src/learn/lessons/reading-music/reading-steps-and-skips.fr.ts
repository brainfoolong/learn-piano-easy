/** *Reading steps and skips* in French. */
import type { Translation } from "../../../i18n/translation";
import type { ReadingStepsAndSkipsTexts } from "./reading-steps-and-skips.en";

export const readingStepsAndSkipsFr: Translation<ReadingStepsAndSkipsTexts> = {
  title: "Lire les pas et les sauts",
  steps: {
    "moves-demo": {
      text: "Écoute. D’abord, les notes montent par pas, puis par sauts. Sur la portée, chaque mouvement se voit d’une façon différente.",
    },
    "step-on-the-staff": {
      text: "Sur la portée, un pas va d’une ligne à l’interligne suivant, ou d’un interligne à la ligne suivante. Sur le clavier, il mène à la touche blanche voisine.",
    },
    "step-from-line-quiz": {
      text: "Une note est sur une ligne. Où se trouve la note un pas plus haut ?",
      answers: ["Dans l’interligne juste au-dessus", "Sur la ligne suivante, au-dessus", "Deux lignes plus haut"],
    },
    "skip-on-the-staff": {
      text: "Sur la portée, un saut va d’une ligne à la ligne suivante, ou d’un interligne à l’interligne suivant. Sur le clavier, il saute une touche blanche.",
    },
    "step-or-skip-quiz": {
      text: "Une note passe d’une ligne à la ligne juste au-dessus. Est-ce un pas ou un saut ?",
      answers: ["Un pas", "Un saut"],
    },
    "space-to-line-quiz": {
      text: "Une note passe d’un interligne à la ligne juste au-dessus. Est-ce un pas ou un saut ?",
      answers: ["Un pas", "Un saut"],
    },
    "read-by-moves": {
      text: "Pas besoin de nommer chaque note. Nomme la première, puis lis chaque mouvement : vers le haut ou vers le bas, un pas ou un saut.",
    },
    "skip-from-e-quiz": {
      text: "Une note est le mi, sur la ligne du bas de la portée en clef de sol. La note suivante est sur la ligne juste au-dessus. Quelle note est-ce ?",
      answers: ["Ré", "Fa", "Sol"],
    },
    "first-note": {
      text: "Le prochain morceau commence sur cette note. Nomme-la.",
    },
    "hand-on-d": {
      text: "Regarde la main droite monter depuis la position de do. Le pouce est sur le ré, et les doigts 2 à 5 couvrent mi, sol, la et si. Le fa est sauté, alors les doigts 2 et 3 s’écartent un peu plus.",
    },
    "d-position": {
      text: "À toi. Pose le pouce droit sur le ré et joue ré, mi, sol, la, si avec les doigts 1 à 5. Puis redescends jusqu’au ré.",
    },
    "song-notes": {
      text: "Le prochain morceau utilise ces cinq notes. Lis chacune d’elles et joue-la à la main droite.",
    },
    "song-opening": {
      text: "Voici le début du prochain morceau. Garde la main droite sur ré, mi, sol, la et si, et suis la touche indiquée.",
    },
    "opening-move-quiz": {
      text: "Dans cette mélodie, le mi descend au ré. Le mi est sur la ligne du bas. Où se trouve le ré ?",
      answers: ["Dans l’interligne juste en dessous", "Sur la ligne en dessous", "Sur la même ligne"],
    },
    "dotted-demo": {
      text: "Écoute deux mesures du morceau. Un point allonge une note de la moitié de sa durée : une blanche pointée dure trois temps. Le ré en noire pointée dure un temps et demi, et un demi-soupir remplit le dernier demi-temps.",
    },
    "dotted-half-quiz": {
      text: "Une blanche dure deux temps. Combien de temps dure une blanche pointée ?",
      answers: ["Deux temps", "Trois temps", "Quatre temps"],
    },
    "dotted-tap": {
      text: "À toi, après une mesure de décompte. Joue mi, mi et ré sur les clics, et relâche le ré après un temps et demi. Tiens le sol trois temps, puis joue ré.",
    },
    recap: {
      text: "Bravo. Tu sais maintenant lire une mélodie par ses mouvements.",
      points: [
        "Un pas va d’une ligne à l’interligne suivant, ou d’un interligne à la ligne suivante.",
        "Un saut va de ligne en ligne, ou d’interligne en interligne.",
        "Nomme la première note, puis lis chaque mouvement : sa direction et sa taille.",
        "Un point allonge une note de la moitié de sa durée.",
      ],
    },
  },
};
