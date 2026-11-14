/** The guide of *Funeral March* in French. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Cette marche funèbre est le troisième mouvement de la « Sonate pour piano nº 2 » de Chopin, publiée en 1840. " +
    "On l’a jouée aux funérailles de Chopin lui-même, et aux funérailles nationales de John F. Kennedy. " +
    "Les films et les dessins animés citent souvent son début pour un enterrement.",
  funFact:
    "Beaucoup de spécialistes datent la marche de 1837, deux ans avant que Chopin achève le reste de la sonate.",
  versions: {
    common: {
      practice: [
        "Joue les quatre premières mesures à la main droite seule. Le morceau attend chaque note.",
        "Joue les mesures 5 à 8 à la main droite seule. La mélodie quitte enfin le ré.",
        "Maintenant, la main gauche seule. Elle se balance entre ré et si bémol, comme une cloche lente.",
        "Joue les huit premières mesures à deux mains, lentement.",
        "Joue tout le morceau à deux mains, au tempo.",
      ],
      tips: [
        "Compte jusqu’à quatre sur le premier ré. Puis un ré long et un ré court mènent à la mesure suivante.",
        "Joue doux et lourd, comme des pas lents derrière un cercueil.",
        "Le pouce reste tout le temps sur le do dièse. Il ne joue qu’aux mesures 7, 12 et 15.",
      ],
      tricky: {
        7: "Tiens le mi trois temps, puis joue le ré un temps. Tiens le ré trois temps, et le pouce joue le do dièse en dernier.",
        12: "Le doigt 3 tient le mi quatre temps. Puis le pouce joue le do dièse, et la main gauche reste sur le la.",
        15: "Quatre notes égales : mi, fa, mi, puis do dièse avec le pouce. Garde chaque doigt sur sa propre touche.",
      },
    },
    rare: {
      practice: [
        "Joue la main gauche seule. Elle sonne un accord à chaque temps, comme une cloche.",
        "Joue les huit premières mesures à la main droite seule. Le morceau attend chaque note.",
        "Joue les mesures 9 à 16 à deux mains, lentement.",
        "Joue tout le morceau à deux mains, un peu plus lentement que le tempo écrit.",
        "Maintenant, joue-le au tempo.",
      ],
      tips: [
        "Joue les accords de la main gauche doux et réguliers, pour que la mélodie reste au-dessus.",
        "Entre les deux accords, seule la note du bas bouge. Les doigts 2 et 1 restent sur ré et fa.",
        "Termine avec ré et fa ensemble, et laisse-les s’éteindre lentement.",
      ],
      tricky: {
        10: "Enfonce ré et fa ensemble avec les doigts 2 et 4. Puis le doigt 5 joue sol, et le doigt 4 joue fa.",
        11: "La main gauche joue sol, si bémol et ré avec les doigts 5, 4 et 2. La main droite descend pas à pas depuis le sol.",
        12: "Le pouce et le doigt 3 enfoncent ensemble do dièse et mi. La main gauche ne joue que le la, avec le doigt 5.",
      },
    },
    epic: {
      practice: [
        "Joue la basse d’Alberti seule, jusqu’à ce qu’elle roule toute seule : grave, aigu, milieu, aigu.",
        "Joue la mesure 11 à la main droite seule. Fais passer le pouce dessous jusqu’au fa.",
        "Joue les huit premières mesures à deux mains, lentement.",
        "Joue tout le morceau à deux mains, à 75 % de la vitesse.",
        "Maintenant, joue-le au tempo, avec la pédale.",
      ],
      tips: [
        "Change de pédale à chaque nouvelle note de basse, deux fois par mesure.",
        "Fais passer le pouce dessous jusqu’au fa, après que le doigt 3 a joué le mi bémol.",
        "La mélodie est maintenant la note du haut de chaque paire. Laisse le doigt 5 la chanter.",
      ],
      tricky: {
        19: "Garde la main ouverte, le pouce sur le mi bémol et le doigt 5 sur le do. Lève le pouce pour le do court.",
        21: "Comme à la mesure 19, le pouce et le doigt 5 jouent une sixte. Puis le doigt 5 joue le do seul.",
        22: "Le doigt 4 prend le do dans la sixte, pour que le doigt 5 soit libre de monter jusqu’au mi bémol.",
      },
    },
    legendary: {
      practice: [
        "Joue la main gauche seule : une octave sur le temps, puis un accord, chacun suivi d’un court silence pour sauter.",
        "Joue seuls les arpèges de la main gauche. Le doigt 3 passe par-dessus le pouce en montant.",
        "Joue seuls les accords de la main droite, et laisse le doigt du haut chanter la mélodie.",
        "Joue tout le morceau à deux mains, à 75 % de la vitesse.",
        "Maintenant, joue-le au tempo et laisse sonner le dernier accord.",
      ],
      tips: [
        "Joue les octaves lourdes et lentes, comme une grosse cloche. Laisse l’auriculaire mener.",
        "Dans les arpèges, le doigt 3 passe par-dessus le pouce, et le pouce passe dessous en descendant.",
        "Joue la note du haut de chaque accord un peu plus fort que les autres.",
      ],
      tricky: {
        9: "Les arpèges commencent. Le doigt 3 passe par-dessus le pouce sur le mi bémol, pendant que la main droite descend depuis le sol.",
        14: "La main gauche commence sur le fa grave avec le doigt 5. Le doigt 3 passe par-dessus le pouce sur le la bémol.",
        22: "Lève la main pendant le court silence, puis pose-la sur mi bémol, la bémol, do et mi bémol.",
      },
    },
  },
};
