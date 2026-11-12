/** The boss of *Reading music* in English. Its object is the texts' type, which every other locale follows. */
import type { LessonTexts } from "../../model";

export const oldMacDonaldEn = {
  title: "Boss: Old MacDonald Had a Farm",
  steps: {
    intro: {
      text: "This time there are no falling notes. You read the song from the sheet music, just as pianists do. It starts on G, the second line.",
    },
    song: {
      text: "Read Old MacDonald from the sheet and play it with your right hand. The song waits for each note.",
    },
  },
} satisfies LessonTexts;

/** The texts' type, which every locale's file of this lesson fills. */
export type OldMacDonaldTexts = typeof oldMacDonaldEn;
