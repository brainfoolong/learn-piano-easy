/** *Reading steps and skips* in English. Its object is the texts' type, which every other locale follows. */
import type { LessonTexts } from "../../model";

export const readingStepsAndSkipsEn = {
  title: "Reading steps and skips",
  steps: {
    "moves-demo": {
      text: "Listen. First the notes climb by steps, then by skips. On the staff, each move has its own look.",
    },
    "step-on-the-staff": {
      text: "A step on the staff goes from a line to the next space, or from a space to the next line. On the keys, it goes to the next white key.",
    },
    "step-from-line-quiz": {
      text: "A note sits on a line. Where is the note one step up?",
      answers: ["In the space just above", "On the next line up", "Two lines up"],
    },
    "skip-on-the-staff": {
      text: "A skip on the staff goes from a line to the next line, or from a space to the next space. On the keys, it leaves out one white key.",
    },
    "step-or-skip-quiz": {
      text: "A note moves from a line to the next line up. Is that a step or a skip?",
      answers: ["A step", "A skip"],
    },
    "space-to-line-quiz": {
      text: "A note moves from a space to the line just above. Is that a step or a skip?",
      answers: ["A step", "A skip"],
    },
    "read-by-moves": {
      text: "You need not name every note. Name the first one, then read each move: up or down, a step or a skip.",
    },
    "skip-from-e-quiz": {
      text: "A note is E, on the bottom line of the treble staff. The next note sits on the next line up. Which note is it?",
      answers: ["D", "F", "G"],
    },
    "first-note": {
      text: "The next song starts on this note. Name it.",
    },
    "song-notes": {
      text: "The next song uses these five notes. Read each one and play it with your right hand.",
    },
    "song-opening": {
      text: "Here is the start of the next song. Put your right thumb on D, and fingers 2 to 5 on E, G, A and B. Follow the marked key.",
    },
    "opening-move-quiz": {
      text: "In that tune, E moves down to D. E sits on the bottom line. Where is D?",
      answers: ["In the space just below", "On the line below", "On the same line"],
    },
    recap: {
      text: "Well done. You can read a tune by its moves now.",
      points: ["A step goes from a line to the next space, or a space to the next line.", "A skip goes from line to line, or space to space.", "Name the first note, then read each move: its direction and its size."],
    },
  },
} satisfies LessonTexts;

/** The texts' type, which every locale's file of this lesson fills. */
export type ReadingStepsAndSkipsTexts = typeof readingStepsAndSkipsEn;
