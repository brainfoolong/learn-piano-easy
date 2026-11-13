import { expect, test } from "../testing";
import { createFrameWatch } from "./glow";

/** Feeds `count` frames of `seconds` each, and says whether any window ran long. */
function feed(watch: ReturnType<typeof createFrameWatch>, count: number, seconds: number): boolean {
  let slow = false;
  for (let i = 0; i < count; i++) slow = watch.feed(seconds) || slow;
  return slow;
}

test("smooth_frames_never_read_as_slow", () => {
  expect(feed(createFrameWatch(), 60 * 20, 1 / 60)).toBe(false);
});

test("frames_slower_than_a_pause_read_as_slow", () => {
  // Software drawing can take most of a second per frame, and such a device needs the plain render most.
  expect(feed(createFrameWatch(), 40, 0.6)).toBe(true);
});

test("a_hidden_tab_or_one_stall_among_smooth_frames_is_not_slow", () => {
  const watch = createFrameWatch();
  expect(feed(watch, 60 * 3, 1 / 60)).toBe(false);
  expect(watch.feed(30)).toBe(false);
  expect(watch.feed(2)).toBe(false);
  expect(feed(watch, 60 * 10, 1 / 60)).toBe(false);
});

test("a_reset_waits_the_warm_up_again", () => {
  const watch = createFrameWatch();
  feed(watch, 60, 1 / 60);
  watch.reset();
  // Slow frames inside the warm-up are not judged.
  expect(feed(watch, 7, 0.25)).toBe(false);
});
