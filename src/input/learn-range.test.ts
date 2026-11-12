import { normalizeRange } from "../keyboard/range";
import { SettingsStore } from "../settings/store";
import { expect, test } from "../testing";
import { InputBus } from "./input-bus";
import { createRangeLearning, RangeLearner } from "./learn-range";

test("two_presses_set_the_range_in_either_order", () => {
  const upwards = new RangeLearner();
  expect(upwards.press(36)).toBeUndefined();
  expect(upwards.first).toBe(36);
  expect(upwards.press(96)).toEqual({ first: 36, last: 96 });

  const downwards = new RangeLearner();
  expect(downwards.press(96)).toBeUndefined();
  expect(downwards.press(36)).toEqual({ first: 36, last: 96 });

  // Through the bus, the two presses land in the settings, whichever came first.
  const bus = new InputBus(() => 0);
  const store = new SettingsStore(null);
  const steps: string[] = [];
  const learning = createRangeLearning(bus, store, (step) => steps.push(step));
  learning.toggle();
  bus.noteOn(84, 90, "keyboard");
  bus.noteOff(84, "keyboard");
  bus.noteOn(48, 90, "midi");
  expect(steps).toEqual(["lowest", "highest", "done"]);
  expect(learning.active).toBe(false);
  expect(store.get("keyboardFirstNote")).toBe(48);
  expect(store.get("keyboardLastNote")).toBe(84);
});

test("a_learned_range_is_normalized", () => {
  // Two black keys a fourth apart widen to white keys, then grow to an octave and its top note.
  const learner = new RangeLearner();
  learner.press(61);
  const range = learner.press(66);
  expect(range).toEqual(normalizeRange(61, 66));
  expect(range).toEqual({ first: 60, last: 72 });

  // Keys past the 88 of a piano are clamped to them.
  const wide = new RangeLearner();
  wide.press(5);
  expect(wide.press(120)).toEqual({ first: 21, last: 108 });
});
