/** *Three-four time* in English. Its object is the texts' type, which every other locale follows. */
import type { LessonTexts } from "../../model";

export const threeFourTimeEn = {
  title: "Three-four time",
  steps: {
    "waltz-demo": {
      text: "Watch and listen. A low note sounds on the first beat, and higher notes on the next two. The pattern repeats.",
    },
    "beats-in-threes": {
      text: "Some music groups its beats in threes. You count 1, 2, 3, 1, 2, 3, and beat 1 is the strongest. This is 3/4 time, the time of the waltz.",
    },
    "beats-in-a-bar-quiz": {
      text: "How many beats does a bar of 3/4 time have?",
      answers: ["Two", "Three", "Four"],
    },
    "which-is-a-waltz-quiz": {
      text: "A waltz is in 3/4 time. How do you count it?",
      answers: ["1, 2, 3, 1, 2, 3", "1, 2, 3, 4, 1, 2, 3, 4"],
    },
    "tap-in-threes": {
      text: "Press Start and listen to four clicks first. Then tap any key on each click, and count 1, 2, 3 aloud. Say each 1 a little louder.",
    },
    recap: {
      text: "Well done. You can count in threes now.",
      points: ["Some music groups its beats in threes.", "A bar of 3/4 time has three beats, counted 1, 2, 3.", "Beat 1 is the strongest, as in a waltz."],
    },
  },
} satisfies LessonTexts;

/** The texts' type, which every locale's file of this lesson fills. */
export type ThreeFourTimeTexts = typeof threeFourTimeEn;
