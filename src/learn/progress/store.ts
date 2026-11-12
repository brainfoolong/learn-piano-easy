/**
 * The learner's progress store: the event log of finished steps and lessons, kept on the device.
 *
 * Decision 0005 records why the progress stays on the device, as an event log.
 *
 * Decisions, and what each costs:
 * - The store only appends, apart from `reset`. `record` adds one event, and `restore` adds the new
 *   records of a backup. No call changes an event, so no bug here can lose earned progress.
 * - `reset` removes every record, and only the profile's reset calls it. The profile asks twice and
 *   saves a backup file first, so even a reset can be undone by a restore.
 * - The logic runs on `ProgressBackend`, a list of records written by id. The tests use
 *   `memoryBackend`, and `indexedDbBackend` stays a thin layer over `src/library/idb.ts`.
 * - A write counts only once the backend resolves, which IndexedDB does when its transaction
 *   completes. The store's own list changes after that, so a failed write leaves the last state.
 * - Opening the store migrates every older event and writes it back in one transaction. When that
 *   write fails, the old records stay, and the next open migrates them again.
 * - A record of a newer build, or one this build cannot read, is kept as it is. It is left out of
 *   `events` and goes into every backup.
 * - Without IndexedDB, as in some private windows, `openProgress` keeps the log in memory for the
 *   session. The lesson still runs, and nothing claims to be saved.
 * - Each kept write calls `noteChange("progress")` of `src/data/changes.ts`.
 *
 * Bounds it keeps: the whole log is held in memory. An event is about 150 bytes, so years of lessons
 * fit in well under a megabyte.
 *
 * The profile of `src/learn/profile-view.ts` saves the backup and restores one.
 */
import { noteChange } from "../../data/changes";
import { openDatabase, requestDone, transactionDone } from "../../library/idb";
import { type KeptRecord, newRecords, readBackup, writeBackup } from "./backup";
import { isRecord, type NewEvent, newEventId, type ProgressEvent } from "./event";
import { MIGRATIONS, type Migration, migrateRecord, versionAfter } from "./migrate";

/** Where the store's records live. */
export interface ProgressBackend {
  /** Every stored record. */
  all(): Promise<unknown[]>;
  /** Writes `records` by their `id` in one transaction. Resolves once all are kept, and keeps none when it rejects. */
  put(records: readonly { id: string }[]): Promise<void>;
  /** Removes every record in one transaction. Resolves once none is kept, and keeps all when it rejects. */
  clear(): Promise<void>;
}

/** A backend in memory, seeded with `seed`. Its writes are atomic, and its records are copies. */
export function memoryBackend(seed: readonly unknown[] = []): ProgressBackend {
  let records = new Map<unknown, unknown>(seed.map((record, index) => [isRecord(record) ? record.id : `#${index}`, structuredClone(record)]));
  return {
    all: async () => [...records.values()].map((record) => structuredClone(record)),
    put: async (incoming) => {
      const next = new Map(records);
      for (const record of incoming) next.set(record.id, structuredClone(record));
      records = next;
    },
    clear: async () => {
      records = new Map();
    },
  };
}

const DATABASE = "learn-piano-easy-progress";
const STORE = "events";

/** The backend in this browser's IndexedDB, or undefined when it has none or refuses it. */
export async function indexedDbBackend(): Promise<ProgressBackend | undefined> {
  const db = await openDatabase(DATABASE, 1, (database) => database.createObjectStore(STORE, { keyPath: "id" }));
  if (db === undefined) return undefined;
  return {
    all: () => requestDone(db.transaction(STORE, "readonly").objectStore(STORE).getAll()),
    put: (records) => {
      const transaction = db.transaction(STORE, "readwrite");
      const store = transaction.objectStore(STORE);
      for (const record of records) store.put(record);
      return transactionDone(transaction);
    },
    clear: () => {
      const transaction = db.transaction(STORE, "readwrite");
      transaction.objectStore(STORE).clear();
      return transactionDone(transaction);
    },
  };
}

