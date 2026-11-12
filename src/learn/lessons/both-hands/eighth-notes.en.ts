/** *Eighth notes* in English. Its object is the texts' type, which every other locale follows. */
import type { LessonTexts } from "../../model";

export const eighthNotesEn = {
  title: "Eighth notes",
  steps: {
    "eighth-demo": {
      text: "Watch and listen. Middle C plays one note on each beat first. Then it plays two notes on each beat.",
    },
    "what-an-eighth-note-is": {
      text: "The fast notes were eighth notes. An eighth note lasts half a beat. So two eighth notes fill one beat.",
    },
    "eighths-per-beat-quiz": {
      text: "How many eighth notes fill one beat?",
      answers: ["One", "Two", "Four"],
    },
    "count-and": {
      text: "To count eighths, say \"and\" between the beats: \"1 and 2 and 3 and 4 and\". The numbers fall on the beats, and each \"and\" falls halfway between them.",
    },
    "counting-demo": {
      text: "Count along: \"1, 2, 3 and, 4\". The two quick E notes sit on \"3\" and on its \"and\".",
    },
    "eighth-taps": {
      text: "The beat is slow now, at 60 a minute, and the clicks come twice as fast. Each click is one eighth note. Count \"1 and 2 and\" and tap any key on every click.",
    },
    "eighths-per-bar-quiz": {
      text: "A bar has four beats. How many eighth notes fill it?",
      answers: ["Four", "Six", "Eight"],
    },
    "phrase-demo": {
      text: "Now both hands play. The left hand holds a low C, while the right hand runs up to G in eighth notes. Then it runs back down to C.",
    },
    "eighth-phrase": {
      text: "Put both hands in C position. Your right hand plays C D E F G G F E D C, starting on middle C. Press the C below middle C with your left little finger together with the first C. Press it again together with the second G.",
    },
    recap: {
      text: "Well done. Your notes can move twice as fast now.",
      points: ["An eighth note lasts half a beat.", "Two eighth notes fill one beat.", "You count eighths as \"1 and 2 and\"."],
    },
  },
} satisfies LessonTexts;

/** The texts' type, which every locale's file of this lesson fills. */
export type EighthNotesTexts = typeof eighthNotesEn;
