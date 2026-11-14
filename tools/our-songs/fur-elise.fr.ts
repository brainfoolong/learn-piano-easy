/** The guide of *Für Elise* in French. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Beethoven a écrit ce court morceau pour piano en 1810, et son manuscrit le dédie à Élise. " +
    "Personne ne sait avec certitude qui était Élise. " +
    "Ludwig Nohl a trouvé le morceau et l’a publié en 1867, quarante ans après la mort de Beethoven.",
  funFact:
    "Selon une théorie, Nohl aurait mal lu le nom. Le morceau aurait en fait été écrit pour Thérèse Malfatti, que Beethoven espérait épouser.",
  versions: {
    common: {
      practice: [
        "Joue les quatre premières mesures à la main droite seule. Le morceau attend chaque note.",
        "Joue la main droite seule à partir de la mesure 5, où la main descend jusqu’au do central.",
        "Maintenant, la main gauche seule. Elle garde deux positions, une par mesure.",
        "Joue les huit premières mesures à deux mains.",
        "Joue tout le morceau à deux mains, au tempo.",
      ],
      tips: [
        "Alterne entre les doigts 5 et 4 pour le mi et le ré dièse, comme une douce balançoire.",
        "Ici, la main gauche attend. Joue la mélodie doux, comme si tu confiais un secret.",
        "Lève la main pendant le silence après le la, et pose le pouce sur le do central.",
      ],
      tricky: {
        5: "Après le silence, le pouce arrive sur le do central. Regarde le clavier avant de le jouer.",
        7: "Le pouce prend la touche noire sol dièse, pour que la main puisse monter jusqu’au do.",
        13: "La main redescend jusqu’au do central. Profite du silence de la mesure 12 pour y arriver.",
      },
    },
    rare: {
      practice: [
        "Joue les huit premières mesures à la main droite seule, lentement.",
        "Joue la main gauche seule. Chaque accord monte depuis la basse, une note par temps.",
        "Joue les mesures 4 à 8 à deux mains, là où elles jouent chacune à leur tour.",
        "Joue tout le morceau à deux mains, un peu plus lentement que le tempo écrit.",
        "Maintenant, joue-le au tempo.",
      ],
      tips: [
        "La main gauche monte, puis la main droite continue de monter. Cela doit sonner comme une seule main.",
        "Le pouce sur le mi, l’auriculaire sur le mi aigu. Ouvre la main sur toute l’octave.",
        "Le sol dièse à la basse rend l’accord lumineux. Il ramène l’oreille chez elle, vers le la.",
      ],
      tricky: {
        5: "Profite du silence après le la pour descendre le pouce droit jusqu’au do central.",
        6: "La main gauche s’ouvre grand : le doigt 2 joue le si, et le pouce monte jusqu’au sol dièse.",
        14: "Le même écart qu’à la mesure 6 : le doigt 2 joue le si, et le pouce gauche monte jusqu’au sol dièse.",
      },
    },
    epic: {
      practice: [
        "Joue la basse d’Alberti seule, jusqu’à ce qu’elle roule toute seule : grave, aigu, milieu, aigu.",
        "Joue seules les tierces de la main droite, et enfonce les deux notes de chaque paire d’un seul geste.",
        "Joue les mesures 4 à 8 à deux mains, lentement.",
        "Joue tout le morceau à deux mains, à 75 % de la vitesse.",
        "Maintenant, joue-le au tempo, avec la pédale.",
      ],
      tips: [
        "Joue la basse d’Alberti tout en douceur, pour que la mélodie chante au-dessus.",
        "Change de pédale à chaque barre de mesure. Relève-la au moment où sonne la nouvelle note de basse.",
        "La mélodie est la note du haut de chaque tierce : laisse le doigt du haut mener.",
      ],
      tricky: {
        20: "Lève la main après les tierces, puis pose le pouce sur le do central et l’auriculaire sur le la.",
        28: "Le même saut qu’à la mesure 20 : le pouce sur le do central et l’auriculaire sur le la, ensemble.",
        32: "Ouvre la main pour le dernier accord : le pouce sur do, le doigt 2 sur mi et le doigt 4 sur la.",
      },
    },
    legendary: {
      practice: [
        "Joue la basse stride seule : saute en bas pour l’octave, puis remonte pour l’accord.",
        "Joue seuls les accords de la main droite, et laisse le doigt du haut chanter la mélodie.",
        "Joue la deuxième moitié à deux mains, là où la mélodie monte d’une octave.",
        "Joue tout le morceau à deux mains, à 75 % de la vitesse.",
        "Maintenant, joue-le au tempo et laisse sonner le dernier accord.",
      ],
      tips: [
        "En basse stride, regarde la note de basse et laisse la main trouver l’accord au toucher.",
        "Dans l’aigu, le mi et le ré dièse doivent scintiller. Joue-les légers et réguliers.",
        "Joue la note du haut de chaque accord un peu plus fort que les autres.",
      ],
      tricky: {
        15: "L’accord de la main gauche sur le deuxième temps n’a que mi et sol dièse. Ajoute le si sur le troisième temps.",
        20: "Lâche le do aigu, puis attrape la, do, mi et la avec les doigts 1, 2, 3 et 5.",
        28: "L’accord de quatre notes revient. Lâche d’abord le do aigu, puis pose la main sur toute l’octave.",
      },
    },
  },
};
