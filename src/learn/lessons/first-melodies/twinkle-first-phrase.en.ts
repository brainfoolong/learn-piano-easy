/** *Twinkle's first phrase* in English. Its object is the texts' type, which every other locale follows. */
import type { LessonTexts } from "../../model";

export const twinkleFirstPhraseEn = {
  title: "Twinkle's first phrase",
  steps: {
    "phrase-demo": {
      text: "Listen to the first phrase of Twinkle Twinkle Little Star. One note in it lies past C position.",
    },
    "one-key-past": {
      text: "That note is A, the white key right after G. Your hand stays in C position. Your little finger stretches one key to the right to play A.",
    },
    "find-a": {
      text: "Put your thumb on middle C. Stretch your little finger past G and press A.",
    },
    "leap-quiz": {
      text: "The tune starts on C, then makes a big leap up. Which note does it leap to?",
      answers: ["D", "E", "G"],
    },
    "climb-up": {
      text: "Play the first part: C twice, G twice, A twice, then G. Your thumb plays both Cs, and your little finger plays the rest, stretching to A and back.",
    },
    "walk-down": {
      text: "Now the second part walks down in steps: F, E, D and C, each twice. Your fingers go 4, 3, 2 and 1.",
    },
    "whole-phrase": {
      text: "Put the two parts together. Play the whole phrase without stopping.",
    },
    recap: {
      text: "Well done. You reached past your five fingers for the first time.",
      points: ["A tune can leave the C position for one note.", "Your little finger stretches from G to A.", "A tune can leap, as from C up to G."],
    },
  },
} satisfies LessonTexts;

/** The texts' type, which every locale's file of this lesson fills. */
export type TwinkleFirstPhraseTexts = typeof twinkleFirstPhraseEn;
