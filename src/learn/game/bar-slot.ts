/**
 * The top bar's slot on the pages of *Learn Piano*: the streak, the XP and a ring for today's goal.
 *
 * - **The streak** is a flame with the days in a row, the flame of the streak badges' art.
 * - **The XP** is the XP counter, so it counts up when a lesson adds to it.
 * - **The ring** fills with today's XP towards the daily goal. Once the goal is met it turns to success
 *   and shows a check, so the met goal is told by shape as well as by colour.
 *
 * Decisions, and what each costs:
 * - **It reads the standing on each show,** through `readStanding`, so a lesson just finished shows at
 *   once. The cost is one pass over the log per page shown.
 * - **Each part is one image to a screen reader,** named by a sentence such as "3-day streak". The
 *   numbers on screen are for the eye.
 * - **It shows nothing until the first read ends,** and keeps its size from the start, so the bar
 *   never shifts.
 * - **The slot is built with the page's shell,** in `src/site/views.ts`, and only the standing loads
 *   later. So the bar takes its final size in the first frame. The cost is the slot's few elements in
 *   the shell's code, while the course and the log load with the first read.
 */
import "./bar-slot.css";
import { messagesOf, type Locale } from "../../i18n/locale";
import { xpCounter } from "../../ui/components/xp-counter";
import { el } from "../../ui/dom";
import { signal } from "../../ui/signal";
import { badgeArt } from "./badge-art";
import type { SettingsStore } from "../../settings/store";
import type { Standing } from "./standing";

const SVG = "http://www.w3.org/2000/svg";

/** The slot of one page, which `refresh` fills from the log. */
export interface BarSlot {
  element: HTMLElement;
  /** Reads the standing again and shows it. Resolves the standing it read. */
  refresh(): Promise<Standing>;
}

/** The ring of today's goal: a groove, an arc of path length 100, and the check a met goal shows. */
function ring(): { svg: SVGSVGElement; arc: SVGCircleElement } {
  const svg = document.createElementNS(SVG, "svg");
  svg.setAttribute("viewBox", "0 0 24 24");
  svg.setAttribute("class", "bar-slot__ring");
  svg.setAttribute("aria-hidden", "true");
  const circle = (className: string) => {
    const node = document.createElementNS(SVG, "circle");
    // The arc starts at the top, so the circle is turned a quarter back around the ring's centre.
    for (const [name, value] of Object.entries({ class: className, cx: "12", cy: "12", r: "9", pathLength: "100", transform: "rotate(-90 12 12)" })) node.setAttribute(name, value);
    return node;
  };
  const arc = circle("bar-slot__arc");
  const check = document.createElementNS(SVG, "path");
  check.setAttribute("class", "bar-slot__check");
  check.setAttribute("d", "M8.2 12.4l2.6 2.6 5-5.4");
  svg.append(circle("bar-slot__groove"), arc, check);
  return { svg, arc };
}

/** The slot of a page of *Learn Piano* in `locale`, against the daily goal of `settings`. */
export function barSlot(locale: Locale, settings: SettingsStore): BarSlot {
  const t = messagesOf(locale);
  const xp = signal(0);
  const days = el("span", { class: "bar-slot__number", text: "0" });
  const streak = el("span", {
    class: "bar-slot__item bar-slot__streak",
    attrs: { role: "img", "aria-label": t.map.bar.streak(0) },
    children: [badgeArt({ id: "streak", motif: "flame" }), days],
  });
  streak.firstElementChild?.setAttribute("aria-hidden", "true");
  const counter = el("span", { class: "bar-slot__item bar-slot__xp", children: [xpCounter({ xp, format: (_, n) => t.counts.xp(n), locale })] });
  const { svg, arc } = ring();
  const today = el("span", { class: "bar-slot__item bar-slot__today", attrs: { role: "img", "aria-label": t.map.bar.todayGoal(0, 0) }, children: [svg] });
  const element = el("div", {
    class: "bar-slot",
    attrs: { role: "group", "aria-label": t.map.bar.label, "data-ready": "false" },
    children: [streak, counter, today],
  });

  const show = (standing: Standing) => {
    const { current, todayXp } = standing.streak;
    days.textContent = new Intl.NumberFormat(locale).format(current);
    streak.setAttribute("aria-label", t.map.bar.streak(current));
    streak.title = t.map.bar.streak(current);
    xp.set(standing.tally.total);
    const share = Math.min(1, todayXp / standing.goal);
    arc.setAttribute("stroke-dasharray", `${share * 100} 100`);
    arc.toggleAttribute("data-empty", share === 0);
    today.dataset.met = String(standing.streak.today);
    today.setAttribute("aria-label", t.map.bar.todayGoal(todayXp, standing.goal));
    today.title = t.map.bar.todayGoal(todayXp, standing.goal);
    element.dataset.ready = "true";
  };

  return {
    element,
    refresh: async () => {
      const { dailyGoalOf, readStanding } = await import("./standing");
      const standing = await readStanding(dailyGoalOf(settings));
      show(standing);
      return standing;
    },
  };
}
