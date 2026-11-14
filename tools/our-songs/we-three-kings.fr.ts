/** The guide of *We Three Kings* in French. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "L’ecclésiastique américain John Henry Hopkins Jr. a écrit ce chant de Noël en 1857, " +
    "pour un spectacle de Noël au séminaire où il enseignait. " +
    "Il raconte les Rois mages et leurs présents. Il a été publié en 1863 sous le titre Three Kings of Orient. " +
    "Son couplet est en mineur, et le refrain passe en majeur.",
  funFact:
    "Hopkins a conçu ce chant pour que trois hommes chantent chacun un couplet seul, un pour chaque roi.",
  versions: {
    common: {
      practice: [
        "Joue les deux premières mesures à la main droite seule. Le morceau attend chaque note.",
        "Joue les mesures 5 à 8 à la main droite seule. La mélodie y monte jusqu’au sol, puis redescend jusqu’au la.",
        "Maintenant, la main gauche seule. Elle ne change de position que sur le premier et le quatrième temps.",
        "Joue tout le morceau à deux mains, lentement.",
        "Joue tout le morceau à deux mains, au tempo.",
      ],
      tips: [
        "Chaque mesure contient deux groupes de trois temps. Compte deux fois « un, deux, trois ».",
        "Sur le deuxième do, passe du doigt 3 au pouce. La main est alors prête à monter jusqu’au sol.",
        "Après le long do, toute la main descend d’une touche, pour que le doigt 2 joue le si.",
      ],
      tricky: {
        1: "Le doigt 5 joue le mi, le doigt 4 le ré, le doigt 3 le do, puis le pouce descend jusqu’au la.",
        3: "Les mêmes notes qu’à la mesure 1. Donne de l’ampleur aux notes longues, et garde les courtes légères.",
        7: "Tiens le long do avec le doigt 2, puis descends la main pour que le doigt 2 joue le si.",
      },
    },
    rare: {
      practice: [
        "Joue la main gauche seule sur les huit premières mesures, et enfonce ensemble les trois notes de chaque accord.",
        "Joue seule la basse de valse du refrain : note grave, accord, accord.",
        "Joue les huit premières mesures à deux mains, lentement.",
        "Joue tout le morceau à deux mains, un peu plus lentement que le tempo écrit.",
        "Maintenant, joue-le au tempo.",
      ],
      tips: [
        "Le couplet est en mineur. Joue-le doux et régulier, et tiens chaque accord toute la mesure.",
        "Tiens le do avec le doigt 2, puis descends la main d’une touche pour que le doigt 2 joue le si.",
        "Le refrain passe en majeur. Laisse-le sonner plus clair, et garde la basse de valse légère.",
      ],
      tricky: {
        1: "Le doigt 5 joue le mi, le doigt 4 le ré, le doigt 3 le do, puis le pouce descend jusqu’au la.",
        5: "Les mêmes notes qu’à la mesure 1, après un silence. Pose le doigt 5 sur le mi avant de commencer.",
        14: "Tiens le do avec le doigt 2, puis descends la main pour que le doigt 2 joue le si. " +
          "La main gauche passe à l’accord sur mi.",
      },
    },
    epic: {
      practice: [
        "Joue la basse d’Alberti seule, jusqu’à ce qu’elle roule toute seule : grave, aigu, milieu, aigu.",
        "Joue seules les tierces et les sixtes de la main droite, et garde ensemble les deux notes de chaque paire.",
        "Joue le couplet à deux mains, lentement.",
        "Joue tout le morceau à deux mains, à 75 % de la vitesse.",
        "Maintenant, joue-le au tempo, avec la pédale.",
      ],
      tips: [
        "Joue la basse d’Alberti tout en douceur, pour que la mélodie chante au-dessus.",
        "Lève la main après le ré court, et pose le pouce sur le mi d’en dessous pour le refrain.",
        "Le pouce et le doigt 5 tiennent la sixte, et la main glisse d’un seul bloc de touche en touche.",
      ],
      tricky: {
        17: "Lève la main après le ré, et pose le pouce sur le mi et le doigt 5 sur le do.",
        27: "Fais monter la sixte en glissant jusqu’au la et au fa, puis redescends jusqu’au sol et au mi. " +
          "Garde le poignet souple.",
        28: "La sixte monte en glissant du fa et du ré jusqu’au sol et au mi. Le doigt 5 joue la mélodie.",
      },
    },
    legendary: {
      practice: [
        "Joue seules les octaves de la main droite, le pouce et le doigt 5 gardés dans la même position.",
        "Joue la basse stride seule : saute en bas pour l’octave, puis remonte pour l’accord.",
        "Joue les arpèges des mesures 9 à 16 à la main gauche seule.",
        "Joue tout le morceau à deux mains, à 75 % de la vitesse.",
        "Maintenant, joue-le au tempo et laisse sonner le dernier accord.",
      ],
      tips: [
        "Dans les octaves, regarde le doigt 5 sur la mélodie. Le pouce le suit au toucher.",
        "Dans chaque arpège, le doigt 3 passe par-dessus le pouce en montant.",
        "Dans les accords, joue le doigt du haut un peu plus fort, pour que la mélodie chante.",
      ],
      tricky: {
        3: "Les octaves vont du si au do et reviennent, pendant que la main gauche saute entre le mi grave et son accord.",
        7: "Comme à la mesure 3. Garde les octaves régulières et la main légère.",
        9: "La main gauche commence son premier arpège, qui monte de deux octaves depuis le do et revient, sous le do répété.",
      },
    },
  },
};
