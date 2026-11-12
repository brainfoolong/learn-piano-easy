/**
 * The landing page's last call: one centred band that repeats the hero's two actions, for a visitor
 * who has read to the end. *Start learning* is the primary action and *Just play* the secondary one.
 *
 * The band runs the full width under the palette's glow, as the hero does, so the page ends as it
 * began. The mascot's portrait stands over the heading. It only decorates here, since the hero has
 * introduced it, so its `alt` is empty. The band is a region named by its heading.
 */
import { messagesOf, type Locale } from "../i18n/locale";
import { hrefOf } from "../site/site-bar";
import { buttonLink } from "../ui/components/button";
import { mascot } from "../ui/components/mascot";
import { el } from "../ui/dom";

/** The last call in `locale`. */
export function lastCall(locale: Locale): HTMLElement {
  const t = messagesOf(locale).landing;
  return el("section", {
    class: "landing-last",
    attrs: { "aria-label": t.lastCall.heading },
    children: [
      el("div", {
        class: "landing-last__inner",
        children: [
          mascot({ pose: "portrait", alt: "", size: "large" }),
          el("h2", { class: "landing-last__heading", text: t.lastCall.heading }),
          el("p", { class: "landing-last__lead", text: t.lastCall.lead }),
          el("div", {
            class: "landing-last__actions",
            children: [
              buttonLink({ label: t.hero.start, href: hrefOf("learn", locale), variant: "primary", size: "large", icon: "arrow-right", iconAt: "end" }),
              buttonLink({ label: t.hero.play, href: hrefOf("play", locale), variant: "secondary", size: "large" }),
            ],
          }),
        ],
      }),
    ],
  });
}
