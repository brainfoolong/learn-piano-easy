/**
 * The player's settings panel in English: its own words, the names of its groups, sections and
 * sub-headings, and every setting's texts.
 *
 * The settings' texts come in two halves, one file pair each, so two writers share no file. The
 * `satisfies` below fails the type check while any setting of the schema lacks its texts.
 */
import type { PanelGroup, PanelSection, SettingsTexts, Subheading } from "../../settings/schema";
import type { Mode } from "../../theory/key";
import { formatNumber, plural } from "../format";
import { playerSettingsLook } from "./player-settings-look.en";
import { playerSettingsPlay } from "./player-settings-play.en";

export const playerSettings = {
  panel: {
    title: "Settings",
    close: "Close settings",
    search: "Search settings",
    clearSearch: "Clear the search",
    sections: "Settings sections",
    /** What a search found, read out as the learner types. */
    found: (count: number) => (count === 1 ? "1 setting found" : `${count} settings found`),
    emptyTitle: "Nothing found",
    empty: (query: string) => `No setting matches “${query}”. Try another word.`,
    showAll: "Show all settings",
    /** The mark on a section or a group that holds changed settings. */
    changed: (count: number) => `${count} changed`,
    /** The footer's count of every changed setting. */
    changedTotal: (count: number) =>
      count === 0 ? "Every setting is at its default." : count === 1 ? "1 setting changed" : `${count} settings changed`,
    /** The tooltip of a setting's reset button. */
    reset: (label: string) => `Reset ${label} to its default`,
    resetAll: "Reset all to defaults",
    confirmResetAll: "Reset every setting to its default? Your changes will be lost.",
  },
  /** Each name labels a button of the panel. None holds the word of a control bar button, such as *Play*. */
  groups: {
    basics: "Basics",
    audio: "Audio",
    instrument: "Your instrument",
    scene: "The scene",
    reading: "Reading aids",
    app: "App",
  } satisfies Record<PanelGroup, string>,
  sections: {
    general: "General",
    loop: "Loop",
    audio: "Sound",
    backing: "Background track",
    view: "View",
    keyboard: "Your keyboard",
    input: "Input",
    piano: "Piano",
    notes: "Notes",
    lanes: "Lanes and lines",
    particles: "Particles",
    labels: "Labels",
    lyrics: "Lyrics",
    coding: "Colour coding",
    sheet: "Sheet music",
    pdf: "PDF export",
    offline: "Offline",
  } satisfies Record<PanelSection, string>,
  /** One line under each section's name, saying what its settings change. */
  about: {
    general: "How the player starts, how a song runs, and what the timeline shows.",
    loop: "Repeat a passage until it sits.",
    audio: "Volume, the piano's tone, the metronome and the equaliser.",
    backing: "An audio file of your own that plays along with the song.",
    view: "The camera, the glow, and how much of the song you see ahead.",
    keyboard: "The keys your own keyboard has, so the piano on screen matches it.",
    input: "How you play: the mode, your devices, and what the player checks.",
    piano: "The piano on screen: its keys, its colours and its effects.",
    notes: "The shape and the glow of the falling notes.",
    lanes: "The lanes behind the notes, and the lines and marks on them.",
    particles: "Flames, sparks and your own particles where a note hits its key.",
    labels: "Names on the notes and the keys, and the song's chords.",
    lyrics: "The song's words, shown line by line over the scene.",
    coding: "One colour for each pitch or each finger.",
    sheet: "The song as sheet music, beside or instead of the falling notes.",
    pdf: "Save the falling notes as pages to print.",
    offline: "What the app keeps saved for playing without a network.",
  } satisfies Record<PanelSection, string>,
  subheadings: {
    generalApp: "App and data",
    generalSong: "The song",
    generalReadouts: "Readouts and timeline",
    audioVolume: "Volume and touch",
    audioRoom: "Reverb and tuning",
    audioEnvelope: "Envelope",
    audioMetronome: "Metronome",
    audioEqualizer: "Equaliser",
    audioTiming: "Timing",
    inputMode: "Mode",
    inputDevices: "Devices and keys",
    inputAlong: "Playing along",
    inputScore: "Score and game",
    pianoPressed: "Keys you press",
    pianoComing: "Coming notes",
    pianoLook: "Colours and size",
    pianoFlare: "Flare",
    pianoWave: "Wave line",
    lanesColours: "Lane colours",
    lanesLines: "Bar and beat lines",
    lanesHeld: "Keys you hold",
    lanesMarkers: "Markers and pedal",
    particlesEffects: "Effects",
    particlesLook: "Your own particles: look",
    particlesLife: "Your own particles: amount and life",
    particlesMotion: "Your own particles: motion",
    particlesWander: "Your own particles: wander and sway",
    particlesStart: "Your own particles: where they start",
    labelsNotes: "On the notes",
    labelsPiano: "On the piano",
    labelsChords: "Chords",
    codingPitch: "By pitch",
    codingFinger: "By finger",
    sheetLayout: "Layout",
    sheetNotation: "Notation",
    sheetCursor: "Cursor and colours",
  } satisfies Record<Subheading, string>,
  settings: { ...playerSettingsPlay, ...playerSettingsLook } satisfies SettingsTexts,
  /** The keyboard size control at the head of the keyboard section. */
  range: {
    label: "Keyboard size",
    /** A preset's name in the menu, by its number of keys. */
    keys: (count: number) => `${formatNumber("en", count)} ${plural("en", count, { one: "key", other: "keys" })}`,
    custom: "Custom",
    /** The range beside the menu, such as `61 keys, C2 to C7`, from the key count's text and two note names. */
    summary: (keys: string, first: string, last: string) => `${keys}, ${first} to ${last}`,
    octaveDown: "− Octave",
    octaveDownName: "Octave down",
    octaveUp: "Octave +",
    octaveUpName: "Octave up",
  },
  /** A key's name from its tonic's name, such as `B♭ major`. */
  key: (tonic: string, mode: Mode) => `${tonic} ${mode}`,
};
