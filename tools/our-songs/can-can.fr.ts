/** The guide of *Can-can* in French. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Offenbach a écrit le « Galop infernal » pour la fête endiablée des dieux qui clôt son opérette « Orphée aux Enfers », créée en 1858. " +
    "Dans les années 1890, les cabarets parisiens du Moulin Rouge et des Folies Bergère l’ont repris pour accompagner le cancan. " +
    "Le film « Moulin Rouge ! », sorti en 2001, l’utilise dans sa musique.",
  funFact:
    "Sa mélodie partage ses notes principales avec deux airs bien plus lents du même acte. Pourtant, elle ne leur ressemble en rien.",
  versions: {
    common: {
      practice: [
        "Joue les sept premières mesures à la main droite seule. Le morceau attend chaque note.",
        "Joue les mesures 8 à 16 à la main droite seule. La main reste au même endroit.",
        "Maintenant, la main gauche seule. Elle garde une position pendant une mesure entière ou une demi-mesure.",
        "Joue les sept premières mesures à deux mains, lentement.",
        "Joue tout le morceau à deux mains, au tempo.",
      ],
      tips: [
        "Tiens le premier sol quatre temps. Les danseuses attendent que la musique démarre.",
        "Le doigt 5 joue les deux premiers ré. Puis le doigt 4 prend ré, pour que le doigt 5 puisse atteindre mi.",
        "Joue les noires brèves et rebondissantes, comme des danseuses qui lancent la jambe.",
      ],
      tricky: {
        4: "Sur ré, remplace le doigt 5 par le doigt 4. Puis le doigt 5 atteint mi, et le doigt 2 descend sur si.",
        5: "Le doigt 3 quitte do, et le doigt 2 joue deux fois la. Tiens chaque la deux temps.",
        10: "Le doigt 5 joue ré, puis le doigt 3 descend sur si. Le pouce reste au-dessus du sol.",
      },
    },
    rare: {
      practice: [
        "Joue la main gauche seule. Une note de basse tombe sur le temps, et un accord de deux notes lui répond.",
        "Joue les sept premières mesures à la main droite seule. Le morceau attend chaque note.",
        "Joue les sept premières mesures à deux mains, lentement.",
        "Joue tout le morceau à deux mains, un peu plus lentement que le tempo écrit.",
        "Maintenant, joue-le au tempo, comme dans un bal à minuit.",
      ],
      tips: [
        "La main gauche joue sur chaque temps : une note grave, puis un accord. Compte « un, deux ».",
        "Les accords de deux notes se jouent avec le pouce et le doigt 2, les doigts 2 et 4, ou les doigts 3 et 5.",
        "Joue la main gauche légère et brève, pour que la mélodie puisse danser au-dessus.",
      ],
      tricky: {
        4: "Sur ré, remplace le doigt 5 par le doigt 4. Puis le doigt 5 atteint mi, et le doigt 2 descend sur si.",
        11: "Après la paire sol et si, le doigt 4 prend do et le doigt 2 prend la. La main gauche joue ré, puis la et do.",
        15: "La main droite joue do, la, si et do. La main gauche joue ré, puis la et do ensemble.",
      },
    },
    epic: {
      practice: [
        "Joue la basse d’Alberti seule, jusqu’à ce qu’elle roule toute seule : grave, aigu, milieu, aigu.",
        "Joue seule la gamme de la mesure 8. Le pouce passe sous le doigt 3 pour prendre do.",
        "Joue les huit premières mesures à deux mains, lentement.",
        "Joue tout le morceau à deux mains, à 75 % de la vitesse.",
        "Maintenant, joue-le au tempo, avec la pédale.",
      ],
      tips: [
        "Change de pédale à chaque nouvel accord. À la mesure 4, elle change au milieu.",
        "La gamme monte depuis sol avec le pouce et les doigts 2 et 3. Puis le pouce passe dessous jusqu’au do.",
        "La mélodie est la note du haut de chaque paire : laisse le doigt du haut mener.",
      ],
      tricky: {
        11: "Le pouce arrive sur do, et le doigt 3 passe par-dessus pour descendre jusqu’au la.",
        18: "Lève la sixte un peu en avance. Puis le doigt 2 arrive sur la, et le doigt 4 atteint do.",
        23: "Joue la sixte brève. Puis le pouce prend ré, et le doigt 3 prend fa dièse.",
      },
    },
    legendary: {
      practice: [
        "Joue la main gauche seule : une octave sur le temps, puis un accord, chacun suivi d’un court silence pour sauter.",
        "Joue seules les octaves de la main droite. Garde le pouce et le doigt 5 fermes, et rebondis depuis le poignet.",
        "Joue seuls les arpèges de la main gauche. Le doigt 3 passe par-dessus le pouce.",
        "Joue tout le morceau à deux mains, à 75 % de la vitesse.",
        "Maintenant, joue-le au tempo et laisse sonner le dernier accord.",
      ],
      tips: [
        "Profite du court silence après chaque octave pour sauter à la suivante.",
        "La gamme court sur deux octaves. Le pouce passe dessous à chaque do et à chaque sol.",
        "Laisse les arpèges couler tout en douceur sous les traits, et change de pédale à chaque mesure.",
      ],
      tricky: {
        17: "Ouvre la main sur sol, si, ré et sol. Puis, pendant le silence, la main saute d’une octave vers le haut jusqu’au la.",
        21: "Joue la, ré et la avec le pouce et les doigts 2 et 5. Reviens du do aigu pendant le silence qui précède.",
        23: "Après l’accord, le trait monte depuis ré. Le pouce passe dessous sur sol.",
      },
    },
  },
};