/** The learner's progress log. */
export class ProgressStore {
  readonly #backend: ProgressBackend;
  readonly #migrations: readonly Migration[];
  /** The events this build reads, oldest first. */
  #events: ProgressEvent[];
  /** The records kept as they are: from a newer build, or unreadable. */
  #kept: KeptRecord[];

  private constructor(backend: ProgressBackend, migrations: readonly Migration[], events: ProgressEvent[], kept: KeptRecord[]) {
    this.#backend = backend;
    this.#migrations = migrations;
    this.#events = sortEvents(events);
    this.#kept = kept;
  }

  /** The store on `backend`, its older events migrated by `migrations`. */
  static async open(backend: ProgressBackend, migrations: readonly Migration[] = MIGRATIONS): Promise<ProgressStore> {
    const version = versionAfter(migrations);
    const events: ProgressEvent[] = [];
    const kept: KeptRecord[] = [];
    const migrated: ProgressEvent[] = [];
    for (const record of await backend.all()) {
      const read = migrateRecord(record, migrations);
      if (read.kind === "event") {
        events.push(read.event);
        if (isRecord(record) && record.v !== version) migrated.push(read.event);
      } else if (isRecord(record) && typeof record.id === "string") kept.push(record as KeptRecord);
    }
    if (migrated.length > 0) await backend.put(migrated).catch(() => undefined);
    return new ProgressStore(backend, migrations, events, kept);
  }

  /** Every event this build reads, oldest first. */
  events(): readonly ProgressEvent[] {
    return this.#events;
  }

  /** How many records are kept unread: from a newer build, or unreadable by this one. */
  get unread(): number {
    return this.#kept.length;
  }

  /** Appends `event`, finished now. Resolves once it is kept, and rejects with the state unchanged when the write fails. */
  async record(event: NewEvent): Promise<ProgressEvent> {
    const full = { ...event, v: versionAfter(this.#migrations), id: newEventId(), at: Date.now() } as ProgressEvent;
    await this.#backend.put([full]);
    this.#events = sortEvents([...this.#events, full]);
    noteChange("progress");
    return full;
  }

  /** The backup file of every kept record. */
  backup(): string {
    return writeBackup([...this.#events, ...this.#kept]);
  }

  /**
   * Merges the backup file `text`, and resolves how many records it added. Resolves undefined when the
   * text is no backup of ours, and rejects with the state unchanged when the write fails.
   */
  async restore(text: string): Promise<number | undefined> {
    const contents = readBackup(text, this.#migrations);
    if (contents === undefined) return undefined;
    const ids = new Set([...this.#events, ...this.#kept].map((record) => record.id));
    const events = newRecords(ids, contents.events);
    const kept = newRecords(new Set([...ids, ...events.map((event) => event.id)]), contents.kept);
    if (events.length + kept.length === 0) return 0;
    await this.#backend.put([...events, ...kept]);
    this.#events = sortEvents([...this.#events, ...events]);
    this.#kept = [...this.#kept, ...kept];
    noteChange("progress");
    return events.length + kept.length;
  }

  /** Removes every record. Resolves once the log is empty, and rejects with the state unchanged when the write fails. */
  async reset(): Promise<void> {
    await this.#backend.clear();
    this.#events = [];
    this.#kept = [];
    noteChange("progress");
  }
}

/** `events` by time, then by id, so every read of one log gives one order. */
function sortEvents(events: ProgressEvent[]): ProgressEvent[] {
  return events.sort((a, b) => a.at - b.at || (a.id < b.id ? -1 : a.id > b.id ? 1 : 0));
}

/** The progress store of this browser: in IndexedDB, or in memory for the session without it. */
export async function openProgress(): Promise<ProgressStore> {
  return ProgressStore.open((await indexedDbBackend()) ?? memoryBackend());
}
