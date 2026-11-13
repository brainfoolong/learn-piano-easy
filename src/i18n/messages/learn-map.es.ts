/** The map of *Learn Piano* in Spanish. A text it leaves out shows in English. */
import { formatNumber, plural } from "../format";
import type { Translation } from "../translation";
import type { learnMap as en } from "./learn-map.en";

export const learnMap: Translation<typeof en> = {
  lead: "Recorre el camino lección a lección. Cada mundo termina con un jefe final.",
  loading: "Cargando el curso…",
  continue: "Continuar",
  nextUp: "A continuación",
  world: (n: number) => `Mundo ${formatNumber("es", n)}`,
  progress: (done: number, all: number) =>
    `${formatNumber("es", done)} de ${formatNumber("es", all)} ${plural("es", all, { one: "lección", many: "de lecciones", other: "lecciones" })}`,
  locked: "Vence al jefe final del mundo anterior o aprueba la prueba de salto de este mundo para abrirlo.",
  beaten: "Superado",
  node: {
    locked: (name: string) => `${name}, bloqueada`,
    open: (name: string) => `${name}, abierta`,
    done: (name: string, stars: number) => `${name}, ${formatNumber("es", stars)} de 3 estrellas`,
  },
  medal: (world: string, earned: boolean) => `Insignia de «${world}», ${earned ? "ganada" : "aún sin ganar"}`,
  skipTest: {
    title: (world: string) => `Prueba de salto: ${world}`,
    text: "¿Ya sabes esto? Aprueba la prueba de salto para abrir todas las lecciones de este mundo.",
    action: "Hacer la prueba de salto",
  },
  bar: {
    label: "Tu progreso",
    streak: (days: number) => `Racha de ${formatNumber("es", days)} ${plural("es", days, { one: "día", many: "de días", other: "días" })}`,
    level: (level: number) => `Nivel ${formatNumber("es", level)}`,
    today: "Hoy",
    todayGoal: (xp: number, goal: number) => `Hoy: ${formatNumber("es", xp)} de ${formatNumber("es", goal)} XP`,
    days: (days: number) => `${formatNumber("es", days)} ${plural("es", days, { one: "día", many: "de días", other: "días" })}`,
  },
};
