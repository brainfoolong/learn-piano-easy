/**
 * The site's routes: the one table the build writes a page from, for every route in every locale.
 *
 * A route's path is its folder relative to the locale's root. English sits at the site's root and every
 * other locale under its own folder, so `play/` in German is `de/play/`. Each page is that folder's
 * `index.html`. Its `<base>` element is `base`, the relative path back to the site's root, so every
 * URL of the page resolves from the root, and the site runs from any base path.
 *
 * Every page boots the same bundle, and the router of `src/site/router.ts` shows the route's view.
 * Search engines skip the gallery at `design/`.
 *
 * A lesson's page is `learn/<world>/<lesson>/`. `pageAt` knows one by its world, a world of the course,
 * without loading the world's lessons. The view then loads them and says so when the lesson is not
 * there. The build writes the page of every lesson from `lessonPages`, which loads every world.
 *
 * Each page's title and description are in its locale's catalog of `src/i18n/messages/`, under the
 * route's id. A lesson's page the build writes takes the lesson's own title instead. Every page of a
 * locale shares that locale's social picture.
 */
import { LOCALES, localeOfPath, localeRoot, messagesOf, type Locale } from "../i18n/locale";
import { COURSE } from "../learn/course";

/** A route's id, which the router, the build and the catalogs name it by. */
export type RouteId = "home" | "play" | "modes" | "learn" | "profile" | "about" | "data" | "sponsor" | "imprint" | "privacy" | "design" | "lesson";

/** The id of a route with one page per locale: every route but a lesson's. */
export type StaticRouteId = Exclude<RouteId, "lesson">;

/** A route of the site. */
export interface Route {
  id: RouteId;
  /** The route's folder relative to the locale's root: `""` or a path ending in `/`. */
  path: string;
  /** Whether search engines skip the page. The site links nowhere to a hidden route. */
  hidden: boolean;
  /**
   * A lesson's route names its world and its lesson. It carries the lesson's title in each locale only
   * where the world is loaded, as in the build.
   */
  lesson?: { world: string; lesson: string; title?: Record<Locale, string> };
}

/** The route of lesson `lesson` of world `world`, with the lesson's `title` in each locale when it is known. */
export function lessonRoute(world: string, lesson: string, title?: Record<Locale, string>): Route {
  return { id: "lesson", path: `learn/${world}/${lesson}/`, hidden: false, lesson: { world, lesson, ...(title === undefined ? {} : { title }) } };
}

/** A lesson's folder relative to the locale's root, with its world and its lesson. */
const LESSON_PATH = /^learn\/([a-z0-9]+(?:-[a-z0-9]+)*)\/([a-z0-9]+(?:-[a-z0-9]+)*)\/$/;

/** The lesson route at `routePath`, a folder relative to the locale's root, when its world is in the course. */
function lessonRouteAt(routePath: string): Route | undefined {
  const match = LESSON_PATH.exec(routePath);
  if (match === null || !COURSE.some((world) => world.id === match[1])) return undefined;
  return lessonRoute(match[1]!, match[2]!);
}

/** Every lesson's page in every locale, the bosses and skip tests included. It loads every world. */
export async function lessonPages(): Promise<Page[]> {
  const pages: Page[] = [];
  for (const world of COURSE) {
    const { lessons, boss, skipTest } = await world.load();
    for (const lesson of [...lessons, boss, skipTest]) {
      if (lesson === undefined) continue;
      const title = Object.fromEntries(LOCALES.map((locale) => [locale, lesson.texts[locale].title])) as Record<Locale, string>;
      for (const locale of LOCALES) pages.push(pageOf(lessonRoute(world.id, lesson.id, title), locale));
    }
  }
  return pages;
}

/** Every route of the site with one page per locale, the landing page first. */
export const ROUTES: readonly Route[] = [
  { id: "home", path: "", hidden: false },
  { id: "play", path: "play/", hidden: false },
  { id: "modes", path: "modes/", hidden: false },
  { id: "learn", path: "learn/", hidden: false },
  { id: "profile", path: "learn/profile/", hidden: false },
  { id: "about", path: "about/", hidden: false },
  { id: "data", path: "data/", hidden: false },
  { id: "sponsor", path: "sponsor/", hidden: false },
  { id: "imprint", path: "imprint/", hidden: false },
  { id: "privacy", path: "privacy/", hidden: false },
  { id: "design", path: "design/", hidden: true },
];

/** The route with id `id`. */
export function routeOf(id: StaticRouteId): Route {
  return ROUTES.find((route) => route.id === id)!;
}

/**
 * The page at `path`, a path relative to the site's root such as `de/play/`, or undefined when no route
 * is there. A trailing `index.html` names its folder.
 */
export function pageAt(path: string): Page | undefined {
  const folder = path.endsWith("index.html") ? path.slice(0, -"index.html".length) : path;
  const locale = localeOfPath(folder);
  const routePath = folder.slice(localeRoot(locale).length);
  const route = ROUTES.find((r) => r.path === routePath) ?? lessonRouteAt(routePath);
  return route === undefined ? undefined : pageOf(route, locale);
}

/** One route in one locale: the page the build writes. */
export interface Page {
  route: Route;
  locale: Locale;
  /** The page's folder relative to the site's root: `""` or a path ending in `/`. */
  path: string;
  /** The page's file relative to the site's root. */
  file: string;
  /** The relative path from the page back to the site's root: `./` or `../` once per folder. */
  base: string;
}

/** The relative path from a page in folder `path` back to the site's root. */
export function baseOf(path: string): string {
  const depth = path.split("/").filter(Boolean).length;
  return depth === 0 ? "./" : "../".repeat(depth);
}

/** `route` in `locale`. */
export function pageOf(route: Route, locale: Locale): Page {
  const path = localeRoot(locale) + route.path;
  return { route, locale, path, file: `${path}index.html`, base: baseOf(path) };
}

/** Every page of a route of `ROUTES`: each in each locale. `lessonPages` adds the lessons'. */
export function allPages(): Page[] {
  return ROUTES.flatMap((route) => LOCALES.map((locale) => pageOf(route, locale)));
}

/** The size in pixels of a social picture, the one social sites ask for. */
export const SOCIAL_IMAGE_SIZE = { width: 1200, height: 630 } as const;

/**
 * The social picture of `locale`, relative to the site's root: what a search or social site shows
 * beside a link to any page of the locale. `tools/make-social-image.ts` draws it.
 */
export function socialImageOf(locale: Locale): string {
  return `images/social/${locale}.png`;
}

/**
 * The text of the page's `<title>`: its own name, then the site's. A lesson's own name is its title when
 * the route knows it, which matches the title the lesson's view sets.
 */
export function pageTitle(page: Page): string {
  const { siteName, pages } = messagesOf(page.locale);
  const title = page.route.lesson?.title?.[page.locale] ?? pages[page.route.id].title;
  return title === siteName ? title : `${title} · ${siteName}`;
}

/** The project's repository on GitHub, which holds its code and its license. */
export const REPO_URL = "https://github.com/brainfoolong/learn-piano-easy";
