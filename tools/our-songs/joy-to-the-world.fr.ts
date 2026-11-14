/** The guide of *Joy to the World* in French. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Lowell Mason a publié cet air à Boston, sous le nom d’Antioch. Il porte des paroles écrites par Isaac Watts en 1719. " +
    "Ses quatre premières notes reprennent le début du chœur Lift up your heads, dans « Le Messie » de Haendel.",
  funFact:
    "Isaac Watts a écrit ces paroles en adaptant le psaume 98. Il n’a jamais voulu en faire un chant de Noël.",
  versions: {
    common: {
      practice: [
        "Joue les deux premières mesures à la main droite seule, un doigt par touche, en descendant de do à fa.",
        "Joue les mesures 1 à 5 à deux mains. La main gauche termine la gamme descendante aux mesures 3 et 4.",
        "Joue les mesures 13 à 16 à la main droite seule. Là, les notes répétées montent puis descendent.",
        "Joue tout le morceau à deux mains, lentement.",
        "Joue tout le morceau à deux mains, au tempo.",
      ],
      tips: [
        "Chaque doigt prend une touche en descendant : 5, 4, 3, 2, puis le pouce.",
        "La mélodie passe à la main gauche le temps de deux notes. Fais-les bien chanter.",
        "Compte les notes répétées bien régulièrement, comme des cloches qui sonnent l’une après l’autre.",
      ],
      tricky: {
        3: "Le pouce glisse du fa au mi, puis la main gauche joue ré et do.",
        17: "Lève la main après le mi, et arrive avec l’auriculaire sur le do aigu.",
        20: "Le pouce glisse du ré jusqu’au dernier do. Tiens-le jusqu’à la fin.",
      },
    },
    rare: {
      practice: [
        "Joue les quatre premières mesures à la main droite seule. Le morceau attend chaque note.",
        "Joue la main gauche seule. Elle tient un accord par demi-mesure.",
        "Joue les mesures 13 à 16 à deux mains. C’est là que sont les notes répétées.",
        "Joue tout le morceau à deux mains, un peu plus lentement que le tempo écrit.",
        "Maintenant, joue-le au tempo.",
      ],
      tips: [
        "Long, long, court : le la est rapide, et il mène au long sol.",
        "Joue le fa court et lève la main. Le doigt 3 arrive sur le mi, prêt à descendre jusqu’au do.",
        "La mélodie monte note après note, de la à si, puis à do. Laisse la musique devenir un peu plus forte à chaque pas.",
      ],
      tricky: {
        3: "La main est descendue : le doigt 3 joue mi, le doigt 2 joue ré, et le pouce attend le do.",
        19: "Le pouce joue mi, puis glisse jusqu’au ré.",
        20: "Le pouce glisse encore une fois vers le bas, jusqu’au dernier do. Tiens-le jusqu’à la fin.",
      },
    },
    epic: {
      practice: [
        "Joue la basse d’Alberti seule, jusqu’à ce qu’elle roule toute seule : grave, aigu, milieu, aigu.",
        "Joue les quatre premières mesures à la main droite seule. À la mesure 3, le doigt 3 passe par-dessus le pouce.",
        "Joue à la main droite seule les tierces des mesures 13 à 16, et enfonce les deux notes d’un seul geste.",
        "Joue tout le morceau à deux mains, à 75 % de la vitesse.",
        "Maintenant, joue-le au tempo, avec la pédale.",
      ],
      tips: [
        "Joue la basse d’Alberti tout en douceur, pour que la gamme descendante sonne bien au-dessus.",
        "La mélodie est la note du haut de chaque tierce : laisse le doigt du haut mener.",
        "Change de pédale au début et au milieu de chaque mesure, quand la main gauche reprend sa formule.",
      ],
      tricky: {
        17: "Le pouce passe sous le doigt 3 pour aller sur le mi. Puis l’auriculaire monte chercher le do aigu.",
        18: "Après le fa du pouce, le doigt 3 passe par-dessus pour aller sur le mi.",
        20: "Lève les deux mains après si et ré, puis arrive sur le dernier accord, la main gauche en octave.",
      },
    },
    legendary: {
      practice: [
        "Joue la basse stride seule : saute en bas pour l’octave, puis remonte pour l’accord.",
        "Joue seuls les accords de la main droite, et laisse l’auriculaire chanter la mélodie.",
        "Joue à la main droite seule les octaves des mesures 13 à 19. Garde la main ouverte et légère.",
        "Joue tout le morceau à deux mains, à 75 % de la vitesse.",
        "Maintenant, joue-le au tempo et laisse sonner le dernier accord.",
      ],
      tips: [
        "Dans la basse stride, regarde la note de basse et laisse la main trouver l’accord au toucher.",
        "Le trait rapide, du do au sol, est un ornement. Fais-le briller, puis arrive sur le sol.",
        "Dans les octaves, joue un peu plus fort avec l’auriculaire, pour que la mélodie rayonne au-dessus.",
      ],
      tricky: {
        5: "Depuis le sol aigu, la main descend sur do, fa et la. L’auriculaire monte d’une touche jusqu’au la.",
        6: "Tout l’accord monte d’une touche, de do, fa et la vers ré, sol et si. Garde la position de la main.",
        9: "Le pouce descend de mi à do, pendant que le doigt du haut tombe du do aigu au sol.",
      },
    },
  },
};
