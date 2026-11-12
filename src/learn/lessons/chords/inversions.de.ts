/** *Inversions* in German. */
import type { InversionsTexts } from "./inversions.en";

export const inversionsDe: InversionsTexts = {
  title: "Umkehrungen",
  steps: {
    "inversions-demo": {
      text: "Hör dir drei Akkorde an. Jeder hat die Töne C, E und G. Nur ihre Reihenfolge ändert sich.",
    },
    "same-three-notes": {
      text: "C-E-G mit dem C unten ist die Grundstellung. Eine Umkehrung spielt dieselben drei Töne in anderer Reihenfolge. Es bleibt C-Dur.",
    },
    "root-position": {
      text: "Spiel C-Dur in Grundstellung: C, E und G ab dem mittleren C, alle zusammen. Nimm die Finger 1, 3 und 5.",
    },
    "first-inversion": {
      text: "Jetzt legst du den untersten Ton eine Oktave höher. Aus C-E-G wird E-G-C. Das ist die erste Umkehrung.",
    },
    "play-first-inversion": {
      text: "Spiel die erste Umkehrung: E und G über dem mittleren C und das C darüber. Drück alle drei zusammen.",
    },
    "which-chord-is-e-g-c": {
      text: "E-G-C klingt ein wenig anders als C-E-G. Welcher Akkord ist es?",
      answers: ["a-Moll", "e-Moll", "C-Dur"],
    },
    "second-inversion": {
      text: "Leg den untersten Ton noch einmal eine Oktave höher. Aus E-G-C wird G-C-E. Das ist die zweite Umkehrung.",
    },
    "play-second-inversion": {
      text: "Spiel die zweite Umkehrung: das G über dem mittleren C, dann das nächste C und E darüber. Drück alle drei zusammen.",
    },
    "climb-the-inversions": {
      text: "Steig mit C-Dur die Tasten hinauf: Grundstellung, erste Umkehrung, zweite Umkehrung und die Grundstellung eine Oktave höher.",
    },
    "move-less": {
      text: "Mit Umkehrungen bewegt sich deine Hand zwischen den Akkorden weniger. F-Dur als C-F-A und G-Dur als H-D-G liegen direkt neben C-E-G.",
    },
    "close-chords-demo": {
      text: "Hör dir C, F, G und C noch einmal an, eng beieinander gespielt. Jeder Finger bewegt sich nur um ein oder zwei Tasten.",
    },
    "which-chord-is-c-f-a": {
      text: "C-F-A hat die Töne F, A und C in anderer Reihenfolge. Welcher Akkord ist es?",
      answers: ["C-Dur", "F-Dur", "a-Moll"],
    },
    "close-chords": {
      text: "Spiel C-E-G, C-F-A, H-D-G und C-E-G, beginnend auf dem mittleren C. Lass die Hand an ihrem Platz und beweg nur die Finger.",
    },
    "close-chords-with-bass": {
      text: "Jetzt spielt die linke Hand unter jedem Akkord den Grundton: C, F, G und C unter dem mittleren C.",
    },
    recap: {
      text: "Gut gemacht. Du spielst Akkorde in drei Lagen.",
      points: [
        "Eine Umkehrung spielt die drei Töne eines Akkords in anderer Reihenfolge.",
        "Leg den untersten Ton eine Oktave höher: Aus C-E-G wird E-G-C, dann G-C-E.",
        "Der Akkord bleibt derselbe: E-G-C und G-C-E sind immer noch C-Dur.",
        "Umkehrungen halten Akkorde nah beieinander, also bewegt sich die Hand weniger.",
      ],
    },
  },
};
