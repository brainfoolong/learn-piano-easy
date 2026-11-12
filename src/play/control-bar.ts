/**
 * The control bar: the lower part of the player's floating bar, with the timeline, play, stop, speed,
 * transpose, the loop, zoom, the view's sideways move, fullscreen and the Expert key.
 * `src/app/shell.ts` places it.
 *
 * It drives the transport and the scene, and reads the transport back every frame. So the play button
 * and the timeline stay true whatever moved the song, a hotkey included. Each frame also runs the
 * transport's `tick`, which ends a loop's pass or the song.
 *
 * Decisions, and what each costs:
 * - Every control is the button component's: play is the primary button with its icon, and each tool is
 *   a small button with its symbol or its icon. Stop is a round key beside play, with its icon alone.
 *   It pauses and returns the song to where a load leaves it. `control-bar.css` draws the bar and the
 *   timeline from the tokens, so the bar follows the site's theme.
 * - The tools sit in named clusters: speed, transpose, loop, zoom and view. Each is a group with its
 *   name as a caption above a well. The caption costs the bar one line of height, taken from the scene.
 * - While the song plays, the bar fades out after `IDLE_MS` without a pointer move, a touch or a key.
 *   Any of them shows it again. It stays while paused, and while a control in it has keyboard focus.
 * - Speed steps by `SPEED_STEP` within the transport's range. The speed is not a setting, so each song
 *   and each reload starts at 100 %.
 * - Transpose is the `transposeOffset` setting. The bar writes it, and the transport follows every
 *   change, so the settings panel and the bar always agree.
 * - The loop, `restartSongOnEnd` and `renderOffset` are settings the transport follows. The loop
 *   buttons set its first or last measure to the one playing, and turn it on.
 * - The Loop button steps through three modes held in two settings, so it always agrees with the
 *   settings panel and a reload keeps it. Off has both off. Measures is `enableLoop`, the loop the
 *   settings set. Song is `restartSongOnEnd` alone, which repeats the whole song whatever the loop's
 *   measures are. The button reads "Loop", or "Repeat all" in the song mode.
 * - The zoom buttons write the zoom settings through `src/play/view.ts`. With `fitZoomOnNewSong` on,
 *   `load` fits the zoom to the new song.
 * - The Expert key ends the view cluster, at the row's end. It shows or hides the expert tools: the
 *   speed, transpose, the loop's measure buttons, Fit and the view's sideways move. It is the
 *   `expertControls` setting, so a reload keeps it. Hidden, the bar keeps play, stop, the Loop button,
 *   the zoom and fullscreen. The hidden tools' hotkeys still run.
 * - The Expert key shows an icon alone, which costs a learner one hover to read its name. With every
 *   tool shown, the German row keeps one line from about 1080 pixels. Narrower, the view cluster wraps
 *   onto a second line, which costs the scene that line's height.
 * - A hidden speed or transpose still shows while it is off its default, so the song never plays
 *   changed without the bar saying so. That costs a cluster that comes and goes with its value.
 * - The view's sideways move hides under the flat camera, which ignores it. A camera the learner
 *   dragged ignores it too, and there the buttons stay, since a double-click hands the camera back.
 * - Below 1024 pixels wide, or on a short window, the row keeps play, stop and the speed. The other
 *   clusters fold into a sheet above the row, which the More button opens and closes. Every tool then
 *   stays one tap away, and a tablet's touch targets never wrap the row.
 * - The bar draws no surface of its own. The floating bar it sits in is the surface, and fades with it.
 * - Fullscreen covers the whole app, so the player's bar and the panels stay at hand. Its button sits
 *   before the Expert key, and hides where the browser offers no fullscreen, as on an iPhone.
 * - Each button runs an action of `src/play/hotkeys.ts`, so a hotkey does what its button does. A key
 *   inside an open dialog runs no hotkey, so the dialog to rebind them can take any key.
 * - The bar lives as long as the player, so its texts follow the live locale of `src/i18n/live.ts`.
 *   A fixed label is localized once. A text that follows state, such as Play and Pause, is rewritten
 *   on each change of the locale.
 *
 * Bounds: one animation frame callback, and one listener each for pointer,
 * fullscreen and locale changes. Keys have two: one wakes the bar, one runs the hotkeys. `run(false)` stops the
 * frame and both key listeners while the player's page hides.
 */
