/** *Treble landmarks* in English. Its object is the texts' type, which every other locale follows. */
import type { LessonTexts } from "../../model";

export const trebleLandmarksEn = {
  title: "Treble landmarks",
  steps: {
    "landmarks-demo": {
      text: "Watch and listen. The piano plays middle C, then G, then the C above. These three notes are your landmarks.",
    },
    "three-landmarks": {
      text: "A landmark is a note you know at a glance. Middle C sits on its ledger line, and G sits on the second line. High C sits in the third space from the bottom.",
    },
    "high-c-quiz": {
      text: "Where does high C sit on the treble staff?",
      answers: ["On the second line", "On a ledger line below the staff", "In the third space from the bottom"],
    },
    "name-landmarks": {
      text: "Name each landmark: C or G.",
    },
    "count-from-a-landmark": {
      text: "Every other note is a few steps from a landmark. From a line to the next space is one step, and so is a space to the next line. Each step up is the next letter.",
    },
    "count-quiz": {
      text: "A note sits one step above G, in the space above the second line. Which note is it?",
      answers: ["F", "A", "B"],
    },
    "name-neighbours": {
      text: "Name each note. Find the nearest landmark, then count the steps up or down.",
    },
    "read-treble-landmarks": {
      text: "Play each note you see on the treble staff. The landmarks are middle C on its ledger line, G on the second line and high C in the third space. The other notes sit one step from a landmark.",
    },
    recap: {
      text: "Well done. You have three landmarks in the treble clef.",
      points: ["Middle C sits on a ledger line below the staff.", "G sits on the second line, and high C in the third space.", "Count the steps from the nearest landmark to find any note."],
    },
  },
} satisfies LessonTexts;

/** The texts' type, which every locale's file of this lesson fills. */
export type TrebleLandmarksTexts = typeof trebleLandmarksEn;
