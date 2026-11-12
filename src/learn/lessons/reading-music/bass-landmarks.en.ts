/** *Bass landmarks* in English. Its object is the texts' type, which every other locale follows. */
import type { LessonTexts } from "../../model";

export const bassLandmarksEn = {
  title: "Bass landmarks",
  steps: {
    "landmarks-demo": {
      text: "Watch and listen. The piano plays three landmark notes of the bass clef: low C, F and middle C. A landmark is a note you know at a glance.",
    },
    "low-c": {
      text: "Low C sits in the second space from the bottom of the bass staff. It is the C below middle C. Your left little finger plays it in C position.",
    },
    "play-low-c": {
      text: "Here is low C in the second space. Play it on the keys.",
    },
    "middle-c-above": {
      text: "Middle C sits on its own ledger line just above the bass staff. It is the same middle C you met below the treble staff.",
    },
    "middle-c-quiz": {
      text: "Where does middle C sit in the bass clef?",
      answers: ["On a ledger line just below the staff", "On a ledger line just above the staff", "On the middle line"],
    },
    "fourth-line-quiz": {
      text: "Which landmark sits on the fourth line from the bottom?",
      answers: ["Low C", "F", "Middle C"],
    },
    "count-from-a-landmark": {
      text: "From a line to the next space is one step, and one letter. To read a note, start at the nearest landmark. Then count the steps up or down.",
    },
    "count-quiz": {
      text: "A note sits on the middle line, one step above low C. Which note is it?",
      answers: ["B", "D", "E"],
    },
    "play-bass-landmarks": {
      text: "Play each note you see on the bass staff. Some are landmarks, and the others sit one or two steps from a landmark.",
    },
    "name-by-counting": {
      text: "Name each note. Press its letter. Count from the nearest landmark: low C, F or middle C.",
    },
    recap: {
      text: "Well done. You can find your way around the bass staff.",
      points: ["Low C sits in the second space.", "F sits on the fourth line, between the clef's two dots.", "Middle C sits on a ledger line just above the staff.", "Count from the nearest landmark to read any note."],
    },
  },
} satisfies LessonTexts;

/** The texts' type, which every locale's file of this lesson fills. */
export type BassLandmarksTexts = typeof bassLandmarksEn;
