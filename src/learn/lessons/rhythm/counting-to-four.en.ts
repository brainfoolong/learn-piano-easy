/** *Counting to four* in English. Its object is the texts' type, which every other locale follows. */
import type { LessonTexts } from "../../model";

export const countingToFourEn = {
  title: "Counting to four",
  steps: {
    "bars-demo": {
      text: "Watch and listen. A low C starts each group of four beats, and G plays the other three.",
    },
    "what-a-bar-is": {
      text: "Beats come in groups of four, called bars. You count each bar 1, 2, 3, 4, and a bar line ends it. This is 4/4 time, and beat 1 is the strongest.",
    },
    "beats-in-a-bar-quiz": {
      text: "How many beats does a bar of 4/4 time hold?",
      answers: ["Three beats", "Four beats", "Eight beats"],
    },
    "strongest-beat-quiz": {
      text: "Which beat of a bar feels the strongest?",
      answers: ["Beat 1", "Beat 2", "Beat 4"],
    },
    "count-aloud-tap": {
      text: "Press Start and tap any key on each click. Count aloud as you tap: 1, 2, 3, 4. Say beat 1 a little louder.",
    },
    "fill-a-bar-quiz": {
      text: "Which of these fills one bar of 4/4 time?",
      answers: ["Two half notes", "Three quarter notes", "A whole note and a quarter note"],
    },
    recap: {
      text: "Well done. You can count bars of four now.",
      points: ["Beats group into bars, and a bar line ends each bar.", "In 4/4 time you count 1, 2, 3, 4.", "Beat 1 is the strongest beat of a bar."],
    },
  },
} satisfies LessonTexts;

/** The texts' type, which every locale's file of this lesson fills. */
export type CountingToFourTexts = typeof countingToFourEn;
