import { join } from "node:path";

import { expect, test } from "../src/testing";
import { readCatalog, songsDir } from "./catalog";
import {
  earns,
  fingerProblems,
  LIMITS,
  matchTune,
  measure,
  meterOfFile,
  meterOfNotation,
  raritiesFit,
  trickySpots,
  tuneOf,
  type MeterSong,
} from "./song-meter";
import type { TwoHandSong } from "./song-notation";

/** Sixteen bars that fit Common: one hand position each, quarter notes, an open fifth held in the bass. */
const common: TwoHandSong = {
  title: "Fixture",
  file: "fixture.mid",
  difficulty: 1,
  bpm: 100,
  numerator: 4,
  denominator: 4,
  right: "C4/1:1 D4/2:1 E4/3:1 C4/1:1 | E4/3:1 F4/4:1 G4/5:2 | G4/5:1 F4/4:1 E4/3:1 D4/2:1 | C4/1:4 |".repeat(4).slice(0, -2),
  left: "C3+G3/5+1:4 | ".repeat(16).slice(0, -3),
};

/** The fixture with `change` laid over it. */
function variant(change: Partial<TwoHandSong>): TwoHandSong {
  return { ...common, ...change };
}

/** The fixture with an extra right-hand note that starts while another still sounds. */
function withSecondVoice(): MeterSong {
  const song = meterOfNotation(common);
  const held = song.hands.right[0]!;
  song.hands.right.push({ ...held, pitch: held.pitch + 4, startTick: held.startTick + 120, endTick: held.startTick + 400 });
  song.hands.right.sort((a, b) => a.startTick - b.startTick || a.pitch - b.pitch);
  return song;
}

/** Each limit's name, a fixture that breaks it or moves it, and the value the meter must read. */
const fixtures: readonly [string, MeterSong, number][] = [
  ["position changes in 8 bars", meterOfNotation(variant({ right: "C4/1:1 D4/2:1 G4/1:1 C4/1:1", left: "C3/5:4" })), 2],
  ["position changes after a short note", meterOfNotation(variant({ right: "C4/1:1 D4/2:1 G4/1:1 C4/1:1", left: "C3/5:4" })), 2],
  ["position changes after a quick note", meterOfNotation(variant({ steps: 2, right: "C4/1:1 G4/1:1 r:2 C4/1:4", left: "C3/5:8" })), 1],
  ["crossings", meterOfNotation(variant({ right: "C4/1:1 D4/2:1 G4/1:1 C4/1:1", left: "C3/5:4" })), 1],
  ["biggest leap", meterOfNotation(variant({ right: "C4/1:1 C5/5:1 r:1 C6/5:1", left: "C3/5:4" })), 12],
  ["notes at once, right hand", meterOfNotation(variant({ right: "C4+E4+G4+C5/1+2+3+5:4", left: "C3+E3/5+3:4" })), 4],
  ["notes at once, left hand", meterOfNotation(variant({ right: "C4+E4+G4+C5/1+2+3+5:4", left: "C3+E3/5+3:4" })), 2],
  ["widest chord", meterOfNotation(variant({ right: "C4+E4+G4+C5/1+2+3+5:4", left: "C3+E3/5+3:4" })), 12],
  ["shortest note", meterOfNotation(variant({ steps: 12, right: "C4:3 D4:3 E4:6 F4:4 G4:4 A4:4 B4:12 C5:12", left: "C3:48" })), 0.25],
  ["ornaments in 8 bars", meterOfNotation(variant({ steps: 8, right: "B3:1 C4:15 D4:16", left: "C3:32" })), 1],
  ["triplets", meterOfNotation(variant({ steps: 12, right: "C4:3 D4:3 E4:6 F4:4 G4:4 A4:4 B4:12 C5:12", left: "C3:48" })), 1],
  ["starts per second, one hand", meterOfNotation(variant({ bpm: 120, steps: 4, right: "C5:2 ".repeat(8).trim(), left: "r:1 C3:15" })), 4],
  ["starts per second, both hands", meterOfNotation(variant({ bpm: 120, steps: 4, right: "C5:2 ".repeat(8).trim(), left: "r:1 C3:15" })), 4.5],
  ["left-hand starts", meterOfNotation(variant({ steps: 2, right: "C4:8", left: "C3:1 G2:2 C3:5" })), 2],
  ["second voices, right hand", withSecondVoice(), 1],
  ["second voices, left hand", withSecondVoice(), 0],
  ["hand crossings", meterOfNotation(variant({ right: "C4:2 C6:2", left: "E4:4" })), 1],
  ["sharps or flats", meterOfNotation(variant({ steps: 2, right: "E4:1 F#4:1 G#4:1 A4:1 B4:1 C#5:1 D#5:1 E5:1 | E5:8", left: "E3:8 | E3:8" })), 4],
  [
    "notes outside the key in 4 bars",
    meterOfNotation(variant({ right: "C4:1 E4:1 G4:1 E4:1 | C4:1 F#4:1 G4:1 C5:1 | C4:1 E4:1 Bb4:1 C5:1 | C4:4", left: "C3:4 | C3:4 | C3:4 | C3:4" })),
    2,
  ],
  ["pedal", meterOfNotation(variant({ steps: 2, right: "C4:2 D4:2 E4:2 F4:2", left: "C3:8", pedal: "r:1 P:6 r:1" })), 3],
  ["clashes", meterOfNotation(variant({ right: "C#4:4", left: "C3:4" })), 4],
  ["unmarked clashes", meterOfNotation(variant({ right: "C#4:4", left: "C3:4" }), [1]), 0],
  ["bars, at least", meterOfNotation(common), 16],
  ["bars, at most", meterOfNotation(common), 16],
  ["seconds", meterOfNotation(common), 38.325],
];

