/**
 * The rules that open lessons and worlds, read from the progress log, and the lesson the map offers
 * next.
 *
 * - **A world opens** when it is the first, when the world before it is beaten, or when its skip test
 *   is passed. A world with a boss is beaten when its boss is finished. A world without one is beaten
 *   once it is open and every lesson of it is finished.
 * - **Lessons open in order within a world.** The first opens with the world, and each next one when
 *   the one before it is finished. The boss opens once every lesson is finished.
 * - **A skip test passed with `SKIP_TEST_STARS` stars or more** opens every lesson of its world and
 *   its boss, since the learner has shown what the world teaches. The next world still waits for the
 *   boss.
 * - **A skip test is offered** on every world with a node still locked, so any world can be skipped to.
 * - **Whatever the log holds stays open.** A lesson finished once is open, and so is its world, even
 *   when a course change would lock it now.
 * - **The next lesson** is the first open node not yet finished, in the course's order. With none, it
 *   is the first node short of three stars, and with none of those, the last node.
 *
 * Decisions, and what each costs:
 * - **Everything is computed from the log on each read,** as the XP is. No unlock is stored, so a
 *   change to these rules applies to past progress too.
 * - **A finished lesson is one with a lesson event.** A lesson ends only once every step has passed, so
 *   any event is a pass, whatever its stars.
 */
import type { LoadedWorld } from "../course";
import { lessonKey } from "../lesson-run";
import type { ProgressEvent } from "../progress/event";
import { SKIP_TEST_STARS } from "../skip-test";

/** Where a node of the map stands. */
export type NodeState = "locked" | "open" | "done";

/** One lesson or boss on the map. */
export interface MapNode {
  /** The lesson's id in its world. */
  lesson: string;
  /** `<world>/<lesson>`. */
  key: string;
  boss: boolean;
  state: NodeState;
  /** Its best stars, from 0 to 3. */
  stars: number;
}

/** One world on the map. */
export interface MapWorld {
  id: string;
  open: boolean;
  /** Whether its boss is finished, or with no boss, every lesson. */
  beaten: boolean;
  /** Its lessons, then its boss. */
  nodes: MapNode[];
  /** The id of its skip test while a node is still locked, and undefined otherwise. */
  skipTest?: string;
}

/** The map of the course as the log stands. */
export interface CourseMap {
  worlds: MapWorld[];
  /** The node the *Continue* button opens, undefined only for a course with no lesson. */
  next?: { world: string; node: MapNode };
}

/** The best stars of each lesson the log finished, by `<world>/<lesson>`. */
function bestStars(events: readonly ProgressEvent[]): Map<string, number> {
  const best = new Map<string, number>();
  for (const event of events) if (event.kind === "lesson") best.set(event.lesson, Math.max(best.get(event.lesson) ?? 0, event.stars));
  return best;
}

/** The map of `course` as `events`, the progress log, stands. */
export function courseMap(course: readonly LoadedWorld[], events: readonly ProgressEvent[]): CourseMap {
  const best = bestStars(events);
  const done = (key: string) => best.has(key);
  const worlds: MapWorld[] = [];
  let previousBeaten = true;
  for (const { world, lessons } of course) {
    const skipKey = lessons.skipTest === undefined ? undefined : lessonKey(world.id, lessons.skipTest.id);
    const skipped = skipKey !== undefined && (best.get(skipKey) ?? 0) >= SKIP_TEST_STARS;
    const ordered = [...lessons.lessons.map((lesson) => ({ lesson, boss: false })), ...(lessons.boss === undefined ? [] : [{ lesson: lessons.boss, boss: true }])];
    const keys = ordered.map(({ lesson }) => lessonKey(world.id, lesson.id));
    const open: boolean = previousBeaten || skipped || keys.some(done);
    const nodes: MapNode[] = [];
    let before = true;
    for (const [index, { lesson, boss }] of ordered.entries()) {
      const key = keys[index]!;
      const lessonsDone = keys.slice(0, lessons.lessons.length).every(done);
      const reachable = open && (skipped || (boss ? lessonsDone : before));
      const state: NodeState = done(key) ? "done" : reachable ? "open" : "locked";
      nodes.push({ lesson: lesson.id, key, boss, state, stars: best.get(key) ?? 0 });
      before = done(key);
    }
    const beaten: boolean = lessons.boss !== undefined ? done(lessonKey(world.id, lessons.boss.id)) : open && keys.every(done);
    const locked = nodes.some((node) => node.state === "locked");
    worlds.push({ id: world.id, open, beaten, nodes, ...(locked && lessons.skipTest !== undefined ? { skipTest: lessons.skipTest.id } : {}) });
    previousBeaten = beaten;
  }
  const next = nextOf(worlds);
  return next === undefined ? { worlds } : { worlds, next };
}

/** The node the *Continue* button opens: the first open one, else the first short of three stars, else the last. */
function nextOf(worlds: readonly MapWorld[]): { world: string; node: MapNode } | undefined {
  const all = worlds.flatMap((world) => world.nodes.map((node) => ({ world: world.id, node })));
  return all.find(({ node }) => node.state === "open") ?? all.find(({ node }) => node.state === "done" && node.stars < 3) ?? all.at(-1);
}
