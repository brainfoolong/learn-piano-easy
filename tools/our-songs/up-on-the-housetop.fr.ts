/** The guide of *Up on the Housetop* in French. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Benjamin Hanby a écrit ce chant de Noël en 1864, alors qu’il dirigeait une école de chant à New Paris, dans l’Ohio. " +
    "Il a d’abord été publié par Root & Cady, dans le magazine Our Song Birds. " +
    "On le considère comme le premier chant de Noël consacré surtout au père Noël. " +
    "Hanby a écrit environ 80 chansons avant de mourir de la tuberculose en 1867.",
  funFact:
    "Selon un livre, c’est le deuxième plus ancien chant de Noël qui ne soit pas religieux. " +
    "Seul Jingle Bells, publié en 1857, est plus ancien.",
  versions: {
    common: {
      practice: [
        "Joue les quatre premières mesures à la main droite seule. Le morceau attend chaque note.",
        "Joue le refrain à la main droite seule. Le doigt 3 entre maintenant en jeu sur le fa.",
        "Maintenant, la main gauche seule. Elle garde une position pendant une demi-mesure ou une mesure entière.",
        "Joue tout le morceau à deux mains, lentement.",
        "Joue tout le morceau à deux mains, au tempo.",
      ],
      tips: [
        "Pose le pouce sur le ré, et les doigts 2 à 5 sur le mi, le fa, le sol et le la.",
        "Lève un peu la main après le ré, pour que le pouce tombe sur le do à la mesure 2.",
        "Le refrain commence ici. Joue-le avec un peu plus d’éclat que le couplet.",
      ],
      tricky: {
        1: "Les doigts 4 et 5 se balancent entre le sol et le la. Puis le doigt 2 joue le mi, et le pouce joue le ré.",
        2: "Lève la main après le ré, et pose le pouce sur le do. Le doigt 2 joue le mi, et le doigt 4 tient le sol.",
        5: "Le début revient. Cette fois, le doigt 2 tient le mi plus longtemps, et aucun ré ne vient avant le do.",
      },
    },
    rare: {
      practice: [
        "Joue la main gauche seule sur le couplet, et enfonce ensemble les notes de chaque accord.",
        "Joue la main gauche seule sur le refrain : la fondamentale de chaque accord, puis sa quinte.",
        "Joue les mesures 5 à 8 à la main droite seule. C’est là que viennent les notes courtes.",
        "Joue tout le morceau à deux mains, un peu plus lentement que le tempo écrit.",
        "Maintenant, joue-le au tempo.",
      ],
      tips: [
        "Tiens chaque accord jusqu’au bout, tout en douceur, pour que la mélodie chante au-dessus.",
        "Après le premier la, les deux la suivants et les deux sol vont deux fois plus vite. Joue-les bien réguliers.",
        "Dans le refrain, joue chaque fondamentale un peu plus fort que la quinte qui la suit.",
      ],
      tricky: {
        2: "Le pouce descend en glissant du ré au do. Le doigt 2 joue le mi, et le doigt 4 tient le sol.",
        6: "Le même geste qu’à la mesure 2 : le pouce descend en glissant du ré au do, au moment où l’accord suivant commence.",
        7: "Le doigt 5 joue trois fois le la, puis le doigt 4 joue deux fois le sol. Ensuite, le doigt 2 joue le mi.",
      },
    },
    epic: {
      practice: [
        "Joue la basse d’Alberti seule, jusqu’à ce qu’elle roule toute seule : grave, aigu, milieu, aigu.",
        "Joue seules les tierces de la main droite, et garde ensemble les deux notes de chaque paire.",
        "Joue le couplet à deux mains, lentement.",
        "Joue tout le morceau à deux mains, à 75 % de la vitesse.",
        "Maintenant, joue-le au tempo, avec la pédale.",
      ],
      tips: [
        "Joue la basse d’Alberti tout en douceur, pour que la mélodie résonne au-dessus.",
        "Enfonce ensemble les deux notes de chaque tierce, et laisse le doigt du haut chanter.",
        "Change de pédale à chaque demi-mesure, quand la main gauche commence un nouvel accord.",
      ],
      tricky: {
        2: "Le pouce descend en glissant du ré au do, pendant que la basse d’Alberti continue de rouler en dessous.",
        6: "Le même geste qu’à la mesure 2. Garde la main gauche stable pendant que le pouce glisse.",
        13: "Les tierces montent de mi et sol à fa et la, puis reviennent. " +
          "Les doigts 2 et 4 passent le relais aux doigts 3 et 5.",
      },
    },
    legendary: {
      practice: [
        "Joue la basse stride seule : saute en bas pour l’octave grave, puis remonte pour l’accord.",
        "Joue le couplet à la main droite seule, et garde légers les petits traits rapides.",
        "Joue les arpèges du refrain à la main gauche seule.",
        "Joue tout le morceau à deux mains, à 75 % de la vitesse.",
        "Maintenant, joue-le au tempo et laisse sonner le dernier accord.",
      ],
      tips: [
        "Dans la basse stride, regarde l’octave grave et laisse la main trouver l’accord au toucher.",
        "Dans le petit trait rapide, les doigts 5, 4, 3 et 2 descendent du la au mi.",
        "Lève la main après le sol, et pose l’accord de quatre notes, la pédale enfoncée.",
      ],
      tricky: {
        3: "Le doigt 5 joue deux fois le la, puis la main roule jusqu’au mi. La main gauche saute du fa au do.",
        4: "Après le long sol, les doigts 3, 2 et 3 jouent vite le fa, le mi et le fa, puis la mélodie revient au sol.",
        7: "Le doigt 5 répète le la, puis le doigt 4 répète le sol. " +
          "Garde les notes rapides légères au-dessus de la basse stride.",
      },
    },
  },
};
