/** The boss of *First melodies* in English. Its object is the texts' type, which every other locale follows. */
import type { LessonTexts } from "../../model";

export const maryEn = {
  title: "Boss: Mary Had a Little Lamb",
  steps: {
    intro: {
      text: "This world ends with the first four bars of a real song. You play them in the player, and it waits for each of your notes.",
    },
    song: {
      text: "Play the first four bars of Mary Had a Little Lamb with your right hand. The player waits for each note.",
    },
  },
} satisfies LessonTexts;

/** The texts' type, which every locale's file of this lesson fills. */
export type MaryTexts = typeof maryEn;
