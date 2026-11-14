/** The guide of *Ding Dong Merrily on High* in French. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Ce chant de Noël est d’abord un air de danse, appelé Branle de l’Official. " +
    "Il a été imprimé en 1589 dans « Orchésographie », un livre de danse du religieux français Thoinot Arbeau. " +
    "Le compositeur anglais George Ratcliffe Woodward a écrit les paroles du chant, publié en 1924. " +
    "Charles Wood l’a harmonisé.",
  funFact: "Thoinot Arbeau était un pseudonyme. Derrière lui se cachait Jehan Tabourot.",
  versions: {
    common: {
      practice: [
        "Joue les deux premières mesures à la main droite seule. Le morceau attend chaque note.",
        "Joue les mesures 5 à 7 à la main droite seule. Ici, la mélodie descend en trait depuis le sol aigu.",
        "Maintenant, la main gauche seule. Elle garde chaque position une demi-mesure.",
        "Joue tout le morceau à deux mains, lentement.",
        "Joue tout le morceau à deux mains, au tempo.",
      ],
      tips: [
        "Le pouce commence sur le sol, sous la mélodie, et le doigt 4 joue le premier do.",
        "Joue le dernier do avec le pouce. L’auriculaire monte alors jusqu’au sol aigu.",
        "Le trait descend d’une touche à chaque note longue. " +
          "Les doigts 5, 4 et 3 prennent les trois premières, puis la main descend d’une touche à la fois.",
      ],
      tricky: {
        1: "Le doigt 4 joue deux fois le do, puis les doigts 5, 4, 3 et 2 descendent de ré à la. Le pouce tient le long sol.",
        5: "Le trait commence sur le sol aigu, avec l’auriculaire. Chaque note longue relance la même formule une touche plus bas.",
        7: "Les doigts 3, 2 et 1 jouent do, si et la, puis si, do et la. Ensuite, ils descendent si, la et sol.",
      },
    },
    rare: {
      practice: [
        "Joue la main gauche seule, et enfonce ensemble les notes de chaque accord.",
        "Joue les mesures 5 à 7 à la main droite seule. Ici, la mélodie descend en trait depuis le sol aigu.",
        "Joue le premier couplet à deux mains, lentement.",
        "Joue tout le morceau à deux mains, un peu plus lentement que le tempo écrit.",
        "Maintenant, joue-le au tempo.",
      ],
      tips: [
        "Le trait avance par groupes : une note longue et cinq rapides. Tiens chaque note longue aussi longtemps que trois rapides.",
        "Tiens chaque accord tout doux, pour que les cloches de la mélodie sonnent au-dessus.",
        "Au deuxième couplet, joue la note grave un peu plus fort que l’accord qui la suit.",
      ],
      tricky: {
        5: "Le trait commence sur le sol aigu, avec l’auriculaire. Chaque note longue relance la même formule une touche plus bas.",
        7: "Les doigts 3, 2 et 1 jouent do, si et la, puis si, do et la. Ensuite, ils descendent si, la et sol.",
        15: "Les mêmes notes qu’à la mesure 7, maintenant sur une note de basse et un accord, tour à tour.",
      },
    },
    epic: {
      practice: [
        "Joue la basse d’Alberti seule, jusqu’à ce qu’elle roule toute seule : grave, aigu, milieu, aigu.",
        "Joue le trait des mesures 5 à 7 à la main droite seule.",
        "Joue le premier couplet à deux mains, lentement.",
        "Joue tout le morceau à deux mains, à 75 % de la vitesse.",
        "Maintenant, joue-le au tempo, avec la pédale.",
      ],
      tips: [
        "Joue la basse d’Alberti tout en douceur, pour que la mélodie sonne au-dessus comme une cloche.",
        "Après le dernier do, la main droite saute d’une octave vers le haut, et la main gauche descend sur un do grave.",
        "Change de pédale à chaque demi-mesure, quand la main gauche commence un nouvel accord.",
      ],
      tricky: {
        9: "La main droite joue le début une octave plus haut. La main gauche descend au do grave pour son accord brisé.",
        10: "La main gauche joue fa, puis sol suivi d’un silence, et saute vers le do grave.",
        12: "Le même saut vers le do qu’à la mesure 10. Puis le pouce droit prend le dernier do, prêt pour le sol aigu.",
      },
    },
    legendary: {
      practice: [
        "Joue la basse stride seule : saute en bas pour l’octave grave, puis remonte pour l’accord.",
        "Joue le trait des mesures 5 à 7 à la main droite seule, et garde légers les petits balancements rapides.",
        "Joue les arpèges du deuxième couplet à la main gauche seule.",
        "Joue tout le morceau à deux mains, à 75 % de la vitesse.",
        "Maintenant, joue-le au tempo et laisse sonner le dernier accord.",
      ],
      tips: [
        "Dans la basse stride, regarde l’octave grave et laisse la main trouver l’accord au toucher.",
        "Chaque note longue se balance une fois, comme une cloche. Joue ce balancement plus léger que la mélodie.",
        "Garde le pouce et l’auriculaire écartés d’une octave, et laisse le poignet rebondir.",
      ],
      tricky: {
        9: "Les octaves sur do, ré, si et la arrivent vite. Garde la main en position d’octave, et déplace-la depuis le poignet.",
        11: "Le début revient en octaves. Joue-les bien régulières pendant que les arpèges courent en dessous.",
        14: "Le trait se balance jusqu’au si, pendant que la main gauche monte en dessous un arpège sur do, puis un arpège sur sol.",
      },
    },
  },
};
