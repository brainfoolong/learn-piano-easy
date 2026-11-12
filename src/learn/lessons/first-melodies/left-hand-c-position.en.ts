/** *Left hand in C position* in English. Its object is the texts' type, which every other locale follows. */
import type { LessonTexts } from "../../model";

export const leftHandCPositionEn = {
  title: "Left hand in C position",
  steps: {
    "left-hand-demo": {
      text: "Listen to five keys below middle C, up and back down. Your left hand plays them in this lesson.",
    },
    "place-left-hand": {
      text: "Find the C one octave below middle C. Put your left little finger, finger 5, on it, and one finger on each key after it. Your thumb, finger 1, rests on G.",
    },
    "c-finger-quiz": {
      text: "Your left hand is in C position. Which finger plays C?",
      answers: ["Finger 1, your thumb", "Finger 3, your middle finger", "Finger 5, your little finger"],
    },
    "find-left-thumb": {
      text: "Keep your hand in place. Press the key under your left thumb.",
    },
    "find-left-middle": {
      text: "Now press the key under finger 3 of your left hand.",
    },
    "up-and-down": {
      text: "Play the five keys up and back down. Count the fingers as you go: 5, 4, 3, 2, 1, then back to 5.",
    },
    "left-steps": {
      text: "Now steps with your left hand, starting on your thumb. Each note moves to the next key.",
    },
    "left-skips-repeats": {
      text: "Skips and repeated notes work in this hand too. Jump over a key, and play a key twice where the marks say so.",
    },
    recap: {
      text: "Well done. Your left hand has its own home on the keys.",
      points: [
        "Your left hand rests on C D E F G, one octave below middle C.",
        "Your little finger, finger 5, plays C, and your thumb plays G.",
        "The numbers run the other way from your right hand.",
      ],
    },
  },
} satisfies LessonTexts;

/** The texts' type, which every locale's file of this lesson fills. */
export type LeftHandCPositionTexts = typeof leftHandCPositionEn;
