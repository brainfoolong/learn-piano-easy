/**
 * The overlays: the frames per second, the tempo, and a card with the details of the note under the
 * pointer, drawn as DOM over the scene.
 *
 * Decisions, and what each costs:
 * - The overlays are plain elements, not part of the 3D scene, so their text stays sharp and the
 *   learner's browser zoom applies to it.
 * - The frame rate is the mean over half-second windows, and the text changes only at a window's end,
 *   so it is readable and costs one DOM write per window.
 * - The tempo text changes only when its rounded value does.
 * - The note card follows the pointer and sits beside it, flipped to stay inside the scene.
 * - The texts come from the live catalog's `player.shell.overlays`. A change of locale writes the tempo
 *   at once, and the frame rate and the card at their next change.
 *
 * Bounds: three elements, and one DOM write per window or per change.
 */
import { localize, onLocale, t } from "../i18n/live";
import type { Note } from "../midi/song";
import { noteName } from "../theory/note-names";
import { el } from "../ui/dom";
import "./overlays.css";

export interface Overlays {
  readonly element: HTMLElement;
  /** Records a frame that lasted `seconds`. */
  frame(seconds: number): void;
  showFps(on: boolean): void;
  showBpm(on: boolean): void;
  /** Shows `bpm`, or nothing when it is undefined. */
  setBpm(bpm: number | undefined): void;
  /** Shows the card of `note` beside `(x, y)` in the scene's own pixels, or hides it when undefined. */
  showNote(note: Note | undefined, x: number, y: number): void;
  dispose(): void;
}

/** The length of one frame-rate window, in seconds. */
const FPS_WINDOW = 0.5;
/** The card's gap from the pointer, in CSS pixels. */
const CARD_GAP = 14;

/** The overlays, added to `container` over the scene. */
export function createOverlays(container: HTMLElement): Overlays {
  const fps = localize(el("div", { class: "overlay-stat" }), (m) => m.player.shell.overlays.fps, "aria-label");
  const bpm = localize(el("div", { class: "overlay-stat" }), (m) => m.player.shell.overlays.tempo, "aria-label");
  const stats = el("div", { class: "overlay-stats", children: [fps, bpm] });
  const card = el("div", { class: "note-card", attrs: { role: "tooltip" } });
  const element = el("div", { class: "overlays", children: [stats, card] });
  fps.hidden = true;
  bpm.hidden = true;
  card.hidden = true;
  container.append(element);

  let windowTime = 0;
  let windowFrames = 0;
  let shownBpm: number | undefined;
  let bpmValue: number | undefined;
  let bpmOn = false;
  let shownNote: Note | undefined;

  const drawBpm = () => {
    const rounded = bpmValue === undefined ? undefined : Math.round(bpmValue);
    bpm.hidden = !bpmOn || rounded === undefined;
    if (rounded === shownBpm) return;
    shownBpm = rounded;
    bpm.textContent = rounded === undefined ? "" : t().player.shell.overlays.bpmValue(rounded);
  };
  // A change of locale writes the tempo again, and builds the next card afresh. The frame rate follows at its next window.
  const stopLocale = onLocale(() => {
    shownBpm = undefined;
    shownNote = undefined;
    drawBpm();
  });

  return {
    element,

    frame(seconds) {
      if (fps.hidden) return;
      windowTime += seconds;
      windowFrames++;
      if (windowTime < FPS_WINDOW) return;
      fps.textContent = t().player.shell.overlays.fpsValue(Math.round(windowFrames / windowTime));
      windowTime = 0;
      windowFrames = 0;
    },

    showFps(on) {
      fps.hidden = !on;
      fps.textContent = on ? t().player.shell.overlays.fpsNone : "";
      windowTime = 0;
      windowFrames = 0;
    },

    showBpm(on) {
      bpmOn = on;
      drawBpm();
    },

    setBpm(value) {
      bpmValue = value;
      drawBpm();
    },

    showNote(note, x, y) {
      if (!note) {
        card.hidden = true;
        shownNote = undefined;
        return;
      }
      if (note !== shownNote) {
        shownNote = note;
        const say = t().player.shell.overlays;
        card.replaceChildren(
          el("strong", { text: `${noteName(note.pitch)} (${note.pitch})` }),
          el("span", { text: say.track(note.track + 1, note.channel + 1) }),
          el("span", { text: say.velocity(note.velocity) }),
          el("span", { text: say.timing(note.start, note.end - note.start) }),
        );
      }
      card.hidden = false;
      const { clientWidth: w, clientHeight: h } = container;
      const flipX = x + CARD_GAP + card.offsetWidth > w;
      const flipY = y + CARD_GAP + card.offsetHeight > h;
      card.style.left = `${flipX ? x - CARD_GAP - card.offsetWidth : x + CARD_GAP}px`;
      card.style.top = `${flipY ? y - CARD_GAP - card.offsetHeight : y + CARD_GAP}px`;
    },

    dispose() {
      stopLocale();
      element.remove();
    },
  };
}
