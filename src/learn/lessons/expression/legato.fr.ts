/** *Legato* in French. */
import type { Translation } from "../../../i18n/translation";
import type { LegatoTexts } from "./legato.en";

export const legatoFr: Translation<LegatoTexts> = {
  title: "Le legato",
  steps: {
    "legato-demo": {
      text: "Écoute la montée de do à sol, puis la descente. Chaque note coule dans la suivante, sans aucun trou entre elles.",
    },
    "smooth-and-connected": {
      text: "Jouer de façon fluide et liée s’appelle legato. Les notes s’enchaînent comme les mots d’une chanson chantée d’un seul souffle.",
    },
    "what-legato-means": {
      text: "Que veut dire legato ?",
      answers: ["Très fort", "Très vite", "Avec un silence après chaque note", "Fluide et lié"],
    },
    "hand-over": {
      text: "Pour jouer legato, relâche une touche au moment où la suivante s’enfonce. Un doigt se lève pendant que le suivant descend.",
    },
    "five-notes-legato": {
      text: "Joue do, ré, mi, fa et sol avec les doigts 1 à 5, en partant du do central. Enchaîne chaque note avec la suivante, sans trou.",
    },
    "when-to-let-go": {
      text: "Tu joues legato. Quand un doigt quitte-t-il sa touche ?",
      answers: ["Avant que la touche suivante s’enfonce", "Au moment où la touche suivante s’enfonce", "Bien après la touche suivante", "Seulement à la fin du morceau"],
    },
    "the-slur": {
      text: "Une ligne courbe au-dessus ou au-dessous d’un groupe de notes est une liaison. Elle te demande de jouer ces notes legato.",
    },
    "what-a-slur-asks": {
      text: "Une ligne courbe relie cinq notes. Comment les joues-tu ?",
      answers: ["Chaque note courte", "De plus en plus fort", "Fluide et lié", "Toutes en même temps"],
    },
    "slurred-phrase": {
      text: "Une liaison relie cette phrase : sol, fa, mi, ré, do, puis ré et mi. Joue-la legato, chaque doigt passant le relais au suivant.",
    },
    "fingers-make-it": {
      text: "Le legato demande un doigt libre pour chaque note suivante. Dans une gamme, le pouce passe dessous, pour que la ligne ne se brise jamais.",
    },
    "scale-legato": {
      text: "Joue la gamme de do majeur en montant depuis le do central, avec les doigts 1, 2 et 3, puis passe le pouce dessous pour jouer le fa. Garde chaque note liée à la suivante.",
    },
    "which-move-keeps-it-smooth": {
      text: "Tu joues la gamme de do majeur en montant, legato. Après le mi avec le doigt 3, comment atteins-tu le fa ?",
      answers: ["Passer le pouce dessous pour jouer le fa", "Lever la main et sauter jusqu’au fa", "Jouer le fa avec le doigt 3, comme le mi", "Ne pas jouer le fa"],
    },
    "both-hands-legato": {
      text: "Joue de do à sol à deux mains ensemble, la main gauche une octave plus bas. Garde un jeu bien lié aux deux mains.",
    },
    "which-is-legato": {
      text: "Quelles notes joues-tu legato ?",
      answers: ["Des notes suivies chacune d’un silence", "Des notes toutes sur la même touche", "Des notes éloignées qui demandent un saut", "Des notes sous une liaison"],
    },
    recap: {
      text: "Bravo. Tu sais maintenant jouer de façon fluide et liée.",
      points: [
        "Legato veut dire fluide et lié.",
        "Relâche une touche au moment où la suivante s’enfonce.",
        "Une liaison, la ligne courbe, marque les notes à jouer legato.",
        "Un bon doigté, comme le passage du pouce, garde la ligne liée.",
      ],
    },
  },
};
