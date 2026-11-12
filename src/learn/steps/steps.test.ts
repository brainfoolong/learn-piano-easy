import { InputBus } from "../../input/input-bus";
import { expect, test } from "../../testing";
import { inputHas, stepsToRun } from "../lesson-run";
import { lessonProblems, LOUD_FROM, type Step, type Touch } from "../model";
import { findsKey } from "./find-key";
import { HINT_AFTER, judgeChoice, passesRound, scoreOf, showsHint } from "./judge";
import { compareNotes } from "./listen";
import { expressionMiss, playNote } from "./play-notes";
import { namesNote, playsNote } from "./read-note";
import { beatTimes, judgeTaps, WINDOW } from "./rhythm-tap";

test("find_key_passes_on_the_asked_key_only", () => {
  const middleC = { key: 60, anyOctave: false };
  expect(findsKey(middleC, 60)).toBe(true);
  expect(findsKey(middleC, 61)).toBe(false);
  expect(findsKey(middleC, 72)).toBe(false);
  expect(findsKey(middleC, 48)).toBe(false);
  const anyC = { key: 60, anyOctave: true };
  expect([36, 48, 60, 72, 84].every((pitch) => findsKey(anyC, pitch))).toBe(true);
  expect(findsKey(anyC, 59)).toBe(false);
  expect(findsKey(anyC, 62)).toBe(false);
});

test("play_notes_judges_each_note_in_order", () => {
  const notes = [60, 62, 64];
  expect(playNote(notes, 0, 60)).toEqual({ right: true, at: 1, pressed: [] });
  expect(playNote(notes, 1, 62)).toEqual({ right: true, at: 2, pressed: [] });
  expect(playNote(notes, 1, 61)).toEqual({ right: false, at: 1, pressed: [] });
  expect(playNote(notes, 1, 64)).toEqual({ right: false, at: 1, pressed: [] });
  expect(playNote(notes, 1, 60)).toEqual({ right: false, at: 1, pressed: [] });
  const last = playNote(notes, 2, 64);
  expect(last).toEqual({ right: true, at: notes.length, pressed: [] });
  expect(playNote(notes, last.at, 64).right).toBe(false);
});

test("play_notes_waits_for_every_key_of_a_chord", () => {
  const notes = [[48, 64], 65];
  const bass = playNote(notes, 0, 48);
  expect(bass).toEqual({ right: true, at: 0, pressed: [48] });
  expect(playNote(notes, 0, 48, bass.pressed)).toEqual({ right: true, at: 0, pressed: [48] });
  expect(playNote(notes, 0, 65, bass.pressed)).toEqual({ right: false, at: 0, pressed: [48] });
  expect(playNote(notes, 0, 64, bass.pressed)).toEqual({ right: true, at: 1, pressed: [] });
  const tuneFirst = playNote(notes, 0, 64);
  expect(playNote(notes, 0, 48, tuneFirst.pressed)).toEqual({ right: true, at: 1, pressed: [] });
});

test("play_notes_judges_touch_strength_on_midi", () => {
  const step = { touch: ["soft", "loud"] as Touch[] };
  expect(expressionMiss(step, 0, 40, false)).toBeUndefined();
  expect(expressionMiss(step, 0, LOUD_FROM - 1, false)).toBeUndefined();
  expect(expressionMiss(step, 0, LOUD_FROM, false)).toBe("too-loud");
  expect(expressionMiss(step, 1, 100, false)).toBeUndefined();
  expect(expressionMiss(step, 1, 30, false)).toBe("too-soft");
  // A step without touch never judges how hard a key is played.
  expect(expressionMiss({}, 0, 127, true)).toBeUndefined();
});

test("play_notes_judges_the_pedal_on_midi", () => {
  const step = { pedal: [true, false] };
  expect(expressionMiss(step, 0, 80, true)).toBeUndefined();
  expect(expressionMiss(step, 0, 80, false)).toBe("pedal-up");
  expect(expressionMiss(step, 1, 80, false)).toBeUndefined();
  expect(expressionMiss(step, 1, 80, true)).toBe("pedal-down");
  const bus = new InputBus(() => 0);
  expect(bus.pedalDown).toBe(false);
  bus.pedal(true, "midi");
  expect(bus.pedalDown).toBe(true);
  bus.pedal(false, "midi");
  expect(bus.pedalDown).toBe(false);
});

