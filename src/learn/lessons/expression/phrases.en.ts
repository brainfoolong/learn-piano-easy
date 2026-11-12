/** *Phrases* in English. Its object is the texts' type, which every other locale follows. */
import type { LessonTexts } from "../../model";

export const phrasesEn = {
  title: "Phrases",
  steps: {
    "phrase-demo": {
      text: "Listen to two short tunes, one after the other. The first seems to ask something, and the second answers it. Hear the small breath between them.",
    },
    "musical-sentences": {
      text: "Music speaks in sentences, just like you do. A musical sentence is called a phrase. It is often four bars long.",
    },
    "what-is-a-phrase": {
      text: "What is a phrase?",
      answers: ["A single loud note", "A musical sentence, often four bars long", "A chord played broken", "A sign that means play fast"],
    },
    "the-long-slur": {
      text: "A short slur joins a few notes legato. A long slur over several bars marks a whole phrase. Play its notes as one smooth line.",
    },
    "slur-shows": {
      text: "A long slur stretches over four bars. What does it show?",
      answers: ["One phrase, played as one smooth line", "Four loud notes", "Lift the hand after each note", "Hold the pedal down"],
    },
    "play-question": {
      text: "Play the first phrase with your right hand in C position: C-D-E-F, G, E, F-E-D-E, and end on D. Keep it smooth.",
    },
    breathe: {
      text: "At the end of a phrase, lift your hand a little, as a singer takes a breath. Then begin the next phrase.",
    },
    "question-and-answer": {
      text: "Play the first phrase and lift your hand after its last D. Then play the second: C-D-E-F, G, E, F-E-D-D, and end on C.",
    },
    "open-and-home": {
      text: "The first phrase ends on D, so it sounds open, like a question. The second ends on C, at home, like an answer.",
    },
    "which-ends-answer": {
      text: "In C major, which last note makes a phrase sound finished, like an answer?",
      answers: ["D", "F", "B", "C"],
    },
    "rise-and-fall-demo": {
      text: "Listen to one phrase. It starts soft, grows louder up to the G, and fades again towards its end.",
    },
    "where-loudest": {
      text: "Where is a phrase often loudest?",
      answers: ["On its first note", "On its last note", "Near its middle or its highest note", "Nowhere, it stays the same"],
    },
    "shape-both-phrases": {
      text: "Play both phrases again with a breath between them. Grow a little louder towards each G, and softer towards each end.",
    },
    "when-to-breathe": {
      text: "When do you lift your hand for a breath?",
      answers: ["After every note", "Between two phrases", "In the middle of a phrase", "Never"],
    },
    recap: {
      text: "Well done. You play music in sentences.",
      points: [
        "A phrase is a musical sentence, often four bars long.",
        "A long slur shows a phrase. Play it as one smooth line.",
        "Lift your hand for a breath between two phrases.",
        "A phrase often asks or answers, and grows louder, then softer.",
      ],
    },
  },
} satisfies LessonTexts;

/** The texts' type, which every locale's file of this lesson fills. */
export type PhrasesTexts = typeof phrasesEn;
