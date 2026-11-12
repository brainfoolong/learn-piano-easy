/** The first-visit setup of *Learn Piano* in German. It satisfies the English section's type, so it holds every text. */
import { formatNumber } from "../format";
import type { learnSetup as en } from "./learn-setup.en";

export const learnSetup: typeof en = {
  title: "Willkommen bei Klavier lernen",
  welcome: "Hallo, ich bin dein Klavierlehrer. Drei kurze Fragen, dann spielen wir.",
  mascot: "Dein Klavierlehrer, ein Affe mit honigfarbenem Fell in einer Cordjacke",
  close: "Einrichtung überspringen",
  progress: "Einrichtung",
  steps: ["Dein Klavier", "Deine Erfahrung", "Dein Tagesziel"],
  doneStep: "Erledigt",
  next: "Weiter",
  device: {
    question: "Worauf spielst du?",
    midi: { name: "Ein MIDI-Keyboard", text: "Ein Digitalpiano oder Keyboard, per USB angeschlossen." },
    computer: { name: "Die Computertastatur", text: "Die Buchstabentasten spielen die Noten." },
    screen: { name: "Der Bildschirm", text: "Tippe oder klicke auf die Tasten am Bildschirm." },
    noMidi: "Dieser Browser kann kein MIDI. Spiel stattdessen auf der Computertastatur oder am Bildschirm.",
    check: "Drück eine beliebige Taste, um zu prüfen, ob wir sie hören.",
    checkMidi: "Drück eine beliebige Taste auf deinem MIDI-Keyboard.",
    checkComputer: "Drück eine Buchstabentaste wie Q, W oder E.",
    checkScreen: "Tippe unten auf eine Taste.",
    heard: (note) => `Wir hören dich: Das war ${note}.`,
    keys: "Ein Klavier zum Ausprobieren",
    skip: "Prüfung überspringen",
    marks: { next: "Probier diese Taste", correct: "Gehört", mistake: "Gehört" },
  },
  before: {
    question: "Hast du schon einmal Klavier gespielt?",
    never: "Noch nie",
    little: "Ein bisschen",
    yes: "Ja, ich kann spielen",
    skipTests: "Jede Welt auf der Karte hat einen Einstufungstest. Besteh ihn, um alle Lektionen dieser Welt auf einmal zu öffnen.",
  },
  goal: {
    question: "Wie viel am Tag?",
    lead: "Erreiche dein Ziel jeden Tag, damit deine Serie wächst. Eine neue Lektion mit drei Sternen bringt 30 XP.",
    label: "Tagesziel",
    names: { "10": "Locker", "20": "Stetig", "30": "Eifrig", "50": "Mutig" },
    option: (xp, name) => `${formatNumber("de", xp)} XP, ${name}`,
    start: "Los geht’s",
  },
};
