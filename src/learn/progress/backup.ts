/**
 * The backup of the learner's progress: one JSON file of every stored record, and the merge that reads
 * one back in.
 *
 * Decisions, and what each costs:
 * - A backup holds every record the store keeps, those of a newer build and the unreadable ones too.
 *   A record is never dropped on its way through a file.
 * - A backup carries the format marker `BACKUP_FORMAT` and no version of its own. Each event carries its
 *   version, so the store's migrations read an old backup as they read an old store.
 * - Restoring merges by event id, and a record whose id is already kept is skipped. An event never
 *   changes, so a backup can never remove or overwrite newer progress.
 */
import { isRecord, type ProgressEvent } from "./event";
import { MIGRATIONS, type Migration, migrateRecord } from "./migrate";

/** The marker every backup file carries. */
export const BACKUP_FORMAT = "learn-piano-easy-progress";

/** A record kept as it is: from a newer build, or unreadable by this one. It has an id, so it merges. */
export type KeptRecord = Record<string, unknown> & { id: string };

/** What a backup file holds, as this build reads it. */
export interface BackupContents {
  events: ProgressEvent[];
  /** Records this build cannot read, kept for a build that can. */
  kept: KeptRecord[];
  /** Records with no id, which can never merge and are left out. */
  dropped: number;
}

/** The backup file of `records`, every record the store keeps. */
export function writeBackup(records: readonly object[]): string {
  return JSON.stringify({ format: BACKUP_FORMAT, events: records });
}

/** The records of a backup file `text`, or undefined when it is no backup of ours. */
export function readBackup(text: string, migrations: readonly Migration[] = MIGRATIONS): BackupContents | undefined {
  let raw: unknown;
  try {
    raw = JSON.parse(text);
  } catch {
    return undefined;
  }
  if (!isRecord(raw) || raw.format !== BACKUP_FORMAT || !Array.isArray(raw.events)) return undefined;
  const contents: BackupContents = { events: [], kept: [], dropped: 0 };
  for (const record of raw.events) {
    const migrated = migrateRecord(record, migrations);
    if (migrated.kind === "event") contents.events.push(migrated.event);
    else if (isRecord(record) && typeof record.id === "string" && record.id !== "") contents.kept.push(record as KeptRecord);
    else contents.dropped += 1;
  }
  return contents;
}

/** The records of `incoming` whose id is not in `ids`, each id once. */
export function newRecords<T extends { id: string }>(ids: ReadonlySet<string>, incoming: readonly T[]): T[] {
  const seen = new Set(ids);
  const fresh: T[] = [];
  for (const record of incoming) {
    if (seen.has(record.id)) continue;
    seen.add(record.id);
    fresh.push(record);
  }
  return fresh;
}
