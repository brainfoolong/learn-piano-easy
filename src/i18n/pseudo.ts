/**
 * The pseudo-locale `en-XA`: the English texts, each changed so a text no catalog holds stands out.
 *
 * `pseudo` wraps a text in `⟦ ⟧`, accents its vowels, and makes it 40% longer. A text on an `en-XA` page
 * without the brackets was never read from a catalog, so it is hard-coded. A layout that holds the longer
 * text holds most translations, since German, Russian and French run up to a third longer than English.
 *
 * - **A catalog, a lesson's texts and a guide's text each derive from the English when they load.**
 *   `pseudoTree` changes every string of a tree, and wraps a function so its result changes too.
 * - **The padding is accented lorem ipsum with spaces,** so a long text still wraps between words.
 * - **The pseudo-locale is no row of the locale table,** so no list of languages, tool or check meets it.
 *   The dev server and a build with `--pseudo` write its pages, and the release build never does.
 */
import { PSEUDO_LOCALE, type LocaleCode } from "./locale-table";

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

/** How much longer a pseudo text runs than its English. */
const GROWTH = 0.4;

/** The marks every pseudo text opens and closes with. */
export const PSEUDO_OPEN = "⟦";
export const PSEUDO_CLOSE = "⟧";

/** `text` in the pseudo-locale: accented, 40% longer, and wrapped in `⟦ ⟧`. An empty text stays empty. */
export function pseudo(text: string): string {
  if (text.trim() === "") return text;
  const accented = [...text].map((char) => ACCENTS[char] ?? char).join("");
  const extra = Math.ceil([...text].length * GROWTH);
  let padding = "";
  while (padding.length < extra) padding += PADDING;
  return `${PSEUDO_OPEN}${accented}${padding.slice(0, extra).trimEnd()}${PSEUDO_CLOSE}`;
}

/**
 * The text of `locale` in `texts`, a text keyed by locale: its English through `pseudoTree` in the
 * pseudo-locale, and its English where `texts` lacks the locale.
 */
export function textFor<T>(texts: { en: T } & Partial<Record<LocaleCode, T>>, locale: LocaleCode): T {
  return locale === PSEUDO_LOCALE ? pseudoTree(texts.en) : (texts[locale] ?? texts.en);
}

/** The keys of a text tree whose values are addresses, never text, such as a legal text's link. */
const ADDRESS_KEYS: ReadonlySet<string> = new Set(["route", "href"]);

/**
 * `tree` with every string changed by `pseudo`, and every function's result changed in turn. A value
 * under an address key stays as it is.
 */
export function pseudoTree<T>(tree: T): T {
  if (typeof tree === "string") return pseudo(tree) as T;
  if (typeof tree === "function") return ((...args: unknown[]) => pseudoTree((tree as (...a: unknown[]) => unknown)(...args))) as T;
  if (Array.isArray(tree)) return tree.map((item: unknown) => pseudoTree(item)) as T;
  if (typeof tree === "object" && tree !== null) {
    return Object.fromEntries(Object.entries(tree).map(([key, value]) => [key, ADDRESS_KEYS.has(key) ? value : pseudoTree(value)])) as T;
  }
  return tree;
}
