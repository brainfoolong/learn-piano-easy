/** *Find C* in English. Its object is the texts' type, which every other locale follows. */
import type { LessonTexts } from "../../model";

export const findCEn = {
  title: "Find C",
  steps: {
    "hear-cs": {
      text: "Listen and watch. The piano plays four keys from low to high. They all have the same name: C.",
    },
    "c-rule": {
      text: "Look for a group of two black keys. The white key just left of it is a C. Every group of two has a C beside it.",
    },
    "find-any-c": {
      text: "Find a C anywhere on the piano. Look for two black keys, then take the white key on their left.",
    },
    "middle-c": {
      text: "The C near the middle of the piano has its own name: middle C. Many songs start from it, so you will meet it often.",
    },
    "find-middle-c": {
      text: "Now press middle C, the C closest to the middle of the piano.",
    },
    "find-high-c": {
      text: "Find the next C to the right of middle C. It sounds higher.",
    },
    "find-low-c": {
      text: "Now find the C just to the left of middle C. It sounds lower.",
    },
    "cs-low-to-high": {
      text: "Play four Cs from low to high, starting at the C just below middle C. Each time, look for the next group of two black keys to the right.",
    },
    "c-quiz": {
      text: "Where is C?",
      answers: ["Just right of a group of two black keys", "Just left of a group of two black keys", "Just left of a group of three black keys"],
    },
    recap: {
      text: "Well done. You can find C anywhere on the piano.",
      points: ["C is the white key just left of each group of two black keys.", "The piano has a C in every part, from low to high.", "The C near the middle is called middle C."],
    },
  },
} satisfies LessonTexts;

/** The texts' type, which every locale's file of this lesson fills. */
export type FindCTexts = typeof findCEn;
