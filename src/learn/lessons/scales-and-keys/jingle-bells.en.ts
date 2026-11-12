/** The boss of *Scales and keys* in English. Its object is the texts' type, which every other locale follows. */
import type { LessonTexts } from "../../model";

export const jingleBellsEn = {
  title: "Boss: Jingle Bells with both hands",
  steps: {
    intro: {
      text: "Jingle Bells is in C major, so its key signature is empty. The tune walks up and down the steps of the C major scale. Your left hand holds one low note or a fifth in each bar.",
    },
    song: {
      text: "Play Jingle Bells with both hands at full speed. Keep your right hand in C position, and hold each bass note for the whole bar.",
    },
  },
} satisfies LessonTexts;

/** The texts' type, which every locale's file of this lesson fills. */
export type JingleBellsTexts = typeof jingleBellsEn;
