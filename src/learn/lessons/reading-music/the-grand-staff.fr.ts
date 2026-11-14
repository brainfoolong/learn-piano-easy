/** *The grand staff* in French. */
import type { Translation } from "../../../i18n/translation";
import type { TheGrandStaffTexts } from "./the-grand-staff.en";

export const theGrandStaffFr: Translation<TheGrandStaffTexts> = {
  title: "La double portée",
  steps: {
    "climb-demo": {
      text: "Écoute. Le piano monte du do grave jusqu’au do aigu, en passant par le do central. Ce chemin traverse les deux portées que tu connais.",
    },
    "two-staves": {
      text: "La musique pour piano superpose deux portées, reliées à gauche par une accolade. Ensemble, elles forment la double portée. La portée en clef de sol est en haut, et la portée en clef de fa en bas.",
    },
    "which-hand-quiz": {
      text: "Quelle main lit en général la portée du haut, en clef de sol ?",
      answers: ["La main droite", "La main gauche"],
    },
    "middle-c-between": {
      text: "Le do central se place sur une petite ligne supplémentaire entre les deux portées. Il appartient aux deux. Chaque portée peut l’écrire, et c’est la même touche.",
    },
    "middle-c-quiz": {
      text: "Où se trouve le do central sur la double portée ?",
      answers: [
        "Sur la ligne du haut de la portée en clef de sol",
        "Sur une ligne supplémentaire entre les deux portées",
        "Sur la ligne du bas de la portée en clef de fa",
      ],
    },
    "treble-names": {
      text: "Voici la portée en clef de sol. Nomme chaque note.",
    },
    "bass-names": {
      text: "Maintenant, la portée en clef de fa. Nomme chaque note.",
    },
    "low-c-staff-quiz": {
      text: "La main gauche joue le do grave. Sur quelle portée le trouves-tu ?",
      answers: ["Sur la portée en clef de sol", "Sur la portée en clef de fa"],
    },
    "bass-play": {
      text: "Lis chaque note de la portée en clef de fa et joue-la à la main gauche.",
    },
    "treble-play": {
      text: "Lis chaque note de la portée en clef de sol et joue-la à la main droite.",
    },
    recap: {
      text: "Bravo. Tu sais maintenant lire la double portée.",
      points: [
        "La double portée relie une portée en clef de sol et une portée en clef de fa par une accolade.",
        "La main droite lit surtout la portée en clef de sol, et la main gauche celle en clef de fa.",
        "Le do central se place sur une ligne supplémentaire entre les deux, et appartient aux deux.",
      ],
    },
  },
};
