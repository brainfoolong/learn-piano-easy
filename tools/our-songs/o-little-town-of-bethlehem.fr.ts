/** The guide of *O Little Town of Bethlehem* in French. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Phillips Brooks, un prêtre épiscopalien de Philadelphie, a écrit les paroles en 1868 pour son église. " +
    "Trois ans plus tôt, une visite au village de Bethléem l’avait inspiré. " +
    "Son organiste, Lewis Redner, a écrit pour ces paroles cette mélodie, appelée St. Louis. " +
    "Les États-Unis et le Canada chantent ce chant de Noël sur cette mélodie, le Royaume-Uni et l’Irlande sur une autre.",
  funFact:
    "Redner a raconté qu’il s’était réveillé la nuit en entendant un chant d’ange lui murmurer à l’oreille. Il a vite noté la mélodie.",
  versions: {
    common: {
      practice: [
        "Joue les cinq premières mesures à la main droite seule. Le morceau attend chaque note.",
        "Joue les mesures 6 à 9 à la main droite seule. La mélodie y monte jusqu’au la aigu.",
        "Maintenant, la main gauche seule. Elle ne change de position qu’au début ou au milieu d’une mesure.",
        "Joue tout le morceau à deux mains, lentement.",
        "Joue tout le morceau à deux mains, au tempo.",
      ],
      tips: [
        "Le ré dièse est la touche noire entre ré et mi. Le doigt 2 s’y pose un instant, et le doigt 3 revient sur le mi.",
        "Lève la main un instant avant le la du bas, et encore une fois après le sol du bas. Le pouce joue les deux.",
        "Les deux notes rapides, si et do, se partagent un seul temps.",
      ],
      tricky: {
        6: "Le doigt 3 joue deux fois le mi, puis le doigt 5 monte chercher le la, et le doigt 4 prend le sol.",
        10: "Le doigt 5 reprend le mi, puis les doigts 5, 4 et 3 descendent jusqu’au do.",
        15: "Lève la main après le fa et pose le pouce sur le la du bas. Puis lève-la encore, pour que le doigt 5 arrive sur le la aigu.",
      },
    },
    rare: {
      practice: [
        "Joue la main gauche seule, et enfonce ensemble les notes de chaque accord.",
        "Joue les cinq premières mesures, le début du morceau, à la main droite seule.",
        "Joue les neuf premières mesures à deux mains, lentement.",
        "Joue tout le morceau à deux mains, un peu plus lentement que le tempo écrit.",
        "Maintenant, joue-le au tempo.",
      ],
      tips: [
        "Sous le ré dièse, la main gauche ne joue que do et sol, pour qu’aucun mi ne sonne contre lui.",
        "Tiens chaque accord doux sur toute sa durée, comme un orgue paisible.",
        "Lève la main droite après le la, et pose le doigt 5 sur le la une octave plus haut.",
      ],
      tricky: {
        6: "Le doigt 3 joue deux fois le mi, puis le doigt 5 monte chercher le la. Au milieu de la mesure, la main gauche passe de l’accord de do majeur à l’accord sur fa.",
        10: "Le doigt 5 reprend le mi, et la mélodie descend jusqu’au do. Au milieu de la mesure, la main gauche passe à l’accord de septième sur sol.",
        15: "Lève la main droite deux fois : une fois pour le la du bas, et une fois pour le la une octave au-dessus.",
      },
    },
    epic: {
      practice: [
        "Joue la basse d’Alberti seule, jusqu’à ce qu’elle roule toute seule : grave, aigu, milieu, aigu.",
        "Joue seule la basse d’Alberti plus rapide du deuxième couplet.",
        "Joue le premier couplet à deux mains, lentement.",
        "Joue tout le morceau à deux mains, à 75 % de la vitesse.",
        "Maintenant, joue-le au tempo, avec la pédale.",
      ],
      tips: [
        "Joue la basse d’Alberti tout en douceur, pour que la mélodie chante au-dessus.",
        "Lève la main droite après le long do, et pose le doigt 3 sur le mi une octave plus haut.",
        "Change de pédale à chaque demi-mesure, quand la main gauche commence un nouvel accord.",
      ],
      tricky: {
        17: "Tiens le long do avec le pouce, puis lève la main et pose le doigt 3 sur le mi une octave plus haut.",
        19: "La mélodie tombe du fa au la, pendant que la main gauche joue sa basse d’Alberti deux fois plus vite.",
        33: "Lève la main après le ré court, puis joue ensemble mi, sol et do avec le pouce et les doigts 2 et 5.",
      },
    },
    legendary: {
      practice: [
        "Joue la basse stride seule : saute en bas pour l’octave grave, puis remonte pour l’accord.",
        "Joue seules les octaves de la main droite, le pouce et le doigt 5 gardés dans la même position.",
        "Joue les arpèges du deuxième couplet à la main gauche seule.",
        "Joue tout le morceau à deux mains, à 75 % de la vitesse.",
        "Maintenant, joue-le au tempo et laisse sonner le dernier accord.",
      ],
      tips: [
        "Dans la basse stride, regarde l’octave du bas et laisse la main trouver l’accord au toucher.",
        "Garde le pouce et le doigt 5 à une octave l’un de l’autre, et lève la main avant chaque déplacement plus large.",
        "Laisse les octaves sonner comme des cloches, et garde doux les arpèges en dessous.",
      ],
      tricky: {
        20: "Les octaves passent pas à pas par do, si, do et ré, puis se lèvent et descendent sur le sol. " +
          "Garde le pouce et le doigt 5 dans la même position.",
        22: "Après le deuxième mi, lève l’octave et pose-la sur le la, une quarte plus haut.",
        31: "Lève l’octave deux fois : d’abord pour descendre sur le la du bas, puis pour monter d’une octave entière jusqu’au la aigu.",
      },
    },
  },
};
