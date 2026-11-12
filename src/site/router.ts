/**
 * The router: after the first load, a click on a site link changes the view in place.
 *
 * A path here is relative to the site's root, such as `de/play/`. The root is the page's `<base>`
 * element, which the build writes on every page as the relative path back to the root.
 *
 * Decisions, and what each costs:
 * - **The root is frozen at boot.** `siteRoot` rewrites the `<base>` element's `href` as an absolute
 *   URL. A relative base would otherwise follow the address in a browser that resolves it again after
 *   `pushState`, and every relative URL of the app would break on the next route.
 * - **Only a plain click on a link to a route is taken.** A click with a modifier, a link with a target
 *   or a download, a link that starts with `#`, and a link outside the site's routes stay the browser's.
 * - **The swap runs in a view transition** where the browser has the API and motion is not reduced.
 *   Elsewhere the view changes at once.
 * - **The view being left hears so before the transition,** through `leave`. The browser runs the swap
 *   a frame or more later, and code the old view loads meanwhile must not open over the new page.
 * - **Each history entry keeps its scroll in memory,** keyed by an id in its state. Back and forward
 *   then restore the place the learner left. A reload starts at the top, which costs nothing to store.
 * - **The focus moves to the new view's `h1`,** so a screen reader starts at the new page's name.
 * - **A view may refuse to be left,** as a running lesson does until the learner agrees. `mayLeave`
 *   runs before a link's route shows. On Back or Forward the address has already moved, so a refusal
 *   puts the view's own address back as a new entry.
 */
import { pageAt } from "./routes";

/** What the router asks of the site. */
export interface RouterOptions {
  /** The site's root, an absolute URL ending in `/`. */
  root: string;
  /** Tells the view on screen that the page at `path` replaces it. It runs at once, before the view transition. */
  leave(path: string): void;
  /** Shows the view of the page at `path`. It runs inside the view transition. */
  render(path: string): void;
  /** Resolves whether the view on screen may be left. */
  mayLeave(): Promise<boolean>;
}

export interface Router {
  /** The path on screen. */
  current(): string;
  /** Shows the page at `path`, as a new history entry or in place of the current one. */
  go(path: string, options?: { replace?: boolean }): void;
}

/** The site's root, as an absolute URL ending in `/`, with the page's `<base>` frozen to it. */
export function siteRoot(): string {
  const base = document.querySelector("base");
  if (base !== null) base.href = base.href;
  return document.baseURI;
}

/** The path of `url` relative to `root`, without its query and fragment, or undefined outside it. */
export function pathOf(url: URL, root: string): string | undefined {
  const href = url.origin + url.pathname;
  return href.startsWith(root) ? decodeURI(href.slice(root.length)) : undefined;
}

/** Whether the learner asked the system for less motion. */
const reducedMotion = () => matchMedia("(prefers-reduced-motion: reduce)").matches;

/** Starts the router, which takes over the site's links and the history. */
export function startRouter(options: RouterOptions): Router {
  const { root } = options;
  const scrolls = new Map<string, number>();
  const newKey = () => Math.random().toString(36).slice(2);
  const keyOf = (state: unknown) =>
    typeof state === "object" && state !== null && "key" in state && typeof state.key === "string" ? state.key : undefined;

  history.scrollRestoration = "manual";
  let key = keyOf(history.state) ?? newKey();
  history.replaceState({ key }, "");
  let current = pathOf(new URL(location.href), root) ?? "";

  const focusHeading = () => {
    const heading = document.querySelector<HTMLElement>("main > :not([hidden]) h1");
    if (heading === null) return;
    heading.tabIndex = -1;
    heading.focus({ preventScroll: true });
  };

  const show = (path: string, scroll: number) => {
    current = path;
    options.leave(path);
    const swap = () => {
      options.render(path);
      scrollTo(0, scroll);
    };
    if (document.startViewTransition === undefined || reducedMotion()) {
      swap();
      focusHeading();
      return;
    }
    const transition = document.startViewTransition(swap);
    void transition.updateCallbackDone.then(focusHeading, focusHeading);
    // A quick next view skips this one's animation, and `ready` rejects then. The swap still ran.
    transition.ready.catch(() => {});
  };

  const go: Router["go"] = (path, { replace = false } = {}) => {
    const url = root + path;
    if (replace) {
      history.replaceState({ key }, "", url);
    } else {
      scrolls.set(key, scrollY);
      key = newKey();
      history.pushState({ key }, "", url);
    }
    show(path, 0);
  };

  window.addEventListener("popstate", (event) => {
    const path = pathOf(new URL(location.href), root) ?? "";
    if (path === current) return;
    const left = current;
    void options.mayLeave().then((ok) => {
      if (!ok) {
        key = newKey();
        history.pushState({ key }, "", root + left);
        return;
      }
      scrolls.set(key, scrollY);
      key = keyOf(event.state) ?? newKey();
      show(path, scrolls.get(key) ?? 0);
    });
  });

  document.addEventListener("click", (event) => {
    if (event.defaultPrevented || event.button !== 0) return;
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    const link = event.target instanceof Element ? event.target.closest<HTMLAnchorElement>("a[href]") : null;
    if (link === null || (link.target !== "" && link.target !== "_self") || link.hasAttribute("download")) return;
    if (link.getAttribute("href")!.startsWith("#")) return;
    const url = new URL(link.href);
    const path = pathOf(url, root);
    if (path === undefined || url.search !== "" || url.hash !== "" || pageAt(path) === undefined) return;
    event.preventDefault();
    if (path === current) return;
    void options.mayLeave().then((ok) => {
      if (ok) go(path);
    });
  });

  return { current: () => current, go };
}
