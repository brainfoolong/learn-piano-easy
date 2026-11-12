/** *The sustain pedal* in English. Its object is the texts' type, which every other locale follows. */
import type { LessonTexts } from "../../model";

export const theSustainPedalEn = {
  title: "The sustain pedal",
  steps: {
    "pedal-demo": {
      text: "Listen to C, E, G and C played twice. The first time each note stops when its key comes up. The second time they all ring on together.",
    },
    "what-the-pedal-does": {
      text: "The right pedal is the sustain pedal. While it is down, every note keeps sounding after you let go of its key.",
    },
    "pedal-keeps": {
      text: "What does the right pedal do?",
      answers: ["It makes every note louder", "It makes the notes shorter", "It keeps notes sounding after you let go", "It moves the keys up an octave"],
    },
    "foot-on-pedal": {
      text: "Use your right foot. Keep your heel on the floor and press the pedal with the front of your foot. Lift it the same way, gently.",
    },
    "which-foot": {
      text: "How does your foot sit on the sustain pedal?",
      answers: ["Left foot, heel in the air", "Right foot, toes off the pedal", "Left foot, heel on the floor", "Right foot, heel on the floor"],
    },
    "pedal-down-c": {
      text: "Press the right pedal down and keep it down. With your left hand, play the C below middle C, then E, then G. Let each key go.",
    },
    "hear-pedal-hold": {
      text: "Listen to C, E and G played one after another with the pedal down. Each note keeps sounding while the next one begins.",
    },
    "what-pedal-did": {
      text: "In the demo, every note kept sounding after the next one began. What held them?",
      answers: ["The sustain pedal", "Pressing the keys harder", "Playing the notes faster", "The right hand"],
    },
    "pedal-marks": {
      text: "Below the staff, Ped. means press the pedal and a star means lift it. Some music draws a bracket line instead, from press to lift.",
    },
    "star-means": {
      text: "Under the staff you see a star. What does it tell your foot?",
      answers: ["Press the pedal down", "Lift the pedal", "Tap the pedal twice", "Keep the pedal down to the end"],
    },
    "chords-without-pedal": {
      text: "Learn four broken chords in your left hand first, without the pedal. Start on the C below middle C: C-E-G, then C-F-A, then B-D-G, then C-E-G again.",
    },
    "chords-blur": {
      text: "If the pedal stays down from one chord into the next, both chords sound at once and blur. So change the pedal with each new chord.",
    },
    "change-the-pedal": {
      text: "Play the same chords. Before each chord, lift the pedal and play its first note. Then press the pedal down and play its other two notes.",
    },
    "hear-pedal-change": {
      text: "Listen to the four chords with a pedal change at each one. Each chord rings on, then stops cleanly as the next chord begins.",
    },
    "why-change": {
      text: "Why do you change the pedal with each new chord?",
      answers: ["To play louder", "To rest your foot", "So the chords do not blur together", "So the notes sound shorter"],
    },
    recap: {
      text: "Well done. Now your right foot plays along too.",
      points: [
        "The right pedal keeps notes sounding after you let go of the keys.",
        "Press it with your right foot, heel on the floor.",
        "Ped. means press the pedal, and a star means lift it.",
        "Change the pedal with each new chord so the chords do not blur.",
      ],
    },
  },
} satisfies LessonTexts;

/** The texts' type, which every locale's file of this lesson fills. */
export type TheSustainPedalTexts = typeof theSustainPedalEn;
