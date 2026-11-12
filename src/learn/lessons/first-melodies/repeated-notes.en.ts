/** *Repeated notes* in English. Its object is the texts' type, which every other locale follows. */
import type { LessonTexts } from "../../model";

export const repeatedNotesEn = {
  title: "Repeated notes",
  steps: {
    "repeat-demo": {
      text: "Watch and listen. Some notes sound again and again, and the hand does not move.",
    },
    "what-a-repeat-is": {
      text: "A note can repeat. Your finger stays on its key and plays it again. Let the key come back up between the two notes.",
    },
    "same-or-not": {
      text: "You hear two notes each time. Is the second one higher, lower or the same as the first?",
    },
    "repeat-e-d": {
      text: "Put your right hand in C position. Play E three times with finger 3, then D three times with finger 2.",
    },
    "repeat-after-skip": {
      text: "Now a skip, then a repeat. Play E with finger 3, then G twice with finger 5.",
    },
    "how-many-keys-quiz": {
      text: "You play C, C, C. How many keys do you press?",
      answers: ["One key, three times", "Three different keys"],
    },
    "mixed-phrase": {
      text: "This tune has steps, skips and repeats. Keep your hand in C position and follow the marked key.",
    },
    recap: {
      text: "Well done. You can play repeated notes now.",
      points: ["A repeated note plays the same key again.", "Your finger stays on its key and lets it come up.", "A tune can mix steps, skips and repeats."],
    },
  },
} satisfies LessonTexts;

/** The texts' type, which every locale's file of this lesson fills. */
export type RepeatedNotesTexts = typeof repeatedNotesEn;
