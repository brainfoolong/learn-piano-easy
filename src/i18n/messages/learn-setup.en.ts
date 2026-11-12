/** The first-visit setup of *Learn Piano*, in English. */
import { formatNumber } from "../format";

export const learnSetup = {
  title: "Welcome to Learn Piano",
  /** What the mascot says on the first question, and what its picture shows. */
  welcome: "Hi, I am your piano teacher. Three quick questions, and then we play.",
  mascot: "Your piano teacher, an ape with honey fur in a corduroy jacket",
  close: "Skip the setup",
  progress: "Setup",
  steps: ["Your piano", "Your experience", "Your daily goal"],
  doneStep: "Done",
  next: "Continue",
  /** What the learner plays on, and the check that hears a key. */
  device: {
    question: "What will you play on?",
    midi: { name: "A MIDI keyboard", text: "A digital piano or keyboard, plugged in by USB." },
    computer: { name: "The computer keyboard", text: "The letter keys play the notes." },
    screen: { name: "The screen", text: "Tap or click the keys on the screen." },
    noMidi: "This browser has no MIDI. Play on the computer keyboard or the screen instead.",
    check: "Press any key to check that we hear it.",
    checkMidi: "Press any key on your MIDI keyboard.",
    checkComputer: "Press a letter key such as Q, W or E.",
    checkScreen: "Tap a key below.",
    heard: (note: string) => `We hear you: that was ${note}.`,
    keys: "A piano to try",
    skip: "Skip the check",
    marks: { next: "Try this key", correct: "Heard", mistake: "Heard" },
  },
  /** Whether the learner has played before. */
  before: {
    question: "Have you played the piano before?",
    never: "Never",
    little: "A little",
    yes: "Yes, I can play",
    skipTests: "Each world on the map has a skip test. Pass it to open every lesson of that world at once.",
  },
  /** The daily goal. */
  goal: {
    question: "How much a day?",
    lead: "Reach your goal each day to grow your streak. A new lesson with three stars earns 30 XP.",
    label: "Daily goal",
    names: { "10": "Easy", "20": "Steady", "30": "Keen", "50": "Bold" },
    option: (xp: number, name: string) => `${formatNumber("en", xp)} XP, ${name}`,
    start: "Start learning",
  },
};
