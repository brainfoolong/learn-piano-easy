/** The player's shell in French. A text it leaves out shows in English. */
import { formatNumber, plural } from "../format";
import type { Translation } from "../translation";
import type { playerShell as en } from "./player-shell.en";

/** `n` seconds with two decimals and no digit grouping, such as `12,50`. */
const seconds = (n: number) => formatNumber("fr", n, { minimumFractionDigits: 2, maximumFractionDigits: 2, useGrouping: false });
/** `n` with one decimal and no digit grouping, such as `6,6`. */
const tenths = (n: number) => formatNumber("fr", n, { minimumFractionDigits: 1, maximumFractionDigits: 1, useGrouping: false });
/** A count of files, such as `5 fichiers`. */
const files = (n: number) => `${formatNumber("fr", n)} ${plural("fr", n, { one: "fichier", many: "de fichiers", other: "fichiers" })}`;

export const playerShell: Translation<typeof en> = {
  dialog: {
    close: "Fermer",
    hotkeys: "Raccourcis clavier",
    keyBindings: "Touches du clavier de l’ordinateur",
    pdf: "Enregistrer en PDF",
    offlineFiles: "Utilisation hors ligne",
    tracks: "Pistes",
    songs: "Morceaux",
    guide: (title) => `Guide : ${title}`,
    about: "À propos de Learn Piano Easy",
  },
  toast: {
    dismiss: "Masquer",
  },
  topbar: {
    songs: "Morceaux",
    tracks: "Pistes",
    guide: "Guide",
    settings: "Paramètres",
    about: "À propos",
    openSong: "Morceau ouvert",
    demoSong: "Morceau de démo",
    songFallback: "Morceau",
  },
  songs: {
    noneFound: "Aucun fichier de morceau trouvé.",
    wrongKind: "Seuls les fichiers MIDI et MusicXML peuvent être ajoutés.",
    added: (n) =>
      `${formatNumber("fr", n)} ${plural("fr", n, { one: "morceau ajouté", many: "de morceaux ajoutés", other: "morceaux ajoutés" })} à « Tes morceaux ».`,
    notKept: (reason) => `Impossible de conserver les morceaux : ${reason}`,
    soundsFailed: "Impossible de charger les sons du piano. Les morceaux sont donc lus sans son.",
  },
  guide: {
    step: (n, summary) => `Étape ${formatNumber("fr", n)} : ${summary}.`,
    barLoops: (bar) => `La mesure ${formatNumber("fr", bar)} est répétée en boucle.`,
    topBeaten: (title) => `Tu as réussi ${title}, la dernière étape de ce morceau. Bien joué !`,
    beaten: (title, next) => `Tu as réussi ${title} ! Prochaine étape : ${next}.`,
    playNext: (next) => `Jouer ${next}`,
  },
  lesson: {
    label: "Leçon",
    target: (percent) => `Atteins ${formatNumber("fr", percent)} % de notes réussies dans un essai noté.`,
    back: "Retour à la leçon",
    missing: "Le morceau de cette leçon est introuvable dans le catalogue.",
  },
  finger: {
    label: "Note choisie",
    setByYou: "choisi par toi",
    fromGuide: "selon le guide",
    suggested: "suggéré",
    none: "aucun doigt",
    finger: (finger, source) => `doigt ${formatNumber("fr", finger)}, ${source}`,
    line: (note, said) =>
      `${note} : ${said}. Appuie sur une touche de 1 à 5 pour choisir le doigt, sur 0 pour l’effacer, sur Échap pour terminer.`,
  },
  backgroundTrack: {
    notAudio: (file) => `${file} n’est pas un fichier audio lisible par ce navigateur.`,
    playsAlong: (file) => `${file} accompagne le morceau.`,
  },
  about: {
    license: "Licence",
    notices: "Composants tiers",
    packageLicense: (name) => `Licence de ${name}`,
    offline: "Ce texte n’est pas encore disponible hors ligne.",
    intro:
      "Learn Piano Easy est une application gratuite et open source pour apprendre le piano, avec un cours guidé et tes propres fichiers MIDI. Elle fonctionne hors ligne dans ton navigateur.",
    build: (version) => `Compilation ${version}`,
  },
  cache: {
    groups: {
      app: { label: "Application", description: "La page, son code et la liste des morceaux. L’application en a besoin pour s’ouvrir hors ligne." },
      songs: { label: "Morceaux", description: "Tous les morceaux fournis avec l’application, pour que chacun s’ouvre hors ligne." },
      sounds: { label: "Sons de piano", description: "Toutes les banques de sons, pour que le piano joue hors ligne, quelle que soit la banque choisie." },
    },
    bytes: (n) => `${formatNumber("fr", n, { useGrouping: false })} o`,
    kilobytes: (n) => `${tenths(n)} Ko`,
    megabytes: (n) => `${tenths(n)} Mo`,
    groupsFailed: (n, labels) => `${labels} : impossible d’enregistrer ${files(n)} pour l’utilisation hors ligne.`,
    updated: (labels) => `Mise à jour terminée. Ces parties sont de nouveau enregistrées pour l’utilisation hors ligne : ${labels}.`,
    unavailable: "Ce navigateur ne garde aucun fichier hors ligne pour cette page.",
    reading: "Lecture des fichiers enregistrés…",
    unreadable: "Impossible de lire la liste des fichiers hors ligne. Recharge la page et réessaie.",
    intro: "Les fichiers enregistrés restent disponibles sans réseau. Tu peux enregistrer ou retirer chaque partie séparément.",
    allSaved: "tout est enregistré",
    noneSaved: "rien n’est enregistré",
    someSaved: (count, total) =>
      `${files(count)} sur ${formatNumber("fr", total)} ${plural("fr", count, { one: "enregistré", many: "enregistrés", other: "enregistrés" })}`,
    status: (size, total, state) => `${size}, ${files(total)}, ${state}.`,
    saving: (done, total) => `Enregistrement de ${files(done)} sur ${formatNumber("fr", total)}…`,
    failed: (n) => `Impossible d’enregistrer ${files(n)}.`,
    save: "Enregistrer",
    saveAgain: "Enregistrer à nouveau",
    remove: "Retirer",
    saveGroup: (label) => `Enregistrer « ${label} »`,
    removeGroup: (label) => `Retirer « ${label} »`,
    keep: "Garder les fichiers enregistrés après chaque mise à jour",
  },
  update: {
    ready: "Une nouvelle version est prête.",
    reload: "Recharger",
  },
  scene: {
    piano: "Piano",
    pianoRange: (range) => `Piano, ${range}`,
    startKeys: (keys) => `, touches de départ ${keys}`,
    chord: (chord) => `, accord ${chord}`,
  },
  demo: {
    /** Each line keeps the English's seven syllables, and "|" parts the syllables inside a word. */
    lyrics: [
      "Vois tom|ber les lu|miè|res",
      "joue les tou|ches à leur tour",
      "len|te|ment puis plus vi|te",
      "tes mains sau|ront le che|min",
    ],
    part: (n) => `Partie ${formatNumber("fr", n)}`,
    leftHand: "Main gauche",
    rightHand: "Main droite",
  },
  chords: {
    root: "Fondamentale",
    /** A chord tone takes the French ordinal ending, such as `♭3e`, and a lone 1 takes `er`. */
    ordinal: (tone) => {
      const digits = String(tone).replace(/\D/g, "");
      return `${tone}${digits === "1" ? "er" : "e"}`;
    },
  },
  overlays: {
    fps: "Images par seconde",
    tempo: "Tempo",
    bpmValue: (n) => `${formatNumber("fr", n, { useGrouping: false })} BPM`,
    fpsValue: (n) => `${formatNumber("fr", n, { useGrouping: false })} FPS`,
    track: (track, channel) => `Piste ${formatNumber("fr", track)}, canal ${formatNumber("fr", channel)}`,
    velocity: (velocity) => `Force de frappe ${formatNumber("fr", velocity)}`,
    timing: (start, length) => `Début à ${seconds(start)} s, durée ${seconds(length)} s`,
  },
  sheet: {
    label: "Partition",
    empty: "Aucune piste n’est affichée dans la partition. Active-en une dans le panneau Pistes.",
  },
};
