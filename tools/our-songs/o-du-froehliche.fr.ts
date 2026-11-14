/** The guide of *O du fröhliche* in French. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "O du fröhliche signifie « Ô toi, joyeuse ». C’est l’un des chants de Noël allemands les plus connus. " +
    "Johannes Daniel Falk, de Weimar, a écrit son premier couplet pour les enfants délaissés qu’il avait recueillis chez lui. " +
    "Falk l’a posé sur O sanctissima, un chant à la Vierge Marie imprimé pour la première fois à Londres en 1792.",
  funFact:
    "Au départ, Falk l’a écrit pour les trois grandes fêtes chrétiennes, avec un couplet pour Noël, un pour Pâques et un pour la Pentecôte.",
  versions: {
    common: {
      practice: [
        "Joue les huit premières mesures à la main droite seule. Le morceau attend chaque note.",
        "Joue les mesures 9 à 16 à la main droite seule. La mélodie y monte pas à pas.",
        "Maintenant, la main gauche seule. Elle tient une quinte, ou un fa tout seul.",
        "Joue tout le morceau à deux mains, lentement.",
        "Joue tout le morceau à deux mains, au tempo.",
      ],
      tips: [
        "Long, court : tiens le sol, puis laisse le fa rapide tomber sur le mi.",
        "Joue le deuxième sol avec le doigt 2 au lieu du doigt 3. La main est alors prête à monter jusqu’au do.",
        "Lève le pouce du fa un peu en avance, et pose le doigt 3 sur le mi juste en dessous.",
      ],
      tricky: {
        7: "Les doigts 4 et 3 redescendent du si au la. Garde la main immobile au-dessus de ses cinq touches.",
        12: "Le doigt 4 joue le sol, le doigt 5 le la rapide, puis le doigt 2 prend le sol, prêt pour le do aigu.",
        15: "Après le fa court, le doigt 3 arrive sur le mi et le doigt 2 sur le ré.",
      },
    },
    rare: {
      practice: [
        "Joue la main gauche seule, et enfonce ensemble les notes de chaque accord.",
        "Joue tout le morceau à la main droite seule.",
        "Joue les huit premières mesures à deux mains, lentement.",
        "Joue tout le morceau à deux mains, un peu plus lentement que le tempo écrit.",
        "Maintenant, joue-le au tempo.",
      ],
      tips: [
        "La main gauche bouge à peine. Le doigt 5 sur le do et le doigt 4 sur le ré alternent, et le pouce reste sur le sol.",
        "Ici, la phrase se pose sur le sol. Laisse les deux notes sonner toute la mesure.",
        "La mélodie descend deux fois depuis le do. Joue la deuxième fois un peu plus fort.",
      ],
      tricky: {
        6: "La main droite monte la, si et do avec les doigts 3, 4 et 5, pendant que la main gauche passe de l’accord sur fa à l’accord sur sol.",
        12: "Le doigt 4 joue le sol, le doigt 5 le la rapide, puis le doigt 2 prend le sol, prêt pour le do aigu.",
        15: "Après le fa court, le doigt 3 arrive sur le mi et le doigt 2 sur le ré.",
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
        "Change de pédale à chaque demi-mesure, quand la nouvelle note de basse sonne.",
        "La mélodie est la note du haut de chaque paire : laisse le doigt du haut mener.",
      ],
      tricky: {
        17: "La main saute d’une octave vers le haut. Pose les doigts 3 et 5 sur mi et sol, puis ouvre la main sur la sixte do et la.",
        22: "Les doigts 2 et 4 prennent fa et la, la main s’ouvre sur la sixte ré et si, et le doigt 5 va chercher le do.",
        32: "Lève la main pendant le court silence, puis ouvre-la sur mi, sol et do pour le dernier accord.",
      },
    },
    legendary: {
      practice: [
        "Joue la basse stride seule : saute en bas pour l’octave, puis remonte pour l’accord.",
        "Joue seuls les accords de la main droite, et laisse le doigt du haut chanter la mélodie.",
        "Joue les arpèges du deuxième couplet à la main gauche seule.",
        "Joue tout le morceau à deux mains, à 75 % de la vitesse.",
        "Maintenant, joue-le au tempo et laisse sonner le dernier accord.",
      ],
      tips: [
        "Dans la basse stride, regarde l’octave et laisse la main trouver l’accord au toucher.",
        "Les octaves doivent sonner comme des cloches d’église. Garde le poignet souple.",
        "Dans chaque arpège, le doigt 3 passe par-dessus le pouce en montant.",
      ],
      tricky: {
        6: "La main monte de l’accord de fa majeur à l’accord de sol majeur, et l’auriculaire monte du si au do aigu.",
        8: "La main se pose sur l’accord de sol majeur. Le pouce descend sur le si, et l’auriculaire descend du la au sol.",
        14: "Quitte le la un peu en avance, pour que la main ait le temps de descendre sur l’accord de sol majeur.",
      },
    },
  },
};
