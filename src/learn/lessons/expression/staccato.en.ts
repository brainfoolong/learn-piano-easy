/** *Staccato* in English. Its object is the texts' type, which every other locale follows. */
import type { LessonTexts } from "../../model";

export const staccatoEn = {
  title: "Staccato",
  steps: {
    "staccato-demo": {
      text: "Listen to C up to G and back down. Each note is short, with a little silence after it.",
    },
    "short-and-detached": {
      text: "Playing short and detached is called staccato. Each note stands apart, like raindrops tapping on a window.",
    },
    "what-staccato-means": {
      text: "What does staccato mean?",
      answers: ["Short and detached", "Smooth and connected", "Slow and soft", "Louder and louder"],
    },
    "the-dot": {
      text: "A small dot above or below a note head asks for staccato. A dotted note's dot sits beside the head and makes the note longer.",
    },
    "where-the-dot-sits": {
      text: "Where does a staccato dot sit?",
      answers: ["Beside the note head, on the right", "At the end of the bar", "Above or below the note head", "On top of the stem"],
    },
    bounce: {
      text: "For staccato, bounce off the key like a ball off the floor. Play lightly from the wrist and let the key spring back at once.",
    },
    "both-hands-bounce": {
      text: "Play C, E, G, E, C in both hands together, the left hand an octave lower. Bounce off every note.",
    },
    "contrast-demo": {
      text: "Listen to the same five notes twice. One time they are legato, the other time staccato.",
    },
    "which-came-first": {
      text: "How did the two phrases sound?",
      answers: ["Both short", "First smooth, then short", "First short, then smooth", "Both smooth"],
    },
    "mixing-both": {
      text: "Music often mixes the two. A slur joins some notes, and dots make others short.",
    },
    "mixed-phrase": {
      text: "Play C, D, E, F and G legato under a slur. Then bounce three short Gs.",
    },
    "dot-above-quiz": {
      text: "A note has a small dot above it. How do you play it?",
      answers: ["Smooth into the next note", "Twice as long", "Held with the pedal", "Short, bouncing off the key"],
    },
    "bounced-chords": {
      text: "Bounce chords in the right hand: C major twice, then F major as C-F-A, G major as B-D-G and C major again.",
    },
    "which-lets-go-early": {
      text: "In which style does your finger leave the key well before the next note?",
      answers: ["Staccato", "Legato", "Under a slur", "On a whole note"],
    },
    recap: {
      text: "Well done. You play short and detached.",
      points: [
        "Staccato means short and detached.",
        "A dot above or below the note head marks it.",
        "Bounce lightly off the key from the wrist.",
        "Legato joins notes, and staccato sets them apart.",
      ],
    },
  },
} satisfies LessonTexts;

/** The texts' type, which every locale's file of this lesson fills. */
export type StaccatoTexts = typeof staccatoEn;
