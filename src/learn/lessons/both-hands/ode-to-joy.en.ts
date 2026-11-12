/** The boss of *Both hands* in English. Its object is the texts' type, which every other locale follows. */
import type { LessonTexts } from "../../model";

export const odeToJoyRareEn = {
  title: "Boss: Ode to Joy with both hands",
  steps: {
    intro: {
      text: "You know this tune from the Rhythm world. Now it moves to D major and gets its real rhythm, with the dotted note in bar 4. Your left hand holds notes and chords below it.",
    },
    song: {
      text: "Play Ode to Joy with both hands, a little slower than written. Hold each bass note until the next one comes.",
    },
  },
} satisfies LessonTexts;

/** The texts' type, which every locale's file of this lesson fills. */
export type OdeToJoyRareTexts = typeof odeToJoyRareEn;
