/** *The C major scale* in English. Its object is the texts' type, which every other locale follows. */
import type { LessonTexts } from "../../model";

export const theCMajorScaleEn = {
  title: "The C major scale",
  steps: {
    "scale-demo": {
      text: "Listen to eight notes climb from middle C to the next C. Every key is white.",
    },
    "what-a-scale-is": {
      text: "A scale is a row of notes that climbs one step at a time. The C major scale starts on C and ends on the next C.",
    },
    "scale-pattern": {
      text: "Its steps follow a pattern: whole, whole, half, whole, whole, whole, half. The half steps are E to F and B to C.",
    },
    "first-half-step": {
      text: "Where is the first half step of the C major scale?",
      answers: ["From C to D", "From G to A", "From E to F"],
    },
    "first-three": {
      text: "Put your right thumb on middle C. Play C, D and E with fingers 1, 2 and 3.",
    },
    "thumb-under": {
      text: "Your hand has only five fingers for eight notes. After E, tuck your thumb under your hand and play F with it.",
    },
    "which-finger-on-f": {
      text: "You play C, D and E with fingers 1, 2 and 3. Which finger plays F?",
      answers: ["Finger 4", "Finger 1, the thumb", "Finger 5"],
    },
    "tuck-to-f": {
      text: "Play C, D and E again. Then tuck your thumb under and play F. Keep your wrist calm and level.",
    },
    "last-five": {
      text: "Your thumb is now on F. Play F, G, A, B and C with fingers 1, 2, 3, 4 and 5.",
    },
    "scale-up": {
      text: "Play the C major scale up with your right hand, from middle C to the next C. Fingers 1, 2, 3, then the thumb tucks under, then 1, 2, 3, 4, 5.",
    },
    "scale-down": {
      text: "Now come back down with fingers 5, 4, 3, 2, 1. After F, finger 3 crosses over your thumb to E.",
    },
    recap: {
      text: "Well done. You played your first scale.",
      points: [
        "The C major scale is eight white keys from C to C.",
        "Its pattern is whole, whole, half, whole, whole, whole, half.",
        "Going up, your thumb tucks under to F.",
        "Going down, finger 3 crosses over your thumb to E.",
      ],
    },
  },
} satisfies LessonTexts;

/** The texts' type, which every locale's file of this lesson fills. */
export type TheCMajorScaleTexts = typeof theCMajorScaleEn;
