/** *Black key groups* in English. Its object is the texts' type, which every other locale follows. */
import type { LessonTexts } from "../../model";

export const blackKeyGroupsEn = {
  title: "Black key groups",
  steps: {
    "see-the-groups": {
      text: "Look at the black keys. They come in groups: first a group of two, then a group of three. The pattern repeats along the whole piano.",
    },
    "smaller-group-quiz": {
      text: "How many black keys are in the smaller group?",
      answers: ["One", "Two", "Three", "Four"],
    },
    "two-left": {
      text: "Find a group of two black keys. Press its left key.",
    },
    "two-right": {
      text: "Now press the right key of a group of two black keys.",
    },
    "group-of-three": {
      text: "Next to each group of two sits a group of three black keys. It is a little wider, so you spot it quickly.",
    },
    "three-left": {
      text: "Find a group of three black keys. Press its left key.",
    },
    "three-middle": {
      text: "Now press the middle key of a group of three black keys.",
    },
    "all-five": {
      text: "Play every black key of a group of two, then of the group of three beside it, from left to right.",
    },
    "find-your-way": {
      text: "The white keys all look alike. What helps you find your way on the piano?",
      answers: ["The colour of the white keys", "The groups of two and three black keys", "The size of each key"],
    },
    "three-right": {
      text: "One last search: press the right key of a group of three black keys.",
    },
    recap: {
      text: "Well done. You can find your way by the black keys.",
      points: ["The black keys come in groups of two and of three.", "The two groups take turns along the whole piano.", "The groups show you where you are on the keys."],
    },
  },
} satisfies LessonTexts;

/** The texts' type, which every locale's file of this lesson fills. */
export type BlackKeyGroupsTexts = typeof blackKeyGroupsEn;
