import { de } from "../../i18n/messages/de";
import { en } from "../../i18n/messages/en";
import { worldBadgeText } from "../../i18n/messages/learn-badges.en";
import { COURSE } from "../course";
import type { ProgressEvent } from "../progress/event";
import { expect, test } from "../../testing";
import { artOf } from "./badge-art";
import { type BadgeFacts, badgesOf, earnedBadges, FIXED_BADGES, type FixedBadgeId, type StepFact, stepFacts, worldBadgeId } from "./badges";

const WORLDS = ["w1", "w2"];
const BOSSES = new Map([
  ["w1/boss", "w1"],
  ["w2/boss", "w2"],
]);
const STEPS = new Map<string, StepFact>([
  ["w1/l/play", { kind: "play-notes", notes: 100, read: 0 }],
  ["w1/l/read", { kind: "read-note", notes: 0, read: 10 }],
  ["w1/l/tap", { kind: "rhythm-tap", notes: 4, read: 0 }],
]);

/** A log that meets every badge's condition, starting `startDay` days into 2026, by the local clock. */
function fullLog(startDay: number): ProgressEvent[] {
  const events: ProgressEvent[] = [];
  let id = startDay * 1000;
  const at = (day: number, hour: number) => new Date(2026, 0, 1 + startDay + day, hour, 0, 0, events.length).getTime();
  const step = (day: number, hour: number, name: string, mistakes = 0) => {
    events.push({ v: 1, id: `e${(id += 1)}`, at: at(day, hour), kind: "step", lesson: "w1/l", step: name, mistakes, score: 1 / (1 + mistakes) });
  };
  const lesson = (day: number, hour: number, key: string, stars: number) => {
    events.push({ v: 1, id: `e${(id += 1)}`, at: at(day, hour), kind: "lesson", lesson: key, stars });
  };
  // A hundred days in a row, each with a new lesson at three stars and a hundred notes played.
  for (let day = 0; day < 100; day += 1) {
    const hour = day === 0 ? 7 : day === 1 ? 23 : 12;
    step(day, hour, "play");
    lesson(day, hour, `w1/l${day}`, 3);
  }
  step(2, 13, "read", 1);
  step(2, 13, "read");
  step(2, 13, "tap");
  lesson(3, 13, "w1/boss", 1);
  lesson(4, 13, "w2/boss", 2);
  // A week and more away, then one more lesson.
  lesson(110, 12, "w1/l0", 3);
  return events;
}

/** The facts of `events`, with a daily goal of 20 XP and a take of a Hard version at each time of `legendary`. */
function facts(events: readonly ProgressEvent[], legendary: number[]): BadgeFacts {
  return { events, steps: STEPS, bosses: BOSSES, goal: 20, legendaryTakes: legendary };
}

test("every_badge_has_a_reachable_condition", () => {
  const badges = badgesOf(WORLDS);
  expect(badges.length).toBe(FIXED_BADGES.length + WORLDS.length);
  const earned = earnedBadges(facts(fullLog(0), [Date.UTC(2026, 5, 1)]));
  expect(earned.map((b) => b.id).sort()).toEqual(badges.map((b) => b.id).sort());
  // Every badge has its art, and its name and description in both catalogs.
  for (const badge of badges) {
    expect(artOf(badge).length).toBeGreaterThan(0);
    for (const messages of [en, de]) {
      const text = badge.world === undefined ? messages.badges.fixed[badge.id as FixedBadgeId] : worldBadgeText(messages.badges, badge.world);
      expect(text.name.length).toBeGreaterThan(0);
      expect(text.description.length).toBeGreaterThan(0);
    }
  }
  // A log of nothing earns nothing, and a mistake in reading earns no `sight-reader`.
  expect(earnedBadges(facts([], []))).toEqual([]);
  const careless = fullLog(0).filter((e) => !(e.kind === "step" && e.step === "read" && e.mistakes === 0));
  expect(earnedBadges(facts(careless, [])).map((b) => b.id)).not.toContain("sight-reader");
});

test("every_badge_is_earned_once", () => {
  const first = earnedBadges(facts(fullLog(0), [Date.UTC(2026, 5, 1)]));
  // The same log played again a year later, with a second take of a Hard version, earns nothing new.
  const twice = earnedBadges(facts([...fullLog(0), ...fullLog(365)], [Date.UTC(2027, 5, 1), Date.UTC(2026, 5, 1)]));
  expect(new Set(twice.map((b) => b.id)).size).toBe(twice.length);
  expect(twice).toEqual(first);
  // Each badge is earned at the first moment its condition held.
  const at = new Map(first.map((b) => [b.id, b.at]));
  expect(at.get("first-lesson")).toBe(new Date(2026, 0, 1, 7, 0, 0, 1).getTime());
  expect(at.get("streak-3")).toBe(new Date(2026, 0, 3, 12, 0, 0, 5).getTime());
  expect(first.map((b) => b.at)).toEqual([...first.map((b) => b.at)].sort((a, b) => a - b));
});

test("every_world_has_its_badge", async () => {
  const ids = COURSE.map((world) => world.id);
  const badges = badgesOf(ids);
  for (const world of COURSE) {
    const badge = badges.find((b) => b.id === worldBadgeId(world.id));
    expect(badge?.world).toBe(world.id);
    expect(artOf(badge!).length).toBeGreaterThan(0);
    expect(en.badges.world.name(world.title.en)).toContain(world.title.en);
    expect(de.badges.world.name(world.title.de)).toContain(world.title.de);
    // A finished run of the world's boss earns its badge.
    const lessons = await world.load();
    stepFacts(world.id, lessons);
    if (lessons.boss === undefined) continue;
    const key = `${world.id}/${lessons.boss.id}`;
    const events: ProgressEvent[] = [{ v: 1, id: "e1", at: 1000, kind: "lesson", lesson: key, stars: 1 }];
    const earned = earnedBadges({ events, steps: new Map(), bosses: new Map([[key, world.id]]), goal: 20, legendaryTakes: [] });
    expect(earned.map((b) => b.id)).toContain(worldBadgeId(world.id));
  }
});
