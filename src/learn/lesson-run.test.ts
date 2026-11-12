import { expect, test } from "../testing";
import type { DemoStep, QuizStep, Step } from "./model";
import { inputHas, starsOf, stepsToRun, withoutNeed } from "./lesson-run";

const demo: DemoStep = { id: "hear-soft", kind: "demo", bpm: 80, notes: [{ note: 60, at: 0, beats: 1 }] };
const quiz: QuizStep = { id: "which-soft", kind: "quiz", right: 0 };
const steps: Step[] = [
  { id: "intro", kind: "explain" },
  { id: "soft-key", kind: "find-key", key: 60, anyOctave: false, needs: "touch", instead: [demo, quiz] },
  { id: "check", kind: "quiz", right: 1 },
];

test("a_step_that_needs_touch_runs_its_replacements_without_midi", () => {
  expect(stepsToRun(steps, inputHas(true)).map((s) => s.id)).toEqual(["intro", "soft-key", "check"]);
  expect(stepsToRun(steps, inputHas(false)).map((s) => s.id)).toEqual(["intro", "hear-soft", "which-soft", "check"]);
});

test("a_keyboard_without_the_need_swaps_in_the_replacements_where_the_learner_says_so", () => {
  const run = stepsToRun(steps, inputHas(true));
  expect(withoutNeed(run, 1).map((s) => s.id)).toEqual(["intro", "hear-soft", "which-soft", "check"]);
  expect(withoutNeed(run, 0).map((s) => s.id)).toEqual(["intro", "soft-key", "check"]);
  expect(run.map((s) => s.id)).toEqual(["intro", "soft-key", "check"]);
});

test("the_stars_follow_the_accuracy_of_the_checking_steps", () => {
  const run = stepsToRun(steps, inputHas(false));
  const clean = run.map(() => ({ mistakes: 0, score: 1 }));
  expect(starsOf(run, clean)).toBe(3);
  // A step that only shows never costs a star.
  expect(starsOf(run, [{ mistakes: 5, score: 0 }, ...clean.slice(1)])).toBe(3);
  expect(starsOf(run, [clean[0]!, clean[1]!, { mistakes: 0, score: 1 }, { mistakes: 1, score: 0.6 }])).toBe(2);
  expect(starsOf(run, [clean[0]!, clean[1]!, { mistakes: 2, score: 0.3 }, { mistakes: 1, score: 0.5 }])).toBe(1);
});
