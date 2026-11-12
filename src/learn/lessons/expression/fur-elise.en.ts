/** The boss of *Expression* in English. Its object is the texts' type, which every other locale follows. */
import type { LessonTexts } from "../../model";

export const furEliseRareEn = {
  title: "Boss: Für Elise with both hands",
  steps: {
    intro: {
      text: "Für Elise is in A minor, so it sounds a little sad. The left hand breaks each chord upwards, and the right hand carries on the climb. Play it softly and smoothly.",
    },
    song: {
      text: "Play Für Elise with both hands, a little slower than written. In each rest, move your right thumb down to middle C.",
    },
  },
} satisfies LessonTexts;

/** The texts' type, which every locale's file of this lesson fills. */
export type FurEliseRareTexts = typeof furEliseRareEn;
