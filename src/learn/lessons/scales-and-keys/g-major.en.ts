/** *G major* in English. Its object is the texts' type, which every other locale follows. */
import type { LessonTexts } from "../../model";

export const gMajorEn = {
  title: "G major",
  steps: {
    "g-scale-demo": {
      text: "Listen to a scale that starts on G. It sounds just as bright as C major. One key on the way is black.",
    },
    "pattern-from-g": {
      text: "Start the scale pattern on G: whole, whole, half, whole, whole. That gives G, A, B, C, D and E. So far every key is white.",
    },
    "whole-step-above-e": {
      text: "From E, the pattern asks for a whole step. Which key is a whole step above E?",
      answers: ["F♯", "F", "G"],
    },
    "one-sharp": {
      text: "So the G major scale plays F♯ instead of F. From F♯, a half step takes you to the top G. G major has one sharp: F♯.",
    },
    "find-f-sharp": {
      text: "Find F♯ on the keys. It is the black key just right of F.",
    },
    "same-fingering": {
      text: "Your right hand plays G major like C major. Fingers 1, 2 and 3 play G, A and B. The thumb goes under to C, then 1, 2, 3, 4, 5 play C, D, E, F♯ and G.",
    },
    "g-scale-up": {
      text: "Your turn. Put your right thumb on the G above middle C, and play the scale up. Finger 4 plays F♯.",
    },
    "g-scale-down": {
      text: "Now play it down, from the high G to G. Finger 3 crosses over the thumb onto B.",
    },
    "hear-f-and-f-sharp": {
      text: "F♯ is only a half step above F, so listen closely. Is the second key higher, lower or the same?",
    },
    "g-tune-demo": {
      text: "Here is a short tune in G major. Your left hand holds the fifth G and D, and your right hand plays F♯.",
    },
    "g-tune": {
      text: "Put your right thumb on the D above middle C, so finger 3 rests on F♯. Play the fifth G and D with the first G, and again with the second.",
    },
    recap: {
      text: "Well done. You play your second scale.",
      points: [
        "The major scale pattern can start on any key.",
        "Started on G, it needs F♯ to keep the half step below the top.",
        "G major has one sharp: F♯.",
        "Its fingering is the same as C major's.",
      ],
    },
  },
} satisfies LessonTexts;

/** The texts' type, which every locale's file of this lesson fills. */
export type GMajorTexts = typeof gMajorEn;
