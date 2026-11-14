/** The guide of *Es ist ein Ros entsprungen* in French. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "En allemand, Es ist ein Ros entsprungen veut dire « Une rose a éclos ». " +
    "C’est un chant de Noël d’église du XVIe siècle. " +
    "Sa mélodie a été imprimée pour la première fois dans le recueil de cantiques de Spire, à Cologne en 1599. " +
    "Son compositeur est inconnu. " +
    "Michael Praetorius l’a harmonisée à quatre voix en 1609, et sa version s’est largement répandue.",
  funFact:
    "Johannes Brahms a écrit un prélude de choral pour orgue sur cette mélodie. C’est le huitième de son op. 122.",
  versions: {
    common: {
      practice: [
        "Joue les deux premières mesures à la main droite seule. Le morceau attend chaque note.",
        "Joue les mesures 3 à 6 à la main droite seule. La mélodie descend jusqu’au sol à la mesure 5.",
        "Maintenant, la main gauche seule. Elle garde une position pendant une demi-mesure ou une mesure entière.",
        "Joue tout le morceau à deux mains, lentement.",
        "Joue tout le morceau à deux mains, au tempo.",
      ],
      tips: [
        "Chaque sol long commence avec le doigt 5. Prends le doigt 4 pour le sol suivant, et la main reste immobile.",
        "Chaque mesure contient trois mesures de l’ancienne édition. Compte six temps lents, deux noires par temps.",
        "Après le sol grave, attends un instant. Puis laisse le doigt 5 monter d’une octave jusqu’au sol aigu.",
      ],
      tricky: {
        3: "Le doigt 2 tient le do, puis le doigt 5 s’étire jusqu’au sol. Prends le doigt 4 pour le sol suivant.",
        5: "Les doigts 4, 2, 3 et 2 jouent ré, si, do et la, puis le pouce arrive sur le sol grave. Respecte le silence, puis monte avec le doigt 5.",
        9: "Le même écart qu’à la mesure 3 : le doigt 5 monte du do au sol, et le doigt 4 prend le sol suivant.",
      },
    },
    rare: {
      practice: [
        "Joue la main gauche seule, et enfonce ensemble les notes de chaque accord. Le pouce reste sur le sol.",
        "Joue les mesures 7 à 13 à la main droite seule. La mélodie monte d’une octave, puis redescend.",
        "Joue le premier passage à deux mains, lentement.",
        "Joue tout le morceau à deux mains, un peu plus lentement que le tempo écrit.",
        "Maintenant, joue-le au tempo.",
      ],
      tips: [
        "Sous le fa de la mélodie, l’accord se réduit à ré et sol. Garde le pouce sur le sol et laisse sonner le fa.",
        "Profite du silence après le do pour lever la main droite une octave plus haut.",
        "Le même silence ramène la main droite en bas, pour le dernier passage.",
      ],
      tricky: {
        3: "Le doigt 5 s’étire du do jusqu’au sol, pendant que la main gauche tient son accord de do majeur.",
        7: "Tiens le do, lève la main droite pendant le silence, et pose le doigt 5 sur le sol une octave plus haut.",
        13: "Tiens le do aigu, lève la main pendant le silence, et repose le doigt 5 sur le sol en dessous.",
      },
    },
    epic: {
      practice: [
        "Joue la basse d’Alberti seule, jusqu’à ce qu’elle roule toute seule : grave, aigu, milieu, aigu.",
        "Joue seuls les accords brisés du deuxième passage, et lève la main à chaque silence.",
        "Joue le premier passage à deux mains, lentement.",
        "Joue tout le morceau à deux mains, à 75 % de la vitesse.",
        "Maintenant, joue-le au tempo, avec la pédale dans la partie du milieu.",
      ],
      tips: [
        "Joue la basse d’Alberti tout en douceur, pour que la mélodie chante au-dessus.",
        "Change de pédale à chaque temps, quand la main gauche commence un nouvel accord.",
        "Les deux mains se lèvent pendant le silence. La main droite descend d’une octave, et la gauche reprend sa basse d’Alberti.",
      ],
      tricky: {
        7: "La main droite saute d’une octave vers le haut pendant le silence. La basse d’Alberti finit sur un silence, donc la main gauche peut descendre.",
        8: "La main gauche commence ses accords brisés sur le do grave. Lève-la à chaque silence, et change de pédale à chaque temps.",
        13: "La main droite redescend pendant le silence, et les accords brisés finissent sur fa.",
      },
    },
    legendary: {
      practice: [
        "Joue la basse stride seule : saute en bas pour l’octave grave, puis remonte pour l’accord.",
        "Joue seules les octaves de la main droite, en gardant le pouce et le doigt 5 à une octave d’écart.",
        "Joue seuls les arpèges du deuxième passage à la main gauche.",
        "Joue tout le morceau à deux mains, à 75 % de la vitesse.",
        "Maintenant, joue-le au tempo et laisse sonner le dernier accord.",
      ],
      tips: [
        "En basse stride, regarde l’octave grave et laisse la main trouver l’accord au toucher.",
        "Les arpèges montent de deux octaves à chaque temps. Joue-les doux, pour que les octaves au-dessus résonnent.",
        "Garde le pouce et le doigt 5 à une octave d’écart, et laisse le poignet rebondir.",
      ],
      tricky: {
        9: "Lâche l’octave de do une croche plus tôt, pour que la main arrive à temps sur l’octave de sol.",
        11: "Les octaves descendent jusqu’au sol grave, puis sautent une octave plus haut après le silence.",
        13: "Tiens l’octave de do, puis pose l’octave de sol pendant que les arpèges finissent sur fa.",
      },
    },
  },
};
