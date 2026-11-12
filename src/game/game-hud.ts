/**
 * The game's screen: a panel with the score, the combo and its multiplier, popups over the keys played,
 * a burst at each new multiplier, and a card that sums up a finished take.
 *
 * Decisions, and what each costs:
 * - It is plain DOM over the scene, styled in `src/game/game-hud.css`. Every animation moves only
 *   `transform` and `opacity`, so the browser composites it without a layout per frame.
 * - The score counts towards its total on every frame by an eased step, so a gain never jumps. A new
 *   take sets it back to zero at once.
 * - A popup shows where the scene's `keyPoint` puts its key at that moment, then floats up from there.
 *   Popups shown together on keys close to each other stack in rows, so a chord stays readable.
 * - The hold points of one key merge into one popup, which follows its key every frame and counts up.
 *   The slot just above the key is kept for it, so the words of new hits start a row higher.
 * - The release, or the fine for a hold too short or too long, turns the hold popup into its word. The
 *   popup keeps the hold's total on a line of its own, then floats away.
 * - At most `MAX_POPS` popups live at once. A new one past that removes the oldest, so a flurry of
 *   notes costs a fixed number of elements.
 * - With reduced motion, the popups, the bursts and the card only fade, through the stylesheet.
 * - Only the bursts are announced, through a polite live region. Announcing every popup would drown a
 *   screen reader.
 * - Only the summary card takes the pointer, so the popups never block the note scroll or a click.
 * - A take that wait mode helped shows a tag and its late notes on the card. Other takes have no late
 *   notes, so their card leaves the count out.
 * - Its texts and digits come from the live locale's `player.input.game`. The panel's labels follow a
 *   change of locale. A popup or a card keeps the locale it was built in, since it lives a moment.
 */
import { formatNumber } from "../i18n/format";
import { liveLocale, localize, t } from "../i18n/live";
import type { Messages } from "../i18n/messages/en";
import type { PianoScene } from "../render/scene";
import { button, el } from "../ui/dom";
import type { GameEvent, GameEventKind, GameScore } from "./referee";
import "./game-hud.css";

/** The game's texts in `messages`. */
const says = (messages: Messages) => messages.player.input.game;

/** The word `kind` pops up as, in the live locale. */
const word = (kind: GameEventKind) => says(t()).words[kind];

/** `n` in the live locale's digits. */
const number = (n: number) => formatNumber(liveLocale(), n);

/** The most popups alive at once. */
const MAX_POPS = 24;
/** The rows popups stack in, and the pixels between two rows. */
const ROWS = 4;
const ROW_HEIGHT = 30;
/** Popups closer than this, in pixels, and younger than this, in milliseconds, take separate rows. */
const NEAR_X = 72;
const STACK_MS = 320;
/** The room kept above a key for its hold popup, in pixels. */
const HOLD_ROOM = 32;
/** How fast the shown score closes on its total, per second. */
const SCORE_RATE = 9;
/** The smallest combo whose break shakes the combo. */
const BREAK_ALARM = 5;
/** The animations that end a popup's life. The pop-in of a hold popup is not one. */
const ENDINGS = new Set(["game-pop-float", "game-pop-fade"]);

/** The game's screen over the scene. */
export interface GameHud {
  /** Hides the whole screen, and drops every popup, or shows it again. */
  setHidden(hidden: boolean): void;
  /** Shows the difficulty's name, such as "Easy". */
  setLevel(name: string): void;
  /** Starts a take's display: the score and the combo at zero, and the last result put away. */
  newTake(): void;
  /** Shows each of `events` over its key, and `score` in the panel. */
  show(events: readonly GameEvent[], score: GameScore): void;
  /** Lets every hold popup float away, as when its take ends. */
  endHolds(): void;
  /** Shows the card that sums up a finished take, and says so when wait mode `helped` it. */
  summary(score: GameScore, helped: boolean): void;
  /** Moves the score towards its total and the hold popups with their keys. `now` is in milliseconds. */
  frame(now: number): void;
  /** Takes the screen out of the page. */
  dispose(): void;
}

/** A popup floating away. */
interface Pop {
  readonly element: HTMLElement;
  readonly x: number;
  readonly row: number;
  readonly born: number;
}

/** A hold popup, counting up over its key. */
interface Hold {
  readonly element: HTMLElement;
  readonly body: HTMLElement;
  readonly points: HTMLElement;
  total: number;
}

/** `points` rounded, with its sign. */
function signed(points: number): string {
  const rounded = Math.round(points);
  return `${rounded < 0 ? "−" : "+"}${number(Math.abs(rounded))}`;
}

/** Plays `name`'s animation on `element` again from its start. */
function replay(element: HTMLElement, name: string): void {
  element.classList.remove(name);
  void element.offsetWidth;
  element.classList.add(name);
}

