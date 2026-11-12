import { expect, test } from "../testing";
import { type KeyLabelOptions, keyNameText, keyTexts } from "./key-labels";

const NAMES: KeyLabelOptions = { white: true, black: true, flats: false, octave: "none", system: "letters", bindings: false, keyBindings: "" };

test("key_names_follow_flats_octave_and_system", () => {
  expect(keyNameText(61, NAMES)).toBe("C♯");
  expect(keyNameText(61, { ...NAMES, flats: true })).toBe("D♭");
  expect(keyNameText(60, { ...NAMES, octave: "onlyC" })).toBe("C4");
  expect(keyNameText(62, { ...NAMES, octave: "onlyC" })).toBe("D");
  expect(keyNameText(67, { ...NAMES, octave: "all", system: "solfege" })).toBe("Sol4");
});

test("white_and_black_key_names_are_switched_apart", () => {
  expect(keyNameText(61, { ...NAMES, black: false })).toBeUndefined();
  expect(keyNameText(60, { ...NAMES, white: false })).toBeUndefined();
});

test("each_bound_key_shows_its_computer_key", () => {
  const texts = keyTexts([47, 48, 61], { ...NAMES, white: false, black: false, bindings: true });
  // B2 has no computer key and no name, so it is left out.
  expect(texts.has(47)).toBe(false);
  expect(texts.get(48)).toEqual({ name: undefined, binding: "Z" });
  expect(texts.get(61)).toEqual({ name: undefined, binding: "2" });
});
