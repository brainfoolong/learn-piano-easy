/**
 * The settings schema: every setting the app has, with its section, kind, default and range.
 *
 * Decisions, and what each costs:
 * - One list holds every setting, and the types of every value derive from it. A module reads
 *   `SettingValue<"masterGain">` and gets `number`, so a renamed id fails the type check.
 * - The schema holds no text. Each locale's catalog holds a setting's label, help and option labels
 *   under `player.settings.settings[id]`, typed by `SettingsTexts`. A setting added here fails the type
 *   check until every locale describes it, and a choice's new value fails until it has a label.
 * - Each entry is built by a helper of its kind, which keeps an entry to one line. The helpers carry the
 *   id and a choice's values as literal types.
 * - The kinds are toggle, number, note, choice, multi, colour, text and action. An action is a button in
 *   the panel, so it has no default and no stored value.
 * - A multi picks any of its options at once. It stores them as one string, joined by commas in the
 *   options' order, so the store compares and saves it as it does a choice. A choice's saved value
 *   reads as a multi of that one option, so a choice can become a multi and keep what the learner picked.
 * - A number has a minimum, a maximum and a step, and the store rounds each value to that grid.
 * - A note is a MIDI note number from a minimum to a maximum. It is a kind of its own because the panel
 *   shows and takes it as a name such as `C4`.
 * - A choice stores its value, never its label, so relabelling a choice keeps every saved value.
 * - A colour is `#rrggbbaa` in lower-case hex, so a theme or an exported file reads plainly.
 * - The site's theme and language are settings, so the export and import carry them. Their section,
 *   `site`, is not a panel section, because the top bar switches them on every page.
 * - Ids are camelCase, and match the reference's id where that id is clear. `coverage.test.ts` maps
 *   each setting of `docs/reference/settings.md` onto this list.
 * - The panel's sections are gathered into groups, and `GROUPS` is the one home of that order. A group
 *   has a hue and an icon, and a section has an icon. A long section is cut by `SUBHEADINGS`.
 * - An icon is named by its Lucide name, typed by the icon subset of `src/ui/icons/icons.ts`. A name the
 *   subset lacks fails the type check, so the panel never meets an icon it cannot draw.
 *
 * Gaps: the sections of later goals join this list as each goal builds its feature. The pending list in
 * `coverage.test.ts` names the goal that owns each missing setting.
 */
import type { IconName } from "../ui/icons/icons";

/** The hue of a group, from the site's palette. `neutral` is no hue, for the app's own housekeeping. */
export type GroupHue = "honey" | "teal" | "iris" | "orchid" | "blue" | "neutral";

/** A group of sections: its hue, its icon, and its sections with their icons, in the order shown. */
interface GroupSpec {
  id: string;
  hue: GroupHue;
  icon: IconName;
  sections: readonly { id: string; icon: IconName }[];
}

/** The groups of the player's settings panel, in the order it shows them. The catalogs name each. */
export const GROUPS = [
  {
    id: "basics",
    hue: "honey",
    icon: "play",
    sections: [
      { id: "general", icon: "sliders-horizontal" },
      { id: "loop", icon: "repeat" },
    ],
  },
  {
    id: "audio",
    hue: "teal",
    icon: "headphones",
    sections: [
      { id: "audio", icon: "volume-2" },
      { id: "backing", icon: "audio-lines" },
    ],
  },
  {
    id: "instrument",
    hue: "iris",
    icon: "keyboard-music",
    sections: [
      { id: "keyboard", icon: "ruler" },
      { id: "input", icon: "pointer" },
    ],
  },
  {
    id: "scene",
    hue: "orchid",
    icon: "sparkles",
    sections: [
      { id: "view", icon: "camera" },
      { id: "piano", icon: "piano" },
      { id: "notes", icon: "music" },
      { id: "lanes", icon: "columns-3" },
      { id: "particles", icon: "flame" },
    ],
  },
  {
    id: "reading",
    hue: "blue",
    icon: "book-open",
    sections: [
      { id: "labels", icon: "tag" },
      { id: "lyrics", icon: "mic-vocal" },
      { id: "coding", icon: "palette" },
      { id: "sheet", icon: "file-music" },
    ],
  },
  {
    id: "app",
    hue: "neutral",
    icon: "settings",
    sections: [
      { id: "pdf", icon: "file-down" },
      { id: "offline", icon: "wifi-off" },
    ],
  },
] as const satisfies readonly GroupSpec[];