/** Builds the game's screen into `container`, placing popups by `scene`. It starts hidden. */
export function createGameHud(container: HTMLElement, scene: Pick<PianoScene, "keyPoint">): GameHud {
  const score = el("output", { class: "game-score", text: "0" });
  const level = el("span", { class: "game-level" });
  const comboCount = el("strong", { class: "game-combo-count", text: "0" });
  const comboLabel = localize(el("span", { class: "game-combo-label" }), (m) => says(m).combo);
  const combo = el("span", { class: "game-combo", children: [comboCount, comboLabel] });
  const badge = localize(el("span", { class: "game-multiplier", text: "×1", attrs: { "data-level": "1" } }), (m) => says(m).multiplier, "title");
  const panel = localize(el("div", {
    class: "game-hud",
    attrs: { role: "group" },
    children: [
      el("div", { class: "game-head", children: [localize(el("span", { class: "game-title" }), (m) => says(m).score), level] }),
      score,
      el("div", { class: "game-combo-row", children: [combo, badge] }),
    ],
  }), (m) => says(m).name, "aria-label");
  const pops = el("div", { class: "game-pops" });
  const burstText = el("strong", { class: "game-burst-text" });
  const burstSub = el("span", { class: "game-burst-sub" });
  const burst = el("div", { class: "game-burst", attrs: { "aria-hidden": "true" }, children: [burstText, burstSub] });
  const live = el("div", { class: "game-live", attrs: { "aria-live": "polite" } });
  const card = localize(el("div", { class: "game-summary", attrs: { role: "group" } }), (m) => says(m).result, "aria-label");
  card.hidden = true;
  const layer = el("div", { class: "game", children: [pops, burst, panel, card, live] });
  layer.hidden = true;
  container.append(layer);

  let target = 0;
  let shown = 0;
  let lastFrame: number | undefined;
  let comboNow = 0;
  let multiplier = 1;
  let floating: Pop[] = [];
  const holds = new Map<number, Hold>();

  /** The client point `scene` gives for `key`, in the container's pixels. */
  const pointOf = (key: number, box: DOMRect): { x: number; y: number } | undefined => {
    const point = scene.keyPoint(key);
    return point === undefined ? undefined : { x: point.x - box.left, y: point.y - box.top };
  };

  const place = (element: HTMLElement, x: number, y: number) => {
    element.style.transform = `translate3d(${x.toFixed(1)}px, ${y.toFixed(1)}px, 0)`;
  };

  const remove = (pop: Pop) => {
    const at = floating.indexOf(pop);
    if (at >= 0) floating.splice(at, 1);
    pop.element.remove();
  };

  /** Builds a popup's elements for `kind`, with its word and points. */
  const build = (kind: GameEventKind, points: number) => {
    const text = el("span", { class: "game-pop-word", text: word(kind) });
    const value = el("span", { class: "game-pop-points", text: signed(points) });
    const body = el("div", { class: "game-pop-body", children: [text, value] });
    const element = el("div", { class: "game-pop", attrs: { "data-kind": kind }, children: [body] });
    return { element, body, value };
  };

  /** Keeps the popups within `MAX_POPS` once one more joins. */
  const makeRoom = () => {
    while (floating.length + holds.size >= MAX_POPS && floating.length > 0) remove(floating[0]!);
  };

  /** Lets `element`, built by `build`, float away from `x`, `y`, and removes it once its animation ends. */
  const float = (element: HTMLElement, body: HTMLElement, x: number, row: number) => {
    const pop: Pop = { element, x, row, born: performance.now() };
    floating.push(pop);
    delete element.dataset.live;
    body.addEventListener("animationend", (event) => {
      if (event.target === body && event.pseudoElement === "" && ENDINGS.has(event.animationName)) remove(pop);
    });
  };

  /** The first row free of the young popups near `x`. */
  const rowFor = (x: number, now: number): number => {
    const taken = new Set<number>();
    for (const pop of floating) if (now - pop.born < STACK_MS && Math.abs(pop.x - x) < NEAR_X) taken.add(pop.row);
    for (let row = 0; row < ROWS; row++) if (!taken.has(row)) return row;
    return taken.size % ROWS;
  };

  const popUp = (event: GameEvent, box: DOMRect) => {
    const point = pointOf(event.key, box);
    if (point === undefined) return;
    makeRoom();
    const { element, body } = build(event.kind, event.points);
    const row = rowFor(point.x, performance.now());
    place(element, point.x, point.y - HOLD_ROOM - row * ROW_HEIGHT);
    pops.append(element);
    float(element, body, point.x, row);
  };

  const holdUp = (event: GameEvent, box: DOMRect) => {
    const held = holds.get(event.key);
    if (held !== undefined) {
      held.total += event.points;
      held.points.textContent = signed(held.total);
      return;
    }
    const point = pointOf(event.key, box);
    if (point === undefined) return;
    makeRoom();
    const { element, body, value } = build("hold", event.points);
    element.dataset.live = "";
    place(element, point.x, point.y);
    pops.append(element);
    holds.set(event.key, { element, body, points: value, total: event.points });
  };

  /** Turns the hold popup of `key` into `event`'s word, or floats it away as it is without one. */
  const endHold = (key: number, event?: GameEvent) => {
    const held = holds.get(key);
    if (held === undefined) return;
    holds.delete(key);
    if (event !== undefined) {
      held.element.dataset.kind = event.kind;
      held.body.querySelector(".game-pop-word")!.textContent = word(event.kind);
      held.points.textContent = signed(event.points);
      held.body.append(el("span", { class: "game-pop-detail", text: says(t()).held(signed(held.total)) }));
    }
    const point = pointOf(key, container.getBoundingClientRect());
    float(held.element, held.body, point?.x ?? 0, 0);
  };

  const setMultiplier = (next: number, comboAt: number) => {
    if (next === multiplier) return;
    const rose = next > multiplier;
    multiplier = next;
    badge.textContent = `×${next}`;
    badge.dataset.level = String(next);
    if (!rose) return;
    replay(badge, "is-rising");
    const say = says(t());
    burstText.textContent = say.burst(next);
    burstSub.textContent = say.inARow(comboAt);
    burst.dataset.level = String(next);
    replay(burst, "is-on");
    live.textContent = say.announce(next, comboAt);
  };

  const setCombo = (next: number) => {
    if (next === comboNow) return;
    if (next === 0 && comboNow >= BREAK_ALARM) replay(combo, "is-broken");
    comboNow = next;
    comboCount.textContent = number(next);
  };

  const clearPops = () => {
    for (const pop of [...floating]) remove(pop);
    for (const held of holds.values()) held.element.remove();
    holds.clear();
    burst.classList.remove("is-on");
  };

  const stat = (label: string, count: number, kind: string) =>
    el("span", { class: "game-stat", attrs: { "data-kind": kind }, children: [el("strong", { text: number(count) }), el("span", { text: label })] });

  return {
    setHidden(hidden) {
      if (layer.hidden === hidden) return;
      layer.hidden = hidden;
      if (hidden) clearPops();
      lastFrame = undefined;
    },

    setLevel(name) {
      level.textContent = name;
    },

    newTake() {
      card.hidden = true;
      target = shown = 0;
      score.textContent = "0";
      comboNow = 0;
      comboCount.textContent = "0";
      combo.classList.remove("is-broken");
      setMultiplier(1, 0);
    },

    show(events, current) {
      if (layer.hidden) return;
      const box = container.getBoundingClientRect();
      for (const event of events) {
        if (event.kind === "hold") holdUp(event, box);
        else if ((event.kind === "release" || event.kind === "short" || event.kind === "long") && holds.has(event.key)) endHold(event.key, event);
        else popUp(event, box);
        setCombo(event.combo);
        setMultiplier(event.multiplier, event.combo);
      }
      target = current.points;
    },

    endHolds() {
      for (const key of [...holds.keys()]) endHold(key);
    },

    summary(final, helped) {
      target = final.points;
      const say = says(t());
      card.replaceChildren(
        el("span", { class: "game-summary-eyebrow", text: say.complete }),
        el("strong", { class: "game-summary-score", text: number(Math.round(final.points)) }),
        el("span", { class: "game-summary-combo", text: say.bestCombo(final.bestCombo) }),
        ...(helped ? [el("span", { class: "game-summary-helped", text: say.helped })] : []),
        el("div", {
          class: "game-stats",
          children: [
            stat(say.stats.perfect, final.perfect, "perfect"),
            stat(say.stats.great, final.great, "great"),
            stat(say.stats.good, final.good, "good"),
            stat(say.stats.wrong, final.wrong, "wrong"),
            stat(say.stats.miss, final.miss, "miss"),
            ...(helped ? [stat(say.stats.late, final.late, "late")] : []),
            stat(say.stats.short, final.short, "short"),
            stat(say.stats.long, final.long, "long"),
          ],
        }),
        button(say.close, () => {
          card.hidden = true;
        }, { title: say.closeName, class: "outline" }),
      );
      card.hidden = false;
    },

    frame(now) {
      if (layer.hidden) return;
      const seconds = lastFrame === undefined ? 0 : Math.min(0.1, (now - lastFrame) / 1000);
      lastFrame = now;
      if (shown !== target) {
        shown += (target - shown) * (1 - Math.exp(-SCORE_RATE * seconds));
        if (Math.abs(target - shown) < 0.5) shown = target;
        const text = number(Math.round(shown));
        if (score.textContent !== text) score.textContent = text;
      }
      if (holds.size === 0) return;
      const box = container.getBoundingClientRect();
      for (const [key, held] of holds) {
        const point = pointOf(key, box);
        if (point !== undefined) place(held.element, point.x, point.y);
      }
    },

    dispose() {
      clearPops();
      layer.remove();
    },
  };
}
