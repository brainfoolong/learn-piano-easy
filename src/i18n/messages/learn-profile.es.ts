/** The profile of *Learn Piano* in Spanish. A text it leaves out shows in English. */
import { formatNumber, plural } from "../format";
import type { Translation } from "../translation";
import type { learnProfile as en } from "./learn-profile.en";

const n = (value: number) => formatNumber("es", value);
const days = (value: number) => `${n(value)} ${plural("es", value, { one: "día", many: "de días", other: "días" })}`;

export const learnProfile: Translation<typeof en> = {
  loading: "Cargando tu progreso…",
  level: {
    heading: "Nivel",
    name: (level: number) => `Nivel ${n(level)}`,
    total: (xp: number) => `${n(xp)} XP en total`,
    toNext: (level: number) => `Hasta el nivel ${n(level)}`,
  },
  streak: {
    heading: "Racha",
    current: (count: number) => days(count),
    currentLabel: "de racha actual",
    best: (count: number) => `Récord: ${days(count)}`,
    today: (xp: number, goal: number) =>
      xp >= goal ? `Hoy: ${n(xp)} XP, meta de ${n(goal)} cumplida` : `Hoy: ${n(xp)} de ${n(goal)} XP`,
  },
  calendar: {
    heading: "Las últimas ocho semanas",
    label: (met: number, played: number) =>
      `En las últimas ocho semanas alcanzaste la meta en ${days(met)} e hiciste una lección en ${days(played)}.`,
    met: "Meta cumplida",
    played: "Con lección",
    none: "Sin lección",
  },
  stats: {
    heading: "Estadísticas",
    lessons: "Lecciones terminadas",
    threeStars: "Lecciones con tres estrellas",
    days: "Días de práctica",
    badges: "Insignias ganadas",
  },
  badges: {
    heading: "Insignias",
    lead: (earned: number, all: number) => `${n(earned)} de ${n(all)} ganadas`,
    earned: (name: string) => `${name}, ganada`,
    locked: (name: string) => `${name}, aún sin ganar`,
  },
  choices: {
    heading: "Tu configuración",
    goal: "Meta diaria",
    goalHelp: "Los XP que necesita un día para mantener tu racha.",
    sounds: "Sonidos de premio",
    soundsHelp: "Campanitas al superar un paso, ganar una estrella, subir de nivel y obtener una insignia. El piano siempre suena.",
  },
  data: {
    heading: "Tus datos",
    lead: "Tu progreso se queda en este navegador. La página «Tus datos» lo guarda junto con todo lo demás en un archivo, y también lo restaura.",
    open: "Guardar copia o restaurar",
    reset: "Restablecer todo el progreso",
    failed: "El navegador no permitió guardar. No cambió nada.",
    resetDone: "Se restableció tu progreso. El archivo de copia de seguridad guarda todo lo que tenía.",
    close: "Cerrar",
    cancel: "Conservar mi progreso",
    ask: {
      title: "¿Restablecer todo el progreso?",
      text: "Esto elimina de este navegador cada lección, estrella, punto de XP e insignia. Tu configuración no cambia.",
      next: "Continuar",
    },
    askAgain: {
      title: "¿Seguro que quieres hacerlo?",
      text: "Primero se guarda una copia de seguridad, así podrás restaurar todo más tarde. Luego tu progreso empieza de cero.",
      confirm: "Restablecer mi progreso",
    },
  },
};
