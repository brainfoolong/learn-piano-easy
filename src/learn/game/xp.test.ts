import type { ProgressEvent } from "../progress/event";
import { memoryBackend, ProgressStore } from "../progress/store";
import { expect, test } from "../../testing";
import { levelOf, PRACTICE_XP, starsFor, tallyXp, XP_PER_STAR, xpForLevel } from "./xp";

let next = 0;
/** A lesson event of `lesson` with `stars`, one second after the last. */
function lesson(key: string, stars: number): ProgressEvent {
  next += 1;
  return { v: 1, id: `e${next}`, at: next * 1000, kind: "lesson", lesson: key, stars };
}

test("stars_follow_accuracy", () => {
  expect(starsFor(1)).toBe(3);
  expect(starsFor(0.95)).toBe(3);
  expect(starsFor(19 / 20)).toBe(3);
  expect(starsFor(0.949)).toBe(2);
  expect(starsFor(0.8)).toBe(2);
  expect(starsFor(0.799)).toBe(1);
  expect(starsFor(0)).toBe(1);
});

test("a_replay_only_raises_the_stars", () => {
  const tally = tallyXp([lesson("w/a", 2), lesson("w/a", 1), lesson("w/a", 3), lesson("w/a", 2)]);
  expect(tally.stars.get("w/a")).toBe(3);
  expect(tally.gains.map((g) => g.stars)).toEqual([2, 2, 3, 3]);
  expect(tally.gains.map((g) => g.newStars)).toEqual([2, 0, 1, 0]);
  expect(tally.gains.map((g) => g.xp)).toEqual([2 * XP_PER_STAR, PRACTICE_XP, XP_PER_STAR, PRACTICE_XP]);
  // A boss's new stars are worth double, and its replay earns the same practice XP.
  const boss = tallyXp([lesson("w/boss", 1), lesson("w/boss", 1), lesson("w/boss", 3)], new Set(["w/boss"]));
  expect(boss.gains.map((g) => g.xp)).toEqual([2 * XP_PER_STAR, PRACTICE_XP, 4 * XP_PER_STAR]);
});

test("xp_is_recomputed_from_the_event_log", async () => {
  const backend = memoryBackend();
  const store = await ProgressStore.open(backend);
  // The log orders events by time, so each is recorded in a millisecond of its own.
  for (const event of [
    { kind: "step", lesson: "w/a", step: "s", mistakes: 0, score: 1 },
    { kind: "lesson", lesson: "w/a", stars: 2 },
    { kind: "lesson", lesson: "w/b", stars: 3 },
    { kind: "lesson", lesson: "w/a", stars: 3 },
  ] as const) {
    await store.record(event);
    await Bun.sleep(2);
  }
  const total = 2 * XP_PER_STAR + 3 * XP_PER_STAR + XP_PER_STAR;
  expect(tallyXp(store.events()).total).toBe(total);
  // The same log, read again or restored on another device, earns the same XP.
  expect(tallyXp((await ProgressStore.open(backend)).events()).total).toBe(total);
  const other = await ProgressStore.open(memoryBackend());
  await other.restore(store.backup());
  expect(tallyXp(other.events()).total).toBe(total);
  // A rule reads the whole log, so a lesson that becomes a boss counts double for its past too.
  expect(tallyXp(store.events(), new Set(["w/b"])).total).toBe(total + 3 * XP_PER_STAR);
});

test("level_thresholds_rise", () => {
  expect([1, 2, 3, 4].map(xpForLevel)).toEqual([50, 150, 300, 500]);
  for (let level = 1; level < 50; level++) expect(xpForLevel(level + 1) - xpForLevel(level)).toBe(xpForLevel(level) - xpForLevel(level - 1) + 50);
  expect(levelOf(0)).toEqual({ level: 0, into: 0, span: 50 });
  expect(levelOf(49).level).toBe(0);
  expect(levelOf(50)).toEqual({ level: 1, into: 0, span: 100 });
  expect(levelOf(320)).toEqual({ level: 3, into: 20, span: 200 });
});