import type { Song } from "../midi/song";
import type { PianoScene } from "../render/scene";
import type { SettingsStore } from "../settings/store";
import { localize, onLocale, t, type Pick as Choose } from "../i18n/live";
import { button } from "../ui/components/button";
import { el } from "../ui/dom";
import { icon, type IconName } from "../ui/icons/icons";
import "./control-bar.css";
import { type ActionId, type ActionRuns, createHotkeys, SEEK_STEP } from "./hotkeys";
import { LOOP_SETTINGS, loopSpec } from "./loop";
import { createTimeline } from "./timeline";
import { MAX_SPEED, MIN_SPEED, type Transport } from "./transport";
import { fitToSong, SHIFT_STEP, zoomIn, zoomOut } from "./view";

/** How long the bar waits without a pointer move, a touch or a key before it fades while playing. */
export const IDLE_MS = 3000;
/** How much one speed step adds or takes away. */
export const SPEED_STEP = 0.05;

/** The Loop button's modes, in the order its clicks step through them. */
type LoopMode = "off" | "measures" | "song";

export interface ControlBar {
  readonly element: HTMLElement;
  /** Loads `song` into the transport, ready to play from its start. */
  load(song: Song): void;
  /** Starts or stops the frame loop and the keys, as while the player's page hides. */
  run(on: boolean): void;
  /** Gives the Play button the focus, so Space plays and pauses through it. A hidden bar keeps the focus where it is. */
  focusPlay(): void;
  dispose(): void;
}

