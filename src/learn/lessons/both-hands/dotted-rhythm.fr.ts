/** *The dotted rhythm* in French. */
import type { Translation } from "../../../i18n/translation";
import type { DottedRhythmTexts } from "./dotted-rhythm.en";

export const dottedRhythmFr: Translation<DottedRhythmTexts> = {
  title: "Le rythme pointé",
  steps: {
    "even-and-dotted-demo": {
      text: "Écoute mi et ré dans deux rythmes. D’abord des noires égales : mi mi ré ré. Puis un mi long est suivi d’un ré rapide, et un ré long termine.",
    },
    "what-a-dot-does": {
      text: "Cette note longue portait un point. Un point ajoute la moitié de la durée de la note. Une note pointée dure donc une fois et demie plus longtemps.",
    },
    "dotted-half-demo": {
      text: "Une blanche dure deux temps, et son point en ajoute un. Compte « 1, 2, 3 » sur chacune de ces blanches pointées.",
    },
    "dotted-half-quiz": {
      text: "Combien de temps dure une blanche pointée ?",
      answers: ["Deux temps", "Trois temps", "Quatre temps"],
    },
    "dotted-quarter": {
      text: "Une noire dure un temps, et son point ajoute un demi-temps. Une noire pointée commence sur « 1 » et dure jusqu’à « 2 et ». Une croche sur « 2 et » complète le reste.",
    },
    "dotted-quarter-quiz": {
      text: "Combien de temps dure une noire pointée ?",
      answers: ["Un temps", "Un temps et demi", "Deux temps"],
    },
    "partner-quiz": {
      text: "Une noire pointée et une autre note remplissent deux temps ensemble. Quelle est cette note ?",
      answers: ["Une noire", "Une croche", "Une blanche"],
    },
    "ode-demo": {
      text: "Voici le début de l’« Hymne à la joie ». Sa dernière mesure a le rythme pointé : un mi long, un ré rapide, puis un ré long.",
    },
    "ode-phrase": {
      text: "Pose le pouce droit sur le do central et joue la mélodie. Tiens le dernier mi un peu plus longtemps, puis joue vite le ré qui suit.",
    },
    "fourth-demo": {
      text: "Écoute la main gauche de l’épreuve finale. Elle alterne la quinte do et sol, que tu connais, avec ré et sol. Ré et sol forment une quarte : elle couvre quatre touches blanches, en comptant les deux.",
    },
    "fifth-and-fourth": {
      text: "À toi. Pose le doigt 5 sur le do sous le do central, et le pouce sur sol. Joue do et sol ensemble, puis ré et sol avec le doigt 4 sur ré, et répète les deux.",
    },
    recap: {
      text: "Bravo. Tu sais maintenant jouer le rythme d’un air célèbre.",
      points: [
        "Un point ajoute la moitié de la durée d’une note.",
        "Une blanche pointée dure trois temps.",
        "Une noire pointée dure un temps et demi.",
        "Une croche suit souvent une noire pointée.",
      ],
    },
  },
};
