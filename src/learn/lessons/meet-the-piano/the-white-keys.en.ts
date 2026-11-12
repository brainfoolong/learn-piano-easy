/** *The white keys* in English. Its object is the texts' type, which every other locale follows. */
import type { LessonTexts } from "../../model";

export const theWhiteKeysEn = {
  title: "The white keys",
  steps: {
    "c-to-c": {
      text: "Listen and watch. The piano plays every white key from middle C up to the next C.",
    },
    "seven-letters": {
      text: "The white keys are named with seven letters: C D E F G A B. After B, the letters start again at C. The black keys show you where each letter is.",
    },
    "find-d": {
      text: "D sits between the two black keys of a group of two. Find a D.",
    },
    "find-e": {
      text: "E is the white key just right of a group of two black keys. Find an E.",
    },
    "find-f": {
      text: "F is the white key just left of a group of three black keys. Find an F.",
    },
    "find-g": {
      text: "G sits between the first and the second black key of a group of three. Find a G.",
    },
    "find-a": {
      text: "A sits between the second and the third black key of a group of three. Find an A.",
    },
    "find-b": {
      text: "B is the white key just right of a group of three black keys. Find a B.",
    },
    "play-c-to-c": {
      text: "Now play all the white keys from middle C up to the next C. Say each letter as you play it.",
    },
    "letters-quiz": {
      text: "Which letter comes after B on the white keys?",
      answers: ["A", "C", "D"],
    },
    recap: {
      text: "Well done. You know the name of every white key.",
      points: ["The white keys are named C D E F G A B.", "After B, the letters start again at C.", "The groups of two and three black keys show you where each letter is."],
    },
  },
} satisfies LessonTexts;

/** The texts' type, which every locale's file of this lesson fills. */
export type TheWhiteKeysTexts = typeof theWhiteKeysEn;
