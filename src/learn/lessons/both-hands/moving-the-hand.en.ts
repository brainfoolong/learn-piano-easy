/** *Moving the hand* in English. Its object is the texts' type, which every other locale follows. */
import type { LessonTexts } from "../../model";

export const movingTheHandEn = {
  title: "Moving the hand",
  steps: {
    "phrase-then-move": {
      text: "Watch the right hand. It plays five notes in C position, moves up during the rest, and plays the same shape again higher up.",
    },
    "new-position": {
      text: "A five-finger position can start on other keys too. In G position, your right thumb sits on the G above middle C. Your fingers cover G A B C D.",
    },
    "new-thumb": {
      text: "Find the key for your right thumb in G position: the G just above middle C.",
    },
    "little-finger-quiz": {
      text: "Your right hand is in G position. Which key does your little finger play?",
      answers: ["D", "C", "G", "E"],
    },
    "middle-finger-quiz": {
      text: "Still in G position. Which key does your middle finger play?",
      answers: ["E", "B", "A"],
    },
    "read-g-position": {
      text: "These are the notes of G position on the treble staff. Name each one.",
    },
    "c-position-phrase": {
      text: "Start in C position. Play from your thumb up to your fourth finger and back down to middle C.",
    },
    "g-position-phrase": {
      text: "Now move your hand to G position and play the same shape. Thumb on G, up to C and back down.",
    },
    "move-in-a-rest": {
      text: "Move your hand during a rest or the end of a long note. Lift the whole hand, keep its shape, and land with your thumb on the new key.",
    },
    "move-and-play": {
      text: "Play two phrases in one go with your right hand. Start on middle C and play C D E F E D C. Then move your thumb to the G above middle C and play G A B C B A G.",
    },
    recap: {
      text: "Well done. Your hand can now change its place.",
      points: [
        "In G position, your right thumb sits on the G above middle C.",
        "Your fingers then play G A B C D.",
        "Move the whole hand during a rest or a long note, and keep its shape.",
      ],
    },
  },
} satisfies LessonTexts;

/** The texts' type, which every locale's file of this lesson fills. */
export type MovingTheHandTexts = typeof movingTheHandEn;
