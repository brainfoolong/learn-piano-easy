/** The guide of *Boléro* in French. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Ravel a écrit le « Boléro » pour orchestre en 1928, et Durand l’a publié pour la première fois en 1929. " +
    "Deux mélodies alternent sur un seul rythme de caisse claire, qui grandit du doux au fort. " +
    "En 1979, le film « Elle » lui a fait une large place, et ses ventes se sont envolées.",
  funFact:
    "Ravel a d’abord joué la mélodie d’un seul doigt à son ami Gustave Samazeuilh. Il lui a demandé si elle avait quelque chose d’insistant.",
  versions: {
    common: {
      practice: [
        "Joue les quatre premières mesures à la main droite seule. Le morceau attend chaque note.",
        "Joue les mesures 5 à 8 à la main droite seule. La mélodie descend lentement jusqu’au do.",
        "Maintenant, la main gauche seule. Elle tient une note ou une quinte pendant toute une mesure.",
        "Joue les huit premières mesures à deux mains, lentement.",
        "Joue tout le morceau à deux mains, au tempo.",
      ],
      tips: [
        "Joue doux et régulier, comme une flûte au loin. La mélodie doit à peine changer de volume.",
        "Prends le long do avec le doigt 5. Le doigt 2 peut alors descendre jusqu’au mi sans que la main bouge.",
        "Rejoue mi avec le doigt 3 au début de la mesure 6. Le pouce est alors prêt pour le do.",
      ],
      tricky: {
        2: "Le doigt 2 joue la, puis le doigt 5 prend le long do. Les doigts 4 et 5 jouent ensuite si et do.",
        9: "Profite du court silence pour descendre la main gauche sur fa et do. La main droite commence sur fa avec le doigt 4.",
        12: "Fais descendre le pouce droit du ré au do. Après son silence, la main gauche arrive sur do et sol.",
      },
    },
    rare: {
      practice: [
        "Joue la main gauche seule : la fondamentale, la quinte, puis les deux, une sur chaque temps.",
        "Joue les mesures 5 et 6 à la main droite seule. Le pouce descend deux fois d’une touche.",
        "Joue les huit premières mesures à deux mains, lentement.",
        "Joue tout le morceau à deux mains, un peu plus lentement que le tempo écrit.",
        "Maintenant, joue-le au tempo.",
      ],
      tips: [
        "Compte trois temps lents par mesure. La main gauche joue une fois sur chaque temps, comme un tambour discret.",
        "Après mi, le pouce descend sur ré. À la mesure suivante, il descend encore jusqu’au do.",
        "Enfonce do et mi ensemble, et laisse-les sonner jusqu’à la fin.",
      ],
      tricky: {
        5: "Après le long sol, les doigts 4 et 5 montent jusqu’au si. À la fin, le pouce joue mi, puis descend sur ré.",
        6: "Le doigt 2 joue mi, et le pouce joue ré. Puis le pouce descend sur do et y reste.",
        9: "Profite du court silence pour descendre la main gauche sur fa. La main droite commence sur fa avec le doigt 4.",
      },
    },
    epic: {
      practice: [
        "Joue la main gauche seule. D’abord une note longue, puis trois notes rapides, comme une caisse claire.",
        "Joue les mesures 9 à 16 à la main droite seule. Passe le pouce dessous dans les traits.",
        "Joue les huit premières mesures à deux mains, lentement.",
        "Joue tout le morceau à deux mains, à 75 % de la vitesse.",
        "Maintenant, joue-le au tempo, avec la pédale dans les mesures 9 à 16.",
      ],
      tips: [
        "Les trois notes rapides tiennent dans le temps de deux notes de la mélodie. Garde-les légères et égales.",
        "Passe le pouce dessous jusqu’au fa, puis monte avec les doigts 2 à 5 jusqu’au do.",
        "La mélodie revient plus pleine. Laisse sa note du haut chanter au-dessus des notes plus basses.",
      ],
      tricky: {
        6: "Le pouce descend du ré au do, pendant que la main gauche garde le rythme du tambour.",
        9: "La main gauche commence la basse d’Alberti sur fa. Joue ensemble le fa et le la de la main droite, avec le pouce et le doigt 3.",
        17: "Joue mi et do ensemble avec le pouce et le doigt 4. La main gauche reprend le rythme du tambour.",
      },
    },
    legendary: {
      practice: [
        "Joue les deux premières mesures à la main gauche seule. Pose chaque octave avec fermeté, puis joue les notes rapides avec légèreté.",
        "Joue le trait des mesures 11 et 12 à la main droite seule, très lentement.",
        "Joue seules les octaves de la main droite, mesures 17 à 24. Garde la main ouverte, le pouce et l’auriculaire prêts.",
        "Joue tout le morceau à deux mains, à 75 % de la vitesse.",
        "Maintenant, joue-le au tempo, de plus en plus fort jusqu’au dernier accord.",
      ],
      tips: [
        "Dans la basse stride, profite de chaque court silence pour sauter entre l’octave grave et l’accord.",
        "Le pouce passe dessous jusqu’au ré, et le doigt 3 repasse par-dessus jusqu’au do. Garde le poignet à plat.",
        "Commence les octaves tout en douceur, puis joue de plus en plus fort, comme tout l’orchestre dans l’œuvre.",
      ],
      tricky: {
        9: "La main gauche saute de l’octave de fa grave jusqu’à l’accord. Profite de chaque court silence pour sauter.",
        15: "Passe le pouce dessous jusqu’au sol et monte jusqu’au ré. La main gauche saute entre sol et son accord.",
        17: "Les octaves commencent. Ouvre la main, le pouce sur do et l’auriculaire sur le do du dessus.",
      },
    },
  },
};
