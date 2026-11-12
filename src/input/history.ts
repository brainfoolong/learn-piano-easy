/**
 * The accuracy history: every finished take of a song, kept in IndexedDB, and the table that lists them.
 *
 * Decisions, and what each costs:
 * - A take holds its song, date, speed, hands, hits, perfect hits, misses and mistakes. Its accuracy
 *   derives from those, so it is never stored.
 * - The history has a database of its own, so the song library's database can change its version
 *   without waiting on this one.
 * - A song is known by a hash of its notes until the song library gives each song an id. The same file
 *   loaded twice shares one history, and an edited file starts a new one.
 * - A take counts as saved only once its transaction completes, so a take the browser refuses says so.
 * - A browser without IndexedDB, or one that refuses to open it, keeps the takes in memory for the
 *   session, and they are gone on reload.
 * - A song's takes are read through an index on the song, and listed newest first. The table is built
 *   on each open, in the live locale's words, dates and percent signs.
 * - A take beats its song with both hands, at full speed, and at least `BEATEN_ACCURACY`. All three
 *   are in the take, so a beaten song needs nothing more stored.
 * - A take merges by its song and date, so a restored backup adds only the takes this browser lacks.
 * - Each kept write calls `noteChange("history")` of `src/data/changes.ts`.
 *
 * Bounds: the history keeps every take. One take is under 200 bytes, so ten thousand fit in two megabytes.
 */
import { noteChange } from "../data/changes";
import { liveLocale, t } from "../i18n/live";
import { requestDone, transactionDone } from "../library/idb";
import type { Song } from "../midi/song";
import { el } from "../ui/dom";
import type { Hands } from "./wait-mode";
import "./history.css";

/** The sum of a take's judgements. `hits` counts the perfect hits too. */
export interface Score {
  readonly hits: number;
  readonly perfect: number;
  readonly misses: number;
  readonly mistakes: number;
}

/** The share of a score's judgements that are hits, from 0 to 1, or undefined before any. */
export function accuracy(score: Score): number | undefined {
  const total = score.hits + score.misses + score.mistakes;
  return total === 0 ? undefined : score.hits / total;
}

/** The accuracy a take needs, from 0 to 1, to beat its song. */
export const BEATEN_ACCURACY = 0.9;

/** Whether `take` beats its song: both hands, at full speed or faster, with at least `BEATEN_ACCURACY`. */
export function beats(take: Take): boolean {
  return take.hands === "both" && take.speed >= 1 - 1e-9 && (accuracy(take) ?? 0) >= BEATEN_ACCURACY;
}

/** One finished take of a song. `date` is in ms since the epoch. */
export interface Take extends Score {
  readonly song: string;
  readonly date: number;
  readonly speed: number;
  readonly hands: Hands;
}

/** Where takes are kept. */
export interface HistoryStore {
  /** Keeps `take`, and settles once it is stored. */
  add(take: Take): Promise<void>;
  /** The takes of the song `song` names, newest first. */
  list(song: string): Promise<Take[]>;
  /** Every take of every song, oldest first. */
  all(): Promise<Take[]>;
  /** Keeps the takes of `takes` whose song and date it lacks, and resolves how many it kept. */
  putMany(takes: readonly Take[]): Promise<number>;
}

const DATABASE = "learn-piano-easy-history";
const STORE = "takes";

/** A key for `song` from its notes: their tracks, ticks and pitches, hashed with 32-bit FNV-1a. */
export function songKey(song: Song): string {
  let hash = 0x811c9dc5;
  const mix = (value: number) => {
    for (let shift = 0; shift < 32; shift += 8) {
      hash ^= (value >>> shift) & 0xff;
      hash = Math.imul(hash, 0x01000193);
    }
  };
  mix(song.notes.length);
  mix(song.endTick);
  for (const note of song.notes) {
    mix(note.track);
    mix(note.pitch);
    mix(note.startTick);
    mix(note.endTick);
  }
  return `notes-${(hash >>> 0).toString(16).padStart(8, "0")}`;
}

/** Takes kept in memory for as long as the page lives. */
export class MemoryHistory implements HistoryStore {
  readonly #takes: Take[] = [];

  async add(take: Take): Promise<void> {
    this.#takes.push(take);
  }

  async list(song: string): Promise<Take[]> {
    return this.#takes.filter((take) => take.song === song).sort((a, b) => b.date - a.date);
  }

