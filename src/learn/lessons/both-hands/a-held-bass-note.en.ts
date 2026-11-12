/** *A held bass note* in English. Its object is the texts' type, which every other locale follows. */
import type { LessonTexts } from "../../model";

export const aHeldBassNoteEn = {
  title: "A held bass note",
  steps: {
    "bass-under-tune": {
      text: "Listen and watch. Your left hand plays one long low note, and your right hand plays a tune above it.",
    },
    "hold-it": {
      text: "This long low note is a bass note. Your left hand plays it as a whole note and keeps the key down for four beats.",
    },
    "let-go-quiz": {
      text: "Your left hand holds a whole note under four quarter notes in your right hand. When does it let go?",
      answers: ["After the fourth quarter note", "After the first quarter note", "Straight away"],
    },
    "first-bar": {
      text: "Press the left C and middle C together. Hold the left C down while your right hand plays D E F.",
    },
    "both-bars": {
      text: "Now two bars. After F, your left hand moves to G and holds it while your right hand plays G F E D.",
    },
    "half-bass": {
      text: "A bass note can also be a half note. It lasts two beats, so the bass changes twice in every bar.",
    },
    "half-note-bass": {
      text: "Listen to a bass of half notes. Each bass note sounds under two notes of the tune.",
    },
    "half-bass-quiz": {
      text: "Your left hand holds a half note. How many quarter notes does your right hand play over it?",
      answers: ["One", "Two", "Four"],
    },
    "half-bass-tune": {
      text: "Your turn. Play each bass note with the tune's note above it, and hold it while the next tune note sounds.",
    },
    recap: {
      text: "Well done. Your left hand now carries a tune.",
      points: [
        "Your left hand can play one long bass note under a moving tune.",
        "Press the bass with the tune's note, then hold it down.",
        "A whole note bass lasts four beats, and a half note bass two.",
      ],
    },
  },
} satisfies LessonTexts;

/** The texts' type, which every locale's file of this lesson fills. */
export type AHeldBassNoteTexts = typeof aHeldBassNoteEn;