/** A control bar for `transport` and `scene`, whose fullscreen button covers `app`. */
export function createControlBar(transport: Transport, scene: Pick<PianoScene, "shiftView">, settings: SettingsStore, app: HTMLElement): ControlBar {
  const timeline = createTimeline(transport, settings);

  const play = button({ label: "", variant: "primary", icon: "play", onClick: () => runs.play() });
  play.classList.add("control-play");
  const stop = button({ label: "", icon: "square", onClick: () => runs.stop() });
  stop.querySelector(".btn__label")?.remove();
  stop.classList.add("control-stop");
  localize(stop, (m) => m.player.bar.controls.stop, "aria-label");
  localize(stop, (m) => m.player.bar.actions.stop, "title");
  const speedOut = localize(el("output", { class: "readout" }), (m) => m.player.bar.controls.speed, "aria-label");
  const transposeOut = localize(el("output", { class: "readout" }), (m) => m.player.bar.controls.transpose, "aria-label");
  const stepSpeed = (by: number) => {
    const next = Math.round((transport.speed + by) / SPEED_STEP) * SPEED_STEP;
    transport.speed = Math.min(MAX_SPEED, Math.max(MIN_SPEED, next));
  };
  const stepTranspose = (by: number) => settings.set("transposeOffset", settings.get("transposeOffset") + by);
  const loop = tool("", () => runs.loop());
  loop.classList.add("control-word", "control-toggle");
  /** The Loop button's mode, read from the two settings that hold it. */
  const loopMode = (): LoopMode => (settings.get("enableLoop") ? "measures" : settings.get("restartSongOnEnd") ? "song" : "off");
  /** The measure the song time is in, counted from 1. */
  const measureNow = () => (transport.song?.tempoMap.positionAt(Math.max(0, transport.time)).measure ?? 0) + 1;
  const loopHere = (id: "loopStart" | "loopEnd") => {
    settings.set(id, measureNow());
    settings.set("enableLoop", true);
  };
  const fullscreen = tool("⛶", () => runs.fullscreen());
  fullscreen.hidden = !document.fullscreenEnabled;

  // Every hotkey runs what a button runs, so a key and a click never differ.
  const runs: ActionRuns = {
    // The song plays only in the player mode. Free play and pitch practice set it aside.
    play: () => {
      if (settings.get("playMode") === "player") transport.toggle();
    },
    stop: () => transport.stop(),
    seekBack: () => transport.seek(transport.time - SEEK_STEP),
    seekForward: () => transport.seek(transport.time + SEEK_STEP),
    toStart: () => transport.seek(transport.start),
    faster: () => stepSpeed(SPEED_STEP),
    slower: () => stepSpeed(-SPEED_STEP),
    transposeUp: () => stepTranspose(1),
    transposeDown: () => stepTranspose(-1),
    loop: () => {
      const mode = loopMode();
      if (mode === "off") settings.set("enableLoop", true);
      else if (mode === "measures") {
        settings.set("restartSongOnEnd", true);
        settings.set("enableLoop", false);
      } else settings.set("restartSongOnEnd", false);
    },
    loopStart: () => loopHere("loopStart"),
    loopEnd: () => loopHere("loopEnd"),
    zoomIn: () => zoomIn(settings),
    zoomOut: () => zoomOut(settings),
    fit: () => transport.song && fitToSong(settings, transport.song),
    viewLeft: () => scene.shiftView(-SHIFT_STEP),
    viewRight: () => scene.shiftView(SHIFT_STEP),
    fullscreen: () => {
      if (document.fullscreenEnabled) void toggleFullscreen(app);
    },
  };
  const hotkeys = createHotkeys(runs, settings);
  const onKey = (event: KeyboardEvent) => {
    if (event.defaultPrevented || insideDialog(event.target)) return;
    if (hotkeys.handle(event)) event.preventDefault();
  };

  /**
   * A cluster of the bar: its name as a caption, above a well that holds its buttons and its readout.
   * The group carries the name for assistive tools, so the caption itself is hidden from them.
   */
  const group = (name: Choose, ...children: Node[]) => {
    const caption = localize(el("span", { class: "control-group__label", attrs: { "aria-hidden": "true" } }), name);
    const well = el("div", { class: "control-well", children });
    return localize(el("div", { class: "control-group", attrs: { role: "group" }, children: [caption, well] }), name, "aria-label");
  };
  /** A button that runs the action `id`, and whose tooltip names it in the live locale. */
  const act = (symbol: string, id: ActionId) => titled(tool(symbol, runs[id]), (m) => m.player.bar.actions[id]);
  /** The same for a button that shows an icon in place of a symbol. */
  const actIcon = (glyph: IconName, id: ActionId) => titled(iconTool(glyph, runs[id]), (m) => m.player.bar.actions[id]);
  const fit = titled(tool("", runs.fit), (m) => m.player.bar.actions.fit);
  fit.classList.add("control-word");
  localize(labelOf(fit), (m) => m.player.bar.controls.fit);

  const speedGroup = expert(group((m) => m.player.bar.controls.speed, act("−", "slower"), speedOut, act("+", "faster")));
  const transposeGroup = expert(group((m) => m.player.bar.controls.transpose, act("♭", "transposeDown"), transposeOut, act("♯", "transposeUp")));
  // The Expert key is an icon, so the row keeps one line with every tool shown. Its tooltip says what a click does.
  const expertButton = iconTool("sliders-horizontal", () => settings.set("expertControls", !settings.get("expertControls")));
  expertButton.classList.add("control-toggle");
  localize(expertButton, (m) => m.player.bar.controls.expert, "aria-label");
  const viewGroup = group(
    (m) => m.player.bar.controls.view,
    shifter(expert(actIcon("chevron-left", "viewLeft"))),
    shifter(expert(actIcon("chevron-right", "viewRight"))),
    fullscreen,
    expertButton,
  );

  // Below the desktop width the tools past the speed fold into a sheet, which the More button opens above the row.
  const more = el("div", {
    class: "control-more",
    attrs: { id: "control-more" },
    children: [
      transposeGroup,
      group((m) => m.player.bar.controls.loop, expert(act("[", "loopStart")), loop, expert(act("]", "loopEnd"))),
      el("div", { class: "spacer" }),
      group((m) => m.player.bar.controls.zoom, act("−", "zoomOut"), act("+", "zoomIn"), expert(fit)),
      viewGroup,
    ],
  });
  const moreButton = tool("⋯", () => {
    const open = moreButton.getAttribute("aria-expanded") !== "true";
    moreButton.setAttribute("aria-expanded", String(open));
    element.classList.toggle("is-more-open", open);
  });
  moreButton.classList.add("control-more-toggle");
  moreButton.setAttribute("aria-expanded", "false");
  moreButton.setAttribute("aria-controls", "control-more");
  titled(moreButton, (m) => m.player.bar.controls.more);

  const element = el("div", {
    class: "control-bar",
    children: [
      timeline.element,
      el("div", {
        class: "control-row",
        children: [
          el("div", { class: "control-transport", children: [play, stop] }),
          speedGroup,
          moreButton,
          more,
        ],
      }),
    ],
  });

  // Transpose follows its setting, from the bar or from the settings panel.
  const showTranspose = () => {
    const semitones = settings.get("transposeOffset");
    transport.transpose = semitones;
    transposeOut.textContent = semitones > 0 ? `+${semitones}` : String(semitones);
    transposeGroup.classList.toggle("is-changed", semitones !== 0);
  };
  // The Expert button and the tools it shows follow their setting.
  const showExpert = () => {
    const on = settings.get("expertControls");
    element.classList.toggle("is-expert", on);
    expertButton.setAttribute("aria-pressed", String(on));
    expertButton.title = t().player.bar.controls.expertTitles[on ? "on" : "off"];
  };
  // The flat camera ignores the view's sideways move, so its buttons leave the bar there.
  const showCamera = () => element.classList.toggle("is-flat", settings.get("cameraPreset") === "flat");
  // The loop, the song's end and the picture offset follow their settings too.
  const showLoopMode = () => {
    const mode = loopMode();
    const words = t().player.bar.controls;
    const label = mode === "song" ? words.repeatAll : words.loop;
    labelOf(loop).textContent = label;
    loop.setAttribute("aria-label", label);
    loop.title = words.loopTitles[mode];
    loop.setAttribute("aria-pressed", String(mode !== "off"));
  };
  const showLoop = () => {
    transport.loop = loopSpec(settings);
    showLoopMode();
    timeline.refresh();
  };
  const showRestart = () => {
    transport.restartOnEnd = settings.get("restartSongOnEnd");
    showLoopMode();
  };
  const unsubscribe = settings.subscribe((id) => {
    if (id === "transposeOffset") showTranspose();
    else if (id === "expertControls") showExpert();
    else if (id === "cameraPreset") showCamera();
    else if (LOOP_SETTINGS.has(id)) showLoop();
    else if (id === "restartSongOnEnd") showRestart();
    else if (id === "renderOffset") transport.renderOffset = settings.get("renderOffset");
    else if (id === "leadIn") transport.leadIn = settings.get("leadIn");
  });
  transport.leadIn = settings.get("leadIn");
  showTranspose();
  showExpert();
  showCamera();
  showLoop();
  showRestart();
  transport.renderOffset = settings.get("renderOffset");

  // Every frame shows what the transport does now, however it got there.
  let shownPlaying: boolean | undefined;
  let shownSpeed = Number.NaN;
  let frame = 0;
  const showPlaying = () => {
    const text = transport.playing ? t().player.bar.controls.pause : t().player.bar.controls.play;
    labelOf(play).textContent = text;
    play.querySelector(".icon")?.replaceWith(icon(transport.playing ? "pause" : "play"));
    play.title = text;
    play.setAttribute("aria-label", text);
  };
  const showSpeed = () => {
    const percent = Math.round(transport.speed * 100);
    speedOut.textContent = t().player.bar.controls.speedPercent(percent);
    speedGroup.classList.toggle("is-changed", percent !== 100);
  };
  showPlaying();
  const tick = () => {
    transport.tick();
    timeline.update();
    if (transport.playing !== shownPlaying) {
      shownPlaying = transport.playing;
      showPlaying();
      wake();
    }
    if (transport.speed !== shownSpeed) {
      shownSpeed = transport.speed;
      showSpeed();
    }
    frame = requestAnimationFrame(tick);
  };

  // While playing, the bar fades after a pause in the learner's activity.
  let idleTimer: ReturnType<typeof setTimeout> | undefined;
  const wake = () => {
    element.classList.remove("idle");
    clearTimeout(idleTimer);
    if (transport.playing) idleTimer = setTimeout(() => element.classList.add("idle"), IDLE_MS);
  };
  const onFullscreen = () => {
    const on = document.fullscreenElement !== null;
    fullscreen.title = on ? t().player.bar.controls.leaveFullScreen : t().player.bar.actions.fullscreen;
    fullscreen.setAttribute("aria-label", fullscreen.title);
  };
  onFullscreen();
  // A change of the locale rewrites every text that follows the bar's state.
  const stopLocale = onLocale(() => {
    showLoopMode();
    showExpert();
    showPlaying();
    showSpeed();
    onFullscreen();
  });
  window.addEventListener("pointermove", wake);
  window.addEventListener("pointerdown", wake);
  window.addEventListener("keydown", wake);
  window.addEventListener("keydown", onKey);
  document.addEventListener("fullscreenchange", onFullscreen);
  frame = requestAnimationFrame(tick);
  let running = true;

  return {
    element,
    load(song) {
      transport.load(song);
      timeline.refresh();
      if (settings.get("fitZoomOnNewSong")) fitToSong(settings, song);
    },
    run(on) {
      if (on === running) return;
      running = on;
      if (on) {
        window.addEventListener("keydown", wake);
        window.addEventListener("keydown", onKey);
        frame = requestAnimationFrame(tick);
        return;
      }
      cancelAnimationFrame(frame);
      window.removeEventListener("keydown", wake);
      window.removeEventListener("keydown", onKey);
    },
    focusPlay: () => play.focus(),
    dispose() {
      cancelAnimationFrame(frame);
      clearTimeout(idleTimer);
      unsubscribe();
      stopLocale();
      timeline.dispose();
      window.removeEventListener("pointermove", wake);
      window.removeEventListener("pointerdown", wake);
      window.removeEventListener("keydown", wake);
      window.removeEventListener("keydown", onKey);
      document.removeEventListener("fullscreenchange", onFullscreen);
      element.remove();
    },
  };
}

