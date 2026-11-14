/** The guide of *Alle Jahre wieder* in French. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Alle Jahre wieder signifie « Chaque année à nouveau » en allemand. " +
    "C’est l’un des chants de Noël allemands les plus connus. " +
    "Wilhelm Hey a écrit ses trois couplets en 1837. Ils parlent de l’Enfant Jésus, qui descend sur terre chaque année. " +
    "Friedrich Silcher a écrit la mélodie et l’a publiée en 1842, dans un recueil de douze chansons pour enfants.",
  funFact:
    "Les mêmes paroles se chantent aussi sur une mélodie de Christian Heinrich Rinck. " +
    "Aujourd’hui, cette mélodie porte surtout un autre poème, Abend wird es wieder.",
  versions: {
    common: {
      practice: [
        "Joue les quatre premières mesures à la main droite seule. Le morceau attend chaque note.",
        "Joue les mesures 5 à 8 à la main droite seule. La mélodie y monte jusqu’au do aigu.",
        "Maintenant, la main gauche seule. Elle garde une position et en change au plus une fois par mesure.",
        "Joue tout le morceau à deux mains, lentement.",
        "Joue tout le morceau à deux mains, au tempo.",
      ],
      tips: [
        "Le premier sol est long et le la est court, comme un petit élan avant le retour du sol.",
        "Après le long ré, lève la main et pose le pouce sur le do central.",
        "Pendant que le do aigu sonne, glisse l’auriculaire jusqu’au si.",
      ],
      tricky: {
        3: "Le pouce prend le do central. Puis les doigts 2, 3 et 4 montent jusqu’au fa et redescendent d’un pas sur le mi.",
        6: "L’auriculaire joue le do aigu, puis glisse jusqu’au si. Les doigts 4 et 3 prennent le la et le sol.",
        14: "Le même glissement qu’à la mesure 6 : tiens le do aigu, puis descends l’auriculaire sur le si.",
      },
    },
    rare: {
      practice: [
        "Joue la main gauche seule, et enfonce ensemble les notes de chaque accord.",
        "Joue la basse du deuxième couplet seule : note grave, note aiguë, une sur chaque temps.",
        "Joue le premier couplet à deux mains, lentement.",
        "Joue tout le morceau à deux mains, un peu plus lentement que le tempo écrit.",
        "Maintenant, joue-le au tempo.",
      ],
      tips: [
        "Pour l’accord de fa majeur, le pouce monte du sol au la, puis revient pour l’accord suivant.",
        "Dans le deuxième couplet, joue les notes graves un peu plus fort que les notes aiguës.",
        "Le ré et le mi sont rapides, et le fa arrive au milieu de la mesure avec l’accord.",
      ],
      tricky: {
        3: "Le pouce droit descend sur le do central, pendant que la main gauche lâche le mi pour le deuxième accord.",
        6: "Ici, les deux mains bougent. Le pouce gauche monte jusqu’au la, et l’auriculaire droit glisse jusqu’au si.",
        14: "Au-dessus du fa et du do du bas, l’auriculaire droit tient le do aigu, puis glisse jusqu’au si.",
      },
    },
    epic: {
      practice: [
        "Joue la basse d’Alberti seule, jusqu’à ce qu’elle roule toute seule : grave, aigu, milieu, aigu.",
        "Joue seules les tierces et les sixtes de la main droite, et garde ensemble les deux notes de chaque paire.",
        "Joue le premier couplet à deux mains, lentement.",
        "Joue tout le morceau à deux mains, à 75 % de la vitesse.",
        "Maintenant, joue-le au tempo, avec la pédale.",
      ],
      tips: [
        "Joue la basse d’Alberti tout en douceur, pour que la mélodie chante au-dessus.",
        "La mélodie est la note du haut de chaque paire : laisse le doigt du haut mener.",
        "Change de pédale au milieu de la mesure, là où l’accord change.",
      ],
      tricky: {
        6: "Au milieu de la mesure, la basse d’Alberti passe de l’accord de fa majeur à l’accord de septième sur sol. " +
          "Change de pédale avec elle.",
        9: "La main droite saute d’une octave vers le haut et joue des paires de notes. Trouve la première paire avant le début de la mesure.",
        14: "Les paires la et do, puis sol et si, puis fa et la descendent pas à pas, et l’auriculaire mène.",
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
        10: "Après l’arpège de do, la main gauche descend sur le sol du bas pendant le court silence.",
        12: "La main droite tient son octave, alors suis la main gauche dans les deux arpèges de sol.",
        14: "Les octaves sautent jusqu’au do aigu, pendant que la main gauche monte sur l’accord de fa majeur, " +
          "puis sur l’accord de septième sur sol.",
      },
    },
  },
};
