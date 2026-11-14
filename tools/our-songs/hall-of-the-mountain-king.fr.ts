/** The guide of *In the Hall of the Mountain King* in French. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Grieg a écrit cette musique pour « Peer Gynt », la pièce d’Henrik Ibsen, créée en 1876 à Christiania, l’actuelle Oslo. " +
    "Dans cette scène, les trolls se pressent autour de Peer dans la salle de leur roi. " +
    "Le même petit air revient sans cesse, chaque fois plus fort et plus rapide, jusqu’au grand fracas final. " +
    "Le film « The Social Network » le fait entendre pendant une course d’aviron.",
  funFact:
    "Grieg lui-même a écrit que ce morceau sentait la bouse de vache et la suffisance des trolls. " +
    "Il pouvait à peine supporter de l’entendre.",
  versions: {
    common: {
      practice: [
        "Joue la main droite seule, lentement. Le morceau attend chaque note.",
        "Maintenant, la main droite seule dans les mesures 9 à 16, où la mélodie monte plus haut.",
        "La main gauche garde une quinte ou une seule note par mesure. Joue les huit premières mesures à deux mains.",
        "Joue tout le morceau à deux mains, au tempo.",
      ],
      tips: [
        "Ici, chaque doigt a sa propre touche : le pouce sur le la, l’auriculaire sur le mi.",
        "Joue court et doux, comme un troll qui traverse une grotte sur la pointe des pieds.",
        "Ici, la mélodie monte plus haut. Laisse-la devenir un peu plus forte, comme si les trolls se réveillaient.",
      ],
      tricky: {
        4: "À la mesure 3, le doigt 4 s’avançait vers le ré dièse. Ici, c’est le doigt 2 qui s’avance vers le si bémol.",
        9: "Le pouce arrive sur le mi, et les doigts 2, 3 et 4 montent d’une touche chacun. La main gauche descend sur le mi.",
        17: "La mélodie recommence. Pendant le silence, ramène le pouce sur le la, et la main gauche sur le la elle aussi.",
      },
    },
    rare: {
      practice: [
        "Joue la main gauche seule. Elle alterne entre deux notes à chaque temps, comme une marche de trolls.",
        "Joue les mesures 3 et 4 à la main droite seule, et fais attention au dièse et au bémol.",
        "Joue les huit premières mesures à deux mains, lentement.",
        "Joue les mesures 9 à 16 à deux mains. C’est là que la mélodie monte.",
        "Joue tout le morceau à deux mains, au tempo.",
      ],
      tips: [
        "Le ré dièse et le si bémol sont des touches noires. Les doigts 4 et 2 s’avancent un peu plus vers le fond du clavier.",
        "Les deux mains jouent à chaque temps. Marche en rythme et garde des temps bien réguliers.",
        "Dans ce passage, les trolls se rapprochent. Joue-le un peu plus fort que le début.",
      ],
      tricky: {
        4: "Le doigt 2 s’avance vers le si bémol, pendant que la main gauche alterne entre sol et ré.",
        9: "Profite du silence pour descendre la main gauche sur le mi grave. Le pouce droit commence la montée sur le mi.",
        17: "Les deux mains reviennent sur le la pendant le silence, et la mélodie recommence encore une fois.",
      },
    },
    epic: {
      practice: [
        "Joue seuls les accords brisés de la main gauche, jusqu’à ce qu’ils roulent tout seuls : grave, milieu, aigu, milieu.",
        "Joue les mesures 5 à 8 à la main droite seule. C’est là qu’arrive le passage du pouce.",
        "Joue le thème à la main gauche seule, à partir de la mesure 17.",
        "Joue tout le morceau à deux mains, à 75 % de la vitesse.",
        "Maintenant, joue-le au tempo, de plus en plus fort vers la fin.",
      ],
      tips: [
        "La basse glisse du do dièse au do. Ce glissement inquiétant donne aux trolls leur air sournois.",
        "Après le do dièse joué par le doigt 2, passe le pouce dessous pour le ré, et la main monte.",
        "Maintenant, c’est la main gauche qui joue la mélodie. La main droite tapote seulement de courts accords entre les temps.",
      ],
      tricky: {
        9: "Pendant le court silence, descends la main gauche sur le fa dièse grave. Le pouce droit commence la montée.",
        17: "Les mains échangent leurs rôles. La main gauche joue la mélodie sur les temps, et la main droite tapote entre les temps.",
        23: "La main gauche monte par fa dièse, la dièse, do dièse et mi, puis lâche tout pour trouver le si grave.",
      },
    },
    legendary: {
      practice: [
        "Joue seules les octaves de la main gauche, courtes et pincées comme une corde, avec un silence après chacune.",
        "Joue seules les octaves de la main droite. Garde la main dans une seule position et déplace-la d’un bloc.",
        "Joue seules les octaves entraînantes de la main gauche, huit par mesure.",
        "Joue tout le morceau à deux mains, à 75 % de la vitesse.",
        "Maintenant, joue-le au tempo, doux au début et fort à la fin.",
      ],
      tips: [
        "Commence en jouant doux. Tout le morceau devient plus fort jusqu’à la fin, alors garde de la marge pour grandir.",
        "Pour les octaves, le pouce et l’auriculaire gardent la même position. Laisse le poignet faire le mouvement.",
        "Ce sont les derniers fracas des trolls. Joue chaque accord fort et court.",
      ],
      tricky: {
        9: "La main droite commence ses octaves, et la main gauche ses croches. Garde les deux mains souples.",
        13: "Les octaves remontent par fa dièse, sol dièse, la dièse et si. Laisse le poignet rebondir de touche en touche.",
        27: "Les accords alternent entre si mineur et fa dièse majeur. Garde les doigts 1, 2, 3 et 5 dans leur position.",
      },
    },
  },
};
