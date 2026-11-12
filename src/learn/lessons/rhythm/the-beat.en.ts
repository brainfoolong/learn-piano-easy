/** *The beat* in English. Its object is the texts' type, which every other locale follows. */
import type { LessonTexts } from "../../model";

export const theBeatEn = {
  title: "The beat",
  steps: {
    "beat-demo": {
      text: "Watch and listen. A low note sounds again and again under the tune, always at the same pace.",
    },
    "what-the-beat-is": {
      text: "Music has a steady beat, like your heartbeat or your steps when you walk. The low note you heard played the beat. You can nod or tap along with it.",
    },
    "tap-the-beat": {
      text: "Press Start and listen to four clicks first. Then tap any key once on every click.",
    },
    "steady-beat-quiz": {
      text: "A song plays from start to end. What does its beat do?",
      answers: ["It speeds up and slows down", "It stays steady"],
    },
    "tap-a-longer-beat": {
      text: "Now a longer round, a little faster. Keep tapping with the clicks, one tap on each.",
    },
    recap: {
      text: "Well done. You can feel the beat and tap along with it.",
      points: ["Music has a steady beat.", "The beat is like a heartbeat or walking steps.", "You tap once on every beat."],
    },
  },
} satisfies LessonTexts;

/** The texts' type, which every locale's file of this lesson fills. */
export type TheBeatTexts = typeof theBeatEn;
