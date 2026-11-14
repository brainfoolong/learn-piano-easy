/** *Tempo and the metronome* in French. */
import type { Translation } from "../../../i18n/translation";
import type { TempoAndTheMetronomeTexts } from "./tempo-and-the-metronome.en";

export const tempoAndTheMetronomeFr: Translation<TempoAndTheMetronomeTexts> = {
  title: "Le tempo et le métronome",
  steps: {
    "slow-demo": {
      text: "Regarde et écoute. Cette mélodie monte du do central jusqu’au sol, puis redescend, lentement.",
    },
    "fast-demo": {
      text: "Maintenant, la même mélodie encore une fois. Les notes sont les mêmes, mais la pulsation va plus vite.",
    },
    "what-tempo-is": {
      text: "Le tempo, c’est la vitesse de la pulsation. Il se compte en pulsations par minute, en abrégé BPM. À 60 BPM, la pulsation revient une fois par seconde. À 120 BPM, elle revient deux fois plus souvent.",
    },
    "faster-tempo-quiz": {
      text: "Quel tempo est le plus rapide ?",
      answers: ["60 pulsations par minute", "120 pulsations par minute"],
    },
    "slow-first": {
      text: "Un métronome fait entendre la pulsation au tempo de ton choix. Travaille d’abord un nouveau morceau lentement. Quand il te semble facile, règle le métronome un peu plus vite.",
    },
    "slow-first-quiz": {
      text: "Un nouveau morceau te semble difficile. Comment le travailles-tu ?",
      answers: ["D’abord lentement, puis un peu plus vite", "Au tempo dès le début"],
    },
    "slow-tap": {
      text: "Le métronome bat à 60 pulsations par minute. Appuie sur Démarrer, puis appuie sur une touche au choix à chaque clic.",
    },
    "faster-tap": {
      text: "Le métronome bat à 104 pulsations par minute. Appuie sur Démarrer, puis appuie une fois sur une touche au choix à chaque clic.",
    },
    recap: {
      text: "Bravo. Tu sais maintenant garder la pulsation à deux tempos. Ensuite vient l’« Hymne à la joie », lentement d’abord.",
      points: ["Le tempo, c’est la vitesse de la pulsation, comptée en pulsations par minute.", "Un métronome fait entendre la pulsation au tempo de ton choix.", "Travaille d’abord lentement, puis un peu plus vite."],
    },
  },
};
