/** *Reading steps and skips* in German. */
import type { ReadingStepsAndSkipsTexts } from "./reading-steps-and-skips.en";

export const readingStepsAndSkipsDe: ReadingStepsAndSkipsTexts = {
  title: "Schritte und Sprünge lesen",
  steps: {
    "moves-demo": {
      text: "Hör zu. Zuerst steigen die Töne in Schritten, dann in Sprüngen. Auf dem Notenblatt sieht jede Bewegung anders aus.",
    },
    "step-on-the-staff": {
      text: "Ein Schritt geht von einer Notenlinie in den nächsten Zwischenraum oder von einem Zwischenraum auf die nächste Linie. Auf den Tasten ist das die nächste weiße Taste.",
    },
    "step-from-line-quiz": {
      text: "Eine Note steht auf einer Linie. Wo steht die Note einen Schritt höher?",
      answers: ["Im Zwischenraum direkt darüber", "Auf der nächsten Linie darüber", "Zwei Linien höher"],
    },
    "skip-on-the-staff": {
      text: "Ein Sprung geht von einer Linie zur nächsten Linie oder von einem Zwischenraum zum nächsten. Auf den Tasten lässt er eine weiße Taste aus.",
    },
    "step-or-skip-quiz": {
      text: "Eine Note geht von einer Linie zur nächsten Linie nach oben. Ist das ein Schritt oder ein Sprung?",
      answers: ["Ein Schritt", "Ein Sprung"],
    },
    "space-to-line-quiz": {
      text: "Eine Note geht von einem Zwischenraum auf die Linie direkt darüber. Ist das ein Schritt oder ein Sprung?",
      answers: ["Ein Schritt", "Ein Sprung"],
    },
    "read-by-moves": {
      text: "Du musst nicht jeden Ton einzeln benennen. Lies den ersten Ton, dann jede Bewegung: nach oben oder unten, Schritt oder Sprung.",
    },
    "skip-from-e-quiz": {
      text: "Ein Ton ist das E auf der untersten Linie im Violinschlüssel. Der nächste Ton steht auf der Linie darüber. Welcher Ton ist es?",
      answers: ["D", "F", "G"],
    },
    "first-note": {
      text: "Mit diesem Ton beginnt das nächste Lied. Wie heißt er?",
    },
    "hand-on-d": {
      text: "Schau, wie die rechte Hand aus der C-Lage nach oben rückt. Der Daumen liegt auf D, die Finger 2 bis 5 auf E, G, A und H. Das F fällt weg, darum spreizen sich die Finger 2 und 3 etwas weiter.",
    },
    "d-position": {
      text: "Jetzt du. Leg den rechten Daumen auf D und spiel D E G A H mit den Fingern 1 bis 5. Dann geh zurück bis zum D.",
    },
    "song-notes": {
      text: "Das nächste Lied braucht diese fünf Töne. Lies jeden und spiel ihn mit der rechten Hand.",
    },
    "song-opening": {
      text: "So beginnt das nächste Lied. Lass die rechte Hand auf D, E, G, A und H liegen und folg der markierten Taste.",
    },
    "opening-move-quiz": {
      text: "In dieser Melodie geht das E abwärts zum D. Das E steht auf der untersten Linie. Wo steht das D?",
      answers: ["Im Zwischenraum direkt darunter", "Auf der Linie darunter", "Auf derselben Linie"],
    },
    "dotted-demo": {
      text: "Hör dir zwei Takte des Lieds an. Ein Punkt macht eine Note um die Hälfte länger: Eine punktierte halbe Note dauert drei Schläge. Die punktierte Viertel D dauert anderthalb Schläge, und eine Achtelpause füllt den letzten halben Schlag.",
    },
    "dotted-half-quiz": {
      text: "Eine halbe Note dauert zwei Schläge. Wie viele Schläge dauert eine punktierte halbe Note?",
      answers: ["Zwei Schläge", "Drei Schläge", "Vier Schläge"],
    },
    "dotted-tap": {
      text: "Jetzt du, nach einem Takt zum Einzählen. Spiel E, E und D auf die Klicks und heb das D nach anderthalb Schlägen. Halt das G drei Schläge lang und spiel dann D.",
    },
    recap: {
      text: "Gut gemacht. Jetzt liest du eine Melodie an ihren Bewegungen.",
      points: [
        "Ein Schritt geht von der Linie in den nächsten Zwischenraum oder umgekehrt.",
        "Ein Sprung geht von Linie zu Linie oder von Zwischenraum zu Zwischenraum.",
        "Lies den ersten Ton, dann die Richtung und die Größe jeder Bewegung.",
        "Ein Punkt macht eine Note um die Hälfte länger.",
      ],
    },
  },
};
