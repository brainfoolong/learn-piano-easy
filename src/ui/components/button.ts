/**
 * The button: the site's one way to start an action, and the template every other component follows.
 *
 * A component is a function that takes typed options and returns its element. It imports its own
 * stylesheet, so a page that uses it carries its styles. It holds no text of its own: the caller passes
 * every label from its message catalog. It reports through callbacks, and a state that changes on its
 * own arrives as a signal. Its variant and size sit in `data-` attributes, which its stylesheet reads,
 * so a caller never passes a class name.
 *
 * - **Variants:** `primary` for the one main action of a view, `secondary` for the rest, `ghost` for a
 *   quiet action in a toolbar, and `danger` for an action that destroys.
 * - **Sizes:** `small`, `medium` and `large`. On a touch screen every size is at least 44 pixels.
 * - **Busy:** the label fades and a ring turns in its place, so the button keeps its size. It is
 *   `aria-busy`, keeps its accessible name, and ignores clicks.
 * - **Disabled:** the native `disabled`, faded, which takes it out of the tab order.
 * - **A link:** `buttonLink` is an `<a>` with the same look, for an action that opens another page.
 *
 * A signal holds a listener for each button that reads it. A signal that outlives its view keeps that
 * view's buttons alive, so a view makes its own signals.
 */
import "./button.css";
import { el } from "../dom";
import { icon, type IconName } from "../icons/icons";
import type { Signal } from "../signal";

export type ButtonVariant = "primary" | "secondary" | "ghost" | "danger";
export type ButtonSize = "small" | "medium" | "large";

export interface ButtonOptions {
  /** The visible label, which is also the accessible name. */
  label: string;
  /** `secondary` when absent. */
  variant?: ButtonVariant;
  /** `medium` when absent. */
  size?: ButtonSize;
  /** An icon beside the label. */
  icon?: IconName;
  /** Which side of the label the icon sits on, `start` when absent. */
  iconAt?: "start" | "end";
  /** Whether the action runs, or a signal of it. */
  busy?: boolean | Signal<boolean>;
  /** Whether the action is unavailable, or a signal of it. */
  disabled?: boolean | Signal<boolean>;
  /** Whether it submits its form, rather than being a plain button. */
  submit?: boolean;
  /** Called on a click, never while busy or disabled. */
  onClick?: () => void;
}

/** A button with a label, as its options describe. */
export function button(options: ButtonOptions): HTMLButtonElement {
  const glyph = options.icon === undefined ? null : icon(options.icon);
  const label = el("span", { class: "btn__label", text: options.label });
  const node = el("button", {
    class: "btn",
    attrs: {
      type: options.submit ? "submit" : "button",
      "data-variant": options.variant ?? "secondary",
      "data-size": options.size ?? "medium",
    },
    children: [
      el("span", {
        class: "btn__content",
        children: options.iconAt === "end" ? [label, glyph] : [glyph, label],
      }),
      el("span", { class: "btn__spinner", attrs: { "aria-hidden": "true" } }),
    ],
  });
  node.addEventListener("click", (event) => {
    if (node.getAttribute("aria-busy") === "true") {
      event.preventDefault();
      return;
    }
    options.onClick?.();
  });
  follow(options.busy, (busy) => {
    if (busy) {
      node.setAttribute("aria-busy", "true");
      node.setAttribute("aria-disabled", "true");
    } else {
      node.removeAttribute("aria-busy");
      node.removeAttribute("aria-disabled");
    }
  });
  follow(options.disabled, (disabled) => {
    node.disabled = disabled;
  });
  return node;
}

/** What a button link takes: a button's look, and where it goes. */
export interface ButtonLinkOptions {
  /** The visible label, which is also the accessible name. */
  label: string;
  /** Where it goes, as a relative URL. */
  href: string;
  /** `secondary` when absent. */
  variant?: Exclude<ButtonVariant, "danger">;
  /** `medium` when absent. */
  size?: ButtonSize;
  icon?: IconName;
  iconAt?: "start" | "end";
}

/**
 * A link that looks like a button, for an action that opens another page, such as a call to action.
 * It is never busy or disabled, since a link only goes somewhere.
 */
export function buttonLink(options: ButtonLinkOptions): HTMLAnchorElement {
  const glyph = options.icon === undefined ? null : icon(options.icon);
  const label = el("span", { class: "btn__label", text: options.label });
  return el("a", {
    class: "btn",
    attrs: { href: options.href, "data-variant": options.variant ?? "secondary", "data-size": options.size ?? "medium" },
    children: [el("span", { class: "btn__content", children: options.iconAt === "end" ? [label, glyph] : [glyph, label] })],
  });
}

/** Calls `apply` with a flag's value now, and again on each change when it is a signal. */
function follow(flag: boolean | Signal<boolean> | undefined, apply: (value: boolean) => void): void {
  if (flag === undefined || typeof flag === "boolean") {
    apply(flag ?? false);
    return;
  }
  apply(flag.get());
  flag.subscribe(apply);
}
