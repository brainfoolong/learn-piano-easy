/** The guide of *The Sorcerer's Apprentice* in French. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Paul Dukas a achevé ce poème symphonique en 1897, et il a été publié la même année. " +
    "Il suit « L’Apprenti sorcier », un poème de Goethe de 1797. " +
    "Dans le film de Walt Disney « Fantasia » (1940), Mickey Mouse joue l’apprenti.",
  funFact:
    "Dukas lui a donné pour sous-titre « scherzo d’après une ballade de Goethe ». " +
    "C’est de loin son œuvre la plus jouée et la plus enregistrée.",
  versions: {
    common: {
      practice: [
        "Joue les trois premières mesures à la main droite seule. Le morceau attend chaque note.",
        "Joue les mesures 4 à 10 à la main droite seule. La main reste au même endroit.",
        "Maintenant, la main gauche seule. Elle tient une ou deux notes graves par mesure.",
        "Joue les dix premières mesures à deux mains.",
        "Joue tout le morceau à deux mains, au tempo.",
      ],
      tips: [
        "Joue chaque note courte et légère, comme un balai qui sautille. Les silences font partie de la mélodie.",
        "Compte « un, deux, trois ». Le silence tombe sur deux, et la note aiguë sur trois.",
        "La main reste où elle est. Les doigts 2 à 5 se posent sur le la, le si, le do et le ré.",
      ],
      tricky: {
        5: "Le doigt 5 vient de jouer le do. Ramène le doigt 4 sur le la, puis va de nouveau chercher le do.",
        7: "Après le sol dièse au doigt 2, le doigt 4 prend le la. La main gauche quitte le mi et revient au la et au mi.",
        10: "Comme à la mesure 7, le doigt 4 prend le la après le sol dièse. Puis le doigt 5 monte chercher le do.",
      },
    },
    rare: {
      practice: [
        "Joue la main gauche seule. Une note grave arrive d’abord, et un accord de deux notes lui répond deux fois.",
        "Joue les dix premières mesures à la main droite seule. Le morceau attend chaque note.",
        "Joue les six premières mesures à deux mains, lentement.",
        "Joue à deux mains notre propre fin, là où arrivent les croches.",
        "Joue tout le morceau à deux mains, au tempo.",
      ],
      tips: [
        "Garde la mélodie courte et sautillante. Lâche chaque note avant la suivante.",
        "Joue la note grave un peu plus fort que les accords qui suivent. C’est elle qui tient la pulsation.",
        "Deux croches rapides tiennent dans le deuxième temps. Compte-les « un et deux ».",
      ],
      tricky: {
        7: "Le doigt 4 prend le la après le sol dièse. La main gauche redescend de son accord sur mi jusqu’au la.",
        10: "Ici, la mélodie s’arrête. Le doigt 4 prend le la, et la main gauche revient au la.",
        11: "Ici commencent les croches. Garde les doigts 4, 3 et 2 près de leurs touches.",
      },
    },
    epic: {
      practice: [
        "Joue seuls les accords brisés de la main gauche, jusqu’à ce qu’ils roulent tout seuls.",
        "Joue les dix premières mesures à la main droite seule. Garde chaque note courte.",
        "Joue seules les tierces de la main droite, et enfonce les deux notes de chaque paire d’un seul geste.",
        "Joue tout le morceau à deux mains, à 75 % de la vitesse.",
        "Maintenant, joue-le au tempo.",
      ],
      tips: [
        "Joue les accords brisés doux et réguliers, pour que la mélodie qui sautille ressorte au-dessus.",
        "Après le silence, le pouce arrive sur le la grave. Puis les doigts 2 et 3 montent.",
        "Descends du doigt 5 jusqu’au pouce, une touche chacun, puis le doigt 3 remonte d’un saut sur le ré.",
      ],
      tricky: {
        7: "La main gauche saute vers le haut, du mi jusqu’au ré, pour son accord brisé. À la main droite, le doigt 4 prend le ré.",
        10: "Comme à la mesure 7, la main gauche saute vers le haut jusqu’au ré, pendant que la main droite joue le ré et le fa.",
        16: "Ouvre la main droite sur le fa, le la et le ré, et descends la main gauche sur le ré grave.",
      },
    },
    legendary: {
      practice: [
        "Joue la main gauche seule. Une octave grave arrive d’abord, puis deux accords courts.",
        "Joue les dix premières mesures à la main droite seule. Lâche chaque note tout de suite.",
        "Joue seuls les traits de la main droite, quatre doubles croches par temps.",
        "Joue tout le morceau à deux mains, à 75 % de la vitesse.",
        "Maintenant, joue-le au tempo et laisse sonner le dernier accord.",
      ],
      tips: [
        "Les deux mains jouent court et sec. Le balai avance sur la pointe des pieds avant de se mettre à courir.",
        "Laisse le poignet gauche rebondir de l’octave grave jusqu’aux accords.",
        "Chaque trait tient sous cinq doigts. Garde la main immobile et laisse rouler les doigts.",
      ],
      tricky: {
        6: "Les doigts de la main droite descendent sol, fa et mi, chaque note courte. La main gauche saute vers le haut jusqu’à ses accords.",
        12: "Reviens d’un saut au pouce sur le si bémol, puis monte jusqu’au mi en doubles croches égales.",
        16: "Arrive ensemble sur les quatre notes du dernier accord, et descends la main gauche sur le fa grave.",
      },
    },
  },
};
