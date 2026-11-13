/**
 * The pseudo-locales: the English texts, each changed so a page shows what a real translation would break.
 *
 * - **`en-XA` makes a text stand out and run longer.** `pseudo` wraps it in `⟦ ⟧`, accents its vowels,
 *   and makes it 40% longer. A text on an `en-XA` page without the brackets was never read from a
 *   catalog, so it is hard-coded. A layout that holds the longer text holds most translations, since
 *   German, Russian and French run up to a third longer than English.
 * - **`ar-XB` makes a text read from right to left.** `pseudo` wraps the English in U+202E and U+202C,
 *   which show it mirrored, and its page carries `dir="rtl"`. A layout that names a left or a right side
 *   shows wrong there, as it would in Arabic.
 * - **A catalog, a lesson's texts and a guide's text each derive from the English when they load.**
 *   `pseudoTree` changes every string of a tree, and wraps a function so its result changes too.
 * - **The padding is accented lorem ipsum with spaces,** so a long text still wraps between words.
 * - **The pseudo-locales are no rows of the locale table,** so no list of languages, tool or check meets
 *   them. The dev server and a build with `--pseudo` write their pages, and the release build never does.
 */
import { isPseudoLocale, type LocaleCode, type PseudoLocale } from "./locale-table";

/** The vowels and their accented forms. */
const ACCENTS: Readonly<Record<string, string>> = {
  a: "á",
  e: "é",
  i: "í",
  o: "ö",
  u: "ü",
  y: "ý",
  A: "Å",
  E: "É",
  I: "Î",
  O: "Ö",
  U: "Ü",
  Y: "Ý",
};

/** What a text is padded with, cut to the length it needs. */
const PADDING = " ĺöŕéḿ íṕšüḿ ðöĺöŕ šíţ åḿéţ çöñšéçţéţüŕ åðíṕíšçíñĝ éĺíţ šéð ðö éíüšḿöð ţéḿṕöŕ íñçíðíðüñţ";

/** How much longer an `en-XA` text runs than its English. */
const GROWTH = 0.4;

/** The marks every `en-XA` text opens and closes with. */
export const PSEUDO_OPEN = "⟦";
export const PSEUDO_CLOSE = "⟧";

/** The marks every `ar-XB` text opens and closes with: right-to-left override, and pop directional formatting. */
export const RTL_OPEN = "‮";
export const RTL_CLOSE = "‬";

/**
 * `text` in the pseudo-locale `locale`, `en-XA` when absent. In `en-XA` it is accented, 40% longer and
 * wrapped in `⟦ ⟧`. In `ar-XB` it is wrapped in `RTL_OPEN` and `RTL_CLOSE`. An empty text stays empty.
 */
export function pseudo(text: string, locale: PseudoLocale = "en-XA"): string {
  if (text.trim() === "") return text;
  if (locale === "ar-XB") return `${RTL_OPEN}${text}${RTL_CLOSE}`;
  const accented = [...text].map((char) => ACCENTS[char] ?? char).join("");
  const extra = Math.ceil([...text].length * GROWTH);
  let padding = "";
  while (padding.length < extra) padding += PADDING;
  return `${PSEUDO_OPEN}${accented}${padding.slice(0, extra).trimEnd()}${PSEUDO_CLOSE}`;
}

/**
 * The text of `locale` in `texts`, a text keyed by locale: its English through `pseudoTree` in a
 * pseudo-locale, and its English where `texts` lacks the locale.
 */
export function textFor<T>(texts: { en: T } & Partial<Record<LocaleCode, T>>, locale: LocaleCode): T {
  return isPseudoLocale(locale) ? pseudoTree(texts.en, locale) : (texts[locale] ?? texts.en);
}

/** The keys of a text tree whose values are addresses, never text, such as a legal text's link. */
const ADDRESS_KEYS: ReadonlySet<string> = new Set(["route", "href"]);

/**
 * `tree` with every string changed by `pseudo` in `locale`, `en-XA` when absent, and every function's
 * result changed in turn. A value under an address key stays as it is.
 */
export function pseudoTree<T>(tree: T, locale: PseudoLocale = "en-XA"): T {
  if (typeof tree === "string") return pseudo(tree, locale) as T;
  if (typeof tree === "function") return ((...args: unknown[]) => pseudoTree((tree as (...a: unknown[]) => unknown)(...args), locale)) as T;
  if (Array.isArray(tree)) return tree.map((item: unknown) => pseudoTree(item, locale)) as T;
  if (typeof tree === "object" && tree !== null) {
    return Object.fromEntries(Object.entries(tree).map(([key, value]) => [key, ADDRESS_KEYS.has(key) ? value : pseudoTree(value, locale)])) as T;
  }
  return tree;
}
