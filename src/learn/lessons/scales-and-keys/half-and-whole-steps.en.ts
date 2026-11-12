/** *Half and whole steps* in English. Its object is the texts' type, which every other locale follows. */
import type { LessonTexts } from "../../model";

export const halfAndWholeStepsEn = {
  title: "Half and whole steps",
  steps: {
    "key-by-key": {
      text: "Listen as the piano climbs from C to E. It plays every key on the way, the black ones too.",
    },
    "half-step": {
      text: "Each move in that climb was a half step. A half step goes to the very next key, black or white, with no key between.",
    },
    "half-step-from-c": {
      text: "Your turn. Play C, then the black key just right of it. Play the pair twice. Each move is a half step.",
    },
    "no-black-key-between": {
      text: "Look at E and F. No black key sits between them. So E to F is a half step, and so is B to C.",
    },
    "white-half-step": {
      text: "Which two white keys are a half step apart?",
      answers: ["C and D", "E and F", "F and G"],
    },
    "e-f-and-b-c": {
      text: "Play E and then F. Then play B and the C above it. Both are half steps between two white keys.",
    },
    "whole-step": {
      text: "Two half steps make a whole step. A whole step skips one key. From C to D is a whole step, because a black key sits between.",
    },
    "whole-and-half": {
      text: "Listen: C to D is a whole step, and D to E is a whole step. Then E to F is only a half step.",
    },
    "whole-steps-from-c": {
      text: "Your turn. Play C, D and E. Each move is a whole step, over a black key.",
    },
    "f-to-g": {
      text: "From F up to G, is that a half step or a whole step?",
      answers: ["A whole step", "A half step"],
    },
    "whole-step-above-e": {
      text: "Press the key a whole step above E. Count two half steps up, and take care: the first one lands on F.",
    },
    recap: {
      text: "Well done. You can now measure the distance between two keys.",
      points: [
        "A half step goes to the very next key, black or white.",
        "E to F and B to C are half steps between white keys.",
        "A whole step is two half steps, with one key between.",
      ],
    },
  },
} satisfies LessonTexts;

/** The texts' type, which every locale's file of this lesson fills. */
export type HalfAndWholeStepsTexts = typeof halfAndWholeStepsEn;
