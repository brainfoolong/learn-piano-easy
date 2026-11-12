/**
 * The note scroll: a drag on the lanes grabs the notes and moves the song with them, as the timeline does.
 *
 * Decisions, and what each costs:
 * - The song time under the pointer is held where the drag began. Each move seeks to the time that puts
 *   it back under the pointer, so the notes follow the pointer whatever the camera or direction.
 * - A press on the lanes takes the pointer from the camera, so a drag there scrolls and never turns the
 *   view. A press beside the lanes, a right or middle drag, a pinch and the wheel still move the camera.
 * - A press that moves less than `CLICK_SLOP` pixels stays a click, so the fingering editor still selects
 *   the note under it. A real drag swallows the click that ends it.
 * - A song that plays pauses while the drag holds it, so the grabbed note stays under the pointer. It
 *   plays on when the drag ends.
 * - With `playNotesOnScrollEnabled`, a drag scrubs, so the notes it crosses sound, as on the timeline.
 * - The cursor shows a hand over the lanes, open to grab and closed while dragging.
 */
import { CLICK_SLOP } from "../theory/fingering-editor";
import type { Transport } from "../play/transport";
import type { PianoScene } from "../render/scene";
import type { SettingsStore } from "../settings/store";

/** What the scroll drives: the transport's time and its play and seek controls. */
export type ScrollTransport = Pick<Transport, "song" | "time" | "playing" | "play" | "pause" | "seek" | "scrub">;

/** Scrolls `transport`'s song by drags on `scene`'s lanes. Returns what stops it. */
export function attachNoteScroll(
  scene: Pick<PianoScene, "canvas" | "laneAt">,
  transport: ScrollTransport,
  settings: Pick<SettingsStore, "get">,
): () => void {
  const canvas = scene.canvas;
  /** The drag in progress: its pointer, where it began, the song time it holds and whether it moved. */
  let drag: { id: number; x: number; y: number; held: number; moved: boolean; resume: boolean } | undefined;
  /** Whether the next click ends a drag, so it selects nothing. */
  let swallowClick = false;

  const onDown = (event: PointerEvent) => {
    swallowClick = false;
    if (drag !== undefined || transport.song === undefined) return;
    if (event.pointerType === "mouse" && event.button !== 0) return;
    const point = scene.laneAt(event.clientX, event.clientY);
    if (!point?.onLanes) return;
    // The camera's controls listen on the canvas in the bubble phase, so this capture listener runs first.
    event.stopImmediatePropagation();
    event.preventDefault();
    canvas.setPointerCapture(event.pointerId);
    const held = transport.time + point.ahead;
    drag = { id: event.pointerId, x: event.clientX, y: event.clientY, held, moved: false, resume: false };
    canvas.style.cursor = "grabbing";
  };

  /** Shows the open hand while a mouse is over the lanes. */
  const hover = (event: PointerEvent) => {
    const over = event.pointerType === "mouse" && scene.laneAt(event.clientX, event.clientY)?.onLanes === true;
    canvas.style.cursor = over ? "grab" : "";
  };

  const onMove = (event: PointerEvent) => {
    if (drag === undefined) return hover(event);
    if (event.pointerId !== drag.id) return;
    if (!drag.moved) {
      if (Math.hypot(event.clientX - drag.x, event.clientY - drag.y) <= CLICK_SLOP) return;
      drag.moved = true;
      drag.resume = transport.playing;
      transport.pause();
    }
    const point = scene.laneAt(event.clientX, event.clientY);
    if (point === undefined) return;
    const target = drag.held - point.ahead;
    if (settings.get("playNotesOnScrollEnabled")) transport.scrub(target);
    else transport.seek(target);
  };

  const onUp = (event: PointerEvent) => {
    if (drag === undefined || event.pointerId !== drag.id) return;
    swallowClick = drag.moved;
    if (drag.resume) transport.play();
    drag = undefined;
    hover(event);
  };

  const onClick = (event: MouseEvent) => {
    if (!swallowClick) return;
    swallowClick = false;
    event.stopImmediatePropagation();
  };

  const onLeave = () => {
    if (drag === undefined) canvas.style.cursor = "";
  };

  canvas.addEventListener("pointerdown", onDown, true);
  canvas.addEventListener("pointermove", onMove);
  canvas.addEventListener("pointerup", onUp);
  canvas.addEventListener("pointercancel", onUp);
  canvas.addEventListener("pointerleave", onLeave);
  canvas.addEventListener("click", onClick, true);
  return () => {
    canvas.removeEventListener("pointerdown", onDown, true);
    canvas.removeEventListener("pointermove", onMove);
    canvas.removeEventListener("pointerup", onUp);
    canvas.removeEventListener("pointercancel", onUp);
    canvas.removeEventListener("pointerleave", onLeave);
    canvas.removeEventListener("click", onClick, true);
    canvas.style.cursor = "";
    drag = undefined;
  };
}
