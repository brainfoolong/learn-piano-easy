import { expect, test } from "../../testing";
import { BACKUP_FORMAT } from "./backup";
import type { NewEvent } from "./event";
import { EVENT_VERSION, MIGRATIONS, type Migration } from "./migrate";
import { memoryBackend, type ProgressBackend, ProgressStore } from "./store";

const STEP: NewEvent = { kind: "step", lesson: "meet-the-piano/welcome", step: "find", mistakes: 1, score: 0.8 };
const LESSON: NewEvent = { kind: "lesson", lesson: "meet-the-piano/welcome", stars: 3 };

/** `backend`, whose writes fail while `failing.on` is set. */
function flaky(backend: ProgressBackend): { backend: ProgressBackend; failing: { on: boolean } } {
  const failing = { on: false };
  return {
    failing,
    backend: {
      all: () => backend.all(),
      put: async (records) => {
        if (failing.on) throw new Error("the quota is full");
        await backend.put(records);
      },
      clear: async () => {
        if (failing.on) throw new Error("the database is locked");
        await backend.clear();
      },
    },
  };
}

test("a_reset_empties_the_log_and_its_backup_restores_it", async () => {
  const backend = memoryBackend();
  const store = await ProgressStore.open(backend);
  await store.record(STEP);
  await store.record(LESSON);
  const backup = store.backup();
  await store.reset();
  expect(store.events()).toEqual([]);
  expect((await ProgressStore.open(backend)).events()).toEqual([]);
  expect(await store.restore(backup)).toBe(2);
  expect((await ProgressStore.open(backend)).events().length).toBe(2);
});

test("a_failed_reset_keeps_every_event", async () => {
  const { backend, failing } = flaky(memoryBackend());
  const store = await ProgressStore.open(backend);
  await store.record(LESSON);
  failing.on = true;
  await expect(store.reset()).rejects.toThrow();
  expect(store.events().length).toBe(1);
  expect((await ProgressStore.open(backend)).events().length).toBe(1);
});

test("a_finished_lesson_survives_a_reload", async () => {
  const backend = memoryBackend();
  const store = await ProgressStore.open(backend);
  const step = await store.record(STEP);
  const lesson = await store.record(LESSON);
  expect(step).toMatchObject({ ...STEP, v: EVENT_VERSION });
  expect(lesson.id).toMatch(/^[0-9a-f]{32}$/);
  expect(lesson.id).not.toBe(step.id);

  const reloaded = await ProgressStore.open(backend);
  expect(reloaded.events()).toEqual(store.events());
  expect(reloaded.events().map((event) => event.id).sort()).toEqual([step.id, lesson.id].sort());
});

test("an_older_store_migrates_without_loss", async () => {
  expect(MIGRATIONS.length).toBe(EVENT_VERSION - 1);

  // A format 1 that named the time `time`, and its migration to a format 2 that names it `at`.
  const renameTime: Migration = ({ time, ...rest }) => ({ ...rest, at: time });
  const old = [1, 2, 3].map((n) => ({ v: 1, id: `old-${n}`, time: 1000 * n, kind: "lesson" as const, lesson: "meet-the-piano/welcome", stars: n }));
  const newer = { v: 3, id: "from-a-newer-build", shape: "unknown" };
  const backend = memoryBackend([...old, newer]);

  const store = await ProgressStore.open(backend, [renameTime]);
  expect(store.events()).toEqual(old.map(({ time, ...rest }) => ({ ...rest, v: 2, at: time })));
  expect(store.unread).toBe(1);

  const stored = await backend.all();
  expect(stored).toHaveLength(4);
  expect(stored).toContainEqual(newer);
  for (const event of store.events()) expect(stored).toContainEqual(event);

  const reopened = await ProgressStore.open(backend, [renameTime]);
  expect(reopened.events()).toEqual(store.events());
  expect(JSON.parse(reopened.backup()).events).toContainEqual(newer);
});

test("a_backup_restores_every_record", async () => {
  const source = await ProgressStore.open(memoryBackend([{ v: EVENT_VERSION + 1, id: "from-a-newer-build" }]));
  await source.record(STEP);
  await source.record(LESSON);
  const file = source.backup();
  expect(JSON.parse(file).format).toBe(BACKUP_FORMAT);

  const backend = memoryBackend();
  const target = await ProgressStore.open(backend);
  const own = await target.record({ ...LESSON, lesson: "meet-the-piano/keys" });
  expect(await target.restore(file)).toBe(3);
  expect(target.events()).toHaveLength(3);
  expect(target.events()).toContainEqual(own);
  for (const event of source.events()) expect(target.events()).toContainEqual(event);
  expect(target.unread).toBe(1);

  expect(await target.restore(file)).toBe(0);
  expect(await target.restore("not a backup")).toBeUndefined();
  expect(await target.restore(JSON.stringify({ format: "something else", events: [] }))).toBeUndefined();

  const reloaded = await ProgressStore.open(backend);
  expect(reloaded.events()).toEqual(target.events());
  expect(reloaded.unread).toBe(1);
});

test("a_failed_write_keeps_the_last_state", async () => {
  const memory = memoryBackend();
  const { backend, failing } = flaky(memory);
  const store = await ProgressStore.open(backend);
  const kept = await store.record(LESSON);

  failing.on = true;
  await expect(store.record(STEP)).rejects.toThrow("the quota is full");
  expect(store.events()).toEqual([kept]);

  const other = await ProgressStore.open(memoryBackend());
  await other.record(STEP);
  await expect(store.restore(other.backup())).rejects.toThrow("the quota is full");
  expect(store.events()).toEqual([kept]);

  failing.on = false;
  expect((await ProgressStore.open(memory)).events()).toEqual([kept]);
  expect(await store.restore(other.backup())).toBe(1);
  expect(store.events()).toHaveLength(2);
});
