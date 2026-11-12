import { expect, test } from "../testing";
import { formatHex, parseHex } from "./color-picker";

test("a_hex_colour_survives_a_round_trip", () => {
  for (const hex of ["#000000ff", "#ffffffff", "#ff000080", "#1b1d22ff", "#6ea8ff00", "#7a4fe0c3"]) {
    const colour = parseHex(hex);
    expect(colour).not.toBeNull();
    expect(formatHex(colour!)).toBe(hex);
  }
  // Six digits mean opaque, and case and the leading # do not matter.
  expect(formatHex(parseHex("F4F4F0")!)).toBe("#f4f4f0ff");
  expect(parseHex("#12345")).toBeNull();
  expect(parseHex("red")).toBeNull();
});
