/** The guide of *Morgen, Kinder, wird’s was geben* in French. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Le titre allemand Morgen, Kinder, wird’s was geben veut dire « Demain, les enfants, il y aura quelque chose ». " +
    "Les paroles de Karl Friedrich Splittegarb ont été imprimées pour la première fois en 1795. " +
    "Carl Gottlieb Hering les a mises sur cet air en 1809, dans une école de chant pour enfants. " +
    "La chanson parle d’enfants qui attendent leurs cadeaux avec impatience, et elle ne parle jamais de la naissance de Jésus.",
  funFact:
    "En 1927, Erich Kästner a écrit une parodie sur des enfants pauvres. " +
    "Elle commence par Morgen, Kinder, wird’s nichts geben : il n’y aura rien.",
  versions: {
    common: {
      practice: [
        "Joue les quatre premières mesures à la main droite seule. Le morceau attend chaque note.",
        "Joue les quatre dernières mesures à la main droite seule. Là, la mélodie monte jusqu’au la aigu.",
        "Maintenant, la main gauche seule. Elle tient une quinte, ou un fa seul.",
        "Joue tout le morceau à deux mains, lentement.",
        "Joue tout le morceau à deux mains, au tempo.",
      ],
      tips: [
        "Les quatre notes rapides de la mesure 2 sont les plus courtes du morceau. Compte-les bien régulièrement : un, deux, trois, quatre.",
        "La mesure 2 finit sur un sol court et un silence. Profite du silence pour ouvrir la main jusqu’au mi.",
        "Le pouce joue le premier do et le doigt 2 le deuxième. Ainsi, le doigt 5 atteint le fa.",
      ],
      tricky: {
        3: "Après le silence, le doigt 3 joue deux fois le mi. Les doigts 4 et 5 montent au fa et au sol, puis le doigt 4 revient au mi.",
        7: "Comme à la mesure 3 : le doigt 3 sur le mi, puis les doigts 4 et 5 montent au fa et au sol.",
        8: "Les doigts 5 et 4 jouent fa et mi, et le doigt 2 prend le ré. Le doigt 3 est alors prêt pour le fa de la mesure 9.",
      },
    },
    rare: {
      practice: [
        "Joue la main gauche seule, et enfonce ensemble les notes de chaque accord.",
        "Joue les huit premières mesures à la main droite seule. C’est la phrase du début.",
        "Joue les huit premières mesures à deux mains, lentement.",
        "Joue tout le morceau à deux mains, un peu plus lentement que le tempo écrit.",
        "Maintenant, joue-le au tempo.",
      ],
      tips: [
        "Tiens chaque accord tout en douceur pendant toute la mesure, pour que la mélodie reste au-dessus.",
        "La mesure 4 finit sur un sol grave, et la mesure 5 commence en haut, sur le mi. Regarde le mi avant de jouer le sol.",
        "Le pouce joue le premier do et le doigt 2 le deuxième. Ainsi, le doigt 5 atteint le fa.",
      ],
      tricky: {
        5: "Après le sol du pouce, le doigt 3 saute jusqu’au mi sans silence. Garde le pouce léger, pour que la main s’ouvre.",
        6: "Le doigt 5 joue le sol aigu, et le doigt 4 revient au mi au-dessus de l’accord sur do.",
        14: "Comme à la mesure 6 : le doigt 5 sur le sol aigu, puis le doigt 4 sur le mi.",
      },
    },
    epic: {
      practice: [
        "Joue la basse d’Alberti seule, jusqu’à ce qu’elle roule toute seule : grave, aigu, milieu, aigu.",
        "Joue les accords brisés du deuxième passage seuls, en montant puis en redescendant.",
        "Joue le premier passage à deux mains, lentement.",
        "Joue tout le morceau à deux mains, à 75 % de la vitesse.",
        "Maintenant, joue-le au tempo, avec la pédale.",
      ],
      tips: [
        "Joue la basse d’Alberti tout en douceur, pour que la mélodie chante au-dessus.",
        "À la fin de la mesure 12, la main droite se repose pendant une noire, puis saute d’une octave vers le haut.",
        "Change de pédale à chaque demi-mesure, quand la main gauche commence un nouvel accord.",
      ],
      tricky: {
        13: "La mélodie recommence une octave plus haut. Le doigt 2 prend le do aigu, et le pouce descend sur le sol.",
        23: "Le pouce joue le premier do et le doigt 2 le deuxième. Ainsi, le doigt 5 atteint le fa aigu.",
        24: "Les doigts 4, 3, 2 et 1 descendent jusqu’au si, et le doigt 2 finit sur le do, au-dessus du dernier accord.",
      },
    },
    legendary: {
      practice: [
        "Joue la basse stride seule : saute en bas pour l’octave, puis remonte pour l’accord.",
        "Joue seules les octaves de la main droite, et lève la main à chaque court silence.",
        "Joue les arpèges du deuxième passage à la main gauche seule.",
        "Joue tout le morceau à deux mains, à 75 % de la vitesse.",
        "Maintenant, joue-le au tempo et laisse sonner le dernier accord.",
      ],
      tips: [
        "Dans la basse stride, regarde l’octave grave et laisse la main trouver l’accord au toucher.",
        "Garde le pouce et l’auriculaire à une octave l’un de l’autre. Les courts silences laissent à la main le temps de sauter.",
        "Pour le dernier accord, ouvre la main sur do, mi, sol et do, et laisse-le sonner.",
      ],
      tricky: {
        4: "Le doigt 3 tient le ré long, pendant que la main gauche saute du sol grave à son accord, puis revient.",
        8: "Cette fois, le doigt 2 prend le ré long. Le doigt 3 est ainsi prêt pour le fa de la mesure 9.",
        9: "Le doigt 3 joue deux fois le fa et le doigt 5 deux fois le la, pendant que la basse stride descend sur un fa grave.",
      },
    },
  },
};
