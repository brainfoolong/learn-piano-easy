/** The guide of *The Blue Danube* in French. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Johann Strauss II a écrit cette valse en 1866 et 1867 pour un chœur d’hommes de Vienne. " +
    "Sa version pour orchestre seul a connu un grand succès à l’Exposition universelle de Paris, en 1867. " +
    "Dans le film « 2001, l’Odyssée de l’espace » (1968), des vaisseaux spatiaux s’arriment au son de sa musique.",
  funFact:
    "Par tradition, l’Orchestre philharmonique de Vienne la joue chaque année vers la fin de son concert du Nouvel An.",
  versions: {
    common: {
      practice: [
        "Joue les trois premières mesures à la main droite seule. Le morceau attend chaque note.",
        "Travaille les sauts d’octave : le pouce sur la note grave, puis lève la main pendant le court silence " +
          "et arrive avec le doigt 5 une octave plus haut.",
        "Maintenant, la main gauche seule. Elle tient une quinte à vide ou une note de basse pour chaque groupe de trois temps.",
        "Joue les huit premières mesures à deux mains.",
        "Joue tout le morceau à deux mains, au tempo.",
      ],
      tips: [
        "Commence avec le pouce sur le do central. Le do, le mi et le sol qui montent se jouent avec les doigts 1, 2 et 3.",
        "Sur le sol répété, passe du doigt 3 au pouce, pour que le doigt 5 atteigne le sol aigu.",
        "Marque le premier temps de chaque groupe de trois, et joue les deux autres légèrement. C’est ça, la valse.",
      ],
      tricky: {
        6: "Pose le pouce sur le la, puis lève la main pendant le court silence et arrive avec le doigt 5 sur le la au-dessus.",
        12: "Ici, la mélodie atteint le do aigu. À la main gauche, le doigt 2 tient le do seul, pour que le doigt 5 puisse prendre le fa grave.",
        13: "Lève le doigt 4 du la aigu, et arrive avec le pouce sur le la une octave plus bas. La main gauche monte au ré et au la.",
      },
    },
    rare: {
      practice: [
        "Joue les huit premières mesures à la main droite seule, lentement.",
        "Joue la main gauche seule : une note de basse, puis l’accord deux fois. " +
          "Pendant les silences de la main droite, elle monte dans les notes graves.",
        "Joue les quatre premières mesures à deux mains, lentement. La mélodie y passe de la main droite à la main gauche, puis revient.",
        "Joue tout le morceau à deux mains, un peu plus lentement que le tempo écrit.",
        "Maintenant, joue-le au tempo.",
      ],
      tips: [
        "Compte « un, deux, trois » dans chaque moitié de mesure. La basse tombe sur chaque « un ».",
        "La main droite se repose pendant que la gauche monte. Puis le pouce arrive sur le ré, " +
          "et le doigt 5 atteint le ré une octave plus haut.",
        "Le sol dièse est une touche noire. Prends-le avec le pouce, puis le doigt 2 joue le la.",
      ],
      tricky: {
        12: "La main droite couvre l’octave, du ré au ré aigu. La main gauche descend sur le si pour l’accord sur sol.",
        15: "Lève la main après le la, et arrive avec le doigt 5 sur le fa dièse aigu. La main gauche saute en bas sur le la.",
        16: "Le pouce joue le fa dièse, puis descend sur le mi. La main gauche saute de nouveau en bas sur le la.",
      },
    },
    epic: {
      practice: [
        "Joue la basse de valse seule : la note grave, puis l’accord deux fois, léger et court.",
        "Joue seules les tierces et les sixtes de la main droite. Enfonce ensemble les deux notes de chaque paire.",
        "Joue les mesures 1 à 9 à deux mains, lentement.",
        "Joue tout le morceau à deux mains, à 75 % de la vitesse.",
        "Maintenant, joue-le au tempo, avec la pédale.",
      ],
      tips: [
        "Joue les accords doux et courts, pour que la mélodie flotte au-dessus.",
        "Change de pédale à chaque barre de mesure, au moment où sonne la nouvelle note de basse.",
        "La main se lève après le la, puis le pouce arrive sur le ré juste au-dessus.",
      ],
      tricky: {
        21: "Lève la paire de notes un peu en avance, puis laisse tomber le pouce sur le ré grave.",
        26: "Monte mi, sol et si avec les doigts 1, 2 et 4. Puis le pouce et le doigt 3 tiennent le sol et le si.",
        34: "Ouvre la main pour le dernier accord : le pouce sur le fa dièse, le doigt 2 sur le la et le doigt 5 sur le ré.",
      },
    },
    legendary: {
      practice: [
        "Joue la basse en octaves seule : saute en bas pour l’octave, puis remonte pour l’accord.",
        "Joue seules les octaves de la main droite. Garde la main ouverte, le pouce et le doigt 5 prêts.",
        "Joue les mesures 18 à 25 à deux mains. La mélodie y atteint ses notes les plus aiguës.",
        "Joue tout le morceau à deux mains, à 75 % de la vitesse.",
        "Maintenant, joue-le au tempo et laisse sonner le dernier accord.",
      ],
      tips: [
        "Dans la basse en octaves, regarde la note grave et laisse la main trouver l’accord au toucher.",
        "Le pouce et le doigt 5 prennent chaque octave. Garde cette position de la main pendant qu’elle se déplace.",
        "Fais chanter la note du haut de chaque octave, et allège le pouce.",
      ],
      tricky: {
        8: "L’octave descend d’un pas, du la au sol. Garde la position de la main, et déplace-la d’un seul bloc.",
        24: "Lève l’octave de ré un peu en avance, puis arrive sur l’octave de si dans la même position.",
        29: "La main s’ouvre, du la jusqu’à l’octave de fa dièse. Lève-la, puis arrive sur les deux notes ensemble.",
      },
    },
  },
};
