/** *Welcome to the piano* in German. */
import type { WelcomeTexts } from "./welcome.en";

export const welcomeDe: WelcomeTexts = {
  title: "Willkommen am Klavier",
  steps: {
    hello: {
      text: "Willkommen! Hier lernst du Klavier in kleinen Schritten. Jede Lektion zeigt dir eine Idee, und du probierst sie gleich aus.",
    },
    "sound-check": {
      text: "Zuerst ein Tontest. Das Klavier spielt vier Töne. Hörst du nichts, dreh den Ton lauter und drück auf \"Noch einmal\".",
    },
    "ways-to-play": {
      text: "Du kannst jede Lektion auf den Tasten am Bildschirm spielen, auf deiner Computertastatur oder auf einem MIDI-Keyboard. Für ein MIDI-Keyboard steckst du es an und drückst einmal \"MIDI-Geräte verbinden\" in den Einstellungen des Players.",
    },
    "ways-quiz": {
      text: "Worauf kannst du eine Lektion spielen?",
      answers: ["Nur auf einem MIDI-Keyboard", "Nur auf den Tasten am Bildschirm", "Auf allen dreien: am Bildschirm, auf der Computertastatur oder einem MIDI-Keyboard"],
    },
    "first-key": {
      text: "Dein erster Ton! Drück die markierte Taste.",
    },
    "three-keys": {
      text: "Jetzt drei Tasten hintereinander. Spiel jede markierte Taste, von links nach rechts.",
    },
    recap: {
      text: "Gut gemacht. Du hast deine ersten Töne gespielt.",
      points: ["Der Tontest zeigt dir, ob du das Klavier hörst.", "Du spielst am Bildschirm, auf der Computertastatur oder einem MIDI-Keyboard.", "Die markierte Taste ist immer die nächste."],
    },
  },
};
