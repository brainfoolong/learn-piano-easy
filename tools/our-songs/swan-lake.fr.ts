/** The guide of *Swan Lake* in French. */
import type { Translation } from "../../src/i18n/translation";
import type { GuideTranslation } from "../make-our-songs";

export const translation: Translation<GuideTranslation> = {
  about:
    "Tchaïkovski a écrit la musique du ballet « Le Lac des cygnes » en 1875 et 1876, " +
    "et le Ballet du Bolchoï l’a monté pour la première fois en 1877. " +
    "Ce thème est la mélodie du hautbois au deuxième acte. " +
    "Le film Black Swan (2010) contient des séquences du « Lac des cygnes ».",
  funFact: "Vladimir Begitchev a commandé la partition en mai 1875, et Tchaïkovski a reçu 800 roubles pour ce travail.",
  versions: {
    common: {
      practice: [
        "Joue les quatre premières mesures à la main droite seule. Le morceau attend chaque note.",
        "Joue les mesures 9 à 16 à la main droite seule. La main reste au même endroit.",
        "Maintenant, la main gauche seule. Elle garde une position pendant une mesure entière ou une demi-mesure.",
        "Joue les huit premières mesures à deux mains, lentement.",
        "Joue tout le morceau à deux mains, au tempo.",
      ],
      tips: [
        "Tiens le premier mi en comptant jusqu’à quatre. Puis quatre notes courtes montent du la au ré.",
        "C’est une mélodie triste et fière. Laisse chanter chaque longue note aiguë.",
        "Dans cette mesure, le doigt 2 joue le la, pour que le pouce puisse descendre jusqu’au fa.",
      ],
      tricky: {
        1: "Après le long mi, pose le pouce sur le la. Puis les doigts 2, 3 et 4 montent jusqu’au ré.",
        3: "Ici, joue le la avec le doigt 2. Puis le pouce descend jusqu’au fa, et le doigt 3 prend le do.",
        7: "Comme à la mesure 3, le doigt 2 joue le la, et le pouce descend jusqu’au fa.",
      },
    },
    rare: {
      practice: [
        "Joue la main gauche seule. Une note grave arrive sur le temps, et un accord de deux notes lui répond.",
        "Joue les huit premières mesures à la main droite seule. Le morceau attend chaque note.",
        "Joue les huit premières mesures à deux mains, lentement.",
        "Joue tout le morceau à deux mains, un peu plus lentement que le tempo écrit.",
        "Maintenant, joue-le au tempo.",
      ],
      tips: [
        "La main gauche joue sur chaque temps : une note grave, puis un accord. Compte « un, deux ».",
        "Joue la main gauche tout en douceur, pour que la mélodie chante au-dessus.",
        "Termine avec le la et le do ensemble. Les doigts 1 et 3 les enfoncent d’un seul geste.",
      ],
      tricky: {
        3: "Dans cette mesure, le doigt 2 joue le la, pour que le pouce puisse descendre jusqu’au fa.",
        7: "Comme à la mesure 3, le doigt 2 joue le la, et le pouce descend jusqu’au fa.",
        12: "La main gauche joue le mi avec le pouce, puis ajoute le si en dessous avec le doigt 4.",
      },
    },
    epic: {
      practice: [
        "Joue la basse d’Alberti seule, jusqu’à ce qu’elle roule toute seule : grave, aigu, milieu, aigu.",
        "Joue seules les tierces de la main droite, et enfonce les deux notes de chaque paire d’un seul geste.",
        "Joue les huit premières mesures à deux mains, lentement.",
        "Joue tout le morceau à deux mains, à 75 % de la vitesse.",
        "Maintenant, joue-le au tempo, avec la pédale.",
      ],
      tips: [
        "Change de pédale à chaque nouvelle note de basse, deux fois par mesure.",
        "Le sol grave frotte contre le fa dièse tenu. Ce son âpre et triste est voulu.",
        "La mélodie est la note du haut de chaque paire : laisse le doigt du haut mener.",
      ],
      tricky: {
        8: "Dans la première moitié, la main gauche joue un la dièse. Puis elle revient à l’accord de si mineur pour la fin.",
        21: "Les doigts 3 et 5 tiennent le ré et le fa dièse. Puis le pouce commence la montée du si au mi.",
        24: "Profite du court silence pour ouvrir la main droite sur ré, fa dièse et si.",
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
        "Laisse les arpèges couler tout en douceur sous la mélodie, et change de pédale à chaque nouvel accord.",
        "Joue la note du haut de chaque accord un peu plus fort que les autres.",
      ],
      tricky: {
        12: "La main gauche monte deux fois sur deux octaves depuis le fa dièse. " +
          "Le doigt 3 passe par-dessus le pouce jusqu’au la dièse.",
        19: "Après l’accord, le doigt 2 prend le si. Puis le pouce descend jusqu’au sol, et le doigt 5 prend le ré.",
        23: "Comme à la mesure 19, le pouce descend jusqu’au sol, et le doigt 5 prend le ré.",
      },
    },
  },
};