/** A group of the panel. */
export type PanelGroup = (typeof GROUPS)[number]["id"];

/** A section of the panel. */
export type PanelSection = (typeof GROUPS)[number]["sections"][number]["id"];

/** The sections of the player's settings panel, in the order it shows them. The catalogs name each. */
export const SECTIONS: readonly PanelSection[] = GROUPS.flatMap((group) => group.sections.map((section) => section.id));

/** A section's id. `site` holds the site's own settings, which the top bar switches and the panel never shows. */
export type Section = PanelSection | "site";

/** What every kind of setting has. */
interface Base<I extends string> {
  id: I;
  section: Section;
}

/** On or off. */
export interface ToggleSetting<I extends string = string> extends Base<I> {
  kind: "toggle";
  default: boolean;
}

/** A number from `min` to `max`, on a grid of `step` from `min`. */
export interface NumberSetting<I extends string = string> extends Base<I> {
  kind: "number";
  default: number;
  min: number;
  max: number;
  step: number;
}

/** A whole MIDI note number from `min` to `max`. */
export interface NoteSetting<I extends string = string> extends Base<I> {
  kind: "note";
  default: number;
  min: number;
  max: number;
}

/** One of a fixed list of values, which the catalogs label. */
export interface ChoiceSetting<I extends string = string, V extends string = string> extends Base<I> {
  kind: "choice";
  default: V;
  options: readonly V[];
}

/** Any of a fixed list of values at once, stored as the picked ones joined by commas in the list's order. */
export interface MultiSetting<I extends string = string, V extends string = string> extends Base<I> {
  kind: "multi";
  default: string;
  options: readonly V[];
}

/** A colour as `#rrggbbaa`. */
export interface ColourSetting<I extends string = string> extends Base<I> {
  kind: "colour";
  default: string;
}

/** Free text of at most `maxLength` characters. */
export interface TextSetting<I extends string = string> extends Base<I> {
  kind: "text";
  default: string;
  maxLength: number;
}

/** A button in the panel. It stores nothing. */
export interface ActionSetting<I extends string = string> extends Base<I> {
  kind: "action";
}

/** A setting of any kind. */
export type Setting = ToggleSetting | NumberSetting | NoteSetting | ChoiceSetting | MultiSetting | ColourSetting | TextSetting | ActionSetting;

/** A setting that stores a value: every kind but action. */
export type ValueSetting = Exclude<Setting, ActionSetting>;

function toggle<const I extends string>(id: I, section: Section, value: boolean): ToggleSetting<I> {
  return { id, section, kind: "toggle", default: value };
}

function number<const I extends string>(id: I, section: Section, value: number, range: { min: number; max: number; step: number }): NumberSetting<I> {
  return { id, section, kind: "number", default: value, ...range };
}

/** A note on the 88 keys of a piano, MIDI 21 to 108. */
function note<const I extends string>(id: I, section: Section, value: number): NoteSetting<I> {
  return { id, section, kind: "note", default: value, min: 21, max: 108 };
}

function choice<const I extends string, const V extends string>(id: I, section: Section, value: NoInfer<V>, options: readonly V[]): ChoiceSetting<I, V> {
  return { id, section, kind: "choice", default: value, options };
}

function multi<const I extends string, const V extends string>(id: I, section: Section, value: readonly NoInfer<V>[], options: readonly V[]): MultiSetting<I, V> {
  return { id, section, kind: "multi", default: picksOf(value.join(","), options).join(","), options };
}

/** The texts a note can carry, in the order the scene stacks them from the note's front end. */
export const NOTE_LABELS = ["name", "keyBinding", "fingering"] as const;

/** The options `value` picks, in the order of `options`. A value that is no option is left out. */
export function picksOf<V extends string>(value: string, options: readonly V[]): V[] {
  const picked = new Set(value.split(","));
  return options.filter((option) => picked.has(option));
}

