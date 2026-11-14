/** The guide of *Ave Maria* in French. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Schubert a mis ce chant en musique en 1825, d’après une traduction allemande du poème de Walter Scott « La Dame du lac ». " +
    "C’est le troisième chant d’Ellen, publié en 1826 dans son op. 52. " +
    "Le film de Walt Disney « Fantasia » (1940) l’utilise dans sa dernière partie, juste après « Une nuit sur le mont Chauve ».",
  funFact:
    "Dans « Fantasia », les cloches de la fin d’« Une nuit sur le mont Chauve » semblent devenir des cloches d’église. " +
    "Elles mènent à l’Ave Maria.",
  versions: {
    common: {
      practice: [
        "Joue les quatre premières mesures à la main droite seule. Le morceau attend chaque note.",
        "Joue les mesures 5 à 7 à la main droite seule. La main reste au même endroit.",
        "Maintenant, la main gauche seule. Elle tient chaque note de basse une demi-mesure ou plus.",
        "Joue les sept premières mesures à deux mains, lentement.",
        "Joue tout le morceau à deux mains, au tempo.",
      ],
      tips: [
        "Chante les notes longues dans ta tête. La mélodie est une prière, alors joue-la doux.",
        "Le pouce repose sur le la, et le doigt 5 sur le mi. Chaque note de la main droite est sous un doigt.",
        "Les quatre dernières notes sont égales. Compte-les « un, deux, trois, quatre ».",
      ],
      tricky: {
        2: "Tiens le mi avec le doigt 5 presque toute la mesure. Puis le doigt 4 joue le ré, court et doux.",
        4: "Les doigts 3, 2, 1 et 2 descendent, puis remontent. Au milieu, la main gauche passe du fa au sol.",
        6: "Tiens le ré avec le doigt 4. Puis laisse les doigts 3 et 2 tomber sur do et si.",
      },
    },
    rare: {
      practice: [
        "Joue les quatre premières mesures à la main droite seule. Le morceau attend chaque note.",
        "Joue la main gauche seule. Une note de basse vient d’abord, et un accord de deux notes lui répond.",
        "Joue les huit premières mesures à deux mains, lentement.",
        "Joue tout le morceau à deux mains, un peu plus lentement que le tempo écrit.",
        "Maintenant, joue-le au tempo.",
      ],
      tips: [
        "Compte huit temps par mesure. La main gauche joue sur les temps 1, 3, 5 et 7.",
        "La main droite ne bouge jamais. Les doigts 1 et 3 jouent ensemble la et do, en tierce.",
        "Joue la main gauche moins fort que la mélodie, comme une harpe discrète sous une voix.",
      ],
      tricky: {
        3: "La main droite se repose une demi-mesure. Continue de compter pendant que la main gauche joue seule.",
        6: "À la main gauche, le doigt 2 prend le si, et le pouce prend le fa au-dessus.",
        7: "La main gauche descend du do jusqu’au mi du bas avec le doigt 5.",
      },
    },
    epic: {
      practice: [
        "Joue la main gauche seule. Chaque demi-mesure monte depuis la note de basse, puis redescend.",
        "Joue seules les tierces et les sixtes de la main droite, et enfonce les deux notes de chaque paire d’un seul geste.",
        "Joue les huit premières mesures à deux mains, lentement.",
        "Joue tout le morceau à deux mains, à 75 % de la vitesse.",
        "Maintenant, joue-le au tempo, avec la pédale.",
      ],
      tips: [
        "Change de pédale à chaque nouvelle note de basse, deux fois par mesure.",
        "Laisse la main gauche onduler tout en douceur, comme une harpe sous la mélodie.",
        "La mélodie est la note du haut de chaque paire : laisse le doigt du haut mener.",
      ],
      tricky: {
        9: "Après le silence, ouvre la main sur une sixte, ré et si bémol. Les doigts 1 et 5 la tiennent presque toute la mesure.",
        12: "Les tierces descendent, puis remontent. Le pouce prend mi bémol, puis fa, mi bémol et de nouveau fa.",
        15: "Les sixtes descendent touche par touche, puis la main remonte d’un saut après un court silence.",
      },
    },
    legendary: {
      practice: [
        "Joue la main gauche seule : l’octave, quatre notes rapides, puis un court silence pour sauter.",
        "Joue seules les octaves de la main droite. Garde la main ouverte, le pouce et l’auriculaire prêts.",
        "Joue les huit premières mesures à deux mains, lentement.",
        "Joue tout le morceau à deux mains, à 75 % de la vitesse.",
        "Maintenant, joue-le au tempo et laisse sonner le dernier accord.",
      ],
      tips: [
        "Profite du court silence à la fin de chaque demi-mesure pour sauter à l’octave suivante.",
        "La mélodie revient en octaves. Laisse l’auriculaire chanter la note du haut.",
        "Joue le dernier accord doux, et tiens-le jusqu’à ce que le son s’éteigne.",
      ],
      tricky: {
        9: "Après le silence, ouvre la main sur une sixte, ré et si bémol. Les doigts 1 et 5 la tiennent presque toute la mesure.",
        17: "Les octaves commencent. Garde la main ouverte du pouce à l’auriculaire, et déplace-la d’un seul bloc.",
        18: "Profite du court silence avant cette mesure pour sauter jusqu’à l’octave sur ré.",
      },
    },
  },
};
