/** *Quarter notes* in French. */
import type { Translation } from "../../../i18n/translation";
import type { QuarterNotesTexts } from "./quarter-notes.en";

export const quarterNotesFr: Translation<QuarterNotesTexts> = {
  title: "Les noires",
  steps: {
    "quarter-demo": {
      text: "Regarde et écoute. Le do central sonne une fois sur chaque temps, et chaque note dure autant que la suivante.",
    },
    "what-a-quarter-note-is": {
      text: "Chaque note que tu as entendue était une noire. Une noire dure un temps. Tu joues donc une note sur chaque temps.",
    },
    "quarter-beats-quiz": {
      text: "Combien de temps dure une noire ?",
      answers: ["Un temps", "Deux temps", "Quatre temps"],
    },
    "quarter-taps": {
      text: "Chaque appui est une noire. Appuie sur Démarrer, écoute quatre clics, puis appuie une fois sur une touche au choix à chaque clic.",
    },
    "phrase-demo": {
      text: "Voici le début d’un air célèbre. Chaque note est une noire, une sur chaque temps.",
    },
    "quarter-phrase": {
      text: "Pose la main droite en position de do. Joue la mélodie et compte un temps pour chaque note.",
    },
    recap: {
      text: "Bravo. Tu connais maintenant ta première durée de note.",
      points: ["Une noire dure un temps.", "Tu joues une noire sur chaque temps.", "Beaucoup de mélodies sont faites surtout de noires."],
    },
  },
};
