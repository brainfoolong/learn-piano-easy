import { expect, test } from "../testing";
import { DEFAULT_KEYS, keyReach, keysOf, notesOf, octaveShift, playsNote, rebindKey } from "./keyboard";

test("the_reach_of_the_keys_spans_the_lowest_and_highest_bound_note", () => {
  expect(keyReach("")).toEqual({ first: 48, last: 72 });
  // Binding a spare key to C2 widens the reach down, and unbinding C5 narrows it up.
  expect(keyReach(rebindKey(rebindKey("", 36, "KeyA"), 72, ""))).toEqual({ first: 36, last: 71 });
  const none = [...DEFAULT_KEYS.keys()].reduce((text, pitch) => rebindKey(text, pitch, ""), "");
  expect(keyReach(none)).toBeUndefined();
});

test("the_octave_shift_leaves_the_fewest_notes_outside_and_prefers_no_shift", () => {
  const reach = { first: 48, last: 72 };
  expect(octaveShift([], reach)).toBe(0);
  expect(octaveShift([60, 64, 67], reach)).toBe(0);
  // The G major scale from G4 fits only one octave up, and a low fifth one octave down.
  expect(octaveShift([67, 69, 71, 72, 74, 76, 78, 79], reach)).toBe(12);
  expect(octaveShift([41, 43], reach)).toBe(-12);
  expect(octaveShift([21], reach)).toBe(-36);
  // No shift holds both 40 and 80, so the one that leaves a single note out wins, the smallest first.
  expect(octaveShift([40, 60, 80], reach)).toBe(12);
  expect(octaveShift([45, 60], reach)).toBe(-12);
});

test("rebinding_a_key_moves_it_off_its_old_note", () => {
  expect(notesOf("").get("KeyZ")).toBe(48);
  expect(notesOf("").get("KeyI")).toBe(72);

  // KeyZ moves from C3 to C2, so C3 has no key and C2 plays from KeyZ.
  const moved = rebindKey("", 36, "KeyZ");
  expect(keysOf(moved).get(36)).toBe("KeyZ");
  expect(keysOf(moved).has(48)).toBe(false);
  expect(notesOf(moved).get("KeyZ")).toBe(36);

  // Binding every note back to its default stores no change.
  expect(rebindKey(rebindKey(moved, 36, ""), 48, "KeyZ")).toBe("");
  expect(keysOf("not json")).toEqual(new Map(DEFAULT_KEYS));
});

test("a_key_with_a_shortcut_modifier_or_in_a_text_field_plays_nothing", () => {
  const press = { code: "KeyZ", ctrlKey: false, altKey: false, shiftKey: false, metaKey: false, target: null };
  expect(playsNote(press)).toBe(true);
  expect(playsNote({ ...press, ctrlKey: true })).toBe(false);
  expect(playsNote({ ...press, target: { tagName: "INPUT", type: "text" } })).toBe(false);
});
