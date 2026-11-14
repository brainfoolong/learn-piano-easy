/** The guide of *Happy Birthday to You* in French. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Mildred J. Hill a écrit cet air pour Good Morning to All, une chanson qui saluait les enfants des classes de maternelle. " +
    "Elle l’a publiée en 1893 dans Song Stories for the Kindergarten, un recueil fait avec sa sœur Patty. " +
    "La version d’anniversaire chantée aujourd’hui ajoute deux notes à la troisième phrase, avec un saut d’une octave.",
  funFact:
    "En 2015, un tribunal américain a jugé que la société qui faisait payer la chanson d’anniversaire n’avait aucun droit d’auteur valable sur ses paroles.",
  versions: {
    common: {
      practice: [
        "Joue la main droite seule, lentement. Le morceau attend chaque note.",
        "Joue les mesures 5 à 9 à la main droite seule. C’est là que la mélodie saute dans l’aigu.",
        "Joue à deux mains. La main gauche tient seulement une quinte ou une seule note.",
        "Joue tout le morceau à deux mains, au tempo.",
      ],
      tips: [
        "Des deux sol du début, le premier est long et le second court. Le court mène à la mesure suivante.",
        "Le pouce est posé sur le sol, et chaque doigt garde sa propre touche jusqu’au ré.",
        "Lève la main après le deuxième sol, et arrive sur le sol aigu avec l’auriculaire.",
      ],
      tricky: {
        2: "Le doigt 2 joue le la, le pouce revient sur le sol, et le doigt 4 va chercher le do.",
        6: "Arrive sur le sol aigu avec l’auriculaire, puis descends sur mi et do avec les doigts 4 et 2.",
        7: "Le pouce joue le si, puis glisse sur le la. Lève la main avant les deux fa.",
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
        "L’auriculaire va chercher une octave entière au-dessus du pouce. La main s’ouvre, puis se referme.",
        "Après le long do, monte le pouce sur le sol. Le deuxième couplet commence une octave plus haut.",
        "Dans la basse de valse, joue la note grave un peu plus fort que les accords qui la suivent.",
      ],
      tricky: {
        7: "Le pouce joue le si, puis glisse sur le la, et le doigt 4 monte chercher le fa.",
        9: "Tiens le do, puis monte le pouce jusqu’au sol suivant pour le deuxième couplet.",
        15: "Le pouce glisse encore du si au la, cette fois une octave plus haut.",
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
        "Dans la basse de valse, chaque note est détachée. La pédale les relie, alors change-la au début de chaque mesure.",
      ],
      tricky: {
        12: "Les paires descendent pas à pas, puis les doigts 3 et 5 sautent jusqu’au si et au ré.",
        15: "Après les deux paires graves, monte avec les doigts 3 et 5 chercher le ré et le fa aigus.",
        17: "Laisse tomber la main sur le dernier accord : le pouce sur le mi, le doigt 2 sur le sol et l’auriculaire sur le do.",
      },
    },
    legendary: {
      practice: [
        "Joue la basse stride seule : saute en bas pour l’octave, puis remonte pour l’accord.",
        "Joue seuls les accords de la main droite, et laisse le doigt du haut chanter la mélodie.",
        "Joue seuls les arpèges de la main gauche dans le deuxième couplet.",
        "Joue tout le morceau à deux mains, à 75 % de la vitesse.",
        "Maintenant, joue-le au tempo et laisse sonner le dernier accord.",
      ],
      tips: [
        "Dans la basse stride, regarde l’octave et laisse la main trouver l’accord au toucher.",
        "Joue les octaves un peu détachées, comme des cloches, et laisse la pédale les relier.",
        "Dans chaque arpège, le doigt 3 passe par-dessus le pouce en montant.",
      ],
      tricky: {
        7: "Lève la main après le la, pour qu’elle puisse s’ouvrir sur l’accord avec le fa en haut.",
        10: "Les octaves commencent pendant que la main gauche déroule son premier arpège. Travaille d’abord chaque main seule.",
        15: "Garde la position d’octave pendant que la main saute jusqu’au fa, et laisse la basse rouler en dessous.",
      },
    },
  },
};
