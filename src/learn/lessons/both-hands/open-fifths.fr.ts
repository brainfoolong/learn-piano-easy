/** *Open fifths* in French. */
import type { Translation } from "../../../i18n/translation";
import type { OpenFifthsTexts } from "./open-fifths.en";

export const openFifthsFr: Translation<OpenFifthsTexts> = {
  title: "Quintes à vide",
  steps: {
    "fifth-sound": {
      text: "Écoute la main gauche jouer deux touches à la fois. Ce son s’appelle une quinte à vide. Il sonne ouvert, puissant et calme.",
    },
    "little-finger-and-thumb": {
      text: "Pose la main gauche en position de do. Joue do avec l’auriculaire et sol avec le pouce, en même temps. C’est une quinte.",
    },
    "count-the-fifth": {
      text: "Compte les touches blanches de do jusqu’à sol, do et sol compris. Combien de touches cela fait-il ?",
      answers: ["Cinq", "Trois", "Huit"],
    },
    "first-fifth": {
      text: "À toi. Joue trois fois la quinte do et sol. Enfonce les deux touches ensemble à chaque fois.",
    },
    "move-the-fifth": {
      text: "Une quinte est une position que tu peux déplacer. Garde le même écart entre l’auriculaire et le pouce, et fais glisser toute la main.",
    },
    "fifth-from-g": {
      text: "L’auriculaire gauche est posé sur sol. Quelle touche joue le pouce pour faire une quinte ?",
      answers: ["Ré", "Do", "Mi"],
    },
    "three-fifths": {
      text: "De la main gauche, joue la quinte du do sous le do central jusqu’au sol. Puis joue la quinte sur le sol sous ce do, puis sur le fa en dessous, et reviens sur do. Garde la même position à chaque fois.",
    },
    "fifth-under-tune": {
      text: "Maintenant, la main droite joue une mélodie au-dessus de la quinte. La main gauche joue la quinte avec la première note et la tient.",
    },
    "fifth-and-tune": {
      text: "À toi. Joue la quinte do et sol avec le mi de la main droite, puis ré et do. Joue encore la quinte avec mi, puis deux autres mi.",
    },
    recap: {
      text: "Bravo. La main gauche joue maintenant des quintes.",
      points: [
        "Une quinte couvre cinq touches blanches, en comptant les deux bouts. Ses deux touches se jouent ensemble.",
        "L’auriculaire gauche joue la touche grave, et le pouce la touche aiguë.",
        "La position se déplace : do et sol, sol et ré, fa et do.",
        "Sous une mélodie, une quinte sonne ouverte et puissante.",
      ],
    },
  },
};
