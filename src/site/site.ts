/**
 * The site: boots every page, and shows the view of the route on screen under the floating top bar.
 *
 * Every page of the build boots this same bundle. The site reads its root from the page's `<base>`,
 * shows the route's view, and hands the links and the history to the router.
 *
 * - **The first visit may move once.** `chooseLocale` of `src/i18n/locale.ts` picks the locale from
 *   the stored choice and the browser. When it differs from the page's, the address is replaced by the
 *   same page in that locale before anything shows.
 * - **A page shows once its locale's catalog has loaded.** The boot awaits it before the first view, and
 *   the router awaits it before each move, so the language switch shows the new locale whole.
 * - **Each page sets the live locale** of `src/i18n/live.ts`, which the player, the service worker's
 *   toasts and the About page read.
 * - **The language switch stores `language`** and shows the page on screen in that locale. The bar,
 *   the footer and every view of the new locale are then built in it.
 * - **`siteTheme` sets `data-site-theme` on the root,** or removes it to follow the system.
 * - **A view is made on its route's first visit and kept.** Leaving it hides it, so coming back keeps
 *   its scroll and its state. A view's own actions move into each new bar's page slot.
 * - **A view hears `hidden` as the address moves,** before the view transition swaps it out. A setup
 *   whose code lands in that gap then never opens over the next page.
 * - **A view may refuse to be left.** A link, Back, Forward and the language switch ask its `mayLeave`
 *   first. A view's own move, through its context's `go`, is its own choice and never asks.
 * - **The top bar hides in fullscreen,** and its height sets `--site-bar-space` on the root, so a view
 *   starts below it. A view may add a dock of its own under the bar's row, as the player does. The
 *   player may float the bar at the bottom of the window, where it takes no room at the top.
 * - **The service worker's messages show as the site's toasts,** on every page.
 * - **Song files open the player from any page.** Files dropped on the page, or launched through the
 *   installed app's file handler, go into the song inbox of `src/site/song-inbox.ts`, and `play/` shows.
 * - **Each page shown is counted once** by the visitor statistics of `src/site/stats.ts`, after its
 *   title is set. A move inside the site counts as the page it shows.
 * - **The folder sync starts on every page where a folder is connected,** through a dynamic import of
 *   `src/data/folder-sync.ts`. A page without a folder loads none of its code.
 */
import { folderSyncOn } from "../data/changes";
import { setLiveLocale } from "../i18n/live";
import { chooseLocale, loadLocale, localeOfPath, messagesOf, pathInLocale, rowOf, type Locale } from "../i18n/locale";
import { registerServiceWorker } from "../pwa/register";
import type { SettingsStore } from "../settings/store";
import { toasts } from "../ui/components/toast";
import { el } from "../ui/dom";
import { siteFooter } from "./footer";
import { pathOf, siteRoot, startRouter } from "./router";
import { pageAt, pageOf, pageTitle, routeOf, type Page } from "./routes";
import { siteBar, siteSwitches, type SiteSwitches } from "./site-bar";
import { attachDrop, attachLaunchQueue, songInbox } from "./song-inbox";
import { countVisit } from "./stats";
import { makeView, type View } from "./views";

/** The page at `path`, or the landing page of its locale when no route is there. */
function pageFor(path: string): Page {
  return pageAt(path) ?? pageOf(routeOf("home"), localeOfPath(path));
}

/** Keeps the root's `data-site-theme` on the `siteTheme` setting. */
function followSiteTheme(settings: SettingsStore): void {
  const apply = () => {
    const theme = settings.get("siteTheme");
    if (theme === "system") delete document.documentElement.dataset.siteTheme;
    else document.documentElement.dataset.siteTheme = theme;
  };
  apply();
  settings.subscribe((id) => {
    if (id === "siteTheme") apply();
  });
}

