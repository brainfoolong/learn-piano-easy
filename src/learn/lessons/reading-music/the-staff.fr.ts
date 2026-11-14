/** *The staff* in French. */
import type { Translation } from "../../../i18n/translation";
import type { TheStaffTexts } from "./the-staff.en";

export const theStaffFr: Translation<TheStaffTexts> = {
  title: "La portée",
  steps: {
    "five-lines": {
      text: "La musique s’écrit sur une portée. Une portée, ce sont cinq lignes, l’une au-dessus de l’autre. Tu les comptes de bas en haut, donc la ligne du bas est la première.",
    },
    "lines-quiz": {
      text: "Combien de lignes compte une portée ?",
      answers: ["Quatre lignes", "Cinq lignes", "Six lignes"],
    },
    "four-spaces": {
      text: "Entre les cinq lignes, il y a quatre interlignes. Les interlignes aussi se comptent de bas en haut.",
    },
    "spaces-quiz": {
      text: "Combien d’interlignes y a-t-il entre les lignes d’une portée ?",
      answers: ["Trois", "Quatre", "Cinq"],
    },
    "line-or-space": {
      text: "Une note se place sur une ligne ou dans un interligne. Sur une ligne, la ligne passe au milieu de la note. Dans un interligne, la note remplit l’espace entre deux lignes.",
    },
    "line-or-space-quiz": {
      text: "Une ligne passe en plein milieu d’une note. Où se trouve cette note ?",
      answers: ["Sur une ligne", "Dans un interligne"],
    },
    "higher-is-higher": {
      text: "Plus une note est placée haut sur la portée, plus elle est aiguë. Un pas vers le haut, d’une ligne à l’interligne suivant, correspond à la touche blanche suivante, vers la droite.",
    },
    "climb-demo": {
      text: "Regarde et écoute. Le piano monte de la ligne du bas jusqu’à la ligne du haut, une ligne ou un interligne à la fois. Chaque note sonne un peu plus aigu.",
    },
    "higher-or-lower-listen": {
      text: "Tu entends deux notes. La deuxième est-elle plus aiguë ou plus grave que la première, ou est-ce la même ? Une note plus aiguë serait placée plus haut sur la portée.",
    },
    "top-or-bottom-quiz": {
      text: "Une note est sur la ligne du haut, et une autre sur la ligne du bas. Laquelle sonne plus aigu ?",
      answers: ["La note sur la ligne du bas", "La note sur la ligne du haut", "Elles sonnent pareil"],
    },
    "first-line-quiz": {
      text: "Quelle ligne de la portée est la première ?",
      answers: ["La ligne du bas", "La ligne du milieu", "La ligne du haut"],
    },
    recap: {
      text: "Bravo. Tu connais maintenant la portée.",
      points: [
        "Une portée a cinq lignes et quatre interlignes, comptés de bas en haut.",
        "Une note se place sur une ligne ou dans un interligne.",
        "Plus une note est placée haut sur la portée, plus elle est aiguë.",
      ],
    },
  },
};
