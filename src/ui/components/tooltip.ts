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
 *
 * **The floating tip** is one tip for every element that carries `data-tip`, which the app uses in
 * place of the browser's `title`. `installTips` starts it once, from the app's entry.
 *
 * - **Shown:** while the pointer is over the element, or while it has the keyboard's focus. A touch
 *   never shows it, and neither does the focus a click gives.
 * - **Hidden:** when both leave, on a press, and on Escape. An empty `data-tip` shows none.
 * - **Follows its element** through a scroll, until the pointer is over another one.
 * - **Live:** a change of `data-tip` while it shows rewrites the tip, such as *Play* turning to *Pause*.
 * - **Above everything:** it is a popover in the top layer, so no dialog covers it and no scrolling
 *   box clips it. It sits above the element at its start edge, or below it where the top has no room,
 *   and stays inside the window.
 * - **Accessible:** while it shows, the element's `aria-describedby` points to it, unless the text
 *   repeats the element's accessible name.
 */
import "./tooltip.css";
import { el } from "../dom";

/** The attribute that holds an element's floating tip. */
export const TIP_ATTRIBUTE = "data-tip";
/** The space between the floating tip and its element, and between it and the window's edge, in pixels. */
const FLOAT_GAP = 8;

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

/** Starts the floating tip for every element with `data-tip`. A second call does nothing. */
export function installTips(): void {
  if (document.getElementById("tip-float") !== null) return;
  const tip = el("div", { class: "tip tip--float", attrs: { id: "tip-float", role: "tooltip", popover: "manual" } });
  document.body.append(tip);

  let hovered: HTMLElement | null = null;
  let focused: HTMLElement | null = null;
  let shownFor: HTMLElement | null = null;
  let dismissed = false;
  const watch = new MutationObserver(() => render());

  const describe = (target: HTMLElement, on: boolean) => {
    const ids = (target.getAttribute("aria-describedby") ?? "").split(" ").filter((id) => id !== "" && id !== tip.id);
    if (on) ids.push(tip.id);
    if (ids.length > 0) target.setAttribute("aria-describedby", ids.join(" "));
    else target.removeAttribute("aria-describedby");
  };
  const hide = () => {
    watch.disconnect();
    if (shownFor !== null) describe(shownFor, false);
    shownFor = null;
    if (tip.matches(":popover-open")) tip.hidePopover();
  };
  const place = (target: HTMLElement) => {
    const box = target.getBoundingClientRect();
    const size = tip.getBoundingClientRect();
    const below = box.top - size.height - FLOAT_GAP < FLOAT_GAP;
    const start = getComputedStyle(target).direction === "rtl" ? box.right - size.width : box.left;
    const left = Math.max(FLOAT_GAP, Math.min(start, innerWidth - size.width - FLOAT_GAP));
    tip.dataset.placement = below ? "bottom" : "top";
    tip.style.left = `${left}px`;
    tip.style.top = `${below ? box.bottom + FLOAT_GAP : box.top - size.height - FLOAT_GAP}px`;
  };
  const render = () => {
    const target = dismissed ? null : (hovered ?? focused);
    const text = target?.getAttribute(TIP_ATTRIBUTE)?.trim() ?? "";
    if (target === null || text === "" || !target.isConnected) return hide();
    if (target !== shownFor) {
      hide();
      shownFor = target;
      watch.observe(target, { attributeFilter: [TIP_ATTRIBUTE] });
    }
    tip.textContent = text;
    describe(target, accessibleName(target) !== text);
    if (!tip.matches(":popover-open")) tip.showPopover();
    place(target);
  };
  const tipped = (node: EventTarget | null) => (node instanceof Element ? node.closest<HTMLElement>(`[${TIP_ATTRIBUTE}]`) : null);
  const dismiss = () => {
    if (shownFor === null) return;
    dismissed = true;
    render();
  };

  document.addEventListener("pointerover", (event) => {
    const next = event.pointerType === "touch" ? null : tipped(event.target);
    if (next === hovered) return;
    hovered = next;
    if (next !== null) dismissed = false;
    render();
  });
  document.addEventListener("pointerout", (event) => {
    if (event.relatedTarget !== null) return;
    hovered = null;
    render();
  });
  document.addEventListener("focusin", (event) => {
    const target = event.target instanceof Element && event.target.matches(":focus-visible") ? tipped(event.target) : null;
    if (target === focused) return;
    focused = target;
    if (target !== null) dismissed = false;
    render();
  });
  document.addEventListener("focusout", () => {
    focused = null;
    render();
  });
  document.addEventListener("pointerdown", dismiss);
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") dismiss();
  });
  document.addEventListener("scroll", render, { capture: true, passive: true });
}

/** The target's accessible name, as far as its label or its text gives it. */
function accessibleName(target: HTMLElement): string {
  return (target.getAttribute("aria-label") ?? target.textContent ?? "").replace(/\s+/g, " ").trim();
}
