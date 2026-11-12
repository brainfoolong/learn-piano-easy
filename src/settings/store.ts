/**
 * The settings store: holds every setting's value, clamps each change, tells subscribers, and saves.
 *
 * Decisions, and what each costs:
 * - Every value that enters the store passes `clampValue`. A number is clamped to its range and rounded
 *   to its step, a note is rounded and clamped, and a multi keeps only its options, in their order. Any
 *   other value of the wrong shape falls back to its default. A bad saved value
 *   or a bad caller can never put a value of the wrong type in front of a module.
 * - It saves to one `localStorage` key as `{ version, values }`, and only the values that differ from
 *   their defaults. A default the app changes then reaches every learner who never touched it.
 * - A saved value is read through `clampValue` too, so a value saved under an older range still loads.
 *   A saved key the schema no longer has is dropped, and the next save leaves it out.
 * - A read that fails, such as broken JSON or a storage that throws, starts from the defaults. A write
 *   that fails keeps the value in memory, so the session still works without storage.
 * - `version` marks the shape of the saved values. Loading reads any version the same way, because
 *   clamping already makes an old or newer file safe. A future migration goes in `load`.
 * - A subscriber hears each change that alters a value, after the store holds it.
 * - Each kept save calls `noteChange("settings")` of `src/data/changes.ts`.
 *
 * Gaps: a change in another tab is not picked up until the next visit.
 */

import { noteChange } from "../data/changes";
import { VALUE_SETTINGS, defaults, picksOf, type SettingId, type SettingValue, type SettingValues, type ValueSetting } from "./schema";

/** The `localStorage` key the settings live under. */
export const STORAGE_KEY = "learn-piano-easy.settings";

/** The version of the saved shape. */
export const SETTINGS_VERSION = 1;

/** The part of `Storage` the store uses, so a test can pass its own. */
export interface StorageLike {
  getItem(key: string): string | null;
  setItem(key: string, value: string): void;
}

/** Hears a change of one setting. */
export type SettingsListener = <K extends SettingId>(id: K, value: SettingValue<K>) => void;

const COLOUR = /^#([0-9a-f]{6}|[0-9a-f]{8})$/i;

/** `raw` as a valid value of `setting`: clamped and rounded, or the default when its shape is wrong. */
export function clampValue(setting: ValueSetting, raw: unknown): boolean | number | string {
  switch (setting.kind) {
    case "toggle":
      return typeof raw === "boolean" ? raw : setting.default;
    case "number": {
      if (typeof raw !== "number" || !Number.isFinite(raw)) return setting.default;
      const { min, max, step } = setting;
      const steps = Math.round((Math.min(max, Math.max(min, raw)) - min) / step);
      // The grid's own decimals, so 0.1 + 0.2 lands on 0.3 and not on 0.30000000000000004.
      const decimals = Math.max(decimalsOf(step), decimalsOf(min));
      const snapped = Number((min + steps * step).toFixed(decimals));
      return Math.min(max, snapped);
    }
    case "note":
      if (typeof raw !== "number" || !Number.isFinite(raw)) return setting.default;
      return Math.min(setting.max, Math.max(setting.min, Math.round(raw)));
    case "choice":
      return typeof raw === "string" && setting.options.some((value) => value === raw) ? raw : setting.default;
    case "multi":
      return typeof raw === "string" ? picksOf(raw, setting.options).join(",") : setting.default;
    case "colour":
      if (typeof raw !== "string" || !COLOUR.test(raw)) return setting.default;
      return raw.length === 7 ? `${raw.toLowerCase()}ff` : raw.toLowerCase();
    case "text":
      return typeof raw === "string" ? raw.slice(0, setting.maxLength) : setting.default;
  }
}

/** The number of decimals `n` is written with. */
function decimalsOf(n: number): number {
  const text = String(n);
  const exponent = text.indexOf("e-");
  if (exponent >= 0) return Number(text.slice(exponent + 2));
  const dot = text.indexOf(".");
  return dot < 0 ? 0 : text.length - dot - 1;
}

/** The app's settings, loaded from `storage` and saved back to it. */
export class SettingsStore {
  readonly #storage: StorageLike | null;
  readonly #values: SettingValues;
  readonly #listeners = new Set<SettingsListener>();

  /** Loads from `storage`, which is `localStorage` when the page has one. `null` keeps values in memory. */
  constructor(storage: StorageLike | null = SettingsStore.#pageStorage()) {
    this.#storage = storage;
    this.#values = defaults();
    this.#load();
  }

  /** The value of setting `id`. */
  get<K extends SettingId>(id: K): SettingValue<K> {
    return this.#values[id];
  }

  /** A copy of every value. */
  values(): SettingValues {
    return { ...this.#values };
  }

  /** Sets `id` to `value` clamped, saves, and tells subscribers when it changed. Returns what it holds. */
  set<K extends SettingId>(id: K, value: SettingValue<K>): SettingValue<K> {
    const setting = VALUE_SETTINGS.get(id);
    if (setting === undefined) throw new Error(`There is no setting "${id}".`);
    const next = clampValue(setting, value) as SettingValue<K>;
    if (next === this.#values[id]) return next;
    (this.#values as Record<string, unknown>)[id] = next;
    this.#save();
    for (const listener of this.#listeners) listener(id, next);
    return next;
  }

  /** Sets `id` back to its default. */
  reset<K extends SettingId>(id: K): void {
    const setting = VALUE_SETTINGS.get(id);
    if (setting !== undefined) this.set(id, setting.default as SettingValue<K>);
  }

  /** Calls `listener` on every change, until the returned function is called. */
  subscribe(listener: SettingsListener): () => void {
    this.#listeners.add(listener);
    return () => this.#listeners.delete(listener);
  }

  #load(): void {
    let saved: unknown;
    try {
      const text = this.#storage?.getItem(STORAGE_KEY);
      if (text === null || text === undefined) return;
      saved = JSON.parse(text);
    } catch {
      return;
    }
    if (typeof saved !== "object" || saved === null) return;
    const values = (saved as { values?: unknown }).values;
    if (typeof values !== "object" || values === null) return;
    const target = this.#values as Record<string, unknown>;
    for (const [id, raw] of Object.entries(values)) {
      const setting = VALUE_SETTINGS.get(id);
      if (setting !== undefined) target[id] = clampValue(setting, raw);
    }
  }

  #save(): void {
    if (this.#storage === null) return;
    const changed: Record<string, unknown> = {};
    for (const setting of VALUE_SETTINGS.values()) {
      const value = (this.#values as Record<string, unknown>)[setting.id];
      if (value !== setting.default) changed[setting.id] = value;
    }
    try {
      this.#storage.setItem(STORAGE_KEY, JSON.stringify({ version: SETTINGS_VERSION, values: changed }));
    } catch {
      return; // Storage is full or refused. The value stays in memory for this visit.
    }
    noteChange("settings");
  }

  static #pageStorage(): StorageLike | null {
    try {
      return typeof localStorage === "undefined" ? null : localStorage;
    } catch {
      return null;
    }
  }
}
