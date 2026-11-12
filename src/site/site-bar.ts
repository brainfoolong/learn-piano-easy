/**
 * The site's top bar: the bar of `src/ui/components/top-bar.ts`, filled from the locale's catalog.
 *
 * It holds the brand, the links to *Learn Piano*, "Just Play Piano" and the play modes, and the page's
 * slot. Then come the language switch, the theme switch and the link to the Data page. Every link is
 * relative to the page's `<base>`, which is the site's root, so a link means the same on every route.
 *
 * Decisions, and what each costs:
 * - **The player's bar has no links,** so its title, its tools and its controls keep the room. The
 *   brand still leads home, so another page costs the learner one more click.
 * - **The link to the Data page shows in the bar at every width,** as an icon with a tooltip. A
 *   learner's progress lives in this browser alone, so the way to its backup is never a menu away. It
 *   costs the page's slot the width of one button on a phone.
 * - **The bar is built again on every route,** since only its marked link and its slot change. The
 *   switches are made once per locale and move into each new bar, so each listens to the settings once.
 * - **Below 1024 pixels, or on a window under 481 pixels tall, the switches move into a menu,** a
 *   popover the menu button opens. Above that, the same element shows in the bar, so each switch exists
 *   once and a test finds it by its name. The player's bar needs the room of 1024 pixels for one row,
 *   and a tablet held upright then shows the menu button in place of the two switches.
 * - **A page's menu items lead the switches,** so on a narrow bar they move into the menu too, and the
 *   page's other actions keep their place in the bar. An item's click closes the menu.
 * - **A switch is a native select under a face of our own.** The select lies over the face, unseen, so
 *   a click opens the system's own list, and a keyboard and a screen reader meet a plain select. The
 *   face is hidden from them, and the select's accessible name is its `aria-label`.
 * - **In the bar a face is short:** the locale's code, or a sun or a moon for the theme on screen. In
 *   the menu it is a row of the switch's name and its choice in words. The stylesheet picks the parts.
 */
import "../ui/controls.css";
import "./site.css";
import type { Locale } from "../i18n/locale";
import { LOCALES, messagesOf } from "../i18n/locale";
import type { SettingsStore } from "../settings/store";
import { iconButton, iconLink } from "../ui/components/icon-button";
import { topBar } from "../ui/components/top-bar";
import { selectControl } from "../ui/controls";
import { el } from "../ui/dom";
import { icon } from "../ui/icons/icons";
import { type RouteId, type StaticRouteId, pageOf, routeOf } from "./routes";

/** The id of the switches' popover, which the menu button opens. */
const MENU_ID = "site-menu";

/** The href of route `id` in `locale`, relative to the site's root. */
export function hrefOf(id: StaticRouteId, locale: Locale): string {
  return `./${pageOf(routeOf(id), locale).path}`;
}

/** The switches of one locale, which every bar of that locale shows. */
export interface SiteSwitches {
  element: HTMLElement;
  /** The page's own menu items, first among the switches. */
  page: HTMLElement;
  /** Stops listening to the settings. */
  dispose(): void;
}

/** The site's theme, as the `siteTheme` setting holds it. */
type SiteTheme = "system" | "light" | "dark";

/**
 * One switch: `select` over a face that shows `short` in the bar, and `name` and `value` in the menu.
 * The face ends in a chevron, and assistive technology skips it.
 */
function switchOf(select: HTMLElement, name: string, value: HTMLElement, short: Node[]): HTMLElement {
  const face = el("span", {
    class: "site-bar__face",
    attrs: { "aria-hidden": "true" },
    children: [...short, el("span", { class: "site-bar__name", text: name }), value, icon("chevron-down")],
  });
  return el("span", { class: "site-bar__switch", children: [face, select] });
}

/** The icon `name`, shown while the theme on screen is `scheme`. */
function schemeIcon(name: "sun" | "moon", scheme: "light" | "dark"): SVGElement {
  const node = icon(name);
  node.setAttribute("data-scheme", scheme);
  return node;
}

/** The language and theme switches. A language choice calls `onLanguage` after it is stored. */
export function siteSwitches(locale: Locale, settings: SettingsStore, onLanguage: (locale: Locale) => void): SiteSwitches {
  const t = messagesOf(locale).topBar;
  const language = selectControl(
    t.language,
    locale,
    LOCALES.map((l) => [l, messagesOf(l).languageName] as const),
    (picked) => {
      settings.set("language", picked);
      onLanguage(picked);
    },
  );
  const themeNames: Record<SiteTheme, string> = { system: t.themeSystem, light: t.themeLight, dark: t.themeDark };
  const theme = selectControl<SiteTheme>(
    t.theme,
    settings.get("siteTheme"),
    [
      ["system", t.themeSystem],
      ["light", t.themeLight],
      ["dark", t.themeDark],
    ],
    (picked) => settings.set("siteTheme", picked),
  );
  const themeValue = el("span", { class: "site-bar__value", text: themeNames[settings.get("siteTheme")] });
  const stop = settings.subscribe((id, value) => {
    if (id !== "siteTheme") return;
    theme.set(value as SiteTheme);
    themeValue.textContent = themeNames[value as SiteTheme];
  });
  const page = el("div", { class: "site-bar__page" });
  const element = el("div", {
    class: "site-bar__switches",
    attrs: { id: MENU_ID, popover: "auto" },
    children: [
      page,
      switchOf(language.element, t.language, el("span", { class: "site-bar__value", text: messagesOf(locale).languageName }), [
        el("span", { class: "site-bar__code", text: locale.toUpperCase() }),
      ]),
      switchOf(theme.element, t.theme, themeValue, [schemeIcon("sun", "light"), schemeIcon("moon", "dark")]),
    ],
  });
  // A page's action closes the menu, so what it opens shows unobstructed.
  page.addEventListener("click", (event) => {
    if ((event.target as Element).closest("button") !== null && element.matches(":popover-open")) element.hidePopover();
  });
  return { element, page, dispose: stop };
}

/**
 * The top bar of route `id` in `locale`, with the page's `actions` and the locale's `switches`. The
 * page's `pageMenu` sits first among the switches, so it moves into the menu with them on a narrow bar.
 */
export function siteBar(id: RouteId, locale: Locale, switches: SiteSwitches, actions: Node[] = [], pageMenu: Node[] = []): HTMLElement {
  const t = messagesOf(locale).topBar;
  switches.page.replaceChildren(...pageMenu);
  const menu = iconButton({ label: t.menu, icon: "settings", variant: "ghost" });
  menu.classList.add("site-bar__menu");
  menu.setAttribute("popovertarget", MENU_ID);
  const data = iconLink({
    label: messagesOf(locale).pages.data.title,
    icon: "database",
    href: hrefOf("data", locale),
    variant: "ghost",
    current: id === "data",
    tip: "bottom",
  });
  data.classList.add("site-bar__data");
  const link = (target: StaticRouteId, label: string) => ({
    label,
    href: hrefOf(target, locale),
    current: target === id || (target === "learn" && (id === "profile" || id === "lesson")),
  });
  return topBar({
    brand: { label: messagesOf(locale).siteName, href: hrefOf("home", locale) },
    nav: id === "play" ? [] : [link("learn", t.learn), link("play", t.play), link("modes", t.modes)],
    navLabel: t.nav,
    actions: [...actions, switches.element, data, menu],
  });
}
