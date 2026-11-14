/** The guide of *Black Flag Jig* in French. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Black Flag Jig est un air de notre composition, dans le style d’une musique de film de cape et d’épée. " +
    "Il danse sur une mesure à 6/8 rapide, comme une gigue de marins sur le pont.",
  funFact:
    "La gigue est une danse vive, comptée en deux groupes de trois. Elle vient des îles Britanniques, au XVIe siècle.",
  versions: {
    common: {
      practice: [
        "Joue les mesures 1 à 4 à la main droite seule. Le morceau attend chaque note.",
        "Joue les mesures 5 à 8 à la main droite seule. À la mesure 7, le pouce descend jusqu’au do dièse.",
        "Maintenant, la main gauche seule. Elle tient deux touches et en change au plus deux fois par mesure.",
        "Joue les huit premières mesures à deux mains, lentement.",
        "Joue tout le morceau à deux mains, au tempo.",
      ],
      tips: [
        "Compte six temps par mesure : long, bref, long, bref. C’est le sautillement de la gigue.",
        "Le doigt 5 prend si bémol, une touche noire. Puis il joue la au début de la mesure 3, et les doigts descendent pas à pas.",
        "Le pouce joue do dièse, la touche noire juste sous le ré. Puis la main s’ouvre jusqu’au la.",
      ],
      tricky: {
        2: "Les doigts 3, 4 et 5 montent sol, la et si bémol. Puis le doigt 3 revient sur sol.",
        6: "La main descend de sol à ré avec les doigts 5, 4, 3 et 2. Le pouce attend au-dessus du do dièse.",
        10: "Les doigts 4 et 5 se balancent entre sol et la. Puis le doigt 2 descend sur mi.",
      },
    },
    rare: {
      practice: [
        "Joue la main gauche seule : une note grave longue, puis un accord bref.",
        "Joue les huit premières mesures à la main droite seule. Le morceau attend chaque note.",
        "Joue les huit premières mesures à deux mains, lentement.",
        "Joue tout le morceau à deux mains, un peu plus lentement que le tempo écrit.",
        "Maintenant, joue-le au tempo.",
      ],
      tips: [
        "Chaque demi-mesure de la main gauche a une note longue et un accord bref. Sens le rebond : long, bref.",
        "Les paires de croches rapides vont deux fois plus vite que les notes brèves. Compte-les bien régulières.",
        "Termine sur ré et fa ensemble. Le pouce et le doigt 3 les enfoncent d’un seul geste.",
      ],
      tricky: {
        4: "Le pouce tient ré trois temps, puis le doigt 4 tient la. La main gauche rebondit sous les deux.",
        6: "Les doigts 5, 4, 3 et 2 descendent de sol à ré. La main gauche passe de sol mineur à do majeur.",
        13: "Le doigt 5 atteint la, puis le pouce descend sur ré. Mi et fa sont des croches rapides avant le la suivant.",
      },
    },
    epic: {
      practice: [
        "Joue la main gauche seule, jusqu’à ce que les accords brisés roulent tout seuls.",
        "Joue les mesures 9 à 16 à la main droite seule, et passe le pouce dessous en montant.",
        "Joue seules les tierces et les sixtes de la main droite, et enfonce les deux notes de chaque paire d’un seul geste.",
        "Joue tout le morceau à deux mains, à 75 % de la vitesse.",
        "Maintenant, joue-le au tempo, avec la pédale.",
      ],
      tips: [
        "Change de pédale à chaque nouvelle note de basse, deux fois par mesure.",
        "Après fa, passe le pouce dessous jusqu’au sol. Les doigts 2 et 3 atteignent ensuite la et si bémol.",
        "La mélodie est la note du haut de chaque paire : laisse le doigt du haut mener.",
      ],
      tricky: {
        14: "La main saute entre si bémol, sol et ré, puis s’ouvre jusqu’au do. Le doigt 2 reste au-dessus du sol toute la mesure.",
        19: "Le pouce tient do dièse, puis glisse vers le do. Le doigt du haut descend la, sol, fa et mi.",
        21: "Le pouce et le doigt 5 tiennent chaque sixte et descendent d’une touche à la fois. Le doigt 4 prend le dernier fa.",
      },
    },
    legendary: {
      practice: [
        "Joue la main gauche seule : une octave, puis deux fois un accord, chacun suivi d’un court silence pour sauter.",
        "Joue seuls les arpèges de la main gauche. Ils montent sur deux octaves et redescendent en roulant.",
        "Joue seuls les accords de la main droite, et laisse le doigt du haut chanter la mélodie.",
        "Joue tout le morceau à deux mains, à 75 % de la vitesse.",
        "Maintenant, joue-le au tempo et laisse sonner le dernier accord.",
      ],
      tips: [
        "Profite du court silence après chaque octave et chaque accord pour sauter au suivant.",
        "Laisse les arpèges monter et descendre comme un navire sur les vagues.",
        "Joue la note du haut de chaque accord un peu plus fort, pour que la mélodie ressorte.",
      ],
      tricky: {
        2: "La main gauche saute d’une octave de sol grave à l’accord sol-ré-sol. La main droite monte sol, la et si bémol.",
        18: "Lève la main après chaque accord, et arrive sur le suivant. Le pouce monte de si bémol à ré, puis revient.",
        21: "Le pouce reste sur ré pendant deux accords, puis descend sur si bémol. Le doigt du haut chante si bémol, la, sol et fa.",
      },
    },
  },
};
