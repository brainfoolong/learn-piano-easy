/** *Major triads* in English. Its object is the texts' type, which every other locale follows. */
import type { LessonTexts } from "../../model";

export const majorTriadsEn = {
  title: "Major triads",
  steps: {
    "major-demo": {
      text: "Listen to four triads: C, F, G and C again. Each one sounds bright and happy. They are major triads.",
    },
    "count-the-steps": {
      text: "Count the half steps in C, E and G. Every key counts, the black ones too. From E up to G is three half steps.",
    },
    "half-steps-c-to-e": {
      text: "Now count from C up to E. How many half steps is that?",
      answers: ["Two", "Three", "Four"],
    },
    "major-recipe": {
      text: "That is the recipe for a major triad. Start on its root. Go four half steps up, then three more.",
    },
    "right-hand-fingers": {
      text: "Your right hand plays a triad with fingers 1, 3 and 5. The thumb plays the root.",
    },
    "c-major-triad": {
      text: "Put your right thumb on middle C. Play C, E and G one by one, then all three together.",
    },
    "f-major-triad": {
      text: "Move your thumb up to F. Four half steps up is A, and three more is C. Play them one by one, then together.",
    },
    "g-major-triad": {
      text: "Now move your thumb to G. The recipe gives G, B and D. Play them one by one, then together.",
    },
    "four-up-from-d": {
      text: "Start on D and count four half steps up. Which key do you land on?",
      answers: ["F♯", "F", "G"],
    },
    "find-f-sharp": {
      text: "So D major needs a black key. Find F♯, the black key just right of F.",
    },
    "d-major-triad": {
      text: "Put your thumb on D, and finger 3 rests on F♯. Play D, F♯ and A one by one, then together.",
    },
    "left-hand-fingers": {
      text: "Your left hand plays a triad with fingers 5, 3 and 1. Finger 5 plays the root, and the thumb plays the top key.",
    },
    "left-c-major": {
      text: "Put your left finger 5 on the C below middle C. Play C, E and G one by one, then together.",
    },
    "chord-walk-demo": {
      text: "Here are C, F, G and C major in a row. The hand keeps its shape and moves as a whole.",
    },
    "chord-walk": {
      text: "Your turn. Play the four triads with your right hand. Keep the shape, and move it from root to root.",
    },
    recap: {
      text: "Well done. You build major triads on any key.",
      points: [
        "A major triad starts on its root.",
        "Its middle key is four half steps up, and its top key three more.",
        "C, F and G major use white keys only, and D major needs F♯.",
        "The right hand plays 1, 3 and 5, and the left hand plays 5, 3 and 1.",
      ],
    },
  },
} satisfies LessonTexts;

/** The texts' type, which every locale's file of this lesson fills. */
export type MajorTriadsTexts = typeof majorTriadsEn;
