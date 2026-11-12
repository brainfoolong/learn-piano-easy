/**
 * The icon button: a square button that shows only an icon, for a compact action in a toolbar.
 *
 * It is the button of `button.ts` with its label taken out and a square shape added. So it has the
 * button's variants, sizes, busy and disabled states, and their behaviour. Its label is never shown in
 * the button. It is the button's accessible name, through `aria-label`, and the text of its tooltip.
 *
 * - **Tooltip:** the button carries its tip inside itself, through `attachTip`, so the element this
 *   returns stays a button. The tip repeats the accessible name, so it is `aria-hidden`.
 * - **Pressed:** with `pressed`, it is a toggle with `aria-pressed`, tinted and edged in teal while
 *   on. Without it, it is a plain button with no `aria-pressed`.
 * - **A link:** `iconLink` is an `<a>` with the same look, for an icon that opens another page. With
 *   `current`, it is `aria-current="page"` and takes the pressed look, since that page is on screen.
 */
import "./icon-button.css";
import { button, buttonLink, type ButtonSize, type ButtonVariant } from "./button";
import { attachTip, type TipPlacement } from "./tooltip";
import type { IconName } from "../icons/icons";
import type { Signal } from "../signal";

export interface IconButtonOptions {
  /** The accessible name, and the text of its tooltip. */
  label: string;
  /** The only thing the button shows. */
  icon: IconName;
  /** `secondary` when absent. */
  variant?: ButtonVariant;
  /** `medium` when absent. */
  size?: ButtonSize;
  /** Whether the action runs, or a signal of it. */
  busy?: boolean | Signal<boolean>;
  /** Whether the action is unavailable, or a signal of it. */
  disabled?: boolean | Signal<boolean>;
  /** Whether the toggle is on, or a signal of it. Absent for a button that is no toggle. */
  pressed?: boolean | Signal<boolean>;
  /** Called on a click, never while busy or disabled. */
  onClick?: () => void;
}

/** A square button with an icon and a tooltip, as its options describe. */
export function iconButton(options: IconButtonOptions): HTMLButtonElement {
  const { pressed, ...rest } = options;
  const node = button(rest);
  node.querySelector(".btn__label")?.remove();
  node.classList.add("icon-btn");
  node.setAttribute("aria-label", options.label);
  attachTip(node, node, options.label);

  if (pressed !== undefined) {
    const apply = (on: boolean) => node.setAttribute("aria-pressed", String(on));
    if (typeof pressed === "boolean") apply(pressed);
    else {
      apply(pressed.get());
      pressed.subscribe(apply);
    }
  }
  return node;
}

export interface IconLinkOptions {
  /** The accessible name, and the text of its tooltip. */
  label: string;
  /** The only thing the link shows. */
  icon: IconName;
  /** Where it goes, as a relative URL. */
  href: string;
  /** `secondary` when absent. */
  variant?: Exclude<ButtonVariant, "danger">;
  /** `medium` when absent. */
  size?: ButtonSize;
  /** Whether it leads to the page on screen. */
  current?: boolean;
  /** Where its tooltip sits, `top` when absent. */
  tip?: TipPlacement;
}

/** A square link with an icon and a tooltip, as its options describe. */
export function iconLink(options: IconLinkOptions): HTMLAnchorElement {
  const { current, tip, ...rest } = options;
  const node = buttonLink(rest);
  node.querySelector(".btn__label")?.remove();
  node.classList.add("icon-btn");
  node.setAttribute("aria-label", options.label);
  attachTip(node, node, options.label, { placement: tip ?? "top" });
  if (current) node.setAttribute("aria-current", "page");
  return node;
}
