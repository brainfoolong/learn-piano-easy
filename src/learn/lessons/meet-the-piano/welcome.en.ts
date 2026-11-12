/** *Welcome to the piano* in English. Its object is the texts' type, which every other locale follows. */
import type { LessonTexts } from "../../model";

export const welcomeEn = {
  title: "Welcome to the piano",
  steps: {
    hello: {
      text: "Welcome! You learn the piano here one small step at a time. Each lesson teaches one idea, and you try it at once.",
    },
    "sound-check": {
      text: "First, a sound check. The piano plays four notes. If you hear nothing, turn your volume up and press Play again.",
    },
    "ways-to-play": {
      text: "You can play every lesson on the keys on the screen, on your computer keys, or on a MIDI keyboard. To use a MIDI keyboard, plug it in and press Connect MIDI devices once, in the player's settings.",
    },
    "ways-quiz": {
      text: "Which can you play a lesson on?",
      answers: ["Only a MIDI keyboard", "Only the keys on the screen", "Any of them: the screen, the computer keys or a MIDI keyboard"],
    },
    "first-key": {
      text: "Your first note! Press the marked key.",
    },
    "three-keys": {
      text: "Now three keys in a row. Play each marked key, from left to right.",
    },
    recap: {
      text: "Well done. You have played your first notes.",
      points: ["The sound check shows that you can hear the piano.", "You can play on the screen, the computer keys or a MIDI keyboard.", "The marked key is always the one to play next."],
    },
  },
} satisfies LessonTexts;

/** The texts' type, which every locale's file of this lesson fills. */
export type WelcomeTexts = typeof welcomeEn;
