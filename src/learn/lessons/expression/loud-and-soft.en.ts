/** *Loud and soft* in English. Its object is the texts' type, which every other locale follows. */
import type { LessonTexts } from "../../model";

export const loudAndSoftEn = {
  title: "Loud and soft",
  steps: {
    "soft-and-loud-demo": {
      text: "Listen to C, D, E, F and G played twice. The first time is soft, and the second time is loud.",
    },
    "key-speed": {
      text: "How loud a note sounds depends on how fast its key goes down. A key pressed gently and slowly sounds soft. A key pressed quickly sounds loud.",
    },
    "what-makes-loud": {
      text: "What makes a note sound louder?",
      answers: ["Holding the key longer", "Pressing a key further to the left", "Pressing the key down faster", "Pressing a black key"],
    },
    "play-softly": {
      text: "Play C, D, E, F and G above middle C softly. Press each key gently and slowly.",
    },
    "hear-softly": {
      text: "Listen to C, D, E, F and G played softly. Each key went down gently and slowly.",
    },
    "how-softly-sounded": {
      text: "How did those five notes sound?",
      answers: ["Soft", "Loud", "Soft, then loud", "Loud, then soft"],
    },
    "play-loudly": {
      text: "Now play the same five notes loudly. Press each key quickly and firmly, but never hit it hard.",
    },
    "hear-loudly": {
      text: "Listen to C, D, E, F and G played loudly. Each key went down quickly and firmly.",
    },
    "how-loudly-sounded": {
      text: "How did those five notes sound?",
      answers: ["Soft", "Soft, then loud", "Loud, then soft", "Loud"],
    },
    "piano-and-forte": {
      text: "Music marks how loud to play with letters under the staff. The mark p means piano, which is Italian for soft. The mark f means forte, which means loud.",
    },
    "what-f-asks": {
      text: "You see the mark f under the staff. What does it ask you to do?",
      answers: ["Play soft", "Play loud", "Play fast", "Play slowly"],
    },
    "mezzo-marks": {
      text: "Two marks sit in between. The mark mp means mezzo-piano, a little soft, and mf means mezzo-forte, a little loud.",
    },
    "softest-to-loudest": {
      text: "Which order goes from the softest mark to the loudest?",
      answers: ["f, mf, mp, p", "mp, p, mf, f", "p, mp, mf, f", "p, f, mp, mf"],
    },
    "echo-demo": {
      text: "Listen to a phrase marked f, then its echo marked p. The notes are the same, and only the loudness changes.",
    },
    "play-the-echo": {
      text: "Play C, E and G loudly, then play them again softly as an echo. This step checks the notes, so let your ears judge the loudness.",
    },
    recap: {
      text: "Well done. You play loud and soft.",
      points: [
        "How fast a key goes down sets how loud it sounds.",
        "The mark p means soft, and f means loud.",
        "The marks mp and mf sit in between.",
      ],
    },
  },
} satisfies LessonTexts;

/** The texts' type, which every locale's file of this lesson fills. */
export type LoudAndSoftTexts = typeof loudAndSoftEn;
