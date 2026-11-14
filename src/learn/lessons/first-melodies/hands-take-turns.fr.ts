/** *Hands take turns* in French. */
import type { Translation } from "../../../i18n/translation";
import type { HandsTakeTurnsTexts } from "./hands-take-turns.en";

export const handsTakeTurnsFr: Translation<HandsTakeTurnsTexts> = {
  title: "Chaque main à son tour",
  steps: {
    "call-and-answer": {
      text: "Écoute une question et sa réponse. La main droite joue trois notes, puis la main gauche les rejoue une octave plus bas.",
    },
    "both-positions": {
      text: "Pose les deux mains en position de do en même temps. Le pouce droit repose sur le do central, et l’auriculaire gauche sur le do une octave plus bas.",
    },
    "low-hand-quiz": {
      text: "Les deux mains sont en position de do. Quelle main joue les notes graves ?",
      answers: ["La main gauche", "La main droite", "Les deux mains ensemble"],
    },
    "echo-listen": {
      text: "Écoute chaque fois deux notes. La deuxième est-elle plus aiguë, plus grave ou pareille ?",
    },
    "first-turn": {
      text: "À toi. Joue do ré mi avec la main droite, puis do ré mi avec la main gauche.",
    },
    "second-turn": {
      text: "Maintenant, commence sur l’auriculaire droit et descends jusqu’à mi. La main gauche répond, du pouce en descendant jusqu’à mi.",
    },
    "one-waits": {
      text: "Pendant qu’une main joue, l’autre repose sur ses touches et attend. Elle reste en place, prête pour son tour.",
    },
    "long-phrase": {
      text: "Garde les deux mains en position de do. Cette mélodie plus longue se joue en quatre tours : main droite, main gauche, droite, puis gauche. Suis la touche marquée d’une main à l’autre.",
    },
    recap: {
      text: "Bravo. Les deux mains se partagent maintenant une mélodie.",
      points: [
        "Les deux mains peuvent être en position de do en même temps, à une octave l’une de l’autre.",
        "La main gauche joue les notes graves, et la main droite les aiguës.",
        "Une main joue pendant que l’autre attend son tour sans bouger.",
      ],
    },
  },
};
