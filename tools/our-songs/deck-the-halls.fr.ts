/** The guide of *Deck the Halls* in French. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Deck the Halls se chante sur Nos Galan, un vieil air gallois de la Saint-Sylvestre. " +
    "L’air a été imprimé pour la première fois en 1794, et Joseph Haydn l’a arrangé plus tard. " +
    "Thomas Oliphant a écrit les paroles anglaises de Noël en 1862. C’est sur elles qu’on chante l’air aujourd’hui.",
  funFact:
    "Les paroles d’Oliphant commençaient par Deck the hall, pour une seule salle. " +
    "Des recueils plus tardifs l’ont mis au pluriel, comme on le chante aujourd’hui.",
  versions: {
    common: {
      practice: [
        "Joue la main droite seule, lentement. Le morceau attend chaque note.",
        "Joue les mesures 9 à 12 à la main droite seule. Ici, la mélodie monte jusqu’au do aigu.",
        "Joue à deux mains. La main gauche tient chaque note grave une demi-mesure ou plus.",
        "Joue tout le morceau à deux mains, au tempo.",
      ],
      tips: [
        "Long, court : le premier sol est long, et le fa, court, arrive juste après.",
        "Les mesures 13 et 14 reprennent le début. La main les connaît déjà.",
        "Ralentis un peu sur les dernières notes, et laisse sonner le do grave.",
      ],
      tricky: {
        3: "Les doigts 3, 4 et 5 montent ré, mi et fa, puis le doigt 3 redescend sur le ré.",
        9: "Le doigt 5 joue le fa, puis le pouce descend chercher le ré. La main ne bouge pas.",
        11: "Le pouce glisse du ré au mi. Puis les doigts 2 à 5 montent sol, la, si et le do aigu.",
      },
    },
    rare: {
      practice: [
        "Joue la main droite seule, lentement. Le morceau attend chaque note.",
        "Joue la main gauche seule : une note grave, puis un accord, dans chaque mesure.",
        "Joue les mesures 17 à 24 à la main droite seule. Ici, la mélodie monte jusqu’au do aigu.",
        "Joue tout le morceau à deux mains, un peu plus lentement que le tempo écrit.",
        "Maintenant, joue-le au tempo.",
      ],
      tips: [
        "Le fa dièse est la touche noire entre fa et sol. Il pousse la mélodie vers le do aigu.",
        "Joue la note grave de la main gauche un peu plus fort que l’accord qui la suit.",
        "Quatre la rapides : joue-les bien réguliers, comme quatre pas sur la même marche.",
      ],
      tricky: {
        21: "Le pouce monte du ré au mi, et le doigt 2 prend le fa dièse, sur la touche noire.",
        22: "Après le sol, le doigt 3 glisse d’une touche vers le la. Les doigts 4 et 5 atteignent ainsi si et do.",
        32: "Le pouce redescend du ré au dernier do, pendant que la main gauche joue son accord complet.",
      },
    },
    epic: {
      practice: [
        "Joue la basse d’Alberti seule, jusqu’à ce qu’elle roule toute seule : grave, aigu, milieu, aigu.",
        "Joue seules les tierces de la main droite, et garde ensemble les deux notes de chaque paire.",
        "Joue les quatre premières mesures à deux mains, lentement.",
        "Joue tout le morceau à deux mains, à 75 % de la vitesse.",
        "Maintenant, joue-le au tempo, avec la pédale.",
      ],
      tips: [
        "Joue la basse d’Alberti tout en douceur, pour que la mélodie chante au-dessus.",
        "La mélodie est la note du haut de chaque paire : laisse le doigt du haut mener.",
        "Change de pédale au milieu de chaque mesure, quand la main gauche commence un nouvel accord.",
      ],
      tricky: {
        11: "Après le sol, le pouce passe sous le doigt 3 pour aller au la. Les doigts 2 et 3 finissent alors sur si et do.",
        12: "Depuis le la, le pouce descend au ré, pendant que le doigt 4 arrive sur le sol au-dessus.",
        16: "Le pouce descend chercher le sol du dernier accord, et la main gauche descend sur une octave grave.",
      },
    },
    legendary: {
      practice: [
        "Joue la basse stride seule : saute en bas pour l’octave grave, puis remonte pour l’accord.",
        "Joue les mesures 1 à 4 à la main droite seule, et garde légères les petites notes rapides.",
        "Joue le trait des mesures 11 et 12 à la main droite seule.",
        "Joue tout le morceau à deux mains, à 75 % de la vitesse.",
        "Maintenant, joue-le au tempo et laisse sonner le dernier accord.",
      ],
      tips: [
        "Dans la basse stride, regarde l’octave grave et laisse la main trouver l’accord au toucher.",
        "Joue les petites notes rapides plus doux que la mélodie, comme un petit écho.",
        "Lève la main après le dernier ré, puis arrive sur le grand accord avec les deux mains.",
      ],
      tricky: {
        4: "Le doigt 2 glisse du ré au do, et le pouce passe dessous pour le si. La main gauche saute vers le sol grave.",
        5: "Les petites notes rapides de la mesure 4 filent droit vers le sol aigu. Garde le doigt 5 prêt.",
        8: "Le doigt 2 glisse de nouveau vers le do, pendant que la main gauche saute vers l’octave de sol grave.",
      },
    },
  },
};