function text<const I extends string>(id: I, section: Section, value: string, maxLength: number): TextSetting<I> {
  return { id, section, kind: "text", default: value, maxLength };
}

function colour<const I extends string>(id: I, section: Section, value: string): ColourSetting<I> {
  return { id, section, kind: "colour", default: value };
}

function action<const I extends string>(id: I, section: Section): ActionSetting<I> {
  return { id, section, kind: "action" };
}

const GAIN = { min: 0, max: 2, step: 0.01 };
const SECONDS = { min: 0, max: 5, step: 0.01 };
const UNIT = { min: 0, max: 1, step: 0.01 };
const DECIBELS = { min: -24, max: 24, step: 0.5 };
const MEASURE = { min: 1, max: 9999, step: 1 };

/** Every setting, section by section. Inside a section the panel keeps this order. */
export const SETTINGS = [
  // Site. The top bar switches both, and `src/i18n/locale.ts` says how `auto` picks a language.
  // The locales are written out, since reading `LOCALES` makes the catalogs' type depend on itself. A
  // locale missing here fails the type check where the top bar stores the learner's pick.
  choice("siteTheme", "site", "system", ["system", "light", "dark"]),
  choice("language", "site", "auto", ["auto", "en", "de"]),
  // The rewards' sounds of *Learn Piano*, which `src/learn/game/sfx.ts` plays. The profile switches it.
  toggle("learnSounds", "site", true),
  // The daily goal in XP, as `DAILY_GOALS` of `src/learn/game/streak.ts` lists them. The first visit
  // and the profile set it. A choice stores text, so `dailyGoalOf` reads it as a number.
  choice("learnDailyGoal", "site", "20", ["10", "20", "30", "50"]),
  // Whether the first-visit setup of `src/learn/onboarding.ts` has run.
  toggle("learnSetupDone", "site", false),
  // Whether the player's control bar shows its expert tools. The bar's Expert button switches it.
  toggle("expertControls", "site", false),

  // General
  choice("theme", "general", "dark", ["dark", "light"]),
  // Opens the Data page at `data/`, which saves and restores every setting with the rest of the data.
  action("yourData", "general"),
  toggle("startWithLastSong", "general", true),
  toggle("saveIndexedDb", "general", true),
  toggle("disableHotkeys", "general", false),
  text("hotKeyBindings", "general", "", 2000),
  number("leadIn", "general", 2, { min: 0, max: 10, step: 0.5 }),
  toggle("restartSongOnEnd", "general", false),
  toggle("playNotesOnScrollEnabled", "general", false),
  toggle("fitZoomOnNewSong", "general", false),
  number("transposeOffset", "general", 0, { min: -12, max: 12, step: 1 }),
  toggle("reverseNoteDirection", "general", false),
  number("renderOffset", "general", 0, { min: -500, max: 500, step: 1 }),
  toggle("showBPM", "general", false),
  toggle("showFps", "general", false),
  toggle("showNoteDebugInfo", "general", false),
  toggle("showMilliseconds", "general", false),
  toggle("progressBarMeasures", "general", false),
  toggle("progressBarMeasureLines", "general", false),
  toggle("showMarkersTimeline", "general", false),

  // Loop. Measures count from 1, as the timeline shows them.
  toggle("enableLoop", "loop", false),
  number("loopStart", "loop", 1, MEASURE),
  number("loopEnd", "loop", 2, MEASURE),
  number("loopDelay", "loop", 4, { min: 0, max: 16, step: 1 }),
  toggle("enableLoopBeats", "loop", true),
  toggle("autoLoop", "loop", true),
  toggle("muteLoop", "loop", true),
  toggle("loopTrainer", "loop", false),
  number("loopTrainerSpeed", "loop", 50, { min: 10, max: 100, step: 5 }),

  // Sound
  number("volumeMain", "audio", 1, UNIT),
  number("masterGain", "audio", 1, GAIN),
  number("inputGain", "audio", 1, GAIN),
  number("velocityStrength", "audio", 1, GAIN),
  toggle("sustainEnabled", "audio", true),
  toggle("enableReverb", "audio", true),
  choice("reverbImpulseResponse", "audio", "room", ["room", "hall", "church"]),
  number("detune", "audio", 0, { min: -100, max: 100, step: 1 }),
  number("adsrAttack", "audio", 0, SECONDS),
  number("adsrDecay", "audio", 0, SECONDS),
  number("adsrSustain", "audio", 100, { min: 0, max: 100, step: 1 }),
  number("adsrReleaseKey", "audio", 0.35, SECONDS),
  number("adsrReleasePedal", "audio", 0.35, SECONDS),
  toggle("enableMetronome", "audio", false),
  choice("metronomeMidiOutput", "audio", "both", ["both", "midi", "speakers"]),
  number("metronomeNoteNumber", "audio", 76, { min: 0, max: 127, step: 1 }),
  choice("metronomeInstrument", "audio", "woodblock", ["woodblock", "drums", "piano"]),
  number("metronomeVolume", "audio", 0.1, UNIT),
  toggle("synchedMetronome", "audio", true),
  toggle("enableEqualizer", "audio", false),
  number("equalizerGain0", "audio", 0, DECIBELS),
  number("equalizerGain1", "audio", 0, DECIBELS),
  number("equalizerGain2", "audio", 0, DECIBELS),
  number("equalizerGain3", "audio", 0, DECIBELS),
  number("equalizerGain4", "audio", 0, DECIBELS),
  number("scheduleAheadMs", "audio", 100, { min: 20, max: 1000, step: 1 }),
  number("scheduleIntervalMs", "audio", 25, { min: 5, max: 200, step: 1 }),

  // Background track: an audio file the learner picks, kept until the page reloads.
  action("bgTrackFile", "backing"),
  toggle("bgTrackEnable", "backing", false),
  number("bgTrackVolume", "backing", 50, { min: 0, max: 100, step: 1 }),
  number("bgTrackSpeed", "backing", 100, { min: 25, max: 400, step: 1 }),
  number("bgTrackOffset", "backing", 0, { min: -60, max: 600, step: 0.01 }),
  toggle("bgTrackLoop", "backing", false),

  // View
  choice("cameraPreset", "view", "classic", ["classic", "player", "cinematic", "flat"]),
  action("resetCamera", "view"),
  choice("glowMode", "view", "auto", ["auto", "on", "off"]),
  number("glowStrength", "view", 0.8, { min: 0, max: 3, step: 0.05 }),
  toggle("zoomByMeasures", "view", false),
  number("noteToHeightConst", "view", 7.5, { min: 1, max: 600, step: 0.5 }),
  number("measuresShownOnScreen", "view", 4, { min: 1, max: 200, step: 1 }),

  // Your keyboard. Every reader takes the two notes through `normalizeRange` in `src/keyboard/range.ts`.
  note("keyboardFirstNote", "keyboard", 21),
  note("keyboardLastNote", "keyboard", 108),
  toggle("foldOutsideNotes", "keyboard", false),

  // Input
  choice("playMode", "input", "player", ["player", "freePlay", "pitchPractice"]),
  choice("pitchPracticeKey", "input", "C", ["chromatic", "C", "G", "D", "A", "E", "B", "Gb", "Db", "Ab", "Eb", "Bb", "F"]),
  note("pitchPracticeFirstNote", "input", 60),
  note("pitchPracticeLastNote", "input", 72),
  number("pitchPracticeCount", "input", 10, { min: 1, max: 100, step: 1 }),
  toggle("saveMidiDevices", "input", true),
  text("keyBindings", "input", "", 2000),
  toggle("waitForNotes", "input", false),
  choice("playHands", "input", "both", ["both", "right", "left"]),
  toggle("playalongSilentNotes", "input", false),
  number("playalongSilentNotesChannel", "input", 3, { min: 1, max: 16, step: 1 }),
  toggle("enableScoreMode", "input", false),
  number("scoreHitWindow", "input", 150, { min: 20, max: 500, step: 10 }),
  number("scorePerfectWindow", "input", 50, { min: 10, max: 200, step: 5 }),
  toggle("enableGameMode", "input", false),
  choice("gameDifficulty", "input", "easy", ["easy", "normal", "hard"]),

  // Piano
  toggle("clickablePiano", "piano", true),
  toggle("highlightActivePianoKeys", "piano", true),
  colour("inputNoteColorWhite", "piano", "#ffb74dff"),
  colour("inputNoteColorBlack", "piano", "#f57c00ff"),
  colour("pianoWhiteKeyColor", "piano", "#f4f4f0ff"),
  colour("pianoBlackKeyColor", "piano", "#161616ff"),
  colour("pianoVelvetColor", "piano", "#6b1020ff"),
  colour("pianoBackgroundColor", "piano", "#1b1d22ff"),
  number("pianoPosition", "piano", 0, { min: 0, max: 100, step: 1 }),
  number("whiteKeyHeight", "piano", 100, { min: 50, max: 200, step: 1 }),
  toggle("enableKeyFlare", "piano", false),
  toggle("pianoLineEnabled", "piano", false),
  number("pianoLineSpeed", "piano", 6, { min: 0, max: 20, step: 0.5 }),
  number("pianoLineResolution", "piano", 5, { min: 1, max: 20, step: 0.5 }),
  number("pianoLineAmplitude", "piano", 0.6, { min: 0, max: 3, step: 0.05 }),
  colour("pianoLineColor", "piano", "#7fd4ffff"),
  number("pianoLineOpacity", "piano", 1, UNIT),
  number("pianoLineYOffset", "piano", 0, { min: -2, max: 5, step: 0.05 }),

  // Notes. Lengths are in key widths, the scene's unit, because the 3D picture has no fixed pixel size.
  toggle("showHitKeys", "notes", true),
  number("noteWidth", "notes", 86, { min: 20, max: 100, step: 1 }),
  toggle("roundedNotes", "notes", true),
  number("noteBorderRadius", "notes", 15, { min: 0, max: 50, step: 1 }),
  number("minNoteHeight", "notes", 0.25, { min: 0.05, max: 2, step: 0.05 }),
  toggle("strokeNotes", "notes", true),
  number("strokeNotesWidth", "notes", 0.35, { min: 0, max: 2, step: 0.05 }),
  toggle("noteEndedShrink", "notes", true),
  number("playedNoteFalloffSpeed", "notes", 6, { min: 0, max: 20, step: 0.5 }),
  toggle("showSustainedNotes", "notes", true),
  number("sustainedNotesOpacity", "notes", 45, { min: 0, max: 100, step: 1 }),

  // Lanes and lines. Line thickness is in key widths.
  colour("bgCol1", "lanes", "#101624ff"),
  colour("bgCol5", "lanes", "#0a0e18ff"),
  colour("bgCol3", "lanes", "#2a3550ff"),
  toggle("drawMeasureLines", "lanes", true),
  number("measureLineThickness", "lanes", 0.07, { min: 0.01, max: 0.5, step: 0.01 }),
  colour("measureLineColor", "lanes", "#5a6684ff"),
  toggle("enableDrawBeatLines", "lanes", true),
  number("beatLineThickness", "lanes", 0.03, { min: 0.01, max: 0.5, step: 0.01 }),
  colour("beatLineColor", "lanes", "#262e42ff"),
  toggle("enableDrawMeasureNumbers", "lanes", true),
  colour("measureNumbersColor", "lanes", "#8a95b0ff"),
  toggle("highlightInputLanes", "lanes", false),
  number("inputLaneOpacity", "lanes", 0.15, UNIT),
  toggle("showMarkersSong", "lanes", false),
  toggle("showSustainPeriods", "lanes", false),
  toggle("showSustainOnOffs", "lanes", false),
  toggle("showSustainChannels", "lanes", false),

  // The effects. One switch runs them, the flames and presets run together, and the learner's own preset is the settings after them.
  toggle("showParticles", "particles", false),
  toggle("particlesFlames", "particles", false),
  toggle("particlesSparks", "particles", true),
  toggle("particlesEmbers", "particles", false),
  toggle("particlesStars", "particles", false),
  toggle("particlesCustom", "particles", false),
  choice("particlesTexture", "particles", "circle", ["circle", "spark", "smoke", "star", "ring"]),
  choice("particlesBlending", "particles", "additive", ["additive", "normal"]),
  toggle("particleOverrideColor", "particles", false),
  colour("particleColor", "particles", "#ffd27fff"),
  number("particlesOpacity", "particles", 1, UNIT),
  number("particleSize", "particles", 0.5, { min: 0.02, max: 3, step: 0.01 }),
  number("particleAmount", "particles", 1, { min: 0, max: 10, step: 0.05 }),
  number("particleLife", "particles", 1.2, { min: 0.1, max: 10, step: 0.05 }),
  number("particleSpeed", "particles", 1, { min: 0.1, max: 5, step: 0.05 }),
  number("particleFadeOut", "particles", 1, UNIT),
  number("particlesShrink", "particles", 0.6, { min: -3, max: 1, step: 0.05 }),
  number("particleSpeedX", "particles", 0.8, { min: 0, max: 20, step: 0.1 }),
  number("particleSpeedY", "particles", 3, { min: -20, max: 20, step: 0.1 }),
  number("particlesFriction", "particles", 1.5, { min: 0, max: 10, step: 0.05 }),
  number("particleRising", "particles", -1, { min: -20, max: 20, step: 0.1 }),
  number("particlesRotation", "particles", 0, { min: 0, max: 360, step: 1 }),
  number("particlesRotationRandom", "particles", 180, { min: 0, max: 360, step: 1 }),
  number("particlesRotationSpeed", "particles", 0, { min: -720, max: 720, step: 5 }),
  number("particleNoiseResX", "particles", 0.5, { min: 0, max: 5, step: 0.05 }),
  number("particleNoiseStrengthX", "particles", 0.3, { min: 0, max: 5, step: 0.05 }),
  number("particleNoiseResY", "particles", 0.5, { min: 0, max: 5, step: 0.05 }),
  number("particleNoiseStrengthY", "particles", 0.3, { min: 0, max: 5, step: 0.05 }),
  number("particleNoiseStrengthSize", "particles", 0.5, UNIT),
  number("turbulenceXAmplitude", "particles", 0.2, { min: 0, max: 5, step: 0.05 }),
  number("turbulenceXFrequency", "particles", 0.5, { min: 0, max: 5, step: 0.05 }),
  number("turbulenceYAmplitude", "particles", 0.2, { min: 0, max: 5, step: 0.05 }),
  number("turbulenceYFrequency", "particles", 0.5, { min: 0, max: 5, step: 0.05 }),
  number("particleYOffset", "particles", 0, { min: -2, max: 5, step: 0.05 }),
  choice("particleDistributionX", "particles", "across", ["across", "centre"]),
  number("particleDistributionXSpread", "particles", 100, { min: 0, max: 200, step: 5 }),
  choice("particleDistributionY", "particles", "hitLine", ["hitLine", "key"]),
  choice("particleDistributionZ", "particles", "behind", ["behind", "front"]),

  // Labels
  choice("pitchNotationSystem", "labels", "letters", ["letters", "solfege"]),
  multi("noteLabel", "labels", [], NOTE_LABELS),
  colour("noteLabelColor", "labels", "#ffffffff"),
  toggle("showKeyNamesOnPianoWhite", "labels", false),
  toggle("showKeyNamesOnPianoBlack", "labels", false),
  toggle("showPianoKeyNameFlats", "labels", false),
  choice("octaveLabel", "labels", "none", ["none", "all", "onlyC"]),
  toggle("showKeyBindingsOnPiano", "labels", false),
  toggle("showChords", "labels", false),
  choice("chordLabelStyle", "labels", "bar", ["bar", "ribbon"]),
  choice("chordLabelPlacement", "labels", "middle", ["above", "top", "middle", "bottom", "below"]),
  toggle("showChordRomanNumerals", "labels", false),
  choice("chordBlocks", "labels", "tone", ["none", "tone", "degree"]),
  choice("chordToneNotation", "labels", "simple", ["simple", "full"]),
  toggle("chordMarkRoot", "labels", false),

  // Lyrics, from the song's lyric events, one line at a time over the scene.
  toggle("lyricsEnabled", "lyrics", false),
  colour("lyricsBackground", "lyrics", "#0b0f1a99"),
  colour("lyricsFontColor", "lyrics", "#e8ecf6ff"),
  colour("lyricsFontColorPlayed", "lyrics", "#7d88a6ff"),
  colour("lyricsFontColorActive", "lyrics", "#ffd54aff"),
  number("lyricsFontSize", "lyrics", 36, { min: 12, max: 96, step: 1 }),
  number("lyricsY", "lyrics", 30, { min: 0, max: 100, step: 1 }),
  toggle("lyricsCursorEnabled", "lyrics", true),
  toggle("lyricsBouncingCursor", "lyrics", true),

  // Colour coding. A finger's colour wins over a pitch's, and either wins over the track's.
  toggle("enableColorCodingNote", "coding", false),
  toggle("enableColorCodingNotePiano", "coding", false),
  colour("colorCodeNote0", "coding", "#e5484dff"),
  colour("colorCodeNote1", "coding", "#f06a3cff"),
  colour("colorCodeNote2", "coding", "#f5a524ff"),
  colour("colorCodeNote3", "coding", "#d6c62bff"),
  colour("colorCodeNote4", "coding", "#9bcf3cff"),
  colour("colorCodeNote5", "coding", "#46a758ff"),
  colour("colorCodeNote6", "coding", "#2fb5a0ff"),
  colour("colorCodeNote7", "coding", "#2fa6d6ff"),
  colour("colorCodeNote8", "coding", "#3e7bd0ff"),
  colour("colorCodeNote9", "coding", "#6a5ed6ff"),
  colour("colorCodeNote10", "coding", "#9b4ec6ff"),
  colour("colorCodeNote11", "coding", "#d04aa0ff"),
  toggle("enableColorCodingFinger", "coding", false),
  toggle("enableColorCodingFingerPiano", "coding", false),
  colour("colorCodeFinger1Right", "coding", "#e5484dff"),
  colour("colorCodeFinger2Right", "coding", "#f5a524ff"),
  colour("colorCodeFinger3Right", "coding", "#46a758ff"),
  colour("colorCodeFinger4Right", "coding", "#3e8ed0ff"),
  colour("colorCodeFinger5Right", "coding", "#8e4ec6ff"),
  colour("colorCodeFingerDefaultRight", "coding", "#8b8d98ff"),
  colour("colorCodeFinger1Left", "coding", "#f2898cff"),
  colour("colorCodeFinger2Left", "coding", "#f9c873ff"),
  colour("colorCodeFinger3Left", "coding", "#8ccf98ff"),
  colour("colorCodeFinger4Left", "coding", "#8bbbe6ff"),
  colour("colorCodeFinger5Left", "coding", "#bb92dcff"),
  colour("colorCodeFingerDefaultLeft", "coding", "#b4b6bfff"),

  // Sheet music. Note values are stored as their denominator, 4 for a quarter and 32 for a 32nd.
  toggle("enableSheet", "sheet", false),
  toggle("enableFullSheet", "sheet", false),
  toggle("sheetMeasureScroll", "sheet", true),
  choice("sheetMeasureNumbers", "sheet", "lineStart", ["off", "lineStart", "every"]),
  toggle("enableGrandStaff", "sheet", true),
  toggle("sheetAutoClef", "sheet", true),
  choice("overrideTimeSignature", "sheet", "auto", ["auto", "2/4", "3/4", "4/4", "5/4", "2/2", "6/8", "9/8", "12/8"]),
  choice("sheetMinNoteDenom", "sheet", "32", ["4", "8", "16", "32", "64"]),
  choice("hideRestsBelow", "sheet", "16", ["none", "4", "8", "16", "32"]),
  toggle("renderSheetCursor", "sheet", true),
  toggle("sheetColorActiveNotes", "sheet", true),
  toggle("sheetColorByTrack", "sheet", true),
  colour("sheetActiveNotesColor", "sheet", "#0288d1ff"),
  toggle("sheetHighlightActiveNotes", "sheet", false),
  colour("sheetActiveHighlightColor", "sheet", "#ffb300ff"),
  toggle("sheetActiveGrowEffect", "sheet", false),
  toggle("sheetRenderInputNotes", "sheet", true),
  toggle("sheetShowHoverInfo", "sheet", true),
  colour("sheetBgColor", "sheet", "#f7f3e8ff"),

  // PDF export: the falling notes above a piano, one page per screen.
  action("pdfExportButtonGroup", "pdf"),
  toggle("exportPdfBackground", "pdf", false),

  // Offline: which parts of the app are saved for use without a network.
  action("offlineCache", "offline"),
  toggle("autoCacheSongs", "offline", false),
  toggle("autoCacheSounds", "offline", false),
] as const;

