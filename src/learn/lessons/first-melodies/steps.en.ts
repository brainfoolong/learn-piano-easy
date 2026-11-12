/** *Steps* in English. Its object is the texts' type, which every other locale follows. */
import type { LessonTexts } from "../../model";

export const stepsEn = {
  title: "Steps",
  steps: {
    "steps-demo": {
      text: "Watch a little tune. Each note moves to the key right next to the one before it.",
    },
    "what-a-step-is": {
      text: "A move to the very next white key is called a step. A step can go up or down. In C position, the finger next door plays it.",
    },
    "which-is-a-step": {
      text: "Which of these moves is a step?",
      answers: ["C to D", "C to E", "C to G"],
    },
    "hear-steps": {
      text: "A step up sounds a little higher, and a step down a little lower. Listen to two notes. Is the second one higher, lower or the same?",
    },
    "step-up": {
      text: "Put your right hand in C position. Step up from your thumb to your little finger.",
    },
    "step-down": {
      text: "Now step back down, from your little finger to your thumb.",
    },
    "next-finger-quiz": {
      text: "Finger 3 is on E. Which finger plays a step up from there?",
      answers: ["Finger 2", "Finger 4", "Finger 5"],
    },
    "step-up-and-down": {
      text: "Step all the way up and all the way down again. Follow the marked key.",
    },
    "stepping-tune": {
      text: "Here is a tune made only of steps. Keep each finger on its key and follow the marked key.",
    },
    recap: {
      text: "Well done. You can play a tune made of steps.",
      points: ["A step moves to the very next white key.", "A step goes up or down.", "In C position, the finger next door plays a step."],
    },
  },
} satisfies LessonTexts;

/** The texts' type, which every locale's file of this lesson fills. */
export type StepsTexts = typeof stepsEn;
