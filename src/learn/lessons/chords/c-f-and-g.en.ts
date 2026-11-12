/** *C, F and G* in English. Its object is the texts' type, which every other locale follows. */
import type { LessonTexts } from "../../model";

export const cFAndGEn = {
  title: "C, F and G",
  steps: {
    "progression-demo": {
      text: "Listen to four chords: C, F, G and back to C. They sound like a short song that comes home at the end.",
    },
    "three-main-chords": {
      text: "Build a triad on the 1st, 4th and 5th steps of the C major scale. You get C, F and G, the three main chords of C major.",
    },
    "fourth-step": {
      text: "Count up the C major scale from C. Which note is its 4th step?",
      answers: ["E", "G", "D", "F"],
    },
    "the-f-triad": {
      text: "The F triad is F, A and C. It is a major triad, like C major, so your fingers keep the same shape.",
    },
    "c-and-f": {
      text: "Your turn. Play C major from middle C with fingers 1, 3 and 5. Then move your thumb to F for the F triad, and go back to C.",
    },
    "g-triad-notes": {
      text: "The G triad stands on the 5th step of the scale. Which notes make it?",
      answers: ["G, B♭ and D", "G, B and D", "G, A and B", "F, A and C"],
    },
    "c-and-g": {
      text: "Play C major, then move your thumb to G for the G triad, and go back to C.",
    },
    "move-the-hand": {
      text: "Lift the whole hand from one chord to the next. Keep fingers 1, 3 and 5 in their shape, and let the thumb find the new root.",
    },
    "c-f-g-c": {
      text: "Now play all four chords: C, F, G and C. Take your time between them.",
    },
    "left-hand-chords": {
      text: "Your left hand plays the same chords lower, with fingers 5, 3 and 1. Finger 5 sits on the root.",
    },
    "left-c-f-g-c": {
      text: "Put your left finger 5 on the C below middle C. Play C, F, G and C, moving finger 5 to each root.",
    },
    "tune-demo": {
      text: "Here is a short tune over the three chords. Your left hand plays each chord, and your right hand plays two notes above it.",
    },
    tune: {
      text: "Put your right thumb on the G above middle C. Play each chord with the first note of its bar, then the second note alone.",
    },
    recap: {
      text: "Well done. You play the three main chords of C major.",
      points: [
        "C, F and G are the triads on the 1st, 4th and 5th steps of C major.",
        "The F triad is F, A and C, and the G triad is G, B and D.",
        "Lift the whole hand and keep its shape to move between chords.",
        "C, F, G and C sounds like coming home.",
      ],
    },
  },
} satisfies LessonTexts;

/** The texts' type, which every locale's file of this lesson fills. */
export type CFAndGTexts = typeof cFAndGEn;
