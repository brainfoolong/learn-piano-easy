/** The badges of *Learn Piano* in French. A text it leaves out shows in English. */
import type { Translation } from "../translation";
import type { learnBadges as en } from "./learn-badges.en";

export const learnBadges: Translation<typeof en> = {
  cheer: "Le singe qui t’apprend le piano t’applaudit",
  fixed: {
    "first-note": { name: "Première note", description: "Joue ta première note dans une leçon." },
    "first-lesson": { name: "Première leçon", description: "Termine ta première leçon." },
    "first-three-stars": { name: "Trois étoiles", description: "Termine une leçon avec trois étoiles." },
    "three-stars-ten": { name: "Pluie d’étoiles", description: "Gagne trois étoiles dans dix leçons." },
    "first-daily-goal": { name: "Objectif atteint", description: "Atteins ton objectif du jour pour la première fois." },
    "streak-3": { name: "Trois jours d’affilée", description: "Atteins ton objectif du jour trois jours d’affilée." },
    "streak-7": { name: "Une semaine d’affilée", description: "Atteins ton objectif du jour sept jours d’affilée." },
    "streak-30": { name: "Un mois d’affilée", description: "Atteins ton objectif du jour trente jours d’affilée." },
    "streak-100": { name: "Cent jours", description: "Atteins ton objectif du jour cent jours d’affilée." },
    "notes-1000": { name: "Mille notes", description: "Joue mille notes dans les leçons." },
    "notes-10000": { name: "Dix mille notes", description: "Joue dix mille notes dans les leçons." },
    "rhythm-ace": { name: "Le rythme dans la peau", description: "Réussis une étape de rythme du premier coup." },
    "sight-reader": { name: "Œil de lynx", description: "Lis dix notes d’affilée sans erreur." },
    "early-bird": { name: "Chant du coq", description: "Termine une leçon avant 8 h du matin." },
    "night-owl": { name: "Hibou", description: "Termine une leçon à 22 h ou plus tard." },
    comeback: { name: "Te revoilà", description: "Reviens faire une leçon après une semaine d’absence." },
    legendary: {
      name: "Morceau difficile",
      description: "Joue jusqu’au bout la version Difficile d’un de nos morceaux dans « Jouer librement ».",
    },
  },
  world: {
    name: (world: string) => `Monde « ${world} » maîtrisé`,
    description: (world: string) => `Réussis l’épreuve finale du monde « ${world} ».`,
  },
};
