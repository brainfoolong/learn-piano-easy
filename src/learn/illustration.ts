/**
 * The illustration player: draws a scene of `src/learn/scenes.ts` as SVG and plays its timeline.
 *
 * - **One animation per move,** each as long as the scene's cycle and looping forever. A move's
 *   keyframes are placed in the cycle by their offsets, so every move stays in step with the others.
 * - **Under reduced motion it stands still** at the scene's `still` moment, which shows its idea.
 * - **It is decorative.** The step's text carries the idea, so the drawing is hidden from a screen
 *   reader.
 */
import type { Keyframe } from "../ui/motion";
import { prefersReducedMotion } from "../ui/motion";
import { el } from "../ui/dom";
import type { Move, Scene } from "./scenes";

const SVG = "http://www.w3.org/2000/svg";

/** A playing illustration. */
export interface Illustration {
  element: HTMLElement;
  /** Stops its animations. */
  dispose(): void;
}

/** `move`'s keyframes placed in a cycle of `cycle` ms, held at its first and its last frame around it. */
export function cycleFrames(move: Move, cycle: number): Keyframe[] {
  const count = move.frames.length;
  const placed = move.frames.map((frame, index) => {
    const share = frame.offset ?? (count === 1 ? 0 : index / (count - 1));
    return { ...frame, offset: Math.min(1, (move.at + share * move.ms) / cycle) };
  });
  const first = placed[0];
  const last = placed[count - 1];
  if (first === undefined || last === undefined) return [];
  const { offset: _a, ...from } = first;
  const { offset: _b, ...to } = last;
  return [{ ...from, offset: 0 }, ...placed, { ...to, offset: 1 }];
}

/** Plays `scene`, filling its parent's width. */
export function illustration(scene: Scene): Illustration {
  const svg = document.createElementNS(SVG, "svg");
  svg.setAttribute("viewBox", `0 0 ${scene.width} ${scene.height}`);
  svg.setAttribute("class", "illustration__drawing");
  const parts = new Map<string, SVGElement[]>();
  for (const shape of scene.shapes) {
    const node = document.createElementNS(SVG, shape.tag);
    for (const [name, value] of Object.entries(shape.attrs)) node.setAttribute(name, String(value));
    node.setAttribute("class", `illustration__${shape.tone}`);
    if (shape.text !== undefined) node.textContent = shape.text;
    if (shape.part !== undefined) parts.set(shape.part, [...(parts.get(shape.part) ?? []), node]);
    svg.append(node);
  }
  const still = prefersReducedMotion();
  const animations = scene.moves.flatMap((move) =>
    (parts.get(move.part) ?? []).map((node) => {
      const animation = node.animate(cycleFrames(move, scene.cycle) as globalThis.Keyframe[], {
        duration: scene.cycle,
        iterations: Infinity,
        fill: "both",
      });
      if (still) {
        animation.pause();
        animation.currentTime = scene.still;
      }
      return animation;
    }),
  );
  const element = el("div", { class: "illustration", attrs: { "aria-hidden": "true" }, children: [svg] });
  return {
    element,
    dispose() {
      for (const animation of animations) animation.cancel();
    },
  };
}
