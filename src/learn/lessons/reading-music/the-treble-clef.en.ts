/** *The treble clef* in English. Its object is the texts' type, which every other locale follows. */
import type { LessonTexts } from "../../model";

export const theTrebleClefEn = {
  title: "The treble clef",
  steps: {
    "a-clef-starts-the-staff": {
      text: "Every staff starts with a clef. The clef tells you which note each line and space is. Your right hand mostly reads the treble clef.",
    },
    "the-g-line": {
      text: "The treble clef curls around the second line from the bottom. That line is G, so the clef is also called the G clef. It is the first G above middle C.",
    },
    "g-line-quiz": {
      text: "Which line does the treble clef curl around?",
      answers: ["The bottom line", "The second line from the bottom", "The top line"],
    },
    "hear-g-demo": {
      text: "Listen. This is the G on the second line, played twice.",
    },
    "play-g": {
      text: "This note sits on the G line. Play it on the piano.",
    },
    "g-neighbours": {
      text: "From G you can find its neighbours. One step up, in the space above, is A. One step down, in the space below, is F.",
    },
    "neighbours-demo": {
      text: "Watch and listen: G, a step up to A, back to G, a step down to F, and back to G.",
    },
    "space-above-g-quiz": {
      text: "A note sits in the space just above the G line. Which note is it?",
      answers: ["F", "A", "B"],
    },
    "one-more-step": {
      text: "Keep stepping through the letters. Above A comes B, on the middle line. Below F comes E, on the bottom line.",
    },
    "middle-line-quiz": {
      text: "Which note sits on the middle line of the treble clef?",
      answers: ["G", "A", "B"],
    },
    "play-treble-notes": {
      text: "Play each note you see. Find the G line first, then count the steps up or down.",
    },
    "name-treble-notes": {
      text: "Now name each note. Start from the G line and step up or down to it.",
    },
    recap: {
      text: "Well done. You can read your first notes in the treble clef.",
      points: ["The treble clef curls around the second line, which is G.", "One step up or down moves to the next line or space, and the next letter.", "Around G sit E, F, A and B."],
    },
  },
} satisfies LessonTexts;

/** The texts' type, which every locale's file of this lesson fills. */
export type TheTrebleClefTexts = typeof theTrebleClefEn;
