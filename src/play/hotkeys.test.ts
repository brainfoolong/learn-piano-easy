import { SettingsStore } from "../settings/store";
import { expect, test } from "../testing";
import { ACTIONS, type ActionId, type ActionRuns, bindingsOf, createHotkeys, type KeyPress, keyLabel, rebind } from "./hotkeys";

/** Runs that record each action they run, in order. */
function recorder(): { runs: ActionRuns; ran: ActionId[] } {
  const ran: ActionId[] = [];
  const runs = Object.fromEntries(ACTIONS.map(({ id }) => [id, () => void ran.push(id)])) as unknown as ActionRuns;
  return { runs, ran };
}

/** A key press of `code` on `target`, with no modifier unless `held` names one. */
function press(code: string, target: unknown = null, held: Partial<KeyPress> = {}): KeyPress {
  return { code, ctrlKey: false, altKey: false, shiftKey: false, metaKey: false, target, ...held };
}

/** An element stand-in that the registry reads by its tag, type and role. */
function element(tagName: string, type = "", role = "") {
  return { tagName, type, isContentEditable: false, getAttribute: (name: string) => (name === "role" && role !== "" ? role : null) };
}

test("a_rebound_key_runs_its_action", () => {
  const settings = new SettingsStore(null);
  const { runs, ran } = recorder();
  const hotkeys = createHotkeys(runs, settings);

  expect(hotkeys.handle(press("Space"))).toBe(true);
  expect(hotkeys.handle(press("ArrowUp", null, { shiftKey: true }))).toBe(true);
  expect(ran).toEqual(["play", "transposeUp"]);

  // Play moves to P. Space now runs nothing.
  settings.set("hotKeyBindings", rebind(settings.get("hotKeyBindings"), "play", "KeyP"));
  ran.length = 0;
  expect(hotkeys.handle(press("KeyP"))).toBe(true);
  expect(hotkeys.handle(press("Space"))).toBe(false);
  expect(ran).toEqual(["play"]);

  // Taking the loop's key for play unbinds the loop, so no key runs two actions.
  settings.set("hotKeyBindings", rebind(settings.get("hotKeyBindings"), "play", "KeyL"));
  expect(bindingsOf(settings.get("hotKeyBindings")).loop).toBe("");
  ran.length = 0;
  hotkeys.handle(press("KeyL"));
  expect(ran).toEqual(["play"]);

  // Back on its default, play stores no change at all.
  expect(rebind(rebind("", "play", "KeyP"), "play", "Space")).toBe("");
  expect(keyLabel("Shift+ArrowUp")).toBe("Shift + ↑");

  // `disableHotkeys` turns every key off.
  settings.set("disableHotkeys", true);
  expect(hotkeys.handle(press("KeyL"))).toBe(false);
});

test("a_key_in_a_text_field_runs_nothing", () => {
  const settings = new SettingsStore(null);
  const { runs, ran } = recorder();
  const hotkeys = createHotkeys(runs, settings);

  expect(hotkeys.handle(press("KeyF", element("INPUT", "text")))).toBe(false);
  expect(hotkeys.handle(press("Space", element("input", "search")))).toBe(false);
  expect(hotkeys.handle(press("KeyL", element("TEXTAREA")))).toBe(false);
  expect(hotkeys.handle(press("KeyL", { ...element("DIV"), isContentEditable: true }))).toBe(false);
  // A focused control takes its own keys, so it acts once and never twice.
  expect(hotkeys.handle(press("Space", element("BUTTON")))).toBe(false);
  expect(hotkeys.handle(press("ArrowLeft", element("DIV", "", "slider")))).toBe(false);
  expect(hotkeys.handle(press("ArrowUp", element("INPUT", "range")))).toBe(false);
  expect(ran).toEqual([]);

  // Outside a text field the same keys run, and a button lets keys other than its own through.
  expect(hotkeys.handle(press("KeyF", element("BUTTON")))).toBe(true);
  expect(hotkeys.handle(press("KeyL", element("INPUT", "checkbox")))).toBe(true);
  expect(ran).toEqual(["fullscreen", "loop"]);
});
