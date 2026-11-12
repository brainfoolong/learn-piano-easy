import type { Note } from "../midi/song";
import { expect, test } from "../testing";
import { Judge } from "./scoring";
import type { LearnerPart } from "./wait-mode";

const part: LearnerPart = { hands: "both", range: { first: 36, last: 96 }, fold: false };

/** A note of `pitch` at `seconds`, at 480 ticks a second. */
function note(pitch: number, seconds: number): Note {
  const tick = Math.round(seconds * 480);
  return { track: 0, channel: 0, pitch, velocity: 80, startTick: tick, endTick: tick + 240, start: seconds, end: seconds + 0.5 };
}

function judging(notes: Note[], from = 0): Judge {
  const judge = new Judge({ hit: 0.15, perfect: 0.05 });
  judge.start(notes, part, from);
  return judge;
}

test("a_note_inside_the_window_is_a_hit_once", () => {
  const judge = judging([note(60, 1), note(64, 2), note(67, 3)]);
  expect(judge.press(60, 1.03, 1)).toBe("perfect");
  // A second strike of a note already hit is a mistake, never a second hit.
  expect(judge.press(60, 1.06, 1)).toBe("mistake");
  expect(judge.press(64, 2.12, 1)).toBe("hit");
  // Early by 0.1 s, inside the window.
  expect(judge.press(67, 2.9, 1)).toBe("hit");
  expect(judge.score).toEqual({ hits: 3, perfect: 1, misses: 0, mistakes: 1 });

  // At half speed the window spans half the song time, so 0.1 s of song time is 0.2 s of real time.
  const slow = judging([note(60, 1), note(62, 2)]);
  expect(slow.press(60, 1.1, 0.5)).toBe("mistake");
  expect(slow.press(62, 2.05, 0.5)).toBe("hit");
});

test("a_wrong_pitch_is_a_mistake", () => {
  const judge = judging([note(60, 1)]);
  expect(judge.press(61, 1, 1)).toBe("mistake");
  // The right pitch outside the window is a mistake too.
  expect(judge.press(60, 1.4, 1)).toBe("mistake");
  expect(judge.press(60, 1.01, 1)).toBe("perfect");
  expect(judge.score).toEqual({ hits: 1, perfect: 1, misses: 0, mistakes: 2 });

  // A key struck late for one note takes it, and leaves the next note on that key to its own strike.
  const repeated = judging([note(60, 1), note(60, 1.25)]);
  expect(repeated.press(60, 1.1, 1)).toBe("hit");
  expect(repeated.press(60, 1.26, 1)).toBe("perfect");
});

test("unplayed_notes_become_misses", () => {
  const judge = judging([note(60, 1), note(64, 1), note(67, 2), note(72, 3)]);
  // Inside the window, nothing is missed yet.
  expect(judge.pass(1.1, 1)).toBe(0);
  judge.press(60, 1.1, 1);
  expect(judge.pass(1.2, 1)).toBe(1);
  expect(judge.pass(2.5, 1)).toBe(1);
  // The take ends at 3 s, so the note there is left out, and a missed note counts once.
  expect(judge.finish(3)).toBe(0);
  expect(judge.score).toEqual({ hits: 1, perfect: 0, misses: 2, mistakes: 0 });

  // A take started at 2 s judges nothing before it, and its end turns every note left into a miss.
  const later = judging([note(60, 1), note(67, 2), note(72, 3)], 2);
  expect(later.finish(4)).toBe(2);
  expect(later.score.misses).toBe(2);
});
