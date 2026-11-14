/** The player's input in French. A text it leaves out shows in English. */
import { formatNumber, plural } from "../format";
import type { Translation } from "../translation";
import type { playerInput as en } from "./player-input.en";

export const playerInput: Translation<typeof en> = {
  percent: (n: number) => `${formatNumber("fr", n)} %`,
  devices: {
    heading: "Appareils MIDI",
    connect: "Connecter les appareils MIDI",
    input: "Entrée MIDI",
    output: "Sortie MIDI",
    everyInput: "Toutes les entrées",
    noOutput: "Aucune sortie",
    notConnected: (name: string) => `${name} (non connecté)`,
    unsupported: "Ce navigateur n’a pas accès aux appareils MIDI. Chrome, Edge et Firefox y ont accès.",
    off: "Connecte tes appareils MIDI pour jouer sur un clavier MIDI.",
    asking: "En attente de l’autorisation du navigateur…",
    denied: "L’accès MIDI a été refusé. Autorise-le dans les paramètres du site du navigateur, puis reconnecte tes appareils.",
    noInputs: "Aucun appareil MIDI n’est branché.",
    inputsFound: (n: number) =>
      plural("fr", n, {
        one: `${formatNumber("fr", n)} entrée MIDI trouvée.`,
        many: `${formatNumber("fr", n)} d’entrées MIDI trouvées.`,
        other: `${formatNumber("fr", n)} entrées MIDI trouvées.`,
      }),
  },
  freePlay: {
    heading: "Jeu libre",
    record: "Enregistrer une prise",
    stop: "Arrêter",
    stopRecording: "Arrêter la prise",
    save: "Enregistrer",
    saveTitle: "Enregistrer en fichier MIDI",
    recording: (clock: string) => `Prise en cours ${clock}`,
    recorded: (n: number) =>
      plural("fr", n, {
        one: `${formatNumber("fr", n)} note dans la prise. Appuie sur Enregistrer pour la garder dans un fichier MIDI.`,
        many: `${formatNumber("fr", n)} de notes dans la prise. Appuie sur Enregistrer pour les garder dans un fichier MIDI.`,
        other: `${formatNumber("fr", n)} notes dans la prise. Appuie sur Enregistrer pour les garder dans un fichier MIDI.`,
      }),
    hint: "Joue librement, ou appuie sur Enregistrer une prise pour garder ce que tu joues.",
  },
  history: {
    empty: "Aucun essai terminé pour l’instant sur ce morceau. Joue-le jusqu’au bout avec le score activé.",
    hands: { both: "Les deux", right: "Droite", left: "Gauche" },
    columns: {
      date: "Date",
      speed: "Vitesse",
      hands: "Mains",
      accuracy: "Précision",
      hits: "Réussies",
      perfect: "Parfaites",
      misses: "Manquées",
      mistakes: "Erreurs",
    },
  },
  keyBinding: {
    help: "Appuie sur la touche d’une note, puis sur la touche de l’ordinateur qui doit la jouer. La touche Échap ferme cette fenêtre.",
    open: "Changer les touches",
  },
  learnRange: {
    lowest: "Joue la touche la plus grave…",
    highest: "Maintenant, la plus aiguë…",
    start: "Détecter avec ton clavier",
    title: "Détecter l’étendue de ton clavier",
  },
  pitchPractice: {
    heading: "Travail de l’oreille",
    hear: "Écouter",
    hearTitle: "Écouter la note",
    again: "Recommencer",
    againTitle: "Lancer une nouvelle manche",
    empty: "Aucune note à demander",
    emptyHint: "La tonalité n’a aucune note entre les notes choisies sur ton clavier.",
    done: "Manche terminée",
    found: (n: number, count: number) =>
      plural("fr", n, {
        one: `${formatNumber("fr", n)} note trouvée sur ${formatNumber("fr", count)}.`,
        many: `${formatNumber("fr", n)} de notes trouvées sur ${formatNumber("fr", count)}.`,
        other: `${formatNumber("fr", n)} notes trouvées sur ${formatNumber("fr", count)}.`,
      }),
    play: (note: string) => `Joue ${note}`,
    progress: (i: number, count: number) => `Note ${formatNumber("fr", i)} sur ${formatNumber("fr", count)}`,
    wrong: (note: string) => `Ce n’est pas ${note}. Essaie encore une fois.`,
    right: (note: string) => `C’est bien ${note}.`,
    results: "Résultats du travail de l’oreille",
    mistakes: (n: number, count: number) =>
      `${n === 0 ? "Aucune erreur" : `${formatNumber("fr", n)} ${plural("fr", n, { one: "erreur", many: "d’erreurs", other: "erreurs" })}`} sur ${formatNumber("fr", count)} ${plural("fr", count, { one: "note", many: "de notes", other: "notes" })}.`,
    columns: { note: "Note", asked: "Demandée", mistakes: "Erreurs", playedInstead: "Jouée à la place" },
    firstTry: (n: number, count: number) =>
      plural("fr", n, {
        one: `${formatNumber("fr", n)} note sur ${formatNumber("fr", count)} trouvée du premier coup.`,
        many: `${formatNumber("fr", n)} de notes sur ${formatNumber("fr", count)} trouvées du premier coup.`,
        other: `${formatNumber("fr", n)} notes sur ${formatNumber("fr", count)} trouvées du premier coup.`,
      }),
  },
  scoring: {
    heading: "Score",
    judgements: { perfect: "Parfait", hit: "Note réussie", mistake: "Erreur", miss: "Note manquée" },
    counts: (hits: number, perfect: number, misses: number, mistakes: number) =>
      `Réussies ${formatNumber("fr", hits)} · Parfaites ${formatNumber("fr", perfect)} · Manquées ${formatNumber("fr", misses)} · Erreurs ${formatNumber("fr", mistakes)}`,
    history: "Historique",
    historyTitle: "Tes essais sur ce morceau",
    readError: "Impossible de lire l’historique.",
    saved: "Essai enregistré dans l’historique.",
    saveError: "Impossible d’enregistrer cet essai.",
  },
  game: {
    levels: { easy: "Facile", normal: "Normale", hard: "Difficile" },
    words: {
      perfect: "Parfait",
      great: "Super",
      good: "Bien",
      hold: "Maintien",
      release: "Net",
      wrong: "Fausse note",
      miss: "Note manquée",
      short: "Trop court",
      long: "Trop long",
      late: "Trop tard",
    },
    name: "Jeu",
    score: "Score",
    combo: "combo",
    multiplier: "Multiplicateur",
    held: (points: string) => `Maintien ${points}`,
    burst: (multiplier: number) => `Combo ×${formatNumber("fr", multiplier)} !`,
    inARow: (combo: number) => `${formatNumber("fr", combo)} d’affilée`,
    announce: (multiplier: number, combo: number) =>
      `Combo, multiplicateur ${formatNumber("fr", multiplier)}, ${formatNumber("fr", combo)} d’affilée.`,
    result: "Résultat de l’essai",
    complete: "Essai terminé",
    bestCombo: (combo: number) => `Meilleur combo ${formatNumber("fr", combo)}`,
    stats: {
      perfect: "Parfait",
      great: "Super",
      good: "Bien",
      wrong: "Fausse note",
      miss: "Note manquée",
      late: "Trop tard",
      short: "Trop court",
      long: "Trop long",
    },
    helped: "Avec « Attendre tes notes »",
    close: "Fermer",
    closeName: "Fermer le résultat de l’essai",
  },
  pdf: {
    noSong: "Ouvre d’abord un morceau, puis enregistre ses notes en PDF.",
    intro: (title: string) =>
      `Un PDF de ${title} : ses notes qui tombent au-dessus d’un piano, avec quelques secondes du morceau par page.`,
    secondsPerPage: "Secondes par page",
    background: "Utiliser les couleurs de fond",
    pages: (pages: number, seconds: number) =>
      `${formatNumber("fr", pages)} ${plural("fr", pages, { one: "page", many: "de pages", other: "pages" })}, chacune avec ${formatNumber("fr", seconds)} ${plural("fr", seconds, { one: "seconde", many: "de secondes", other: "secondes" })} du morceau.`,
    save: "Enregistrer en PDF",
    pageHeading: (title: string, from: string, to: string, page: number, count: number) =>
      `${title}   ${from} à ${to}   page ${formatNumber("fr", page)} sur ${formatNumber("fr", count)}`,
  },
};
