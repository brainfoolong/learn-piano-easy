/**
 * The map of *Learn Piano* at `learn/`: one long path through the worlds, a node per lesson and a large
 * node per boss, and the *Continue* button that opens the next lesson.
 *
 * Its parts, top to bottom: the heading and the lead beside the mascot, then the *Continue* card and one
 * band per world. A band carries the world's accent as `--c-world`. Its header shows the world's medal,
 * its number and title, how many of its nodes are done, and its skip test while a node is still locked.
 * Under it, the world's path winds through its nodes.
 *
 * - **A node is open, done or locked,** as `courseMap` of `src/learn/game/unlock.ts` says. An open or
 *   done node is a link to its lesson, and a done one shows its stars. A locked one shows a lock and is
 *   no link. The next node is the larger one in honey.
 * - **A node's face is an element of its own,** so the face moves under the pointer while the node, and
 *   so its hit area, keeps its place.
 * - **A boss shows a trophy in every state.** A locked boss adds a small lock on its corner.
 * - **The path is SVG,** one per world, stretched to the band's width. Its stretch is horizontal only,
 *   and its stroke keeps its width by `non-scaling-stroke`. It is drawn as a road: an edge, a bed and a
 *   dashed middle line. The part up to the last node reached repeats the three in the world's accent.
 * - **A node's place is fixed by its index in the course:** its row in the band, and a sideways swing
 *   that continues from world to world. No layout is measured, so the map draws in one pass.
 *
 * On a show before the first-visit setup of `src/learn/onboarding.ts` has run, the map opens it over
 * itself, and reads the standing again once it ends. Hiding the map closes a setup still open.
 *
 * Decisions, and what each costs:
 * - **The map reads the standing on each show,** so a lesson just finished shows at once. It is drawn
 *   again from scratch, which costs a few dozen elements.
 * - **The body under the lead holds a loading line until the first read,** and fills a screen's height.
 *   The *Continue* card and the worlds then take its place, so nothing that showed moves, and the
 *   page never shifts. The cost is an empty screen under the line while the course loads.
 * - **It scrolls the next node into view** when that node differs from the one it last scrolled to,
 *   and only when it is off screen. Coming back without progress keeps the learner's own scroll, and a
 *   next node near the top keeps the heading in view. It scrolls once the draw is painted, since Chrome
 *   counts a scroll in the frame that grows the map as a layout shift.
 * - **A boss's node shows its lesson's title,** which already names it a boss.
 * - **A world's illustration is its medal,** the badge its boss earns, so the map shows the reward
 *   before it is won.
 * - **The mascot in the heading only decorates,** so its `alt` is empty and a screen reader skips it.
 * - **Each band rises a moment after the one before it,** by its index `--i`. A draw makes the bands
 *   anew, so they rise on every show.
 */
import "./map-view.css";
import { messagesOf, type Locale } from "../i18n/locale";
import { lessonRoute, pageOf } from "../site/routes";
import type { View, ViewContext } from "../site/views";
import { badgeMedal } from "../ui/components/badge-medal";
import { buttonLink } from "../ui/components/button";
import { mascot } from "../ui/components/mascot";
import { el } from "../ui/dom";
import { icon, type IconName } from "../ui/icons/icons";
import type { LoadedWorld } from "./course";
import { badgeArt } from "./game/badge-art";
import { worldBadgeId } from "./game/badges";
import { dailyGoalOf, readStanding, type Standing } from "./game/standing";
import type { MapNode, MapWorld } from "./game/unlock";
import type { RunningSetup } from "./onboarding";

const SVG = "http://www.w3.org/2000/svg";

/** How far a node swings sideways from the band's centre, as a share of its width. */
const SWING = 0.26;
/** The nodes per full swing, left to right and back. */
const SWING_PERIOD = 6;
/** The height of one row of the path, in the units of the path's SVG, which match pixels. */
const ROW = 160;

/** Where the node at `index` of the whole course sits across the band, from 0 to 1. */
function swingAt(index: number): number {
  return 0.5 + SWING * Math.sin((index * 2 * Math.PI) / SWING_PERIOD);
}

/** The href of lesson `lesson` of world `world` in `locale`, relative to the site's root. */
function lessonHref(world: string, lesson: string, locale: Locale): string {
  return `./${pageOf(lessonRoute(world, lesson), locale).path}`;
}

/** The SVG path through `points`, each an `[x, y]` in the path's units, curving between rows. */
function pathThrough(points: readonly (readonly [number, number])[]): string {
  return points
    .map(([x, y], i) => {
      if (i === 0) return `M${x} ${y}`;
      const [px, py] = points[i - 1]!;
      const bend = (y - py) / 2;
      return `C${px} ${py + bend} ${x} ${y - bend} ${x} ${y}`;
    })
    .join("");
}

