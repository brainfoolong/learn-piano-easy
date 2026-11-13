/**
 * Every locale's catalog, imported statically, for the build, the tools and the tests.
 *
 * The site never imports this module, since it would put every locale's texts in the main bundle. A
 * page loads its own catalog through `loadLocale` of `src/i18n/locale.ts`. A test checks that no module
 * of `src/` imports this one.
 */
import { LOCALES, loadLocale, type LocaleCode } from "./locale";
import { de } from "./messages/de";
import { en, type Messages } from "./messages/en";
import { es } from "./messages/es";
import { withEnglish, type Translation } from "./translation";

/** Each locale's catalog as its files hold it, before English fills its gaps. */
export const CATALOGS: Partial<Record<LocaleCode, Translation<Messages>>> & { en: Messages; de: Messages } = { en, de, es };

/** The catalog of `locale` as a page of it reads it, its gaps filled with English. */
export function catalogOf(locale: LocaleCode): Messages {
  return withEnglish<Messages>(en, CATALOGS[locale] ?? {});
}

/** Loads every shipped locale's catalog, so `messagesOf` reads any of them. */
export async function loadEveryLocale(): Promise<void> {
  await Promise.all(LOCALES.map(loadLocale));
}
