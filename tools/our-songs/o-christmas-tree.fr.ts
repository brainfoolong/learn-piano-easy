/** The guide of *O Christmas Tree* in French. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Le titre allemand O Tannenbaum signifie « Ô sapin ». " +
    "La mélodie vient d’une vieille chanson populaire allemande, et personne ne sait qui l’a écrite. " +
    "Ernst Anschütz, un enseignant de Leipzig, a écrit en 1824 les paroles chantées aujourd’hui. " +
    "Sa chanson fait l’éloge du sapin, qui reste vert tout l’hiver.",
  funFact:
    "La même mélodie sert à la chanson officielle de l’État de l’Iowa. Celle du Maryland l’a utilisée jusqu’en 2021.",
  versions: {
    common: {
      practice: [
        "Joue les cinq premières mesures à la main droite seule. Le morceau attend chaque note.",
        "Joue les mesures 5 à 9 à la main droite seule. La mélodie y monte jusqu’au la.",
        "Maintenant, la main gauche seule. Elle ne tient que deux positions, une par mesure.",
        "Joue tout le morceau à deux mains, lentement.",
        "Joue tout le morceau à deux mains, au tempo.",
      ],
      tips: [
        "Long, court, long : la deuxième note, rapide, s’appuie sur la troisième, comme un petit sautillement.",
        "Le pouce commence sur le sol sous le do central, et le doigt 2 prend le do central.",
        "Lève la main avant le sol du bas, et laisse le pouce descendre dessus.",
      ],
      tricky: {
        3: "Le doigt 4 joue quatre fois le mi. Joue léger, pour que le deuxième mi, rapide, sonne quand même.",
        4: "Les doigts 3, 4 et 5 montent jusqu’au fa, puis le pouce descend chercher le si.",
        6: "L’auriculaire joue le sol, le doigt 3 prend le mi, et l’auriculaire s’étire jusqu’au la.",
      },
    },
    rare: {
      practice: [
        "Joue la main gauche seule, et enfonce ensemble les trois notes de chaque accord.",
        "Joue seule la basse de valse du deuxième couplet : note grave, accord, accord.",
        "Joue le premier couplet à deux mains, lentement.",
        "Joue tout le morceau à deux mains, un peu plus lentement que le tempo écrit.",
        "Maintenant, joue-le au tempo.",
      ],
      tips: [
        "Après le dernier do, le pouce monte jusqu’au sol suivant. Le deuxième couplet commence alors une octave plus haut.",
        "Dans la basse de valse, joue la note grave un peu plus fort que les accords qui suivent.",
        "La phrase du milieu revient deux fois, un pas plus bas la deuxième fois. Joue l’écho un peu plus doux.",
      ],
      tricky: {
        13: "Les doigts 2 et 1 jouent le ré et le do, puis le pouce saute jusqu’au sol suivant.",
        16: "Une octave plus haut, les doigts 3, 4 et 5 montent jusqu’au fa, et le pouce revient chercher le si.",
        24: "Le même écart qu’à la mesure 16 : monte jusqu’au fa, puis rentre le pouce jusqu’au si.",
      },
    },
    epic: {
      practice: [
        "Joue la basse d’Alberti seule, jusqu’à ce qu’elle roule toute seule : grave, aigu, milieu, aigu.",
        "Joue seules les sixtes de la main droite, et garde ensemble les deux notes de chaque paire.",
        "Joue le premier couplet à deux mains, lentement.",
        "Joue tout le morceau à deux mains, à 75 % de la vitesse.",
        "Maintenant, joue-le au tempo, avec la pédale.",
      ],
      tips: [
        "Joue la basse d’Alberti tout en douceur, pour que la mélodie chante au-dessus.",
        "La mélodie est la note du haut de chaque paire : laisse le doigt du haut mener.",
        "Change de pédale sur le deuxième temps, là où l’accord sur sol laisse place à l’accord de do majeur.",
      ],
      tricky: {
        16: "La main s’ouvre sur une septième, sol et fa. Puis le pouce descend du sol au ré pour la dernière paire.",
        17: "Après les deux paires, l’auriculaire monte chercher le sol aigu.",
        25: "Ouvre la main pour les deux derniers accords, et laisse sonner le do du haut.",
      },
    },
    legendary: {
      practice: [
        "Joue la basse stride seule : saute en bas pour l’octave, puis remonte pour l’accord.",
        "Joue seuls les accords de la main droite, et laisse l’auriculaire chanter la mélodie.",
        "Joue les arpèges du deuxième couplet à la main gauche seule.",
        "Joue tout le morceau à deux mains, à 75 % de la vitesse.",
        "Maintenant, joue-le au tempo et laisse sonner le dernier accord.",
      ],
      tips: [
        "Dans la basse stride, regarde l’octave et laisse la main trouver l’accord au toucher.",
        "Dans l’aigu, les octaves doivent sonner comme des cloches. Garde le poignet souple.",
        "Dans chaque arpège, le doigt 3 passe par-dessus le pouce en montant.",
      ],
      tricky: {
        4: "L’auriculaire joue ré, mi et fa en haut. Puis la main descend sur l’accord de sol majeur, l’auriculaire sur le si.",
        5: "Lève la main après l’accord de do majeur, et va chercher le sol aigu avec l’auriculaire.",
        12: "Les mêmes accords qu’à la mesure 4. Garde l’auriculaire sur la mélodie pendant que le pouce descend.",
      },
    },
  },
};
