/** *Finger over the thumb* in English. Its object is the texts' type, which every other locale follows. */
import type { LessonTexts } from "../../model";

export const fingerOverTheThumbEn = {
  title: "Finger over the thumb",
  steps: {
    "down-demo": {
      text: "Listen to the C major scale going down, from the high C to middle C. The hand never stops, and the notes flow smoothly.",
    },
    "finger-over": {
      text: "Going down, play C, B, A, G and F with fingers 5, 4, 3, 2 and 1. Then finger 3 crosses over your thumb onto E. Fingers 2 and 1 play D and C.",
    },
    "which-finger-crosses": {
      text: "Going down, your thumb has played F. Which finger crosses over it onto E?",
      answers: ["Finger 2", "Finger 3", "Finger 5"],
    },
    "top-five-down": {
      text: "Put your little finger on the C above middle C. Play down to F, one finger for each key.",
    },
    "cross-onto-e": {
      text: "Start on F with your thumb. Cross finger 3 over the thumb onto E, then play D and C.",
    },
    "right-hand-down": {
      text: "Now play the whole scale down, from the high C to middle C. Keep the hand loose as finger 3 crosses over.",
    },
    "left-hand-up": {
      text: "Your left hand does the same going up. Play C, D, E, F and G with fingers 5, 4, 3, 2 and 1. Then finger 3 crosses over the thumb onto A.",
    },
    "left-hand-demo": {
      text: "Watch the left hand play C major going up, from the C below middle C to middle C.",
    },
    "left-cross-key": {
      text: "Your left thumb is on G. Finger 3 crosses over it. Which key does it land on?",
      answers: ["A", "F", "B"],
    },
    "left-scale-up": {
      text: "Your turn. Play the scale up with your left hand, from the C below middle C to middle C.",
    },
    "scale-up-and-down": {
      text: "Play the C major scale with your right hand, from middle C up to the next C and back down. Go up with the thumb under, and down with finger 3 over the thumb.",
    },
    recap: {
      text: "Well done. Your fingers now cross both ways.",
      points: [
        "Going down, your right hand plays 5, 4, 3, 2, 1, then 3 crosses over the thumb.",
        "Going up, your left hand does the same, with 3 crossing onto A.",
        "Thumb under on the way up and finger over on the way down are partners.",
      ],
    },
  },
} satisfies LessonTexts;

/** The texts' type, which every locale's file of this lesson fills. */
export type FingerOverTheThumbTexts = typeof fingerOverTheThumbEn;
