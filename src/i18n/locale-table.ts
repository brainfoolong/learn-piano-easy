/**
 * The locale table: the one home of each locale's facts. Every list of locales elsewhere derives from it.
 *
 * - **It imports nothing,** so the settings' schema and the number helpers read it without loading a
 *   catalog, and no catalog's type comes to depend on itself.
 * - **`shipped` gates everything a visitor meets:** the pages the build writes, the language switch, the
 *   footer's links, `hreflang` and the sitemap.
 * - **`complete` marks the locales whose catalogs hold every text.** The type checker and the catalog
 *   test hold them to it, and only their pages are checked for English that shows.
 * - **The first row is the default locale,** served from the site's root.
 */

/** The note names a locale shows a new learner. */
export type NamingSystem = "letters" | "german" | "solfege";

/** The writing system of a locale's texts. */
export type Alphabet = "latin" | "han" | "devanagari" | "arabic" | "bengali" | "cyrillic" | "japanese";

/** One locale's facts. */
export interface LocaleRow {
  /** The locale's code, which is also its folder, such as `es`. */
  code: string;
  /** Its name in English, such as `Spanish`. */
  english: string;
  /** Its name in itself, as the language switch lists it. */
  endonym: string;
  /** The `lang` attribute of its pages. */
  lang: string;
  /** The tag its numbers, dates, plurals and sorting take from `Intl`. */
  intl: string;
  dir: "ltr" | "rtl";
  /** The Open Graph locale of its pages, such as `es_LA`. */
  ogLocale: string;
  /** The note names a new learner of this locale sees. */
  naming: NamingSystem;
  alphabet: Alphabet;
  /** Whether the build writes its pages and the site offers it. */
  shipped: boolean;
  /** Whether its catalog holds every text. */
  complete: boolean;
}

/** Every locale, the default first. */
export const LOCALE_TABLE = [
  { code: "en", english: "English", endonym: "English", lang: "en", intl: "en", dir: "ltr", ogLocale: "en_US", naming: "letters", alphabet: "latin", shipped: true, complete: true },
  { code: "de", english: "German", endonym: "Deutsch", lang: "de", intl: "de", dir: "ltr", ogLocale: "de_DE", naming: "german", alphabet: "latin", shipped: true, complete: true },
  { code: "es", english: "Spanish", endonym: "Español", lang: "es", intl: "es-419", dir: "ltr", ogLocale: "es_LA", naming: "solfege", alphabet: "latin", shipped: false, complete: false },
  { code: "zh", english: "Chinese", endonym: "简体中文", lang: "zh-Hans", intl: "zh-Hans-CN", dir: "ltr", ogLocale: "zh_CN", naming: "letters", alphabet: "han", shipped: false, complete: false },
  { code: "hi", english: "Hindi", endonym: "हिन्दी", lang: "hi", intl: "hi-IN", dir: "ltr", ogLocale: "hi_IN", naming: "letters", alphabet: "devanagari", shipped: false, complete: false },
  { code: "ar", english: "Arabic", endonym: "العربية", lang: "ar", intl: "ar", dir: "rtl", ogLocale: "ar_AR", naming: "solfege", alphabet: "arabic", shipped: false, complete: false },
  { code: "pt", english: "Portuguese", endonym: "Português (Brasil)", lang: "pt-BR", intl: "pt-BR", dir: "ltr", ogLocale: "pt_BR", naming: "solfege", alphabet: "latin", shipped: false, complete: false },
  { code: "id", english: "Indonesian", endonym: "Bahasa Indonesia", lang: "id", intl: "id", dir: "ltr", ogLocale: "id_ID", naming: "letters", alphabet: "latin", shipped: false, complete: false },
  { code: "bn", english: "Bengali", endonym: "বাংলা", lang: "bn", intl: "bn-BD", dir: "ltr", ogLocale: "bn_BD", naming: "letters", alphabet: "bengali", shipped: false, complete: false },
  { code: "ru", english: "Russian", endonym: "Русский", lang: "ru", intl: "ru", dir: "ltr", ogLocale: "ru_RU", naming: "solfege", alphabet: "cyrillic", shipped: false, complete: false },
  { code: "fr", english: "French", endonym: "Français", lang: "fr", intl: "fr", dir: "ltr", ogLocale: "fr_FR", naming: "solfege", alphabet: "latin", shipped: false, complete: false },
  { code: "ur", english: "Urdu", endonym: "اردو", lang: "ur", intl: "ur-PK", dir: "rtl", ogLocale: "ur_PK", naming: "letters", alphabet: "arabic", shipped: false, complete: false },
  { code: "ja", english: "Japanese", endonym: "日本語", lang: "ja", intl: "ja", dir: "ltr", ogLocale: "ja_JP", naming: "solfege", alphabet: "japanese", shipped: false, complete: false },
] as const satisfies readonly LocaleRow[];

type Row = (typeof LOCALE_TABLE)[number];

/** A locale of the table, shipped or not. */
export type LocaleCode = Row["code"];

/**
 * A locale the site serves. A text keyed by locale, such as a lesson's, holds one for each, so a row
 * that ships fails the type check wherever its texts are missing.
 */
export type Locale = Extract<Row, { shipped: true }>["code"];

/** The row of `locale`. */
export function rowOf(locale: LocaleCode): LocaleRow {
  return LOCALE_TABLE.find((row) => row.code === locale)!;
}

/** The site's shipped locales, the default first. */
export const LOCALES = LOCALE_TABLE.filter((row): row is Extract<Row, { shipped: true }> => row.shipped).map((row) => row.code);

/** The locales whose catalogs hold every text. */
export const COMPLETE_LOCALES: readonly LocaleCode[] = LOCALE_TABLE.filter((row) => row.complete).map((row) => row.code);

/** The default locale, served from the site's root. */
export const DEFAULT_LOCALE: Locale = LOCALE_TABLE[0].code;
