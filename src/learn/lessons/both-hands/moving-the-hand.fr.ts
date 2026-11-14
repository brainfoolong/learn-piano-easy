/** *Moving the hand* in French. */
import type { Translation } from "../../../i18n/translation";
import type { MovingTheHandTexts } from "./moving-the-hand.en";

export const movingTheHandFr: Translation<MovingTheHandTexts> = {
  title: "Déplacer la main",
  steps: {
    "phrase-then-move": {
      text: "Regarde la main droite. Elle joue cinq notes en position de do, monte pendant le silence, et rejoue la même formule plus haut.",
    },
    "new-position": {
      text: "Une position à cinq doigts peut aussi commencer sur d’autres touches. En position de sol, le pouce droit est sur le sol au-dessus du do central. Les doigts couvrent sol la si do ré.",
    },
    "new-thumb": {
      text: "Trouve la touche du pouce droit en position de sol : le sol juste au-dessus du do central.",
    },
    "little-finger-quiz": {
      text: "La main droite est en position de sol. Quelle touche joue l’auriculaire ?",
      answers: ["Ré", "Do", "Sol", "Mi"],
    },
    "middle-finger-quiz": {
      text: "Toujours en position de sol. Quelle touche joue le doigt 3 ?",
      answers: ["Mi", "Si", "La"],
    },
    "read-g-position": {
      text: "Voici les notes de la position de sol sur la portée en clef de sol. Nomme chacune d’elles.",
    },
    "c-position-phrase": {
      text: "Commence en position de do. Monte du pouce jusqu’au doigt 4, puis redescends jusqu’au do central.",
    },
    "g-position-phrase": {
      text: "Maintenant, déplace la main en position de sol et joue la même formule. Pouce sur sol, monte jusqu’au do, puis redescends.",
    },
    "move-in-a-rest": {
      text: "Déplace la main pendant un silence ou à la fin d’une note longue. Lève toute la main, garde sa position, et arrive avec le pouce sur la nouvelle touche.",
    },
    "move-and-play": {
      text: "Joue deux phrases d’affilée de la main droite. Commence sur le do central et joue do ré mi fa mi ré do. Puis déplace la main pour poser le pouce sur le sol au-dessus du do central, et joue sol la si do si la sol.",
    },
    recap: {
      text: "Bravo. La main peut maintenant changer de place.",
      points: [
        "En position de sol, le pouce droit est sur le sol au-dessus du do central.",
        "Les doigts jouent alors sol la si do ré.",
        "Déplace toute la main pendant un silence ou une note longue, et garde sa position.",
      ],
    },
  },
};
