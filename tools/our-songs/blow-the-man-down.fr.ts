/** The guide of *Blow the Man Down* in French. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Blow the Man Down est un chant de marins à hisser. L’équipage le chantait en hissant une lourde voile le long du mât. " +
    "Notre mélodie suit l’édition qu’en a imprimée R. R. Terry en 1921.",
  funFact:
    "Un journal de Syracuse, dans l’État de New York, a cité un vers de la chanson en 1867. " +
    "Des marins l’avaient chantée sur un bateau à vapeur, entre New York et Glasgow.",
  versions: {
    common: {
      practice: [
        "Joue les mesures 1 à 7 à la main droite seule. Le morceau attend chaque note.",
        "Joue les mesures 8 à 17 à la main droite seule. La main se déplace deux fois, chaque fois après une note longue.",
        "Maintenant, la main gauche seule. Elle tient une ou deux notes pendant toute une mesure.",
        "Joue les sept premières mesures à deux mains, lentement.",
        "Joue tout le morceau à deux mains, au tempo.",
      ],
      tips: [
        "Commence avec le pouce sur sol. Le doigt 2 prend si, le doigt 4 prend ré, et le doigt 5 prend mi.",
        "Tiens le premier ré trois temps, puis joue mi un temps. Ce mi bref tire comme une corde.",
        "Les marins chantaient cet air en hissant une voile. Appuie un peu sur la première note de chaque mesure, comme pour tirer.",
      ],
      tricky: {
        8: "Après le long mi, la main descend. Le doigt 4 arrive sur do, et le pouce attend au-dessus du fa dièse.",
        13: "Le doigt 4 monte de la à mi, et le doigt 5 joue le sol aigu.",
        14: "Après le sol aigu, le doigt 5 descend sur ré. Il joue ré trois fois : bref, long, puis moyen.",
      },
    },
    rare: {
      practice: [
        "Joue la main gauche seule : une note grave longue, puis un accord bref.",
        "Joue les sept premières mesures à la main droite seule. Le morceau attend chaque note.",
        "Joue les mesures 8 à 17 à deux mains, lentement.",
        "Joue tout le morceau à deux mains, un peu plus lentement que le tempo écrit.",
        "Maintenant, joue-le au tempo.",
      ],
      tips: [
        "La main gauche joue long, bref, long, bref dans chaque mesure. Laisse la mélodie voguer au-dessus, comme une barque sur les vagues.",
        "Enfonce les deux notes de chaque accord d’un seul geste. La note du haut est la mélodie : fais-la sonner un peu plus fort.",
        "Deux croches rapides remplissent un temps. Dis « oh-hisse » sur chaque paire.",
      ],
      tricky: {
        8: "Après l’accord do et mi, la main descend. Le doigt 4 arrive sur do. La main gauche joue ré, puis la et ré ensemble.",
        13: "Le doigt 4 monte de la à mi, et le doigt 5 joue le sol aigu. La main gauche joue do, puis sol et do ensemble.",
        14: "Le doigt 5 descend du sol aigu sur ré et le joue trois fois. Garde le poignet souple.",
      },
    },
    epic: {
      practice: [
        "Joue la main gauche seule, jusqu’à ce que les accords brisés roulent tout seuls.",
        "Joue les mesures 18 à 24 à la main droite seule. Passe le pouce dessous en montant.",
        "Joue les neuf premières mesures à deux mains, lentement.",
        "Joue tout le morceau à deux mains, à 75 % de la vitesse.",
        "Maintenant, joue-le au tempo, avec la pédale.",
      ],
      tips: [
        "Change de pédale à chaque nouvelle note de basse, deux fois par mesure.",
        "Après sol au doigt 3, passe le pouce dessous jusqu’au la bémol. Les doigts 2 et 3 atteignent ensuite si bémol et do.",
        "En descendant, le doigt 3 passe par-dessus le pouce jusqu’au fa.",
      ],
      tricky: {
        14: "Après le mi bémol aigu, le doigt 5 descend sur si bémol et le joue trois fois.",
        18: "Passe le pouce dessous jusqu’au la bémol, et garde le trait bien lié. La main gauche continue de rouler sans s’arrêter.",
        21: "La main s’ouvre sur une octave, de mi bémol à mi bémol. Les doigts 4 et 3 descendent ensuite sur ré et do.",
      },
    },
    legendary: {
      practice: [
        "Joue la main gauche seule : une octave sur le temps, puis deux fois un accord, chacun suivi d’un court silence pour sauter.",
        "Joue seuls les accords de la main droite, et laisse le doigt du haut chanter la mélodie.",
        "Joue seuls les arpèges de la main gauche. En montant, le doigt 3 passe par-dessus le pouce.",
        "Joue tout le morceau à deux mains, à 75 % de la vitesse.",
        "Maintenant, joue-le au tempo et laisse sonner le dernier accord.",
      ],
      tips: [
        "Profite du court silence après chaque octave et chaque accord pour sauter au suivant.",
        "Joue la note du haut de chaque grand accord un peu plus fort. C’est elle qui porte la mélodie.",
        "Laisse les arpèges rouler tout en douceur, comme des vagues sous le navire.",
      ],
      tricky: {
        19: "La main gauche commence sur le la bémol grave, et le doigt 3 passe par-dessus le pouce jusqu’au do.",
        22: "Le pouce droit reste près du la bémol, et le doigt 5 s’étire jusqu’au mi bémol à la fin.",
        24: "Profite du silence pour sauter sur le si bémol grave. La main droite monte de fa à ré, puis redescend pas à pas jusqu’au la bémol.",
      },
    },
  },
};
