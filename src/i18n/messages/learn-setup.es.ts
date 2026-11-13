/** The first-visit setup of *Learn Piano* in Spanish. A text it leaves out shows in English. */
import { formatNumber } from "../format";
import type { Translation } from "../translation";
import type { learnSetup as en } from "./learn-setup.en";

export const learnSetup: Translation<typeof en> = {
  title: "Te damos la bienvenida a Aprende piano",
  welcome: "¡Hola! Soy tu profe de piano. Tres preguntas rápidas y luego tocamos.",
  mascot: "Tu profe de piano, un simio de pelaje color miel con chaqueta de pana",
  close: "Omitir la configuración",
  progress: "Configuración inicial",
  steps: ["Tu piano", "Tu experiencia", "Tu meta diaria"],
  doneStep: "Listo",
  next: "Continuar",
  device: {
    question: "¿En qué vas a tocar?",
    midi: { name: "Un teclado MIDI", text: "Un piano digital o un teclado conectado por USB." },
    computer: { name: "El teclado de la computadora", text: "Las teclas de letras tocan las notas." },
    screen: { name: "La pantalla", text: "Toca o haz clic en las teclas de la pantalla." },
    noMidi: "Este navegador no tiene MIDI. Toca en el teclado de la computadora o en la pantalla.",
    check: "Presiona cualquier tecla para comprobar que la oímos.",
    checkMidi: "Presiona cualquier tecla de tu teclado MIDI.",
    checkComputer: "Presiona una tecla de letra, como Q, W o E.",
    checkScreen: "Toca una tecla de abajo.",
    heard: (note: string) => `Te oímos: fue ${note}.`,
    keys: "Un piano para probar",
    skip: "Omitir la prueba",
    marks: { next: "Prueba esta tecla", correct: "Se oyó", mistake: "Se oyó" },
  },
  before: {
    question: "¿Ya tocaste el piano antes?",
    never: "Nunca",
    little: "Un poco",
    yes: "Sí, sé tocar",
    skipTests: "Cada mundo del mapa tiene una prueba de salto. Apruébala para abrir de una vez todas las lecciones de ese mundo.",
  },
  goal: {
    question: "¿Cuánto al día?",
    lead: "Alcanza tu meta cada día para que crezca tu racha. Una lección nueva con tres estrellas da 30 XP.",
    label: "Meta diaria",
    names: { "10": "Con calma", "20": "Constante", "30": "Con ganas", "50": "A fondo" },
    option: (xp: number, name: string) => `${formatNumber("es", xp)} XP, ${name}`,
    start: "Empezar a aprender",
  },
};
