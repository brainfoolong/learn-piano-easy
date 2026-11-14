/** The guide of *The First Noel* in French. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "The First Noel est un chant de Noël anglais, et personne ne sait qui a écrit sa mélodie. " +
    "Elle viendrait des Cornouailles, tout au sud-ouest de l’Angleterre. " +
    "Davies Gilbert l’a publié en 1823, et William Sandys en 1833. " +
    "John Stainer l’a arrangé pour chœur en 1871, et c’est sa version qu’on chante aujourd’hui.",
  funFact:
    "Le mot anglais Noel vient du français « Noël », lui-même tiré du mot latin qui signifie « naissance ».",
  versions: {
    common: {
      practice: [
        "Joue les huit premières mesures à la main droite seule. Le morceau attend chaque note.",
        "Joue le refrain, mesures 17 à 24, à la main droite seule.",
        "Maintenant, la main gauche seule. Elle garde chaque position une mesure entière.",
        "Joue tout le morceau à deux mains, lentement.",
        "Joue tout le morceau à deux mains, au tempo.",
      ],
      tips: [
        "Le premier do est long. Compte jusqu’à trois, puis monte ré, mi et fa en notes égales.",
        "Les mesures 9 à 16 reprennent les huit premières mesures, alors la main les connaît déjà.",
        "Ralentis un peu sur le dernier mi, et laisse-le sonner avec le do grave.",
      ],
      tricky: {
        2: "Le doigt 5 tient le long sol. Lève la main pendant le court silence, et arrive avec le doigt 3 sur le la.",
        10: "Le même geste qu’à la mesure 2 : lève la main après le long sol, et arrive avec le doigt 3 sur le la.",
        18: "Le doigt 5 tient le long sol. Lève la main, et laisse le même doigt arriver sur le do aigu.",
      },
    },
    rare: {
      practice: [
        "Joue la basse de valse seule : note grave, accord, accord.",
        "Joue la main droite seule depuis l’anacrouse. Le morceau attend chaque note.",
        "Joue le premier couplet à deux mains, lentement.",
        "Joue tout le morceau à deux mains, un peu plus lentement que le tempo écrit.",
        "Maintenant, joue-le au tempo.",
      ],
      tips: [
        "Le morceau commence sur le dernier temps. Compte « un, deux », puis joue le mi et le ré.",
        "Dans la basse de valse, joue la note grave un peu plus fort que les accords qui suivent.",
        "Les mesures 22 à 24 reprennent les mesures 6 à 8, alors la main les connaît déjà.",
      ],
      tricky: {
        3: "Le doigt 5 tient le long sol. Lève la main pendant le court silence, et arrive avec le doigt 3 sur le la.",
        11: "Le même geste qu’à la mesure 3 : lève la main après le long sol, et arrive avec le doigt 3 sur le la.",
        19: "Le doigt 5 tient le long sol. Lève la main, et laisse le même doigt arriver sur le do aigu.",
      },
    },
    epic: {
      practice: [
        "Joue la basse d’Alberti seule, jusqu’à ce qu’elle roule toute seule : grave, aigu, milieu, aigu.",
        "Joue à la main droite seule la montée des mesures 2 et 3, avec un passage du pouce sur le fa.",
        "Joue seules les tierces de la main droite, et garde ensemble les deux notes de chaque paire.",
        "Joue tout le morceau à deux mains, à 75 % de la vitesse.",
        "Maintenant, joue-le au tempo, avec la pédale.",
      ],
      tips: [
        "Joue la basse d’Alberti tout en douceur, pour que la mélodie chante au-dessus.",
        "La mélodie est la note du haut de chaque paire : laisse le doigt du haut mener.",
        "Change de pédale sur le troisième temps, là où l’accord passe de do à sol.",
      ],
      tricky: {
        2: "Les doigts 1, 2 et 3 jouent do, ré et mi. Puis le pouce passe sous le doigt 3 jusqu’au fa.",
        16: "Une sixte, puis deux tierces. Le doigt 2 reste sur le mi pour les deux premières, et le pouce descend sur le ré.",
        24: "Les mêmes paires qu’à la mesure 16 : une sixte, deux tierces, et le pouce qui descend sur le ré.",
      },
    },
    legendary: {
      practice: [
        "Joue la basse stride seule : saute en bas pour l’octave, puis remonte pour l’accord.",
        "Joue seules les octaves de la main droite sur le premier couplet, avec un poignet souple.",
        "Joue seuls les accords de la main droite, et laisse l’auriculaire chanter la mélodie.",
        "Joue tout le morceau à deux mains, à 75 % de la vitesse.",
        "Maintenant, joue-le au tempo et laisse sonner le dernier accord.",
      ],
      tips: [
        "Dans la basse stride, regarde l’octave et laisse la main trouver l’accord au toucher.",
        "Chaque octave se joue avec le pouce et l’auriculaire. Garde la main dans cette position.",
        "Joue plus doux les notes graves de chaque accord, pour que la note du haut porte la mélodie.",
      ],
      tricky: {
        5: "Après le long sol, les octaves passent vite au la et au si. Déplace toute la main, avec un poignet souple.",
        7: "Les octaves montent sol, la et si. Laisse la main glisser sur les touches sans la lever haut.",
        10: "Ouvre la main pour l’accord complet sur do, puis referme-la en octave pour le ré, le mi et le fa.",
      },
    },
  },
};
