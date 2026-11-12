/**
 * The explorer's memory: the learner's favourites and plays, and what the app measured of each song.
 *
 * Decisions, and what each costs:
 * - Everything lives in one `localStorage` entry under `SONG_MEMORY_KEY`. A song is named by the id
 *   its track settings use, `catalog:` and its file or the upload's id, and a skill list by its file.
 * - A length is measured from the song's file, since the catalog names none. It is kept in whole
 *   seconds, so a song measured once shows its length at once on every later visit.
 * - The skills of a version come from its guide. They are kept too, so the skill tags show before the
 *   guides load again.
 * - A change is written after `SAVE_DELAY_MS`, so a run of measured lengths costs one write.
 * - A stored value of the wrong shape is dropped, and a storage that refuses costs only the memory.
 *
 * Bounds: `MAX_PLAYED` plays are kept, the latest first. Lengths and skills hold one entry per song.
 */
import { noteChange } from "../data/changes";
import type { StorageLike } from "../settings/store";

/** The `localStorage` key the memory lives under. */
export const SONG_MEMORY_KEY = "learn-piano-easy.songMemory";

/** The most plays kept. */
export const MAX_PLAYED = 60;

/** How long a change waits before it is written, in milliseconds. */
const SAVE_DELAY_MS = 400;

interface Stored {
  favourites: string[];
  played: Record<string, number>;
  lengths: Record<string, number>;
  skills: Record<string, string[]>;
}

/** Whether `value` is a plain object whose values all pass `check`. */
function isMap<T>(value: unknown, check: (item: unknown) => item is T): value is Record<string, T> {
  return typeof value === "object" && value !== null && !Array.isArray(value) && Object.values(value).every(check);
}

const isNumber = (item: unknown): item is number => typeof item === "number" && Number.isFinite(item);
const isStrings = (item: unknown): item is string[] => Array.isArray(item) && item.every((entry) => typeof entry === "string");

/** What the explorer remembers, read from `storage` and written back to it. Null keeps it for the page alone. */
export class SongMemory {
  readonly #storage: StorageLike | null;
  readonly #favourites: Set<string>;
  readonly #played: Map<string, number>;
  readonly #lengths: Map<string, number>;
  readonly #skills: Map<string, string[]>;
  #timer: ReturnType<typeof setTimeout> | undefined;

  constructor(storage: StorageLike | null) {
    this.#storage = storage;
    let raw: Partial<Record<keyof Stored, unknown>> = {};
    try {
      const parsed: unknown = JSON.parse(storage?.getItem(SONG_MEMORY_KEY) ?? "{}");
      if (typeof parsed === "object" && parsed !== null) raw = parsed;
    } catch {
      // A broken entry starts the memory empty.
    }
    this.#favourites = new Set(isStrings(raw.favourites) ? raw.favourites : []);
    this.#played = new Map(Object.entries(isMap(raw.played, isNumber) ? raw.played : {}));
    this.#lengths = new Map(Object.entries(isMap(raw.lengths, isNumber) ? raw.lengths : {}));
    this.#skills = new Map(Object.entries(isMap(raw.skills, isStrings) ? raw.skills : {}));
  }

  /** Whether the song `id` is a favourite. */
  isFavourite(id: string): boolean {
    return this.#favourites.has(id);
  }

  /** Makes the song `id` a favourite, or no longer one. */
  setFavourite(id: string, on: boolean): void {
    if (on) this.#favourites.add(id);
    else this.#favourites.delete(id);
    this.#save();
  }

  /** The favourites, in the order they were starred. */
  get favourites(): string[] {
    return [...this.#favourites];
  }

  /** When the song `id` was last played, in ms since the epoch, or undefined. */
  playedAt(id: string): number | undefined {
    return this.#played.get(id);
  }

  /** The played songs, the latest first. */
  get played(): string[] {
    return [...this.#played].sort((a, b) => b[1] - a[1]).map(([id]) => id);
  }

  /** Notes that the song `id` plays at `now`, and forgets the oldest play past `MAX_PLAYED`. */
  play(id: string, now = Date.now()): void {
    this.#played.set(id, now);
    for (const old of this.played.slice(MAX_PLAYED)) this.#played.delete(old);
    this.#save();
  }

  /** The length of the song `id` in seconds, or undefined until it is measured. */
  length(id: string): number | undefined {
    return this.#lengths.get(id);
  }

  /** Keeps `seconds` as the length of the song `id`, in whole seconds. */
  setLength(id: string, seconds: number): void {
    const whole = Math.round(seconds);
    if (this.#lengths.get(id) === whole) return;
    this.#lengths.set(id, whole);
    this.#save();
  }

  /** The skills the version at `file` teaches, or undefined until its guide is read. */
  skills(file: string): readonly string[] | undefined {
    return this.#skills.get(file);
  }

  /** Keeps `skills` as what the version at `file` teaches. */
  setSkills(file: string, skills: readonly string[]): void {
    this.#skills.set(file, [...skills]);
    this.#save();
  }

  /** Forgets everything about the song `id`, such as an upload the learner deleted. */
  forget(id: string): void {
    this.#favourites.delete(id);
    this.#played.delete(id);
    this.#lengths.delete(id);
    this.#save();
  }

  /** Writes the memory now, as a test or a closing page needs. */
  flush(): void {
    if (this.#timer !== undefined) clearTimeout(this.#timer);
    this.#timer = undefined;
    const stored: Stored = {
      favourites: [...this.#favourites],
      played: Object.fromEntries(this.#played),
      lengths: Object.fromEntries(this.#lengths),
      skills: Object.fromEntries(this.#skills),
    };
    try {
      this.#storage?.setItem(SONG_MEMORY_KEY, JSON.stringify(stored));
    } catch {
      return; // A storage that refuses only costs the memory on the next visit.
    }
    noteChange("memory");
  }

  #save(): void {
    if (this.#storage === null || this.#timer !== undefined) return;
    this.#timer = setTimeout(() => this.flush(), SAVE_DELAY_MS);
  }
}
