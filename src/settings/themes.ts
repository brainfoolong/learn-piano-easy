/**
 * The themes of the scene: each a named set of colour values, which the `theme` setting applies through
 * the store.
 *
 * Decisions, and what each costs:
 * - A theme sets the scene's colour settings only. The player's chrome follows the site's theme, which
 *   the `siteTheme` setting picks in `src/site/site.ts`, so a light page may frame a dark scene.
 * - A theme lists only the colours it changes from the schema's defaults. Choosing it sets every colour
 *   setting to the theme's value or else its default. The dark theme is the defaults, and a colour a
 *   later goal adds needs no theme edit until a theme wants it different.
 * - Choosing a theme sets its colours through the store, so each one shows in the panel and can be
 *   changed after. A colour the learner chose is overwritten by the next theme choice.
 * - Loading the app applies nothing. The colours already saved stay as the learner left them.
 */

import { VALUE_SETTINGS, type ColourId, type SettingValue } from "./schema";
import type { SettingsStore } from "./store";

/** A theme's id: a value of the `theme` setting. */
export type ThemeId = SettingValue<"theme">;

/** The colours each theme changes from the schema's defaults, as `#rrggbbaa`. */
export const THEMES: Record<ThemeId, Partial<Record<ColourId, string>>> = {
  dark: {},
  light: {
    pianoWhiteKeyColor: "#ffffffff",
    pianoBlackKeyColor: "#22262fff",
    pianoBackgroundColor: "#e6eaf2ff",
    keyFlareColor: "#2f6fe0ff",
    bgCol1: "#f4f6fbff",
    bgCol5: "#e3e7f0ff",
    bgCol3: "#c5cddcff",
    measureLineColor: "#8a95b0ff",
    beatLineColor: "#d5dbe7ff",
    measureNumbersColor: "#5a6684ff",
  },
};

/** Sets every colour setting of `store` to theme `id`'s value, or else to its default. */
export function applyThemeColours(store: SettingsStore, id: ThemeId): void {
  const theme = THEMES[id];
  for (const setting of VALUE_SETTINGS.values()) {
    if (setting.kind !== "colour") continue;
    const colour = setting.id as ColourId;
    store.set(colour, theme[colour] ?? setting.default);
  }
}

/** Applies a theme's colours to `store` each time the `theme` setting is chosen. */
export function applyThemes(store: SettingsStore): () => void {
  return store.subscribe((id, value) => {
    if (id === "theme") applyThemeColours(store, value as ThemeId);
  });
}
