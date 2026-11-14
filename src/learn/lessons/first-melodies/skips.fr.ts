/** *Skips* in French. */
import type { Translation } from "../../../i18n/translation";
import type { SkipsTexts } from "./skips.en";

export const skipsFr: Translation<SkipsTexts> = {
  title: "Les sauts",
  steps: {
    "skip-demo": {
      text: "Regarde et écoute. Chaque note saute par-dessus une touche blanche, en montant puis en redescendant.",
    },
    "what-a-skip-is": {
      text: "Un saut passe par-dessus une touche blanche. De do à mi, tu sautes le ré. Le pouce joue do, le doigt 3 joue mi, et le doigt 2 se repose.",
    },
    "skip-from-c-quiz": {
      text: "Le pouce est sur do. Quelle touche se trouve à un saut de là ?",
      answers: ["Ré", "Mi", "Fa"],
    },
    "skips-up": {
      text: "Pose la main droite en position de do. Joue les sauts en montant : doigts 1 et 3, puis 2 et 4, puis 3 et 5.",
    },
    "skips-down": {
      text: "Maintenant, les mêmes sauts en redescendant. Commence avec le doigt 5 et suis la touche marquée.",
    },
    "step-or-skip-quiz": {
      text: "Le doigt 4 joue fa, puis le doigt 5 joue sol. Est-ce un pas ou un saut ?",
      answers: ["Un pas", "Un saut"],
    },
    "mixed-phrase": {
      text: "Pose la main droite en position de do. Cette mélodie mélange des pas et un saut : do ré mi, un saut vers le haut jusqu’à sol, puis fa mi ré do.",
    },
    recap: {
      text: "Bravo. Tu sais maintenant jouer des sauts.",
      points: ["Un saut passe par-dessus une touche blanche.", "En position de do, un saut laisse un doigt de côté.", "Une mélodie peut mélanger pas et sauts."],
    },
  },
};
