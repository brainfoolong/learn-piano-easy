/**
 * A locale's translation of an English text tree, and the fallback that fills its gaps with English.
 *
 * - **A translation is a deep partial of the English type.** It may leave out any text, and the site
 *   shows the English in its place. It never holds a key the English lacks.
 * - **A function and an array are leaves,** translated whole or not at all. Half a list cannot match
 *   the English one, and a function's arguments are one message.
 * - **The fallback merges once, when a catalog loads,** so reading a text never checks it again.
 */

/** A translation of `T`: every text of `T` optional, with functions and arrays whole. */
export type Translation<T> = T extends (...args: never[]) => unknown
  ? T
  : T extends readonly unknown[]
    ? T
    : T extends object
      ? { [K in keyof T]?: Translation<T[K]> }
      : T;

/** Whether `value` is a branch of a text tree: an object that is neither an array nor a function. */
function isBranch(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

/** `english` with each leaf that `translation` holds taken from it, and every other leaf English. */
export function withEnglish<T>(english: T, translation: Translation<T>): T {
  if (!isBranch(english) || !isBranch(translation)) return (translation ?? english) as T;
  const out: Record<string, unknown> = {};
  for (const [key, value] of Object.entries(english)) {
    const own = translation[key];
    out[key] = own === undefined ? value : withEnglish(value, own as Translation<unknown>);
  }
  return out as T;
}
