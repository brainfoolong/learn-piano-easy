/** The guide of *Wedding March* in French. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Mendelssohn a écrit cette marche en 1842, dans sa musique pour « Le Songe d’une nuit d’été » de Shakespeare. " +
    "Elle est devenue un classique des mariages après que Victoria, la princesse royale, l’a choisie pour le sien en 1858. " +
    "Au cinéma, on l’entend encore chaque fois qu’un couple quitte l’autel.",
  funFact:
    "Le premier mariage connu où elle a été jouée a eu lieu à Tiverton, en Angleterre, le 2 juin 1847. " +
    "C’est l’organiste Samuel Reay qui l’a jouée.",
  versions: {
    common: {
      practice: [
        "Joue les quatre premières mesures à la main droite seule. Le morceau attend chaque note.",
        "Joue les mesures 4 à 8 à la main droite seule. Sur le long sol, la main descend vers le do.",
        "Maintenant, la main gauche seule. Elle tient une note ou une quinte à vide pendant une mesure entière ou une demi-mesure.",
        "Joue les huit premières mesures à deux mains, lentement.",
        "Joue tout le morceau à deux mains, au tempo.",
      ],
      tips: [
        "Commence avec le pouce sur le fa dièse et le doigt 5 sur le do aigu. La mélodie reste sous la main.",
        "Lève la main juste avant la fin du sol, et descends-la. Puis le doigt 4 arrive sur le fa.",
        "Joue avec éclat et fierté, comme les portes d’une église qui s’ouvrent en grand.",
      ],
      tricky: {
        2: "Tiens le si avec le doigt 4 pendant six temps. Puis le pouce joue le fa dièse.",
        4: "La main est descendue. Le doigt 4 joue le fa, et le doigt 2 joue le ré.",
        11: "Quatre notes égales : mi, fa, sol, puis de nouveau mi. Les doigts 3, 4 et 5 montent, et le doigt 3 revient.",
      },
    },
    rare: {
      practice: [
        "Joue la main gauche seule. Elle joue un accord sur chaque temps, comme une fanfare.",
        "Joue les huit premières mesures à la main droite seule. Le morceau attend chaque note.",
        "Joue les mesures 9 à 16 à deux mains, lentement.",
        "Joue tout le morceau à deux mains, un peu plus lentement que le tempo écrit.",
        "Maintenant, joue-le au tempo.",
      ],
      tips: [
        "De l’accord sur fa à l’accord sur ré, le doigt 5 reste sur le la. Seules les notes du haut bougent.",
        "Joue les accords courts et réguliers, pour que la mélodie résonne au-dessus.",
        "Termine sur le do et le mi ensemble. Le pouce et le doigt 3 les enfoncent d’un seul geste.",
      ],
      tricky: {
        1: "Tiens le do aigu avec le doigt 5. La main gauche joue la, do et fa sur chaque temps.",
        2: "La main gauche joue le la et le ré. Tiens le si à la main droite pendant que l’accord se répète.",
        4: "Le doigt 4 joue le fa, et le doigt 2 le ré. La main gauche reste sur si, ré et sol.",
      },
    },
    epic: {
      practice: [
        "Joue la basse d’Alberti seule, jusqu’à ce qu’elle roule toute seule : grave, aigu, milieu, aigu.",
        "Joue la mesure 9 à la main droite seule. Passe le pouce dessous jusqu’au fa.",
        "Joue les huit premières mesures à deux mains, lentement.",
        "Joue tout le morceau à deux mains, à 75 % de la vitesse.",
        "Maintenant, joue-le au tempo, avec la pédale.",
      ],
      tips: [
        "Change de pédale à chaque nouvelle note de basse, deux fois par mesure.",
        "Passe le pouce dessous jusqu’au fa, après que le doigt 3 a joué le mi.",
        "La mélodie est maintenant en haut de chaque paire. Laisse le doigt du haut la chanter.",
      ],
      tricky: {
        4: "Lève la main à la fin de la mesure 3. Puis le doigt 4 arrive sur le fa, " +
          "pendant que la main gauche déroule sol, ré et si.",
        21: "Ouvre la main sur le mi et le do, à une sixte d’écart. Lève-la juste avant la mesure suivante.",
        22: "Joue do et mi, puis si et ré, puis vite do et mi. Le pouce se déplace d’une touche à chaque fois.",
      },
    },
    legendary: {
      practice: [
        "Joue la main gauche seule : une octave sur le temps, puis un accord, chacun suivi d’un court silence pour sauter.",
        "Joue seuls les arpèges de la main gauche. Le doigt 3 passe par-dessus le pouce en montant.",
        "Joue seuls les accords de la main droite, et laisse le doigt du haut chanter la mélodie.",
        "Joue tout le morceau à deux mains, à 75 % de la vitesse.",
        "Maintenant, joue-le au tempo et laisse sonner le dernier accord.",
      ],
      tips: [
        "Joue les octaves comme des trompettes à un mariage royal. Laisse l’auriculaire mener.",
        "Dans les arpèges, le doigt 3 passe par-dessus le pouce, et le pouce passe dessous en descendant.",
        "Joue la note du haut de chaque accord un peu plus fort que les autres.",
      ],
      tricky: {
        10: "La main gauche monte de deux octaves depuis le sol grave. La main droite monte depuis le ré, du pouce au doigt 4.",
        12: "La main gauche remonte depuis le sol. La main droite saute du ré jusqu’au sol avec le doigt 4.",
        17: "Ouvre la main droite sur do, fa, la et do. La main gauche saute de l’octave de fa grave à son accord.",
      },
    },
  },
};
