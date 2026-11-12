/** *Crescendo and diminuendo* in English. Its object is the texts' type, which every other locale follows. */
import type { LessonTexts } from "../../model";

export const crescendoAndDiminuendoEn = {
  title: "Crescendo and diminuendo",
  steps: {
    "crescendo-demo": {
      text: "Listen to C, D, E, F and G. Each note sounds a little louder than the one before.",
    },
    "getting-louder": {
      text: "Growing louder bit by bit is a crescendo. The music marks it cresc., or with an opening hairpin <, which widens as the sound grows.",
    },
    "what-cresc-asks": {
      text: "You see cresc. under the staff. What does it ask you to do?",
      answers: ["Get softer bit by bit", "Get louder bit by bit", "Play faster", "Play the notes higher"],
    },
    "play-crescendo": {
      text: "Play C, D, E, F and G as a crescendo, starting on middle C. Press C, D and E gently and slowly, then F and G quickly and firmly.",
    },
    "hear-crescendo": {
      text: "Listen to C, D, E, F and G played as a crescendo. Each key goes down a little faster than the one before.",
    },
    "how-crescendo-changed": {
      text: "How did the sound change from the first note to the last?",
      answers: ["It stayed soft", "It got softer", "It stayed loud", "It got louder"],
    },
    "diminuendo-demo": {
      text: "Now listen to G, F, E, D and C. Each note sounds a little softer than the one before.",
    },
    "getting-softer": {
      text: "Growing softer bit by bit is a diminuendo, marked dim. It is also called a decrescendo, marked decresc. A closing hairpin > asks for the same.",
    },
    "which-hairpin-softer": {
      text: "Which mark asks you to get softer bit by bit?",
      answers: ["The closing hairpin >", "The opening hairpin <", "The mark f", "The mark mf"],
    },
    "play-diminuendo": {
      text: "Play G, F, E, D and C as a diminuendo. Press G, F and E quickly and firmly, then D and C gently and slowly.",
    },
    "hear-diminuendo": {
      text: "Listen to G, F, E, D and C played as a diminuendo. Each key goes down a little slower than the one before.",
    },
    "how-diminuendo-changed": {
      text: "How did the sound change from the first note to the last?",
      answers: ["It got louder", "It stayed loud", "It got softer", "It stayed soft"],
    },
    "swell-and-fade": {
      text: "A phrase often grows louder on its way up and softer on its way down. It swells and fades like a wave.",
    },
    "play-swell": {
      text: "Play C up to G and back down to C. Grow louder on the way up and softer on the way down. This step checks the notes, so let your ears judge the loudness.",
    },
    "how-it-ends": {
      text: "A phrase starts with p and has an opening hairpin < under it. How should it end?",
      answers: ["Softer than p", "Just as soft as it started", "Faster than it started", "Louder than it started"],
    },
    recap: {
      text: "Well done. You make music grow and fade.",
      points: [
        "A crescendo grows louder, marked cresc. or an opening hairpin <.",
        "A diminuendo grows softer, marked dim., decresc. or a closing hairpin >.",
        "A phrase often swells on the way up and fades on the way down.",
      ],
    },
  },
} satisfies LessonTexts;

/** The texts' type, which every locale's file of this lesson fills. */
export type CrescendoAndDiminuendoTexts = typeof crescendoAndDiminuendoEn;
