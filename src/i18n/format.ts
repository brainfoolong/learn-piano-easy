/**
 * The number, plural and date helpers over `Intl`, which every counted message builds its text from.
 *
 * Each helper takes the locale first, so a message names its own locale and needs no global state.
 * A formatter is built on each call. The site formats a few numbers per view, so a cache would buy
 * nothing a learner could notice.
 */
import type { Locale } from "./locale";

/** The forms of a counted word. `other` is required, since every locale has it. */
export type PluralForms = Partial<Record<Intl.LDMLPluralRule, string>> & { other: string };

/** `n` with the locale's digit grouping and decimal sign, such as `1,234.5` or `1.234,5`. */
export function formatNumber(locale: Locale, n: number, options?: Intl.NumberFormatOptions): string {
  return new Intl.NumberFormat(locale, options).format(n);
}

/** The form of a counted word that `n` takes in `locale`, or `other` when the catalog lacks it. */
export function plural(locale: Locale, n: number, forms: PluralForms): string {
  return forms[new Intl.PluralRules(locale).select(n)] ?? forms.other;
}

/** `date` in the locale's order and month names. */
export function formatDate(locale: Locale, date: Date, options: Intl.DateTimeFormatOptions = { dateStyle: "long" }): string {
  return new Intl.DateTimeFormat(locale, options).format(date);
}
