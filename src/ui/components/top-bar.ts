/**
 * The top bar: the site's floating bar, with the brand, the site's navigation and the current page's
 * actions.
 *
 * It follows the button's template. It takes typed options, holds no text of its own, and the caller
 * passes every label. It is a `header`, and its links sit in a `nav` landmark the caller names.
 *
 * - **Brand:** the piano icon on a honey tile and the site's name, a link home.
 * - **Navigation:** the site's links. The current page's link is `aria-current="page"`, drawn in the
 *   text's colour with a teal mark beneath it.
 * - **The page slot:** the current page's actions, at the bar's end. A page passes a signal of them to
 *   swap them in place, and an empty slot takes no room.
 * - **Wide:** from 768 pixels of its own width, the bar is one row. The brand and the links keep their
 *   width, and the page slot takes the rest, so a full slot gives way before the bar grows a row.
 * - **Narrow:** below 768 pixels of its own width, the navigation moves to a row of its own beneath the
 *   brand and the actions. Its links wrap there, so every link stays visible and nothing clips.
 *
 * The bar is glass: a translucent surface over a blur, opaque where the browser cannot blur. It does not
 * position itself. The page shell finds it by `TOP_BAR_SELECTOR`, pins it, and insets it by the gutter.
 *
 * A signal holds a listener for each bar that reads it, so a view makes its own signal of actions.
 */
import "./top-bar.css";
import { el } from "../dom";
import { icon } from "../icons/icons";
import type { Signal } from "../signal";

/** The selector the page shell finds the bar by, to pin it to the window. */
export const TOP_BAR_SELECTOR = "[data-top-bar]";

export interface TopBarLink {
  /** The visible label, which is also the accessible name. */
  label: string;
  /** Where it goes, as a relative URL. */
  href: string;
  /** Whether it is the page on screen. */
  current?: boolean;
}

export interface TopBarOptions {
  /** The site's name and its home, drawn with the piano icon. */
  brand: { label: string; href: string };
  /** The site's links. The bar has no navigation when absent or empty. */
  nav?: TopBarLink[];
  /** The accessible name of the navigation landmark. */
  navLabel?: string;
  /** The current page's actions, or a signal of them. */
  actions?: Node[] | Signal<Node[]>;
}

/** A top bar, as its options describe. */
export function topBar(options: TopBarOptions): HTMLElement {
  const brand = el("a", {
    class: "top-bar__brand",
    attrs: { href: options.brand.href },
    children: [icon("piano"), el("span", { class: "top-bar__brand-label", text: options.brand.label })],
  });
  const links = options.nav ?? [];
  const nav =
    links.length === 0
      ? null
      : el("nav", {
          class: "top-bar__nav",
          attrs: options.navLabel === undefined ? {} : { "aria-label": options.navLabel },
          children: [el("ul", { class: "top-bar__links", children: links.map(navLink) })],
        });
  const slot = el("div", { class: "top-bar__actions" });
  const actions = options.actions;
  if (Array.isArray(actions)) {
    slot.replaceChildren(...actions);
  } else if (actions !== undefined) {
    slot.replaceChildren(...actions.get());
    actions.subscribe((nodes) => slot.replaceChildren(...nodes));
  }
  return el("header", {
    class: "top-bar",
    attrs: { "data-top-bar": "" },
    children: [el("div", { class: "top-bar__inner", children: [brand, nav, slot] })],
  });
}

/** One item of the navigation, marked when it is the page on screen. */
function navLink(link: TopBarLink): HTMLLIElement {
  const attrs: Record<string, string> = { href: link.href };
  if (link.current) attrs["aria-current"] = "page";
  return el("li", { children: [el("a", { class: "top-bar__link", attrs, text: link.label })] });
}
