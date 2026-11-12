/** *Middle C* in English. Its object is the texts' type, which every other locale follows. */
import type { LessonTexts } from "../../model";

export const middleCEn = {
  title: "Middle C",
  steps: {
    "c-d-e-demo": {
      text: "Watch and listen. The piano plays C, D and E, then back down to C. You will soon read these three notes on the staff.",
    },
    "the-ledger-line": {
      text: "Middle C sits below the treble staff. It has a short line of its own through its middle. This short line is called a ledger line.",
    },
    "where-quiz": {
      text: "Where is middle C written?",
      answers: ["On the bottom line of the staff", "On a short ledger line just below the staff", "In the middle of the staff"],
    },
    "the-c-you-know": {
      text: "This is the C you already know. It sits near the middle of the keyboard, just left of two black keys. Now you can read it, too.",
    },
    "press-middle-c": {
      text: "Press middle C on the keyboard.",
    },
    "name-middle-c": {
      text: "Name each note on the staff. Look for the short ledger line.",
    },
    "the-neighbours": {
      text: "Middle C has two close neighbours. D hangs just below the bottom line. E sits right on the bottom line.",
    },
    "neighbour-quiz": {
      text: "Which note sits on the bottom line of the treble staff?",
      answers: ["C", "D", "E"],
    },
    "name-c-d-e": {
      text: "Name each note: C, D or E. Start from the ledger line and count up.",
    },
    "play-c-d-e": {
      text: "Now play each note you see. Each one is middle C or a close neighbour.",
    },
    recap: {
      text: "Well done. You can read middle C now.",
      points: ["Middle C sits on a short ledger line below the treble staff.", "It is the C near the middle of the keyboard.", "D hangs below the bottom line, and E sits on it."],
    },
  },
} satisfies LessonTexts;

/** The texts' type, which every locale's file of this lesson fills. */
export type MiddleCTexts = typeof middleCEn;
