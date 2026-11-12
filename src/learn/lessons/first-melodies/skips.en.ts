/** *Skips* in English. Its object is the texts' type, which every other locale follows. */
import type { LessonTexts } from "../../model";

export const skipsEn = {
  title: "Skips",
  steps: {
    "skip-demo": {
      text: "Watch and listen. Each note jumps over one white key, up and then back down.",
    },
    "what-a-skip-is": {
      text: "A skip jumps over one white key. From C to E, you leave out D. Your thumb plays C, finger 3 plays E, and finger 2 rests.",
    },
    "skip-from-c-quiz": {
      text: "Your thumb is on C. Which key is a skip away?",
      answers: ["D", "E", "F"],
    },
    "skips-up": {
      text: "Put your right hand in C position. Play the skips up: fingers 1 and 3, then 2 and 4, then 3 and 5.",
    },
    "skips-down": {
      text: "Now the same skips back down. Start with finger 5 and follow the marked key.",
    },
    "step-or-skip-quiz": {
      text: "Finger 4 plays F, then finger 5 plays G. Is that a step or a skip?",
      answers: ["A step", "A skip"],
    },
    "mixed-phrase": {
      text: "Put your right hand in C position. This tune mixes steps and a skip: C D E, a skip up to G, then F E D C.",
    },
    recap: {
      text: "Well done. You can play skips now.",
      points: ["A skip jumps over one white key.", "In C position, a skip leaves out one finger.", "A tune can mix steps and skips."],
    },
  },
} satisfies LessonTexts;

/** The texts' type, which every locale's file of this lesson fills. */
export type SkipsTexts = typeof skipsEn;