test("a_strength_step_falls_back_without_midi", () => {
  const soft: Step = {
    id: "play-softly",
    kind: "play-notes",
    notes: [60, 64],
    touch: ["soft", "soft"],
    needs: "touch",
    instead: [
      { id: "hear-softly", kind: "demo", bpm: 80, notes: [{ note: 60, at: 0, beats: 1 }] },
      { id: "which-softly", kind: "quiz", right: 1 },
    ],
  };
  expect(stepsToRun([soft], inputHas(true)).map((s) => s.id)).toEqual(["play-softly"]);
  expect(stepsToRun([soft], inputHas(false)).map((s) => s.id)).toEqual(["hear-softly", "which-softly"]);
  const texts = { title: "Soft", steps: { "play-softly": { text: "Play softly." }, "hear-softly": { text: "Listen." }, "which-softly": { text: "Which?", answers: ["Loud", "Soft"] } } };
  const lesson = { id: "soft", steps: [soft], texts: { en: texts, de: texts } };
  expect(lessonProblems(lesson, ["en", "de"])).toEqual([]);
  // A touch step that needs nothing would run where touch cannot be read, so the model refuses it.
  const unguarded = { ...lesson, steps: [{ id: "play-softly", kind: "play-notes", notes: [60, 64], touch: ["soft", "soft"] } as Step] };
  expect(lessonProblems(unguarded, ["en"])).toContain("step play-softly judges touch, so it needs touch");
});

test("rhythm_tap_judges_against_the_beat", () => {
  const beats = beatTimes(10, 120, 4);
  expect(beats).toEqual([10, 10.5, 11, 11.5]);
  const hits = (taps: number[]) => judgeTaps(beats, taps).beats.filter(Boolean).length;

  const inside = judgeTaps(beats, [10.02, 10.5 - WINDOW + 0.01, 11 + WINDOW - 0.01, 11.5]);
  expect(inside.beats).toEqual([true, true, true, true]);
  expect(inside.taps).toEqual([true, true, true, true]);

  const outside = judgeTaps(beats, [10 + WINDOW + 0.05, 10.5 - WINDOW - 0.05]);
  expect(outside.beats).toEqual([false, false, false, false]);
  expect(outside.taps).toEqual([false, false]);

  // One tap never counts for two beats, even where two windows meet.
  const twice = judgeTaps(beats, [10, 10.01]);
  expect(twice.beats).toEqual([true, false, false, false]);
  expect(twice.taps).toEqual([true, false]);
  const between = judgeTaps(beatTimes(0, 240, 2), [0.125]);
  expect(between.beats.filter(Boolean).length).toBe(1);

  expect(passesRound(hits([10, 10.5, 11, 10.01]), beats.length, 0.75)).toBe(true);
  expect(passesRound(hits([10, 10.5]), beats.length, 0.75)).toBe(false);
  expect(passesRound(hits([10, 10.5, 11, 11.5]), beats.length, 1)).toBe(true);
});

test("listen_and_quiz_score_one_answer_each", () => {
  expect(compareNotes(60, 67)).toBe("higher");
  expect(compareNotes(67, 60)).toBe("lower");
  expect(compareNotes(64, 64)).toBe("same");
  expect(judgeChoice(2, 2)).toBe(true);
  expect(judgeChoice(2, 0)).toBe(false);
  expect(judgeChoice(2, 3)).toBe(false);
  expect(passesRound(2, 3, 0.66)).toBe(true);
  expect(passesRound(1, 3, 0.66)).toBe(false);
  expect(passesRound(3, 3, 1)).toBe(true);
  expect(passesRound(0, 0, 0)).toBe(false);
});

test("read_note_judges_the_name_and_the_key", () => {
  expect(namesNote(60, "C")).toBe(true);
  expect(namesNote(72, "C")).toBe(true);
  expect(namesNote(71, "B")).toBe(true);
  expect(namesNote(60, "D")).toBe(false);
  expect(namesNote(61, "C")).toBe(false);
  expect(playsNote(67, 67)).toBe(true);
  expect(playsNote(67, 79)).toBe(false);
  expect(playsNote(67, 66)).toBe(false);
});

test("a_hint_shows_after_two_mistakes", () => {
  expect(HINT_AFTER).toBe(2);
  expect(showsHint(0)).toBe(false);
  expect(showsHint(1)).toBe(false);
  expect(showsHint(2)).toBe(true);
  expect(showsHint(5)).toBe(true);
  expect(scoreOf(0)).toBe(1);
  expect(scoreOf(1)).toBeLessThan(scoreOf(0));
});
