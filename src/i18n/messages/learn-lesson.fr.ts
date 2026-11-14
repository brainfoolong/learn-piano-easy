/** The lesson view of *Learn Piano* in French. A text it leaves out shows in English. */
import { formatNumber, plural } from "../format";
import type { Translation } from "../translation";
import type { learnLesson as en } from "./learn-lesson.en";

const n = (value: number) => formatNumber("fr", value);
const percent = (value: number) => `${n(value)} %`;
/** A count and its noun, such as "1 note", "3 notes" or "1 000 000 de notes". */
const count = (value: number, one: string, other: string, many = `de ${other}`) =>
  plural("fr", value, { one: `${n(value)} ${one}`, many: `${n(value)} ${many}`, other: `${n(value)} ${other}` });
/** A count of beats, such as "1 temps" or "4 temps". */
const beats = (value: number) => count(value, "temps", "temps");

export const learnLesson: Translation<typeof en> = {
  stepOf: (step: number, total: number) => `Étape ${n(step)} sur ${n(total)}`,
  leave: "Quitter la leçon",
  leaveDialog: {
    title: "Quitter cette leçon ?",
    body: "Ta progression dans cette leçon n’est gardée qu’une fois la leçon terminée.",
    stay: "Continuer la leçon",
    leave: "Quitter",
    close: "Fermer",
  },
  lacks: {
    touch: "Mon clavier ne fait pas la différence entre fort et doux",
    pedal: "Mon clavier n’a pas de pédale",
  },
  loading: "Chargement de la leçon…",
  missing: "Cette leçon n’existe pas.",
  backToCourse: "Retour au cours",
  band: {
    continue: "Continuer",
    right: "Exact !",
    tryAgain: "Presque. Essaie encore une fois.",
  },
  demo: {
    play: "Écouter",
    playAgain: "Réécouter",
    skip: "Passer",
    piano: "Le piano qui joue l’exemple",
    playing: "Lecture en cours",
    slow: "Au ralenti",
    side: "Vue de côté",
  },
  quiz: {
    answers: "Réponses",
    wrong: "Presque. Essaie une autre réponse.",
    hint: "La réponse en surbrillance est la bonne.",
  },
  findKey: {
    piano: "Le piano. Joue la touche que l’étape indique.",
    marks: { next: "Cette touche", correct: "Exact", mistake: "Pas celle-ci" },
    wrong: "C’est une autre touche. Essaie encore une fois.",
    hint: "La touche en surbrillance est la bonne.",
    timeUp: "Le temps est écoulé.",
    secondsLeft: (seconds: number) => `${n(seconds)} s`,
  },
  playNotes: {
    piano: "Le piano. Joue la phrase dans l’ordre.",
    marks: { next: "À jouer ensuite", correct: "Jouée", mistake: "Pas celle-ci" },
    wrong: "C’est une autre note. Essaie encore une fois.",
    hint: (note: string) => `La note suivante est ${note}.`,
    hintChord: (...notes: string[]) => `Maintenant, joue ${notes.slice(0, -1).join(", ")} et ${notes.at(-1)} ensemble.`,
    expression: {
      "too-loud": "C’est la bonne touche, mais trop fort. Joue-la plus doux.",
      "too-soft": "C’est la bonne touche, mais pas assez fort. Joue-la plus fort.",
      "pedal-up": "Bonne touche. Garde la pédale enfoncée pendant que tu joues la note.",
      "pedal-down": "Bonne touche. Relève la pédale avant de jouer la note.",
    },
  },
  listen: {
    question: (pair: number, total: number) => `Paire ${n(pair)} sur ${n(total)}`,
    playAgain: "Réécouter",
    group: "Le deuxième son est-il plus aigu, plus grave ou pareil ?",
    answers: { higher: "Plus aigu", lower: "Plus grave", same: "Pareil" },
    wrong: "Presque. Réécoute et essaie une autre réponse.",
    hint: "La réponse en surbrillance est la bonne.",
    roundAgain: (right: number, asked: number) =>
      `${count(right, "bonne réponse", "bonnes réponses")} sur ${n(asked)}. On refait une manche.`,
  },
  readNote: {
    staff: { treble: "Une note sur la portée en clef de sol", bass: "Une note sur la portée en clef de fa" },
    count: (note: number, total: number) => `Note ${n(note)} sur ${n(total)}`,
    answers: "Noms des notes",
    letters: { C: "Do", D: "Ré", E: "Mi", F: "Fa", G: "Sol", A: "La", B: "Si" },
    piano: "Le piano. Joue la note de la portée.",
    marks: { next: "Cette touche", correct: "Exact", mistake: "Pas celle-ci" },
    wrongName: "C’est une autre note. Regarde encore.",
    wrongKey: "C’est une autre touche. Essaie encore une fois.",
    hintName: "Le nom en surbrillance est le bon.",
    hintKey: "La touche en surbrillance est la bonne.",
    again: "Quelques réponses étaient fausses. On les reprend.",
  },
  rhythmTap: {
    start: "Démarrer",
    listen: "Écoute : une mesure de décompte.",
    tap: "Maintenant, appuie sur une touche au choix à chaque clic.",
    piano: "La zone de frappe. Appuie sur une touche, sur le temps.",
    marks: { next: "Appuie ici", correct: "Sur le temps", mistake: "À côté du temps" },
    short: (hits: number, total: number) =>
      `Tu as tapé ${beats(hits)} sur ${n(total)}. Essaie encore une fois.`,
    hint: "Appuie au moment où tu entends le clic. Les points clignotent sur le temps.",
    play: "Maintenant, joue chaque note sur son clic.",
    phrasePiano: "Les touches. Joue la phrase en rythme avec les clics.",
    shortNotes: (hits: number, notes: number) =>
      `Tu as joué ${count(hits, "note", "notes")} sur ${n(notes)} en rythme. Essaie encore une fois.`,
    restSounded: "Une touche a sonné pendant un silence. Lève le doigt et ne joue rien à cet endroit.",
    phraseHint: "Joue chaque note sur son clic, et relâche la touche avant un silence. Les points clignotent sur le temps.",
    pattern: {
      taps: (countIn: number, taps: number) => `Décompte de ${beats(countIn)}. Ensuite, tape ${beats(taps)}.`,
      phrase: (countIn: number, ...parts: string[]) =>
        `Décompte de ${beats(countIn)}. Ensuite, joue${parts.length > 0 ? ` : ${parts.join(", ")}` : ""}.`,
      held: (note: string, total: number) => `${note} tenu ${beats(total)}`,
      rest: (total: number) => (total === 1 ? "silence" : `silence de ${beats(total)}`),
    },
  },
  song: {
    play: "Jouer dans le lecteur",
    goal: (value: number) => `Joue-le avec ${percent(value)} des notes justes.`,
    notYet: (value: number) => `Le morceau t’attend. Rejoue-le quand tu veux, et vise ${percent(value)}.`,
    played: (value: number) => `Tu l’as joué avec ${percent(value)} des notes justes.`,
  },
  recap: {
    heading: "Ce que tu as appris",
  },
  end: {
    heading: "Leçon terminée",
    stars: (stars: number) => `${count(stars, "étoile", "étoiles", "d’étoiles")} sur ${n(3)}`,
    again: "Recommencer",
    saving: "Enregistrement de ta progression…",
    saved: "Enregistré sur cet appareil.",
    unsaved: "Ce navigateur ne garde rien en mémoire. Ce résultat disparaîtra quand tu fermeras l’onglet.",
    failed: "Impossible d’enregistrer ta progression.",
    retry: "Réessayer",
    xp: (number: string) => `+${number} XP`,
    level: (level: number, toNext: number) =>
      `Niveau ${n(level)} : encore ${n(toNext)} XP jusqu’au niveau ${n(level + 1)}`,
    skipOpened: (world: string) => `Toutes les leçons du monde « ${world} » sont ouvertes.`,
    skipShort: (stars: number) =>
      `Ce monde s’ouvre avec ${count(stars, "étoile", "étoiles", "d’étoiles")}. Réessaie quand tu veux.`,
  },
  moment: {
    continue: "Continuer",
    level: {
      heading: "Nouveau niveau !",
      name: (level: number) => `Niveau ${n(level)}`,
      text: "Chaque leçon te fait progresser. Continue comme ça !",
    },
    badge: { heading: "Nouveau badge !" },
  },
};
