/** *Hands take turns* in German. */
import type { HandsTakeTurnsTexts } from "./hands-take-turns.en";

export const handsTakeTurnsDe: HandsTakeTurnsTexts = {
  title: "Die Hände wechseln sich ab",
  steps: {
    "call-and-answer": {
      text: "Hör dir Ruf und Antwort an. Die rechte Hand spielt drei Töne, dann spielt die linke Hand sie nach, eine Oktave tiefer.",
    },
    "both-positions": {
      text: "Leg beide Hände gleichzeitig in die C-Lage. Der rechte Daumen liegt auf dem mittleren C, der linke kleine Finger auf dem C eine Oktave tiefer.",
    },
    "low-hand-quiz": {
      text: "Beide Hände liegen in C-Lage. Welche Hand spielt die tiefen Töne?",
      answers: ["Die linke Hand", "Die rechte Hand", "Beide Hände zusammen"],
    },
    "echo-listen": {
      text: "Du hörst jedes Mal zwei Töne. Ist der zweite höher, tiefer oder gleich?",
    },
    "first-turn": {
      text: "Jetzt du. Spiel C D E mit der rechten Hand und danach C D E mit der linken.",
    },
    "second-turn": {
      text: "Beginn jetzt mit dem rechten kleinen Finger und geh hinunter bis zum E. Die linke Hand antwortet, vom Daumen hinunter bis zum E.",
    },
    "one-waits": {
      text: "Während eine Hand spielt, liegt die andere ruhig auf ihren Tasten und wartet. So ist sie bereit, wenn sie wieder dran ist.",
    },
    "long-phrase": {
      text: "Lass beide Hände in der C-Lage. Diese längere Melodie hat vier Teile: rechte Hand, linke Hand, rechts, dann links. Folge der markierten Taste von Hand zu Hand.",
    },
    recap: {
      text: "Gut gemacht. Deine Hände teilen sich jetzt eine Melodie.",
      points: [
        "Beide Hände können gleichzeitig in C-Lage liegen, eine Oktave auseinander.",
        "Die linke Hand spielt die tiefen Töne, die rechte die hohen.",
        "Eine Hand spielt, die andere wartet ruhig, bis sie dran ist.",
      ],
    },
  },
};
