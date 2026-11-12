import { expect, test } from "../src/testing";
import { parseHand } from "./song-notation";

test("a_bar_that_does_not_fill_its_time_throws", () => {
  expect(() => parseHand("C4:1 D4:1 | E4:4", 480, 4, "a song")).toThrow("bar 1 holds 2 units, not 4");
});
