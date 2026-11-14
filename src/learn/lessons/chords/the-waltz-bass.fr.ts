/** *The waltz bass* in French. */
import type { Translation } from "../../../i18n/translation";
import type { TheWaltzBassTexts } from "./the-waltz-bass.en";

export const theWaltzBassFr: Translation<TheWaltzBassTexts> = {
  title: "La basse de valse",
  steps: {
    "waltz-demo": {
      text: "Écoute la main gauche seule. Elle se balance par trois, comme une danse. C’est une basse de valse.",
    },
    "three-beats": {
      text: "Une valse est en mesure à trois temps. Chaque mesure a trois temps : un, deux, trois. Le premier temps est le temps fort.",
    },
    "oom-pah-pah": {
      text: "Sur le premier temps, la main gauche joue la fondamentale de l’accord, dans le grave. Sur les deuxième et troisième temps, elle joue ensemble les deux notes du haut. Ça fait « poum-tchac-tchac ».",
    },
    "root-on-one": {
      text: "Dans une basse de valse, sur quel temps sonne la fondamentale grave ?",
      answers: ["2e temps", "1er temps", "3e temps"],
    },
    "c-waltz": {
      text: "À toi, sur do. Le doigt 5 joue le do sous le do central, puis les doigts 3 et 1 jouent mi et sol ensemble, deux fois. Joue deux mesures.",
    },
    "g-and-f-shapes": {
      text: "La même formule marche sur chaque accord. Pour sol, joue le sol grave, puis si et ré. Pour fa, joue le fa grave, puis la et do.",
    },
    "g-waltz": {
      text: "Descends la main jusqu’au sol sous le do qui est sous le do central. Le doigt 5 joue sol, puis les doigts 3 et 1 jouent si et ré ensemble, deux fois.",
    },
    "f-beats-two-and-three": {
      text: "Dans une mesure sur fa, que joue la main gauche sur les deuxième et troisième temps ?",
      answers: ["Fa seul", "Fa, la et do l’un après l’autre", "La et do ensemble"],
    },
    "f-waltz": {
      text: "Maintenant, va sur le fa, une touche blanche sous ce sol. Le doigt 5 joue fa, puis les doigts 3 et 1 jouent la et do ensemble, deux fois.",
    },
    "chord-walk": {
      text: "Joue une mesure de chaque accord : do, fa, sol et do. Déplace la main sur le premier temps, et continue de compter jusqu’à trois.",
    },
    "waltz-tune-demo": {
      text: "Voici une courte mélodie sur la basse de valse. La main droite joue des notes longues pendant que la main gauche garde son « poum-tchac-tchac ».",
    },
    "waltz-tune": {
      text: "Pose le pouce droit sur le do central. Joue chaque note de la mélodie en même temps que les touches de la main gauche en dessous, et continue la basse de valse entre elles.",
    },
    recap: {
      text: "Bravo. La main gauche sait maintenant jouer une basse de valse.",
      points: [
        "Une valse est en mesure à trois temps, avec trois temps par mesure.",
        "Sur le premier temps, la main gauche joue la fondamentale dans le grave.",
        "Sur les deuxième et troisième temps, elle joue ensemble les notes du haut.",
        "La formule suit l’accord : do, fa et sol.",
      ],
    },
  },
};
