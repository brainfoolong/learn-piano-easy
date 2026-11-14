/** The guide of *Neon Chase* in French. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Neon Chase est une mélodie bien à nous, écrite pour cette application dans le style d’une musique de film au synthétiseur des années 1980. " +
    "Une basse entraînante y bat comme une course-poursuite de nuit.",
  funFact:
    "Dans les années 1980, beaucoup de musiques de film se jouaient au synthétiseur plutôt qu’avec un orchestre. " +
    "Souvent, le compositeur les enregistrait seul dans un petit studio.",
  versions: {
    common: {
      practice: [
        "Joue les mesures 1 à 4 à la main droite seule. Le morceau attend chaque note.",
        "Joue les mesures 5 à 8 à la main droite seule. À la mesure 6, la main descend d’une touche.",
        "Maintenant, la main gauche seule. Elle frappe une position deux fois par mesure et ne bouge jamais.",
        "Joue les huit premières mesures à deux mains, lentement.",
        "Joue tout le morceau à deux mains, au tempo.",
      ],
      tips: [
        "Commence avec le pouce sur le la. Du pouce au doigt 5, les doigts se posent alors sur la, si, do, ré et mi.",
        "Lâche le long mi un peu en avance. Dans ce court silence, descends la main d’une touche, pour que le pouce arrive sur le sol.",
        "La main gauche frappe sur les temps 1 et 3, comme un moteur lent. Garde-la bien régulière.",
      ],
      tricky: {
        5: "Les doigts 5, 4, 3 et 4 se balancent entre mi, ré et do. Garde la main immobile, et laisse les doigts travailler.",
        10: "Le doigt 4 joue le do, et le doigt 2 joue le la entre deux. Le doigt 3 reste au-dessus du si et attend.",
        13: "Les doigts 2, 4 et 5 montent du la au ré en passant par le do, puis reviennent au do. Le pouce reste au-dessus du sol.",
      },
    },
    rare: {
      practice: [
        "Joue la main gauche seule. Elle joue sur chaque temps, comme le moteur d’une voiture.",
        "Joue les huit premières mesures à la main droite seule. Le morceau attend chaque note.",
        "Joue les mesures 9 à 16 à la main droite seule. Les croches y arrivent.",
        "Joue tout le morceau à deux mains, un peu plus lentement que le tempo écrit.",
        "Maintenant, joue-le au tempo.",
      ],
      tips: [
        "La main gauche joue quatre temps égaux par mesure. Laisse la mélodie glisser par-dessus.",
        "Enfonce ensemble do et mi avec les doigts 3 et 5, et tiens-les trois temps.",
        "Termine sur la et do ensemble, et laisse-les sonner toute la mesure.",
      ],
      tricky: {
        7: "Le doigt 2 joue le la, le doigt 4 le do, le doigt 3 le si et le pouce le sol. La main reste là où la mesure 6 l’a laissée.",
        10: "Les doigts 4 et 2 alternent entre do et la, puis le doigt 5 monte jusqu’au ré. Joue les croches bien régulières.",
        14: "Les doigts 2, 4 et 5 montent en croches jusqu’au ré, puis redescendent pas à pas jusqu’au la.",
      },
    },
    epic: {
      practice: [
        "Joue la main gauche seule, jusqu’à ce que la pulsation de croches roule toute seule.",
        "Joue les mesures 9 à 16 à la main droite seule, et compte les accords brefs : trois, trois, deux.",
        "Joue seules les tierces et les sixtes de la main droite, et enfonce les deux notes de chaque paire d’un seul geste.",
        "Joue tout le morceau à deux mains, à 75 % de la vitesse.",
        "Maintenant, joue-le au tempo, et garde une pulsation entraînante.",
      ],
      tips: [
        "La main gauche ne s’arrête jamais : huit croches égales par mesure, comme des phares qui défilent.",
        "Les accords tombent sur 1, sur le « et » de 2 et sur 4. Compte huit croches et frappe sur 1, 4 et 7.",
        "Après le si, passe le pouce dessous jusqu’au do. Les doigts 2 et 3 atteignent alors le ré et le mi.",
      ],
      tricky: {
        17: "Garde le pouce et le doigt 5 à une sixte l’un de l’autre, et monte toute la main pour chaque nouvelle paire.",
        18: "Les paires descendent du ré au si. Garde la forme de la main, et déplace-la d’une touche à la fois.",
        19: "Les paires montent comme à la mesure 17. La dernière est une quinte, sol et ré, alors resserre un peu la main.",
      },
    },
    legendary: {
      practice: [
        "Joue la main gauche seule. Balance la main entre le doigt 5 et le pouce, à une octave l’un de l’autre.",
        "Joue seuls les traits de la main droite, lentement, et passe le pouce dessous en montant.",
        "Joue seuls les accords de la main droite, et laisse le doigt du haut chanter la mélodie.",
        "Joue tout le morceau à deux mains, à 75 % de la vitesse.",
        "Maintenant, joue-le au tempo et laisse sonner le dernier accord.",
      ],
      tips: [
        "Garde le poignet gauche souple et laisse-le se balancer. Les octaves pompent alors toutes seules.",
        "Joue les traits avec légèreté, et les accords brefs bien secs et brillants, comme un synthétiseur.",
        "La mélodie est la note du haut de chaque accord. Joue-la un peu plus fort que les autres.",
      ],
      tricky: {
        17: "Frappe chaque accord bref, et profite du silence qui suit pour aller au suivant.",
        22: "Frappe deux fois l’accord de quatre notes avec le pouce et les doigts 2, 3 et 5. Puis descends la main sur si, ré et sol.",
        23: "Quatre accords courts portent la, do, si et sol en haut. Lâche après chacun, et pose le suivant dans le silence.",
      },
    },
  },
};
