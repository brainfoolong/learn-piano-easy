import { expect, test } from "../testing";
import { SETTINGS, VALUE_SETTINGS, defaults } from "./schema";
import { STORAGE_KEY, SETTINGS_VERSION, SettingsStore, clampValue, type StorageLike } from "./store";

/** A `localStorage` stand-in that lives in a map. */
class MemoryStorage implements StorageLike {
  readonly items = new Map<string, string>();
  getItem(key: string): string | null {
    return this.items.get(key) ?? null;
  }
  setItem(key: string, value: string): void {
    this.items.set(key, value);
  }
}

test("a_value_outside_its_range_is_clamped", () => {
  const store = new SettingsStore(new MemoryStorage());

  // Numbers clamp to their range and round to their step.
  expect(store.set("masterGain", 9)).toBe(2);
  expect(store.set("masterGain", -1)).toBe(0);
  expect(store.set("masterGain", 0.123)).toBe(0.12);
  expect(store.set("detune", 12.6)).toBe(13);
  expect(store.set("scrollSensitivity", 0.30000000000000004)).toBe(0.3);
  expect(store.set("renderOffset", Number.NaN)).toBe(0);
  expect(store.get("masterGain")).toBe(0.12);

  // A value of the wrong shape falls back to the default.
  expect(store.set("reverbImpulseResponse", "Unknown" as "room")).toBe("room");
  expect(store.set("showFps", "yes" as unknown as boolean)).toBe(false);
  expect(store.set("keyFlareColor", "red")).toBe("#ffffffff");

  // A colour gains full alpha and lower case.
  expect(store.set("keyFlareColor", "#FF8000")).toBe("#ff8000ff");

  // Every default is already a valid value of its own setting.
  for (const setting of VALUE_SETTINGS.values()) expect(clampValue(setting, setting.default)).toBe(setting.default);
  expect(new Set(SETTINGS.map((s) => s.id)).size).toBe(SETTINGS.length);
});

test("saved_values_survive_a_reload", () => {
  const storage = new MemoryStorage();
  const first = new SettingsStore(storage);
  const heard: [string, unknown][] = [];
  first.subscribe((id, value) => heard.push([id, value]));

  first.set("masterGain", 1.5);
  first.set("reverbImpulseResponse", "hall");
  first.set("showFps", true);
  first.set("pianoBlackKeyColor", "#102030ff");
  first.set("showFps", true);
  expect(heard).toEqual([
    ["masterGain", 1.5],
    ["reverbImpulseResponse", "hall"],
    ["showFps", true],
    ["pianoBlackKeyColor", "#102030ff"],
  ]);

  // Only changed values are saved, with the version.
  const saved = JSON.parse(storage.getItem(STORAGE_KEY) ?? "null");
  expect(saved).toEqual({
    version: SETTINGS_VERSION,
    values: { masterGain: 1.5, reverbImpulseResponse: "hall", showFps: true, pianoBlackKeyColor: "#102030ff" },
  });

  const second = new SettingsStore(storage);
  expect(second.values()).toEqual({ ...defaults(), masterGain: 1.5, reverbImpulseResponse: "hall", showFps: true, pianoBlackKeyColor: "#102030ff" });

  // Back at its default, a value leaves the saved file.
  second.reset("showFps");
  expect(JSON.parse(storage.getItem(STORAGE_KEY) ?? "null").values.showFps).toBeUndefined();

  // A broken save, or a storage that throws, starts from the defaults.
  storage.setItem(STORAGE_KEY, "{not json");
  expect(new SettingsStore(storage).values()).toEqual(defaults());
  const throwing: StorageLike = {
    getItem: () => {
      throw new Error("denied");
    },
    setItem: () => {
      throw new Error("denied");
    },
  };
  const offline = new SettingsStore(throwing);
  expect(offline.set("masterGain", 0.5)).toBe(0.5);
  expect(offline.get("masterGain")).toBe(0.5);
});

test("an_unknown_saved_key_is_dropped", () => {
  const storage = new MemoryStorage();
  storage.setItem(
    STORAGE_KEY,
    JSON.stringify({ version: SETTINGS_VERSION, values: { noSuchSetting: 3, masterGain: 7, showBPM: true } }),
  );
  const store = new SettingsStore(storage);
  const values = store.values() as Record<string, unknown>;
  expect("noSuchSetting" in values).toBe(false);

  // A known key still loads, clamped to its range.
  expect(store.get("masterGain")).toBe(2);
  expect(store.get("showBPM")).toBe(true);

  // The next save leaves the unknown key out.
  store.set("detune", 5);
  expect(JSON.parse(storage.getItem(STORAGE_KEY) ?? "null").values).toEqual({ masterGain: 2, showBPM: true, detune: 5 });
});

test("a_multi_keeps_its_options_in_order_and_reads_an_old_choice", () => {
  const load = (noteLabel: unknown) => {
    const storage = new MemoryStorage();
    storage.setItem(STORAGE_KEY, JSON.stringify({ version: SETTINGS_VERSION, values: { noteLabel } }));
    return new SettingsStore(storage).get("noteLabel");
  };
  // A value saved while note labels were one choice keeps that pick, and the old "none" picks nothing.
  expect(load("fingering")).toBe("fingering");
  expect(load("none")).toBe("");
  // Picks come back in the options' order, without repeats or values that are no option.
  expect(load("fingering,name,fingering,bogus")).toBe("name,fingering");
  expect(load(3)).toBe("");
  const store = new SettingsStore(null);
  expect(store.set("noteLabel", "keyBinding,name")).toBe("name,keyBinding");
});
