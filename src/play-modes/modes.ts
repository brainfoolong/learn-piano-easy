/**
 * The play modes: ready-made setups of the player, each a set of settings and often a song, which the
 * page at `modes/` offers as cards in three groups.
 *
 * A card hands its mode to `modeInbox` and shows the player. The player takes the mode once it is
 * built, opens its song, applies its settings through `applyMode`, and offers to undo the settings.
 *
 * Decisions, and what each costs:
 * - **Every mode sets the same settings,** the keys of `BASE`. A mode names only where it differs from
 *   the base. So a mode never inherits the last mode's help or effects, and the cost is that a mode
 *   also turns off what the learner had turned on among those keys.
 * - **A mode is undone in one step.** `applyMode` returns the values it replaced, and the player's toast
 *   puts them back. The learner's own setup is never lost to a click on a card.
 * - **A mode stays once applied.** Its settings are the learner's settings from then on, so a reload
 *   keeps the mode. Nothing marks a setting as the mode's.
 * - **A mode with a song names it by catalog file,** a version of ours, so it opens offline once cached
 *   and its fingers load with its guide. A mode without one, such as free play, keeps the open song.
 * - **The module imports only the settings' types,** so the site's bundle carries no player code.
 */
import type { SettingId, SettingValues } from "../settings/schema";
import type { SettingsStore } from "../settings/store";
import type { IconName } from "../ui/icons/icons";

/** A mode's id, which the catalogs name its texts by. */
export type PlayModeId =
  | "game"
  | "challenge"
  | "concert"
  | "playAlong"
  | "oneHand"
  | "readMusic"
  | "slowSteady"
  | "rhythm"
  | "colourByFinger"
  | "noteTrainer"
  | "freeJam"
  | "chordExplorer";

/** A group of modes, which the page shows under one heading. */
export type PlayModeGroup = "fun" | "learn" | "skills";

/** The hue a mode's card is drawn in: one of the palette's supporting hues. */
export type PlayModeHue = "iris" | "orchid" | "teal";

/** Values for some of the settings. */
export type SettingPatch = Partial<SettingValues>;

/** A ready-made setup of the player. */
export interface PlayMode {
  id: PlayModeId;
  group: PlayModeGroup;
  icon: IconName;
  hue: PlayModeHue;
  /** The song it opens, as a catalog file from `songs/`. Without one, the open song stays. */
  song?: string;
  /** Where its settings differ from `BASE`. */
  settings: SettingPatch;
}

/** The settings every mode sets, at the values a mode starts from: the song plays, with no help and no effects. */
export const BASE = {
  playMode: "player",
  enableGameMode: false,
  enableScoreMode: false,
  waitForNotes: false,
  playHands: "both",
  enableLoop: false,
  loopTrainer: false,
  enableMetronome: false,
  highlightIncomingPianoKeys: false,
  noteLabel: "",
  showKeyNamesOnPianoWhite: false,
  showKeyNamesOnPianoBlack: false,
  enableColorCodingFinger: false,
  enableColorCodingFingerPiano: false,
  showChords: false,
  showChordRomanNumerals: false,
  chordBlocks: "tone",
  chordMarkRoot: false,
  enableSheet: false,
  sheetHighlightActiveNotes: false,
  cameraPreset: "classic",
  showParticles: false,
  particlesSparks: true,
  particlesFlames: false,
  particlesStars: false,
  enableKeyFlare: false,
  pianoLineEnabled: false,
  glowMode: "auto",
} satisfies SettingPatch;

/** The effects the playful modes share: sparks from each key, a flare, the light wave and the glow. */
const EFFECTS = {
  showParticles: true,
  enableKeyFlare: true,
  pianoLineEnabled: true,
  glowMode: "on",
} satisfies SettingPatch;

/** The groups, in the order the page shows them. */
export const PLAY_MODE_GROUPS: readonly PlayModeGroup[] = ["fun", "learn", "skills"];

