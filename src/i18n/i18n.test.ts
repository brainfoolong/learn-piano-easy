import { readdir } from "node:fs/promises";
import { dirname, join, relative } from "node:path";
import { expect, test } from "../testing";
import { catalogOf, CATALOGS } from "./all-catalogs";
import { formatDate, plural, PLURAL_FORMS } from "./format";
import { SETTINGS, type Setting } from "../settings/schema";
import { chooseLocale, COMPLETE_LOCALES, DEFAULT_LOCALE, LOCALE_TABLE, LOCALES, loadLocale, localeOfPath, messagesOf, pathInLocale, rowOf } from "./locale";
import { en } from "./messages/en";
import { withEnglish } from "./translation";

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
  expect(COMPLETE_LOCALES).toEqual(["en", "de"]);
  const english = shape(CATALOGS.en);
  for (const locale of COMPLETE_LOCALES) {
    const catalog = CATALOGS[locale]!;
    expect({ locale, shape: shape(catalog) }).toEqual({ locale, shape: english });
    for (const [path, kind] of Object.entries(english)) {
      const value = path.split(".").reduce<unknown>((node, key) => (node as Record<string, unknown>)[key], catalog);
      const text = kind === "function" ? (value as (n: number) => string)(2) : (value as string);
      expect({ locale, path, empty: text.trim().length === 0 }).toEqual({ locale, path, empty: false });
    }
  }
  // A translation holds no key the English lacks, whether complete or not.
  for (const [locale, catalog] of Object.entries(CATALOGS)) {
    const extra = Object.keys(shape(catalog)).filter((path) => !(path in english) && !Object.keys(english).some((p) => p.startsWith(`${path}.`)));
    expect({ locale, extra }).toEqual({ locale, extra: [] });
  }
});

test("a_missing_text_shows_in_english", async () => {
  const merged = withEnglish(en, { pages: { home: { title: "Título" } }, sponsor: { promises: ["Uno"] } });
  expect(merged.pages.home.title).toBe("Título");
  expect(merged.pages.home.description).toBe(en.pages.home.description);
  expect(merged.pages.play).toBe(en.pages.play);
  expect(merged.counts.badges(3)).toBe(en.counts.badges(3));
  // A list is one leaf, so the translated list stands whole.
  expect(merged.sponsor.promises).toEqual(["Uno"]);
  // A locale without a catalog of its own reads English in every text.
  await loadLocale("fr");
  expect(shape(messagesOf("fr"))).toEqual(shape(en));
  expect(messagesOf("fr").pages.learn.title).toBe(en.pages.learn.title);
  expect(catalogOf("fr").footer).toEqual(en.footer);
});

/** Every module the static imports of `entry` reach, as paths from the repository's root. */
async function staticGraph(entry: string): Promise<Set<string>> {
  const scanner = new Bun.Transpiler({ loader: "ts" });
  const seen = new Set<string>();
  const queue = [entry];
  for (let file = queue.shift(); file !== undefined; file = queue.shift()) {
    if (seen.has(file) || !file.endsWith(".ts")) continue;
    seen.add(file);
    const imports = scanner.scan(await Bun.file(file).text()).imports;
    for (const { path, kind } of imports) {
      if (kind !== "import-statement" || !path.startsWith(".")) continue;
      queue.push(Bun.resolveSync(path, dirname(file)));
    }
  }
  return new Set([...seen].map((file) => relative(join(import.meta.dir, "../.."), file).replaceAll("\\", "/")));
}

test("a_page_loads_only_its_own_catalog", async () => {
  // A locale's catalog is read only once its chunk has loaded.
  expect(() => messagesOf("ja")).toThrow();
  await loadLocale("ja");
  expect(messagesOf("ja").siteName).toBe(en.siteName);
  // The site's script reaches the English catalog by static imports, and no other locale's.
  const graph = await staticGraph(join(import.meta.dir, "../main.ts"));
  expect(graph.has("src/i18n/messages/en.ts")).toBe(true);
  const english = (file: string) => file === "src/i18n/messages/en.ts" || file.endsWith(".en.ts");
  const others = [...graph].filter((file) => (file.startsWith("src/i18n/messages/") && !english(file)) || file === "src/i18n/all-catalogs.ts");
  expect(others).toEqual([]);
});

test("no_site_module_imports_every_catalog", async () => {
  const src = join(import.meta.dir, "..");
  const scanner = new Bun.Transpiler({ loader: "ts" });
  const importers: string[] = [];
  for (const file of await readdir(src, { recursive: true })) {
    if (!file.endsWith(".ts") || file.endsWith(".test.ts") || file.endsWith(".d.ts")) continue;
    const imports = scanner.scan(await Bun.file(join(src, file)).text()).imports;
    if (imports.some(({ path }) => /(^|\/)all-catalogs$/.test(path))) importers.push(file);
  }
  expect(importers).toEqual([]);
});

test("every_locale_names_its_plural_forms", () => {
  for (const row of LOCALE_TABLE) {
    const categories = new Intl.PluralRules(row.intl).resolvedOptions().pluralCategories;
    expect({ locale: row.code, forms: [...PLURAL_FORMS[row.code]].sort() }).toEqual({ locale: row.code, forms: [...categories].sort() });
  }
  expect(plural("ru", 3, { one: "нота", few: "ноты", many: "нот", other: "ноты" })).toBe("ноты");
  expect(plural("ru", 5, { one: "нота", few: "ноты", many: "нот", other: "ноты" })).toBe("нот");
  expect(plural("ja", 5, { other: "音" })).toBe("音");
});

test("every_setting_has_its_texts_in_every_locale", () => {
  const ids = (SETTINGS as readonly Setting[]).map((setting) => setting.id);
  for (const locale of COMPLETE_LOCALES) {
    const texts: Record<string, { label: string; help: string; options?: Record<string, string> }> = catalogOf(locale).player.settings.settings;
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
  expect(rowOf("es").intl).toBe("es-419");
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
  expect(localeOfPath("es/play/")).toBe("es");
  expect(localeOfPath("zh/play/")).toBe("zh");
  expect(localeOfPath("hi/play/")).toBe("hi");
  expect(localeOfPath("ar/play/")).toBe("ar");
  expect(localeOfPath("pt/play/")).toBe("pt");
  // A locale that has not shipped has no pages, so its folder is no locale's.
  expect(localeOfPath("id/play/")).toBe("en");
  expect(pathInLocale("de/play/", "en")).toBe("play/");
  expect(pathInLocale("learn/profile/", "de")).toBe("de/learn/profile/");
  expect(pathInLocale("de/", "de")).toBe("de/");
});
