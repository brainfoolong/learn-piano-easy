/** The first setup of *Learn Piano* in French. A text it leaves out shows in English. */
import { formatNumber } from "../format";
import type { Translation } from "../translation";
import type { learnSetup as en } from "./learn-setup.en";

export const learnSetup: Translation<typeof en> = {
  title: "Bienvenue dans « Apprendre le piano »",
  welcome: "Salut ! Je vais t’apprendre le piano. Trois petites questions, et on joue.",
  mascot: "Le singe qui t’apprend le piano, au pelage couleur miel, en veste de velours côtelé",
  close: "Passer les questions",
  progress: "Premiers pas",
  steps: ["Ton piano", "Ton expérience", "Objectif du jour"],
  doneStep: "Terminé",
  next: "Continuer",
  device: {
    question: "Sur quoi vas-tu jouer ?",
    midi: { name: "Un clavier MIDI", text: "Un piano numérique ou un clavier, branché en USB." },
    computer: { name: "Le clavier de l’ordinateur", text: "Les touches des lettres jouent les notes." },
    screen: { name: "L’écran", text: "Appuie sur les touches à l’écran." },
    noMidi: "Ce navigateur ne gère pas le MIDI. Joue plutôt sur le clavier de l’ordinateur ou à l’écran.",
    check: "Appuie sur une touche, n’importe laquelle, pour vérifier qu’on l’entend.",
    checkMidi: "Joue une touche de ton clavier MIDI, n’importe laquelle.",
    checkComputer: "Appuie sur une touche de lettre, comme Q, W ou E.",
    checkScreen: "Appuie sur une touche ci-dessous.",
    heard: (note: string) => `On t’entend : c’était ${note}.`,
    keys: "Un piano pour essayer",
    skip: "Passer la vérification",
    marks: { next: "Essaie cette touche", correct: "Entendu", mistake: "Entendu" },
  },
  before: {
    question: "As-tu déjà joué du piano ?",
    never: "Jamais",
    little: "Un peu",
    yes: "Oui, je sais jouer",
    skipTests: "Chaque monde de la carte a un test pour passer le monde. Réussis-le pour ouvrir d’un coup toutes les leçons de ce monde.",
  },
  goal: {
    question: "Combien par jour ?",
    lead: "Atteins ton objectif chaque jour pour faire grandir ta série. Une nouvelle leçon avec trois étoiles rapporte 30 XP.",
    label: "Objectif du jour",
    names: { "10": "Détente", "20": "Régularité", "30": "Ardeur", "50": "Audace" },
    option: (xp: number, name: string) => `${formatNumber("fr", xp)} XP, ${name}`,
    start: "Commencer à apprendre",
  },
};
