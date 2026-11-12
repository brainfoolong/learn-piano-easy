import { expect, test } from "../testing";
import { formatDate } from "./format";
import { SETTINGS, type Setting } from "../settings/schema";
import { CATALOGS, chooseLocale, DEFAULT_LOCALE, LOCALES, localeOfPath, pathInLocale } from "./locale";

/** Every message of `catalog` by its dotted path, each as its kind: `string` or `function`. */
function shape(catalog: object, prefix = ""): Record<string, string> {
  const out: Record<string, string> = {};
  for (const [key, value] of Object.entries(catalog)) {
    const path = prefix + key;
    if (typeof value === "object" && value !== null) Object.assign(out, shape(value, `${path}.`));
    else out[path] = typeof value;
  }
  return out;
}

test("every_locale_has_every_message", () => {
  expect(LOCALES[0]).toBe(DEFAULT_LOCALE);
  const english = shape(CATALOGS.en);
  for (const locale of LOCALES) {
    const catalog = CATALOGS[locale];
    expect({ locale, shape: shape(catalog) }).toEqual({ locale, shape: english });
    for (const [path, kind] of Object.entries(english)) {
      const value = path.split(".").reduce<unknown>((node, key) => (node as Record<string, unknown>)[key], catalog);
      const text = kind === "function" ? (value as (n: number) => string)(2) : (value as string);
      expect({ locale, path, empty: text.trim().length === 0 }).toEqual({ locale, path, empty: false });
    }
  }
});

test("every_setting_has_its_texts_in_every_locale", () => {
  const ids = (SETTINGS as readonly Setting[]).map((setting) => setting.id);
  for (const locale of LOCALES) {
    const texts: Record<string, { label: string; help: string; options?: Record<string, string> }> = CATALOGS[locale].player.settings.settings;
    expect({ locale, ids: Object.keys(texts).sort() }).toEqual({ locale, ids: [...ids].sort() });
    for (const setting of SETTINGS as readonly Setting[]) {
      const { label, help, options } = texts[setting.id]!;
      const values = setting.kind === "choice" || setting.kind === "multi" ? setting.options : [];
      const missing = [label, help, ...values.map((value) => options?.[value] ?? "")].some((text) => text.trim() === "");
      expect({ locale, id: setting.id, missing }).toEqual({ locale, id: setting.id, missing: false });
      expect({ locale, id: setting.id, options: Object.keys(options ?? {}).sort() }).toEqual({ locale, id: setting.id, options: [...values].sort() });
    }
  }
  expect(CATALOGS.en.player.settings.key("B♭", "major")).toBe("B♭ major");
  expect(CATALOGS.de.player.settings.key("B♭", "major")).toBe("B-Dur");
  expect(CATALOGS.de.player.settings.key("B", "minor")).toBe("H-Moll");
});

test("plurals_and_numbers_follow_the_locale", () => {
  expect(CATALOGS.en.counts.badges(1)).toBe("1 badge");
  expect(CATALOGS.en.counts.badges(1234)).toBe("1,234 badges");
  expect(CATALOGS.en.counts.minutesPlayed(0)).toBe("0 minutes played");
  expect(CATALOGS.de.counts.minutesPlayed(1)).toBe("1 Minute gespielt");
  expect(CATALOGS.de.counts.minutesPlayed(2)).toBe("2 Minuten gespielt");
  expect(CATALOGS.de.counts.xp(12500)).toBe("12.500 XP");
  expect(CATALOGS.en.counts.xp(12500)).toBe("12,500 XP");
  const day = new Date(2026, 2, 5);
  expect(formatDate("en", day)).toBe("March 5, 2026");
  expect(formatDate("de", day)).toBe("5. März 2026");
});

test("the_first_visit_takes_the_browser_language", () => {
  // With no choice stored, an English page moves to the first site locale the browser names.
  expect(chooseLocale("en", "auto", ["de-AT", "en-US"])).toBe("de");
  expect(chooseLocale("en", "auto", ["fr-FR", "de"])).toBe("de");
  expect(chooseLocale("en", "auto", ["en-GB", "de-DE"])).toBe("en");
  expect(chooseLocale("en", "auto", ["fr-FR"])).toBe("en");
  expect(chooseLocale("en", "auto", [])).toBe("en");
  // A German page was reached on purpose, so it stays.
  expect(chooseLocale("de", "auto", ["en-US"])).toBe("de");
  // A stored choice wins over the browser on every page.
  expect(chooseLocale("en", "en", ["de-DE"])).toBe("en");
  expect(chooseLocale("de", "en", ["de-DE"])).toBe("en");
  expect(chooseLocale("en", "de", ["en-US"])).toBe("de");

  expect(localeOfPath("")).toBe("en");
  expect(localeOfPath("play/")).toBe("en");
  expect(localeOfPath("de/learn/profile/")).toBe("de");
  expect(localeOfPath("design/")).toBe("en");
  expect(pathInLocale("de/play/", "en")).toBe("play/");
  expect(pathInLocale("learn/profile/", "de")).toBe("de/learn/profile/");
  expect(pathInLocale("de/", "de")).toBe("de/");
});
