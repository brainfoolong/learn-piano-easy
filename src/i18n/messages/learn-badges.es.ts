/** The badges of *Learn Piano* in Spanish. A text it leaves out shows in English. */
import type { Translation } from "../translation";
import type { learnBadges as en } from "./learn-badges.en";

export const learnBadges: Translation<typeof en> = {
  cheer: "Tu profe de piano te aplaude",
  fixed: {
    "first-note": { name: "Primera nota", description: "Toca tu primera nota en una lección." },
    "first-lesson": { name: "Primera lección", description: "Termina tu primera lección." },
    "first-three-stars": { name: "Tres estrellas", description: "Termina una lección con tres estrellas." },
    "three-stars-ten": { name: "Coleccionista de estrellas", description: "Consigue tres estrellas en diez lecciones." },
    "first-daily-goal": { name: "Meta cumplida", description: "Alcanza tu meta diaria por primera vez." },
    "streak-3": { name: "Tres días seguidos", description: "Alcanza tu meta diaria tres días seguidos." },
    "streak-7": { name: "Una semana sin parar", description: "Alcanza tu meta diaria siete días seguidos." },
    "streak-30": { name: "Un mes entero", description: "Alcanza tu meta diaria treinta días seguidos." },
    "streak-100": { name: "Cien días de racha", description: "Alcanza tu meta diaria cien días seguidos." },
    "notes-1000": { name: "Mil notas", description: "Toca mil notas en las lecciones." },
    "notes-10000": { name: "Diez mil notas", description: "Toca diez mil notas en las lecciones." },
    "rhythm-ace": { name: "As del ritmo", description: "Supera un paso de ritmo a la primera." },
    "sight-reader": { name: "Ojo de lince", description: "Lee diez notas seguidas sin un solo error." },
    "early-bird": { name: "Canto del gallo", description: "Termina una lección antes de las 8 de la mañana." },
    "night-owl": { name: "Búho nocturno", description: "Termina una lección a las 10 de la noche o más tarde." },
    comeback: { name: "¡Qué gusto verte!", description: "Vuelve a hacer una lección después de una semana sin venir." },
    legendary: { name: "Gran desafío", description: "Toca hasta el final la versión «Difícil» de una de nuestras canciones en Piano libre." },
  },
  world: {
    name: (world: string) => `${world}: dominio total`,
    description: (world: string) => `Vence al jefe final de «${world}».`,
  },
};
