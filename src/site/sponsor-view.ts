/**
 * The body of the sponsor page at `sponsor/`, which the top bar's heart leads to.
 *
 * The texts are `src/i18n/messages/sponsor.en.ts` and its German twin. This module and its stylesheet
 * are a chunk of their own, so only the sponsor page loads them.
 *
 * The page holds, in order: a hero with a drawn heart and the one main action, the short list of what
 * every learner gets anyway, a card of who makes the site, a card of what a sponsorship pays for, the
 * ways to help without money, and a thank-you.
 *
 * Decisions, and what each costs:
 * - **Every link to GitHub is a plain link that opens in a new tab,** with `rel="noopener"`. The page
 *   sends no request of its own, so it works offline. Only a click leaves the site.
 * - **The heart is the Lucide icon of the top bar, drawn large and filled,** with two music notes around
 *   it. It needs no picture file, and it follows the theme through the colour tokens. It costs a
 *   drawing that stays simple.
 */
import { messagesOf, type Locale } from "../i18n/locale";
import { buttonLink } from "../ui/components/button";
import { card } from "../ui/components/card";
import { link } from "../ui/components/link";
import { el } from "../ui/dom";
import { icon } from "../ui/icons/icons";
import { REPO_URL } from "./routes";
import "./sponsor-view.css";

/** The maintainer's profile on GitHub Sponsors, the page's main action. */
export const SPONSOR_URL = "https://github.com/sponsors/brainfoolong";

/** A link that opens `href` on another site in a new tab. */
function external(label: string, href: string): HTMLAnchorElement {
  return link({ label, href, variant: "standalone", external: true });
}

/** The drawing beside the hero: a big heart with two music notes floating around it. */
function art(label: string): HTMLElement {
  const note = (side: "start" | "end") => {
    const node = icon("music");
    node.classList.add("sponsor__note-icon");
    node.setAttribute("data-side", side);
    return node;
  };
  const heart = icon("heart");
  heart.classList.add("sponsor__heart");
  return el("div", {
    class: "sponsor__art",
    attrs: { role: "img", "aria-label": label },
    children: [heart, note("start"), note("end")],
  });
}

/** The body of the sponsor page in `locale`. */
export function sponsorBody(locale: Locale): HTMLElement {
  const t = messagesOf(locale).sponsor;
  const action = buttonLink({ label: t.action, href: SPONSOR_URL, variant: "primary", size: "large", icon: "heart" });
  action.target = "_blank";
  action.rel = "noopener";
  action.classList.add("sponsor__action");
  return el("div", {
    class: "sponsor",
    children: [
      el("section", {
        class: "sponsor__hero",
        children: [
          art(t.picture),
          el("div", {
            class: "sponsor__pitch",
            children: [el("p", { class: "sponsor__lead", text: t.lead }), action, el("p", { class: "sponsor__note", text: t.note })],
          }),
        ],
      }),
      el("ul", {
        class: "sponsor__promises",
        children: t.promises.map((promise) => el("li", { class: "sponsor__promise", children: [icon("check"), promise] })),
      }),
      el("div", {
        class: "sponsor__cards",
        children: [
          card({ title: t.who.heading, titleLevel: 2, body: t.who.text.map((text) => el("p", { class: "card__text", text })) }),
          card({
            title: t.spend.heading,
            titleLevel: 2,
            body: [
              el("dl", {
                class: "sponsor__spend",
                children: t.spend.items.flatMap((item) => [el("dt", { text: item.title }), el("dd", { class: "card__text", text: item.text })]),
              }),
            ],
          }),
        ],
      }),
      card({
        title: t.help.heading,
        titleLevel: 2,
        text: t.help.lead,
        body: [
          el("ul", {
            class: "sponsor__help",
            children: [
              el("li", { children: [el("p", { text: t.help.star.text }), external(t.help.star.action, REPO_URL)] }),
              el("li", { children: [el("p", { text: t.help.bug.text }), external(t.help.bug.action, `${REPO_URL}/issues`)] }),
              el("li", { children: [el("p", { text: t.help.friend })] }),
            ],
          }),
        ],
      }),
      el("p", { class: "sponsor__thanks", text: t.thanks }),
    ],
  });
}
