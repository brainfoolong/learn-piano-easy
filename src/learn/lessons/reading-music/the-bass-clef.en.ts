/** *The bass clef* in English. Its object is the texts' type, which every other locale follows. */
import type { LessonTexts } from "../../model";

export const theBassClefEn = {
  title: "The bass clef",
  steps: {
    "low-notes-demo": {
      text: "Watch and listen. The piano plays C, D, E, F and G below middle C. These are the keys of your left-hand C position.",
    },
    "what-the-bass-clef-is": {
      text: "The treble clef writes the high notes, mostly for your right hand. The bass clef writes the low notes, mostly for your left hand. It looks like a curl with two dots beside it.",
    },
    "low-notes-clef-quiz": {
      text: "Which clef writes the low notes?",
      answers: ["The treble clef", "The bass clef"],
    },
    "the-f-line": {
      text: "The two dots of the bass clef sit above and below the fourth line from the bottom. That line is F, the F below middle C. So the bass clef is also called the F clef.",
    },
    "f-line-quiz": {
      text: "Which line do the two dots of the bass clef sit around?",
      answers: ["The second line from the bottom", "The fourth line from the bottom", "The middle line"],
    },
    "play-bass-f": {
      text: "Here is F on the fourth line. Play it on the keys. In your left-hand C position, finger 2 rests on it.",
    },
    "neighbours-of-f": {
      text: "The space just above F is G. The space just below F is E. One more step down, on the middle line, sits D.",
    },
    "name-bass-notes": {
      text: "Name each note in the bass clef. Press its letter. Start from F on the fourth line and count up or down.",
    },
    recap: {
      text: "Well done. You can read your first notes in the bass clef.",
      points: ["The bass clef writes the low notes, mostly for the left hand.", "Its two dots sit around the fourth line, which is F.", "From F, count up or down to find its neighbours."],
    },
  },
} satisfies LessonTexts;

/** The texts' type, which every locale's file of this lesson fills. */
export type TheBassClefTexts = typeof theBassClefEn;