/** Every mode, group by group, in the order the page shows them. */
export const PLAY_MODES: readonly PlayMode[] = [
  {
    id: "game",
    group: "fun",
    icon: "trophy",
    hue: "orchid",
    song: "ours/hall-of-the-mountain-king/common.mid",
    settings: { ...EFFECTS, enableGameMode: true, gameDifficulty: "easy" },
  },
  {
    id: "challenge",
    group: "fun",
    icon: "flame",
    hue: "iris",
    song: "ours/hall-of-the-mountain-king/epic.mid",
    settings: { enableGameMode: true, gameDifficulty: "hard", showParticles: true, enableKeyFlare: true },
  },
  {
    id: "concert",
    group: "fun",
    icon: "sparkles",
    hue: "teal",
    song: "ours/carol-of-the-bells/legendary.mid",
    settings: { ...EFFECTS, cameraPreset: "cinematic", particlesFlames: true, particlesStars: true },
  },
  {
    id: "playAlong",
    group: "learn",
    icon: "tag",
    hue: "iris",
    song: "ours/ode-to-joy/common.mid",
    settings: {
      waitForNotes: true,
      highlightIncomingPianoKeys: true,
      noteLabel: "name,fingering",
      showKeyNamesOnPianoWhite: true,
      showKeyNamesOnPianoBlack: true,
    },
  },
  {
    id: "oneHand",
    group: "learn",
    icon: "pointer",
    hue: "teal",
    song: "ours/jingle-bells/common.mid",
    settings: {
      waitForNotes: true,
      playHands: "right",
      highlightIncomingPianoKeys: true,
      noteLabel: "name,fingering",
      showKeyNamesOnPianoWhite: true,
    },
  },
  {
    id: "readMusic",
    group: "learn",
    icon: "file-music",
    hue: "orchid",
    song: "ours/mary-had-a-little-lamb/common.mid",
    settings: { waitForNotes: true, enableSheet: true, sheetHighlightActiveNotes: true },
  },
  {
    id: "slowSteady",
    group: "learn",
    icon: "repeat",
    hue: "iris",
    song: "ours/fur-elise/rare.mid",
    settings: {
      enableLoop: true,
      loopStart: 1,
      loopEnd: 4,
      loopDelay: 4,
      enableLoopBeats: true,
      autoLoop: true,
      loopTrainer: true,
      loopTrainerSpeed: 50,
      noteLabel: "fingering",
    },
  },
  {
    id: "rhythm",
    group: "learn",
    icon: "audio-lines",
    hue: "teal",
    song: "ours/twinkle-twinkle-little-star/rare.mid",
    settings: { enableMetronome: true, enableScoreMode: true },
  },
  {
    id: "colourByFinger",
    group: "learn",
    icon: "palette",
    hue: "orchid",
    song: "ours/twinkle-twinkle-little-star/common.mid",
    settings: {
      waitForNotes: true,
      noteLabel: "fingering",
      enableColorCodingFinger: true,
      enableColorCodingFingerPiano: true,
    },
  },
  {
    id: "noteTrainer",
    group: "skills",
    icon: "headphones",
    hue: "teal",
    settings: {
      playMode: "pitchPractice",
      pitchPracticeKey: "C",
      pitchPracticeFirstNote: 60,
      pitchPracticeLastNote: 72,
      pitchPracticeCount: 10,
    },
  },
  {
    id: "freeJam",
    group: "skills",
    icon: "keyboard-music",
    hue: "orchid",
    settings: { ...EFFECTS, playMode: "freePlay", particlesStars: true },
  },
  {
    id: "chordExplorer",
    group: "skills",
    icon: "layers",
    hue: "iris",
    song: "ours/canon-in-d/rare.mid",
    settings: { showChords: true, showChordRomanNumerals: true, chordBlocks: "degree", chordMarkRoot: true },
  },
];

/** The mode with id `id`, or undefined when there is none. */
export function modeOf(id: string): PlayMode | undefined {
  return PLAY_MODES.find((mode) => mode.id === id);
}

/** Every setting `mode` sets, with its value: the base, then the mode's own. */
export function settingsOf(mode: PlayMode): SettingPatch {
  return { ...BASE, ...mode.settings };
}

/** Sets each setting of `patch` in `settings`, in the patch's order. */
export function applyPatch(settings: SettingsStore, patch: SettingPatch): void {
  for (const [id, value] of Object.entries(patch)) settings.set(id as SettingId, value as never);
}

/** Applies `mode` to `settings`. Returns the values it replaced, which `applyPatch` puts back. */
export function applyMode(settings: SettingsStore, mode: PlayMode): SettingPatch {
  const patch = settingsOf(mode);
  const before: Record<string, unknown> = {};
  for (const id of Object.keys(patch)) before[id] = settings.get(id as SettingId);
  applyPatch(settings, patch);
  return before as SettingPatch;
}

/** Modes waiting for the player, and the player's handler once it takes them. */
export class ModeInbox {
  #waiting: PlayMode | undefined;
  #taker: ((mode: PlayMode) => void) | undefined;

  /** Whether a mode waits for the player. */
  get waiting(): boolean {
    return this.#waiting !== undefined;
  }

  /** Hands `mode` to the player, or keeps it until the player takes the inbox. A later mode replaces it. */
  give(mode: PlayMode): void {
    if (this.#taker === undefined) this.#waiting = mode;
    else this.#taker(mode);
  }

  /** Hands the waiting mode to `taker` at once, and every later mode as it comes. */
  take(taker: (mode: PlayMode) => void): void {
    this.#taker = taker;
    const waiting = this.#waiting;
    this.#waiting = undefined;
    if (waiting !== undefined) taker(waiting);
  }
}

/** The one inbox of the page. */
export const modeInbox = new ModeInbox();