/** Any entry of `SETTINGS`, with its literal id. */
type Entry = (typeof SETTINGS)[number];

/** The id of a setting that stores a value. */
export type SettingId = Exclude<Entry, ActionSetting>["id"];

/** The id of a colour setting. */
export type ColourId = Extract<Entry, { kind: "colour" }>["id"];

/** The type of the value a kind of setting stores. */
type ValueOf<E> = E extends ToggleSetting
  ? boolean
  : E extends NumberSetting | NoteSetting
    ? number
    : E extends ChoiceSetting<string, infer V>
      ? V
      : string;

/** The type of the value setting `K` stores. */
export type SettingValue<K extends SettingId> = ValueOf<Extract<Entry, { id: K }>>;

/** One value for every setting. */
export type SettingValues = { [K in SettingId]: SettingValue<K> };

/** The texts of setting `E` in a catalog: its label, its help and, for a choice or a multi, each value's label. */
export type SettingTexts<E> = { label: string; help: string } & (E extends ChoiceSetting<string, infer V> | MultiSetting<string, infer V>
  ? { options: Record<V, string> }
  : unknown);

/** The texts of every setting, by id, as each locale's catalog holds them. */
export type SettingsTexts = { [E in Entry as E["id"]]: SettingTexts<E> };

/**
 * The sub-headings that cut a long section, each by the setting it stands before. A sub-heading holds
 * every setting from its own to the next sub-heading or the section's end. The catalogs name each.
 */
