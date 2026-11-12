/** *Rests* in English. Its object is the texts' type, which every other locale follows. */
import type { LessonTexts } from "../../model";

export const restsEn = {
  title: "Rests",
  steps: {
    "rests-demo": {
      text: "Watch and listen. On some beats the piano stays silent, but the beat keeps going.",
    },
    "what-a-rest-is": {
      text: "A rest is a silence in the music. You play nothing, but you still count it. A quarter rest lasts one beat, like a quarter note.",
    },
    "quarter-rest-quiz": {
      text: "You play C, C, a quarter rest, then C. How many beats of silence are there?",
      answers: ["One beat", "Two beats", "No beat at all"],
    },
    "half-rest": {
      text: "A half rest lasts two beats, like a half note. You stay silent and count two beats before you play again.",
    },
    "half-rest-quiz": {
      text: "How many beats of silence does a half rest last?",
      answers: ["One beat", "Two beats", "Four beats"],
    },
    "fill-a-bar-quiz": {
      text: "You play a quarter note, then a quarter rest, then a half note. How many beats is that?",
      answers: ["Two beats", "Three beats", "Four beats"],
    },
    "phrase-with-rests": {
      text: "Watch and listen. The piano plays C D E, rests for one beat, then plays E D. It rests for two beats and ends on C.",
    },
    "play-with-rests": {
      text: "Your turn. Play C D E, then count one beat of rest. Play E D, count two beats of rest, and end on C.",
    },
    recap: {
      text: "Well done. You know your first rests now.",
      points: ["A rest is a silence that still counts.", "A quarter rest lasts one beat.", "A half rest lasts two beats."],
    },
  },
} satisfies LessonTexts;

/** The texts' type, which every locale's file of this lesson fills. */
export type RestsTexts = typeof restsEn;
