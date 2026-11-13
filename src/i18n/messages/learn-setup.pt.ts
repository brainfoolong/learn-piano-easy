/** The first-visit setup of *Learn Piano* in Brazilian Portuguese. A text it leaves out shows in English. */
import { formatNumber } from "../format";
import type { Translation } from "../translation";
import type { learnSetup as en } from "./learn-setup.en";

export const learnSetup: Translation<typeof en> = {
  title: "Boas-vindas ao Aprenda piano",
  welcome: "Olá! Sou seu professor de piano. Três perguntas rápidas, e depois vamos tocar.",
  mascot: "Seu professor de piano, um macaco de pelo cor de mel com um paletó de veludo cotelê",
  close: "Pular a configuração",
  progress: "Configuração",
  steps: ["Seu piano", "Sua experiência", "Sua meta diária"],
  doneStep: "Concluído",
  next: "Continuar",
  device: {
    question: "Em que você vai tocar?",
    midi: { name: "Um teclado MIDI", text: "Um piano digital ou um teclado, conectado por USB." },
    computer: { name: "O teclado do computador", text: "As teclas de letras tocam as notas." },
    screen: { name: "A tela", text: "Selecione as teclas na tela com o dedo ou o mouse." },
    noMidi: "Este navegador não tem MIDI. Toque no teclado do computador ou na tela.",
    check: "Toque qualquer tecla para conferir se ouvimos.",
    checkMidi: "Toque qualquer tecla do seu teclado MIDI.",
    checkComputer: "Pressione uma tecla de letra, como Q, W ou E.",
    checkScreen: "Toque uma tecla aqui embaixo.",
    heard: (note: string) => `Ouvimos você: foi ${note}.`,
    keys: "Um piano para experimentar",
    skip: "Pular o teste",
    marks: { next: "Experimente esta tecla", correct: "Ouvida", mistake: "Ouvida" },
  },
  before: {
    question: "Já tocou piano antes?",
    never: "Nunca",
    little: "Um pouco",
    yes: "Sim, sei tocar",
    skipTests: "Cada mundo do mapa tem um teste de avanço. Passe nele para abrir de uma vez todas as lições desse mundo.",
  },
  goal: {
    question: "Quanto por dia?",
    lead: "Alcance sua meta todo dia para a sua sequência crescer. Uma lição nova com três estrelas dá 30 XP.",
    label: "Meta diária",
    names: { "10": "Com calma", "20": "Constante", "30": "Com vontade", "50": "Com tudo" },
    option: (xp: number, name: string) => `${formatNumber("pt", xp)} XP, ${name}`,
    start: "Começar a aprender",
  },
};
