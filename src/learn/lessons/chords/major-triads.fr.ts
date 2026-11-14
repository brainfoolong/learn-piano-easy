/** *Major triads* in French. */
import type { Translation } from "../../../i18n/translation";
import type { MajorTriadsTexts } from "./major-triads.en";

export const majorTriadsFr: Translation<MajorTriadsTexts> = {
  title: "Les accords parfaits majeurs",
  steps: {
    "major-demo": {
      text: "Écoute quatre accords : do, fa, sol, puis de nouveau do. Chacun sonne clair et joyeux. Ce sont des accords parfaits majeurs.",
    },
    "count-the-steps": {
      text: "Compte les demi-tons dans do, mi et sol. Chaque touche compte, les noires aussi. De mi jusqu’à sol, il y a trois demi-tons.",
    },
    "half-steps-c-to-e": {
      text: "Maintenant, compte de do jusqu’à mi. Combien de demi-tons cela fait-il ?",
      answers: ["Deux", "Trois", "Quatre"],
    },
    "major-recipe": {
      text: "Voilà la recette d’un accord parfait majeur. Commence sur sa fondamentale, la touche qui donne son nom à l’accord. Monte de quatre demi-tons, puis de trois de plus.",
    },
    "right-hand-fingers": {
      text: "La main droite joue un accord de trois notes avec les doigts 1, 3 et 5. Le pouce joue la fondamentale.",
    },
    "c-major-triad": {
      text: "Pose le pouce droit sur le do central. Joue do, mi et sol l’un après l’autre, puis les trois ensemble.",
    },
    "f-major-triad": {
      text: "Monte le pouce jusqu’au fa. Quatre demi-tons plus haut, c’est la, et trois de plus, c’est do. Joue-les l’un après l’autre, puis ensemble.",
    },
    "g-major-triad": {
      text: "Maintenant, place le pouce sur sol. La recette donne sol, si et ré. Joue-les l’un après l’autre, puis ensemble.",
    },
    "four-up-from-d": {
      text: "Commence sur ré et monte de quatre demi-tons. Sur quelle touche arrives-tu ?",
      answers: ["Fa dièse", "Fa", "Sol"],
    },
    "find-f-sharp": {
      text: "Ré majeur a donc besoin d’une touche noire. Trouve fa dièse, la touche noire juste à droite de fa.",
    },
    "d-major-triad": {
      text: "Pose le pouce droit sur le ré au-dessus du do central. Le doigt 3 se pose sur fa dièse. Joue ré, fa dièse et la l’un après l’autre, puis ensemble.",
    },
    "left-hand-fingers": {
      text: "La main gauche joue un accord de trois notes avec les doigts 5, 3 et 1. Le doigt 5 joue la fondamentale, et le pouce la touche du haut.",
    },
    "left-c-major": {
      text: "Pose le doigt 5 de la main gauche sur le do sous le do central. Joue do, mi et sol l’un après l’autre, puis ensemble.",
    },
    "chord-walk-demo": {
      text: "Voici do, fa, sol et do majeur à la suite. La main garde sa position et se déplace d’un seul bloc.",
    },
    "chord-walk": {
      text: "À toi. Joue les quatre accords à la main droite. Garde la position des doigts, et déplace la main d’une fondamentale à l’autre.",
    },
    recap: {
      text: "Bravo. Tu sais maintenant construire un accord parfait majeur sur n’importe quelle touche.",
      points: [
        "Un accord parfait majeur commence sur sa fondamentale.",
        "Sa touche du milieu est quatre demi-tons plus haut, et sa touche du haut trois de plus.",
        "Do, fa et sol majeur n’utilisent que des touches blanches, et ré majeur a besoin de fa dièse.",
        "La main droite joue avec les doigts 1, 3 et 5, et la main gauche avec les doigts 5, 3 et 1.",
      ],
    },
  },
};
