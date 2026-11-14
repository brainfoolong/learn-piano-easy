/** *Finger over the thumb* in French. */
import type { Translation } from "../../../i18n/translation";
import type { FingerOverTheThumbTexts } from "./finger-over-the-thumb.en";

export const fingerOverTheThumbFr: Translation<FingerOverTheThumbTexts> = {
  title: "Passer un doigt par-dessus le pouce",
  steps: {
    "down-demo": {
      text: "Écoute la gamme de do majeur en descendant, du do aigu jusqu’au do central. La main ne s’arrête jamais, et les notes s’enchaînent sans à-coups.",
    },
    "finger-over": {
      text: "En descendant, joue do, si, la, sol et fa avec les doigts 5, 4, 3, 2 et 1. Puis le doigt 3 passe par-dessus le pouce et arrive sur mi. Les doigts 2 et 1 jouent ré et do.",
    },
    "which-finger-crosses": {
      text: "En descendant, le pouce vient de jouer fa. Quel doigt passe par-dessus pour arriver sur mi ?",
      answers: ["Doigt 2", "Doigt 3", "Doigt 5"],
    },
    "top-five-down": {
      text: "Pose l’auriculaire sur le do au-dessus du do central. Descends jusqu’à fa, un doigt par touche.",
    },
    "cross-onto-e": {
      text: "Commence sur fa avec le pouce. Passe le doigt 3 par-dessus le pouce jusqu’à mi, puis joue ré et do.",
    },
    "right-hand-down": {
      text: "Maintenant, joue toute la gamme en descendant, du do aigu jusqu’au do central. Garde la main souple quand le doigt 3 passe par-dessus.",
    },
    "left-hand-up": {
      text: "La main gauche fait la même chose en montant. Joue do, ré, mi, fa et sol avec les doigts 5, 4, 3, 2 et 1. Puis le doigt 3 passe par-dessus le pouce et arrive sur le la.",
    },
    "left-hand-demo": {
      text: "Regarde la main gauche jouer la gamme de do majeur en montant, du do sous le do central jusqu’au do central.",
    },
    "left-cross-key": {
      text: "Le pouce gauche est sur sol. Le doigt 3 passe par-dessus. Sur quelle touche arrive-t-il ?",
      answers: ["La", "Fa", "Si"],
    },
    "left-scale-up": {
      text: "À toi. Joue la gamme en montant à la main gauche, du do sous le do central jusqu’au do central.",
    },
    "scale-up-and-down": {
      text: "Joue la gamme de do majeur à la main droite, du do central jusqu’au do suivant, puis redescends. En montant, le pouce passe dessous. En descendant, le doigt 3 passe par-dessus le pouce.",
    },
    recap: {
      text: "Bravo. Tes doigts savent maintenant passer dans les deux sens.",
      points: [
        "En descendant, la main droite joue 5, 4, 3, 2, 1, puis le doigt 3 passe par-dessus le pouce.",
        "En montant, la main gauche fait de même, et le doigt 3 passe jusqu’au la.",
        "À la main droite, le pouce passe dessous en montant, et le doigt 3 passe par-dessus en descendant.",
      ],
    },
  },
};
