import { expect, test } from "../testing";
import { importSettings, exportSettings, SETTINGS_FILE_APP } from "./export";
import { VALUE_SETTINGS, defaults, type SettingId, type ValueSetting } from "./schema";
import { SettingsStore, clampValue } from "./store";

/** A valid value of `setting` that is not its default. */
function awayFromDefault(setting: ValueSetting): unknown {
  switch (setting.kind) {
    case "toggle":
      return !setting.default;
    case "number":
    case "note":
      return clampValue(setting, setting.default === setting.max ? setting.min : setting.max);
    case "choice":
      return setting.options.find((value) => value !== setting.default);
    case "multi":
      return setting.default === "" ? setting.options.join(",") : "";
    case "colour":
      return setting.default === "#123456ff" ? "#654321ff" : "#123456ff";
    case "text":
      return `${setting.default}x`.slice(-setting.maxLength);
  }
}

test("export_then_import_restores_every_value", () => {
  const source = new SettingsStore(null);
  for (const setting of VALUE_SETTINGS.values()) source.set(setting.id as SettingId, awayFromDefault(setting) as never);
  const changed = source.values() as Record<string, unknown>;
  for (const setting of VALUE_SETTINGS.values()) expect([setting.id, changed[setting.id]]).not.toEqual([setting.id, setting.default]);

  const target = new SettingsStore(null);
  const result = importSettings(target, exportSettings(source));
  expect(result).toEqual({ ok: true, applied: VALUE_SETTINGS.size, dropped: [] });
  expect(target.values()).toEqual(source.values());

  // An unknown key is dropped, a bad value clamps, and a key the file lacks keeps its value.
  const partial = JSON.stringify({ app: SETTINGS_FILE_APP, version: 99, values: { noSuchSetting: 1, masterGain: 9 } });
  expect(importSettings(target, partial)).toEqual({ ok: true, applied: 1, dropped: ["noSuchSetting"] });
  expect(target.get("masterGain")).toBe(2);
  expect(target.get("showFps")).toBe(source.get("showFps"));

  // A file that is not ours is refused whole, and the store keeps every value.
  const before = target.values();
  for (const text of ["{broken", "[]", JSON.stringify({ values: defaults() }), JSON.stringify({ app: SETTINGS_FILE_APP, values: [] })]) {
    const refused = importSettings(target, text);
    expect(refused.ok).toBe(false);
    if (!refused.ok) expect(refused.message.length).toBeGreaterThan(10);
  }
  expect(target.values()).toEqual(before);
});
