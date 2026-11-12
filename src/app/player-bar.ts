/**
 * The player's bar: the song's title and *Songs* as its actions, and *Guide*, *Tracks*, *Settings* and
 * *About* as its menu. `src/app/shell.ts` places them and gives each button its action.
 *
 * Decisions, and what each costs:
 * - **The title comes first, and *Songs* stands at the row's end.** The player's top bar has no site
 *   links, so the title sits beside the brand, and *Songs* sits next to the menu it leads.
 * - **The site builds the bar with the player's view,** before the player's code loads. The top bar
 *   then has its final size at its first paint, and nothing shifts when the player starts.
 * - **A click before the player starts waits for it.** The bar keeps the last such click, and `start`
 *   runs it once the player has built every part an action may reach. That costs one remembered
 *   action, and no click is lost.
 * - **The Guide button keeps its place while the song has no guide.** It is invisible then, so the
 *   buttons beside it never move when a guide loads. That costs an empty gap in the bar for a song
 *   without one. The top bar's menu drops the gap, since it is closed while a guide loads.
 * - **The title starts as the demo song's,** which the player opens first unless it reopens a song.
 *   The shell keeps it on the open song from then on, in the live locale.
 * - **Every button carries an icon and a label.** `src/app/shell.css` shows a menu button as its icon
 *   alone where the bar is one row, so the title keeps the room. Its tooltip then shows the label. That
 *   costs a learner one hover to read a name, and a touch screen shows the labels in the menu instead.
 * - **The title repeats itself as its own tooltip,** since a long one ends in an ellipsis. One
 *   observer copies the text there on each change.
 * - **The Tracks button shows the layers icon,** since a song's tracks lie over each other like layers.
 * - **The dock is the bar's lower part.** The site shows it under the top bar's row, inside the same
 *   floating bar, and the shell puts the control bar in it. Its `data-edge` says at which edge of the
 *   window the bar floats, and `src/app/shell.css` moves the site's bar there.
 */
import { localize, t, type Pick } from "../i18n/live";
import { button, type ButtonVariant } from "../ui/components/button";
import { attachTip } from "../ui/components/tooltip";
import { el } from "../ui/dom";
import type { IconName } from "../ui/icons/icons";

/** What a button of the bar does. */
export type BarAction = "songs" | "guide" | "tracks" | "settings" | "about";

/** The player's bar, built before the player starts. */
export interface PlayerBar {
  /** The view's actions, which the top bar's page slot shows. */
  slot: HTMLElement;
  /** The view's menu, which the top bar shows in a row when wide and in its menu otherwise. */
  menuSlot: HTMLElement;
  /** The bar's lower part, under the top bar's row, which holds the control bar. */
  dock: HTMLElement;
  /** The row of the title and *Songs*. */
  row: HTMLElement;
  /** The menu's buttons, in order. */
  items: HTMLButtonElement[];
  /** The open song's title, whose accessible name is fixed. */
  title: HTMLElement;
  /** The *Settings* button, whose `aria-expanded` follows the panel. */
  settings: HTMLButtonElement;
  /** Gives the button of `action` its handler. */
  on(action: BarAction, run: () => void): void;
  /** Starts the buttons, and runs the last click made before, if its button has a handler. */
  start(): void;
  /** Shows the *Guide* button, or keeps its place empty. */
  showGuide(shown: boolean): void;
}

/** Builds the player's bar, whose buttons wait for `start`. */
export function playerBar(): PlayerBar {
  const handlers = new Map<BarAction, () => void>();
  let started = false;
  // The last click before `start`, which `start` runs.
  let waiting: BarAction | null = null;
  const press = (action: BarAction) => {
    if (started) handlers.get(action)?.();
    else waiting = action;
  };
  /** A quiet button of the menu, which a wide bar shows as its icon with a tooltip. */
  const item = (action: BarAction, label: Pick, glyph: IconName) => withTip(barButton(label, () => press(action), "ghost", glyph), label);

  const title = localize(el("span", { class: "song-title" }), (m) => m.player.shell.topbar.openSong, "aria-label");
  title.textContent = t().player.shell.topbar.demoSong;
  // A long title ends in an ellipsis, so the whole of it shows under the pointer.
  const showWhole = () => void (title.title = title.textContent ?? "");
  new MutationObserver(showWhole).observe(title, { childList: true, characterData: true, subtree: true });
  showWhole();
  const row = el("div", {
    class: "player-bar",
    children: [title, barButton((m) => m.player.shell.topbar.songs, () => press("songs"), "secondary", "keyboard-music")],
  });
  const guide = item("guide", (m) => m.player.shell.topbar.guide, "sparkles");
  const settings = item("settings", (m) => m.player.shell.topbar.settings, "settings");
  settings.setAttribute("aria-expanded", "false");
  const items = [guide, item("tracks", (m) => m.player.shell.topbar.tracks, "layers"), settings, item("about", (m) => m.player.shell.topbar.about, "info")];

  // `src/app/shell.css` makes an absent button invisible, which also takes it out of the tab order.
  const showGuide = (shown: boolean) => void guide.classList.toggle("is-absent", !shown);
  showGuide(false);
  return {
    slot: el("div", { class: "player-actions", children: [row] }),
    menuSlot: el("div", { class: "player-menu", children: items }),
    dock: el("div", { class: "player-dock", attrs: { "data-edge": "top" } }),
    row,
    items,
    title,
    settings,
    on: (action, run) => void handlers.set(action, run),
    start: () => {
      started = true;
      const action = waiting;
      waiting = null;
      if (action !== null) handlers.get(action)?.();
    },
    showGuide,
  };
}

/** A small button of the bar with its icon, whose label follows the live locale. */
function barButton(label: Pick, onClick: () => void, variant: ButtonVariant, glyph: IconName): HTMLButtonElement {
  const node = button({ label: "", variant, size: "small", onClick, icon: glyph });
  const text = node.querySelector(".btn__label");
  if (text !== null) localize(text, label);
  return node;
}

/**
 * Gives `node` a tooltip below it that repeats its label in the live locale. The tip is hidden from
 * assistive tools, since the label is already the button's accessible name.
 */
function withTip(node: HTMLButtonElement, label: Pick): HTMLButtonElement {
  localize(attachTip(node, node, label(t()), { placement: "bottom" }), label);
  return node;
}
