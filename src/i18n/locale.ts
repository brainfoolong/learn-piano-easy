/**
 * The site's locales: each locale's catalog, the locale of a page's path, and the locale a visit should
 * show. The locale table of `src/i18n/locale-table.ts` holds each locale's facts, and this module
 * re-exports it.
 *
 * Decisions, and what each costs:
 * - **English is in the main bundle, and every other catalog is its own chunk.** `loadLocale` fetches
 *   a catalog and fills its gaps with English once, so `messagesOf` stays synchronous. It throws for a
 *   locale not loaded yet. The cost is one more request on a first visit to another locale.
 * - **The first locale is the default, served from the site's root.** Every other locale sits under its
 *   own folder, so `play/` in German is `de/play/`.
 * - **A path here is relative to the site's root, never the address's whole path.** The site runs from
 *   any base path, so only the caller knows where its root is.
 * - **A browser language matches by its first subtag,** so `es-MX` would find `es`. It never matches a
 *   pseudo-locale, whose pages only a path reaches, and only a `--pseudo` build writes.
 * - **The language choice is `auto` until the learner picks one.** With `auto`, a page of the default
 *   locale moves to the first site locale in the browser's languages. A page of another locale stays,
 *   since a learner reached it by a link or a choice. A picked locale wins on every page.
 */
import { DEFAULT_LOCALE, isPseudoLocale, LOCALES, type Locale, type LocaleCode, type ShippedLocale } from "./locale-table";
import { en, type Messages } from "./messages/en";
import { pseudoTree } from "./pseudo";
import { withEnglish, type Translation } from "./translation";

export * from "./locale-table";

/** The stored language choice: a shipped locale, or `auto` before the learner picks one. */
export type LanguageChoice = "auto" | ShippedLocale;

/** Whether `value` names a shipped locale of the site. */
export function isLocale(value: string): value is ShippedLocale {
  return (LOCALES as readonly string[]).includes(value);
}

/** Whether `value` names a locale a page may be written in: a shipped one, or a pseudo-locale. */
export function isPageLocale(value: string): value is Locale {
  return isLocale(value) || isPseudoLocale(value);
}

/**
 * The catalog chunk of each locale that has one. English is in the main bundle and needs none. A
 * pseudo-locale's catalog derives from the English, so it needs no chunk either.
 */
const CATALOG_CHUNKS: Partial<Record<LocaleCode, () => Promise<Translation<Messages>>>> = {
  de: () => import("./messages/de").then((module) => module.de),
  es: () => import("./messages/es").then((module) => module.es),
  zh: () => import("./messages/zh").then((module) => module.zh),
  hi: () => import("./messages/hi").then((module) => module.hi),
  ar: () => import("./messages/ar").then((module) => module.ar),
  "en-XA": async () => pseudoTree(en, "en-XA"),
  "ar-XB": async () => pseudoTree(en, "ar-XB"),
};

/** Each loaded locale's catalog, its gaps filled with English. */
const loaded = new Map<LocaleCode, Messages>([["en", en]]);

/** Loads the catalog of `locale` once, so `messagesOf(locale)` may read it. */
export async function loadLocale(locale: LocaleCode): Promise<void> {
  if (loaded.has(locale)) return;
  const translation = (await CATALOG_CHUNKS[locale]?.()) ?? {};
  loaded.set(locale, withEnglish<Messages>(en, translation));
}

/** The catalog of `locale`, which `loadLocale` must have loaded. */
export function messagesOf(locale: LocaleCode): Messages {
  const messages = loaded.get(locale);
  if (messages === undefined) throw new Error(`The catalog of "${locale}" is not loaded yet.`);
  return messages;
}

/** The folder of `locale` relative to the site's root: `""` for the default locale. */
export function localeRoot(locale: Locale): string {
  return locale === DEFAULT_LOCALE ? "" : `${locale}/`;
}

/** The locale of the page at `path`, a path relative to the site's root such as `de/play/`. */
export function localeOfPath(path: string): Locale {
  const first = path.split("/")[0] ?? "";
  return first !== DEFAULT_LOCALE && isPageLocale(first) ? first : DEFAULT_LOCALE;
}

/** The page at `path` in `locale`: `de/play/` in English is `play/`. */
export function pathInLocale(path: string, locale: Locale): string {
  const from = localeOfPath(path);
  return localeRoot(locale) + path.slice(localeRoot(from).length);
}

/** The first shipped locale in the browser's `languages`, matched by their first subtag. */
export function browserLocale(languages: readonly string[]): ShippedLocale | undefined {
  for (const tag of languages) {
    const language = tag.split("-")[0]!.toLowerCase();
    if (isLocale(language)) return language;
  }
  return undefined;
}

/** The locale a visit to a page in `pageLocale` should show, from the stored choice and the browser. */
export function chooseLocale(pageLocale: Locale, choice: LanguageChoice, languages: readonly string[]): Locale {
  if (choice !== "auto" && isLocale(choice)) return choice;
  if (pageLocale !== DEFAULT_LOCALE) return pageLocale;
  return browserLocale(languages) ?? pageLocale;
}
