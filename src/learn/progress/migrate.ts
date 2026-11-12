/**
 * The format versions of the progress log, and the migrations that bring an older event to the
 * current one.
 *
 * Decisions, and what each costs:
 * - `MIGRATIONS[i]` turns an event of version `i + 1` into one of version `i + 2`, so the current
 *   version is always one more than the count of migrations. A new format is one function appended.
 * - A migration is pure and keeps the event's id. The store writes a migrated event back over the old
 *   one by that id, so a migration that fails halfway leaves the old record to migrate again.
 * - An event of a newer version than this build knows is kept as it is, never read and never removed.
 *   A learner who opens an older cached build then loses nothing written by a newer one.
 * - Every migration gets a test in `src/learn/progress/store.test.ts`.
 */
import { isRecord, type ProgressEvent, readEvent } from "./event";

/** One migration: an event of one version, as the next version. It keeps the id, and the caller sets `v`. */
export type Migration = (record: Record<string, unknown>) => Record<string, unknown>;

/** Every migration, oldest first. */
export const MIGRATIONS: readonly Migration[] = [];

/** The version an event is written in once `migrations` have run. */
export function versionAfter(migrations: readonly Migration[]): number {
  return migrations.length + 1;
}

/** The format version this build writes. */
export const EVENT_VERSION = versionAfter(MIGRATIONS);

/** What a stored record reads as: an event of the current version, a record of a newer one, or nothing readable. */
export type Migrated = { kind: "event"; event: ProgressEvent } | { kind: "newer" } | { kind: "unreadable" };

/** `raw` brought to the version after `migrations`. */
export function migrateRecord(raw: unknown, migrations: readonly Migration[] = MIGRATIONS): Migrated {
  const target = versionAfter(migrations);
  if (!isRecord(raw) || !Number.isInteger(raw.v) || (raw.v as number) < 1) return { kind: "unreadable" };
  let version = raw.v as number;
  if (version > target) return { kind: "newer" };
  let record = raw;
  try {
    while (version < target) {
      record = { ...migrations[version - 1]!(record), id: raw.id, v: version + 1 };
      version += 1;
    }
  } catch {
    return { kind: "unreadable" };
  }
  const event = readEvent(record, target);
  return event === undefined ? { kind: "unreadable" } : { kind: "event", event };
}
