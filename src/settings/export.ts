/**
 * Settings as a file: `exportSettings` writes every value as JSON, and `importSettings` reads one back.
 *
 * Decisions, and what each costs:
 * - The file is `{ app, version, values }`, and `values` holds every setting, not only the changed
 *   ones. A file then reads plainly and restores the same values even after a default changes.
 * - `app` marks the file as ours. A file without it, or with another app's name, is refused whole with
 *   a message, and the store keeps every value it had.
 * - Each value is read through `clampValue`, as the store reads its own save. A value saved under an
 *   older range still loads, and a value of the wrong shape becomes its default.
 * - An unknown key is dropped and named in the result, so a file from a newer version still loads.
 * - A setting the file leaves out keeps its current value, so a hand-written file of three settings
 *   changes those three only.
 * - Values are set in schema order, whatever the file's order. The theme comes before the colours, so
 *   the theme's colour set never overwrites the colours the file holds.
 */

import { VALUE_SETTINGS, type SettingId } from "./schema";
import { SETTINGS_VERSION, clampValue, type SettingsStore } from "./store";

/** The `app` field that marks a settings file as ours. */
export const SETTINGS_FILE_APP = "learn-piano-easy";

/** What an import did: the settings it set and the keys it dropped, or why it refused the file. */
export type ImportResult = { ok: true; applied: number; dropped: string[] } | { ok: false; message: string };

/** Every value of `store` as the JSON text of a settings file. */
export function exportSettings(store: SettingsStore): string {
  return JSON.stringify({ app: SETTINGS_FILE_APP, version: SETTINGS_VERSION, values: store.values() }, null, 2);
}

/** Sets `store` from the settings file `text`, or changes nothing when the file is not ours. */
export function importSettings(store: SettingsStore, text: string): ImportResult {
  let file: unknown;
  try {
    file = JSON.parse(text);
  } catch {
    return { ok: false, message: "This file is not a settings file: it is not valid JSON." };
  }
  if (typeof file !== "object" || file === null || (file as { app?: unknown }).app !== SETTINGS_FILE_APP) {
    return { ok: false, message: "This file is not a settings file from learn-piano-easy." };
  }
  const values = (file as { values?: unknown }).values;
  if (typeof values !== "object" || values === null || Array.isArray(values)) {
    return { ok: false, message: "This settings file holds no settings." };
  }

  const raw = values as Record<string, unknown>;
  let applied = 0;
  for (const setting of VALUE_SETTINGS.values()) {
    if (!Object.hasOwn(raw, setting.id)) continue;
    store.set(setting.id as SettingId, clampValue(setting, raw[setting.id]) as never);
    applied += 1;
  }
  const dropped = Object.keys(raw).filter((id) => !VALUE_SETTINGS.has(id));
  return { ok: true, applied, dropped };
}
