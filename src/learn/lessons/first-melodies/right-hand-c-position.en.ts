/** *Right hand in C position* in English. Its object is the texts' type, which every other locale follows. */
import type { LessonTexts } from "../../model";

export const rightHandCPositionEn = {
  title: "Right hand in C position",
  steps: {
    "position-demo": {
      text: "Watch five keys from middle C up to G. One finger of the right hand rests on each of them.",
    },
    "c-position": {
      text: "This is the C position. Your right thumb rests on middle C, and fingers 2 to 5 rest on D, E, F and G. Each finger owns one key and stays on it.",
    },
    "finger-g-quiz": {
      text: "In C position, which finger plays G?",
      answers: ["Finger 1", "Finger 3", "Finger 5"],
    },
    "finger-four-key": {
      text: "Put your right hand in C position. Press the key under finger 4.",
    },
    "finger-two-key": {
      text: "Keep your hand where it is. Now press the key under finger 2.",
    },
    "finger-three-quiz": {
      text: "Which key does finger 3 own in C position?",
      answers: ["D", "E", "F"],
    },
    "finger-pattern": {
      text: "Your fingers know their keys now. Play the fingers 1, 3, 2, 4, 5. The marked key shows each next one.",
    },
    "finger-walk-down": {
      text: "Now walk back down from your little finger. Play the fingers 5, 4, 3, 2, 1.",
    },
    recap: {
      text: "Well done. Your right hand has a home on the keys.",
      points: ["In C position, your right thumb rests on middle C.", "Fingers 1 to 5 rest on C, D, E, F and G.", "Each finger owns one key, so a finger number names a key."],
    },
  },
} satisfies LessonTexts;

/** The texts' type, which every locale's file of this lesson fills. */
export type RightHandCPositionTexts = typeof rightHandCPositionEn;
