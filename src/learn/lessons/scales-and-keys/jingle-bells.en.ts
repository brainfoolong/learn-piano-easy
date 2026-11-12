/** The boss of *Scales and keys* in English. Its object is the texts' type, which every other locale follows. */
import type { LessonTexts } from "../../model";

export const jingleBellsRareEn = {
  title: "Boss: Jingle Bells with both hands",
  steps: {
    intro: {
      text: "Jingle Bells is in C major, so its key signature is empty. The tune walks up and down the steps of the C major scale. Your left hand plays chords below it.",
    },
    song: {
      text: "Play Jingle Bells with both hands, a little slower than written. Count the long C in bar 3, and let the D come in late.",
    },
  },
} satisfies LessonTexts;

/** The texts' type, which every locale's file of this lesson fills. */
export type JingleBellsRareTexts = typeof jingleBellsRareEn;
