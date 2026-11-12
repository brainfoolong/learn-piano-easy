import { expect, test } from "../testing";
import { keyPitches, Quiz, spellPitch } from "./pitch-practice";

/** A random source that gives `values` in turn, then 0. */
function sequence(...values: number[]): () => number {
  return () => values.shift() ?? 0;
}

test("a_key_gives_its_scale_within_the_range", () => {
  expect(keyPitches("C", 60, 72)).toEqual([60, 62, 64, 65, 67, 69, 71, 72]);
  expect(keyPitches("F", 69, 72)).toEqual([69, 70, 72]);
  expect(keyPitches("chromatic", 60, 63)).toEqual([60, 61, 62, 63]);
  expect([spellPitch(70, "F"), spellPitch(66, "D"), spellPitch(60, "C")]).toEqual(["B♭4", "F♯4", "C4"]);
});

test("a_wrong_key_counts_against_the_asked_note_until_it_is_found", () => {
  const quiz = new Quiz([60, 62, 64], 2, sequence(0.5, 0));
  expect(quiz.current).toBe(62);
  expect(quiz.answer(64)).toBe(false);
  expect(quiz.answer(61)).toBe(false);
  expect(quiz.answer(62)).toBe(true);
  // The note just asked is left out of the next draw.
  expect(quiz.current).toBe(60);
  expect(quiz.answer(60)).toBe(true);
  expect(quiz.done).toBe(true);
  expect(quiz.firstTry).toBe(1);
  expect(quiz.results()).toEqual([
    { pitch: 62, asked: 1, wrong: [64, 61] },
    { pitch: 60, asked: 1, wrong: [] },
  ]);
});

test("an_empty_pool_asks_nothing", () => {
  const quiz = new Quiz([], 10);
  expect(quiz.count).toBe(0);
  expect(quiz.done).toBe(true);
  expect(quiz.answer(60)).toBe(false);
});
