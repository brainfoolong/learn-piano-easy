/** *Inversions* in French. */
import type { Translation } from "../../../i18n/translation";
import type { InversionsTexts } from "./inversions.en";

export const inversionsFr: Translation<InversionsTexts> = {
  title: "Les renversements",
  steps: {
    "inversions-demo": {
      text: "Écoute trois accords. Chacun contient les notes do, mi et sol. Seul leur ordre change.",
    },
    "same-three-notes": {
      text: "Do-mi-sol avec do en bas, c’est l’état fondamental. Un renversement joue les trois mêmes notes dans un autre ordre. C’est toujours do majeur.",
    },
    "root-position": {
      text: "Joue do majeur à l’état fondamental : do, mi et sol depuis le do central, tous ensemble. Prends les doigts 1, 3 et 5.",
    },
    "first-inversion": {
      text: "Maintenant, monte la note du bas d’une octave. Do-mi-sol devient mi-sol-do. C’est le premier renversement.",
    },
    "play-first-inversion": {
      text: "Joue le premier renversement : mi et sol au-dessus du do central, et le do juste au-dessus. Enfonce les trois touches ensemble.",
    },
    "which-chord-is-e-g-c": {
      text: "Mi-sol-do sonne un peu autrement que do-mi-sol. Quel accord est-ce ?",
      answers: ["La mineur", "Mi mineur", "Do majeur"],
    },
    "second-inversion": {
      text: "Monte encore une fois la note du bas. Mi-sol-do devient sol-do-mi. C’est le deuxième renversement.",
    },
    "play-second-inversion": {
      text: "Joue le deuxième renversement : le sol au-dessus du do central, puis le do et le mi suivants, plus haut. Enfonce les trois touches ensemble.",
    },
    "climb-the-inversions": {
      text: "Monte sur le clavier avec do majeur : état fondamental, premier renversement, deuxième renversement, puis état fondamental une octave plus haut.",
    },
    "move-less": {
      text: "Grâce aux renversements, la main bouge moins d’un accord à l’autre. Fa majeur joué do-fa-la et sol majeur joué si-ré-sol sont tout près de do-mi-sol.",
    },
    "close-chords-demo": {
      text: "Écoute de nouveau do, fa, sol et do, joués tout près les uns des autres. Chaque doigt ne bouge que d’une ou deux touches.",
    },
    "which-chord-is-c-f-a": {
      text: "Do-fa-la contient fa, la et do dans un autre ordre. Quel accord est-ce ?",
      answers: ["Do majeur", "Fa majeur", "La mineur"],
    },
    "close-chords": {
      text: "Joue do-mi-sol, do-fa-la, si-ré-sol et do-mi-sol, en partant du do central. Garde la main au même endroit et laisse bouger les doigts.",
    },
    "close-chords-with-bass": {
      text: "Maintenant, ajoute la fondamentale à la main gauche sous chaque accord : do, fa, sol et do, sous le do central.",
    },
    recap: {
      text: "Bravo. Tu sais maintenant jouer un accord dans trois positions.",
      points: [
        "Un renversement joue les trois notes d’un accord dans un autre ordre.",
        "Monte la note du bas d’une octave : do-mi-sol devient mi-sol-do, puis sol-do-mi.",
        "L’accord reste le même : mi-sol-do et sol-do-mi sont toujours do majeur.",
        "Les renversements gardent les accords proches, et la main bouge moins.",
      ],
    },
  },
};
