/**
 * The site's footer: the site's name and promise, the links to its pages, the links to the legal
 * notice and the privacy policy, and the page on screen in every other locale. A line beneath them
 * names the license.
 *
 * A locale's link is the same page in that locale, named in its own language, so a learner who cannot
 * read the page still finds their own. A click on one stores that locale as the language choice, as
 * the top bar's switch does. The router takes the click after that and shows the page.
 *
 * The footer is built again on every route, since its locale links name the page on screen. The player
 * fills the window, so its view shows no footer.
 */
import { LOCALES, messagesOf, pathInLocale, type Locale } from "../i18n/locale";
import { el } from "../ui/dom";
import { icon } from "../ui/icons/icons";
import type { Page, StaticRouteId } from "./routes";
import { hrefOf } from "./site-bar";

/** One group of the footer's links, under the small heading `heading`. */
function group(heading: string, links: HTMLElement[]): HTMLElement {
  return el("div", {
    class: "site-footer__group",
    children: [
      el("p", { class: "site-footer__heading", text: heading }),
      el("ul", { class: "site-footer__links", children: links.map((link) => el("li", { children: [link] })) }),
    ],
  });
}

/** The footer of `page`. A click on a locale's link calls `onLanguage` with it. */
export function siteFooter(page: Page, onLanguage: (locale: Locale) => void): HTMLElement {
  const messages = messagesOf(page.locale);
  const t = messages.footer;
  const to = (id: StaticRouteId, text: string) => el("a", { class: "site-footer__link", attrs: { href: hrefOf(id, page.locale) }, text });
  const others = LOCALES.filter((locale) => locale !== page.locale).map((locale) =>
    el("a", {
      class: "site-footer__link",
      attrs: { href: `./${pathInLocale(page.path, locale)}`, hreflang: locale, lang: locale },
      text: messagesOf(locale).languageName,
      on: { click: () => onLanguage(locale) },
    }),
  );
  return el("footer", {
    class: "site-footer",
    children: [
      el("div", {
        class: "site-footer__inner",
        children: [
          el("div", {
            class: "site-footer__brand",
            children: [
              el("a", {
                class: "site-footer__name",
                attrs: { href: hrefOf("home", page.locale) },
                children: [el("span", { class: "site-footer__mark", attrs: { "aria-hidden": "true" }, children: [icon("piano")] }), messages.siteName],
              }),
              el("p", { class: "site-footer__tagline", text: t.tagline }),
            ],
          }),
          el("nav", {
            class: "site-footer__nav",
            attrs: { "aria-label": t.nav },
            children: [
              group(t.explore, [to("learn", messages.topBar.learn), to("play", messages.topBar.play), to("modes", messages.topBar.modes), to("about", t.about), to("data", messages.pages.data.title), to("sponsor", messages.pages.sponsor.title)]),
              group(t.legal, [to("imprint", messages.pages.imprint.title), to("privacy", messages.pages.privacy.title)]),
              group(t.language, others),
            ],
          }),
        ],
      }),
      el("p", { class: "site-footer__license", text: t.license }),
    ],
  });
}
