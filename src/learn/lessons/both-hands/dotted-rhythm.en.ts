/** *The dotted rhythm* in English. Its object is the texts' type, which every other locale follows. */
import type { LessonTexts } from "../../model";

export const dottedRhythmEn = {
  title: "The dotted rhythm",
  steps: {
    "even-and-dotted-demo": {
      text: "Listen to the same notes twice. First they are even quarter notes. Then the first E grows longer, and the D after it gets quicker.",
    },
    "what-a-dot-does": {
      text: "That long note had a dot after it. A dot adds half of the note's own length. So a dotted note lasts one and a half times as long.",
    },
    "dotted-half-demo": {
      text: "A half note lasts two beats, and its dot adds one more. Count \"1, 2, 3\" for each of these dotted half notes.",
    },
    "dotted-half-quiz": {
      text: "How many beats does a dotted half note last?",
      answers: ["Two beats", "Three beats", "Four beats"],
    },
    "dotted-quarter": {
      text: "A quarter note lasts one beat, and its dot adds half a beat. A dotted quarter starts on \"1\" and lasts until \"2 and\". An eighth note on \"2 and\" fills the rest.",
    },
    "dotted-quarter-quiz": {
      text: "How many beats does a dotted quarter note last?",
      answers: ["One beat", "One and a half beats", "Two beats"],
    },
    "partner-quiz": {
      text: "A dotted quarter and one more note fill two beats together. Which note is it?",
      answers: ["A quarter note", "An eighth note", "A half note"],
    },
    "ode-demo": {
      text: "Here is the start of Ode to Joy. Its last bar has the dotted rhythm: a long E, a quick D, then a long D.",
    },
    "ode-phrase": {
      text: "Put your right thumb on middle C and play the tune. Hold the last E a little longer, then play the D after it quickly.",
    },
    recap: {
      text: "Well done. You can play the rhythm of a famous tune now.",
      points: ["A dot adds half of a note's length.", "A dotted half note lasts three beats.", "A dotted quarter lasts one and a half beats.", "An eighth note often follows a dotted quarter."],
    },
  },
} satisfies LessonTexts;

/** The texts' type, which every locale's file of this lesson fills. */
export type DottedRhythmTexts = typeof dottedRhythmEn;
