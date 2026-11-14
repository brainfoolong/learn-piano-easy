/** The guide of *The Sailor's Hornpipe* in French. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "The Sailor's Hornpipe est un air de danse plein d’entrain, étroitement lié à la Royal Navy. " +
    "Les premiers recueils l’imprimaient sous le titre The College Hornpipe.",
  funFact:
    "Les dessins animés de Popeye, de Max Fleischer, commençaient par ce hornpipe. " +
    "Beaucoup de gens le connaissent donc comme l’air de Popeye.",
  versions: {
    common: {
      practice: [
        "Joue les mesures 1 à 5 à la main droite seule. Le morceau attend chaque note.",
        "Joue les mesures 5 à 9 à la main droite seule. La mélodie saute du la aigu jusqu’au la grave.",
        "Maintenant, la main gauche seule. Elle garde une position pendant une mesure entière, et ne bouge jamais.",
        "Joue les neuf premières mesures à deux mains, lentement.",
        "Joue tout le morceau à deux mains, au tempo.",
      ],
      tips: [
        "Commence avec le doigt 5 sur le sol aigu et le doigt 4 sur le fa dièse. Puis le pouce descend jusqu’au sol grave.",
        "Lâche le sol aigu un peu plus tôt. Dans ce court silence, descends le pouce d’une octave.",
        "Compte quatre temps réguliers dans chaque mesure. Le hornpipe est une danse, alors fais-le rebondir.",
      ],
      tricky: {
        4: "Après le do, le pouce passe dessous jusqu’au si. Puis les doigts 2 et 4 montent jusqu’au ré et au sol.",
        6: "Lâche tôt le la aigu. Puis le pouce descend d’une octave jusqu’au la grave.",
        8: "Le pouce joue le fa dièse, et le doigt 2 joue le la. Puis le doigt 4 monte jusqu’au ré.",
      },
    },
    rare: {
      practice: [
        "Joue la main gauche seule : une note grave, puis un accord de deux notes ou une deuxième note.",
        "Joue les neuf premières mesures à la main droite seule. Le morceau attend chaque note.",
        "Joue les mesures 10 à 16 à la main droite seule. Les croches et les accords de deux notes y arrivent.",
        "Joue tout le morceau à deux mains, un peu plus lentement que le tempo écrit.",
        "Maintenant, joue-le au tempo.",
      ],
      tips: [
        "Le doigt 5 joue le sol aigu, et le pouce descend sur le sol grave. Garde la main ouverte sur toute une octave.",
        "Deux croches remplissent un temps. Compte-les « un-et », et joue-les bien régulières.",
        "Termine avec le si et le sol ensemble. Le pouce et le doigt 5 les enfoncent d’un seul geste.",
      ],
      tricky: {
        4: "Après le do, le pouce passe dessous jusqu’au si. Puis les doigts 2 et 4 montent jusqu’au ré et au sol.",
        12: "Les doigts 3, 2 et 3 jouent vite le ré, le si et le ré. Puis le doigt 5 monte jusqu’au sol.",
        15: "Les doigts 2, 3, 4 et 5 montent du ré au la. Puis le doigt 4 redescend sur le fa dièse.",
      },
    },
    epic: {
      practice: [
        "Joue la main gauche seule, jusqu’à ce que les accords brisés coulent tout seuls.",
        "Joue les mesures 10 à 16 à la main droite seule, et passe le pouce dessous en montant.",
        "Joue les neuf premières mesures à deux mains, et change de pédale à chaque nouvel accord.",
        "Joue tout le morceau à deux mains, à 75 % de la vitesse.",
        "Maintenant, joue-le au tempo, avec la pédale.",
      ],
      tips: [
        "Change de pédale quand la basse passe à un nouvel accord. " +
          "Relève-la, puis appuie de nouveau dessus juste après la note de basse.",
        "Après le si, passe le pouce dessous jusqu’au do. Puis le doigt 2 prend le ré.",
        "Laisse les traits chanter tout en douceur au-dessus des accords brisés, comme un violon dans un bal.",
      ],
      tricky: {
        10: "Les doigts 5, 3, 2 et 1 descendent l’accord de sol majeur. Puis ils remontent par le même chemin.",
        14: "Le pouce saute en bas jusqu’au si. Puis les doigts 2, 3 et 5 montent l’accord de sol majeur jusqu’au si aigu.",
        17: "Joue le dernier accord aux deux mains à la fois. Laisse la pédale le tenir jusqu’à la fin.",
      },
    },
    legendary: {
      practice: [
        "Joue la main gauche seule : une octave sur le temps, puis un accord, chacun suivi d’un court silence pour sauter.",
        "Joue seuls les arpèges de la main gauche. Le pouce passe dessous, et le doigt 3 passe par-dessus.",
        "Joue seuls les accords de la main droite, et laisse le doigt du haut chanter la mélodie.",
        "Joue tout le morceau à deux mains, à 75 % de la vitesse.",
        "Maintenant, joue-le au tempo et laisse sonner le dernier accord.",
      ],
      tips: [
        "Profite du court silence après chaque octave et chaque accord pour sauter au suivant.",
        "Laisse les arpèges rouler tout en douceur sous les traits de la main droite.",
        "Chaque accord se relâche un peu tôt. Profite de ce petit vide pour déplacer toute la main jusqu’à l’accord suivant.",
      ],
      tricky: {
        17: "Ouvre la main sur sol, si, ré et sol. Puis descends-la d’une octave sur si, ré et sol.",
        18: "La main monte d’un accord de sol majeur grave jusqu’au ré du haut. Puis les doigts 1 et 4 prennent le sol et le do.",
        19: "Trois accords montent jusqu’au sol aigu. Garde le poignet souple, et laisse le doigt 5 mener.",
      },
    },
  },
};
