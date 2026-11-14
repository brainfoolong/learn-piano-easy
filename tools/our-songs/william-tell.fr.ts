/** The guide of *William Tell Overture* in French. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "L’opéra de Rossini « Guillaume Tell » a été créé en 1829. C’était le dernier de ses 39 opéras. " +
    "Son ouverture se termine par un galop rapide, souvent appelé « March of the Swiss Soldiers ». " +
    "Ce finale est devenu le thème de « The Lone Ranger », à la radio, à la télévision et au cinéma.",
  funFact:
    "Certains auteurs ont défini un intellectuel comme un homme capable d’écouter l’ouverture de « Guillaume Tell » " +
    "sans penser au Lone Ranger.",
  versions: {
    common: {
      practice: [
        "Joue les cinq premières mesures à la main droite seule. Le morceau attend chaque note.",
        "Joue les mesures 6 à 9 à la main droite seule. Elles répondent à la mélodie avec le même rythme.",
        "Maintenant, la main gauche seule. Elle garde une position pendant une demi-mesure ou une mesure entière.",
        "Joue les neuf premières mesures à deux mains, lentement.",
        "Joue tout le morceau à deux mains, au tempo.",
      ],
      tips: [
        "Dis « long, court, court » en jouant. Ce rythme, c’est le galop d’un cheval.",
        "Lève le doigt 5 du mi un peu en avance. Le pouce arrive alors à temps sur le sol grave.",
        "Chaque doigt garde sa propre touche. Le pouce joue tous les sol.",
      ],
      tricky: {
        7: "Le doigt 4 joue trois fois le ré. Puis le doigt 2 et le pouce descendent sur le si et le sol.",
        8: "Le doigt 3 joue le do, puis le doigt 5 saute jusqu’au mi. Au milieu de la mesure, la main gauche passe au ré et au sol.",
        15: "Les doigts 5, 4 et 3 descendent du mi au do. La main gauche passe au ré et au sol pour les deux dernières notes.",
      },
    },
    rare: {
      practice: [
        "Joue les cinq premières mesures à la main droite seule. Le morceau attend chaque note.",
        "Joue la main gauche seule. Elle joue un accord à chaque demi-mesure.",
        "Joue les neuf premières mesures à deux mains, lentement.",
        "Joue tout le morceau à deux mains, un peu plus lentement que le tempo écrit.",
        "Maintenant, joue-le au tempo, comme un cheval au galop.",
      ],
      tips: [
        "Compte quatre temps par mesure, deux noires par temps. La main gauche joue sur chaque temps.",
        "Les accords de deux notes se jouent avec le pouce et le doigt 3, les doigts 2 et 4, ou les doigts 3 et 5.",
        "Joue les notes répétées légèrement, le poignet souple, comme des sabots sur une route.",
      ],
      tricky: {
        7: "Les doigts 2 et 4 jouent ensemble le fa dièse et le la. Puis le doigt 4 répète le la seul.",
        8: "Les paires passent de sol et si à fa dièse et la. Garde la main en place, et change seulement de doigts.",
        15: "Le doigt 4 répète le la, et le doigt 5 prend le si. Au milieu de la mesure, la main gauche revient à sol, si et ré.",
      },
    },
    epic: {
      practice: [
        "Joue la main gauche seule. Chaque demi-mesure se balance de la note grave aux deux notes au-dessus.",
        "Joue seules les sixtes de la main droite, et enfonce les deux notes de chaque paire d’un seul geste.",
        "Joue les neuf premières mesures à deux mains, lentement.",
        "Joue tout le morceau à deux mains, à 75 % de la vitesse.",
        "Maintenant, joue-le au tempo, avec la pédale.",
      ],
      tips: [
        "Change de pédale à chaque demi-mesure, quand la note de basse revient.",
        "Le trait monte du la au mi, du pouce jusqu’au doigt 5. Garde le poignet bien à plat.",
        "La mélodie est la note du haut de chaque paire : laisse le doigt du haut mener.",
      ],
      tricky: {
        9: "Le doigt 2 tient le la après le sol dièse du pouce. " +
          "Puis la main descend sur le do dièse et le mi pour la mesure suivante.",
        14: "Le doigt 3 répète le do dièse, puis les doigts 4 et 5 montent jusqu’au ré et au fa dièse.",
        17: "Profite du silence après le long la pour monter le pouce jusqu’au mi aigu.",
      },
    },
    legendary: {
      practice: [
        "Joue la main gauche seule : une octave grave, un accord, une autre octave, un accord.",
        "Joue seules les octaves de la main droite. Garde la main ouverte, le pouce et l’auriculaire prêts.",
        "Joue les neuf premières mesures à deux mains, lentement.",
        "Joue tout le morceau à deux mains, à 75 % de la vitesse.",
        "Maintenant, joue-le au tempo et laisse sonner le dernier accord.",
      ],
      tips: [
        "À la main gauche, laisse le bras se balancer entre l’octave grave et l’accord.",
        "Laisse l’auriculaire chanter un peu plus fort la note du haut de chaque octave.",
        "La mélodie est la note du haut de chaque accord. Le doigt 5 la joue à chaque fois.",
      ],
      tricky: {
        13: "Les octaves descendent du fa dièse au si. Garde la main ouverte, et laisse-la rebondir sur chacune.",
        21: "Les accords descendent pas à pas. Garde le doigt 5 sur la note du haut, et laisse la main rebondir.",
        22: "Le pouce reste sur le la. Les doigts 2, 3 et 5 passent de do dièse, mi et la à si, ré dièse et fa dièse.",
      },
    },
  },
};
