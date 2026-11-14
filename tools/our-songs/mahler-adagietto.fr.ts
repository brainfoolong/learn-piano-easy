/** The guide of *Adagietto* in French. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "L’Adagietto est le quatrième mouvement, le mouvement lent, de la Cinquième Symphonie de Mahler. " +
    "Elle a été jouée pour la première fois à Cologne en 1904. " +
    "Le film de Luchino Visconti « Mort à Venise », sorti en 1971, l’a rendu célèbre bien au-delà des salles de concert.",
  funFact: "Depuis ce film, c’est la musique la plus connue que Mahler ait jamais écrite.",
  versions: {
    common: {
      practice: [
        "Joue les quatre premières mesures à la main droite seule. Le morceau attend chaque note.",
        "Joue les mesures 5 à 8 à la main droite seule. La mesure 5 a un si, et les mesures 6 et 7 un fa dièse.",
        "Maintenant, la main gauche seule. Elle tient chaque note pendant une demi-mesure ou une mesure entière.",
        "Joue les huit premières mesures à deux mains, lentement.",
        "Joue tout le morceau à deux mains, au tempo.",
      ],
      tips: [
        "Compte cinq noires de silence. Puis do, ré et mi mènent en douceur vers la mélodie.",
        "Joue le deuxième fa avec le pouce. Puis les doigts 4 et 3 atteignent si bémol et la.",
        "Cette musique est lente et tendre. Laisse chanter chaque note longue, et ne te presse jamais.",
      ],
      tricky: {
        4: "Joue le premier do avec le doigt 5, puis répète-le avec le doigt 4. Le doigt 5 prend ensuite le ré.",
        5: "Le si est une touche blanche, et le si bémol qui suit est une touche noire. Les doigts 3 et 2 les jouent.",
        11: "Les doigts 4, 3 et 2 descendent du si bémol au sol. Puis le pouce prend le mi.",
      },
    },
    rare: {
      practice: [
        "Joue la main gauche seule. Une note grave arrive sur le temps, et un accord lui répond.",
        "Joue les huit premières mesures à la main droite seule. Le morceau attend chaque note.",
        "Joue les huit premières mesures à deux mains, lentement.",
        "Joue tout le morceau à deux mains, un peu plus lentement que le tempo écrit.",
        "Maintenant, joue-le au tempo.",
      ],
      tips: [
        "La main gauche joue sur chaque temps : une note grave, puis un accord. Compte « un, deux ».",
        "Joue la main gauche très doux, pour que la mélodie flotte au-dessus.",
        "Les doigts 3 et 5 enfoncent ensemble si bémol et ré. Laisse le ré chanter un peu plus.",
      ],
      tricky: {
        5: "Le si est une touche blanche, et le si bémol qui suit est une touche noire. D’abord, la main gauche ne joue que sol et ré.",
        7: "Le pouce joue d’abord le fa dièse, puis le fa à la fin. À mi-mesure, la main gauche passe du si bémol au do.",
        14: "Le doigt 4 joue deux fois le si bémol dans cette mesure. À mi-mesure, la main gauche passe du fa au sol.",
      },
    },
    epic: {
      practice: [
        "Joue la basse d’Alberti seule, jusqu’à ce qu’elle roule toute seule : grave, aigu, milieu, aigu.",
        "Joue seules les tierces et les sixtes de la main droite, et enfonce les deux notes de chaque paire d’un seul geste.",
        "Joue les huit premières mesures à deux mains, lentement.",
        "Joue tout le morceau à deux mains, à 75 % de la vitesse.",
        "Maintenant, joue-le au tempo, avec la pédale.",
      ],
      tips: [
        "Change de pédale à chaque nouvelle note de basse, deux fois par mesure.",
        "Joue la basse d’Alberti tout en douceur, bien régulière, comme une harpe sous les violons.",
        "La mélodie est la note du haut de chaque paire : laisse le doigt du haut mener.",
      ],
      tricky: {
        18: "Pour la sixte, le pouce descend du do au la. Puis il remonte au fa pour les notes seules.",
        23: "Pour la sixte, ouvre la main du ré au si bémol. Puis les doigts 4, 3 et 2 descendent jusqu’au fa.",
        24: "Le pouce descend du mi au si bémol, pendant que les doigts 3 et 5 prennent mi et sol.",
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
        "Profite du court silence après chaque octave et chaque accord pour sauter vers le suivant.",
        "Laisse les arpèges couler tout en douceur sous la mélodie, et change de pédale à chaque nouvel accord.",
        "Joue la note du haut de chaque accord un peu plus fort que les autres.",
      ],
      tricky: {
        14: "La main gauche monte deux octaves depuis le si bémol, puis depuis le sol. Chaque fois, le doigt 3 passe par-dessus le pouce.",
        16: "La main droite tient le fa toute la mesure, pendant que la main gauche monte deux fois depuis le fa.",
        17: "Après le fa, le pouce saute jusqu’au do. Puis les doigts 2 et 3 montent au ré et au mi.",
      },
    },
  },
};
