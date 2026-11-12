/** *Changing the bass on the beat* in English. Its object is the texts' type, which every other locale follows. */
import type { LessonTexts } from "../../model";

export const changingTheBassOnTheBeatEn = {
  title: "Changing the bass on the beat",
  steps: {
    "bass-changes": {
      text: "Listen to the left hand. It holds a fifth for a whole bar, then moves to a new one. The right hand never stops.",
    },
    "beat-one": {
      text: "The bass changes on beat one, the first beat of a new bar. It lands together with the right hand's note on that beat.",
    },
    "when-it-changes": {
      text: "On which beat does the left hand move to its new fifth?",
      answers: ["On beat one of the new bar", "On beat four, a little early", "Whenever the right hand rests"],
    },
    "count-the-bars": {
      text: "Tap every beat for two bars, and count along: one, two, three, four. Feel how each bar starts on one.",
    },
    "land-on-one": {
      text: "Hold the old fifth through beat four. Then let go and land on the new fifth right on one.",
    },
    "c-to-g": {
      text: "Your left hand alone. Play the fifth on the C below middle C, move down to the fifth on the G below it, then go back to C.",
    },
    "change-under-tune": {
      text: "Now both hands. The fifths are on C, then on the G below it, then on C again. Each new bar starts with a new fifth and a tune note together. Between them, the right hand plays on.",
    },
    "four-basses": {
      text: "Listen to four bars, each with its own fifth: C, F, G and C again. Every change falls on one.",
    },
    "four-bars": {
      text: "Your turn. Play the four bars. The fifths are on C, then on the F and the G below it, then on C again. Change the fifth together with the first note of each bar.",
    },
    recap: {
      text: "Well done. Your left hand now changes on the beat.",
      points: [
        "The bass changes on beat one of a new bar.",
        "The new fifth lands together with the right hand's note.",
        "Hold the old fifth until the bar ends, then move.",
      ],
    },
  },
} satisfies LessonTexts;

/** The texts' type, which every locale's file of this lesson fills. */
export type ChangingTheBassOnTheBeatTexts = typeof changingTheBassOnTheBeatEn;
