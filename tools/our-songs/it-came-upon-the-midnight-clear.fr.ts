/** The guide of *It Came Upon the Midnight Clear* in French. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Edmund Sears a écrit ce poème en 1849. Il a d’abord paru dans The Christian Register, à Boston, le 29 décembre 1849. " +
    "Richard Storrs Willis a publié la mélodie un an plus tard, comme étude pour chœurs. " +
    "Aux États-Unis, les recueils de cantiques ont mis le poème sur cet air, sous le nom de Carol. " +
    "Il est ainsi devenu un chant de Noël très aimé.",
  funFact:
    "En Grande-Bretagne, on chante le plus souvent les mêmes paroles sur un autre air, Noel. " +
    "Arthur Sullivan l’a arrangé d’après un air populaire anglais.",
  versions: {
    common: {
      practice: [
        "Joue les trois premières mesures à la main droite seule. Le morceau attend chaque note.",
        "Joue les mesures 9 à 13 à la main droite seule. Là, la mélodie descend puis remonte.",
        "Maintenant, la main gauche seule. Elle tient une quinte ou une seule note à la fois, et reste au même endroit.",
        "Joue les cinq premières mesures à deux mains.",
        "Joue tout le morceau à deux mains, au tempo.",
      ],
      tips: [
        "Lève le pouce du sol un instant plus tôt. L’auriculaire a alors le temps d’atteindre le mi aigu.",
        "Ici, la mélodie descend d’une octave entière. Lève la main du mi aigu, et pose le pouce sur le mi grave.",
        "Compte six temps par mesure : long, court, long, court. La mélodie se balance comme une berceuse.",
      ],
      tricky: {
        6: "Après le court silence, le doigt 5 arrive sur le mi aigu. Puis les doigts 4, 3 et 2 descendent jusqu’au la.",
        8: "Le doigt 2 joue deux fois le la, et le doigt 3 monte au si. Puis le doigt 2 et le pouce descendent jusqu’au sol.",
        14: "La même position qu’à la mesure 6 : le doigt 5 sur le mi aigu, puis les doigts 4, 3 et 2 jusqu’au la.",
      },
    },
    rare: {
      practice: [
        "Joue la main gauche seule. Une note de basse vient d’abord, puis le reste de son accord.",
        "Joue les cinq premières mesures à la main droite seule, lentement.",
        "Joue les mesures 9 à 13 à la main droite seule. Là, la mélodie descend puis remonte.",
        "Joue les mesures 1 à 5 à deux mains.",
        "Joue tout le morceau à deux mains, au tempo.",
      ],
      tips: [
        "Sur le deuxième do, remplace le doigt 4 par le pouce. Les doigts 2 et 3 atteignent alors ré et mi.",
        "Profite de l’accord long de la mesure 5 pour préparer la main au mi aigu.",
        "La mélodie monte par fa dièse et sol dièse. Laisse-la devenir un peu plus forte jusqu’au mi aigu.",
      ],
      tricky: {
        10: "La mélodie descend du mi aigu au mi grave. Puis le pouce glisse vers le haut jusqu’au fa dièse, et le doigt 2 prend le sol dièse.",
        11: "Les doigts 3, 4 et 5 montent vers la, si et do. Puis le doigt 5 continue de monter jusqu’au mi aigu.",
        12: "Les doigts 4, 3 et 2, puis le pouce, descendent de ré à la. Ensuite, le doigt 3 prend le si, pour que le doigt 2 arrive sur le la.",
      },
    },
    epic: {
      practice: [
        "Joue la basse d’Alberti seule, jusqu’à ce qu’elle roule toute seule : grave, aigu, milieu, aigu.",
        "Joue les mesures 9 à 13 à la main droite seule, avec un passage du pouce en montant.",
        "Joue seules les tierces et les sixtes de la main droite, et enfonce les deux notes de chaque paire d’un seul geste.",
        "Joue tout le morceau à deux mains, à 75 % de la vitesse.",
        "Maintenant, joue-le au tempo, avec la pédale.",
      ],
      tips: [
        "Joue la basse d’Alberti tout en douceur, pour que la mélodie flotte au-dessus.",
        "Monte mi, fa dièse et sol dièse avec le pouce et les doigts 2 et 3, puis passe le pouce dessous jusqu’au la.",
        "La mélodie est la note du haut de chaque paire : laisse le doigt du haut mener.",
      ],
      tricky: {
        4: "Le pouce monte du sol au la. Puis les doigts 2 à 5 montent jusqu’au mi, avec le doigt 3 sur les deux do.",
        15: "Les paires changent de position : le pouce et le doigt 3 pour une tierce, le pouce et le doigt 5 pour une sixte. " +
          "Le pouce descend jusqu’au si, puis remonte au ré.",
        16: "Des tierces sur fa et la, puis les doigts 2 et 4 montent vers sol et si, et reviennent. À la fin, le pouce descend chercher le si.",
      },
    },
    legendary: {
      practice: [
        "Joue la basse stride seule : saute en bas pour l’octave, puis remonte pour l’accord.",
        "Joue seuls les accords de la main droite, et laisse le doigt du haut chanter la mélodie.",
        "Joue la troisième phrase, mesures 9 à 13, à deux mains. Là, la mélodie descend puis remonte.",
        "Joue tout le morceau à deux mains, à 75 % de la vitesse.",
        "Maintenant, joue-le au tempo et laisse sonner le dernier accord.",
      ],
      tips: [
        "Dans la basse stride, regarde la note de basse et laisse la main trouver l’accord au toucher.",
        "Joue la note du haut de chaque accord un peu plus fort que les autres.",
        "Un court silence précède chaque anacrouse. Profites-en pour amener la main sur l’accord suivant.",
      ],
      tricky: {
        3: "Le doigt 3 chante le la après mi et sol. Puis le pouce descend sur le si, sous fa et sol, et le doigt 3 garde le sol de la mélodie.",
        5: "Ouvre la main sur quatre notes : ré, sol, si et ré. Puis lève-la et pose le pouce sur le sol.",
        13: "Encore un accord de quatre notes, sol, si, ré et sol, avec l’auriculaire en haut. Relâche-le dans le silence avant l’anacrouse.",
      },
    },
  },
};
