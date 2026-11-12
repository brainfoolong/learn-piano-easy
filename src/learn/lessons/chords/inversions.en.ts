/** *Inversions* in English. Its object is the texts' type, which every other locale follows. */
import type { LessonTexts } from "../../model";

export const inversionsEn = {
  title: "Inversions",
  steps: {
    "inversions-demo": {
      text: "Listen to three chords. Each one has the notes C, E and G. Only their order changes.",
    },
    "same-three-notes": {
      text: "C-E-G with C at the bottom is the root position. An inversion plays the same three notes in another order. It is still C major.",
    },
    "root-position": {
      text: "Play C major in root position: C, E and G from middle C, all together. Use fingers 1, 3 and 5.",
    },
    "first-inversion": {
      text: "Now move the bottom note up an octave. C-E-G becomes E-G-C. This is the first inversion.",
    },
    "play-first-inversion": {
      text: "Play the first inversion: E and G above middle C, and the C above them. Press all three together.",
    },
    "which-chord-is-e-g-c": {
      text: "E-G-C sounds a little different from C-E-G. Which chord is it?",
      answers: ["A minor", "E minor", "C major"],
    },
    "second-inversion": {
      text: "Move the bottom note up once more. E-G-C becomes G-C-E. This is the second inversion.",
    },
    "play-second-inversion": {
      text: "Play the second inversion: the G above middle C, then the next C and E above it. Press all three together.",
    },
    "climb-the-inversions": {
      text: "Climb up the keys with C major: root position, first inversion, second inversion, and root position an octave higher.",
    },
    "move-less": {
      text: "Inversions let your hand move less between chords. F major as C-F-A and G major as B-D-G sit right next to C-E-G.",
    },
    "close-chords-demo": {
      text: "Listen to C, F, G and C again, played close together. Each finger moves only one or two keys.",
    },
    "which-chord-is-c-f-a": {
      text: "C-F-A has F, A and C in another order. Which chord is it?",
      answers: ["C major", "F major", "A minor"],
    },
    "close-chords": {
      text: "Play C-E-G, C-F-A, B-D-G and C-E-G, starting on middle C. Keep your hand in one place and let the fingers move.",
    },
    "close-chords-with-bass": {
      text: "Now add the root in your left hand under each chord: C, F, G and C below middle C.",
    },
    recap: {
      text: "Well done. You can now play a chord in three positions.",
      points: [
        "An inversion plays a chord's three notes in another order.",
        "Move the bottom note up an octave: C-E-G becomes E-G-C, then G-C-E.",
        "The chord stays the same: E-G-C and G-C-E are still C major.",
        "Inversions keep chords close, so the hand moves less.",
      ],
    },
  },
} satisfies LessonTexts;

/** The texts' type, which every locale's file of this lesson fills. */
export type InversionsTexts = typeof inversionsEn;
