/** The guide of *Hungarian Dance No. 5* in French. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Brahms a écrit ses « Danses hongroises » pour piano à quatre mains, et le premier recueil a été publié en 1869. " +
    "La cinquième est devenue la plus célèbre de toutes. " +
    "Dans le film « Le Dictateur » (1940), Charlie Chaplin rase un client en rythme sur cette musique.",
  funFact:
    "Brahms a construit cette danse sur un csárdás de Béla Kéler, mais il croyait que c’était un air populaire.",
  versions: {
    common: {
      practice: [
        "Joue les quatre premières mesures à la main droite seule. Le morceau attend chaque note.",
        "Joue les mesures 5 à 8 à la main droite seule. Ici, la fin est nouvelle.",
        "Maintenant, la main gauche seule. Elle tient une quinte à vide, et seul le pouce joue aux mesures 3 et 7.",
        "Joue à deux mains, lentement.",
        "Joue tout le morceau à deux mains, au tempo.",
      ],
      tips: [
        "Chaque note longue dure six temps, et la courte deux. Compte-les, et la danse se balance.",
        "Le doigt 2 tient le sol dièse, puis les doigts 3 et 4 se dépêchent de monter vers la et si.",
        "Le sol dièse tire fort vers le la. Laisse-le s’attarder un peu avant de repartir.",
      ],
      tricky: {
        2: "Le doigt 5 monte chercher le do, puis le doigt 3 revient sur le la.",
        3: "Le doigt 2 tient le sol dièse pendant six temps. Ensuite, les doigts 3 et 4 jouent vite la et si.",
        6: "Comme à la mesure 2, le doigt 5 joue le do et le doigt 3 le la.",
      },
    },
    rare: {
      practice: [
        "Joue la main gauche seule. Une note grave vient d’abord, puis un accord sur le deuxième temps.",
        "Joue les huit premières mesures à la main droite seule. C’est là qu’elle monte d’une octave.",
        "Joue les huit premières mesures à deux mains, lentement.",
        "Joue tout le morceau à deux mains, un peu plus lentement que le tempo écrit.",
        "Maintenant, joue-le au tempo.",
      ],
      tips: [
        "Joue la note grave un peu plus fort que l’accord qui la suit. C’est le « boum-tchac » de la danse.",
        "Pendant que tu tiens le long la, monte la main droite d’une octave. Le pouce arrive sur le mi.",
        "Le court silence à la fin de la mesure 12 te laisse le temps de redescendre d’un saut.",
      ],
      tricky: {
        5: "La main droite joue maintenant une octave plus haut. Le pouce arrive sur le mi aigu.",
        9: "La réponse commence sur le do aigu avec le doigt 5. Ensuite, le doigt 3 joue le la, et le doigt 4 le si.",
        13: "Profite du silence de la mesure 12 pour redescendre d’une octave. Le pouce arrive sur le mi.",
      },
    },
    epic: {
      practice: [
        "Joue la basse d’Alberti seule, jusqu’à ce qu’elle roule toute seule : grave, aigu, milieu, aigu.",
        "Joue seules les sixtes de la main droite, et enfonce les deux notes de chaque paire d’un seul geste.",
        "Joue les huit premières mesures à deux mains, lentement.",
        "Joue tout le morceau à deux mains, à 75 % de la vitesse.",
        "Maintenant, joue-le au tempo, avec la pédale.",
      ],
      tips: [
        "Joue la basse d’Alberti légère et rapide, pour que la mélodie danse au-dessus.",
        "Le mi dièse, c’est la touche blanche fa. Le doigt 2 le joue, et la main ne bouge pas.",
        "La mélodie est la note du haut de chaque paire : laisse le doigt du haut mener.",
      ],
      tricky: {
        5: "Le pouce reste sur le la, pendant que les doigts 3 et 5 jouent do dièse et fa dièse au-dessus.",
        7: "Les doigts 1 et 4 jouent sol dièse et mi dièse. Ensuite, la main monte deux fois, rapidement.",
        15: "Les mêmes sixtes qu’à la mesure 7. Garde le pouce près du la et du si.",
      },
    },
    legendary: {
      practice: [
        "Joue la main gauche seule : saute en bas pour l’octave, puis remonte pour l’accord.",
        "Joue seules les octaves de la main droite, le pouce et l’auriculaire gardés dans la même position.",
        "Joue lentement les motifs rapides des mesures 5 à 7, à la main droite seule.",
        "Joue tout le morceau à deux mains, à 75 % de la vitesse.",
        "Maintenant, joue-le au tempo et laisse sonner le dernier accord.",
      ],
      tips: [
        "Joue les octaves avec fougue. C’est une danse rapide, et chaque note longue doit sonner.",
        "Dans les motifs rapides, le pouce passe dessous pour que le trait reste fluide.",
        "Joue la note du haut de chaque accord un peu plus fort que les autres.",
      ],
      tricky: {
        4: "Tiens l’octave de fa dièse, et laisse la main gauche sauter entre son octave et son accord.",
        8: "Ouvre la main sur fa dièse, la, do dièse et fa dièse, avec les doigts 1, 2, 3 et 5.",
        12: "L’accord de quatre notes revient. Lâche d’abord le sol dièse grave, puis arrive sur toute l’octave.",
      },
    },
  },
};
