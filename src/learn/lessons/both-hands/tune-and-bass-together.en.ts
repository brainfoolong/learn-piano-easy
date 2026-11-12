/** *Tune and bass together* in English. Its object is the texts' type, which every other locale follows. */
import type { LessonTexts } from "../../model";

export const tuneAndBassTogetherEn = {
  title: "Tune and bass together",
  steps: {
    "whole-tune": {
      text: "Listen to a short tune of four bars. Your right hand plays the tune, and your left hand adds one deep note in each bar.",
    },
    "two-layers": {
      text: "The tune moves on every beat. The bass comes in only on beat one, and it rings under the tune for the whole bar.",
    },
    "tune-alone": {
      text: "First the tune alone, in C position. Play C D E F, G F E D, D E F D, and end on middle C.",
    },
    "bass-beat-quiz": {
      text: "On which beat of each bar does the bass note come in?",
      answers: ["On beat one", "On beat three", "On every beat"],
    },
    "bass-demo": {
      text: "Now hear the bass alone. Each note lasts a whole bar: C, then G twice, then C again.",
    },
    "bass-alone": {
      text: "Play the bass with your left hand in C position. Your little finger plays C, and your thumb plays G.",
    },
    "press-together": {
      text: "On beat one, both hands press their keys at the same moment. Then your left hand holds its note while your right hand plays on.",
    },
    "first-half": {
      text: "Play the first two bars with both hands. Press the bass and the first note of the tune together.",
    },
    "held-bass-quiz": {
      text: "In bar two, your right hand plays G F E D. What does your left hand do meanwhile?",
      answers: ["It plays G F E D one octave lower", "It holds its G", "It lifts off and rests"],
    },
    "whole-tune-together": {
      text: "Now the whole tune with both hands. Take your time on each beat one, where both hands play.",
    },
    recap: {
      text: "Well done. You played a tune with its bass.",
      points: [
        "Learn the tune alone first, then the bass alone, then put them together.",
        "The bass comes in on beat one, together with the tune's note.",
        "Your left hand holds the bass while your right hand plays on.",
      ],
    },
  },
} satisfies LessonTexts;

/** The texts' type, which every locale's file of this lesson fills. */
export type TuneAndBassTogetherTexts = typeof tuneAndBassTogetherEn;
