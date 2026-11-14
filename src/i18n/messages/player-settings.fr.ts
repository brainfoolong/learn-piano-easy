/** The player's settings panel in French. A text it leaves out shows in English. */
import { parsePitch } from "../../keyboard/range";
import { pitchClassName } from "../../theory/note-names";
import { formatNumber, plural } from "../format";
import type { Translation } from "../translation";
import type { playerSettings as en } from "./player-settings.en";
import { playerSettingsLook } from "./player-settings-look.fr";
import { playerSettingsPlay } from "./player-settings-play.fr";

/**
 * A tonic given in letters, such as `B♭`, as the French solfège name the note labels show, such as
 * `Si♭`. Any other name stays as it is.
 */
function solfege(tonic: string): string {
  const pitch = parsePitch(`${tonic}4`);
  if (pitch === undefined) return tonic;
  return pitchClassName(pitch, { system: "solfege", accidentals: tonic.endsWith("♭") ? "flats" : "sharps", locale: "fr" });
}

export const playerSettings: Translation<typeof en> = {
  panel: {
    title: "Paramètres",
    close: "Fermer les paramètres",
    search: "Rechercher dans les paramètres",
    clearSearch: "Effacer la recherche",
    sections: "Sections des paramètres",
    found: (count) => {
      const n = formatNumber("fr", count);
      return plural("fr", count, {
        one: `${n} paramètre trouvé`,
        many: `${n} de paramètres trouvés`,
        other: `${n} paramètres trouvés`,
      });
    },
    emptyTitle: "Aucun résultat",
    empty: (query) => `Aucun paramètre ne correspond à « ${query} ». Essaie un autre mot.`,
    showAll: "Afficher tous les paramètres",
    changed: (count) => {
      const n = formatNumber("fr", count);
      return plural("fr", count, { one: `${n} modifié`, many: `${n} modifiés`, other: `${n} modifiés` });
    },
    changedTotal: (count) => {
      if (count === 0) return "Chaque paramètre a sa valeur par défaut.";
      const n = formatNumber("fr", count);
      return plural("fr", count, {
        one: `${n} paramètre modifié`,
        many: `${n} de paramètres modifiés`,
        other: `${n} paramètres modifiés`,
      });
    },
    reset: (label) => `Réinitialiser « ${label} »`,
    resetAll: "Tout réinitialiser",
    confirmResetAll: "Réinitialiser tous les paramètres ? Tes modifications seront perdues.",
  },
  groups: {
    basics: "L’essentiel",
    audio: "Audio",
    instrument: "Ton instrument",
    scene: "La scène",
    reading: "Aides à la lecture",
    app: "Application",
  },
  sections: {
    general: "Général",
    loop: "Boucle",
    audio: "Son",
    backing: "Accompagnement",
    view: "Vue",
    keyboard: "Ton clavier",
    input: "Entrée",
    piano: "Piano",
    notes: "Notes qui tombent",
    lanes: "Couloirs et lignes",
    particles: "Particules",
    labels: "Étiquettes",
    lyrics: "Paroles",
    coding: "Couleurs des notes",
    sheet: "Partition",
    pdf: "Export PDF",
    offline: "Hors ligne",
  },
  about: {
    general: "Comment le lecteur démarre, comment un morceau se déroule et ce que montre la chronologie.",
    loop: "Répète quelques mesures jusqu’à ce qu’elles soient acquises.",
    audio: "Le volume, le son du piano, le métronome et l’égaliseur.",
    backing: "Un fichier audio à toi, qui joue en même temps que le morceau.",
    view: "La caméra, la lueur et jusqu’où tu vois le morceau à l’avance.",
    keyboard: "Les touches de ton propre clavier, pour que le piano à l’écran lui corresponde.",
    input: "Comment tu joues : le mode, tes appareils et ce que le lecteur vérifie.",
    piano: "Le piano à l’écran : ses touches, ses couleurs et ses effets.",
    notes: "La forme et la lueur des notes qui tombent.",
    lanes: "Les couloirs derrière les notes, avec leurs lignes et leurs repères.",
    particles: "Des flammes, des étincelles et tes propres particules, là où une note atteint sa touche.",
    labels: "Les noms sur les notes et les touches, et les accords du morceau.",
    lyrics: "Les paroles du morceau, ligne par ligne, sur la scène.",
    coding: "Une couleur pour chaque hauteur ou chaque doigt.",
    sheet: "Le morceau en partition, à côté des notes qui tombent ou à leur place.",
    pdf: "Enregistre les notes qui tombent sous forme de pages à imprimer.",
    offline: "Ce que l’application enregistre pour fonctionner hors ligne.",
  },
  subheadings: {
    generalApp: "Application et données",
    generalSong: "Le morceau",
    generalReadouts: "Affichages et chronologie",
    audioVolume: "Volume et toucher",
    audioRoom: "Réverbération et accordage",
    audioEnvelope: "Enveloppe",
    audioMetronome: "Métronome",
    audioEqualizer: "Égaliseur",
    audioTiming: "Calage",
    inputMode: "Mode",
    inputDevices: "Appareils et touches",
    inputAlong: "Jouer avec le morceau",
    inputScore: "Score et jeu",
    pianoPressed: "Touches enfoncées",
    pianoLook: "Couleurs et taille",
    pianoFlare: "Éclat",
    pianoWave: "Onde",
    lanesColours: "Couleurs des couloirs",
    lanesLines: "Lignes de mesure et de temps",
    lanesHeld: "Touches tenues",
    lanesMarkers: "Repères et pédale",
    particlesEffects: "Effets",
    particlesLook: "Tes particules : aspect",
    particlesLife: "Tes particules : quantité et durée de vie",
    particlesMotion: "Tes particules : mouvement",
    particlesWander: "Tes particules : dérive et balancement",
    particlesStart: "Tes particules : point de départ",
    labelsNotes: "Sur les notes",
    labelsPiano: "Sur le piano",
    labelsChords: "Accords",
    codingPitch: "Par hauteur",
    codingFinger: "Par doigt",
    sheetLayout: "Disposition",
    sheetNotation: "Écriture",
    sheetCursor: "Curseur et couleurs",
  },
  settings: { ...playerSettingsPlay, ...playerSettingsLook },
  range: {
    label: "Taille du clavier",
    keys: (count) =>
      `${formatNumber("fr", count)} ${plural("fr", count, { one: "touche", many: "de touches", other: "touches" })}`,
    custom: "Personnalisée",
    summary: (keys, first, last) => `${keys}, de ${first} à ${last}`,
    octaveDown: "− 1 octave",
    octaveDownName: "Une octave plus bas",
    octaveUp: "+ 1 octave",
    octaveUpName: "Une octave plus haut",
  },
  key: (tonic, mode) => `${solfege(tonic)} ${{ major: "majeur", minor: "mineur" }[mode] ?? mode}`,
};
