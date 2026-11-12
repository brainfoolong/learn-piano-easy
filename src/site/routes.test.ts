import { expect, test } from "../testing";
import { LOCALES, messagesOf } from "../i18n/locale";
import { allPages, baseOf, pageOf, pageTitle, ROUTES } from "./routes";

test("every_route_has_a_page_in_every_locale", () => {
  const pages = allPages();
  expect(pages.length).toBe(ROUTES.length * LOCALES.length);
  expect(new Set(pages.map((p) => p.file)).size).toBe(pages.length);
  for (const route of ROUTES) {
    for (const locale of LOCALES) {
      const page = pageOf(route, locale);
      expect(page.file).toBe(`${locale === "en" ? "" : `${locale}/`}${route.path}index.html`);
      expect(messagesOf(locale).pages[route.id].title.length).toBeGreaterThan(0);
      expect(messagesOf(locale).pages[route.id].description.length).toBeGreaterThan(0);
    }
    // A translated page names itself in its own language, except the site's name.
    if (route.id !== "home") expect(messagesOf("de").pages[route.id].title).not.toBe(messagesOf("en").pages[route.id].title);
  }
  expect(pageTitle(pageOf(ROUTES[0]!, "en"))).toBe("Learn Piano Easy");
  expect(pageTitle(pageOf(ROUTES.find((r) => r.id === "play")!, "de"))).toBe("Einfach Klavier spielen · Learn Piano Easy");
});

test("a_page_links_its_assets_relative_to_its_depth", () => {
  expect(baseOf("")).toBe("./");
  expect(baseOf("play/")).toBe("../");
  expect(baseOf("de/learn/profile/")).toBe("../../../");
  for (const page of allPages()) {
    // Climbing `base` from the page's folder lands on the site's root.
    const resolved = new URL(page.base, `https://host/base/${page.path}`).href;
    expect({ file: page.file, root: resolved }).toEqual({ file: page.file, root: "https://host/base/" });
  }
});
