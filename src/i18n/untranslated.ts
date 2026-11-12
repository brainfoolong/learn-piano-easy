/**
 * The check that no English text shows on a page of another locale.
 *
 * - **A text is English when it equals an English message whose own translation differs.** The two
 *   catalogs are walked side by side, and each fixed string the locale changes counts. A text that any
 *   message spells alike in both locales never counts, such as the site's name, or "Start" in German.
 * - **A message built by a function is skipped,** since its text depends on its arguments. Only a fixed
 *   label or heading is caught, which is where a missed translation usually hides.
 * - **A text matches whole, after its white space is folded,** so a song's title that holds an English
 *   word never counts.
 */

/** Every fixed English string of `english` that `other` translates differently. */
export function translatedAway(english: object, other: object): Set<string> {
  const out = new Set<string>();
  const kept = new Set<string>([""]);
  const walk = (a: unknown, b: unknown) => {
    if (typeof a === "string") {
      if (typeof b === "string") (fold(a) === fold(b) ? kept : out).add(fold(a));
      return;
    }
    if (typeof a !== "object" || a === null || typeof b !== "object" || b === null) return;
    for (const [key, value] of Object.entries(a)) walk(value, (b as Record<string, unknown>)[key]);
  };
  walk(english, other);
  for (const text of kept) out.delete(text);
  return out;
}

/** `text` with its runs of white space folded to one space, and trimmed. */
export function fold(text: string): string {
  return text.replace(/\s+/g, " ").trim();
}

/** Each of `texts` that is one of `english`, once, as a flaw that names it. */
export function untranslated(texts: readonly string[], english: ReadonlySet<string>): string[] {
  const found = new Set(texts.map(fold).filter((text) => english.has(text)));
  return [...found].map((text) => `English text "${text}" shows`);
}
