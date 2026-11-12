/**
 * The tooltip: a short line of text that names or explains the element under the pointer or the focus.
 *
 * `tooltip` wraps a target in a positioned host and puts the tip beside it. `attachTip` does the same
 * work for a host that is its own target, so the icon button carries its tip inside itself.
 *
 * - **Shown:** while the pointer is over the target, or while the target has the focus. A pointer on a
 *   touch screen never shows it, since its tap moves the focus instead.
 * - **Hidden:** when both leave, and on Escape. Escape holds it hidden until the next hover or focus.
 * - **Open:** `open: true`, or `keepTipOpen` later, keeps it shown, as the gallery asks. An open tip
 *   reserves its own room beside the host, so it covers nothing near it.
 * - **Placement:** `top` or `bottom` of the host, starting at the host's start edge, so it never runs
 *   off the start of a narrow page.
 * - **Accessible:** the tip has the role `tooltip`, and the target's `aria-describedby` points to it.
 *   A tip that repeats the target's accessible name is `aria-hidden`, so no screen reader says it twice.
 *
 * The tip never takes pointer events, so it never blocks a click. It fades and rises in, and a hidden
 * tip is `display: none`, so it adds no width to the page.
 */
import "./tooltip.css";
import { el } from "../dom";

/** Where the tip sits beside its host. */
export type TipPlacement = "top" | "bottom";

export interface TooltipOptions {
  /** Whether the tip stays shown, as in the gallery. */
  open?: boolean;
  /** `top` when absent. */
  placement?: TipPlacement;
}

/** The function that keeps each host's tip shown, by host. */
const pins = new WeakMap<HTMLElement, () => void>();
let nextId = 0;

/** Wraps `target` in a host that shows `text` as its tooltip, and returns the host. */
export function tooltip(target: HTMLElement, text: string, options: TooltipOptions = {}): HTMLElement {
  const host = el("span", { class: "tip-wrap", children: [target] });
  attachTip(host, target, text, options);
  return host;
}

/**
 * Puts a tip for `target` inside `host`, and returns the tip. `host` is `target` itself or holds it, and
 * it becomes the tip's positioned container.
 */
export function attachTip(host: HTMLElement, target: HTMLElement, text: string, options: TooltipOptions = {}): HTMLElement {
  const tip = el("span", { class: "tip", attrs: { role: "tooltip" }, text });
  const name = accessibleName(target);
  host.classList.add("tip-host");
  host.setAttribute("data-tip-placement", options.placement ?? "top");
  host.append(tip);
  if (name === text.trim()) {
    tip.setAttribute("aria-hidden", "true");
  } else {
    tip.id = `tip-${++nextId}`;
    const described = target.getAttribute("aria-describedby");
    target.setAttribute("aria-describedby", described ? `${described} ${tip.id}` : tip.id);
  }

  let hovered = false;
  let focused = false;
  let dismissed = false;
  let pinned = false;
  const onKey = (event: KeyboardEvent) => {
    if (event.key !== "Escape") return;
    dismissed = true;
    render();
  };
  const render = () => {
    const shown = pinned || ((hovered || focused) && !dismissed);
    host.toggleAttribute("data-tip-shown", shown);
    host.toggleAttribute("data-tip-open", pinned);
    if (shown && !pinned) document.addEventListener("keydown", onKey);
    else document.removeEventListener("keydown", onKey);
  };
  const enter = (flag: "hovered" | "focused") => {
    if (flag === "hovered") hovered = true;
    else focused = true;
    dismissed = false;
    render();
  };

  target.addEventListener("pointerenter", (event) => {
    if (event.pointerType !== "touch") enter("hovered");
  });
  target.addEventListener("pointerleave", () => {
    hovered = false;
    render();
  });
  target.addEventListener("focus", () => enter("focused"));
  target.addEventListener("blur", () => {
    focused = false;
    render();
  });
  pins.set(host, () => {
    pinned = true;
    render();
  });
  pinned = options.open ?? false;
  render();
  return tip;
}

/** Keeps the tip that `attachTip` put in `host` shown, as the gallery asks. */
export function keepTipOpen(host: HTMLElement): void {
  pins.get(host)?.();
}

/** The target's accessible name, as far as its label or its text gives it. */
function accessibleName(target: HTMLElement): string {
  return (target.getAttribute("aria-label") ?? target.textContent ?? "").replace(/\s+/g, " ").trim();
}
