/** The guide of *Last Horizon* in French. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Last Horizon est une mélodie de notre composition, dans le style d’une musique de film moderne. " +
    "Un motif lent se répète sous de longs accords tenus, comme à la fin d’un long voyage.",
  funFact:
    "Un motif qui se répète encore et encore sous une mélodie s’appelle un ostinato, du mot italien qui veut dire obstiné.",
  versions: {
    common: {
      practice: [
        "Joue les mesures 1 à 4 à la main droite seule. Le morceau attend chaque note.",
        "Joue les mesures 5 à 8 à la main droite seule. Le doigt 5 monte d’une touche, sur le si bémol.",
        "Maintenant, la main gauche seule. Elle tient une note grave ou une quinte pendant chaque mesure entière.",
        "Joue les huit premières mesures à deux mains, lentement.",
        "Joue tout le morceau à deux mains, au tempo.",
      ],
      tips: [
        "Commence avec le doigt 4 sur le la. Le pouce attend au-dessus du ré, et le doigt 5 au-dessus du si bémol.",
        "Compte quatre temps lents dans chaque mesure. La main gauche tient chaque note jusqu’à la fin de la mesure.",
        "Joue doux et bien régulier, comme la musique à la fin d’un long film.",
      ],
      tricky: {
        4: "Tiens le la avec le doigt 5 pendant quatre temps. La main gauche joue fa et do ensemble, avec les doigts 5 et 2.",
        5: "Le doigt 5 monte d’une touche, sur le si bémol. Puis les doigts 4 et 3 descendent vers le la et le sol.",
        15: "Quatre notes égales descendent du fa au do dièse. Le pouce joue le do dièse, puis le doigt 2 prend le ré.",
      },
    },
    rare: {
      practice: [
        "Joue la main gauche seule : une note grave, puis la quinte au-dessus, encore et encore.",
        "Joue les huit premières mesures à la main droite seule. Le morceau attend chaque note.",
        "Joue les huit premières mesures à deux mains, lentement.",
        "Joue tout le morceau à deux mains, un peu plus lentement que le tempo écrit.",
        "Maintenant, joue-le au tempo.",
      ],
      tips: [
        "La main gauche joue les deux mêmes notes à chaque temps, une grave puis une aiguë. Garde-la régulière et calme.",
        "Relâche le dernier sol de la mesure 3 un peu plus tôt. La main gauche a alors le temps de descendre au fa.",
        "Enfonce ensemble do dièse et mi, avec le pouce et le doigt 3.",
      ],
      tricky: {
        5: "Le doigt 5 monte d’une touche, sur le si bémol. La main gauche se balance entre sol et ré.",
        6: "Le doigt 3 descend du sol au fa. Puis les doigts 2 et 1 jouent mi et ré.",
        16: "Termine sur ré et fa ensemble, avec les doigts 2 et 4. La main gauche tient ré et la en dessous.",
      },
    },
    epic: {
      practice: [
        "Joue la main gauche seule, jusqu’à ce que les accords brisés roulent tout seuls.",
        "Joue les mesures 9 à 12 à la main droite seule, avec un passage du pouce en montant.",
        "Joue seuls les accords de la main droite des mesures 17 à 24, et laisse chanter la note du haut.",
        "Joue tout le morceau à deux mains, à 75 % de la vitesse.",
        "Maintenant, joue-le au tempo, avec la pédale.",
      ],
      tips: [
        "Change de pédale au début de chaque mesure, là où l’accord change.",
        "Joue la main gauche tout en douceur. Son motif se répète sous la mélodie comme un moteur tranquille.",
        "Après le mi bémol, passe le pouce dessous jusqu’au fa. Les doigts 2 et 4 atteignent ensuite sol et do.",
      ],
      tricky: {
        6: "Le doigt 3 descend du fa au mi bémol. Puis les doigts 2 et 1 descendent jusqu’au do.",
        15: "La main monte par sol, si et ré, puis redescend. Le pouce finit sur le fa.",
        22: "Tiens sol, do et mi bémol avec les doigts 1, 2 et 3. Puis les doigts 2 et 1 jouent ré et do.",
      },
    },
    legendary: {
      practice: [
        "Joue la main gauche seule aux mesures 9 à 12. Elle fait rouler le même motif à chaque temps.",
        "Joue les huit premières mesures à la main droite seule, une octave plus haut que la mélodie.",
        "Joue seuls les grands accords de la main droite des mesures 17 à 24, et laisse le doigt du haut chanter.",
        "Joue tout le morceau à deux mains, à 75 % de la vitesse.",
        "Maintenant, joue-le au tempo et laisse sonner le dernier accord.",
      ],
      tips: [
        "Ici, la main gauche fait rouler des croches. À la mesure 9, elles deviennent des doubles croches, et la musique s’amplifie.",
        "Compte quatre doubles croches à chaque temps : fondamentale, quinte, octave, quinte. Ne laisse jamais le motif se presser.",
        "Le thème revient une dernière fois, plus ample que jamais. Joue la note du haut de chaque accord un peu plus fort.",
      ],
      tricky: {
        17: "Ouvre la main sur quatre notes pour chaque accord. Lève-la tôt à la fin de la mesure, pour sauter vers le bas.",
        18: "Tiens mi bémol, la bémol, do et mi bémol pendant trois temps. Puis le doigt 4 prend le do.",
        23: "Lève la main après le premier accord. Le doigt 5 arrive alors sur le si, avec fa et ré en dessous.",
      },
    },
  },
};
