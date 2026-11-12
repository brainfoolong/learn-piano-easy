/**
 * The site's locales: their catalogs, the locale of a page's path, and the locale a visit should show.
 *
 * Decisions, and what each costs:
 * - The catalog table is the locale list. A third language is its catalog, the player's section files, and one line here.
 * - The first locale is the default, served from the site's root. Every other locale sits under its
 *   own folder, so `play/` in German is `de/play/`.
 * - A path here is relative to the site's root, never the address's whole path. The site runs from
 *   any base path, so only the caller knows where its root is.
 * - The language choice is `auto` until the learner picks one. With `auto`, a page of the default
 *   locale moves to the first site locale in the browser's languages. A page of another locale stays,
 *   since a learner reached it by a link or a choice. A picked locale wins on every page.
 */
import { de } from "./messages/de";
import { en, type Messages } from "./messages/en";

/** Every locale's catalog, the default locale first. */
export const CATALOGS = { en, de } satisfies Record<string, Messages>;

/** A locale of the site. */
export type Locale = keyof typeof CATALOGS;

/** The site's locales, the default first. */
export const LOCALES = Object.keys(CATALOGS) as Locale[];

/** The default locale, served from the site's root. */
export const DEFAULT_LOCALE: Locale = LOCALES[0]!;

/** The stored language choice: a locale, or `auto` before the learner picks one. */
export type LanguageChoice = "auto" | Locale;

/** Whether `value` names a locale of the site. */
export function isLocale(value: string): value is Locale {
  return Object.hasOwn(CATALOGS, value);
}

/** The catalog of `locale`. */
export function messagesOf(locale: Locale): Messages {
  return CATALOGS[locale];
}

/** The folder of `locale` relative to the site's root: `""` for the default locale. */
export function localeRoot(locale: Locale): string {
  return locale === DEFAULT_LOCALE ? "" : `${locale}/`;
}

/** The locale of the page at `path`, a path relative to the site's root such as `de/play/`. */
export function localeOfPath(path: string): Locale {
  const first = path.split("/")[0] ?? "";
  return first !== DEFAULT_LOCALE && isLocale(first) ? first : DEFAULT_LOCALE;
}

/** The page at `path` in `locale`: `de/play/` in English is `play/`. */
export function pathInLocale(path: string, locale: Locale): string {
  const from = localeOfPath(path);
  return localeRoot(locale) + path.slice(localeRoot(from).length);
}

/** The first site locale in the browser's `languages`, matched by their language subtag. */
export function browserLocale(languages: readonly string[]): Locale | undefined {
  for (const tag of languages) {
    const language = tag.split("-")[0]!.toLowerCase();
    if (isLocale(language)) return language;
  }
  return undefined;
}

/** The locale a visit to a page in `pageLocale` should show, from the stored choice and the browser. */
export function chooseLocale(pageLocale: Locale, choice: LanguageChoice, languages: readonly string[]): Locale {
  if (choice !== "auto") return choice;
  if (pageLocale !== DEFAULT_LOCALE) return pageLocale;
  return browserLocale(languages) ?? pageLocale;
}
