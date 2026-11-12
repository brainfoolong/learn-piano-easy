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
      text: "For G, use G7: G major with an F added on top. Leave out its G and play B, D and F. They lie close to C, E and G, so your hand barely moves.",
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
      text: "Put your right thumb on middle C. Play each tune note together with the low bass note under it.",
    },
    "d-major-demo": {
      text: "The boss, Canon in D, is in D major. Its key signature has two sharps, on F and on C, so every F is F♯ and every C is C♯. Listen to the D major scale.",
    },
    "two-sharps": {
      text: "The key signature shows two sharps, on F and on C. Which keys do you play for F and C?",
      answers: ["F♯ and C♯, the black keys", "F and C, the white keys", "F♯ only, and C stays white"],
    },
    "d-major-scale": {
      text: "Your turn. Put your right thumb on the D above middle C, and play the scale up and down with the fingering of C major.",
    },
    "canon-bass-demo": {
      text: "Listen to the boss's left hand: finger 5 plays a low note, and the thumb a higher one. Then the hand jumps to the next pair, such as from A down to the A an octave lower. It ends on a D major chord.",
    },
    "canon-bass": {
      text: "Your turn. Put finger 5 on the D below middle C, play each pair, and move the hand to the next one. The lowest note is the second D below middle C.",
    },
    "left-d-major": {
      text: "The boss ends on D major in the left hand. Put finger 5 on the D below middle C, and play D, F♯ and A one by one, then together.",
    },
    "black-key-thirds-demo": {
      text: "Near its end, the boss's right hand plays the tune in thirds. Three of these four thirds have a black key: F♯ or C♯.",
    },
    "black-key-thirds": {
      text: "Your turn. Put finger 3 on the second D above middle C, and finger 5 on the F♯ above it. Press both keys of each third as one, and walk down.",
    },
    recap: {
      text: "Well done. You can now play the Alberti bass.",
      points: [
        "The Alberti bass breaks a chord low, high, middle, high.",
        "It runs in eighths, with fingers 5, 1, 3, 1.",
        "G7 and F in second inversion keep the hand close to C.",
        "D major has two sharps in its key signature: F♯ and C♯.",
      ],
    },
  },
} satisfies LessonTexts;

/** The texts' type, which every locale's file of this lesson fills. */
export type AlbertiBassTexts = typeof albertiBassEn;
