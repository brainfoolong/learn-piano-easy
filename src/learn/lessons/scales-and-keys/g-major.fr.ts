/** *G major* in French. */
import type { Translation } from "../../../i18n/translation";
import type { GMajorTexts } from "./g-major.en";

export const gMajorFr: Translation<GMajorTexts> = {
  title: "Sol majeur",
  steps: {
    "g-scale-demo": {
      text: "Écoute une gamme qui commence sur sol. Elle est aussi lumineuse que do majeur. En chemin, une des touches est noire.",
    },
    "pattern-from-g": {
      text: "Commence la formule de la gamme sur sol : ton, ton, demi-ton, ton, ton. Cela donne sol, la, si, do, ré et mi. Jusqu’ici, toutes les touches sont blanches.",
    },
    "whole-step-above-e": {
      text: "À partir de mi, la formule demande un ton. Quelle touche se trouve un ton au-dessus de mi ?",
      answers: ["Fa dièse", "Fa", "Sol"],
    },
    "one-sharp": {
      text: "La gamme de sol majeur prend donc fa dièse à la place de fa. De fa dièse, un demi-ton mène au sol du haut. Sol majeur a un dièse : fa dièse.",
    },
    "find-f-sharp": {
      text: "Trouve fa dièse sur le clavier. C’est la touche noire juste à droite de fa.",
    },
    "same-fingering": {
      text: "La main droite joue sol majeur comme do majeur. Les doigts 1, 2 et 3 jouent sol, la et si. Le pouce passe dessous jusqu’à do, puis les doigts 1, 2, 3, 4, 5 jouent do, ré, mi, fa dièse et sol.",
    },
    "g-scale-up": {
      text: "À toi. Pose le pouce droit sur le sol au-dessus du do central, et joue la gamme de sol majeur en montant jusqu’au sol suivant. Le doigt 4 joue fa dièse.",
    },
    "g-scale-down": {
      text: "Maintenant, joue-la en descendant, du sol aigu jusqu’au sol de départ. Le doigt 3 passe par-dessus le pouce et arrive sur si.",
    },
    "hear-f-and-f-sharp": {
      text: "Fa dièse n’est qu’un demi-ton au-dessus de fa, alors écoute bien. La deuxième touche est-elle plus aiguë, plus grave ou pareille ?",
    },
    "g-tune-demo": {
      text: "Voici une courte mélodie en sol majeur. La main gauche tient la quinte sol et ré, et la main droite joue fa dièse.",
    },
    "g-tune": {
      text: "Pose le pouce droit sur le ré au-dessus du do central : le doigt 3 repose alors sur fa dièse. La main gauche joue la quinte grave : le sol sous le do situé sous le do central, et le ré au-dessus. Joue la quinte avec le premier sol, puis à nouveau avec le deuxième.",
    },
    recap: {
      text: "Bravo. Tu as joué ta deuxième gamme.",
      points: [
        "La formule de la gamme majeure peut commencer sur n’importe quelle touche.",
        "En partant de sol, elle a besoin de fa dièse pour garder le demi-ton sous la note du haut.",
        "Sol majeur a un dièse : fa dièse.",
        "Son doigté est le même que celui de do majeur.",
      ],
    },
  },
};
