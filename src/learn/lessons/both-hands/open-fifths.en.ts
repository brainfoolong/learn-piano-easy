/** *Open fifths* in English. Its object is the texts' type, which every other locale follows. */
import type { LessonTexts } from "../../model";

export const openFifthsEn = {
  title: "Open fifths",
  steps: {
    "fifth-sound": {
      text: "Listen to your left hand play two keys at once. This sound is called an open fifth. It sounds open, strong and calm.",
    },
    "little-finger-and-thumb": {
      text: "Put your left hand in C position. Press C with your little finger and G with your thumb, both at once. That is a fifth.",
    },
    "count-the-fifth": {
      text: "Count the white keys from C up to G, and count both C and G. How many keys is that?",
      answers: ["Five", "Three", "Eight"],
    },
    "first-fifth": {
      text: "Your turn. Play the fifth C and G three times. Press both keys together each time.",
    },
    "move-the-fifth": {
      text: "A fifth is a shape you can move. Keep your little finger and thumb the same distance apart, and slide the whole hand.",
    },
    "fifth-from-g": {
      text: "Your left little finger rests on G. Which key does your thumb play for a fifth?",
      answers: ["D", "C", "E"],
    },
    "three-fifths": {
      text: "With your left hand, play the fifth from the C below middle C up to G. Then play the fifth on the G below that C, then on the F below it, and back on C. Keep the same shape each time.",
    },
    "fifth-under-tune": {
      text: "Now your right hand plays a tune over the fifth. Your left hand presses the fifth with the first note and holds it.",
    },
    "fifth-and-tune": {
      text: "Your turn. Play the fifth C and G together with E in your right hand, then D and C. Play the fifth with E again, then two more Es.",
    },
    recap: {
      text: "Well done. Your left hand now plays fifths.",
      points: [
        "A fifth spans five white keys, counting both ends, and you play its two keys together.",
        "Your left little finger plays the low key, and your thumb the high one.",
        "The shape moves: C and G, G and D, F and C.",
        "A fifth under a tune sounds open and strong.",
      ],
    },
  },
} satisfies LessonTexts;

/** The texts' type, which every locale's file of this lesson fills. */
export type OpenFifthsTexts = typeof openFifthsEn;
