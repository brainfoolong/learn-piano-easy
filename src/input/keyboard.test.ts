import { expect, test } from "../testing";
import { DEFAULT_KEYS, keysOf, notesOf, playsNote, rebindKey } from "./keyboard";

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
