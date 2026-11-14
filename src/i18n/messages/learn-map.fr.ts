/** The world map of *Learn Piano* in French. A text it leaves out shows in English. */
import { formatNumber, plural } from "../format";
import type { Translation } from "../translation";
import type { learnMap as en } from "./learn-map.en";

const n = (value: number) => formatNumber("fr", value);
/** A count and its noun, such as "1 leçon", "3 leçons" or "1 000 000 de leçons". */
const count = (value: number, one: string, other: string, many = `de ${other}`) =>
  plural("fr", value, { one: `${n(value)} ${one}`, many: `${n(value)} ${many}`, other: `${n(value)} ${other}` });
const days = (value: number) => count(value, "jour", "jours");

export const learnMap: Translation<typeof en> = {
  lead: "Avance sur le chemin, une leçon après l’autre. Chaque monde se termine par une épreuve finale.",
  loading: "Chargement du cours…",
  continue: "Continuer",
  nextUp: "À suivre",
  world: (world: number) => `Monde ${n(world)}`,
  progress: (done: number, all: number) => `${count(done, "leçon", "leçons")} sur ${n(all)}`,
  locked: "Pour ouvrir ce monde, réussis l’épreuve finale du monde précédent ou le test pour passer ce monde.",
  beaten: "Réussi",
  node: {
    locked: (name: string) => `${name}, leçon verrouillée`,
    open: (name: string) => `${name}, leçon ouverte`,
    done: (name: string, stars: number) => `${name}, ${count(stars, "étoile", "étoiles", "d’étoiles")} sur ${n(3)}`,
  },
  medal: (world: string, earned: boolean) => `Badge « ${world} », ${earned ? "obtenu" : "pas encore obtenu"}`,
  skipTest: {
    title: (world: string) => `Test pour passer le monde : ${world}`,
    text: "Tu sais déjà tout ça ? Réussis le test pour ouvrir toutes les leçons de ce monde.",
    action: "Faire le test",
  },
  bar: {
    label: "Ta progression",
    streak: (value: number) => `${days(value)} d’affilée`,
    level: (level: number) => `Niveau ${n(level)}`,
    today: "Aujourd’hui",
    todayGoal: (xp: number, goal: number) => `Aujourd’hui : ${n(xp)} XP sur ${n(goal)}`,
    days: (value: number) => days(value),
  },
};
