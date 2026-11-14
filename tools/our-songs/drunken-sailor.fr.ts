/** The guide of *Drunken Sailor* in French. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Drunken Sailor est un chant de marins. " +
    "Les équipages le chantaient en halant les cordages ou en tournant le cabestan. " +
    "Personne ne sait qui l’a écrit, et sa mélodie est en mode dorien.",
  funFact:
    "La première trace écrite de ce chant vient d’un voyage baleinier de 1839, parti de New London, dans le Connecticut.",
  versions: {
    common: {
      practice: [
        "Joue les quatre premières mesures à la main droite seule. Le morceau attend chaque note.",
        "Joue les mesures 5 à 8 à la main droite seule. La mélodie monte jusqu’au ré, puis revient à son point de départ.",
        "Maintenant, la main gauche seule. Elle tient une note grave par mesure ou par demi-mesure.",
        "Joue les huit premières mesures à deux mains, lentement.",
        "Joue tout le morceau à deux mains, au tempo.",
      ],
      tips: [
        "Chaque moitié de mesure fait long, court, court. Martèle-la comme un marin qui tape du pied sur le pont.",
        "Le doigt 5 joue le la, puis le pouce descend chercher le ré. La main reste où elle est.",
        "Joue le dernier la de la mesure 5 avec le doigt 2. Les doigts 3, 4 et 5 sont alors prêts pour si, do et ré.",
      ],
      tricky: {
        3: "Le doigt 4 joue six fois le sol : long, court, court, long, court, court. Garde les notes courtes légères.",
        5: "Le doigt 5 joue cinq fois le la. Puis le doigt 2 prend le dernier la, et la main est prête à monter.",
        7: "Le doigt 5 descend du ré au do. Puis les doigts 4, 3 et 2 descendent vers la, sol et mi.",
      },
    },
    rare: {
      practice: [
        "Joue la main gauche seule : une note grave, puis deux notes sur le temps suivant.",
        "Joue les huit premières mesures à la main droite seule. Le morceau attend chaque note.",
        "Joue les mesures 9 à 16 à deux mains, lentement.",
        "Joue tout le morceau à deux mains, un peu plus lentement que le tempo écrit.",
        "Maintenant, joue-le au tempo.",
      ],
      tips: [
        "La main gauche se balance grave, aigu, grave, aigu, comme un équipage qui tire ensemble sur une corde.",
        "Après le long ré aigu, le doigt 5 glisse vers le do. C’est le seul déplacement de la main.",
        "Termine sur ré et fa ensemble, et laisse-les sonner.",
      ],
      tricky: {
        3: "Le doigt 4 joue six fois le sol, pendant que la main gauche joue do, puis sol. Garde les deux mains régulières.",
        4: "Le pouce descend chercher le do, et le doigt 2 joue le mi. La main gauche reste sur do et sol.",
        7: "Après le long ré, le doigt 5 descend au do. La main gauche joue do, puis fa et la, puis do et sol.",
      },
    },
    epic: {
      practice: [
        "Joue la basse d’Alberti seule, jusqu’à ce qu’elle roule toute seule : grave, aigu, milieu, aigu.",
        "Joue les mesures 9 à 16 à la main droite seule, et passe le pouce dessous en montant.",
        "Joue les huit premières mesures à deux mains, lentement.",
        "Joue tout le morceau à deux mains, à 75 % de la vitesse.",
        "Maintenant, joue-le au tempo, avec la pédale.",
      ],
      tips: [
        "Change de pédale à chaque nouvelle note de basse, deux fois par mesure.",
        "Passe le pouce dessous vers le sol, après le fa joué par le doigt 3.",
        "La mélodie est maintenant la note du haut de chaque paire. Laisse le doigt du haut la chanter.",
      ],
      tricky: {
        7: "Le doigt 5 descend du ré au do, et les doigts 4, 3 et 2 descendent à sa suite. " +
          "La main gauche roule fa majeur, puis do majeur.",
        17: "Les doigts 2 et 4 enfoncent fa et la ensemble. Puis le doigt 4 joue deux fois le la seul.",
        24: "La main gauche joue ré, fa et la ensemble, avec les doigts 5, 3 et 1. La main droite tient fa, la et ré.",
      },
    },
    legendary: {
      practice: [
        "Joue la main gauche seule : une octave sur le temps, puis un accord, chacun suivi d’un court silence pour sauter.",
        "Joue seules les octaves de la main droite. Garde le pouce et le doigt 5 ouverts, comme un cadre fixe.",
        "Joue seuls les arpèges de la main gauche, et laisse le pouce passer dessous en descendant.",
        "Joue tout le morceau à deux mains, à 75 % de la vitesse.",
        "Maintenant, joue-le au tempo et laisse sonner le dernier accord.",
      ],
      tips: [
        "Lève la main à chaque court silence, puis arrive sur l’octave suivante.",
        "Laisse les arpèges rouler tout en douceur, comme des vagues sous le navire.",
        "Joue les accords courts et francs, comme des bottes sur le pont. La note du haut est la mélodie.",
      ],
      tricky: {
        9: "Le pouce passe dessous vers le sol après le fa. La main gauche commence son arpège sur le ré grave.",
        12: "La main gauche descend chercher le la grave avec le doigt 5. La main droite commence sur le mi avec le pouce.",
        15: "La main gauche commence sur le fa grave, puis sur le do. À la main droite, le pouce joue fa, puis mi.",
      },
    },
  },
};
