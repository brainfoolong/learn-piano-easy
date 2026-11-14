/** *The bass clef* in French. */
import type { Translation } from "../../../i18n/translation";
import type { TheBassClefTexts } from "./the-bass-clef.en";

export const theBassClefFr: Translation<TheBassClefTexts> = {
  title: "La clef de fa",
  steps: {
    "low-notes-demo": {
      text: "Regarde et écoute. Le piano joue do, ré, mi, fa et sol sous le do central. Ce sont les touches de la main gauche en position de do.",
    },
    "what-the-bass-clef-is": {
      text: "La clef de sol sert à écrire les notes aiguës, surtout pour la main droite. La clef de fa sert à écrire les notes graves, surtout pour la main gauche. Elle ressemble à une boucle avec deux points à côté.",
    },
    "low-notes-clef-quiz": {
      text: "Quelle clef sert à écrire les notes graves ?",
      answers: ["La clef de sol", "La clef de fa"],
    },
    "the-f-line": {
      text: "Les deux points de la clef de fa se placent au-dessus et au-dessous de la quatrième ligne en partant du bas. Cette ligne est le fa, le fa sous le do central. C’est pour ça qu’on l’appelle clef de fa.",
    },
    "f-line-quiz": {
      text: "Autour de quelle ligne se placent les deux points de la clef de fa ?",
      answers: ["La deuxième ligne en partant du bas", "La quatrième ligne en partant du bas", "La ligne du milieu"],
    },
    "play-bass-f": {
      text: "Voici le fa sur la quatrième ligne. Joue-le sur le clavier. En position de do à la main gauche, le doigt 2 est posé dessus.",
    },
    "neighbours-of-f": {
      text: "L’interligne juste au-dessus du fa, c’est le sol. L’interligne juste en dessous, c’est le mi. Un pas plus bas encore, sur la ligne du milieu, se trouve le ré.",
    },
    "name-bass-notes": {
      text: "Nomme chaque note en clef de fa. Appuie sur son nom. Pars du fa sur la quatrième ligne et compte vers le haut ou vers le bas.",
    },
    recap: {
      text: "Bravo. Tu sais lire tes premières notes en clef de fa.",
      points: [
        "La clef de fa sert à écrire les notes graves, surtout pour la main gauche.",
        "Ses deux points encadrent la quatrième ligne, celle du fa.",
        "À partir du fa, compte vers le haut ou vers le bas pour trouver ses voisines.",
      ],
    },
  },
};
