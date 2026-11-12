/** *High and low* in English. Its object is the texts' type, which every other locale follows. */
import type { LessonTexts } from "../../model";

export const highAndLowEn = {
  title: "High and low",
  steps: {
    "low-to-high": {
      text: "Listen and watch. The piano plays keys from the left side to the right side.",
    },
    "left-is-low": {
      text: "Did you hear the sound climb? Keys to the left sound lower, and keys to the right sound higher.",
    },
    "wide-listen": {
      text: "You hear two notes. Is the second one higher, lower or the same as the first?",
    },
    "climb-up": {
      text: "Now you climb. Play the marked keys from left to right, and hear the sound go up.",
    },
    "climb-down": {
      text: "And back down. Play the marked keys from right to left, and hear the sound go down.",
    },
    "low-then-high": {
      text: "A big jump: play a low key, a middle key and a high key.",
    },
    "which-way": {
      text: "You move your hand to the right on the keys. What happens to the sound?",
      answers: ["It gets lower", "It gets higher", "It stays the same"],
    },
    "close-listen": {
      text: "Listen closely now: these notes sit right next to each other. Is the second one higher, lower or the same?",
    },
    recap: {
      text: "Well done. You can hear and play high and low.",
      points: ["Keys to the left sound lower.", "Keys to the right sound higher.", "Two notes can also sound the same."],
    },
  },
} satisfies LessonTexts;

/** The texts' type, which every locale's file of this lesson fills. */
export type HighAndLowTexts = typeof highAndLowEn;
