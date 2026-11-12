/**
 * The landing page's band of why the site is free: no account, open source under the MIT License,
 * offline, and no ads or profiles. Each promise sits on a surface, with its icon on a tile in the
 * band's hue.
 *
 * The promises stand two by two from 768 pixels, four in a row from 1280, and one above another below.
 */
import { messagesOf, type Locale } from "../i18n/locale";
import { section } from "../ui/components/section";
import { el } from "../ui/dom";
import { icon, type IconName } from "../ui/icons/icons";

/** Each promise's icon, in the order of the catalog's promises. */
const PROMISE_ICONS: readonly IconName[] = ["gift", "code", "wifi-off", "shield-check"];

/** The band of why the site is free in `locale`. */
export function free(locale: Locale): HTMLElement {
  const t = messagesOf(locale).landing.free;
  const promises = t.promises.map((promise, index) =>
    el("li", {
      class: "landing-free__promise",
      children: [
        el("span", { class: "landing-tile", attrs: { "aria-hidden": "true" }, children: [icon(PROMISE_ICONS[index] ?? "star")] }),
        el("h3", { class: "landing-free__title", text: promise.title }),
        el("p", { class: "landing-free__text", text: promise.text }),
      ],
    }),
  );
  return section({
    eyebrow: t.eyebrow,
    heading: t.heading,
    lead: t.lead,
    body: [el("ul", { class: "landing-free", children: promises })],
  });
}