/** The world's path behind its nodes, as a road: the whole of it, then the part reached in the accent. */
function pathOf(xs: readonly number[], reached: number): SVGSVGElement {
  const svg = document.createElementNS(SVG, "svg");
  const height = xs.length * ROW;
  for (const [name, value] of Object.entries({ class: "map__trail", viewBox: `0 0 100 ${height}`, preserveAspectRatio: "none", "aria-hidden": "true" })) svg.setAttribute(name, value);
  const points = xs.map((x, i) => [x * 100, (i + 0.5) * ROW] as const);
  const line = (className: string, through: readonly (readonly [number, number])[]) => {
    const node = document.createElementNS(SVG, "path");
    node.setAttribute("class", className);
    node.setAttribute("d", pathThrough(through));
    node.setAttribute("vector-effect", "non-scaling-stroke");
    return node;
  };
  // Each road is three lines on one path: its edge, its bed, and the dashes down its middle.
  const road = (classes: readonly string[], through: readonly (readonly [number, number])[]) => classes.map((name) => line(name, through));
  svg.append(...road(["map__trail-edge", "map__trail-all", "map__trail-marks"], points));
  if (reached > 0) svg.append(...road(["map__trail-reached-edge", "map__trail-reached", "map__trail-reached-marks"], points.slice(0, reached + 1)));
  return svg;
}

/** The three stars of a done node, the earned ones filled. */
function starsOf(stars: number): HTMLElement {
  return el("span", {
    class: "map__stars",
    attrs: { "aria-hidden": "true" },
    children: [0, 1, 2].map((i) => el("span", { class: "map__star", attrs: { "data-earned": String(i < stars) }, children: [icon("star")] })),
  });
}

/** One node of `world`'s path, at `x` across the band and in row `row`. */
function nodeOf(node: MapNode, world: string, title: string, next: boolean, locale: Locale, x: number, row: number): HTMLElement {
  const t = messagesOf(locale).map;
  const name = title;
  const label = node.state === "locked" ? t.node.locked(name) : node.state === "done" ? t.node.done(name, node.stars) : t.node.open(name);
  const locked = node.state === "locked";
  const glyph: IconName = node.boss ? "trophy" : locked ? "lock" : node.state === "done" ? "check" : "play";
  const attrs = { class: "map__node", "aria-label": label, "data-state": node.state, "data-boss": String(node.boss), "data-next": String(next) };
  const parts = [el("span", { class: "map__face", children: [icon(glyph)] }), locked && node.boss ? el("span", { class: "map__lock", children: [icon("lock")] }) : null];
  const target = locked ? el("span", { attrs: { ...attrs, role: "img" }, children: parts }) : el("a", { attrs: { ...attrs, href: lessonHref(world, node.lesson, locale) }, children: parts });
  return el("li", {
    class: "map__stop",
    attrs: { style: `--x: ${x}; --row: ${row}` },
    children: [
      target,
      el("span", { class: "map__caption", attrs: { "aria-hidden": "true" }, children: [el("span", { class: "map__name", text: name }), node.state === "done" ? starsOf(node.stars) : null] }),
    ],
  });
}

/** The band and path of one world, whose first node is node `first` of the whole course. */
function worldOf(loaded: LoadedWorld, state: MapWorld, number: number, first: number, next: MapNode | undefined, locale: Locale): HTMLElement {
  const t = messagesOf(locale);
  const { world, lessons } = loaded;
  const title = world.title[locale];
  const titles = new Map([...lessons.lessons, ...(lessons.boss === undefined ? [] : [lessons.boss])].map((lesson) => [lesson.id, lesson.texts[locale].title]));
  const xs = state.nodes.map((_, i) => swingAt(first + i));
  const reached = state.nodes.reduce((last, node, i) => (node.state === "locked" ? last : i), 0);
  // The world's badge needs its boss, so a world without one never shows it earned.
  const earned = state.beaten && lessons.boss !== undefined;
  const medal = badgeMedal({
    label: t.map.medal(title, earned),
    icon: badgeArt({ id: worldBadgeId(world.id), motif: "world", world: world.id }),
    state: earned ? "earned" : "locked",
    size: "medium",
  });
  const status =
    !state.open ? el("p", { class: "map__status", attrs: { "data-tone": "locked" }, children: [icon("lock"), el("span", { text: t.map.locked })] })
    : state.beaten ? el("p", { class: "map__status", attrs: { "data-tone": "beaten" }, children: [icon("check"), el("span", { text: t.map.beaten })] })
    : null;
  const done = state.nodes.filter((node) => node.state === "done").length;
  const progress = el("div", {
    class: "map__progress",
    children: [
      el("span", { class: "map__meter", attrs: { "aria-hidden": "true" }, children: [el("span", { class: "map__meter-fill", attrs: { style: `--share: ${done / Math.max(1, state.nodes.length)}` } })] }),
      el("p", { class: "map__count", text: t.map.progress(done, state.nodes.length) }),
    ],
  });
  const skip =
    state.skipTest === undefined ? null : (
      el("div", {
        class: "map__skip",
        children: [
          el("p", { class: "map__skip-text", text: t.map.skipTest.text }),
          buttonLink({ label: t.map.skipTest.action, href: lessonHref(world.id, state.skipTest, locale), size: "small" }),
        ],
      })
    );
  const headingId = `map-world-${world.id}`;
  return el("li", {
    class: "map__world",
    attrs: { style: `--c-world: var(--c-world-${world.accent}); --i: ${number - 1}`, "data-open": String(state.open), "aria-labelledby": headingId },
    children: [
      el("div", {
        class: "map__band",
        children: [
          medal,
          el("div", {
            class: "map__band-text",
            children: [el("p", { class: "map__eyebrow", text: t.map.world(number) }), el("h2", { class: "map__world-title", attrs: { id: headingId }, text: title }), progress, status],
          }),
          skip,
        ],
      }),
      el("div", {
        class: "map__path",
        attrs: { style: `--rows: ${state.nodes.length}` },
        children: [
          pathOf(xs, reached),
          el("ol", { class: "map__stops", children: state.nodes.map((node, i) => nodeOf(node, world.id, titles.get(node.lesson) ?? node.lesson, node === next, locale, xs[i]!, i)) }),
        ],
      }),
    ],
  });
}

