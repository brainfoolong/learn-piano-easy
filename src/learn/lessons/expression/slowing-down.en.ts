/** *Slowing down* in English. Its object is the texts' type, which every other locale follows. */
import type { LessonTexts } from "../../model";

export const slowingDownEn = {
  title: "Slowing down",
  steps: {
    "slowing-demo": {
      text: "Listen to this phrase. It walks up at a steady pace. On the way back down, each note takes a little longer.",
    },
    "what-ritardando-is": {
      text: "The music slowed down on purpose. The mark rit., short for ritardando, asks you to slow down little by little. It often comes at the end of a piece.",
    },
    "rit-means": {
      text: "You see rit. above a few bars. What do you do?",
      answers: ["Slow down little by little", "Play louder", "Stop at once", "Speed up"],
    },
    "steady-tap": {
      text: "A slowing only means something after a steady beat. Tap along with the clicks and keep exactly with them.",
    },
    "play-the-ending": {
      text: "Play the end of the phrase: G, F, E, D and C, from the G above middle C. Take a little more time on each note, and rest on the last C.",
    },
    "what-a-fermata-is": {
      text: "This sign looks like an eye: a curve with a dot under it. It is a fermata, the pause sign. The note under it is held longer than written.",
    },
    "fermata-demo": {
      text: "Listen for the fermata over the G. The beat stops while the G rings, and then the music goes on.",
    },
    "fermata-means": {
      text: "A fermata stands over a note. What does it ask?",
      answers: ["Play it short", "Play it louder", "Leave it out", "Hold it longer than written"],
    },
    "back-in-tempo": {
      text: "After a rit., the words a tempo bring back the speed you had before. They mean \"in time\" in Italian.",
    },
    "a-tempo-demo": {
      text: "Listen. The phrase slows down in the middle, then a tempo starts it again at its first speed.",
    },
    "a-tempo-means": {
      text: "You slowed down for a rit. Now you see a tempo. What do you do?",
      answers: ["Slow down even more", "Go back to the first speed", "Hold the next note", "Play softly"],
    },
    "where-rit-goes": {
      text: "Where do you find rit. most often?",
      answers: ["On the very first note", "In every bar", "Near the end of a piece", "Only in the left hand"],
    },
    "ending-with-fermata": {
      text: "Play E, D, C, D, E, E from the E above middle C, slowing as you go. End on a chord: C and G in your left hand, E in your right. Hold it under its fermata.",
    },
    "rall-means": {
      text: "Some pieces write rall., short for rallentando, instead. Which mark means the same?",
      answers: ["rit.", "a tempo", "The fermata", "mf"],
    },
    recap: {
      text: "Well done. You can change the tempo on purpose.",
      points: [
        "rit. and rall. slow down little by little, most often at an ending.",
        "A fermata holds its note longer than written.",
        "a tempo brings back the first speed.",
      ],
    },
  },
} satisfies LessonTexts;

/** The texts' type, which every locale's file of this lesson fills. */
export type SlowingDownTexts = typeof slowingDownEn;
