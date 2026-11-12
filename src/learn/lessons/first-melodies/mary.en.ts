/** The boss of *First melodies* in English. Its object is the texts' type, which every other locale follows. */
import type { LessonTexts } from "../../model";

export const maryEn = {
  title: "Boss: Mary Had a Little Lamb",
  steps: {
    intro: {
      text: "This world ends with a whole song. You play it in the player, and it waits for each of your notes.",
    },
    song: {
      text: "Play Mary Had a Little Lamb with your right hand.",
    },
  },
} satisfies LessonTexts;

/** The texts' type, which every locale's file of this lesson fills. */
export type MaryTexts = typeof maryEn;