test("every_limit_is_measured_on_a_fixture", () => {
  // Every limit of the table has a fixture, so a new limit cannot go unmeasured.
  expect(new Set(fixtures.map(([name]) => name))).toEqual(new Set(LIMITS.map((limit) => limit.name)));
  for (const [name, song, value] of fixtures) {
    expect({ name, value: +measure(song)[name]!.toFixed(4) }).toEqual({ name, value });
  }
  // The other pedal uses read as theirs: whole bars, and a change where a note starts.
  const pedalOf = (pedal: string) => measure(meterOfNotation(variant({ right: "C4:1 D4:1 E4:1 F4:1", left: "C3:4", pedal })))["pedal"];
  expect([pedalOf("P:4"), pedalOf("r:1 P:2 r:1")]).toEqual([1, 2]);
  // The left hand's other starts: strong beats with long notes, and any beat.
  const leftOf = (left: string) => measure(meterOfNotation(variant({ right: "C4:4", left })))["left-hand starts"];
  expect([leftOf("C3:2 G2:2"), leftOf("C3:1 G2:1 C3:2")]).toEqual([0, 1]);
});

test("a_move_after_a_rest_is_no_crossing", () => {
  // Finger 3 lands below the thumb's key in both, and only the rest between them makes it a lift.
  const tied = measure(meterOfNotation(variant({ steps: 2, right: "G4/1:2 F4/3:2 E4/2:2 D4/1:2", left: "C3/5:8" })));
  const lifted = measure(meterOfNotation(variant({ steps: 2, right: "G4/1:1 r:1 F4/3:2 E4/2:2 D4/1:2", left: "C3/5:8" })));
  expect({ tied: tied.crossings, lifted: lifted.crossings }).toEqual({ tied: 1, lifted: 0 });
  expect(lifted["position changes in 8 bars"]).toBe(1);
});

