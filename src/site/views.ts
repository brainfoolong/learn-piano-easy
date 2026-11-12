/**
 * The site's views: what each route shows under the top bar.
 *
 * The landing page is `src/landing/landing.ts`, and the play modes are `src/play-modes/modes-view.ts`.
 * Both are in the site's bundle, so they show at once. *Learn Piano* is the map of
 * `src/learn/map-view.ts`, and the profile is `src/learn/profile-view.ts`. Each is a chunk of its own.
 * About shows the licenses.
 * The Data page's body is `src/data/data-view.ts`, a chunk of its own under a heading built at once.
 * The legal notice and the privacy policy share `src/site/legal-view.ts`, built the same way.
 * The sponsor page's body is `src/site/sponsor-view.ts`, built the same way too.
 *
 * The gallery at `design/` shows every component. It is a chunk of its own too, imported when its page
 * opens, so no other page loads its specimens. Its frame fills the window until the chunk draws, so the
 * footer never moves.
 *
 * The map, the profile and each lesson's page show the slot of `src/learn/game/bar-slot.ts` in the top
 * bar, which reads the learner's standing again on each show. The slot is built with the view, so the
 * top bar has its final size before the standing loads.
 *
 * The player at `play/` is one view for every locale, and it stays alive once opened. Leaving it hides
 * it, and coming back shows it at once. Its code is a chunk of its own, imported on the first show, so
 * the other pages load no three.js and no audio. Its styles are in the site's one stylesheet, scoped to
 * its own classes. While hidden, the player runs nothing and hears no key.
 * It speaks the live locale of `src/i18n/live.ts`, which the site sets to each page's own. Its bar of
 * `src/app/player-bar.ts` is built with the view, so the top bar has its final size before the chunk
 * loads. *Songs* and the song's title are its actions, which the top bar's page slot shows.
 * *Guide*, *Tracks*, *Settings* and *About* are its menu, which joins the top bar's menu when narrow.
 * Its dock holds the control bar, under the top bar's row, so the player has one floating bar.
 *
 * A lesson's view is `src/learn/lesson-view.ts`, a chunk of its own like the player's. Each lesson's
 * page has its own view, which asks before the learner leaves a running lesson.
 */
import { aboutPage } from "../app/about";
import { playerBar } from "../app/player-bar";
import type { Shell } from "../app/shell";
import { messagesOf, type Locale } from "../i18n/locale";
import { landingView } from "../landing/landing";
import { barSlot } from "../learn/game/bar-slot";
import { modesView } from "../play-modes/modes-view";
import type { SettingsStore } from "../settings/store";
import { el } from "../ui/dom";
import type { Route } from "./routes";

/** A view the site shows and hides as the route changes. */
export interface View {
  element: HTMLElement;
  /** The view's own actions, which the top bar's page slot shows while the view does. */
  actions?: HTMLElement;
  /** The view's actions that move into the top bar's menu on a narrow bar, and sit in the bar otherwise. */
  menu?: HTMLElement;
  /** The view's own part of the floating bar, under the top bar's row. */
  dock?: HTMLElement;
  /** Called each time the view shows, in the locale of the page on screen. */
  shown?(locale: Locale): void;
  /** Called each time the view hides. */
  hidden?(): void;
  /** Resolves whether the learner may leave the view now, after asking them if it must. */
  mayLeave?(): Promise<boolean>;
}

/** What a view asks of the site. */
export interface ViewContext {
  settings: SettingsStore;
  /** Shows the page at `path`, relative to the site's root. */
  go(path: string): void;
}

/** A page's frame: its heading, then its content. */
function page(title: string, content: Node[]): HTMLElement {
  return el("div", { class: "site-page", children: [el("h1", { class: "site-page__title", text: title }), ...content] });
}

/** The top bar's slot of a page of *Learn Piano*, at its full size at once. Its standing loads on its first refresh. */
function learnSlot(locale: Locale, settings: SettingsStore): { element: HTMLElement; refresh(): void } {
  const slot = barSlot(locale, settings);
  const element = el("div", { class: "site-bar__learn", children: [slot.element] });
  return { element, refresh: () => void slot.refresh() };
}

/** A page of *Learn Piano* whose code `load` makes on its first show, with the top bar's slot. */
function learnView(locale: Locale, context: ViewContext, load: (refreshSlot: () => void) => Promise<View>): View {
  const element = el("div", { class: "learn-page" });
  const slot = learnSlot(locale, context.settings);
  let view: View | undefined;
  let showing = false;
  void load(slot.refresh).then((made) => {
    view = made;
    element.replaceChildren(view.element);
    if (showing) view.shown?.(locale);
  });
  return {
    element,
    actions: slot.element,
    shown(shownIn) {
      showing = true;
      slot.refresh();
      view?.shown?.(shownIn);
    },
    hidden() {
      showing = false;
      view?.hidden?.();
    },
  };
}

