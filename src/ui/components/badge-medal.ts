/**
 * The badge medal: a round medal with an icon or a badge's own art, for a badge a learner has earned
 * or can still earn.
 *
 * It follows the button's template. It takes typed options, holds no text of its own, and keeps its
 * state and size in `data-` attributes. A screen reader hears it as one image named by the caller's
 * label. So the label carries all a listener needs, such as "First song, not earned yet". The caption
 * and the marker repeat words for the eye only.
 *
 * - **Locked:** a muted, sunken face with a lock on its edge, so the state never rests on colour alone.
 * - **Earned:** a rim and a tint in the reward's honey, with the icon in the honey that is safe as ink.
 * - **New:** earned, with the honey's light and a marker the caller labels, such as "New". It plays
 *   one reward animation the first time it shows on screen.
 * - **Sizes:** `small`, `medium` and `large`. A medal takes no input, so it has no touch target.
 *
 * The honey fills shapes only and never carries text, because it fails 4.5 to 1 in the light theme.
 * The marker sits on the honey with the honey's ink, which meets it in both themes.
 *
 * The animation moves only `transform` and `opacity` and plays once. With reduced motion it is a short
 * fade, as `src/ui/motion.ts` says. Where the browser has no `IntersectionObserver`, it does not play.
 */
import "./badge-medal.css";
import { el } from "../dom";
import { icon, type IconName } from "../icons/icons";
import { animate } from "../motion";

export type BadgeMedalState = "locked" | "earned" | "new";
export type BadgeMedalSize = "small" | "medium" | "large";

export interface BadgeMedalOptions {
  /** The accessible name: the badge's name, and its state when that matters to a listener. */
  label: string;
  /** The icon on the medal, or a badge's own art from `src/learn/game/badge-art.ts`, sized as an icon. */
  icon: IconName | SVGSVGElement;
  /** `locked` when absent. */
  state?: BadgeMedalState;
  /** `medium` when absent. */
  size?: BadgeMedalSize;
  /** A visible name under the medal, which no screen reader hears twice. */
  caption?: string;
  /** The marker's text in the `new` state, such as "New". The `new` state shows no marker without it. */
  newLabel?: string;
}

/** A badge medal, as its options describe. */
export function badgeMedal(options: BadgeMedalOptions): HTMLElement {
  const state = options.state ?? "locked";
  const glow = el("span", { class: "medal__glow" });
  const disc = el("span", {
    class: "medal__disc",
    children: [
      state === "new" ? glow : null,
      typeof options.icon === "string" ? icon(options.icon) : options.icon,
      state === "locked" ? el("span", { class: "medal__lock", children: [icon("lock")] }) : null,
    ],
  });
  const marker =
    state === "new" && options.newLabel !== undefined ? el("span", { class: "medal__new", text: options.newLabel }) : null;
  const node = el("div", {
    class: "medal",
    attrs: {
      role: "img",
      "aria-label": options.label,
      "data-state": state,
      "data-size": options.size ?? "medium",
    },
    children: [
      disc,
      marker,
      options.caption === undefined ? null : el("span", { class: "medal__caption", text: options.caption }),
    ],
  });
  if (state === "new") celebrateOnFirstShow(node, disc, glow, marker);
  return node;
}

/** Plays the reward animation once, when `node` first enters the screen. */
function celebrateOnFirstShow(node: HTMLElement, disc: HTMLElement, glow: HTMLElement, marker: HTMLElement | null): void {
  if (typeof IntersectionObserver !== "function") return;
  const observer = new IntersectionObserver((entries) => {
    if (!entries.some((entry) => entry.isIntersecting)) return;
    observer.disconnect();
    animate(
      disc,
      [
        { transform: "scale(0.6) rotate(-12deg)", opacity: 0 },
        { transform: "scale(1.08) rotate(4deg)", opacity: 1, offset: 0.6 },
        { transform: "scale(1) rotate(0deg)", opacity: 1 },
      ],
      { duration: "large", easing: "emphasis" },
    );
    animate(
      glow,
      [
        { transform: "scale(1)", opacity: 0.7 },
        { transform: "scale(1.35)", opacity: 0 },
      ],
      { duration: "reward", easing: "standard", delayMs: 120 },
    );
    if (marker !== null) {
      animate(
        marker,
        [
          { transform: "translateY(8px) scale(0.8)", opacity: 0 },
          { transform: "translateY(0) scale(1)", opacity: 1 },
        ],
        { duration: "medium", easing: "emphasis", delayMs: 240 },
      );
    }
  });
  observer.observe(node);
}
