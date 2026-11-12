/** The boss of *Rhythm* in English. Its object is the texts' type, which every other locale follows. */
import type { LessonTexts } from "../../model";

export const odeToJoyEn = {
  title: "Boss: Ode to Joy",
  steps: {
    intro: {
      text: "This world ends with a famous tune. Almost every note is a quarter note, and the last one lasts two beats. Count along as you play.",
    },
    song: {
      text: "Play the first four bars of Ode to Joy with your right hand. Hold the last note for two beats.",
    },
  },
} satisfies LessonTexts;

/** The texts' type, which every locale's file of this lesson fills. */
export type OdeToJoyTexts = typeof odeToJoyEn;
