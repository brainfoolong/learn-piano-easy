/** *The Alberti bass* in English. Its object is the texts' type, which every other locale follows. */
import type { LessonTexts } from "../../model";

export const albertiBassEn = {
  title: "The Alberti bass",
  steps: {
    "alberti-demo": {
      text: "Listen to the left hand alone. It breaks each chord into a quick, rippling pattern. Mozart used it often.",
    },
    "what-alberti-is": {
      text: "This broken chord is called the Alberti bass. It plays the chord's notes low, high, middle, high, in eighths.",
    },
    "pattern-order": {
      text: "In which order does the Alberti bass play a chord's notes?",
      answers: ["Low, middle, high, middle", "High, middle, low, middle", "Low, high, middle, high"],
    },
    "five-one-three-one": {
      text: "Your left hand plays it with fingers 5, 1, 3, 1. Finger 5 takes the low note, the thumb the high one and finger 3 the middle.",
    },
    "c-alberti": {
      text: "Your turn on C. Put finger 5 on the C below middle C. Play C, G, E, G twice, evenly.",
    },
    "g7-shape": {
      text: "For G, play B, F and D, the notes of G7 without G. They lie close to C, E and G, so your hand barely moves.",
    },
    "g7-alberti": {
      text: "Move finger 5 down to B. Play B, F, D, F twice with fingers 5, 1, 3, 1.",
    },
    "f-second-inversion": {
      text: "For F, play the chord in second inversion: C, F and A. Finger 5 stays on C. The pattern is C, A, F, A.",
    },
    "thumb-on-f": {
      text: "In the Alberti bass on F, which key does your thumb play?",
      answers: ["C", "A", "F"],
    },
    "f-alberti": {
      text: "Keep finger 5 on C. Play C, A, F, A twice with fingers 5, 1, 3, 1.",
    },
    "change-chords": {
      text: "Play the pattern once each on C, F, G7 and C. Keep the eighths even as you change.",
    },
    "alberti-tune-demo": {
      text: "Here is a short tune over the Alberti bass. The right hand plays half notes while the left hand ripples on.",
    },
    "alberti-tune": {
      text: "Put your right thumb on middle C. Play each tune note together with the low bass note beside it.",
    },
    recap: {
      text: "Well done. You play the Alberti bass.",
      points: [
        "The Alberti bass breaks a chord low, high, middle, high.",
        "It runs in eighths, with fingers 5, 1, 3, 1.",
        "G7 and F in second inversion keep the hand close to C.",
      ],
    },
  },
} satisfies LessonTexts;

/** The texts' type, which every locale's file of this lesson fills. */
export type AlbertiBassTexts = typeof albertiBassEn;
