/**
 * The on-screen piano: a mouse click or a touch on a key of a 3D piano presses that key.
 *
 * The caller picks the key under a point through `keyAt`, and says what a press and a release do. The
 * player's core sends them to the input bus, and the piano view of `src/render/piano-keys.ts` to its
 * step. Each pointer, a mouse or one finger, holds one key at a time, so several fingers play a chord.
 *
 * Decisions, and what each costs:
 * - A press on a key takes the pointer from the camera, so playing never turns the view. A press beside
 *   the keys still drags the camera. A double click on a key is kept from the camera too, so a note
 *   played twice never resets the view.
 * - A pointer that slides onto another key lets the first go and plays the second, as a glissando does.
 *   Sliding off the keys lets the note go.
 * - Every note plays at velocity `POINTER_VELOCITY`, because a click has no force to read.
 * - `enabled` is read at each press, so a setting such as `clickablePiano` turns the piano off at once.
 *   The camera then takes every press.
 * - Stopping it lets go every key a pointer still holds, so no note hangs.
 */

/** The velocity of every note the pointer plays. */
export const POINTER_VELOCITY = 90;

/** What the pointer plays on: the element it presses, and the key under a client point. */
export interface PointerTarget {
  readonly canvas: HTMLElement;
  /** The pitch of the key under the client point `x`, `y`, or undefined when no key is there. */
  keyAt(x: number, y: number): number | undefined;
}

/** What a press and a release of a key do, and whether the pointer plays at all. */
export interface PointerPlay {
  press(pitch: number, velocity: number): void;
  release(pitch: number): void;
  /** Whether a press plays now. Always when absent. */
  enabled?: () => boolean;
}

/** Plays the keys of `target` under the pointer through `play`. Returns what stops it. */
export function attachPointerPiano(target: PointerTarget, play: PointerPlay): () => void {
  const canvas = target.canvas;
  /** The key each pointer that pressed a key holds, by pointer id, or undefined once it slid off the keys. */
  const holding = new Map<number, number | undefined>();
  let lastDownOnKey = false;

  const move = (id: number, pitch: number | undefined) => {
    const before = holding.get(id);
    if (before === pitch) return;
    if (before !== undefined) play.release(before);
    holding.set(id, pitch);
    if (pitch !== undefined) play.press(pitch, POINTER_VELOCITY);
  };

  const onDown = (event: PointerEvent) => {
    lastDownOnKey = false;
    if (play.enabled?.() === false || (event.pointerType === "mouse" && event.button !== 0)) return;
    const pitch = target.keyAt(event.clientX, event.clientY);
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
    move(event.pointerId, target.keyAt(event.clientX, event.clientY));
  };
  const onUp = (event: PointerEvent) => {
    if (!holding.has(event.pointerId)) return;
    const pitch = holding.get(event.pointerId);
    holding.delete(event.pointerId);
    if (pitch !== undefined) play.release(pitch);
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
    const held = [...holding.values()];
    holding.clear();
    for (const pitch of held) if (pitch !== undefined) play.release(pitch);
  };
}
