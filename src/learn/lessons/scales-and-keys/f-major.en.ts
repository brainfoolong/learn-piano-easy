/** *F major* in English. Its object is the texts' type, which every other locale follows. */
import type { LessonTexts } from "../../model";

export const fMajorEn = {
  title: "F major",
  steps: {
    "f-major-sound": {
      text: "Listen to a new scale. It starts and ends on F. Can you hear one black key in it?",
    },
    "pattern-on-f": {
      text: "Start the scale pattern on F: whole, whole, half, whole, whole, whole, half. F to G is a whole step, and G to A too.",
    },
    "after-a": {
      text: "Next comes a half step up from A. Which key is that?",
      answers: ["B", "B♭", "C"],
    },
    "find-b-flat": {
      text: "Find B♭. It is the black key just left of B.",
    },
    "f-fingering": {
      text: "Put your right thumb on F. Play F, G, A and B♭ with fingers 1, 2, 3 and 4. Then pass your thumb under to C and play on with 1, 2, 3, 4.",
    },
    "where-thumb-under": {
      text: "In F major, after which key does your thumb pass under?",
      answers: ["B♭", "A", "C"],
    },
    "f-scale-up": {
      text: "Your turn. Play the F major scale up, from F to the next F. Remember the B♭.",
    },
    "f-scale-down": {
      text: "Now play it down. After C, cross finger 4 over your thumb to B♭.",
    },
    "tune-in-f": {
      text: "Here is a short tune in F major. Your left hand holds the fifth F and C under it.",
    },
    "tune-and-fifth": {
      text: "Your turn. Press the fifth with the first note of each bar, then play the tune on alone.",
    },
    recap: {
      text: "Well done. You can play in F major now.",
      points: [
        "The scale pattern started on F needs one black key: B♭.",
        "The right hand plays 1-2-3-4, thumb under to C, then 1-2-3-4.",
        "Going down, finger 4 crosses over the thumb to B♭.",
      ],
    },
  },
} satisfies LessonTexts;

/** The texts' type, which every locale's file of this lesson fills. */
export type FMajorTexts = typeof fMajorEn;
