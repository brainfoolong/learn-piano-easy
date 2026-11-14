/** The guide of *Yankee Doodle* in French. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Yankee Doodle est un air traditionnel que les soldats britanniques chantaient pour se moquer des colons américains. " +
    "Pendant la Révolution américaine, les Américains ont fait de cette chanson la leur, et l’ont chantée avec fierté. " +
    "L’une de ses premières éditions figure dans un recueil d’airs publié par James Aird à Glasgow en 1782.",
  funFact:
    "Yankee Doodle est la chanson officielle de l’État du Connecticut.",
  versions: {
    common: {
      practice: [
        "Joue la main droite seule, lentement. Le morceau attend chaque note.",
        "Maintenant, la main gauche seule. Chacune de ses notes dure deux temps ou plus.",
        "Joue les quatre premières mesures à deux mains.",
        "Joue tout le morceau à deux mains, au tempo.",
      ],
      tips: [
        "Le doigt 2 se place sur le do, et le pouce descend chercher le sol grave à la fin de la mesure 2.",
        "Les deux notes de la mesure 4 durent deux temps. Compte-les bien.",
        "Lève la main un instant après le do de la mesure 6. Elle se repose une touche plus bas.",
      ],
      tricky: {
        6: "Descends fa, mi, ré et do avec les doigts 5, 4, 3 et 2, puis lève la main.",
        7: "Pose le doigt 2 sur le si, et le pouce prend le sol grave.",
        8: "Le doigt 4 joue les deux do. Tiens chacun deux temps.",
      },
    },
    rare: {
      practice: [
        "Joue la main droite seule sur tout le couplet, lentement.",
        "Joue la main gauche seule. Tiens chaque accord jusqu’à la note suivante.",
        "Joue le refrain à deux mains. Il se trouve plus haut sur le clavier.",
        "Joue tout le morceau à deux mains, un peu plus lentement que le tempo écrit.",
        "Maintenant, joue-le au tempo.",
      ],
      tips: [
        "La note de basse vient d’abord, et l’accord lui répond. Joue l’accord un peu plus doux.",
        "Passe au pouce sur le deuxième sol, pour que la main puisse monter vers le refrain.",
        "Ici, la mélodie monte jusqu’à sa note la plus haute. Laisse cette note sonner, puis arrive tout en douceur sur le sol.",
      ],
      tricky: {
        7: "Descends le doigt 2 du sol au fa dièse, et le pouce arrive sur le ré en dessous.",
        12: "Le pouce joue le si, puis descend jusqu’au sol. Tiens d’abord le si deux temps.",
        15: "Le pouce prend le ré, puis le doigt 4 monte jusqu’au sol. Garde la main ouverte.",
      },
    },
    epic: {
      practice: [
        "Joue la basse d’Alberti seule, jusqu’à ce qu’elle roule toute seule : grave, aigu, milieu, aigu.",
        "Joue seul le trait de la mesure 8, et passe le pouce dessous jusqu’au do.",
        "Joue seul le refrain en tierces, et garde ensemble les deux notes de chaque paire.",
        "Joue tout le morceau à deux mains, à 75 % de la vitesse.",
        "Maintenant, joue-le au tempo, avec la pédale.",
      ],
      tips: [
        "Joue la basse d’Alberti tout en douceur, pour que la mélodie chante au-dessus.",
        "Le pouce passe sous le doigt 3 pour atteindre le do, et le trait continue de monter jusque dans le refrain.",
        "Les fa dièse frottent un instant contre la basse, exprès.",
      ],
      tricky: {
        7: "Descends le doigt 2 du sol au fa dièse. Le reste de la main le suit.",
        11: "Le refrain redescend au ré. Le doigt 3 le prend, pour que la main soit prête pour le do.",
        15: "La main s’ouvre sur une sixte, si et sol, puis monte jusqu’au fa dièse et au la.",
      },
    },
    legendary: {
      practice: [
        "Joue la basse stride seule : saute en bas pour l’octave, puis remonte pour l’accord.",
        "Joue seules les sixtes et les tierces de la main droite, et laisse le doigt du haut chanter la mélodie.",
        "Joue les octaves du refrain à la main gauche seule.",
        "Joue tout le morceau à deux mains, à 75 % de la vitesse.",
        "Maintenant, joue-le au tempo et laisse sonner le dernier accord.",
      ],
      tips: [
        "Dans la basse stride, regarde l’octave et laisse la main trouver l’accord au toucher.",
        "Le pouce joue toutes les notes du bas, et les doigts 4 et 5 portent la mélodie.",
        "Joue les octaves courtes, et laisse la pédale les relier.",
      ],
      tricky: {
        3: "La mélodie monte pendant que la basse saute. Garde les yeux sur la main gauche.",
        5: "Les sixtes bougent d’un seul bloc. Laisse le pouce mener chaque pas vers le haut.",
        8: "Lève la main après le deuxième accord, puis saute jusqu’au mi pour le refrain.",
      },
    },
  },
};