export const SUBHEADINGS = {
  theme: "generalApp",
  leadIn: "generalSong",
  showBPM: "generalReadouts",
  volumeMain: "audioVolume",
  enableReverb: "audioRoom",
  adsrAttack: "audioEnvelope",
  enableMetronome: "audioMetronome",
  enableEqualizer: "audioEqualizer",
  scheduleAheadMs: "audioTiming",
  playMode: "inputMode",
  saveMidiDevices: "inputDevices",
  waitForNotes: "inputAlong",
  enableScoreMode: "inputScore",
  clickablePiano: "pianoPressed",
  pianoWhiteKeyColor: "pianoLook",
  enableKeyFlare: "pianoFlare",
  pianoLineEnabled: "pianoWave",
  bgCol1: "lanesColours",
  drawMeasureLines: "lanesLines",
  highlightInputLanes: "lanesHeld",
  showMarkersSong: "lanesMarkers",
  showParticles: "particlesEffects",
  particlesTexture: "particlesLook",
  particleAmount: "particlesLife",
  particleSpeedX: "particlesMotion",
  particleNoiseResX: "particlesWander",
  particleYOffset: "particlesStart",
  pitchNotationSystem: "labelsNotes",
  showKeyNamesOnPianoWhite: "labelsPiano",
  showChords: "labelsChords",
  enableColorCodingNote: "codingPitch",
  enableColorCodingFinger: "codingFinger",
  enableSheet: "sheetLayout",
  enableGrandStaff: "sheetNotation",
  renderSheetCursor: "sheetCursor",
} as const satisfies Partial<Record<Entry["id"], string>>;

/** A sub-heading of a section. */
export type Subheading = (typeof SUBHEADINGS)[keyof typeof SUBHEADINGS];

/** The settings that store a value, by id. */
export const VALUE_SETTINGS: ReadonlyMap<string, ValueSetting> = new Map(
  (SETTINGS as readonly Setting[]).filter((s): s is ValueSetting => s.kind !== "action").map((s) => [s.id, s]),
);

/** Every setting at its default. */
export function defaults(): SettingValues {
  const out: Record<string, unknown> = {};
  for (const s of VALUE_SETTINGS.values()) out[s.id] = s.default;
  return out as SettingValues;
}
