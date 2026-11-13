/** The gallery's section of the icon button: every variant, size and state, its link, and its tooltip open. */
import { iconButton, iconLink, type IconButtonOptions } from "../components/icon-button";
import { keepTipOpen } from "../components/tooltip";
import { group, section, specimen, textFor, type Locale, type ShippedLocale } from "./parts";

const MESSAGES = {
  en: {
    iconButton: "Icon button",
    variants: "Variants",
    sizes: "Sizes",
    states: "States",
    links: "As a link",
    yourData: "Your data",
    withTooltip: "With its tooltip open",
    playSong: "Play the song",
    settings: "Settings",
    searchSongs: "Search songs",
    close: "Close",
    favourite: "Favourite",
    saving: "Saving your progress",
    locked: "Unlocks at level 3",
  },
  de: {
    iconButton: "Symbolschaltfläche",
    variants: "Varianten",
    sizes: "Größen",
    states: "Zustände",
    links: "Als Link",
    yourData: "Deine Daten",
    withTooltip: "Mit offenem Hinweis",
    playSong: "Lied abspielen",
    settings: "Einstellungen",
    searchSongs: "Lieder suchen",
    close: "Schließen",
    favourite: "Favorit",
    saving: "Dein Fortschritt wird gespeichert",
    locked: "Ab Stufe 3 freigeschaltet",
  },
} satisfies Record<ShippedLocale, Record<string, string>>;

const iconButtons = (entries: [string, IconButtonOptions][]) => entries.map(([state, options]) => specimen(state, iconButton(options)));

/** The icon button's section in the gallery. */
export function iconButtonSection(locale: Locale): HTMLElement {
  const t = textFor(MESSAGES, locale);
  const open = iconButton({ label: t.settings, icon: "settings", variant: "secondary" });
  keepTipOpen(open);
  return section("icon-button", t.iconButton, [
    group(
      t.variants,
      iconButtons([
        ["primary", { label: t.playSong, icon: "play", variant: "primary" }],
        ["secondary", { label: t.settings, icon: "settings", variant: "secondary" }],
        ["ghost", { label: t.searchSongs, icon: "search", variant: "ghost" }],
        ["danger", { label: t.close, icon: "x", variant: "danger" }],
      ]),
    ),
    group(
      t.sizes,
      iconButtons([
        ["small", { label: t.playSong, icon: "play", variant: "primary", size: "small" }],
        ["medium", { label: t.playSong, icon: "play", variant: "primary", size: "medium" }],
        ["large", { label: t.playSong, icon: "play", variant: "primary", size: "large" }],
      ]),
    ),
    group(
      t.states,
      iconButtons([
        ["pressed", { label: t.favourite, icon: "star", variant: "secondary", pressed: true }],
        ["pressed-ghost", { label: t.favourite, icon: "star", variant: "ghost", pressed: true }],
        ["not-pressed", { label: t.favourite, icon: "star", variant: "secondary", pressed: false }],
        ["busy", { label: t.saving, icon: "check", variant: "primary", busy: true }],
        ["disabled", { label: t.locked, icon: "lock", variant: "secondary", disabled: true }],
      ]),
    ),
    group(t.links, [
      specimen("link", iconLink({ label: t.yourData, icon: "database", href: "#" })),
      specimen("link-current", iconLink({ label: t.yourData, icon: "database", href: "#", current: true })),
    ]),
    group(t.withTooltip, [specimen("tooltip-open", open)]),
  ]);
}
