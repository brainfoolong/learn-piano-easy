/** *Mary's first phrase* in English. Its object is the texts' type, which every other locale follows. */
import type { LessonTexts } from "../../model";

export const maryFirstPhraseEn = {
  title: "Mary's first phrase",
  steps: {
    "phrase-demo": {
      text: "Listen to the first half of Mary Had a Little Lamb. It is made of steps, repeated notes and one skip, which you know already.",
    },
    "first-note-quiz": {
      text: "Which note does the tune start on?",
      answers: ["C", "E", "G"],
    },
    "the-fingers": {
      text: "Keep your right hand in C position, with your thumb on middle C. The tune uses four fingers: 1 on C, 2 on D, 3 on E and 5 on G.",
    },
    "g-finger-quiz": {
      text: "Which finger plays G?",
      answers: ["Finger 2", "Finger 3", "Finger 5"],
    },
    "bars-one-two": {
      text: "Play the start: E, D, C, D, then E three times. Your fingers go 3, 2, 1, 2, then 3, 3, 3.",
    },
    "bars-three-four": {
      text: "Now the next part: D three times, then E, then G twice. Your fingers go 2, 2, 2, then 3, 5, 5.",
    },
    "whole-phrase": {
      text: "Play the first phrase of Mary Had a Little Lamb with your right hand, thumb on middle C. Play E D C D E E E, D D D, E G G without stopping.",
    },
    recap: {
      text: "Well done. You played the first half of a real song.",
      points: ["Steps, repeated notes and one skip make this tune.", "A tune is learned in small chunks, then put together.", "Finger numbers tell your hand where to go."],
    },
  },
} satisfies LessonTexts;

/** The texts' type, which every locale's file of this lesson fills. */
export type MaryFirstPhraseTexts = typeof maryFirstPhraseEn;
