/** *Half notes* in English. Its object is the texts' type, which every other locale follows. */
import type { LessonTexts } from "../../model";

export const halfNotesEn = {
  title: "Half notes",
  steps: {
    "quarters-then-halves-demo": {
      text: "Watch and listen. First come four short notes, one on each beat. Then each note sounds twice as long.",
    },
    "what-a-half-note-is": {
      text: "A half note lasts two beats. You play it on the first beat and keep holding it through the second. Count \"1-2\" for each half note.",
    },
    "half-beats-quiz": {
      text: "How many beats does a half note last?",
      answers: ["One beat", "Two beats", "Four beats"],
    },
    "play-and-hold": {
      text: "Put your right thumb on middle C. Play C, D, E, D, C, and hold each key down while you count \"1-2\". The step waits for each note, so take your time.",
    },
    "count-one-two": {
      text: "Tap any key on every click. Count \"1-2, 1-2\" as you tap. Each \"1-2\" is the length of one half note.",
    },
    "which-is-longer-quiz": {
      text: "Which note lasts longer?",
      answers: ["A quarter note", "A half note"],
    },
    "halves-in-four-quiz": {
      text: "How many half notes fill four beats?",
      answers: ["One", "Two", "Four"],
    },
    recap: {
      text: "Well done. You know the half note now.",
      points: ["A half note lasts two beats.", "You play it, then hold it through the next beat.", "Two half notes fill four beats."],
    },
  },
} satisfies LessonTexts;

/** The texts' type, which every locale's file of this lesson fills. */
export type HalfNotesTexts = typeof halfNotesEn;
