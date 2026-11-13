/** The gallery's section of the tooltip: on a button and on an inline link, closed and open. */
import { button } from "../components/button";
import { tooltip, type TooltipOptions } from "../components/tooltip";
import { el } from "../dom";
import { group, section, specimen, textFor, type Locale, type ShippedLocale } from "./parts";

const MESSAGES = {
  en: {
    tooltip: "Tooltip",
    closed: "Closed, shown on hover and focus",
    openTop: "Open above",
    openBottom: "Open below",
    playSong: "Play the song",
    playTip: "Starts at the first note",
    readBefore: "Read ",
    guide: "the guide",
    readAfter: " before you start.",
    guideTip: "A short guide to practising",
  },
  de: {
    tooltip: "Hinweis",
    closed: "Geschlossen, sichtbar bei Zeiger und Fokus",
    openTop: "Offen darüber",
    openBottom: "Offen darunter",
    playSong: "Lied abspielen",
    playTip: "Beginnt mit der ersten Note",
    readBefore: "Lies zuerst ",
    guide: "die Anleitung",
    readAfter: ".",
    guideTip: "Eine kurze Anleitung zum Üben",
  },
} satisfies Record<ShippedLocale, Record<string, string>>;

/** The tooltip's section in the gallery. */
export function tooltipSection(locale: Locale): HTMLElement {
  const t = textFor(MESSAGES, locale);
  const onButton = (options?: TooltipOptions) => tooltip(button({ label: t.playSong, icon: "play" }), t.playTip, options);
  const onLink = (options?: TooltipOptions) =>
    el("p", {
      children: [t.readBefore, tooltip(el("a", { attrs: { href: "#" }, text: t.guide }), t.guideTip, options), t.readAfter],
    });
  return section("tooltip", t.tooltip, [
    group(t.closed, [specimen("button", onButton()), specimen("link", onLink())]),
    group(t.openTop, [specimen("open-top", onButton({ open: true, placement: "top" }))]),
    group(t.openBottom, [specimen("open-bottom", onLink({ open: true, placement: "bottom" }))]),
  ]);
}
