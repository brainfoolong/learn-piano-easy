/** *Minor triads* in English. Its object is the texts' type, which every other locale follows. */
import type { LessonTexts } from "../../model";

export const minorTriadsEn = {
  title: "Minor triads",
  steps: {
    "major-then-minor": {
      text: "Listen to two chords on C. The first is C major and sounds bright. The second is C minor and sounds darker.",
    },
    "thirds-swap": {
      text: "In a major triad, the lower third is a major third: four half steps. The upper one is a minor third. A minor triad swaps them, so the minor third comes first.",
    },
    "minor-third-size": {
      text: "A major third is four half steps. How many half steps make a minor third?",
      answers: ["Four", "Three", "Two"],
    },
    "lower-the-middle": {
      text: "So you turn a major triad into minor with one move. Lower its middle note by a half step. C, E and G become C, E♭ and G.",
    },
    "find-e-flat": {
      text: "Find E♭ on the keys. It is the black key just left of E.",
    },
    "c-major-to-minor": {
      text: "Your turn. Play C major with fingers 1, 3 and 5 from middle C. Then slide finger 3 down to E♭ for C minor, and play both twice.",
    },
    "hear-the-middle-drop": {
      text: "Between major and minor, only the middle note moves a half step. Is the second key higher, lower or the same?",
    },
    "white-key-minors": {
      text: "Three minor triads use white keys only. A minor is A-C-E, D minor is D-F-A, and E minor is E-G-B.",
    },
    "a-minor": {
      text: "Put your right thumb on the A below middle C. Play A minor twice: A, C and E together.",
    },
    "d-and-e-minor": {
      text: "Now move your hand. Play D minor from the D above middle C, then E minor one white key higher, then D minor again.",
    },
    "g-major-to-minor": {
      text: "G major is G, B and D. Which note do you lower to play G minor?",
      answers: ["B", "G", "D"],
    },
    "major-minor-pairs": {
      text: "Play D major with F♯, then D minor with F. Then play G major with B, and G minor with B♭.",
    },
    recap: {
      text: "Well done. You can now play major and minor triads.",
      points: [
        "A minor triad stacks a minor third, then a major third.",
        "Lower the middle note of a major triad to make it minor.",
        "Major sounds bright, and minor sounds darker.",
        "A, D and E minor use white keys only.",
      ],
    },
  },
} satisfies LessonTexts;

/** The texts' type, which every locale's file of this lesson fills. */
export type MinorTriadsTexts = typeof minorTriadsEn;
