/** *Broken chords* in English. Its object is the texts' type, which every other locale follows. */
import type { LessonTexts } from "../../model";

export const brokenChordsEn = {
  title: "Broken chords",
  steps: {
    "broken-demo": {
      text: "Listen to C major played one note at a time. It goes up and comes back down. You still hear the chord.",
    },
    "one-after-another": {
      text: "A broken chord plays a chord's notes one after another instead of together. The notes are the same, so the chord is too.",
    },
    "chord-together": {
      text: "First play C major together: C, E and G from middle C, with fingers 1, 3 and 5.",
    },
    "broken-up": {
      text: "Now break it. Keep your hand in place and play C, then E, then G.",
    },
    "which-chord-broken": {
      text: "You played C, E and G one at a time. Which chord did you play?",
      answers: ["F major", "C major", "A minor", "G major"],
    },
    "up-and-down": {
      text: "A broken chord often goes up and back down: C, E, G, E. Played again and again, it rocks like a wave.",
    },
    "broken-up-and-down": {
      text: "Play C, E, G, E twice, and end on C. Let your hand stay still while the fingers rock.",
    },
    "three-chords-broken": {
      text: "Break three chords with your right hand, starting on middle C: C-E-G-E, F-A-C-A and G-B-D-B. End on C, E and G. Move your hand with each chord.",
    },
    "which-is-broken": {
      text: "Which of these is a broken C major chord?",
      answers: ["C-D-E-F", "C-D-C-D", "E-F-G-A", "C-E-G-E"],
    },
    "left-hand-broken": {
      text: "The left hand often plays a broken chord under a tune. It keeps the chord sounding while the right hand sings.",
    },
    "left-hand-demo": {
      text: "Listen to a short tune. The left hand breaks C major, then G major, then C major again.",
    },
    "left-hand-alone": {
      text: "Play the left hand alone, starting on the C below middle C: C-E-G-E, then G-B-D-B from the next G down, then C-E-G-E.",
    },
    "tune-over-broken-chords": {
      text: "Now add the tune in your right hand, in C position. Each tune note starts together with a left-hand note.",
    },
    recap: {
      text: "Well done. You can now break chords in both hands.",
      points: [
        "A broken chord plays its notes one after another.",
        "The notes are the same, so the chord sounds the same.",
        "A common pattern goes up and back down: C, E, G, E.",
        "The left hand often breaks chords under a tune.",
      ],
    },
  },
} satisfies LessonTexts;

/** The texts' type, which every locale's file of this lesson fills. */
export type BrokenChordsTexts = typeof brokenChordsEn;
