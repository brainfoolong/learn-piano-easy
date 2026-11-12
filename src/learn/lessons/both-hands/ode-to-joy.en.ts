/** The boss of *Both hands* in English. Its object is the texts' type, which every other locale follows. */
import type { LessonTexts } from "../../model";

export const odeToJoyBothHandsEn = {
  title: "Boss: Ode to Joy with both hands",
  steps: {
    intro: {
      text: "You know this tune from the Rhythm world. Now your left hand joins in, in C position below the tune.",
    },
    song: {
      text: "Play the first eight bars of Ode to Joy with both hands. Hold each pair of bass keys until the next one comes. The song waits for you.",
    },
  },
} satisfies LessonTexts;

/** The texts' type, which every locale's file of this lesson fills. */
export type OdeToJoyBothHandsTexts = typeof odeToJoyBothHandsEn;