/** Starts the site in `root`, the page's `#app`. */
export async function startSite(root: HTMLElement, settings: SettingsStore): Promise<void> {
  followSiteTheme(settings);
  const site = siteRoot();

  // The first visit's move replaces the address before the router reads it.
  const landed = pageFor(pathOf(new URL(location.href), site) ?? "");
  const locale = chooseLocale(landed.locale, settings.get("language"), navigator.languages);
  if (locale !== landed.locale) history.replaceState(history.state, "", site + pathInLocale(landed.path, locale));
  await loadLocale(locale);

  const barHost = el("div", { class: "site-bar-host" });
  const main = el("main", { class: "site-main", attrs: { id: "main" } });
  const footerHost = el("div", { class: "site-footer-host" });
  const stack = toasts();
  root.replaceChildren(barHost, main, footerHost, stack.element);

  // A bar at the bottom of the window takes no room at the top.
  const measureBar = () => {
    const box = barHost.getBoundingClientRect();
    const space = barHost.hidden || box.top > innerHeight / 2 ? 0 : box.bottom;
    document.documentElement.style.setProperty("--site-bar-space", `${Math.ceil(space)}px`);
  };
  new ResizeObserver(measureBar).observe(barHost);
  document.addEventListener("fullscreenchange", () => {
    barHost.hidden = document.fullscreenElement !== null;
  });

  const views = new Map<string, View>();
  const viewKey = (page: Page) => (page.route.id === "play" ? "play" : page.path);
  let shown: View | undefined;
  // The view the router is leaving, which has heard `hidden` while it stays on screen until the swap.
  let left: View | undefined;
  let switches: { locale: Locale; switches: SiteSwitches } | undefined;
  const storeLanguage = (picked: Locale) => settings.set("language", picked);
  const mayLeave = () => shown?.mayLeave?.() ?? Promise.resolve(true);

  const render = (path: string) => {
    const page = pageFor(path);
    const { locale } = page;
    setLiveLocale(locale);
    if (switches?.locale !== locale) {
      switches?.switches.dispose();
      const toLocale = (picked: Locale) =>
        void mayLeave().then((ok) => {
          if (ok) router.go(pathInLocale(router.current(), picked));
        });
      switches = { locale, switches: siteSwitches(locale, settings, toLocale) };
    }
    const key = viewKey(page);
    let view = views.get(key);
    if (view === undefined) {
      view = makeView(page.route, locale, { settings, go: (to) => router.go(to) });
      views.set(key, view);
      main.append(view.element);
    }
    if (view !== shown) {
      if (shown !== undefined) {
        shown.element.hidden = true;
        if (shown !== left) shown.hidden?.();
      }
      view.element.hidden = false;
      shown = view;
    }
    left = undefined;
    const actions = view.actions ? [view.actions] : [];
    const bar = siteBar(page.route.id, locale, switches.switches, actions, view.menu ? [view.menu] : []);
    barHost.replaceChildren(bar, ...(view.dock ? [view.dock] : []));
    measureBar();
    view.shown?.(locale);

    footerHost.replaceChildren(page.route.id === "play" ? "" : siteFooter(page, storeLanguage));
    root.dataset.route = page.route.id;
    document.documentElement.lang = rowOf(locale).lang;
    document.title = pageTitle(page);
    document.querySelector('meta[name="description"]')?.setAttribute("content", messagesOf(locale).pages[page.route.id].description);
    countVisit();
  };

  const leave = (path: string) => {
    if (shown === undefined || shown === left || views.get(viewKey(pageFor(path))) === shown) return;
    left = shown;
    shown.hidden?.();
  };

  const prepare = (path: string) => loadLocale(pageFor(path).locale);
  const router = startRouter({ root: site, leave, prepare, render, mayLeave });
  render(router.current());
  // Measured before the first paint, so the view never moves when the observer first reports.
  measureBar();
  const openSongs = (files: File[]) => {
    songInbox.give(files);
    const play = pageOf(routeOf("play"), pageFor(router.current()).locale).path;
    if (play !== router.current()) router.go(play);
  };
  // The sync loads only where a folder is connected, so a page without one loads none of its code.
  if (folderSyncOn()) void import("../data/folder-sync").then((sync) => sync.startFolderSync(settings), () => undefined);
  attachDrop(root, openSongs);
  attachLaunchQueue(openSongs);
  registerServiceWorker(
    { toast: (message, action) => void stack.show(action === undefined ? { message } : { message, action }) },
    settings,
  );
}
