/** The player's shell in English: its bar, its dialogs, its toasts, the About page and the cache manager. */
import { formatNumber, plural } from "../format";

/** `n` seconds with two decimals and no digit grouping, such as `12.50`. */
const seconds = (n: number) => formatNumber("en", n, { minimumFractionDigits: 2, maximumFractionDigits: 2, useGrouping: false });
/** `n` with one decimal and no digit grouping, such as `6.6`. */
const tenths = (n: number) => formatNumber("en", n, { minimumFractionDigits: 1, maximumFractionDigits: 1, useGrouping: false });
const files = (n: number) => `${formatNumber("en", n)} ${plural("en", n, { one: "file", other: "files" })}`;

export const playerShell = {
  dialog: {
    close: "Close",
    hotkeys: "Hotkeys",
    keyBindings: "Computer keyboard keys",
    pdf: "Save as PDF",
    offlineFiles: "Offline files",
    tracks: "Tracks",
    songs: "Songs",
    guide: (title: string) => `Guide to ${title}`,
    about: "About learn-piano-easy",
  },
  toast: {
    dismiss: "Dismiss",
  },
  topbar: {
    songs: "Songs",
    tracks: "Tracks",
    guide: "Guide",
    settings: "Settings",
    about: "About",
    /** The accessible name of the open song's title. */
    openSong: "Open song",
    demoSong: "Demo song",
    /** The title the PDF export takes when the open song has none. */
    songFallback: "Song",
  },
  songs: {
    noneFound: "No song files were found.",
    wrongKind: "Only MIDI and MusicXML files can be added.",
    added: (n: number) => `Added ${formatNumber("en", n)} songs to Your songs.`,
    notKept: (reason: string) => `The songs could not be kept: ${reason}`,
    soundsFailed: "The piano sounds could not load, so songs play silently.",
  },
  guide: {
    step: (n: number, summary: string) => `Step ${formatNumber("en", n)}: ${summary}.`,
    barLoops: (bar: number) => `Bar ${formatNumber("en", bar)} loops.`,
    topBeaten: (title: string) => `You beat ${title}, the top of this song. Well played!`,
    beaten: (title: string, next: string) => `You beat ${title}! ${next} is next.`,
    playNext: (next: string) => `Play ${next}`,
  },
  /** The banner of lesson mode, while a lesson's song step plays in the player. */
  lesson: {
    label: "Lesson",
    /** The accuracy a scored take must reach, as a whole percent. */
    target: (percent: number) => `Reach ${formatNumber("en", percent)} % of the notes in a scored take.`,
    back: "Back to the lesson",
    missing: "The lesson's song is not in the catalog.",
  },
  finger: {
    label: "Selected note",
    setByYou: "set by you",
    fromGuide: "from the guide",
    suggested: "suggested",
    none: "no finger",
    /** A finger and where it came from, such as `finger 2, suggested`. */
    finger: (finger: number, source: string) => `finger ${finger}, ${source}`,
    line: (note: string, said: string) => `${note}: ${said}. Press 1 to 5 to set it, 0 to clear, Esc to finish.`,
  },
  backgroundTrack: {
    notAudio: (file: string) => `${file} is not audio this browser can play.`,
    playsAlong: (file: string) => `${file} plays along with the song.`,
  },
  about: {
    license: "License",
    notices: "Third-party notices",
    packageLicense: (name: string) => `${name} license`,
    offline: "This text is not available offline yet.",
    intro: "learn-piano-easy is a free, open-source app for learning piano with MIDI files. It runs offline in your browser.",
    build: (version: string) => `Build ${version}`,
  },
  cache: {
    groups: {
      app: { label: "App", description: "The page, its code and the song list. The app needs it to open offline." },
      songs: { label: "Songs", description: "Every example song, so any of them opens offline." },
      sounds: { label: "Piano sounds", description: "Every sound set, so the piano plays offline whichever set is chosen." },
    },
    bytes: (n: number) => `${formatNumber("en", n, { useGrouping: false })} B`,
    kilobytes: (n: number) => `${tenths(n)} KB`,
    megabytes: (n: number) => `${tenths(n)} MB`,
    /** Files of the groups named in `labels` failed while the groups were kept offline. */
    groupsFailed: (n: number, labels: string) => `${files(n)} of ${labels} could not be saved for offline use.`,
    updated: (labels: string) => `Updated. ${labels} are saved for offline use again.`,
    unavailable: "This browser keeps no offline files for this page.",
    reading: "Reading what is saved…",
    unreadable: "The list of offline files could not be read. Reload the page and try again.",
    intro: "Saved files keep working without a network. Each part can be saved or removed on its own.",
    allSaved: "all saved",
    noneSaved: "not saved",
    someSaved: (count: number, total: number) => `${formatNumber("en", count)} of ${files(total)} saved`,
    /** A group's status: its size, its file count and how much of it is saved. */
    status: (size: string, total: number, state: string) => `${size}, ${files(total)}, ${state}.`,
    saving: (done: number, total: number) => `Saving ${formatNumber("en", done)} of ${files(total)}…`,
    failed: (n: number) => `${files(n)} could not be saved.`,
    save: "Save",
    saveAgain: "Save again",
    remove: "Remove",
    saveGroup: (label: string) => `Save ${label}`,
    removeGroup: (label: string) => `Remove ${label}`,
    keep: "Keep saved after each update",
  },
  update: {
    ready: "A new version is ready.",
    reload: "Reload",
  },
  scene: {
    /** The canvas's accessible name before the piano is placed. */
    piano: "Piano",
    pianoRange: (range: string) => `Piano, ${range}`,
    startKeys: (keys: string) => `, start keys ${keys}`,
    chord: (chord: string) => `, chord ${chord}`,
  },
  demo: {
    /** The demo song's lyric lines. A space parts words and "|" parts syllables. */
    lyrics: [
      "Watch the fal|ling lights come down",
      "press each key as they ar|rive",
      "slow at first and then with speed",
      "soon your hands will know the way",
    ],
    part: (n: number) => `Part ${formatNumber("en", n)}`,
    leftHand: "Left hand",
    rightHand: "Right hand",
  },
  chords: {
    /** The full notation's name of a chord's root. */
    root: "Root",
    /** A chord tone, such as `♭3`, written as an ordinal, such as `♭3rd`. */
    ordinal: (tone: string) => {
      const digit = String(tone).slice(-1);
      return `${tone}${digit === "1" ? "st" : digit === "2" ? "nd" : digit === "3" ? "rd" : "th"}`;
    },
  },
  overlays: {
    fps: "Frames per second",
    tempo: "Tempo",
    bpmValue: (n: number) => `${formatNumber("en", n, { useGrouping: false })} BPM`,
    fpsValue: (n: number) => `${formatNumber("en", n, { useGrouping: false })} FPS`,
    fpsNone: "– FPS",
    track: (track: number, channel: number) => `Track ${track}, channel ${channel}`,
    velocity: (velocity: number) => `Velocity ${velocity}`,
    timing: (start: number, length: number) => `Starts at ${seconds(start)} s, lasts ${seconds(length)} s`,
  },
  sheet: {
    label: "Sheet music",
    empty: "No track is shown in the sheet music. Turn one on in Tracks.",
  },
};
