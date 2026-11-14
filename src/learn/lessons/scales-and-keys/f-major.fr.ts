/** *F major* in French. */
import type { Translation } from "../../../i18n/translation";
import type { FMajorTexts } from "./f-major.en";

export const fMajorFr: Translation<FMajorTexts> = {
  title: "Fa majeur",
  steps: {
    "f-major-sound": {
      text: "Écoute une nouvelle gamme. Elle commence et se termine sur fa. Entends-tu la touche noire qu’elle contient ?",
    },
    "pattern-on-f": {
      text: "Commence la formule de la gamme sur fa : ton, ton, demi-ton, ton, ton, ton, demi-ton. De fa à sol, c’est un ton, et de sol à la aussi.",
    },
    "after-a": {
      text: "Ensuite vient un demi-ton au-dessus du la. Quelle touche est-ce ?",
      answers: ["Si", "Si bémol", "Do"],
    },
    "find-b-flat": {
      text: "Trouve si bémol. C’est la touche noire juste à gauche de si.",
    },
    "f-fingering": {
      text: "Pose le pouce droit sur fa. Joue fa, sol, la et si bémol avec les doigts 1, 2, 3 et 4. Puis passe le pouce dessous jusqu’à do, et continue avec 1, 2, 3, 4.",
    },
    "where-thumb-under": {
      text: "En fa majeur, après quelle touche le pouce passe-t-il dessous ?",
      answers: ["Si bémol", "La", "Do"],
    },
    "f-scale-up": {
      text: "À toi. Joue la gamme de fa majeur en montant, du fa au-dessus du do central jusqu’au fa suivant. N’oublie pas le si bémol.",
    },
    "f-scale-down": {
      text: "Maintenant, joue-la en descendant. Après do, passe le doigt 4 par-dessus le pouce jusqu’à si bémol.",
    },
    "tune-in-f": {
      text: "Voici une courte mélodie en fa majeur. En dessous, la main gauche tient la quinte fa et do.",
    },
    "tune-and-fifth": {
      text: "La main gauche joue la quinte grave : le do sous le do central et le fa en dessous. La main droite commence sur le fa au-dessus du do central. Joue la quinte en même temps que la première note de chaque mesure.",
    },
    recap: {
      text: "Bravo. Tu sais maintenant jouer en fa majeur.",
      points: [
        "En partant de fa, la formule de la gamme demande une touche noire : si bémol.",
        "La main droite joue 1, 2, 3, 4, passe le pouce dessous jusqu’à do, puis joue 1, 2, 3, 4.",
        "En descendant, le doigt 4 passe par-dessus le pouce jusqu’à si bémol.",
      ],
    },
  },
};
