/** The guide of *Kling, Glöckchen* in French. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Kling, Glöckchen, klingelingeling veut dire « Sonne, petite cloche, drelin, drelin ». " +
    "Karl Enslin a écrit les paroles, imprimées pour la première fois en 1854. " +
    "L’Enfant Jésus y supplie les enfants de lui ouvrir la porte, car l’hiver est si froid. " +
    "Personne ne sait qui a écrit l’air que l’on chante aujourd’hui.",
  funFact:
    "Dans beaucoup de familles allemandes, une petite cloche sonne la veille de Noël. Elle annonce aux enfants que les cadeaux sont prêts.",
  versions: {
    common: {
      practice: [
        "Joue les quatre premières mesures à la main droite seule. Le morceau attend chaque note.",
        "Joue les mesures 5 à 12 à la main droite seule. Là, la main se déplace deux fois.",
        "Maintenant, la main gauche seule. Elle garde une position pendant une mesure ou une demi-mesure.",
        "Joue tout le morceau à deux mains, lentement.",
        "Joue tout le morceau à deux mains, au tempo.",
      ],
      tips: [
        "Sol, la, sol, la : c’est la clochette qui tinte. Garde-la légère et régulière.",
        "Pendant que tu tiens le long mi, fais glisser le pouce du ré jusqu’au do central.",
        "Pendant le dernier mi, remonte le pouce jusqu’au ré, pour que le doigt 3 atteigne la touche noire fa dièse.",
      ],
      tricky: {
        2: "Les doigts 4 et 5 se balancent entre sol et la, comme une cloche qui oscille.",
        5: "Le pouce est maintenant sur le do central, alors le doigt 2 joue les deux ré.",
        14: "La clochette sonne à nouveau. Les doigts 4 et 5 se balancent entre sol et la, comme à la mesure 2.",
      },
    },
    rare: {
      practice: [
        "Joue la main gauche seule, et enfonce ensemble les notes de chaque accord.",
        "Joue les mesures 9 à 12 à la main gauche seule. Là, elle descend jusqu’au sol.",
        "Joue les huit premières mesures à deux mains, lentement.",
        "Joue tout le morceau à deux mains, un peu plus lentement que le tempo écrit.",
        "Maintenant, joue-le au tempo.",
      ],
      tips: [
        "Joue le do grave un peu plus fort que l’accord qui le suit.",
        "Ici, les deux mains se déplacent. Profite des longues notes à la fin de la mesure 8 pour y arriver.",
        "La main gauche remonte en glissant jusqu’au do quand la phrase de la clochette revient.",
      ],
      tricky: {
        5: "Le pouce droit descend jusqu’au do central, pendant que la main gauche joue do, puis son accord.",
        9: "Les deux mains se déplacent : le pouce droit monte au ré, et la main gauche descend sur la, do et ré.",
        13: "La main gauche remonte en glissant jusqu’au do, et la main droite reprend la phrase de la clochette.",
      },
    },
    epic: {
      practice: [
        "Joue la basse d’Alberti seule, jusqu’à ce qu’elle roule toute seule : grave, aigu, milieu, aigu.",
        "Joue seules les tierces de la main droite, et tiens ensemble les deux notes de chaque paire.",
        "Joue le premier couplet à deux mains, lentement.",
        "Joue tout le morceau à deux mains, à 75 % de la vitesse.",
        "Maintenant, joue-le au tempo, avec la pédale.",
      ],
      tips: [
        "Joue la basse d’Alberti tout en douceur, pour que l’air de la clochette sonne au-dessus.",
        "Change de pédale au début et au milieu de chaque mesure.",
        "Lève la main du dernier mi, et arrive une octave plus haut avec les doigts 2 et 4.",
      ],
      tricky: {
        17: "La main droite arrive une octave plus haut sur une tierce, et la main gauche commence sa basse et ses accords.",
        27: "Le doigt 2 joue mi, et l’auriculaire s’étire jusqu’au la. Garde le pouce près du ré.",
        29: "La phrase de la clochette revient en tierces. Les doigts 2 et 4 prennent mi et sol ensemble.",
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
        "En octaves, le motif de la clochette doit sonner comme de vraies cloches. Garde le poignet souple.",
        "Le pouce et l’auriculaire jouent chaque octave. Garde la main ouverte, dans une seule position.",
      ],
      tricky: {
        3: "Enfonce ensemble si, ré et fa. Puis les doigts 2 et 4 jouent ré et sol, pendant que la main gauche saute.",
        7: "Les doigts 2 et 4 jouent la tierce. Puis le doigt 4 répète le fa, et l’auriculaire prend le sol.",
        15: "Le même accord qu’à la mesure 3. Surveille le saut de la main gauche vers l’octave grave sur sol.",
      },
    },
  },
};
