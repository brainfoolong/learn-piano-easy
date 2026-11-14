/** The guide of *God Rest Ye Merry, Gentlemen* in French. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "God Rest Ye Merry, Gentlemen est l’un des plus anciens chants de Noël anglais qu’on chante encore. " +
    "Dès 1760 environ, ses paroles se vendaient à Londres sur des feuilles imprimées bon marché. " +
    "William Sandys a imprimé la mélodie en 1833, dans son livre de chants de Noël. " +
    "Autrefois, son premier vers voulait dire : que Dieu accorde paix et bonheur.",
  funFact:
    "Dans « Un chant de Noël » de Charles Dickens, un garçon le chante par le trou de la serrure de Scrooge. Scrooge le chasse avec une règle.",
  versions: {
    common: {
      practice: [
        "Joue les cinq premières mesures à la main droite seule. Le morceau attend chaque note.",
        "Joue les mesures 10 à 14 à la main droite seule, là où la mélodie monte jusqu’au la aigu.",
        "Maintenant, la main gauche seule. Elle tient à chaque fois une seule note grave ou une quinte à vide.",
        "Joue tout le morceau à deux mains, lentement.",
        "Joue tout le morceau à deux mains, au tempo.",
      ],
      tips: [
        "Le pouce commence sur le la sous le do central, et l’auriculaire repose sur le mi.",
        "Lève la main un instant après le la, et laisse le pouce tomber sur le sol juste en dessous.",
        "Voici le refrain. Fais-le sonner un peu plus fort que le couplet.",
      ],
      tricky: {
        3: "Les doigts 3, 2 et 1 descendent jusqu’au la. Lève la main, et le pouce tombe sur le sol.",
        11: "Les doigts 4 et 5 montent jusqu’au la aigu. Lève la main, et l’auriculaire arrive sur le mi en dessous.",
        19: "Les doigts 3, 2 et 1 descendent jusqu’au do. Lève la main, et le doigt 2 arrive sur le si.",
      },
    },
    rare: {
      practice: [
        "Joue la main gauche seule : une note grave, puis les notes au-dessus, deux fois par mesure.",
        "Joue les mesures 2 à 5 à la main droite seule. La main se déplace deux fois en chemin.",
        "Joue les mesures 7 et 8 à la main droite seule, là où une note répétée aide la main à se déplacer.",
        "Joue tout le morceau à deux mains, un peu plus lentement que le tempo écrit.",
        "Maintenant, joue-le au tempo.",
      ],
      tips: [
        "Le doigt 4 glisse du ré au do. À la mesure suivante, le pouce glisse du sol au la.",
        "Change de doigt sur le second des deux la rapides, puis des deux ré rapides. La main se déplace alors sans sauter.",
        "Do et si se partagent un temps. Compte « un-et », et joue-les comme deux petits pas rapides et égaux.",
      ],
      tricky: {
        11: "Les doigts 4 et 5 montent jusqu’au la aigu. Puis l’auriculaire redescend d’un saut sur le mi, et le doigt 4 prend le ré.",
        18: "Le doigt 2 glisse du ré au mi. Puis chaque doigt prend la touche suivante, jusqu’au la aigu.",
        19: "L’auriculaire saute du la aigu jusqu’au mi. Puis la main descend jusqu’au si.",
      },
    },
    epic: {
      practice: [
        "Joue la main gauche seule, jusqu’à ce que les accords brisés roulent tout seuls : grave, aigu, milieu, aigu.",
        "Joue les mesures 3 et 4 à la main droite seule, là où les doigts se croisent dans les deux sens.",
        "Joue les neuf premières mesures à deux mains, lentement.",
        "Joue tout le morceau à deux mains, à 75 % de la vitesse.",
        "Maintenant, joue-le au tempo.",
      ],
      tips: [
        "Joue les accords brisés tout en douceur, pour que la mélodie chante au-dessus.",
        "En descendant, le doigt 3 passe par-dessus le pouce sur le si. En montant, le pouce passe dessous sur le do.",
        "Le pouce passe dessous pour le mi, et la main monte jusqu’au la aigu.",
      ],
      tricky: {
        12: "Le doigt 2 passe par-dessus le pouce sur le do. À la fin de la mesure, le pouce passe dessous pour le do.",
        18: "Le pouce passe dessous sur le mi. Les doigts 2 et 3 montent, et l’auriculaire atteint le la aigu.",
        19: "Le doigt 3 descend sur le mi, puis jusqu’au do. Ensuite, le doigt 2 passe par-dessus le pouce sur le si.",
      },
    },
    legendary: {
      practice: [
        "Joue la basse stride seule : saute en bas pour l’octave grave, puis remonte pour l’accord.",
        "Joue les mesures 4 à 6 à la main droite seule, et garde le gruppetto léger.",
        "Joue les neuf premières mesures à deux mains, à 50 % de la vitesse.",
        "Joue tout le morceau à deux mains, à 75 % de la vitesse.",
        "Maintenant, joue-le au tempo et laisse sonner le dernier accord.",
      ],
      tips: [
        "En basse stride, regarde l’octave grave et laisse la main trouver l’accord au toucher.",
        "Le gruppetto autour du mi est un ornement. Joue-le plus doux que la mélodie.",
        "Lève la main après le si, puis pose les deux mains ensemble sur le dernier accord.",
      ],
      tricky: {
        9: "Un trait rapide part du sol aigu. Les doigts 5, 4, 3 et le pouce descendent en courant, puis le doigt 2 prend le mi.",
        15: "Passe à l’auriculaire sur le mi répété, et descends d’un doigt par touche. La main gauche saute jusqu’au mi grave.",
        19: "Le doigt 2 passe par-dessus le pouce pour le si. Joue-le court, et descends la main pour le dernier accord.",
      },
    },
  },
};
