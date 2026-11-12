/** *Hands apart, then together* in English. Its object is the texts' type, which every other locale follows. */
import type { LessonTexts } from "../../model";

export const handsApartThenTogetherEn = {
  title: "Hands apart, then together",
  steps: {
    "three-passes": {
      text: "Listen to one short tune three times. First the right hand plays it, then the left hand, and then both hands together.",
    },
    "why-apart": {
      text: "Each hand alone is easier to learn. Once both hands know their notes, you put them together.",
    },
    "first-step-quiz": {
      text: "You start a new piece for both hands. What do you practise first?",
      answers: ["Each hand alone", "Both hands together, at full speed", "Only the left hand, and never the right"],
    },
    "right-alone": {
      text: "Your right hand first. Start on middle C and play C D E D C.",
    },
    "left-alone": {
      text: "Now your left hand alone. Start on the C one octave below and play the same C D E D C.",
    },
    "together-steps": {
      text: "Now both hands together. Press each pair of keys at the same moment, one C with each hand to start.",
    },
    "slow-together": {
      text: "Playing together is new, so go slowly. Speed comes later, once both hands move as one.",
    },
    "mirror-tune": {
      text: "Here is a new tune. Your hands move apart and come back, like a mirror.",
    },
    "mirror-right": {
      text: "Right hand alone. Play E F G F E.",
    },
    "mirror-left": {
      text: "Left hand alone. Play E D C D E, starting on the E below middle C, so you walk down while your right hand walked up.",
    },
    "mirror-together": {
      text: "Now put them together. Take your time, and press each pair of keys at once.",
    },
    recap: {
      text: "Well done. You played with both hands at once for the first time.",
      points: [
        "Learn a new piece with each hand alone first.",
        "Then put the hands together, slowly.",
        "Your hands can move the same way or in opposite ways.",
      ],
    },
  },
} satisfies LessonTexts;

/** The texts' type, which every locale's file of this lesson fills. */
export type HandsApartThenTogetherTexts = typeof handsApartThenTogetherEn;
