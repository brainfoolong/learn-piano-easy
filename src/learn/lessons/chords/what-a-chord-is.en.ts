/** *What a chord is* in English. Its object is the texts' type, which every other locale follows. */
import type { LessonTexts } from "../../model";

export const whatAChordIsEn = {
  title: "What a chord is",
  steps: {
    "chord-demo": {
      text: "Listen to C, E and G, one after another. Then hear all three at once. They blend into one full sound.",
    },
    "several-keys": {
      text: "Keys pressed together make a chord. You already played one: the open fifth in your left hand. Now you build more.",
    },
    "a-third": {
      text: "Press C and E together. They are a third apart, so one white key lies between them. Fingers 1 and 3 play it.",
    },
    "thirds-up": {
      text: "Your turn. Put your right thumb on middle C and play C and E together. Then move your hand up to D and F, and to E and G.",
    },
    "skipped-key": {
      text: "Look at a third on the white keys. How many white keys lie between its two keys?",
      answers: ["None", "One", "Two"],
    },
    "thirds-and-fifths": {
      text: "A fifth spans five white keys, like C and G. Thumb and finger 5 play it. The third sounds sweet, and the fifth sounds open.",
    },
    "third-then-fifth": {
      text: "Keep your thumb on C. Play the third C and E, then the fifth C and G. Play both twice.",
    },
    "stack-thirds": {
      text: "Now stack a third on a third. C and E is one third, and E and G is the next. Together C, E and G make a triad.",
    },
    "triad-demo": {
      text: "Hear the third C and E first. Then G joins on top, and the triad sounds full.",
    },
    "first-triad": {
      text: "Play C, E and G together with fingers 1, 3 and 5. Press all three at once, and play the triad twice.",
    },
    "which-is-a-triad": {
      text: "A triad stacks two thirds. Which three keys make a triad that starts on D?",
      answers: ["D, E and F", "D, G and A", "D, F and A"],
    },
    "triads-up": {
      text: "Keep the shape of your right hand. Play C-E-G from middle C, then move up to D-F-A and E-G-B, all on white keys. End on C-E-G.",
    },
    recap: {
      text: "Well done. You played your first chords.",
      points: [
        "A chord is several keys pressed together.",
        "A third skips one white key, and fingers 1 and 3 play it.",
        "Two thirds stacked make a triad, such as C, E and G.",
        "Fingers 1, 3 and 5 play a triad in the right hand.",
      ],
    },
  },
} satisfies LessonTexts;

/** The texts' type, which every locale's file of this lesson fills. */
export type WhatAChordIsTexts = typeof whatAChordIsEn;
