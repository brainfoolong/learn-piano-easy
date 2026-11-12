/**
 * The on-screen piano: a mouse click or a touch on a key of the 3D piano plays its note on the input bus.
 *
 * The scene picks the key under the pointer through `keyAt`. Each pointer, a mouse or one finger, holds
 * one key at a time, so several fingers play a chord.
 *
 * Decisions, and what each costs:
 * - A press on a key takes the pointer from the camera, so playing never turns the view. A press beside
 *   the keys still drags the camera. A double click on a key is kept from the camera too, so a note
 *   played twice never resets the view.
 * - A pointer that slides onto another key lets the first go and plays the second, as a glissando does.
 *   Sliding off the keys lets the note go.
 * - Every note plays at velocity `POINTER_VELOCITY`, because a click has no force to read.
 * - `clickablePiano` turns the on-screen piano off, and the camera then takes every press.
 */
import type { PianoScene } from "../render/scene";
import type { SettingsStore } from "../settings/store";
import type { InputBus } from "./input-bus";

/** The velocity of every note the pointer plays. */
export const POINTER_VELOCITY = 90;

/** Plays the keys of `scene`'s piano under the pointer on `bus`. Returns what stops it. */
export function attachPointerPiano(
  scene: Pick<PianoScene, "canvas" | "keyAt">,
  bus: InputBus,
  settings: Pick<SettingsStore, "get">,
): () => void {
  const canvas = scene.canvas;
  /** The key each pointer that pressed a key holds, by pointer id, or undefined once it slid off the keys. */
  const holding = new Map<number, number | undefined>();
  let lastDownOnKey = false;

  const move = (id: number, pitch: number | undefined) => {
    const before = holding.get(id);
    if (before === pitch) return;
    if (before !== undefined) bus.noteOff(before, "pointer");
    holding.set(id, pitch);
    if (pitch !== undefined) bus.noteOn(pitch, POINTER_VELOCITY, "pointer");
  };

  const onDown = (event: PointerEvent) => {
    lastDownOnKey = false;
    if (!settings.get("clickablePiano") || (event.pointerType === "mouse" && event.button !== 0)) return;
    const pitch = scene.keyAt(event.clientX, event.clientY);
    if (pitch === undefined) return;
    lastDownOnKey = true;
    // The camera's controls listen on the canvas in the bubble phase, so this capture listener runs first.
    event.stopImmediatePropagation();
    event.preventDefault();
    canvas.setPointerCapture(event.pointerId);
    move(event.pointerId, pitch);
  };
  const onMove = (event: PointerEvent) => {
    if (!holding.has(event.pointerId)) return;
    move(event.pointerId, scene.keyAt(event.clientX, event.clientY));
  };
  const onUp = (event: PointerEvent) => {
    if (!holding.has(event.pointerId)) return;
    const pitch = holding.get(event.pointerId);
    holding.delete(event.pointerId);
    if (pitch !== undefined) bus.noteOff(pitch, "pointer");
  };
  const onDoubleClick = (event: MouseEvent) => {
    if (lastDownOnKey) event.stopImmediatePropagation();
  };

  canvas.addEventListener("pointerdown", onDown, true);
  canvas.addEventListener("pointermove", onMove);
  canvas.addEventListener("pointerup", onUp);
  canvas.addEventListener("pointercancel", onUp);
  canvas.addEventListener("dblclick", onDoubleClick, true);
  return () => {
    canvas.removeEventListener("pointerdown", onDown, true);
    canvas.removeEventListener("pointermove", onMove);
    canvas.removeEventListener("pointerup", onUp);
    canvas.removeEventListener("pointercancel", onUp);
    canvas.removeEventListener("dblclick", onDoubleClick, true);
    holding.clear();
    bus.releaseAll("pointer");
  };
}