  async all(): Promise<Take[]> {
    return [...this.#takes].sort((a, b) => a.date - b.date);
  }

  async putMany(takes: readonly Take[]): Promise<number> {
    const fresh = newTakes(this.#takes, takes);
    this.#takes.push(...fresh);
    return fresh.length;
  }
}

/** The takes of `incoming` whose song and date `have` lacks, each pair once. */
export function newTakes(have: readonly Take[], incoming: readonly Take[]): Take[] {
  const seen = new Set(have.map(takeKey));
  const fresh: Take[] = [];
  for (const take of incoming) {
    const key = takeKey(take);
    if (seen.has(key)) continue;
    seen.add(key);
    fresh.push(take);
  }
  return fresh;
}

/** The key a take merges by: its song and its date. */
function takeKey(take: Take): string {
  return `${take.song}@${take.date}`;
}

/** The history database, or undefined when the browser has none or refuses it. */
function openDatabase(): Promise<IDBDatabase | undefined> {
  return new Promise((resolve) => {
    if (typeof indexedDB === "undefined") return resolve(undefined);
    let request: IDBOpenDBRequest;
    try {
      request = indexedDB.open(DATABASE, 1);
    } catch {
      return resolve(undefined);
    }
    request.onupgradeneeded = () => {
      const store = request.result.createObjectStore(STORE, { autoIncrement: true });
      store.createIndex("song", "song");
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => resolve(undefined);
  });
}

/** Takes kept in IndexedDB, or in memory when it cannot open. */
class DatabaseHistory implements HistoryStore {
  readonly #db = openDatabase();
  readonly #memory = new MemoryHistory();

  async add(take: Take): Promise<void> {
    const db = await this.#db;
    if (db === undefined) return this.#memory.add(take);
    const transaction = db.transaction(STORE, "readwrite");
    transaction.objectStore(STORE).add(take);
    await transactionDone(transaction);
    noteChange("history");
  }

  async all(): Promise<Take[]> {
    const db = await this.#db;
    if (db === undefined) return this.#memory.all();
    const takes = await requestDone(db.transaction(STORE, "readonly").objectStore(STORE).getAll() as IDBRequest<Take[]>);
    return takes.sort((a, b) => a.date - b.date);
  }

  async putMany(takes: readonly Take[]): Promise<number> {
    const db = await this.#db;
    if (db === undefined) return this.#memory.putMany(takes);
    const fresh = newTakes(await this.all(), takes);
    if (fresh.length === 0) return 0;
    const transaction = db.transaction(STORE, "readwrite");
    for (const take of fresh) transaction.objectStore(STORE).add(take);
    await transactionDone(transaction);
    noteChange("history");
    return fresh.length;
  }

  async list(song: string): Promise<Take[]> {
    const db = await this.#db;
    if (db === undefined) return this.#memory.list(song);
    const request = db.transaction(STORE, "readonly").objectStore(STORE).index("song").getAll(song);
    const takes = await new Promise<Take[]>((resolve, reject) => {
      request.onsuccess = () => resolve(request.result as Take[]);
      request.onerror = () => reject(request.error);
    });
    return takes.sort((a, b) => b.date - a.date);
  }
}

/** The history store of this browser. */
export function openHistory(): HistoryStore {
  return new DatabaseHistory();
}

/** A table of `takes`, one row each, or a line that says there are none, in the live locale. */
export function historyTable(takes: readonly Take[]): HTMLElement {
  const words = t().player.input;
  if (takes.length === 0) return el("p", { text: words.history.empty });
  const cell = (text: string) => el("td", { text });
  const columns = words.history.columns;
  const header = [columns.date, columns.speed, columns.hands, columns.accuracy, columns.hits, columns.perfect, columns.misses, columns.mistakes].map((text) =>
    el("th", { text, attrs: { scope: "col" } }),
  );
  const rows = takes.map((take) => {
    const share = accuracy(take);
    return el("tr", {
      children: [
        cell(new Date(take.date).toLocaleString(liveLocale())),
        cell(words.percent(Math.round(take.speed * 100))),
        cell(words.history.hands[take.hands]),
        cell(share === undefined ? "–" : words.percent(Math.round(share * 100))),
        cell(String(take.hits)),
        cell(String(take.perfect)),
        cell(String(take.misses)),
        cell(String(take.mistakes)),
      ],
    });
  });
  return el("table", {
    class: "history-table",
    children: [el("thead", { children: [el("tr", { children: header })] }), el("tbody", { children: rows })],
  });
}
