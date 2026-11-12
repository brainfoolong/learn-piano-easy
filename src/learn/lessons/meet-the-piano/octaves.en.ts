/** *Octaves* in English. Its object is the texts' type, which every other locale follows. */
import type { LessonTexts } from "../../model";

export const octavesEn = {
  title: "Octaves",
  steps: {
    "three-cs": {
      text: "Listen to three C keys, from low to high. Watch where each one sits on the piano.",
    },
    "same-letter": {
      text: "Count the white keys up from C: C D E F G A B, and then C again. The same letter comes back on the eighth white key, counting the one you started on. That distance is called an octave.",
    },
    "count-quiz": {
      text: "How many white keys is it from one C up to the next C, counting both?",
      answers: ["Five", "Eight", "Twelve"],
    },
    "sound-alike": {
      text: "Two notes an octave apart sound alike, as if they were the same note. One of them is higher than the other.",
    },
    "octave-listen": {
      text: "You hear two notes each time. Is the second one higher, lower or the same as the first?",
    },
    "e-above": {
      text: "Find the first E above middle C, two white keys to its right. Then press the next E up, one octave higher.",
    },
    "c-below": {
      text: "Now go the other way. Press the C one octave below middle C.",
    },
    "octave-pair": {
      text: "Play an octave yourself: the first E above middle C, then the E one octave higher. Hear how alike they sound.",
    },
    "octave-quiz": {
      text: "What is an octave?",
      answers: ["Two keys right next to each other", "The two black keys of a group", "The distance from one letter to the same letter, eight white keys counting both"],
    },
    recap: {
      text: "Well done. You know what an octave is.",
      points: ["The same letter comes back on the eighth white key, counting the first.", "That distance is an octave.", "Two notes an octave apart sound alike, and one is higher."],
    },
  },
} satisfies LessonTexts;

/** The texts' type, which every locale's file of this lesson fills. */
export type OctavesTexts = typeof octavesEn;
