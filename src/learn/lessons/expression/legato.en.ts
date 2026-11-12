/** *Legato* in English. Its object is the texts' type, which every other locale follows. */
import type { LessonTexts } from "../../model";

export const legatoEn = {
  title: "Legato",
  steps: {
    "legato-demo": {
      text: "Listen to C up to G and back down. Each note flows into the next, with no gap between them.",
    },
    "smooth-and-connected": {
      text: "Playing smooth and connected is called legato. The notes join like the words of a song sung in one breath.",
    },
    "what-legato-means": {
      text: "What does legato mean?",
      answers: ["Very loud", "Very fast", "With a rest after each note", "Smooth and connected"],
    },
    "hand-over": {
      text: "For legato, let go of one key just as the next one goes down. One finger rises while the next one sinks.",
    },
    "five-notes-legato": {
      text: "Play C, D, E, F and G with fingers 1 to 5. Hand each note over to the next, with no gap.",
    },
    "when-to-let-go": {
      text: "You play legato. When does a finger leave its key?",
      answers: ["Before the next key goes down", "Just as the next key goes down", "Long after the next key", "Only at the end of the piece"],
    },
    "the-slur": {
      text: "A curved line over or under a group of notes is a slur. It asks you to play those notes legato.",
    },
    "what-a-slur-asks": {
      text: "A curved line joins five notes. How do you play them?",
      answers: ["Each one short", "Louder and louder", "Smooth and connected", "All at the same time"],
    },
    "slurred-phrase": {
      text: "A slur joins this phrase: G, F, E, D, C, then D and E. Play it legato, one finger handing over to the next.",
    },
    "fingers-make-it": {
      text: "Legato needs a free finger for each next note. In a scale, the thumb passes under, so the line never breaks.",
    },
    "scale-legato": {
      text: "Play the C major scale up with fingers 1, 2, 3, then the thumb under to F. Keep every note joined to the next.",
    },
    "which-move-keeps-it-smooth": {
      text: "You play the C major scale up legato. After E with finger 3, how do you reach F?",
      answers: ["The thumb passes under to F", "Lift the hand and jump to F", "Play F with finger 3 again", "Leave F out"],
    },
    "both-hands-legato": {
      text: "Play C up to G in both hands together, the left hand an octave lower. Keep both hands smooth.",
    },
    "which-is-legato": {
      text: "Which notes do you play legato?",
      answers: ["Notes with a rest after each", "Notes all on one key", "Notes far apart that need a jump", "Notes under a slur"],
    },
    recap: {
      text: "Well done. You play smooth and connected.",
      points: [
        "Legato means smooth and connected.",
        "Let go of one key just as the next one goes down.",
        "A slur, the curved line, marks notes to play legato.",
        "A good fingering, like the thumb passing under, keeps the line joined.",
      ],
    },
  },
} satisfies LessonTexts;

/** The texts' type, which every locale's file of this lesson fills. */
export type LegatoTexts = typeof legatoEn;
