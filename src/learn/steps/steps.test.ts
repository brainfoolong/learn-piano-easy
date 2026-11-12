import { InputBus } from "../../input/input-bus";
import { expect, test } from "../../testing";
import { inputHas, stepsToRun } from "../lesson-run";
import { lessonProblems, LOUD_FROM, type Step, type Touch } from "../model";
import { FIND_KEY_RANGE, findKeyRange, findsKey } from "./find-key";
import { HINT_AFTER, judgeChoice, passesRound, scoreOf, showsHint } from "./judge";
import { compareNotes } from "./listen";
import { expressionMiss, playNote } from "./play-notes";
import { namesNote, playsNote } from "./read-note";
import { beatTimes, judgePhrase, judgeTaps, restsOf, WINDOW } from "./rhythm-tap";

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

test("find_key_shows_the_same_keys_centred_on_middle_c", () => {
  const whitesBetween = (from: number, to: number) => [...Array(to - from - 1).keys()].map((i) => from + 1 + i).filter((p) => ![1, 3, 6, 8, 10].includes(p % 12)).length;
  for (const key of [48, 55, 60, 63, 72, 76]) {
    expect(findKeyRange(key)).toEqual(FIND_KEY_RANGE);
    const { first, last } = findKeyRange(key);
    expect(whitesBetween(first - 1, 60)).toBe(whitesBetween(60, last + 1));
  }
  const low = findKeyRange(30);
  expect(low.first <= 30 && low.last >= 30).toBe(true);
  expect(whitesBetween(low.first - 1, 60)).toBe(whitesBetween(60, low.last + 1));
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

/** A phrase at 60 beats a minute, one second a beat: C, D, a quarter rest from beat 2, then E. */
const PHRASE = [
  { note: 60, at: 0, beats: 1 },
  { note: 62, at: 1, beats: 1 },
  { note: 64, at: 3, beats: 1 },
];

test("rhythm_tap_phrase_hits_each_note_by_its_own_key_in_time", () => {
  expect(restsOf(PHRASE)).toEqual([{ from: 2, to: 3 }]);
  expect(restsOf([{ note: 60, at: 1, beats: 2 }, { note: 62, at: 3, beats: 1 }])).toEqual([{ from: 0, to: 1 }]);
  const clean = judgePhrase(10, 60, PHRASE, [
    { pitch: 60, at: 10.05, end: 10.5 },
    { pitch: 62, at: 11 - WINDOW + 0.01, end: 11.9 },
    { pitch: 64, at: 13.1 },
  ]);
  expect(clean).toEqual({ notes: [true, true, true], presses: [true, true, true], broken: [false] });
  // A wrong key on time is an extra, and the right key after it still hits the note.
  const wrongFirst = judgePhrase(10, 60, PHRASE, [
    { pitch: 62, at: 10, end: 10.1 },
    { pitch: 60, at: 10.05, end: 10.2 },
  ]);
  expect(wrongFirst.notes).toEqual([true, false, false]);
  expect(wrongFirst.presses).toEqual([false, true]);
  // The right key outside the window misses its note.
  expect(judgePhrase(10, 60, PHRASE, [{ pitch: 60, at: 10 + WINDOW + 0.05, end: 10.5 }]).notes).toEqual([false, false, false]);
});

test("rhythm_tap_phrase_breaks_a_rest_played_into_or_held_through", () => {
  const ontime = [
    { pitch: 60, at: 10, end: 10.5 },
    { pitch: 62, at: 11, end: 11.9 },
  ];
  // A key pressed inside the rest breaks it, whichever key it is.
  expect(judgePhrase(10, 60, PHRASE, [...ontime, { pitch: 61, at: 12.4, end: 12.45 }]).broken).toEqual([true]);
  expect(judgePhrase(10, 60, PHRASE, [...ontime, { pitch: 64, at: 12.4, end: 12.45 }]).broken).toEqual([true]);
  // A press that hits the next note a little early does not.
  expect(judgePhrase(10, 60, PHRASE, [...ontime, { pitch: 64, at: 13 - WINDOW + 0.01, end: 13.5 }]).broken).toEqual([false]);
  // D held into the rest breaks it once it is still down at the rest's middle, 12.5.
  const heldTo = (end?: number) => judgePhrase(10, 60, PHRASE, [ontime[0]!, { pitch: 62, at: 11, ...(end === undefined ? {} : { end }) }], 12.6).broken;
  expect(heldTo(12.3)).toEqual([false]);
  expect(heldTo(12.7)).toEqual([true]);
  expect(heldTo()).toEqual([true]);
  // A key still down is judged at `now`, so the rest is not broken before its middle.
  expect(judgePhrase(10, 60, PHRASE, [ontime[0]!, { pitch: 62, at: 11 }], 12.2).broken).toEqual([false]);
});

test("a_rhythm_tap_phrase_keeps_its_notes_on_whole_beats_inside_its_taps", () => {
  const texts = { title: "Rests", steps: { play: { text: "Play." } } };
  const lesson = (notes: { note: number; at: number; beats: number }[]) => ({ id: "rests", steps: [{ id: "play", kind: "rhythm-tap", bpm: 80, taps: 4, pass: 0.8, notes } as Step], texts: { en: texts, de: texts } });
  expect(lessonProblems(lesson(PHRASE), ["en", "de"])).toEqual([]);
  const wrong = "step play has a note off a whole beat, over another or past its taps";
  expect(lessonProblems(lesson([{ note: 60, at: 0.5, beats: 1 }]), ["en"])).toContain(wrong);
  expect(lessonProblems(lesson([{ note: 60, at: 0, beats: 2 }, { note: 62, at: 1, beats: 1 }]), ["en"])).toContain(wrong);
  expect(lessonProblems(lesson([{ note: 60, at: 3, beats: 2 }]), ["en"])).toContain(wrong);
  expect(lessonProblems(lesson([]), ["en"])).toContain("step play has no note");
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
