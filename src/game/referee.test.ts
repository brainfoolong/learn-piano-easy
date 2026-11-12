import type { Note } from "../midi/song";
import type { LearnerPart } from "../input/wait-mode";
import { expect, test } from "../testing";
import { Referee } from "./referee";
import { DIFFICULTIES, multiplierOf, RULES } from "./rules";

const part: LearnerPart = { hands: "both", range: { first: 36, last: 96 }, fold: false };

/** A note of `pitch` from `start` for `length` seconds, at 480 ticks a second. */
function note(pitch: number, start: number, length = 0.2): Note {
  const tick = Math.round(start * 480);
  const endTick = Math.round((start + length) * 480);
  return { track: 0, channel: 0, pitch, velocity: 80, startTick: tick, endTick, start, end: start + length };
}

function refereeing(notes: Note[], difficulty: keyof typeof RULES = "normal"): Referee {
  const referee = new Referee(RULES[difficulty]);
  referee.start(notes, part, 0);
  return referee;
}

const kinds = (events: { kind: string }[]) => events.map((event) => event.kind);

test("a_start_earns_by_how_close_it_lands", () => {
  const referee = refereeing([note(60, 1), note(62, 2), note(64, 3)]);
  expect(kinds(referee.press(60, 1.03, 1))).toEqual(["perfect"]);
  expect(kinds(referee.press(62, 2.1, 1))).toEqual(["great"]);
  expect(kinds(referee.press(64, 2.84, 1))).toEqual(["good"]);
  const score = referee.score;
  expect([score.perfect, score.great, score.good, score.combo]).toEqual([1, 1, 1, 3]);
  // Normal pays 1.5 times the base: 150 + 105 + 60.
  expect(score.points).toBeCloseTo(315);
});

test("a_wrong_note_or_a_miss_fines_and_ends_the_combo", () => {
  const referee = refereeing([note(60, 1), note(62, 2), note(64, 3)]);
  referee.press(60, 1, 1);
  const wrong = referee.press(61, 2, 1);
  expect(kinds(wrong)).toEqual(["wrong"]);
  expect(wrong[0]!.points).toBe(-50);
  expect(referee.score.combo).toBe(0);
  // The 62 passes unplayed and is missed on the next tick past its window.
  expect(kinds(referee.tick(2.5, 1))).toEqual(["miss"]);
  // 150 for the perfect, less 50 for the wrong note and 30 for the miss.
  expect(referee.score.points).toBe(70);
  // The total never drops below zero.
  referee.press(70, 2.6, 1);
  referee.press(70, 2.7, 1);
  expect(referee.score.points).toBe(0);
});

test("a_held_note_counts_up_and_a_clean_release_pays", () => {
  const referee = refereeing([note(60, 1, 1)]);
  referee.press(60, 1, 1);
  const holding = referee.tick(1.5, 1);
  expect(kinds(holding)).toEqual(["hold"]);
  // Half a second at 40 a second, times normal's 1.5.
  expect(holding[0]!.points).toBeCloseTo(30);
  expect(kinds(referee.release(60, 1.95, 1))).toEqual(["hold", "release"]);
});

test("a_release_too_early_or_too_late_fines", () => {
  const short = refereeing([note(60, 1, 1)]);
  short.press(60, 1, 1);
  // The tolerance of a 1 s note on normal is 0.3 s, so 0.5 s early is too short.
  expect(kinds(short.release(60, 1.5, 1))).toEqual(["hold", "short"]);
  expect(short.score.combo).toBe(0);

  const long = refereeing([note(60, 1, 1)]);
  long.press(60, 1, 1);
  expect(kinds(long.tick(2.2, 1))).toEqual(["hold"]);
  // Past the end and its tolerance, while the key is still down, the hold ran too long.
  expect(kinds(long.tick(2.4, 1))).toEqual(["long"]);
  expect(kinds(long.release(60, 2.6, 1))).toEqual([]);
});

test("a_release_under_the_pedal_is_clean", () => {
  const referee = refereeing([note(60, 1, 1)]);
  referee.press(60, 1, 1);
  referee.pedal(true);
  expect(kinds(referee.release(60, 1.2, 1))).toEqual(["hold", "release"]);
});

test("a_short_note_is_judged_on_its_start_alone", () => {
  const referee = refereeing([note(60, 1, 0.2)]);
  referee.press(60, 1, 1);
  expect(kinds(referee.tick(1.1, 1))).toEqual([]);
  expect(kinds(referee.release(60, 1.05, 1))).toEqual([]);
});

test("easy_forgives_a_release_that_hard_fines", () => {
  for (const [difficulty, fined] of [["easy", false], ["hard", true]] as const) {
    const referee = refereeing([note(60, 1, 1)], difficulty);
    referee.press(60, 1, 1);
    // 0.3 s early is inside easy's 0.4 s tolerance and outside hard's 0.2 s.
    expect(kinds(referee.release(60, 1.7, 1)).includes("short")).toBe(fined);
  }
});

test("harder_levels_pay_more_and_fine_more", () => {
  for (let i = 1; i < DIFFICULTIES.length; i++) {
    const easier = RULES[DIFFICULTIES[i - 1]!];
    const harder = RULES[DIFFICULTIES[i]!];
    expect(harder.gain).toBeGreaterThan(easier.gain);
    expect(harder.fine).toBeGreaterThan(easier.fine);
    expect(harder.perfect).toBeLessThan(easier.perfect);
    expect(harder.good).toBeLessThan(easier.good);
  }
});

test("windows_are_real_time_at_any_speed", () => {
  // At half speed, 0.05 s of song time is 0.1 s of real time: great on normal, not perfect.
  const referee = refereeing([note(60, 1)]);
  expect(kinds(referee.press(60, 1.05, 0.5))).toEqual(["great"]);
});

test("a_note_wait_mode_waits_for_scores_by_the_wait", () => {
  const referee = refereeing([note(60, 1), note(62, 2), note(64, 3, 1)]);
  // The song stood at 1 for 0.05 s of song time: perfect, as if it had played on.
  expect(kinds(referee.press(60, 1, 1, 0.05))).toEqual(["perfect"]);
  // A wait of 0.15 s is good on normal, past great's 0.11 s.
  expect(kinds(referee.press(62, 2, 1, 0.15))).toEqual(["good"]);
  // A wait past the good window is late: it ends the combo, fines 20 times normal's 1, and holds nothing.
  const late = referee.press(64, 3, 1, 2);
  expect(kinds(late)).toEqual(["late"]);
  expect(late[0]!.points).toBe(-20);
  expect(referee.score.combo).toBe(0);
  expect(referee.score.late).toBe(1);
  expect(kinds(referee.tick(3.5, 1))).toEqual([]);
  expect(kinds(referee.release(64, 3.5, 1))).toEqual([]);
});

test("every_ten_in_a_row_raise_the_multiplier_up_to_four", () => {
  expect([0, 9, 10, 19, 20, 30, 99].map(multiplierOf)).toEqual([1, 1, 2, 2, 3, 4, 4]);
  const notes = Array.from({ length: 10 }, (_, i) => note(60, 1 + i));
  const referee = refereeing(notes);
  const events = notes.flatMap((n) => referee.press(60, n.start, 1));
  expect(events.at(-1)!.multiplier).toBe(2);
  expect(events.at(-1)!.points).toBeCloseTo(300);
});
