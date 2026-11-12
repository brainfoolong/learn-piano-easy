import { expect, test } from "../testing";
import { SettingsStore } from "../settings/store";
import { applyMode, applyPatch, BASE, ModeInbox, modeOf, PLAY_MODES, settingsOf } from "./modes";

test("every_mode_sets_the_same_settings_so_none_inherits_the_last_one", () => {
  for (const mode of PLAY_MODES) {
    expect(Object.keys(settingsOf(mode))).toEqual(expect.arrayContaining(Object.keys(BASE)));
  }
  const store = new SettingsStore(null);
  applyMode(store, modeOf("game")!);
  applyMode(store, modeOf("playAlong")!);
  expect(store.get("enableGameMode")).toBe(false);
  expect(store.get("showParticles")).toBe(false);
  expect(store.get("waitForNotes")).toBe(true);
  expect(store.get("noteLabel")).toBe("name,fingering");
});

test("undoing_a_mode_puts_back_every_setting_it_replaced", () => {
  const store = new SettingsStore(null);
  store.set("noteLabel", "keyBinding");
  store.set("playMode", "freePlay");
  const before = store.values();
  const replaced = applyMode(store, modeOf("game")!);
  expect(store.get("enableGameMode")).toBe(true);
  expect(store.get("playMode")).toBe("player");
  applyPatch(store, replaced);
  expect(store.values()).toEqual(before);
});

test("the_inbox_keeps_the_latest_mode_until_the_player_takes_it", () => {
  const inbox = new ModeInbox();
  inbox.give(modeOf("game")!);
  inbox.give(modeOf("playAlong")!);
  expect(inbox.waiting).toBe(true);
  const taken: string[] = [];
  inbox.take((mode) => taken.push(mode.id));
  inbox.give(modeOf("game")!);
  expect(taken).toEqual(["playAlong", "game"]);
  expect(inbox.waiting).toBe(false);
});
