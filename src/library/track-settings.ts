/**
 * Track settings: each track's visibility, mute, hand, colour, volume and place in the sheet music,
 * kept per song, with the defaults a new song takes, and the song's key when the learner sets one.
 *
 * `TrackStore` keeps the settings, and `TrackState` holds the open song's and tells its listeners of
 * each change. The scene reads the colour, the visibility and the key, the transport the mute and
 * volume, wait mode the hand, and the sheet view the sheet switch, the colour and the key.
 *
 * Decisions, and what each costs:
 * - A song is known by its id: `catalog:` and its file for a catalog song, its upload id for an upload,
 *   and `demo` for the demo song. A song's settings are stored only once the learner changes one, so
 *   opening songs never fills the storage.
 * - Everything lives in `localStorage`, under `SONG_TRACKS_KEY` and `TRACK_DEFAULTS_KEY`, beside the
 *   last song. One store then serves catalog songs and uploads alike. A track costs about 100 bytes, so
 *   thousands of songs fit. A storage that refuses keeps the settings for the session only.
 * - The defaults are kept by track index, without the hand. A hand depends on the song's notes, so a
 *   new song takes its hands from `autoHands`, and the rest from the defaults or the built-in values.
 * - A hand of `none` is how a track stops being required to play. One field then says both which hand
 *   plays a track and whether the learner plays it at all.
 * - A song's key lives under `SONG_KEYS_KEY`, apart from its tracks, so the stored track lists keep
 *   their shape. Resetting a song forgets its key too, and detection names it again.
 * - Every stored value is checked on read, and a missing or malformed field takes its default. A track
 *   the stored list lacks takes its default too, so a stored song never fails to open.
 */
import { noteChange } from "../data/changes";
import type { Song } from "../midi/song";
import { autoHands, type TrackHand, type TrackHands } from "../input/wait-mode";
import type { StorageLike } from "../settings/store";
import { type Key, readKey } from "../theory/key";

/** How one track of a song shows, sounds and is played. */
export interface TrackSetting {
  visible: boolean;
  muted: boolean;
  hand: TrackHand;
  /** The colour of its notes, as `#rrggbbaa`. */
  color: string;
  /** Its volume, from 0 to 1. */
  volume: number;
  /** Whether the sheet music draws its staff. */
  sheet: boolean;
}

/** What a new song takes for a track by its index. The hand comes from the song's notes. */
export type TrackDefault = Omit<TrackSetting, "hand">;

/** The `localStorage` key of every song's changed track settings, by song id. */
export const SONG_TRACKS_KEY = "learn-piano-easy.tracks";

/** The `localStorage` key of the defaults for new songs, by track index. */
export const TRACK_DEFAULTS_KEY = "learn-piano-easy.trackDefaults";

/** The `localStorage` key of every song's key override, by song id. */
export const SONG_KEYS_KEY = "learn-piano-easy.songKeys";

/** The song id of the demo song, which plays until a song opens. */
export const DEMO_SONG_ID = "demo";

/** The built-in colour of each track by index, repeating past the end. */
const TRACK_COLORS = ["#4fc3f7ff", "#b388ffff", "#81c784ff", "#ffb74dff", "#f06292ff", "#4db6acff", "#fff176ff", "#9575cdff"];

const HANDS: readonly TrackHand[] = ["right", "left", "split", "none"];

/** The built-in default of the track at `index`. */
export function builtInDefault(index: number): TrackDefault {
  return { visible: true, muted: false, color: TRACK_COLORS[index % TRACK_COLORS.length]!, volume: 1, sheet: true };
}

/** The settings a song takes before the learner changes any: the defaults, and the hands of `autoHands`. */
export function defaultTracks(song: Song, defaults: readonly TrackDefault[]): TrackSetting[] {
  const hands = autoHands(song);
  return song.tracks.map((_, index) => ({ ...(defaults[index] ?? builtInDefault(index)), hand: hands[index] ?? "none" }));
}

/** `raw` as an object of values by song id, or an empty one when it is not such an object. */
function record(raw: unknown): Record<string, unknown> {
  return typeof raw === "object" && raw !== null && !Array.isArray(raw) ? (raw as Record<string, unknown>) : {};
}

/** `raw` read as a track default, each field checked, with `fallback` for a field that is wrong. */
function readDefault(raw: unknown, fallback: TrackDefault): TrackDefault {
  const value = typeof raw === "object" && raw !== null ? (raw as Record<string, unknown>) : {};
  return {
    visible: typeof value.visible === "boolean" ? value.visible : fallback.visible,
    muted: typeof value.muted === "boolean" ? value.muted : fallback.muted,
    color: typeof value.color === "string" && /^#[0-9a-f]{8}$/i.test(value.color) ? value.color : fallback.color,
    volume: typeof value.volume === "number" && value.volume >= 0 && value.volume <= 1 ? value.volume : fallback.volume,
    sheet: typeof value.sheet === "boolean" ? value.sheet : fallback.sheet,
  };
}

/** `raw` read as a track setting, each field checked, with `fallback` for a field that is wrong. */
function readSetting(raw: unknown, fallback: TrackSetting): TrackSetting {
  const hand = typeof raw === "object" && raw !== null ? (raw as Record<string, unknown>).hand : undefined;
  return { ...readDefault(raw, fallback), hand: HANDS.includes(hand as TrackHand) ? (hand as TrackHand) : fallback.hand };
}

