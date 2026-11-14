/** The guide of *Tochter Zion, freue dich* in French. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Tochter Zion, freue dich signifie « Fille de Sion, réjouis-toi » en allemand. " +
    "Georg Friedrich Haendel a écrit le chœur See, the conqu’ring hero comes en 1747, pour son oratorio Joshua. " +
    "En 1751, il l’a ajouté à son oratorio Judas Maccabæus. " +
    "Plus tard, à Erlangen, Friedrich Heinrich Ranke a posé des paroles allemandes sur cet air.",
  funFact:
    "En 1905, Henry Wood a repris cet air dans sa Fantasia on British Sea Songs, " +
    "un morceau qu’on entend souvent à la Last Night of the Proms.",
  versions: {
    common: {
      practice: [
        "Joue les quatre premières mesures à la main droite seule. Le morceau attend chaque note.",
        "Joue les mesures 9 à 16 à la main droite seule. La mélodie y descend jusqu’au si.",
        "Maintenant, la main gauche seule. Elle garde chaque position une demi-mesure ou plus.",
        "Joue tout le morceau à deux mains, lentement.",
        "Joue tout le morceau à deux mains, au tempo.",
      ],
      tips: [
        "La mesure 3 monte ré, mi, fa et sol, puis redescend. Garde bien égales les quatre notes qui montent.",
        "Lève la main après le sol de la mesure 6. Le doigt 5 arrive sur le fa, et la main descend jusqu’au do.",
        "Le dernier do de la mesure 13 est court. Profite du silence pour monter la main, le doigt 4 sur le la.",
      ],
      tricky: {
        7: "Une fois la main levée, le doigt 5 arrive sur le fa, puis les doigts 4 et 3 jouent le mi et le ré.",
        14: "Le doigt 4 joue le la, et le doigt 2 joue le fa dièse, la touche noire entre le fa et le sol.",
        19: "Le même geste qu’à la mesure 7 : lève la main après le sol, et arrive avec le doigt 5 sur le fa.",
      },
    },
    rare: {
      practice: [
        "Joue la main gauche seule, et enfonce ensemble les notes de chaque accord.",
        "Joue les mesures 9 à 16 à la main droite seule. La mélodie s’y tourne vers sol, avec deux fa dièse.",
        "Joue tout le morceau à deux mains, lentement.",
        "Joue tout le morceau à deux mains, un peu plus lentement que le tempo écrit.",
        "Maintenant, joue-le au tempo.",
      ],
      tips: [
        "Joue les accords plus doux que la mélodie, pour qu’elle ressorte comme une sonnerie de trompette.",
        "Ici, la main gauche change d’accord au milieu de la mesure. Compte jusqu’à quatre, et change sur trois.",
        "À la mesure 14, le doigt 2 de la main gauche prend le fa dièse, et à la mesure 15, il revient au fa.",
      ],
      tricky: {
        7: "Lève la main après le sol, arrive avec le doigt 5 sur le fa, et enfonce l’accord sur sol à la main gauche.",
        14: "Les deux mains jouent un fa dièse. À droite comme à gauche, le doigt 2 prend la touche noire.",
        19: "Le même geste qu’à la mesure 7 : lève la main après le sol, et arrive avec le doigt 5 sur le fa.",
      },
    },
    epic: {
      practice: [
        "Joue la basse d’Alberti seule, jusqu’à ce qu’elle roule toute seule : grave, aigu, milieu, aigu.",
        "Joue seuls les accords brisés de la dernière partie, et lève la main à chaque silence.",
        "Joue les mesures 1 à 16 à deux mains, lentement.",
        "Joue tout le morceau à deux mains, à 75 % de la vitesse.",
        "Maintenant, joue-le au tempo, avec la pédale.",
      ],
      tips: [
        "Joue la basse d’Alberti tout en douceur, pour que la mélodie chante au-dessus.",
        "Les deux mains se lèvent à la fin de la mesure 16. " +
          "La main droite saute d’une octave vers le haut, et la gauche descend sur un do grave.",
        "Change de pédale à chaque temps, quand la main gauche commence un nouveau groupe de quatre notes.",
      ],
      tricky: {
        7: "Lève la main après le sol, et arrive avec le doigt 5 sur le fa, pendant que la basse d’Alberti passe à sol.",
        17: "La mélodie recommence une octave plus haut, pendant que la main gauche commence ses accords brisés sur le do grave.",
        23: "Les doigts 5, 4 et 3 descendent fa, mi et ré. Lève la main sur le dernier ré pour atteindre l’accord final.",
      },
    },
    legendary: {
      practice: [
        "Joue la basse stride seule : saute en bas pour l’octave grave, puis remonte pour l’accord.",
        "Joue les mesures 1 à 8 à la main droite seule, et garde légers les petits groupes de notes rapides.",
        "Joue les arpèges de la dernière partie à la main gauche seule.",
        "Joue tout le morceau à deux mains, à 75 % de la vitesse.",
        "Maintenant, joue-le au tempo et laisse sonner le dernier accord.",
      ],
      tips: [
        "Dans la basse stride, regarde l’octave grave et laisse la main trouver l’accord au toucher.",
        "Le gruppetto à la fin de la mesure 4 orne le long ré. Joue-le plus doux que la mélodie.",
        "Garde le pouce et l’auriculaire à une octave l’un de l’autre, et laisse le poignet rebondir.",
      ],
      tricky: {
        3: "La mélodie monte ré, mi, fa et sol une octave plus haut, pendant que la basse stride saute en dessous.",
        7: "Lève la main après le sol, arrive avec le doigt 5 sur le fa, et descends pendant que la basse stride passe à sol.",
        11: "La main gauche passe de do à sol au milieu de la mesure. Garde la basse stride régulière.",
      },
    },
  },
};
