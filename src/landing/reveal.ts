/**
 * The landing page's entrances: a part rises and fades in as it first scrolls into view.
 *
 * Decisions, and what each costs:
 * - **A part shows unless it is entering.** Nothing waits unseen, so a full-page screenshot, a print and
 *   a browser without `IntersectionObserver` show the whole page. The cost is the next two rules.
 * - **An entrance starts just below the window.** The observer reaches `LEAD_PX` below the window's
 *   edge. A part that crosses that line unseen takes `data-reveal`, and the stylesheet plays it in.
 * - **A part already on screen stands still.** It has shown in a frame, so hiding it again would
 *   flicker. That holds for the first screen, a jump down the page and a very fast scroll.
 * - **Parts that enter together enter in order.** Each takes `--reveal-order`, its place among them,
 *   and the stylesheet delays it by that. The order stops at `LAST_ORDER`, so no part waits long.
 * - **The mark leaves with the animation.** A view the site hides and shows again replays nothing.
 *
 * The stylesheet moves only `transform` and `opacity`, so an entrance shifts no layout. With reduced
 * motion nothing is observed, and the stylesheet holds no animation either.
 */
import { prefersReducedMotion } from "../ui/motion";

/** How far below the window an entrance starts, in pixels. */
const LEAD_PX = 64;

/** The last place in the order of parts that enter together. */
const LAST_ORDER = 5;

/** Plays each of `parts` in, once, as it first scrolls into view from below. */
export function revealOnEntry(parts: readonly HTMLElement[]): void {
  if (prefersReducedMotion() || typeof IntersectionObserver !== "function") return;
  const observer = new IntersectionObserver(
    (entries) => {
      let order = 0;
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        const part = entry.target as HTMLElement;
        observer.unobserve(part);
        if (entry.boundingClientRect.top < innerHeight) continue;
        part.style.setProperty("--reveal-order", String(Math.min(order++, LAST_ORDER)));
        part.dataset.reveal = "";
      }
    },
    { rootMargin: `0px 0px ${LEAD_PX}px 0px` },
  );
  const settle = (event: AnimationEvent) => {
    const part = event.currentTarget as HTMLElement;
    if (event.target !== part) return;
    delete part.dataset.reveal;
    part.style.removeProperty("--reveal-order");
  };
  for (const part of parts) {
    part.addEventListener("animationend", settle);
    part.addEventListener("animationcancel", settle);
    observer.observe(part);
  }
}
