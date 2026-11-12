/**
 * The gallery's building blocks: a component's section, a group of specimens, and one specimen.
 *
 * Each component's section is its own module in `src/ui/gallery/`, with its own messages in both
 * locales, and `src/ui/gallery.ts` lays the sections out in order. A section is marked
 * `data-component`, and each specimen in it `data-state`, so a test finds every state.
 */
import { el } from "../dom";

/** The gallery's locales are the site's. German is the longest language the layout must fit. */
export type { Locale } from "../../i18n/locale";

/** A specimen of one state, marked for the tests. */
export function specimen(state: string, child: Node): HTMLElement {
  return el("div", { class: "gallery__specimen", attrs: { "data-state": state }, children: [child] });
}

/** A group of specimens under its heading. */
export function group(heading: string, specimens: HTMLElement[]): HTMLElement {
  return el("div", {
    class: "gallery__group",
    children: [el("h3", { class: "gallery__group-title", text: heading }), el("div", { class: "gallery__row", children: specimens })],
  });
}

/** A component's section, with its groups of specimens. `name` is the component's file name. */
export function section(name: string, heading: string, groups: HTMLElement[]): HTMLElement {
  const id = `component-${name}`;
  return el("section", {
    class: "gallery__component",
    attrs: { "data-component": name, "aria-labelledby": id },
    children: [el("h2", { class: "gallery__component-title", attrs: { id }, text: heading }), ...groups],
  });
}
