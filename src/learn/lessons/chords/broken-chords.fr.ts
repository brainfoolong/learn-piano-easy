/** *Broken chords* in French. */
import type { Translation } from "../../../i18n/translation";
import type { BrokenChordsTexts } from "./broken-chords.en";

export const brokenChordsFr: Translation<BrokenChordsTexts> = {
  title: "Les accords brisés",
  steps: {
    "broken-demo": {
      text: "Écoute do majeur joué une note à la fois. Il monte, puis redescend. Tu entends quand même l’accord.",
    },
    "one-after-another": {
      text: "Un accord brisé joue les notes d’un accord l’une après l’autre, au lieu de les jouer ensemble. Les notes sont les mêmes, donc l’accord aussi.",
    },
    "chord-together": {
      text: "Joue d’abord do majeur, les trois notes ensemble : do, mi et sol depuis le do central, avec les doigts 1, 3 et 5.",
    },
    "broken-up": {
      text: "Maintenant, brise-le. Garde la main en place et joue do, puis mi, puis sol.",
    },
    "which-chord-broken": {
      text: "Tu as joué do, mi et sol une note à la fois. Quel accord as-tu joué ?",
      answers: ["Fa majeur", "Do majeur", "La mineur", "Sol majeur"],
    },
    "up-and-down": {
      text: "Un accord brisé monte et redescend souvent : do, mi, sol, mi. Joué encore et encore, il se balance comme une vague.",
    },
    "broken-up-and-down": {
      text: "Joue do, mi, sol, mi deux fois, et finis sur do. Garde la main immobile pendant que les doigts se balancent.",
    },
    "three-chords-broken": {
      text: "Brise trois accords à la main droite, en partant du do central : do-mi-sol-mi, fa-la-do-la et sol-si-ré-si. Finis sur do, mi et sol. Déplace la main à chaque accord.",
    },
    "which-is-broken": {
      text: "Lequel de ces motifs est un accord de do majeur brisé ?",
      answers: ["Do-ré-mi-fa", "Do-ré-do-ré", "Mi-fa-sol-la", "Do-mi-sol-mi"],
    },
    "left-hand-broken": {
      text: "Souvent, la main gauche joue un accord brisé sous une mélodie. Elle fait sonner l’accord pendant que la main droite chante.",
    },
    "left-hand-demo": {
      text: "Écoute une courte mélodie. La main gauche brise do majeur, puis sol majeur, puis de nouveau do majeur.",
    },
    "left-hand-alone": {
      text: "Joue la main gauche seule, en partant du do sous le do central : do-mi-sol-mi, puis sol-si-ré-si depuis le sol juste en dessous, puis do-mi-sol-mi.",
    },
    "tune-over-broken-chords": {
      text: "Maintenant, ajoute la mélodie à la main droite, en position de do. Chaque note de la mélodie commence en même temps qu’une note de la main gauche.",
    },
    recap: {
      text: "Bravo. Tu sais maintenant briser des accords aux deux mains.",
      points: [
        "Un accord brisé joue ses notes l’une après l’autre.",
        "Les notes sont les mêmes, donc l’accord sonne pareil.",
        "Une formule courante monte et redescend : do, mi, sol, mi.",
        "La main gauche brise souvent des accords sous une mélodie.",
      ],
    },
  },
};
