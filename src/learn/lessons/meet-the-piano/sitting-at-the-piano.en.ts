/** *Sitting at the piano* in English. Its object is the texts' type, which every other locale follows. */
import type { LessonTexts } from "../../model";

export const sittingAtThePianoEn = {
  title: "Sitting at the piano",
  steps: {
    "face-middle-c": {
      text: "Good playing starts with how you sit. Sit in the middle of the piano, with middle C right in front of you. Then both hands reach their keys easily.",
    },
    "find-middle-c": {
      text: "Press middle C, the key you sit in front of.",
    },
    "bench-and-feet": {
      text: "Sit on the front half of the bench, not all the way back. Keep your back tall and relaxed. Put both feet flat on the floor.",
    },
    "bench-quiz": {
      text: "Where on the bench do you sit?",
      answers: ["On the front half, with both feet flat on the floor", "All the way back, leaning on something", "On the very edge, with your feet off the floor"],
    },
    forearms: {
      text: "Your forearms should be level with the keys, neither sloping up nor down. Raise or lower the bench until they are. Keep your shoulders loose.",
    },
    "forearms-quiz": {
      text: "How high is the bench right for you?",
      answers: ["When your elbows sit far below the keys", "When your forearms are level with the keys", "When your hands hang down onto the keys from above"],
    },
    "curved-fingers": {
      text: "Curve your fingers gently, as if you were holding a small ball. Press the keys with your fingertips, not with flat fingers. Your hand stays relaxed the whole time.",
    },
    "fingers-quiz": {
      text: "How do your fingers rest on the keys?",
      answers: ["Flat and stretched out", "Tight, pressed hard together", "Relaxed and curved, playing with the fingertips"],
    },
    "relaxed-play": {
      text: "Hold a small ball in your hand in your mind, and play the marked keys with your fingertips. Stay loose, from your shoulders to your fingers.",
    },
    "posture-quiz": {
      text: "Which of these is a good way to sit at the piano?",
      answers: [
        "At the far end of the bench, with your fingers flat",
        "Facing middle C at the front of the bench, forearms level, fingers curved",
        "Low down, with your arms reaching up to the keys",
      ],
    },
    recap: {
      text: "Well done. You know how to sit at the piano.",
      points: [
        "Sit facing middle C, on the front half of the bench, with your feet flat.",
        "Your forearms are level with the keys.",
        "Your fingers stay relaxed and curved, and you play with their tips.",
      ],
    },
  },
} satisfies LessonTexts;

/** The texts' type, which every locale's file of this lesson fills. */
export type SittingAtThePianoTexts = typeof sittingAtThePianoEn;
