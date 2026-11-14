/** *The beat* in French. */
import type { Translation } from "../../../i18n/translation";
import type { TheBeatTexts } from "./the-beat.en";

export const theBeatFr: Translation<TheBeatTexts> = {
  title: "La pulsation",
  steps: {
    "beat-demo": {
      text: "Regarde et écoute. Sous la mélodie, une note grave revient sans cesse, toujours à la même allure.",
    },
    "what-the-beat-is": {
      text: "La musique a une pulsation régulière, comme les battements du cœur ou tes pas quand tu marches. La note grave que tu as entendue jouait la pulsation. Tu peux hocher la tête ou taper en même temps qu’elle.",
    },
    "tap-the-beat": {
      text: "Appuie sur Démarrer et écoute d’abord quatre clics. Ensuite, appuie une fois sur une touche au choix à chaque clic.",
    },
    "steady-beat-quiz": {
      text: "Un morceau se joue du début à la fin. Que fait sa pulsation ?",
      answers: ["Elle accélère et ralentit", "Elle reste régulière"],
    },
    "tap-a-longer-beat": {
      text: "Maintenant, une manche plus longue et un peu plus rapide. Continue d’appuyer en même temps que les clics, une fois sur chacun.",
    },
    recap: {
      text: "Bravo. Tu sens la pulsation et tu sais taper en même temps qu’elle.",
      points: ["La musique a une pulsation régulière.", "La pulsation ressemble aux battements du cœur ou à des pas.", "Tu appuies une fois sur chaque temps."],
    },
  },
};
