/** *Phrases* in French. */
import type { Translation } from "../../../i18n/translation";
import type { PhrasesTexts } from "./phrases.en";

export const phrasesFr: Translation<PhrasesTexts> = {
  title: "Les phrases",
  steps: {
    "phrase-demo": {
      text: "Écoute deux petites mélodies, l’une après l’autre. La première semble poser une question, et la seconde y répond. Écoute bien la petite respiration entre les deux.",
    },
    "musical-sentences": {
      text: "La musique parle par phrases, comme toi. Une phrase musicale est une idée complète, comme une phrase parlée. Elle dure souvent quatre mesures.",
    },
    "what-is-a-phrase": {
      text: "Qu’est-ce qu’une phrase musicale ?",
      answers: ["Une seule note forte", "Une idée musicale complète, souvent de quatre mesures", "Un accord brisé", "Un signe qui veut dire jouer vite"],
    },
    "the-long-slur": {
      text: "Une courte liaison relie quelques notes legato. Une longue liaison sur plusieurs mesures marque toute une phrase. Joue ses notes comme une seule ligne fluide.",
    },
    "slur-shows": {
      text: "Une longue liaison s’étend sur quatre mesures. Que montre-t-elle ?",
      answers: ["Une phrase, jouée comme une seule ligne fluide", "Quatre notes fortes", "Lever la main après chaque note", "Garder la pédale enfoncée"],
    },
    "play-question": {
      text: "Joue la première phrase, la main droite en position de do : do-ré-mi-fa, sol, mi, fa-mi-ré-mi, et finis sur ré. Garde-la fluide.",
    },
    breathe: {
      text: "À la fin d’une phrase, lève un peu la main, comme on reprend son souffle en chantant. Puis commence la phrase suivante.",
    },
    "question-and-answer": {
      text: "Joue la première phrase et lève la main après son dernier ré. Puis joue la seconde : do-ré-mi-fa, sol, mi, fa-mi-ré-ré, et finis sur do.",
    },
    "open-and-home": {
      text: "La première phrase finit sur ré, alors elle sonne ouverte, comme une question. La seconde finit sur do, la note où do majeur trouve son repos, comme une réponse.",
    },
    "which-ends-answer": {
      text: "En do majeur, sur quelle note une phrase doit-elle finir pour sonner terminée, comme une réponse ?",
      answers: ["Ré", "Fa", "Si", "Do"],
    },
    "rise-and-fall-demo": {
      text: "Écoute une phrase. Elle commence avec un son doux, devient plus forte jusqu’au sol, puis diminue vers sa fin.",
    },
    "where-loudest": {
      text: "Où une phrase est-elle souvent la plus forte ?",
      answers: ["Sur sa première note", "Sur sa dernière note", "Vers son milieu ou sur sa note la plus haute", "Nulle part, elle reste pareille"],
    },
    "shape-both-phrases": {
      text: "Joue deux phrases à la main droite, en partant du do central, et respire entre les deux. Joue d’abord do ré mi fa sol, mi fa mi ré, mi ré, puis do ré mi fa sol, mi fa mi ré, ré do. Seules les notes sont vérifiées, alors laisse ton oreille rendre chaque phrase plus forte vers son sol et plus douce vers sa fin.",
    },
    "when-to-breathe": {
      text: "Quand lèves-tu la main pour respirer ?",
      answers: ["Après chaque note", "Entre deux phrases", "Au milieu d’une phrase", "Jamais"],
    },
    recap: {
      text: "Bravo. Tu sais maintenant jouer la musique par phrases.",
      points: [
        "Une phrase est une idée musicale complète, souvent de quatre mesures.",
        "Une longue liaison montre une phrase. Joue-la comme une seule ligne fluide.",
        "Lève la main pour respirer entre deux phrases.",
        "Une phrase pose souvent une question ou y répond, et devient plus forte, puis plus douce.",
      ],
    },
  },
};
