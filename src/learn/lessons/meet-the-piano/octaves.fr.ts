/** *Octaves* in French. */
import type { Translation } from "../../../i18n/translation";
import type { OctavesTexts } from "./octaves.en";

export const octavesFr: Translation<OctavesTexts> = {
  title: "Les octaves",
  steps: {
    "three-cs": {
      text: "Écoute trois do, du grave à l’aigu. Regarde où chacun se trouve sur le piano.",
    },
    "same-letter": {
      text: "Compte les touches blanches en montant à partir de do : do, ré, mi, fa, sol, la, si, puis de nouveau do. Le même nom revient sur la huitième touche blanche, en comptant celle de départ. Cet écart s’appelle une octave.",
    },
    "count-quiz": {
      text: "Combien de touches blanches y a-t-il d’un do au do suivant, en comptant les deux ?",
      answers: ["Cinq", "Huit", "Douze"],
    },
    "sound-alike": {
      text: "Deux notes à une octave d’écart se ressemblent, comme si c’était la même note. L’une est pourtant plus aiguë que l’autre.",
    },
    "octave-listen": {
      text: "Tu entends chaque fois deux notes. Par rapport à la première, la deuxième est-elle plus aiguë, plus grave ou pareille ?",
    },
    "e-above": {
      text: "Le premier mi au-dessus du do central se trouve deux touches blanches à sa droite. Joue le mi une octave au-dessus de ce mi.",
    },
    "c-below": {
      text: "Maintenant, dans l’autre sens. Joue le do une octave plus bas que le do central.",
    },
    "octave-pair": {
      text: "Joue toi-même une octave : le premier mi au-dessus du do central, puis le mi une octave plus haut. Écoute comme ils se ressemblent.",
    },
    "octave-quiz": {
      text: "Qu’est-ce qu’une octave ?",
      answers: [
        "Deux touches juste à côté l’une de l’autre",
        "Les deux touches noires d’un groupe",
        "L’écart entre une note et la note du même nom, huit touches blanches en comptant les deux",
      ],
    },
    recap: {
      text: "Bravo. Tu sais ce qu’est une octave.",
      points: [
        "Le même nom revient sur la huitième touche blanche, en comptant la première.",
        "Cet écart est une octave.",
        "Deux notes à une octave d’écart se ressemblent, et l’une est plus aiguë.",
      ],
    },
  },
};
