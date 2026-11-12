/** *The staff* in English. Its object is the texts' type, which every other locale follows. */
import type { LessonTexts } from "../../model";

export const theStaffEn = {
  title: "The staff",
  steps: {
    "five-lines": {
      text: "Music is written on a staff. A staff is five lines, one above the other. You count them from the bottom up, so the bottom line is the first.",
    },
    "lines-quiz": {
      text: "How many lines does a staff have?",
      answers: ["Four", "Five", "Six"],
    },
    "four-spaces": {
      text: "Between the five lines are four spaces. You count the spaces from the bottom up too.",
    },
    "spaces-quiz": {
      text: "How many spaces lie between the lines of a staff?",
      answers: ["Three", "Four", "Five"],
    },
    "line-or-space": {
      text: "A note sits on a line or in a space. On a line, the line runs through the middle of the note. In a space, the note fills the gap between two lines.",
    },
    "line-or-space-quiz": {
      text: "A line runs right through the middle of a note. Where does that note sit?",
      answers: ["On a line", "In a space"],
    },
    "higher-is-higher": {
      text: "The higher a note sits on the staff, the higher it sounds. One step up, from a line to the next space, is the next white key to the right.",
    },
    "climb-demo": {
      text: "Watch and listen. The piano climbs from the bottom line to the top line, one line or space at a time. Each note sounds a little higher.",
    },
    "higher-or-lower-listen": {
      text: "You hear two notes. Is the second one higher, lower or the same as the first? A higher note would sit higher on the staff.",
    },
    "top-or-bottom-quiz": {
      text: "One note sits on the top line, and another on the bottom line. Which one sounds higher?",
      answers: ["The note on the bottom line", "The note on the top line", "They sound the same"],
    },
    "first-line-quiz": {
      text: "Which line of the staff is the first line?",
      answers: ["The bottom line", "The middle line", "The top line"],
    },
    recap: {
      text: "Well done. You know the staff now.",
      points: ["A staff has five lines and four spaces, counted from the bottom.", "A note sits on a line or in a space.", "A note higher on the staff sounds higher."],
    },
  },
} satisfies LessonTexts;

/** The texts' type, which every locale's file of this lesson fills. */
export type TheStaffTexts = typeof theStaffEn;
