/** The guide of *Vltava* in French. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Smetana a écrit « La Moldau » en 1874. " +
    "C’est le deuxième des six poèmes symphoniques de son cycle « Ma patrie », Má vlast en tchèque. " +
    "Sa musique peint la rivière qui traverse Prague. " +
    "Le film de Terrence Malick « The Tree of Life », sorti en 2011, l’utilise.",
  funFact:
    "Sa célèbre mélodie est une adaptation de La Mantovana, un air attribué au ténor italien de la Renaissance Giuseppe Cenci.",
  versions: {
    common: {
      practice: [
        "Joue les mesures 1 à 5 à la main droite seule. Le morceau attend chaque note.",
        "Joue les mesures 5 à 9 à la main droite seule. La mélodie y descend jusqu’au mi.",
        "Maintenant, la main gauche seule. Elle garde chaque position une mesure entière et ne bouge jamais.",
        "Joue les neuf premières mesures à deux mains, lentement.",
        "Joue tout le morceau à deux mains, au tempo.",
      ],
      tips: [
        "Commence avec le pouce sur le si. Puis les doigts 2 à 5 montent du mi au la.",
        "Lâche le la un peu en avance. Pendant ce court silence, monte la main d’une touche, le doigt 4 sur le si.",
        "Compte six temps par mesure : long, court, long, court. La rivière coule sans jamais se presser.",
      ],
      tricky: {
        3: "Le doigt 4 joue trois fois le si. La main vient de monter d’une touche, alors le doigt 5 attend au-dessus du do.",
        5: "Après les deux do aigus, le doigt 4 rejoue le si. Garde la main immobile, et laisse les doigts descendre.",
        8: "Joue les deux premiers fa dièse avec le pouce, et le troisième avec le doigt 2. " +
          "Le pouce est alors libre pour le mi.",
      },
    },
    rare: {
      practice: [
        "Joue la main gauche seule : une longue note grave, puis une note ou un accord court.",
        "Joue les neuf premières mesures à la main droite seule. Le morceau attend chaque note.",
        "Joue les neuf premières mesures à deux mains, lentement.",
        "Joue tout le morceau à deux mains, un peu plus lentement que le tempo écrit.",
        "Maintenant, joue-le au tempo.",
      ],
      tips: [
        "Chaque demi-mesure a une note longue et une note courte, aux deux mains. Sens le balancement : long, court.",
        "Lâche le la un peu en avance. Pendant ce court silence, monte la main d’une touche, le doigt 4 sur le si.",
        "Termine sur le mi et le sol ensemble. Le pouce et le doigt 3 les enfoncent d’un seul geste.",
      ],
      tricky: {
        3: "Une fois la main montée, le doigt 4 joue trois fois le si. La main gauche joue un long mi, puis un si court.",
        5: "Le doigt 4 joue de nouveau trois fois le si, et le doigt 3 attend au-dessus du la pour la mesure suivante.",
        12: "Les doigts 3, 4 et 5 montent du sol au si. Puis le la et le sol reviennent vite en arrière, avant le long si.",
      },
    },
    epic: {
      practice: [
        "Joue la main gauche seule, jusqu’à ce que les accords brisés coulent tout seuls.",
        "Joue les mesures 10 à 17 à la main droite seule, et passe le pouce dessous en montant.",
        "Joue seules les tierces et les sixtes de la main droite, et enfonce les deux notes de chaque paire d’un seul geste.",
        "Joue tout le morceau à deux mains, à 75 % de la vitesse.",
        "Maintenant, joue-le au tempo, avec la pédale.",
      ],
      tips: [
        "Change de pédale à chaque nouvelle note de basse, deux fois par mesure.",
        "Après le fa dièse, passe le pouce dessous jusqu’au sol. Les doigts 2, 3 et 4 atteignent alors le la, le si et le do.",
        "La mélodie est la note du haut de chaque paire : laisse le doigt du haut mener.",
      ],
      tricky: {
        16: "Le pouce prend le ré dièse, et la main gauche joue un ré dièse grave en dessous. " +
          "Tous deux ramènent la musique vers son point de repos, le mi.",
        17: "Les doigts 3 et 2, puis le pouce, descendent jusqu’au mi. " +
          "Ensuite, le pouce saute en bas jusqu’au si, l’anacrouse de la mélodie.",
        24: "Le pouce et le doigt 3 tiennent le ré dièse et le fa dièse. " +
          "Puis le pouce s’étire vers le bas jusqu’au la pour la sixte.",
      },
    },
    legendary: {
      practice: [
        "Joue la main gauche seule : une octave sur le temps, puis deux fois un accord, chacun suivi d’un court silence pour sauter.",
        "Joue seuls les arpèges de la main gauche. Le pouce passe dessous, et le doigt 3 passe par-dessus.",
        "Joue seuls les accords de la main droite, et laisse le doigt du haut chanter la mélodie.",
        "Joue tout le morceau à deux mains, à 75 % de la vitesse.",
        "Maintenant, joue-le au tempo et laisse sonner le dernier accord.",
      ],
      tips: [
        "Profite du court silence après chaque octave et chaque accord pour sauter au suivant.",
        "Laisse couler les arpèges tout en douceur, comme la rivière sous la mélodie.",
        "Quelques accords frottent exprès contre la basse. Joue la note du haut de chaque accord un peu plus fort.",
      ],
      tricky: {
        20: "Ouvre la main sur do, mi, la et do pour le premier accord. Puis le pouce monte jusqu’au mi pour le deuxième.",
        22: "L’accord de la mineur sonne trois fois. Garde la main souple, et joue le dernier avec les doigts 2 et 5.",
        24: "Tiens les accords de si majeur, puis profite du court silence pour ouvrir la main sur mi, sol, si et mi.",
      },
    },
  },
};
