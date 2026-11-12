/** *Flats* in English. Its object is the texts' type, which every other locale follows. */
import type { LessonTexts } from "../../model";

export const flatsEn = {
  title: "Flats",
  steps: {
    "flat-sound": {
      text: "Listen to B, then to the black key just left of it. Then hear E, and the black key just left of E.",
    },
    "what-a-flat-is": {
      text: "This sign is a flat: ♭. A flat lowers a note by a half step. You play the very next key on its left.",
    },
    "find-b-flat": {
      text: "Find B flat, written B♭. Start on B and move one key to the left.",
    },
    "find-e-flat": {
      text: "Now find E flat, written E♭. It is the black key just left of E.",
    },
    "which-is-e-flat": {
      text: "Which key is E♭?",
      answers: ["The white key D", "The black key right of E", "The black key left of E"],
    },
    "hear-flats": {
      text: "A flat sounds a little lower. Listen to two notes. Is the second one higher, lower or the same?",
    },
    "two-names": {
      text: "C sharp raises C to the black key on its right. D flat lowers D to the black key on its left. That is the same key, so it has two names.",
    },
    "other-name-quiz": {
      text: "C♯ and one flat are the same black key. Which flat is it?",
      answers: ["D♭", "B♭", "E♭"],
    },
    "half-steps-down": {
      text: "Your turn. Play B, B♭ and A, then E, E♭ and D. Each note is a half step below the one before.",
    },
    recap: {
      text: "Well done. You know what a flat is.",
      points: [
        "A flat ♭ lowers a note by a half step.",
        "B♭ is the black key left of B, and E♭ the black key left of E.",
        "One black key can have two names: C♯ is also D♭.",
      ],
    },
  },
} satisfies LessonTexts;

/** The texts' type, which every locale's file of this lesson fills. */
export type FlatsTexts = typeof flatsEn;
