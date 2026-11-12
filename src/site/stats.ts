/**
 * The visitor statistics: one request per page shown, to our own Matomo at `stats.learn-piano-easy.app`.
 *
 * The privacy policy of `src/i18n/messages/legal.en.ts` tells the visitor what this sends, and
 * decision 0007 says why the site counts at all.
 *
 * Decisions, and what each costs:
 * - **The site loads no Matomo script.** It posts one form to `matomo.php` with the page's address,
 *   its title and, on the first page only, the address of the site the visitor came from. No cookie
 *   is set, so Matomo groups a visit by a value it changes every day.
 * - **Only the hosted site counts.** A page on any other host, such as `localhost`, a preview or a
 *   copy of the site, sends nothing. So the tests and a local build never reach the server.
 * - **A visitor who asks not to be tracked is never counted.** Do Not Track, Global Privacy Control
 *   and the privacy page's switch each stop every request. The switch stores its choice in this
 *   browser only, under `STATS_OPT_OUT_KEY`.
 * - **A failed request is dropped.** Offline, or with the server down, the page never waits and
 *   shows nothing.
 * - **The address leaves out its query and its fragment,** so nothing a link carries is counted.
 */

/** Where the statistics go, and the only host that sends them. */
export const STATS = { url: "https://stats.learn-piano-easy.app/", siteId: 9, host: "learn-piano-easy.app" } as const;

/** The `localStorage` key of the privacy page's switch. Its value is `"1"` while the visitor opts out. */
export const STATS_OPT_OUT_KEY = "learn-piano-easy.statsOptOut";

/** The parts of `navigator` that carry a visitor's wish not to be tracked. */
interface PrivacySignals {
  doNotTrack?: string | null;
  globalPrivacyControl?: boolean;
}

/** Whether the browser asks every site not to track its user, through Do Not Track or Global Privacy Control. */
export function browserRefuses(signals: PrivacySignals = navigator as PrivacySignals): boolean {
  return signals.globalPrivacyControl === true || signals.doNotTrack === "1";
}

/** Whether the visitor turned the counting off on the privacy page. */
export function optedOut(): boolean {
  try {
    return localStorage.getItem(STATS_OPT_OUT_KEY) === "1";
  } catch {
    return false;
  }
}

/** Stores the visitor's choice: `true` stops the counting in this browser, `false` allows it again. */
export function setOptedOut(out: boolean): void {
  try {
    if (out) localStorage.setItem(STATS_OPT_OUT_KEY, "1");
    else localStorage.removeItem(STATS_OPT_OUT_KEY);
  } catch {
    // A browser that refuses storage keeps no choice, and the switch shows the counting on.
  }
}

/** One page view as Matomo's tracking API takes it. */
export interface Visit {
  /** The page's full address. */
  href: string;
  title: string;
  /** The address of the page before it, or `""`. Only another site's origin is sent. */
  referrer: string;
}

/** The form that counts `visit`, or undefined when the page is not on the hosted site. */
export function visitForm(visit: Visit): URLSearchParams | undefined {
  const url = new URL(visit.href);
  if (url.hostname !== STATS.host) return undefined;
  const form = new URLSearchParams({
    idsite: String(STATS.siteId),
    rec: "1",
    apiv: "1",
    send_image: "0",
    url: url.origin + url.pathname,
    action_name: visit.title,
  });
  const from = referrerOrigin(visit.referrer, url.hostname);
  if (from !== undefined) form.set("urlref", from);
  return form;
}

/** The origin of `referrer`, or undefined when it is empty, broken or on `host`. */
function referrerOrigin(referrer: string, host: string): string | undefined {
  if (referrer === "") return undefined;
  try {
    const url = new URL(referrer);
    return url.hostname === host ? undefined : url.origin;
  } catch {
    return undefined;
  }
}

/** Whether a page was counted yet. The referrer belongs to the first page only. */
let counted = false;

/** Counts the page on screen, unless the visitor refuses or the page is not on the hosted site. */
export function countVisit(): void {
  if (browserRefuses() || optedOut()) return;
  const form = visitForm({ href: location.href, title: document.title, referrer: counted ? "" : document.referrer });
  counted = true;
  if (form === undefined) return;
  void fetch(new URL("matomo.php", STATS.url), {
    method: "POST",
    body: form,
    mode: "no-cors",
    credentials: "omit",
    referrerPolicy: "no-referrer",
    keepalive: true,
  }).catch(() => undefined);
}
