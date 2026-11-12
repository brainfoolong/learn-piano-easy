/** *Whole notes* in English. Its object is the texts' type, which every other locale follows. */
import type { LessonTexts } from "../../model";

export const wholeNotesEn = {
  title: "Whole notes",
  steps: {
    "halves-then-whole-demo": {
      text: "Watch and listen. First come two half notes. Then one note sounds as long as both of them together.",
    },
    "what-a-whole-note-is": {
      text: "A whole note lasts four beats. You play it on the first beat and hold it through the other three. Count \"1-2-3-4\" for each whole note.",
    },
    "whole-beats-quiz": {
      text: "How many beats does a whole note last?",
      answers: ["Two beats", "Three beats", "Four beats"],
    },
    "four-beats-three-ways-demo": {
      text: "Listen to four beats filled three ways. First one whole note, then two half notes, then four quarter notes. Each group takes the same time.",
    },
    "same-as-whole-quiz": {
      text: "What lasts as long as one whole note?",
      answers: ["One half note", "Two half notes", "Two quarter notes"],
    },
    "quarters-in-whole-quiz": {
      text: "How many quarter notes last as long as one whole note?",
      answers: ["Two", "Four", "Eight"],
    },
    "play-and-hold": {
      text: "Put your right hand in C position. Play C, E and G, and hold each key down while you count \"1-2-3-4\". The step waits for each note, so take your time.",
    },
    "count-to-four": {
      text: "Tap any key on every click. Count \"1-2-3-4\" as you tap, two times. Each \"1-2-3-4\" is the length of one whole note.",
    },
    recap: {
      text: "Well done. You know the whole note now.",
      points: ["A whole note lasts four beats.", "You play it, then hold it through three more beats.", "One whole note lasts as long as two half notes or four quarter notes."],
    },
  },
} satisfies LessonTexts;

/** The texts' type, which every locale's file of this lesson fills. */
export type WholeNotesTexts = typeof wholeNotesEn;
