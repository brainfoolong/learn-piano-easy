/** The profile of *Learn Piano* in French. A text it leaves out shows in English. */
import { formatNumber, plural } from "../format";
import type { Translation } from "../translation";
import type { learnProfile as en } from "./learn-profile.en";

const n = (value: number) => formatNumber("fr", value);
/** A count of days, such as "1 jour", "3 jours" or "1 000 000 de jours". */
const days = (value: number) => `${n(value)} ${plural("fr", value, { one: "jour", many: "de jours", other: "jours" })}`;

export const learnProfile: Translation<typeof en> = {
  loading: "Chargement de ta progression…",
  level: {
    heading: "Niveau",
    name: (level: number) => `Niveau ${n(level)}`,
    total: (xp: number) => `${n(xp)} XP au total`,
    toNext: (level: number) => `Jusqu’au niveau ${n(level)}`,
  },
  streak: {
    heading: "Série",
    current: (count: number) => days(count),
    currentLabel: "d’affilée",
    best: (count: number) => `Record : ${days(count)}`,
    today: (xp: number, goal: number) =>
      xp >= goal
        ? `Aujourd’hui : ${n(xp)} XP, l’objectif de ${n(goal)} est atteint`
        : `Aujourd’hui : ${n(xp)} XP sur ${n(goal)}`,
  },
  calendar: {
    heading: "Les huit dernières semaines",
    label: (met: number, played: number) =>
      `Ces huit dernières semaines, ${days(met)} avec l’objectif atteint et ${days(played)} avec une leçon.`,
    met: "Objectif atteint",
    played: "Leçon jouée",
    none: "Pas de leçon",
  },
  stats: {
    heading: "Statistiques",
    lessons: "Leçons terminées",
    threeStars: "Leçons à trois étoiles",
    days: "Jours de pratique",
    badges: "Badges obtenus",
  },
  badges: {
    heading: "Badges",
    lead: (earned: number, all: number) =>
      `${n(earned)} sur ${n(all)} ${plural("fr", earned, { one: "obtenu", many: "obtenus", other: "obtenus" })}`,
    earned: (name: string) => `${name}, obtenu`,
    locked: (name: string) => `${name}, pas encore obtenu`,
  },
  choices: {
    heading: "Tes paramètres",
    goal: "Objectif du jour",
    goalHelp: "Les XP à gagner chaque jour pour garder ta série.",
    sounds: "Sons de récompense",
    soundsHelp: "Des carillons pour une étape réussie, une étoile, un nouveau niveau et un badge. Le piano sonne toujours.",
  },
  data: {
    heading: "Tes données",
    lead: "Ta progression reste dans ce navigateur. La page « Tes données » la sauvegarde avec tout le reste dans un seul fichier, et la restaure.",
    open: "Sauvegarder ou restaurer",
    reset: "Réinitialiser toute la progression",
    failed: "Impossible d’enregistrer. Rien n’a changé.",
    resetDone: "Ta progression est réinitialisée. Le fichier de sauvegarde contient toute ton ancienne progression.",
    close: "Fermer",
    cancel: "Garder ma progression",
    ask: {
      title: "Réinitialiser toute la progression ?",
      text: "Cela efface de ce navigateur tes leçons, tes étoiles, tes XP et tes badges. Tes paramètres restent.",
      next: "Continuer",
    },
    askAgain: {
      title: "Tu confirmes ?",
      text: "Un fichier de sauvegarde est d’abord enregistré, pour que tu puisses tout restaurer plus tard. Ensuite, ta progression repart de zéro.",
      confirm: "Réinitialiser ma progression",
    },
  },
};