test("a_version_that_fits_the_rarity_below_does_not_earn_its_own", () => {
  const plain = measure(meterOfNotation(common));
  expect(raritiesFit(plain)).toContain("common");
  expect(earns(plain, "common")).toBe(true);
  // It fits Rare too, but adds nothing over Common, so it does not earn Rare.
  expect(raritiesFit(plain)).toContain("rare");
  expect(earns(plain, "rare")).toBe(false);

  // Eighth notes break Common's shortest note, so the same tune in eighths earns Rare.
  const eighths = variant({
    steps: 2,
    right: "C4/1:1 D4/2:1 E4/3:2 C4/1:2 E4/3:2 | F4/4:2 G4/5:6 |".repeat(8).slice(0, -2),
    left: "C3+G3/5+1:8 | ".repeat(16).slice(0, -3),
  });
  const rare = measure(meterOfNotation(eighths));
  expect(earns(rare, "common")).toBe(false);
  expect(earns(rare, "rare")).toBe(true);
});

test("a_lost_hook_is_refused", () => {
  const tune = tuneOf("E4:1 D4:1 C4:1 D4:1 | E4:1 E4:1 E4:2 | D4:1 D4:1 D4:2 | E4:1 G4:1 G4:2", common, { tonic: 0, mode: "major" }, [1, 2]);
  const inG = variant({ right: "B4:1 A4:1 G4:1 A4:1 | B4:1 B4:1 B4:2 | A4:1 A4:1 A4:2 | B4:1 D5:1 D5:2", left: "G3:4 | G3:4 | D3:4 | G3:4" });
  const found = matchTune(meterOfNotation(inG), tune, "rare");
  expect(found).toEqual({ hookTick: 0, shift: 7, score: 1, problems: [] });

  // One wrong note in the hook loses it, wherever the rest of the tune is.
  const wrong = variant({ ...inG, right: "B4:1 A4:1 G4:1 A4:1 | B4:1 C5:1 B4:2 | A4:1 A4:1 A4:2 | B4:1 D5:1 D5:2" });
  expect(matchTune(meterOfNotation(wrong), tune, "rare").problems).toEqual(["the hook is lost"]);

  // Epic keeps the tune's own key, so the move to G is refused there.
  expect(matchTune(meterOfNotation(inG), tune, "epic").problems).toEqual(["the tune moves to a key epic may not take"]);

  // Common may hold a repeated note over, and still plays 90% of the tune.
  const merged = variant({ right: "E4:1 D4:1 C4:1 D4:1 | E4:1 E4:1 E4:2 | D4:1 D4:1 D4:2 | E4:1 G4:3", left: "C3:4 | C3:4 | G2:4 | C3:4" });
  const common90 = matchTune(meterOfNotation(merged), tune, "common");
  expect([common90.problems, +common90.score.toFixed(3)]).toEqual([[], 1]);
  expect(matchTune(meterOfNotation(merged), tune, "rare").problems).toEqual(["the version plays 92% of the tune, under 100%"]);
});

test("the_costliest_bars_are_the_tricky_spots", () => {
  const song = meterOfNotation(variant({ right: "C4/1:1 D4/2:1 E4/3:1 F4/4:1 | C4/1:1 A4/2:1 C4/3:1 B4/4:1", left: "C3/5:4 | C3/5:4" }));
  expect(trickySpots(song).map((spot) => spot.bar)).toEqual([2, 1]);
  expect(fingerProblems(meterOfNotation(common))).toEqual([]);
  expect(fingerProblems(meterOfNotation(variant({ right: "C4:4", left: "C3/5:4" })))).toEqual(["right hand, bar 1: pitch 60 has no finger"]);
});

test("the_first_year_books_land_in_epic_or_legendary", async () => {
  const rows = (await readCatalog()).filter(
    (row) => (row.composer.includes("Clementi") && row.piece?.includes("Opus 36 No. 1")) || row.piece === "25 Easy Studies, Opus 100",
  );
  expect(rows.length).toBeGreaterThanOrEqual(20);
  let upper = 0;
  for (const row of rows) {
    const fits = raritiesFit(measure(meterOfFile(new Uint8Array(await Bun.file(join(songsDir, row.file)).arrayBuffer()))));
    // None of them is a first-weeks piece.
    expect({ title: row.title, easy: fits.includes("common") || fits.includes("rare") }).toEqual({ title: row.title, easy: false });
    if (fits.includes("epic") || fits.includes("legendary")) upper++;
  }
  expect(upper / rows.length).toBeGreaterThanOrEqual(0.9);
});
