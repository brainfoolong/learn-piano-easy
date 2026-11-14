/** The guide of *Angels We Have Heard on High* in French. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Angels We Have Heard on High est la version anglaise d’un chant de Noël français traditionnel, « Les anges dans nos campagnes ». " +
    "Sa plus ancienne impression connue, avec paroles et musique, date de 1842, dans un recueil de Louis Lambillotte. " +
    "Les paroles anglaises sont une paraphrase écrite en 1862 par James Chadwick, évêque catholique de Hexham et Newcastle.",
  funFact:
    "Dans le refrain Gloria in excelsis Deo, le « o » de Gloria est tenu sur une longue suite de notes qui montent et descendent.",
  versions: {
    common: {
      practice: [
        "Joue les quatre premières mesures à la main droite seule. Le morceau attend chaque note.",
        "Joue le Gloria, mesures 5 à 7, à la main droite seule. Laisse les notes rapides monter et descendre bien régulières.",
        "Maintenant, la main gauche seule. Elle garde chaque position une demi-mesure.",
        "Joue tout le morceau à deux mains, lentement.",
        "Joue tout le morceau à deux mains, au tempo.",
      ],
      tips: [
        "Commence avec le doigt 3 sur le mi. Le pouce repose sur le do central, et le doigt 5 sur le sol.",
        "Chaque note longue est suivie de quatre notes rapides. Compte-les « un, deux, trois, quatre ».",
        "Laisse sonner le dernier do pendant toute la mesure, puis lève les deux mains ensemble.",
      ],
      tricky: {
        6: "Le doigt 2 joue le ré, puis le pouce s’allonge jusqu’au sol du bas. La main reste où elle est.",
        7: "Depuis le sol du bas, les doigts 2 à 5 montent sur do, ré, mi et fa, une touche chacun.",
        10: "La même montée qu’à la mesure 7 : les doigts 2 à 5 sur do, ré, mi et fa.",
      },
    },
    rare: {
      practice: [
        "Joue la main gauche seule, et enfonce ensemble les notes de chaque accord.",
        "Joue le Gloria, mesures 5 à 7, à la main droite seule. Garde les notes rapides bien régulières.",
        "Joue le premier passage à deux mains, lentement.",
        "Joue tout le morceau à deux mains, un peu plus lentement que le tempo écrit.",
        "Maintenant, joue-le au tempo.",
      ],
      tips: [
        "La main gauche ne bouge pas : le doigt 5 sur do, le doigt 4 sur ré, le doigt 3 sur mi, le doigt 2 sur fa et le pouce sur sol.",
        "La main droite se repose pendant que la main gauche joue un accord de septième sur sol. Il te ramène au début.",
        "Au deuxième passage, joue la note grave un peu plus fort que l’accord qui la suit.",
      ],
      tricky: {
        6: "Le doigt 2 joue le ré, puis le pouce s’allonge jusqu’au sol du bas, pendant que la main gauche tient ré et fa.",
        9: "Les mêmes notes qu’à la mesure 6. Garde la main droite immobile, et laisse le pouce descendre.",
        17: "Encore la mesure 6, cette fois dans le deuxième passage. Garde les accords doux sous la mélodie.",
      },
    },
    epic: {
      practice: [
        "Joue la basse d’Alberti seule, jusqu’à ce qu’elle roule toute seule : grave, aigu, milieu, aigu.",
        "Joue les accords brisés du deuxième passage à la main gauche seule.",
        "Joue le Gloria dans l’aigu, mesures 16 à 18, à la main droite seule.",
        "Joue tout le morceau à deux mains, à 75 % de la vitesse.",
        "Maintenant, joue-le au tempo, avec la pédale.",
      ],
      tips: [
        "Joue la basse d’Alberti tout en douceur, pour que la mélodie chante au-dessus.",
        "Lève la main après sol, la et si, et pose le doigt 3 sur le mi une octave plus haut.",
        "Change de pédale chaque fois que la main gauche commence un nouvel accord.",
      ],
      tricky: {
        17: "Le doigt 2 joue le ré du haut, et le pouce s’allonge jusqu’au sol pendant que la main gauche monte.",
        19: "Le Gloria passe maintenant dans l’aigu. Laisse les doigts 5, 4, 3 et 2 rouler du la jusqu’au mi.",
        20: "Le pouce prend le do, puis le doigt 2 arrive sur le ré. Garde bien réguliers les accords brisés en dessous.",
      },
    },
    legendary: {
      practice: [
        "Joue la basse stride seule : saute en bas pour l’octave grave, puis remonte pour l’accord.",
        "Joue seules les octaves de la main droite, et laisse le doigt 5 chanter la mélodie.",
        "Joue la basse en octaves brisées du deuxième passage à la main gauche seule.",
        "Joue tout le morceau à deux mains, à 75 % de la vitesse.",
        "Maintenant, joue-le au tempo et laisse sonner le dernier accord.",
      ],
      tips: [
        "Dans la basse stride, regarde l’octave grave et laisse la main trouver l’accord au toucher.",
        "Après chaque octave, le doigt 5 reste en haut et mène les notes rapides vers le bas.",
        "Le trait rapide jusqu’au sol est une petite fanfare. Joue-le léger et brillant.",
      ],
      tricky: {
        2: "Lève la main après chaque note seule, avant l’octave suivante, pour qu’elle y arrive sans s’étirer.",
        3: "Revoici le début. Garde les octaves bien régulières pendant que la main gauche saute.",
        11: "Quatre notes rapides montent du do au fa, et le doigt 5 arrive sur le sol. En dessous, la basse stride continue.",
      },
    },
  },
};
