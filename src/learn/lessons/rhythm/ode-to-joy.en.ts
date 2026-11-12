/** The boss of *Rhythm* in English. Its object is the texts' type, which every other locale follows. */
import type { LessonTexts } from "../../model";

export const odeToJoyEn = {
  title: "Boss: Ode to Joy",
  steps: {
    intro: {
      text: "This world ends with a famous tune. Most of its notes are quarter notes, and a few last two beats. Count along as you play.",
    },
    song: {
      text: "Play Ode to Joy with your right hand. Try to hold each long note for its two beats.",
    },
  },
} satisfies LessonTexts;

/** The texts' type, which every locale's file of this lesson fills. */
export type OdeToJoyTexts = typeof odeToJoyEn;
