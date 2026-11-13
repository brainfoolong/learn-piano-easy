/** The badges of *Learn Piano* in Brazilian Portuguese. A text it leaves out shows in English. */
import type { Translation } from "../translation";
import type { learnBadges as en } from "./learn-badges.en";

export const learnBadges: Translation<typeof en> = {
  cheer: "Seu professor de piano aplaude você",
  fixed: {
    "first-note": { name: "Primeira nota", description: "Toque sua primeira nota em uma lição." },
    "first-lesson": { name: "Primeira lição", description: "Termine sua primeira lição." },
    "first-three-stars": { name: "Três estrelas", description: "Termine uma lição com três estrelas." },
    "three-stars-ten": { name: "Coleção de estrelas", description: "Ganhe três estrelas em dez lições." },
    "first-daily-goal": { name: "Meta alcançada", description: "Alcance sua meta diária pela primeira vez." },
    "streak-3": { name: "Três dias seguidos", description: "Alcance sua meta diária três dias seguidos." },
    "streak-7": { name: "Uma semana seguida", description: "Alcance sua meta diária sete dias seguidos." },
    "streak-30": { name: "Um mês seguido", description: "Alcance sua meta diária trinta dias seguidos." },
    "streak-100": { name: "Cem dias", description: "Alcance sua meta diária cem dias seguidos." },
    "notes-1000": { name: "Mil notas", description: "Toque mil notas nas lições." },
    "notes-10000": { name: "Dez mil notas", description: "Toque dez mil notas nas lições." },
    "rhythm-ace": { name: "Ás do ritmo", description: "Passe em um passo de ritmo na primeira tentativa." },
    "sight-reader": { name: "Olho de lince", description: "Leia dez notas seguidas sem nenhum erro." },
    "early-bird": { name: "Quem madruga", description: "Termine uma lição antes das 8 da manhã." },
    "night-owl": { name: "Coruja da noite", description: "Termine uma lição às 10 da noite ou mais tarde." },
    comeback: { name: "De volta!", description: "Volte para uma lição depois de uma semana longe." },
    legendary: { name: "Música difícil", description: "Toque até o fim a versão “Difícil” de uma das nossas músicas em Piano livre." },
  },
  world: {
    name: (world: string) => `${world}: domínio total`,
    description: (world: string) => `Vença o desafio final de “${world}”.`,
  },
};