/** The map view of `locale`. `onSetupDone` runs once the first-visit setup ends, so the top bar's slot reads the new goal. */
export function mapPage(locale: Locale, context: ViewContext, onSetupDone: () => void = () => {}): View {
  const t = messagesOf(locale);
  const lead = el("p", { class: "map__lead", text: t.map.lead });
  const continueHost = el("div", { class: "map__continue" });
  const worlds = el("ol", { class: "map__worlds" });
  const body = el("div", { class: "map__body", attrs: { "aria-busy": "true" }, children: [el("p", { class: "map__loading", text: t.map.loading })] });
  const element = el("div", {
    class: "site-page map",
    children: [
      el("header", {
        class: "map__head",
        children: [
          el("div", { class: "map__head-text", children: [el("h1", { class: "site-page__title", text: t.pages.learn.title }), lead] }),
          mascot({ pose: "portrait", alt: "", size: "large" }),
        ],
      }),
      body,
    ],
  });
  let scrolledTo: string | undefined;
  let reading = 0;

  const draw = (standing: Standing) => {
    const { map, course } = standing;
    const next = map.next;
    let first = 0;
    worlds.replaceChildren(
      ...course.map((loaded, i) => {
        const state = map.worlds[i]!;
        const band = worldOf(loaded, state, i + 1, first, next?.node, locale);
        first += state.nodes.length;
        return band;
      }),
    );
    if (body.hasAttribute("aria-busy")) {
      body.replaceChildren(continueHost, worlds);
      body.removeAttribute("aria-busy");
    }
    if (next === undefined) {
      continueHost.replaceChildren();
      return;
    }
    const loaded = course.find((w) => w.world.id === next.world)!;
    const lesson = [...loaded.lessons.lessons, loaded.lessons.boss].find((l) => l?.id === next.node.lesson);
    const title = lesson?.texts[locale].title ?? next.node.lesson;
    continueHost.replaceChildren(
      el("div", { class: "map__next", children: [el("p", { class: "map__next-label", text: t.map.nextUp }), el("p", { class: "map__next-title", text: title })] }),
      buttonLink({ label: t.map.continue, href: lessonHref(next.world, next.node.lesson, locale), variant: "primary", size: "large", icon: "arrow-right", iconAt: "end" }),
    );
    if (scrolledTo !== next.node.key) {
      scrolledTo = next.node.key;
      // The first frame may still be the one that paints the draw, so the scroll waits for a second.
      requestAnimationFrame(() =>
        requestAnimationFrame(() => {
          const node = worlds.querySelector('[data-next="true"]');
          const box = node?.getBoundingClientRect();
          if (box !== undefined && (box.top < 0 || box.bottom > innerHeight)) node?.scrollIntoView({ block: "center" });
        }),
      );
    }
  };

  // The site hides the page around the map, never the map's own element, so the map tracks its showing.
  let showing = false;
  let settingUp = false;
  let setup: RunningSetup | undefined;
  const read = () => {
    const own = ++reading;
    void readStanding(dailyGoalOf(context.settings)).then((standing) => {
      if (own === reading && showing) draw(standing);
    });
    if (context.settings.get("learnSetupDone") || settingUp) return;
    settingUp = true;
    void import("./onboarding").then((module) => {
      // A map left while the setup's code loaded opens it on its next show.
      if (!showing) {
        settingUp = false;
        return;
      }
      setup = module.runSetup(locale, context);
      return setup.ended.then(() => {
        setup = undefined;
        settingUp = false;
        onSetupDone();
        if (showing) read();
      });
    });
  };

  return {
    element,
    shown: () => {
      showing = true;
      read();
    },
    hidden: () => {
      showing = false;
      setup?.close();
    },
  };
}
