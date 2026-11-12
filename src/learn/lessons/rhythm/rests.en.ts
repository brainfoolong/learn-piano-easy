/** *Rests* in English. Its object is the texts' type, which every other locale follows. */
import type { LessonTexts } from "../../model";

export const restsEn = {
  title: "Rests",
  steps: {
    "rests-demo": {
      text: "Watch and listen. On some beats the piano stays silent, but the beat keeps going.",
    },
    "what-a-rest-is": {
      text: "A rest is a beat of silence. You play nothing, but you still count it. A quarter rest lasts one beat, just like a quarter note.",
    },
    "quarter-rest-quiz": {
      text: "You count C, C, quarter rest, C. How many beats of silence do you count?",
      answers: ["One beat", "Two beats", "No beat at all"],
    },
    "half-rest": {
      text: "A half rest lasts two beats, just like a half note. You stay silent and count two beats before you play again.",
    },
    "half-rest-quiz": {
      text: "How many beats of silence does a half rest last?",
      answers: ["One beat", "Two beats", "Four beats"],
    },
    "fill-a-bar-quiz": {
      text: "You play a quarter note, then a quarter rest, then a half note. How many beats is that?",
      answers: ["Two beats", "Three beats", "Four beats"],
    },
    recap: {
      text: "Well done. You know your first rests now.",
      points: ["A rest is a beat of silence that still counts.", "A quarter rest lasts one beat.", "A half rest lasts two beats."],
    },
  },
} satisfies LessonTexts;

/** The texts' type, which every locale's file of this lesson fills. */
export type RestsTexts = typeof restsEn;