/** A small ghost button of the bar, showing `symbol`, that runs `onClick`. */
function tool(symbol: string, onClick: () => void): HTMLButtonElement {
  return button({ label: symbol, variant: "ghost", size: "small", onClick });
}

/** The same button showing the icon `glyph` alone. Its caller gives it its accessible name. */
function iconTool(glyph: IconName, onClick: () => void): HTMLButtonElement {
  const node = button({ label: "", variant: "ghost", size: "small", icon: glyph, onClick });
  node.querySelector(".btn__label")?.remove();
  return node;
}

/** Marks `node` as an expert tool, which shows only while the Expert button is on. */
function expert<E extends Element>(node: E): E {
  node.classList.add("control-expert");
  return node;
}

/** Marks `node` as a button of the view's sideways move, which hides under the flat camera. */
function shifter<E extends Element>(node: E): E {
  node.classList.add("control-shift");
  return node;
}

/** The element that holds a component button's visible label. */
function labelOf(node: HTMLButtonElement): Element {
  return node.querySelector(".btn__label") ?? node;
}

/** Writes the text `pick` chooses into `node`'s tooltip and accessible name, now and on each change of the locale. */
function titled<E extends Element>(node: E, pick: Choose): E {
  localize(node, pick, "title");
  return localize(node, pick, "aria-label");
}

/** Whether `target` is inside an open dialog, where keys belong to the dialog and run no hotkey. */
function insideDialog(target: EventTarget | null): boolean {
  return target instanceof Element && target.closest("dialog, [role=dialog]") !== null;
}

/** Enters fullscreen with `app`, or leaves it. A refusal, such as without a user gesture, is ignored. */
async function toggleFullscreen(app: HTMLElement): Promise<void> {
  try {
    if (document.fullscreenElement !== null) await document.exitFullscreen();
    else await app.requestFullscreen();
  } catch {
    // The browser said no. The button stays as it was, and there is nothing to undo.
  }
}
