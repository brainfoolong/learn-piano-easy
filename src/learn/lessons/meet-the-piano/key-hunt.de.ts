/** *The key hunt* in German. */
import type { KeyHuntTexts } from "./key-hunt.en";

export const keyHuntDe: KeyHuntTexts = {
  title: "Die Tastenjagd",
  steps: {
    ready: {
      text: "Auf zur Tastenjagd! Für jede Taste hast du acht Sekunden. Die Gruppen der schwarzen Tasten zeigen dir den Weg.",
    },
    "any-c": { text: "Finde ein C." },
    "middle-c": { text: "Jetzt das mittlere C, das C in der Mitte des Klaviers." },
    "any-f": { text: "Finde ein F." },
    "any-g": { text: "Finde ein G." },
    "any-d": { text: "Finde ein D." },
    "any-b": { text: "Finde ein H." },
    "three-middle": { text: "Finde die mittlere schwarze Taste einer Dreiergruppe." },
    "any-e": { text: "Finde ein E." },
    "any-a": { text: "Finde ein A." },
    "high-c": { text: "Die letzte! Finde das C eine Oktave über dem mittleren C." },
    recap: {
      text: "Du hast die Tastenjagd geschafft. Du findest dich auf dem Klavier zurecht.",
      points: ["Die schwarzen Tasten zeigen dir den Weg, in Zweier- und Dreiergruppen.", "Sieben Buchstaben benennen die weißen Tasten, von C bis H.", "Derselbe Buchstabe kommt eine Oktave höher wieder."],
    },
  },
};
