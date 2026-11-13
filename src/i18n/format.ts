/**
 * The number, plural and date helpers over `Intl`, which every counted message builds its text from.
 *
 * Each helper takes the locale first, so a message names its own locale and needs no global state.
 * It hands `Intl` the locale's own tag from the locale table, such as `es-419`. A formatter is built on
 * each call. The site formats a few numbers per view, so a cache would buy nothing a learner could notice.
 *
 * `PLURAL_FORMS` names each locale's plural categories, the ones `Intl.PluralRules` picks from. A counted
 * word passes every form of its locale, so a missing form fails the type check, not a learner's screen.
 */
import { rowOf, type LocaleCode as Locale } from "./locale-table";

/** The plural categories of each locale's counted words, as `Intl.PluralRules` names them. */
export const PLURAL_FORMS = {
  en: ["one", "other"],
  de: ["one", "other"],
  es: ["one", "many", "other"],
  zh: ["other"],
  hi: ["one", "other"],
  ar: ["zero", "one", "two", "few", "many", "other"],
  pt: ["one", "many", "other"],
  id: ["other"],
  bn: ["one", "other"],
  ru: ["one", "few", "many", "other"],
  fr: ["one", "many", "other"],
  ur: ["one", "other"],
  ja: ["other"],
  "en-XA": ["one", "other"],
} as const satisfies Record<Locale, readonly Intl.LDMLPluralRule[]>;

/** The forms of a counted word in `L`: one text for each of its plural categories. */
export type PluralForms<L extends Locale> = Record<(typeof PLURAL_FORMS)[L][number], string>;

/** `n` with the locale's digit grouping and decimal sign, such as `1,234.5` or `1.234,5`. */
export function formatNumber(locale: Locale, n: number, options?: Intl.NumberFormatOptions): string {
  return new Intl.NumberFormat(rowOf(locale).intl, options).format(n);
}

/** The form of a counted word that `n` takes in `locale`. */
export function plural<L extends Locale>(locale: L, n: number, forms: PluralForms<L>): string {
  const category = new Intl.PluralRules(rowOf(locale).intl).select(n) as keyof PluralForms<L>;
  return forms[category] ?? (forms as Record<string, string>)["other"]!;
}

/** `date` in the locale's order and month names. */
export function formatDate(locale: Locale, date: Date, options: Intl.DateTimeFormatOptions = { dateStyle: "long" }): string {
  return new Intl.DateTimeFormat(rowOf(locale).intl, options).format(date);
}
