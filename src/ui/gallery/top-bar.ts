/**
 * The gallery's section of the top bar: with navigation and a page's actions, with an empty page slot,
 * and with another page's actions. Each bar shows in flow, as wide as its panel.
 */
import { el } from "../dom";
import { button } from "../components/button";
import { iconButton } from "../components/icon-button";
import { topBar, type TopBarLink } from "../components/top-bar";
import { signal } from "../signal";
import { group, section, specimen, textFor, type Locale, type CompleteLocale } from "./parts";

const MESSAGES = {
  en: {
    topBar: "Top bar",
    withActions: "Navigation and page actions",
    emptySlot: "Without page actions",
    otherPage: "Another page's actions",
    brand: "Learn Piano Easy",
    navLabel: "Main",
    songs: "Songs",
    lessons: "Lessons",
    progress: "Progress",
    searchSongs: "Search songs",
    settings: "Settings",
    playSong: "Play",
    favourite: "Mark as favourite",
    practise: "Practise",
  },
  de: {
    topBar: "Kopfleiste",
    withActions: "Navigation und Seitenaktionen",
    emptySlot: "Ohne Seitenaktionen",
    otherPage: "Aktionen einer anderen Seite",
    brand: "Learn Piano Easy",
    navLabel: "Hauptnavigation",
    songs: "Lieder",
    lessons: "Lektionen",
    progress: "Fortschritt",
    searchSongs: "Lieder suchen",
    settings: "Einstellungen",
    playSong: "Abspielen",
    favourite: "Als Favorit markieren",
    practise: "Üben",
  },
} satisfies Record<CompleteLocale, Record<string, string>>;

/** A frame as wide as its panel, since a specimen is only as wide as its content. */
const frame = (child: Node) =>
  el("div", { attrs: { style: "width: var(--s-container); max-width: 100%" }, children: [child] });

/** The top bar's section in the gallery. */
export function topBarSection(locale: Locale): HTMLElement {
  const t = textFor(MESSAGES, locale);
  const brand = { label: t.brand, href: "#" };
  const nav = (current: number): TopBarLink[] =>
    [t.songs, t.lessons, t.progress].map((label, index) => ({ label, href: "#", current: index === current }));
  return section("top-bar", t.topBar, [
    group(t.withActions, [
      specimen(
        "with-actions",
        frame(
          topBar({
            brand,
            nav: nav(0),
            navLabel: t.navLabel,
            actions: [
              iconButton({ label: t.searchSongs, icon: "search", variant: "ghost" }),
              iconButton({ label: t.settings, icon: "settings", variant: "ghost" }),
              button({ label: t.playSong, variant: "primary", size: "small", icon: "play" }),
            ],
          }),
        ),
      ),
    ]),
    group(t.emptySlot, [specimen("empty-slot", frame(topBar({ brand, nav: nav(1), navLabel: t.navLabel })))]),
    group(t.otherPage, [
      specimen(
        "other-page",
        frame(
          topBar({
            brand,
            nav: nav(2),
            navLabel: t.navLabel,
            actions: signal<Node[]>([
              iconButton({ label: t.favourite, icon: "star", variant: "ghost", pressed: true }),
              button({ label: t.practise, variant: "primary", size: "small", icon: "piano" }),
            ]),
          }),
        ),
      ),
    ]),
  ]);
}
