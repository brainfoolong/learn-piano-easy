/** *Tempo and the metronome* in English. Its object is the texts' type, which every other locale follows. */
import type { LessonTexts } from "../../model";

export const tempoAndTheMetronomeEn = {
  title: "Tempo and the metronome",
  steps: {
    "slow-demo": {
      text: "Watch and listen. This tune goes up from middle C to G and back down, slowly.",
    },
    "fast-demo": {
      text: "Now the same tune again. The notes are the same, but the beat goes faster.",
    },
    "what-tempo-is": {
      text: "Tempo is how fast the beat goes. We count it in beats per minute, or bpm. At 60 bpm the beat comes once a second, and at 120 bpm twice as often.",
    },
    "faster-tempo-quiz": {
      text: "Which tempo is faster?",
      answers: ["60 beats per minute", "120 beats per minute"],
    },
    "slow-first": {
      text: "A metronome clicks the beat at any tempo you choose. Practise a new piece slowly first. Once it feels easy, set the metronome a little faster.",
    },
    "slow-first-quiz": {
      text: "A new piece feels hard. How do you practise it?",
      answers: ["Slowly first, then a little faster", "At full speed from the start"],
    },
    "slow-tap": {
      text: "The metronome clicks at 60 bpm. Press Start and tap any key on each click.",
    },
    "faster-tap": {
      text: "The metronome clicks at 104 beats per minute. Press Start and tap any key once on each click.",
    },
    recap: {
      text: "Well done. You can keep a beat at two tempos now. Next comes Ode to Joy, slowly at first.",
      points: ["Tempo is how fast the beat goes, counted in beats per minute.", "A metronome clicks the beat at the tempo you choose.", "Practise slowly first, then a little faster."],
    },
  },
} satisfies LessonTexts;

/** The texts' type, which every locale's file of this lesson fills. */
export type TempoAndTheMetronomeTexts = typeof tempoAndTheMetronomeEn;
