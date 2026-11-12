/** *Finger numbers* in English. Its object is the texts' type, which every other locale follows. */
import type { LessonTexts } from "../../model";

export const fingerNumbersEn = {
  title: "Finger numbers",
  steps: {
    "right-hand-numbers": {
      text: "Each finger has a number. On your right hand, your thumb is 1 and your little finger is 5. The fingers between them are 2, 3 and 4.",
    },
    "finger-three-quiz": {
      text: "Which finger is 3?",
      answers: ["Your thumb", "Your middle finger", "Your little finger"],
    },
    "left-hand-numbers": {
      text: "Your left hand counts the same way: the thumb is 1 and the little finger is 5. Both thumbs are 1, so the numbers mirror each other.",
    },
    "left-thumb-quiz": {
      text: "Which number is your left thumb?",
      answers: ["1", "3", "5"],
    },
    "five-fingers-demo": {
      text: "Watch five keys in a row, one for each finger of your right hand. Your thumb plays the first key, then fingers 2, 3, 4 and 5.",
    },
    "right-hand-five": {
      text: "Now you play them. Put your right thumb on middle C and one finger on each white key to its right. Play with fingers 1, 2, 3, 4 and 5.",
    },
    "finger-pattern": {
      text: "Keep your hand where it is. Play the fingers 1, 3, 5, 3, 1.",
    },
    "left-hand-five": {
      text: "Now your left hand. Put your little finger, finger 5, on the marked C. Play up to your thumb: 5, 4, 3, 2, 1.",
    },
    recap: {
      text: "Well done. Your fingers now have numbers.",
      points: ["Your thumb is 1 and your little finger is 5.", "Both hands count the same way, from the thumb.", "A number in a lesson tells you which finger plays."],
    },
  },
} satisfies LessonTexts;

/** The texts' type, which every locale's file of this lesson fills. */
export type FingerNumbersTexts = typeof fingerNumbersEn;
