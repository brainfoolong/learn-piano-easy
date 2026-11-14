/** The guide of *Aquarium* in French. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Aquarium est le septième mouvement du « Carnaval des animaux », une plaisanterie musicale que Saint-Saëns a écrite en 1886. " +
    "La suite a été publiée en 1922, l’année qui a suivi sa mort. " +
    "Le film de Terrence Malick « Les Moissons du ciel » (1978) le fait entendre pendant son générique de début.",
  funFact:
    "De son vivant, Saint-Saëns a interdit que la suite soit jouée en public. " +
    "Il craignait que ses plaisanteries nuisent à sa réputation de compositeur sérieux.",
  versions: {
    common: {
      practice: [
        "Joue les quatre premières mesures à la main droite seule. Le morceau attend chaque note.",
        "Joue les mesures 5 à 8 à la main droite seule. Le pouce commence maintenant sur le si.",
        "Maintenant, la main gauche seule. Elle garde une position par mesure.",
        "Joue les huit premières mesures à deux mains, lentement.",
        "Joue tout le morceau à deux mains, au tempo.",
      ],
      tips: [
        "Les doigts 5 et 4 se balancent entre mi et ré dièse, comme de l’eau qui clapote contre une vitre.",
        "Joue doux et lié, comme des poissons qui glissent dans une eau calme.",
        "Ici, la main monte d’une touche. Le doigt 4 joue maintenant le mi, et le pouce attend au-dessus du si.",
      ],
      tricky: {
        1: "Va et viens entre mi et ré dièse avec les doigts 5 et 4. Puis le doigt 4 glisse sur le ré, la touche blanche.",
        3: "La mesure 3 reprend la mesure 1. Garde le doigt 4 près de la touche noire, et le ré dièse viendra facilement.",
        9: "Pendant le long si, ramène la main vers le bas. Le pouce revient sur le la, et le doigt 5 prend le mi.",
      },
    },
    rare: {
      practice: [
        "Joue la main gauche seule. Elle va et vient entre une note grave et une note plus haute, sur chaque temps.",
        "Joue les huit premières mesures à la main droite seule. Le morceau attend chaque note.",
        "Joue les huit premières mesures à deux mains, lentement.",
        "Joue tout le morceau à deux mains, un peu plus lentement que le tempo écrit.",
        "Maintenant, joue-le au tempo.",
      ],
      tips: [
        "Les deux mains jouent sur chaque temps. Garde les temps aussi réguliers que des vagues lentes.",
        "Joue doux à la main gauche, pour que la mélodie flotte au-dessus.",
        "Termine sur la et do ensemble. Les doigts 1 et 3 les enfoncent d’un seul geste.",
      ],
      tricky: {
        1: "Va et viens entre mi et ré dièse avec les doigts 5 et 4, pendant que la main gauche alterne la et do.",
        3: "Comme à la mesure 1, les doigts 5 et 4 vont et viennent entre mi et ré dièse. " +
          "Puis le doigt 4 prend le ré, la touche blanche.",
        9: "Pendant le long si, ramène la main droite vers le bas, pour que le pouce soit de nouveau sur le la.",
      },
    },
    epic: {
      practice: [
        "Joue la basse d’Alberti seule, jusqu’à ce qu’elle roule toute seule : grave, aigu, milieu, aigu.",
        "Joue seules les paires de notes de la main droite à partir de la mesure 17, " +
          "et enfonce les deux notes de chaque paire d’un seul geste.",
        "Joue les huit premières mesures à deux mains, lentement.",
        "Joue tout le morceau à deux mains, à 75 % de la vitesse.",
        "Maintenant, joue-le au tempo, avec la pédale.",
      ],
      tips: [
        "Change de pédale à chaque nouvelle mesure, pour que l’eau reste claire.",
        "Le doigt du bas de la main gauche reste près du la. Il ne passe au sol dièse que pour l’accord de mi majeur.",
        "La mélodie est la note du haut de chaque paire : laisse le doigt du haut mener.",
      ],
      tricky: {
        9: "Pendant le long si, ramène la main droite vers le bas. Puis elle descend du mi au la avec les doigts 5 à 1.",
        15: "La main gauche descend jusqu’au sol dièse. La main droite joue si, ré, do et si avec les doigts 2, 4, 3 et 2.",
        24: "Tiens sol dièse et si avec les doigts 1 et 3. Puis ouvre la main sur la, do et mi pour le dernier accord.",
      },
    },
    legendary: {
      practice: [
        "Joue la main gauche seule : une octave sur le temps, puis un accord, chacun suivi d’un court silence pour sauter.",
        "Joue seuls les arpèges de la main gauche. Le pouce passe dessous, et le doigt 3 passe par-dessus.",
        "Joue seuls les accords de la main droite, et laisse le doigt du haut chanter la mélodie.",
        "Joue tout le morceau à deux mains, à 75 % de la vitesse.",
        "Maintenant, joue-le au tempo et laisse sonner le dernier accord.",
      ],
      tips: [
        "Profite du court silence après chaque octave et chaque accord pour sauter au suivant.",
        "Fais ruisseler les arpèges tout en douceur, comme la lumière qui traverse l’eau.",
        "Joue la note du haut de chaque accord un peu plus fort que les autres.",
      ],
      tricky: {
        8: "La main gauche saute de l’octave de mi grave jusqu’à sol dièse, si et mi. Profite de chaque court silence pour arriver.",
        18: "Après l’accord aigu, la main droite descend sur do, mi et la. Garde la main dans sa position d’accord.",
        24: "Lève la main droite dans le court silence après mi, sol dièse et si. Elle arrive sur la, do, mi et la.",
      },
    },
  },
};
