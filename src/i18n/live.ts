/**
 * The player's live locale: the catalog its texts come from, and the texts that follow a change of it.
 *
 * The player is one view for every locale, built once and kept alive, so its texts cannot be fixed
 * when it is built. The site sets the live locale to each page's own as it shows. `t()` reads the live
 * catalog, so a text built later is in the right language at once.
 *
 * - **A fixed label is localized once.** `localize` writes the text now and again on every change. It
 *   holds its element weakly, so a dialog that is thrown away is freed with its labels.
 * - **A text that follows the player's state listens with `onLocale`,** and rewrites itself the same
 *   way it does on a change of that state, such as the play button's *Play* and *Pause*.
 * - **A page built per locale takes its texts from `messagesOf(locale)`,** such as the landing page.
 */
import { DEFAULT_LOCALE, messagesOf, type Locale } from "./locale";
import type { Messages } from "./messages/en";

/** Picks one text out of a catalog. */
export type Pick = (messages: Messages) => string;

interface Binding {
  element: WeakRef<Element>;
  pick: Pick;
  /** The attribute the text goes into, or `undefined` for the element's text. */
  attribute: string | undefined;
}

let current: Locale = DEFAULT_LOCALE;
const bindings = new Set<Binding>();
const listeners = new Set<(locale: Locale) => void>();

/** The live locale. */
export function liveLocale(): Locale {
  return current;
}

/** The live locale's catalog. */
export function t(): Messages {
  return messagesOf(current);
}

/** Makes `locale` the live locale, and rewrites every localized text when it changed. */
export function setLiveLocale(locale: Locale): void {
  if (locale === current) return;
  current = locale;
  for (const binding of bindings) {
    const element = binding.element.deref();
    if (element === undefined) bindings.delete(binding);
    else write(element, binding);
  }
  for (const listener of listeners) listener(locale);
}

/** Calls `listener` on every change of the live locale, until the returned function is called. */
export function onLocale(listener: (locale: Locale) => void): () => void {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

/**
 * Writes the text `pick` chooses into `element`, now and on every change of the live locale.
 * With `attribute`, such as `aria-label` or `title`, the text goes into that attribute instead.
 */
export function localize<E extends Element>(element: E, pick: Pick, attribute?: string): E {
  const binding: Binding = { element: new WeakRef(element), pick, attribute };
  bindings.add(binding);
  write(element, binding);
  return element;
}

function write(element: Element, binding: Binding): void {
  const text = binding.pick(t());
  if (binding.attribute === undefined) element.textContent = text;
  else element.setAttribute(binding.attribute, text);
}
