/** The player's shell in German. It satisfies the English section's type, so it holds every message. */
import { formatNumber, plural } from "../format";
import type { playerShell as en } from "./player-shell.en";

/** `n` seconds with two decimals and no digit grouping, such as `12,50`. */
const seconds = (n: number) => formatNumber("de", n, { minimumFractionDigits: 2, maximumFractionDigits: 2, useGrouping: false });
/** `n` with one decimal and no digit grouping, such as `6,6`. */
const tenths = (n: number) => formatNumber("de", n, { minimumFractionDigits: 1, maximumFractionDigits: 1, useGrouping: false });
const files = (n: number) => `${formatNumber("de", n)} ${plural("de", n, { one: "Datei", other: "Dateien" })}`;

export const playerShell: typeof en = {
  dialog: {
    close: "Schließen",
    hotkeys: "Tastenkürzel",
    keyBindings: "Tasten der Computertastatur",
    pdf: "Als PDF speichern",
    offlineFiles: "Offline-Dateien",
    tracks: "Spuren",
    songs: "Lieder",
    guide: (title) => `Anleitung zu ${title}`,
    about: "Über Learn Piano Easy",
  },
  toast: {
    dismiss: "Ausblenden",
  },
  topbar: {
    songs: "Lieder",
    tracks: "Spuren",
    guide: "Anleitung",
    settings: "Einstellungen",
    about: "Über",
    openSong: "Offenes Lied",
    demoSong: "Demo-Lied",
    songFallback: "Lied",
  },
  songs: {
    noneFound: "Es wurden keine Lieddateien gefunden.",
    wrongKind: "Nur MIDI- und MusicXML-Dateien lassen sich hinzufügen.",
    added: (n) => `${formatNumber("de", n)} ${plural("de", n, { one: "Lied", other: "Lieder" })} zu "Deine Lieder" hinzugefügt.`,
    notKept: (reason) => `Die Lieder ließen sich nicht speichern: ${reason}`,
    soundsFailed: "Die Klavierklänge ließen sich nicht laden, also bleiben die Lieder stumm.",
  },
  guide: {
    step: (n, summary) => `Schritt ${formatNumber("de", n)}: ${summary}.`,
    barLoops: (bar) => `Takt ${formatNumber("de", bar)} läuft in Schleife.`,
    topBeaten: (title) => `Du hast ${title} geschafft, den letzten Schritt dieses Lieds. Stark gespielt!`,
    beaten: (title, next) => `Du hast ${title} geschafft! Als Nächstes kommt ${next}.`,
    playNext: (next) => `${next} spielen`,
  },
  lesson: {
    label: "Lektion",
    target: (percent) => `Triff ${formatNumber("de", percent)} % der Töne in einem gewerteten Durchgang.`,
    back: "Zurück zur Lektion",
    missing: "Das Lied der Lektion fehlt im Katalog.",
  },
  finger: {
    label: "Ausgewählte Note",
    setByYou: "von dir gesetzt",
    fromGuide: "aus der Anleitung",
    suggested: "vorgeschlagen",
    none: "kein Finger",
    finger: (finger, source) => `Finger ${finger}, ${source}`,
    line: (note, said) => `${note}: ${said}. Drück 1 bis 5 zum Setzen, 0 zum Löschen, Esc zum Beenden.`,
  },
  backgroundTrack: {
    notAudio: (file) => `${file} ist kein Audio, das dieser Browser abspielen kann.`,
    playsAlong: (file) => `${file} spielt jetzt zum Lied mit.`,
  },
  about: {
    license: "Lizenz",
    notices: "Hinweise zu Drittanbietern",
    packageLicense: (name) => `Lizenz von ${name}`,
    offline: "Dieser Text ist offline noch nicht verfügbar.",
    intro:
      "Learn Piano Easy ist eine kostenlose Open-Source-App zum Klavierlernen, mit einem geführten Kurs und deinen eigenen MIDI-Dateien. Sie läuft offline in deinem Browser.",
    build: (version) => `Build ${version}`,
  },
  cache: {
    groups: {
      app: { label: "App", description: "Die Seite, ihr Code und die Liedliste. Ohne sie öffnet sich die App offline nicht." },
      songs: { label: "Lieder", description: "Alle Lieder, die die App mitbringt, damit sich jedes davon offline öffnet." },
      sounds: { label: "Klavierklänge", description: "Alle Klangsets, damit das Klavier offline spielt, egal welches Set gewählt ist." },
    },
    bytes: (n) => `${formatNumber("de", n, { useGrouping: false })} B`,
    kilobytes: (n) => `${tenths(n)} KB`,
    megabytes: (n) => `${tenths(n)} MB`,
    groupsFailed: (n, labels) =>
      `${files(n)} aus ${labels} ${plural("de", n, { one: "ließ", other: "ließen" })} sich nicht offline speichern.`,
    updated: (labels) => `Aktualisiert. ${labels} sind wieder offline gespeichert.`,
    unavailable: "Dieser Browser speichert für diese Seite keine Offline-Dateien.",
    reading: "Gespeichertes wird gelesen…",
    unreadable: "Die Liste der Offline-Dateien ließ sich nicht lesen. Lade die Seite neu und versuch es noch einmal.",
    intro: "Gespeicherte Dateien funktionieren auch ohne Netz. Jeden Teil kannst du einzeln speichern oder entfernen.",
    allSaved: "alles gespeichert",
    noneSaved: "nicht gespeichert",
    someSaved: (count, total) => `${formatNumber("de", count)} von ${files(total)} gespeichert`,
    status: (size, total, state) => `${size}, ${files(total)}, ${state}.`,
    saving: (done, total) => `${formatNumber("de", done)} von ${files(total)} werden gespeichert…`,
    failed: (n) => `${files(n)} ${plural("de", n, { one: "ließ", other: "ließen" })} sich nicht speichern.`,
    save: "Speichern",
    saveAgain: "Erneut speichern",
    remove: "Entfernen",
    saveGroup: (label) => `${label} speichern`,
    removeGroup: (label) => `${label} entfernen`,
    keep: "Nach jedem Update gespeichert lassen",
  },
  update: {
    ready: "Eine neue Version ist bereit.",
    reload: "Neu laden",
  },
  scene: {
    piano: "Klavier",
    pianoRange: (range) => `Klavier, ${range}`,
    startKeys: (keys) => `, Starttasten ${keys}`,
    chord: (chord) => `, Akkord ${chord}`,
  },
  demo: {
    lyrics: [
      "Sieh die Lich|ter nie|der|fal|len,",
      "drück die Tas|te, ist sie da,",
      "lang|sam erst, dann lass es schal|len,",
      "bald ist dir der Weg ganz klar",
    ],
    part: (n) => `Teil ${formatNumber("de", n)}`,
    leftHand: "Linke Hand",
    rightHand: "Rechte Hand",
  },
  chords: {
    root: "Grundton",
    ordinal: (tone) => `${tone}.`,
  },
  overlays: {
    fps: "Bilder pro Sekunde",
    tempo: "Tempo",
    bpmValue: (n) => `${formatNumber("de", n, { useGrouping: false })} BPM`,
    fpsValue: (n) => `${formatNumber("de", n, { useGrouping: false })} FPS`,
    fpsNone: "– FPS",
    track: (track, channel) => `Spur ${track}, Kanal ${channel}`,
    velocity: (velocity) => `Anschlagstärke ${velocity}`,
    timing: (start, length) => `Beginnt bei ${seconds(start)} s, dauert ${seconds(length)} s`,
  },
  sheet: {
    label: "Notenblatt",
    empty: "Im Notenblatt ist keine Spur zu sehen. Schalte eine unter Spuren ein.",
  },
};
