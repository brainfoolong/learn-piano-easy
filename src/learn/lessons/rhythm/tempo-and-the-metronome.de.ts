/** *Tempo and the metronome* in German. */
import type { TempoAndTheMetronomeTexts } from "./tempo-and-the-metronome.en";

export const tempoAndTheMetronomeDe: TempoAndTheMetronomeTexts = {
  title: "Tempo und Metronom",
  steps: {
    "slow-demo": {
      text: "Schau zu und hör hin. Diese Melodie steigt vom mittleren C bis zum G und wieder hinab, ganz langsam.",
    },
    "fast-demo": {
      text: "Jetzt kommt dieselbe Melodie noch einmal. Die Töne bleiben gleich, aber der Grundschlag ist schneller.",
    },
    "what-tempo-is": {
      text: "Das Tempo sagt, wie schnell der Grundschlag geht. Man misst es in Schlägen pro Minute. Bei 60 kommt jede Sekunde ein Schlag, bei 120 doppelt so oft.",
    },
    "faster-tempo-quiz": {
      text: "Welches Tempo ist schneller?",
      answers: ["60 Schläge pro Minute", "120 Schläge pro Minute"],
    },
    "slow-first": {
      text: "Ein Metronom klickt den Grundschlag in jedem Tempo, das du einstellst. Übe ein neues Stück zuerst langsam. Wenn es leicht geht, stell das Metronom etwas schneller.",
    },
    "slow-first-quiz": {
      text: "Ein neues Stück fällt dir schwer. Wie übst du es?",
      answers: ["Erst langsam, dann etwas schneller", "Gleich im vollen Tempo"],
    },
    "slow-tap": {
      text: "Das Metronom klickt mit 60 Schlägen pro Minute. Drück auf Start und tippe bei jedem Klick auf eine beliebige Taste.",
    },
    "faster-tap": {
      text: "Das Metronom klickt mit 104 Schlägen pro Minute. Drück auf Start und tippe bei jedem Klick einmal auf eine beliebige Taste.",
    },
    recap: {
      text: "Gut gemacht. Du hältst den Grundschlag jetzt in zwei Tempi. Als Nächstes wartet die Ode an die Freude, zuerst langsam.",
      points: ["Das Tempo sagt, wie schnell der Grundschlag geht.", "Ein Metronom klickt den Grundschlag in dem Tempo, das du wählst.", "Übe zuerst langsam und dann etwas schneller."],
    },
  },
};
