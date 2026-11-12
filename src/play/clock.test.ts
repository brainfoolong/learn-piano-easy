import { expect, test } from "../testing";
import { SongClock } from "./clock";

/** A song clock on an audio clock the test moves, which starts at 10 s. */
function setup() {
  const audio = { currentTime: 10 };
  return { audio, clock: new SongClock(audio) };
}

test("speed_change_keeps_the_current_song_time", () => {
  const { audio, clock } = setup();
  clock.play();
  audio.currentTime = 12;
  expect(clock.songTime).toBe(2);
  clock.speed = 0.5;
  expect(clock.songTime).toBe(2);
  audio.currentTime = 14;
  expect(clock.songTime).toBe(3);
  expect(clock.audioTimeOf(4)).toBe(16);
  clock.speed = 2;
  expect(clock.songTime).toBe(3);
  audio.currentTime = 15;
  expect(clock.songTime).toBe(5);
});

test("pause_and_resume_do_not_drift", () => {
  const { audio, clock } = setup();
  let played = 0;
  for (let i = 0; i < 1000; i++) {
    clock.play();
    audio.currentTime += 0.37;
    played += 0.37;
    clock.pause();
    audio.currentTime += 1.13;
    expect(clock.songTime).toBeCloseTo(played, 9);
  }
  expect(clock.playing).toBe(false);
  clock.play();
  audio.currentTime += 0.5;
  expect(clock.songTime).toBeCloseTo(played + 0.5, 9);
});

test("seek_moves_song_time_exactly", () => {
  const { audio, clock } = setup();
  clock.seek(7.25);
  expect(clock.songTime).toBe(7.25);
  clock.play();
  audio.currentTime = 11;
  clock.seek(42.125);
  expect(clock.songTime).toBe(42.125);
  expect(clock.audioTimeOf(42.125)).toBe(11);
  clock.speed = 0.75;
  audio.currentTime = 13;
  expect(clock.songTime).toBe(43.625);
  clock.pause();
  clock.seek(1);
  audio.currentTime = 20;
  expect(clock.songTime).toBe(1);
});

test("a_hold_set_after_a_wrap_stops_song_time_in_the_new_pass", () => {
  const { audio, clock } = setup();
  clock.cycle = { from: 0, to: 4 };
  clock.play();
  clock.hold = 3;
  audio.currentTime = 14;
  expect(clock.songTime).toBe(3);
  // The hold lets go at 3, and song time wraps at 4 before the next hold is set.
  clock.hold = undefined;
  audio.currentTime = 15.5;
  expect(clock.songTime).toBe(0.5);
  clock.hold = 1;
  audio.currentTime = 17;
  expect(clock.songTime).toBe(1);
  expect(clock.passes).toBe(1);
});

test("overrun_counts_how_long_song_time_stands_at_its_hold", () => {
  const { audio, clock } = setup();
  clock.play();
  clock.hold = 2;
  audio.currentTime = 11;
  expect(clock.overrun).toBe(0);
  clock.speed = 0.5;
  audio.currentTime = 15;
  // Song time reached 2 at 13 s, and would have run on 1 s of song time by 15 s.
  expect(clock.songTime).toBe(2);
  expect(clock.overrun).toBe(1);
  clock.hold = 3;
  expect(clock.overrun).toBe(0);
  clock.hold = 2.5;
  clock.pause();
  expect(clock.overrun).toBe(0);
});