/** The About page, whose license texts fill in once they are read. */
function aboutView(locale: Locale): View {
  const element = page(messagesOf(locale).pages.about.title, []);
  void aboutPage().then((body) => element.append(body));
  return { element };
}

/** The Data page, whose heading shows at once and whose body loads as a chunk of its own. */
function dataView(locale: Locale, settings: SettingsStore): View {
  const element = page(messagesOf(locale).pages.data.title, []);
  element.classList.add("data-page");
  let shown: (() => void) | undefined;
  let showing = false;
  void import("../data/data-view").then((module) => {
    const body = module.dataBody(locale, settings);
    element.append(body.element);
    shown = body.shown;
    if (showing) shown();
  });
  return {
    element,
    shown() {
      showing = true;
      shown?.();
    },
    hidden() {
      showing = false;
    },
  };
}

/** The legal notice or the privacy policy, whose heading shows at once and whose text loads as a chunk of its own. */
function legalView(kind: "imprint" | "privacy", locale: Locale): View {
  const element = page(messagesOf(locale).pages[kind].title, []);
  void import("./legal-view").then((module) => element.append(module.legalBody(kind, locale)));
  return { element };
}

/** The sponsor page, whose heading shows at once and whose body loads as a chunk of its own. */
function sponsorView(locale: Locale): View {
  const element = page(messagesOf(locale).pages.sponsor.title, []);
  void import("./sponsor-view").then((module) => element.append(module.sponsorBody(locale)));
  return { element };
}

/** The gallery, whose code loads when its page opens. */
function galleryPage(locale: Locale, settings: SettingsStore): View {
  const element = el("div", { class: "gallery-page" });
  void import("../ui/gallery").then((module) => element.append(module.galleryView(locale, settings)));
  return { element };
}

/** The player, with a heading only a screen reader reads, since the scene fills the window. */
function playerView(settings: SettingsStore): View {
  const heading = el("h1", { class: "visually-hidden" });
  const app = el("div", { class: "player-view__app" });
  const element = el("div", { class: "player-view", children: [heading, app] });
  const bar = playerBar();
  let shell: Shell | undefined;
  let loading = false;
  let showing = false;
  return {
    element,
    actions: bar.slot,
    menu: bar.menuSlot,
    dock: bar.dock,
    shown(locale) {
      showing = true;
      heading.textContent = messagesOf(locale).pages.play.title;
      shell?.run(true);
      if (loading) return;
      loading = true;
      void import("../app/shell").then((player) => {
        shell = player.createShell(app, settings, bar);
        shell.run(showing);
      });
    },
    hidden() {
      showing = false;
      shell?.run(false);
    },
  };
}

/** A lesson's view, whose code and lessons load on its first show. */
function lessonPage(at: { world: string; lesson: string }, locale: Locale, context: ViewContext): View {
  const element = el("div", { class: "lesson-page" });
  const slot = learnSlot(locale, context.settings);
  let view: View | undefined;
  let showing = false;
  const loading = import("../learn/lesson-view").then((module) => {
    view = module.lessonPage(at, locale, context, slot.refresh);
    element.replaceChildren(view.element);
    if (showing) view.shown?.(locale);
  });
  return {
    element,
    actions: slot.element,
    shown(shownIn) {
      showing = true;
      slot.refresh();
      view?.shown?.(shownIn);
    },
    hidden() {
      showing = false;
      view?.hidden?.();
    },
    mayLeave: () => loading.then(() => view?.mayLeave?.() ?? true),
  };
}

/** Makes the view of `route` in `locale`. The player's view takes its locale on each show. */
export function makeView(route: Route, locale: Locale, context: ViewContext): View {
  switch (route.id) {
    case "lesson":
      return lessonPage(route.lesson!, locale, context);
    case "home":
      return landingView(locale, context);
    case "learn":
      return learnView(locale, context, (refresh) => import("../learn/map-view").then((module) => module.mapPage(locale, context, refresh)));
    case "profile":
      return learnView(locale, context, (refresh) => import("../learn/profile-view").then((module) => module.profilePage(locale, context, refresh)));
    case "play":
      return playerView(context.settings);
    case "modes":
      return modesView(locale);
    case "about":
      return aboutView(locale);
    case "data":
      return dataView(locale, context.settings);
    case "sponsor":
      return sponsorView(locale);
    case "imprint":
    case "privacy":
      return legalView(route.id, locale);
    case "design":
      return galleryPage(locale, context.settings);
  }
}
