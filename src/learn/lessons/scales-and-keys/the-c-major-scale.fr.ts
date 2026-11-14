/** *The C major scale* in French. */
import type { Translation } from "../../../i18n/translation";
import type { TheCMajorScaleTexts } from "./the-c-major-scale.en";

export const theCMajorScaleFr: Translation<TheCMajorScaleTexts> = {
  title: "La gamme de do majeur",
  steps: {
    "scale-demo": {
      text: "Écoute huit notes monter du do central jusqu’au do suivant. Toutes les touches sont blanches.",
    },
    "what-a-scale-is": {
      text: "Une gamme est une suite de notes qui monte pas à pas. La gamme de do majeur commence sur do et se termine sur le do suivant.",
    },
    "scale-pattern": {
      text: "Ses pas suivent une formule : ton, ton, demi-ton, ton, ton, ton, demi-ton. Les demi-tons vont de mi à fa et de si à do.",
    },
    "first-half-step": {
      text: "Où se trouve le premier demi-ton de la gamme de do majeur ?",
      answers: ["De do à ré", "De sol à la", "De mi à fa"],
    },
    "first-three": {
      text: "Pose le pouce droit sur le do central. Joue do, ré et mi avec les doigts 1, 2 et 3.",
    },
    "thumb-under": {
      text: "La main n’a que cinq doigts pour huit notes. Après mi, passe le pouce sous la main pour jouer fa.",
    },
    "which-finger-on-f": {
      text: "Tu joues do, ré et mi avec les doigts 1, 2 et 3. Quel doigt joue fa ?",
      answers: ["Doigt 4", "Doigt 1, le pouce", "Doigt 5"],
    },
    "tuck-to-f": {
      text: "Rejoue do, ré et mi. Puis passe le pouce dessous et joue fa. Garde le poignet calme et bien à plat.",
    },
    "last-five": {
      text: "Le pouce est maintenant sur fa. Joue fa, sol, la, si et do avec les doigts 1, 2, 3, 4 et 5.",
    },
    "scale-up": {
      text: "Joue la gamme de do majeur en montant à la main droite, du do central jusqu’au do suivant. Doigts 1, 2, 3, puis le pouce passe dessous, puis 1, 2, 3, 4, 5.",
    },
    "scale-down": {
      text: "Maintenant, redescends avec les doigts 5, 4, 3, 2, 1. Après fa, le doigt 3 passe par-dessus le pouce jusqu’à mi.",
    },
    recap: {
      text: "Bravo. Tu as joué ta première gamme.",
      points: [
        "La gamme de do majeur compte huit touches blanches, de do à do.",
        "Sa formule est ton, ton, demi-ton, ton, ton, ton, demi-ton.",
        "En montant, le pouce passe dessous jusqu’à fa.",
        "En descendant, le doigt 3 passe par-dessus le pouce jusqu’à mi.",
      ],
    },
  },
};
