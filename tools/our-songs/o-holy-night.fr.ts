/** The guide of *O Holy Night* in French. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Le compositeur français Adolphe Adam a mis en musique le poème « Minuit, chrétiens » de Placide Cappeau, sous le titre « Cantique de Noël ». " +
    "Il a été chanté pour la première fois à la messe de minuit de Roquemaure, dans le sud de la France, en 1847. " +
    "La version anglaise la plus connue, O Holy Night, a été écrite en 1855 par le critique et pasteur américain John Sullivan Dwight.",
  funFact:
    "Aujourd’hui, Adolphe Adam est surtout connu pour son ballet « Giselle ».",
  versions: {
    common: {
      practice: [
        "Joue les mesures 1 à 7 à la main droite seule. Le morceau attend chaque note.",
        "Joue la montée, de la mesure 8 jusqu’à la fin, à la main droite seule.",
        "Maintenant, la main gauche seule. Elle garde une position, puis en change au milieu de chaque mesure.",
        "Joue tout le morceau à deux mains, lentement.",
        "Joue tout le morceau à deux mains, au tempo.",
      ],
      tips: [
        "Tiens la note longue de chaque paire pointée. La note courte mène alors tout droit à la suivante.",
        "Profite du silence à la fin de la mesure 7 pour monter. Le doigt 3 arrive sur le do aigu.",
        "C’est la montée qui a rendu le morceau célèbre. Laisse-la enfler jusqu’au mi aigu.",
      ],
      tricky: {
        2: "L’auriculaire joue le do aigu, et la main descend jusqu’au do central avec les doigts 3, 2 et 1.",
        4: "Après le la, le pouce descend chercher le fa, puis l’auriculaire s’étire jusqu’au do aigu.",
        8: "Après le silence, la main monte, le doigt 3 sur le do aigu. Puis le pouce joue le la.",
      },
    },
    rare: {
      practice: [
        "Joue les sept premières mesures à la main droite seule, et donne à chaque note courte sa place.",
        "Joue la main gauche seule. Tiens chaque accord jusqu’à l’arrivée du suivant.",
        "Joue la montée des mesures 8 à 10 à deux mains.",
        "Joue tout le morceau à deux mains, un peu plus lentement que le tempo écrit.",
        "Maintenant, joue-le au tempo.",
      ],
      tips: [
        "Joue le deuxième sol avec le doigt 5. Puis les doigts 3, 2 et 1 descendent jusqu’au do.",
        "Les fa dièse rendent la mélodie triste un instant. Joue-les doux.",
        "Les six dernières mesures reviennent une fois encore. Joue-les un peu plus doux, comme un écho.",
      ],
      tricky: {
        2: "Sur le sol répété, passe du doigt 3 au doigt 5, pour que la main puisse descendre jusqu’au do.",
        4: "Le doigt 2 joue les deux fa dièse, et le pouce prend le mi juste après.",
        8: "Après le silence, la main monte, le doigt 3 sur le do aigu. Puis le pouce joue le la.",
      },
    },
    epic: {
      practice: [
        "Joue la basse d’Alberti seule, jusqu’à ce qu’elle roule toute seule : grave, aigu, milieu, aigu.",
        "Joue le refrain une octave plus haut, à la main droite seule.",
        "Joue les sept premières mesures à deux mains, lentement.",
        "Joue tout le morceau à deux mains, à 75 % de la vitesse.",
        "Maintenant, joue-le au tempo, avec la pédale.",
      ],
      tips: [
        "Joue la basse d’Alberti douce et régulière, pour que la mélodie chante au-dessus.",
        "Change de pédale à chaque nouvel accord, pour que la basse ne devienne jamais floue.",
        "Après le dernier do, fais sauter la main droite d’une octave vers le haut pour le refrain.",
      ],
      tricky: {
        4: "La main droite joue ses fa dièse pendant que la main gauche roule sur le mi. Garde les deux mains légères.",
        13: "La mélodie rentre au do pendant que la main gauche passe de l’accord de do majeur à l’accord de sol majeur, puis revient.",
        19: "La même fin qu’à la mesure 13, une octave plus haut. Tiens le dernier do jusqu’au bout.",
      },
    },
    legendary: {
      practice: [
        "Joue la basse stride seule : saute en bas pour l’octave, puis monte pour l’accord.",
        "Joue la montée en octaves à la main droite seule. Garde la main en position d’octave.",
        "Joue les octaves brisées du refrain à la main gauche seule.",
        "Joue tout le morceau à deux mains, à 75 % de la vitesse.",
        "Maintenant, joue-le au tempo et laisse sonner le dernier accord.",
      ],
      tips: [
        "Dans la basse stride, regarde l’octave du bas et laisse la main trouver l’accord au toucher.",
        "Joue chaque octave avec le pouce et l’auriculaire, et garde la main dans cette position.",
        "Au-dessus des octaves brisées, laisse la main droite chanter pleinement. La main gauche reste douce.",
      ],
      tricky: {
        6: "Les octaves se balancent entre sol et la, puis tombent sur le ré. Garde la main en position d’octave.",
        7: "Le même balancement qu’à la mesure 6, puis une montée jusqu’au do aigu. Laisse la basse stride garder la pulsation.",
        12: "Les octaves bondissent du sol jusqu’au mi aigu. Profite du court silence juste avant pour sauter.",
      },
    },
  },
};
