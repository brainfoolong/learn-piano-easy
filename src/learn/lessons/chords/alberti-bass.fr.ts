/** *The Alberti bass* in French. */
import type { Translation } from "../../../i18n/translation";
import type { AlbertiBassTexts } from "./alberti-bass.en";

export const albertiBassFr: Translation<AlbertiBassTexts> = {
  title: "La basse d’Alberti",
  steps: {
    "alberti-demo": {
      text: "Écoute la main gauche seule. Elle brise chaque accord en une formule rapide qui ondule. Mozart s’en servait souvent.",
    },
    "what-alberti-is": {
      text: "Cet accord brisé s’appelle la basse d’Alberti. Il joue les notes de l’accord dans cet ordre : grave, aigu, milieu, aigu, en croches.",
    },
    "pattern-order": {
      text: "Dans quel ordre la basse d’Alberti joue-t-elle les notes d’un accord ?",
      answers: ["Grave, milieu, aigu, milieu", "Aigu, milieu, grave, milieu", "Grave, aigu, milieu, aigu"],
    },
    "five-one-three-one": {
      text: "La main gauche la joue avec les doigts 5, 1, 3, 1. Le doigt 5 prend la note grave, le pouce la note aiguë et le doigt 3 celle du milieu.",
    },
    "c-alberti": {
      text: "À toi, sur do. Pose le doigt 5 sur le do sous le do central. Joue do, sol, mi, sol deux fois, bien régulièrement.",
    },
    "g7-shape": {
      text: "Pour sol, prends G7, l’accord de septième sur sol : sol majeur avec un fa ajouté au-dessus. Laisse de côté son sol et joue si, ré et fa. Ces notes sont tout près de do, mi et sol, donc la main bouge à peine.",
    },
    "g7-alberti": {
      text: "Descends le doigt 5 jusqu’au si. Joue si, fa, ré, fa deux fois avec les doigts 5, 1, 3, 1.",
    },
    "f-second-inversion": {
      text: "Pour fa, joue l’accord dans son deuxième renversement : do, fa et la. Le doigt 5 reste sur do. La formule est do, la, fa, la.",
    },
    "thumb-on-f": {
      text: "Dans la basse d’Alberti sur fa, quelle touche joue le pouce ?",
      answers: ["Do", "La", "Fa"],
    },
    "f-alberti": {
      text: "Garde le doigt 5 sur do. Joue do, la, fa, la deux fois avec les doigts 5, 1, 3, 1.",
    },
    "change-chords": {
      text: "Joue la formule une fois sur chaque accord : do, fa, G7 et do. Garde des croches bien égales quand tu changes d’accord.",
    },
    "alberti-tune-demo": {
      text: "Voici une courte mélodie sur la basse d’Alberti. La main droite joue des blanches pendant que la main gauche continue d’onduler.",
    },
    "alberti-tune": {
      text: "Pose le pouce droit sur le do central. Joue chaque note de la mélodie en même temps que la note grave de la basse en dessous.",
    },
    "d-major-demo": {
      text: "L’épreuve finale, le « Canon de Pachelbel », est en ré majeur. Son armure a deux dièses, sur fa et sur do. Chaque fa devient donc fa dièse, et chaque do devient do dièse. Écoute la gamme de ré majeur.",
    },
    "two-sharps": {
      text: "L’armure montre deux dièses, sur fa et sur do. Quelles touches joues-tu pour fa et do ?",
      answers: ["Fa dièse et do dièse, les touches noires", "Fa et do, les touches blanches", "Fa dièse seulement, et do reste blanc"],
    },
    "d-major-scale": {
      text: "À toi. Pose le pouce droit sur le ré au-dessus du do central, et joue la gamme en montant puis en descendant, avec le doigté de do majeur.",
    },
    "canon-bass-demo": {
      text: "Écoute la main gauche de l’épreuve finale : le doigt 5 joue une note grave, et le pouce une note plus haute. Puis la main saute à la paire suivante, par exemple du la au la une octave plus bas. Elle finit sur un accord de ré majeur.",
    },
    "canon-bass": {
      text: "À toi. Pose le doigt 5 sur le ré sous le do central, joue chaque paire, et déplace la main vers la suivante. La note la plus grave est le deuxième ré sous le do central.",
    },
    "left-d-major": {
      text: "L’épreuve finale se termine sur ré majeur à la main gauche. Pose le doigt 5 sur le ré sous le do central, et joue ré, fa dièse et la l’un après l’autre, puis ensemble.",
    },
    "black-key-thirds-demo": {
      text: "Vers la fin, la main droite de l’épreuve finale joue la mélodie en tierces. Trois de ces quatre tierces ont une touche noire : fa dièse ou do dièse.",
    },
    "black-key-thirds": {
      text: "À toi. Pose le doigt 3 sur le deuxième ré au-dessus du do central, et le doigt 5 sur le fa dièse au-dessus. Enfonce les deux touches de chaque tierce d’un seul geste, et descends tierce par tierce.",
    },
    recap: {
      text: "Bravo. Tu sais maintenant jouer la basse d’Alberti.",
      points: [
        "La basse d’Alberti brise un accord dans l’ordre grave, aigu, milieu, aigu.",
        "Elle avance en croches, avec les doigts 5, 1, 3, 1.",
        "G7 et fa au deuxième renversement gardent la main près de do.",
        "Ré majeur a deux dièses à l’armure : fa dièse et do dièse.",
      ],
    },
  },
};
