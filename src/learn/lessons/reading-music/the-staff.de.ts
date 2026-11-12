/** *The staff* in German. */
import type { TheStaffTexts } from "./the-staff.en";

export const theStaffDe: TheStaffTexts = {
  title: "Das Notensystem",
  steps: {
    "five-lines": {
      text: "Musik steht in einem Notensystem. Es besteht aus fünf Notenlinien übereinander. Du zählst sie von unten nach oben, die unterste ist also die erste.",
    },
    "lines-quiz": {
      text: "Wie viele Notenlinien hat ein Notensystem?",
      answers: ["Vier", "Fünf", "Sechs"],
    },
    "four-spaces": {
      text: "Zwischen den fünf Notenlinien liegen vier Zwischenräume. Auch die Zwischenräume zählst du von unten nach oben.",
    },
    "spaces-quiz": {
      text: "Wie viele Zwischenräume liegen zwischen den Notenlinien?",
      answers: ["Drei", "Vier", "Fünf"],
    },
    "line-or-space": {
      text: "Eine Note sitzt auf einer Linie oder in einem Zwischenraum. Auf einer Linie geht die Linie mitten durch die Note. Im Zwischenraum füllt die Note die Lücke zwischen zwei Linien.",
    },
    "line-or-space-quiz": {
      text: "Eine Linie geht mitten durch eine Note. Wo sitzt diese Note?",
      answers: ["Auf einer Linie", "In einem Zwischenraum"],
    },
    "higher-is-higher": {
      text: "Je höher eine Note im Notensystem steht, desto höher klingt sie. Ein Schritt nach oben, von einer Linie in den nächsten Zwischenraum, ist die nächste weiße Taste rechts.",
    },
    "climb-demo": {
      text: "Schau zu und hör hin. Das Klavier steigt von der untersten bis zur obersten Linie, immer eine Linie oder einen Zwischenraum weiter. Jeder Ton klingt ein bisschen höher.",
    },
    "higher-or-lower-listen": {
      text: "Du hörst zwei Töne. Ist der zweite höher, tiefer oder gleich hoch wie der erste? Ein höherer Ton stünde weiter oben im Notensystem.",
    },
    "top-or-bottom-quiz": {
      text: "Eine Note sitzt auf der obersten Linie, eine andere auf der untersten. Welche klingt höher?",
      answers: ["Die Note auf der untersten Linie", "Die Note auf der obersten Linie", "Beide klingen gleich hoch"],
    },
    "first-line-quiz": {
      text: "Welche Notenlinie ist die erste?",
      answers: ["Die unterste Linie", "Die mittlere Linie", "Die oberste Linie"],
    },
    recap: {
      text: "Gut gemacht. Jetzt kennst du das Notensystem.",
      points: ["Ein Notensystem hat fünf Notenlinien und vier Zwischenräume, von unten gezählt.", "Eine Note sitzt auf einer Linie oder in einem Zwischenraum.", "Je höher die Note steht, desto höher klingt sie."],
    },
  },
};