/** Keeps each song's track settings and the defaults for new songs in `storage`. */
export class TrackStore {
  readonly #storage: StorageLike | null;
  readonly #songs: Record<string, unknown>;
  readonly #keys: Record<string, unknown>;
  #defaults: TrackDefault[];

  /** Reads `storage`. Null keeps everything in memory. */
  constructor(storage: StorageLike | null) {
    this.#storage = storage;
    this.#songs = record(this.#read(SONG_TRACKS_KEY));
    this.#keys = record(this.#read(SONG_KEYS_KEY));
    const defaults = this.#read(TRACK_DEFAULTS_KEY);
    this.#defaults = Array.isArray(defaults) ? defaults.map((raw, index) => readDefault(raw, builtInDefault(index))) : [];
  }

  /** The track settings of `song`, known as `id`: the stored ones, or the defaults for a new song. */
  tracksFor(id: string, song: Song): TrackSetting[] {
    const fallback = defaultTracks(song, this.#defaults);
    const stored = this.#songs[id];
    if (!Array.isArray(stored)) return fallback;
    return fallback.map((track, index) => readSetting(stored[index], track));
  }

  /** Keeps `tracks` as the settings of the song `id`. */
  save(id: string, tracks: readonly TrackSetting[]): void {
    this.#songs[id] = tracks.map((track) => ({ ...track }));
    this.#write(SONG_TRACKS_KEY, this.#songs);
  }

  /** Keeps `tracks`, without their hands, as the defaults new songs take by track index. */
  saveDefaults(tracks: readonly TrackSetting[]): void {
    this.#defaults = tracks.map(({ visible, muted, color, volume, sheet }) => ({ visible, muted, color, volume, sheet }));
    this.#write(TRACK_DEFAULTS_KEY, this.#defaults);
  }

  /** The key the learner set for the song `id`, or undefined when its notes give its key. */
  keyFor(id: string): Key | undefined {
    return readKey(this.#keys[id]);
  }

  /** Keeps `key` as the song `id`'s key, or forgets its key when undefined. */
  saveKey(id: string, key: Key | undefined): void {
    if (key === undefined) {
      if (!(id in this.#keys)) return;
      delete this.#keys[id];
    } else this.#keys[id] = { tonic: key.tonic, mode: key.mode };
    this.#write(SONG_KEYS_KEY, this.#keys);
  }

  /** Forgets the settings and the key of the song `id`, so it opens with the defaults again. */
  forget(id: string): void {
    this.saveKey(id, undefined);
    if (!(id in this.#songs)) return;
    delete this.#songs[id];
    this.#write(SONG_TRACKS_KEY, this.#songs);
  }

  #read(key: string): unknown {
    try {
      return JSON.parse(this.#storage?.getItem(key) ?? "null");
    } catch {
      return null;
    }
  }

  #write(key: string, value: unknown): void {
    try {
      this.#storage?.setItem(key, JSON.stringify(value));
    } catch {
      return; // A storage that refuses keeps the settings for this session only.
    }
    noteChange("tracks");
  }
}

/** The open song's track settings. Each change is stored and told to the listeners. */
export class TrackState implements TrackHands {
  readonly #store: TrackStore;
  readonly #listeners = new Set<() => void>();
  #id = DEMO_SONG_ID;
  #song: Song | undefined;
  #tracks: TrackSetting[] = [];
  #key: Key | undefined;

  constructor(store: TrackStore) {
    this.#store = store;
  }

  /** The key the learner set for the open song, or undefined when its notes give its key. */
  get key(): Key | undefined {
    return this.#key;
  }

  /** Sets the open song's key, or hands it back to detection when undefined, and keeps it. */
  setKey(key: Key | undefined): void {
    this.#key = key;
    this.#store.saveKey(this.#id, key);
    this.#tell();
  }

  /** The open song, or undefined before one is loaded. */
  get song(): Song | undefined {
    return this.#song;
  }

  /** The open song's track settings, by track index. */
  get tracks(): readonly TrackSetting[] {
    return this.#tracks;
  }

  /** The hand of each track, by track index. */
  hands(): readonly TrackHand[] {
    return this.#tracks.map((track) => track.hand);
  }

  /** Takes `song`, known as `id`, with its stored settings or the defaults. */
  load(id: string, song: Song): void {
    this.#id = id;
    this.#song = song;
    this.#tracks = this.#store.tracksFor(id, song);
    this.#key = this.#store.keyFor(id);
    this.#tell();
  }

  /** Changes the track at `index` by `change`, and keeps the song's settings. */
  set(index: number, change: Partial<TrackSetting>): void {
    const track = this.#tracks[index];
    if (track === undefined) return;
    this.#tracks = this.#tracks.map((each, i) => (i === index ? { ...track, ...change } : each));
    this.#store.save(this.#id, this.#tracks);
    this.#tell();
  }

  /** Makes the open song's settings the defaults for new songs. */
  makeDefaults(): void {
    this.#store.saveDefaults(this.#tracks);
  }

  /** Forgets the open song's settings, and shows the defaults. */
  reset(): void {
    this.#store.forget(this.#id);
    if (this.#song !== undefined) this.load(this.#id, this.#song);
  }

  /** Hears each change of the open song's settings, a load among them. Returns what stops it. */
  subscribe(listener: () => void): () => void {
    this.#listeners.add(listener);
    return () => this.#listeners.delete(listener);
  }

  #tell(): void {
    for (const listener of [...this.#listeners]) listener();
  }
}
