/** *What a chord is* in French. */
import type { Translation } from "../../../i18n/translation";
import type { WhatAChordIsTexts } from "./what-a-chord-is.en";

export const whatAChordIsFr: Translation<WhatAChordIsTexts> = {
  title: "Qu’est-ce qu’un accord ?",
  steps: {
    "chord-demo": {
      text: "Écoute do, mi et sol, l’un après l’autre. Puis écoute les trois en même temps. Ils se fondent en un seul son plein.",
    },
    "several-keys": {
      text: "Des touches jouées ensemble forment un accord. Tu en as déjà joué un : la quinte à vide de la main gauche. Maintenant, tu vas en construire d’autres.",
    },
    "a-third": {
      text: "Joue do et mi ensemble. Ils sont à une tierce l’un de l’autre, donc une touche blanche les sépare. Les doigts 1 et 3 jouent cette tierce.",
    },
    "thirds-up": {
      text: "À toi. Pose le pouce droit sur le do central et joue do et mi ensemble. Puis monte la main vers ré et fa, puis vers mi et sol.",
    },
    "skipped-key": {
      text: "Regarde une tierce sur les touches blanches. Combien de touches blanches y a-t-il entre ses deux touches ?",
      answers: ["Aucune", "Une", "Deux"],
    },
    "thirds-and-fifths": {
      text: "Une quinte s’étend sur cinq touches blanches, comme do et sol. Le pouce et le doigt 5 la jouent. La tierce a un son tendre, et la quinte un son ouvert.",
    },
    "third-then-fifth": {
      text: "Garde le pouce sur do. Joue la tierce do et mi, puis la quinte do et sol. Joue chacune deux fois.",
    },
    "stack-thirds": {
      text: "Maintenant, empile une tierce sur une tierce. Do et mi forment une tierce, et mi et sol la suivante. Ensemble, do, mi et sol forment un accord de trois notes.",
    },
    "triad-demo": {
      text: "Écoute d’abord la tierce do et mi. Puis sol vient se poser au-dessus, et l’accord de trois notes sonne plein.",
    },
    "first-triad": {
      text: "Joue do, mi et sol ensemble avec les doigts 1, 3 et 5. Enfonce les trois touches d’un coup, et joue l’accord deux fois.",
    },
    "which-is-a-triad": {
      text: "Un accord de trois notes empile deux tierces. Quelles trois touches forment un accord de trois notes qui commence sur ré ?",
      answers: ["Ré, mi et fa", "Ré, sol et la", "Ré, fa et la"],
    },
    "triads-up": {
      text: "Garde la position de la main droite. Joue do-mi-sol depuis le do central, puis monte vers ré-fa-la et mi-sol-si, toujours sur les touches blanches. Finis sur do-mi-sol.",
    },
    recap: {
      text: "Bravo. Tu as joué tes premiers accords.",
      points: [
        "Un accord, ce sont plusieurs touches jouées ensemble.",
        "Une tierce saute une touche blanche, et les doigts 1 et 3 la jouent.",
        "Deux tierces empilées forment un accord de trois notes, comme do, mi et sol.",
        "À la main droite, les doigts 1, 3 et 5 jouent un accord de trois notes.",
      ],
    },
  },
};
