/** The boss of *Chords* in English. Its object is the texts' type, which every other locale follows. */
import type { LessonTexts } from "../../model";

export const canonInDRareEn = {
  title: "Boss: Canon in D with both hands",
  steps: {
    intro: {
      text: "Canon in D is in D major, with F♯ and C♯ in its key signature. The bass walks through the same eight chords again and again. Your left hand plays each chord as a low note and a higher one.",
    },
    song: {
      text: "Play Canon in D with both hands, a little slower than written. Near the end, press both keys of each third together.",
    },
  },
} satisfies LessonTexts;

/** The texts' type, which every locale's file of this lesson fills. */
export type CanonInDRareTexts = typeof canonInDRareEn;
