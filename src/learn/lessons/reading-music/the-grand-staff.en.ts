/** *The grand staff* in English. Its object is the texts' type, which every other locale follows. */
import type { LessonTexts } from "../../model";

export const theGrandStaffEn = {
  title: "The grand staff",
  steps: {
    "climb-demo": {
      text: "Listen. The piano climbs from low C, through middle C, up to high C. That walk crosses both staves you know.",
    },
    "two-staves": {
      text: "Piano music stacks two staves, joined on the left by a curly brace. Together they are the grand staff. The treble staff is on top, and the bass staff below.",
    },
    "which-hand-quiz": {
      text: "Which hand usually reads the treble staff on top?",
      answers: ["The right hand", "The left hand"],
    },
    "middle-c-between": {
      text: "Middle C sits on a short ledger line between the two staves. It belongs to both. Either staff can show it, and it is the same key.",
    },
    "middle-c-quiz": {
      text: "Where is middle C on the grand staff?",
      answers: ["On the top line of the treble staff", "On a ledger line between the two staves", "On the bottom line of the bass staff"],
    },
    "treble-names": {
      text: "Here is the treble staff. Name each note.",
    },
    "bass-names": {
      text: "Now the bass staff. Name each note.",
    },
    "low-c-staff-quiz": {
      text: "Your left hand plays low C. On which staff do you find it?",
      answers: ["On the treble staff", "On the bass staff"],
    },
    "bass-play": {
      text: "Read each note on the bass staff and play it with your left hand.",
    },
    "treble-play": {
      text: "Read each note on the treble staff and play it with your right hand.",
    },
    recap: {
      text: "Well done. You can read the grand staff now.",
      points: ["The grand staff joins a treble staff and a bass staff with a brace.", "The right hand mostly reads the treble staff, and the left hand the bass staff.", "Middle C sits on a ledger line between them and belongs to both."],
    },
  },
} satisfies LessonTexts;

/** The texts' type, which every locale's file of this lesson fills. */
export type TheGrandStaffTexts = typeof theGrandStaffEn;
