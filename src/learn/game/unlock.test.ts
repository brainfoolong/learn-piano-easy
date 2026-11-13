import type { LoadedWorld } from "../course";
import type { Lesson, World } from "../model";
import type { ProgressEvent } from "../progress/event";
import { SKIP_TEST_STARS } from "../skip-test";
import { expect, test } from "../../testing";
import { courseMap } from "./unlock";

/** A lesson with one quiz step and no texts, which the rules never read. */
function lesson(id: string): Lesson {
  return { id, steps: [{ id: "q", kind: "quiz", right: 0 }], texts: {} as Lesson["texts"] };
}

/** A loaded world `id` of the lessons `ids`, with a boss and a skip test. */
function world(id: string, ids: string[]): LoadedWorld {
  const spec: World = { id, title: { en: id, de: id, es: id, zh: id, hi: id, ar: id }, accent: "violet", load: async () => ({ lessons: [] }), loadTexts: async () => {} };
  return { world: spec, lessons: { lessons: ids.map(lesson), boss: lesson("boss"), skipTest: lesson("skip-test") } };
}

const COURSE = [world("a", ["one", "two"]), world("b", ["three"])];

let next = 0;
/** A lesson event of `key` with `stars`, one second after the last. */
function finished(key: string, stars = 3): ProgressEvent {
  next += 1;
  return { v: 1, id: `e${next}`, at: next * 1000, kind: "lesson", lesson: key, stars };
}

/** The state of each node of `course`'s map after `events`, as `world/lesson:state`. */
function states(events: ProgressEvent[]): string[] {
  return courseMap(COURSE, events).worlds.flatMap((w) => w.nodes.map((node) => `${node.key}:${node.state}`));
}

test("lessons_open_in_order_and_the_boss_opens_the_next_world", () => {
  expect(states([])).toEqual(["a/one:open", "a/two:locked", "a/boss:locked", "b/three:locked", "b/boss:locked"]);
  expect(courseMap(COURSE, []).next?.node.key).toBe("a/one");
  const events = [finished("a/one"), finished("a/two")];
  expect(states(events)).toEqual(["a/one:done", "a/two:done", "a/boss:open", "b/three:locked", "b/boss:locked"]);
  events.push(finished("a/boss"));
  expect(states(events).slice(3)).toEqual(["b/three:open", "b/boss:locked"]);
  expect(courseMap(COURSE, events).next?.node.key).toBe("b/three");
});

test("a_passed_skip_test_opens_its_world", () => {
  expect(states([finished("b/skip-test", SKIP_TEST_STARS - 1)]).slice(3)).toEqual(["b/three:locked", "b/boss:locked"]);
  const map = courseMap(COURSE, [finished("b/skip-test", SKIP_TEST_STARS)]);
  expect(map.worlds[1]!.open).toBe(true);
  expect(map.worlds[1]!.skipTest).toBeUndefined();
  expect(map.worlds[0]!.skipTest).toBe("skip-test");
  expect(states([finished("b/skip-test", SKIP_TEST_STARS)]).slice(3)).toEqual(["b/three:open", "b/boss:open"]);
});

test("the_next_lesson_is_a_replay_once_all_are_done", () => {
  const all = ["a/one", "a/two", "a/boss", "b/three"].map((key) => finished(key));
  expect(courseMap(COURSE, [...all, finished("b/boss", 2)]).next?.node.key).toBe("b/boss");
  expect(courseMap(COURSE, [...all, finished("b/boss", 3)]).next?.node.key).toBe("b/boss");
  expect(courseMap(COURSE, [finished("a/one", 1), ...all.slice(1), finished("b/boss", 3)]).next?.node.key).toBe("a/one");
});
