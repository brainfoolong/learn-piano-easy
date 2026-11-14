/** The guide of *Piano Concerto No. 21: Andante* in French. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Mozart a achevé ce concerto le 9 mars 1785, quatre semaines après le précédent. " +
    "Son mouvement lent, l’Andante, chante une longue mélodie sur de doux accords répétés. " +
    "Le film « Elvira Madigan » (1967) le fait entendre, et le concerto est aujourd’hui très connu sous ce nom.",
  funFact: "Mozart a terminé ce concerto quatre semaines seulement après son Concerto pour piano n° 20.",
  versions: {
    common: {
      practice: [
        "Joue les mesures 1 à 3 à la main droite seule. Le morceau attend chaque note.",
        "Joue les mesures 4 à 8 à la main droite seule.",
        "Maintenant, la main gauche seule. Elle tient longtemps une note ou une quinte à vide.",
        "Joue à deux mains, lentement.",
        "Joue tout le morceau à deux mains, au tempo.",
      ],
      tips: [
        "Tiens le premier fa pendant sept temps. Le do court arrive juste avant la note longue suivante.",
        "Le doigt 4 tient le do aigu. Puis les doigts 5, 4, 3 et 2 jouent quatre notes rapides.",
        "Joue doux et lié, comme si tu fredonnais une berceuse.",
      ],
      tricky: {
        1: "Relâche le do court un peu plus tôt. Puis monte jusqu’au la avec le doigt 5.",
        4: "Après le silence, le pouce droit arrive sur le do. Au milieu de la mesure, la main gauche descend au sol.",
        5: "Le doigt 3 monte du sol au si bémol. Puis les doigts 5, 4 et 3 jouent ré, do et si bémol.",
      },
    },
    rare: {
      practice: [
        "Joue les six premières mesures à la main droite seule. Le morceau attend chaque note.",
        "Joue la main gauche seule. Une note grave vient d’abord, puis l’accord répond trois fois.",
        "Joue les mesures 1 à 6 à deux mains, lentement.",
        "Joue la fin à partir de la mesure 13, où la main gauche trouve deux nouveaux accords.",
        "Joue tout le morceau à deux mains, au tempo.",
      ],
      tips: [
        "Joue les accords tout en douceur, pour que la mélodie chante au-dessus comme une voix.",
        "Le fa dièse tire vers le sol. Donne quatre temps à chacun, puis respecte le silence.",
        "Lève la main gauche un instant avant chaque nouvel accord. Elle arrive alors à sa nouvelle place.",
      ],
      tricky: {
        5: "Le doigt 3 monte du sol au si bémol. Puis les doigts 5, 4 et 3 jouent ré, do et si bémol.",
        14: "La main gauche va sur le si bémol avec le doigt 5. Ré et fa sont au-dessus.",
        15: "La main gauche revient au do avec le doigt 2. Profite du court silence juste avant.",
      },
    },
    epic: {
      practice: [
        "Joue la main gauche seule. Chaque accord se déroule vers le haut par groupes de trois : grave, milieu, aigu.",
        "Joue les mesures 7 à 12 à la main droite seule. Là, des sixtes et des tierces rejoignent la mélodie.",
        "Joue les six premières mesures à deux mains, lentement.",
        "Joue tout le morceau à deux mains, à 75 % de la vitesse.",
        "Maintenant, joue-le au tempo, avec la pédale.",
      ],
      tips: [
        "À la main gauche, compte trois notes égales par temps. Elles doivent onduler tout en douceur.",
        "La mélodie est la note du haut de chaque paire : laisse le doigt du haut mener.",
        "Change de pédale sur chaque barre de mesure, au moment où sonne la nouvelle note de basse.",
      ],
      tricky: {
        5: "Le doigt 3 monte du sol au si bémol. En dessous, la main gauche continue de dérouler do, mi et si bémol.",
        7: "Le pouce sur le la, sous le fa. Puis le pouce monte au do, et les doigts 2 et 5 prennent fa et la.",
        9: "Après le fa dièse, le pouce glisse jusqu’au mi, et le doigt 2 joue le sol avec lui.",
      },
    },
    legendary: {
      practice: [
        "Joue les mesures 1 à 6 à la main gauche seule. Saute en bas pour l’octave grave, puis remonte pour les accords.",
        "Joue seuls les longs arpèges de la main gauche, aux mesures 7 à 12.",
        "Joue la main droite seule à partir de la mesure 7, où la mélodie monte d’une octave.",
        "Joue tout le morceau à deux mains, à 75 % de la vitesse.",
        "Maintenant, joue-le au tempo et laisse sonner le dernier accord.",
      ],
      tips: [
        "Lève la main gauche après chaque octave grave. Le court silence te laisse le temps d’atteindre l’accord.",
        "Dans chaque arpège, le pouce passe dessous en descendant, et le doigt 3 passe par-dessus en montant.",
        "Ouvre la main droite sur le dernier accord, et laisse-le sonner avec la pédale.",
      ],
      tricky: {
        2: "Le doigt 4 tient le do aigu au-dessus de la basse pincée. Puis les doigts 5, 4, 3 et 2 jouent quatre notes rapides.",
        5: "Le doigt 3 monte du sol au si bémol, pendant que la main gauche continue de pincer son do grave.",
        6: "Joue le sol dièse avec le doigt 2 et le la avec le doigt 4. La main gauche saute jusqu’à l’octave de fa grave.",
      },
    },
  },
};
