/**
 * The toast: a short message that tells the learner what just happened, and the stack that shows toasts.
 *
 * `toast` returns one toast element, and `toasts` returns the stack a page fixes at the bottom of the
 * viewport. The gallery shows toast elements in flow, so only the stack is ever fixed.
 *
 * - **Variants:** `info` for news, `success` for a finished task, `warning` for something to check,
 *   `error` for something that failed, and `reward` for an earned prize. Each fills a round mark with
 *   its signal colour, behind its icon. The text stays in the text colour on a raised surface, so a
 *   colour never carries the meaning alone.
 * - **Dismiss:** with a `dismissLabel`, a ghost icon button closes the toast. The caller passes its
 *   accessible name, as it passes every text.
 * - **Action:** with an `action`, a small button under the message runs it, such as the reload of a
 *   new version. The toast holds one action at most, so it never turns into a menu.
 * - **The stack:** a `status` region that screen readers announce politely. `aria-atomic` is off, so a
 *   new toast is read alone. A toast enters with a rise, leaves with a fade, and is removed after
 *   `TOAST_DURATION_MS` or on dismiss. Its timer pauses while the pointer or the focus is on it.
 * - **Reward:** in the stack, its mark pops in with the site's one bigger animation.
 *
 * The stack holds one timer per shown toast, which ends when the toast is removed.
 */
import "./toast.css";
import { el } from "../dom";
import { icon, type IconName } from "../icons/icons";
import { button } from "./button";
import { iconButton } from "./icon-button";

export type ToastVariant = "info" | "success" | "warning" | "error" | "reward";

export interface ToastOptions {
  /** The message the toast tells. */
  message: string;
  /** A short heading above the message. */
  title?: string;
  /** `info` when absent. */
  variant?: ToastVariant;
  /** The icon in the mark, which the variant picks when absent. */
  icon?: IconName;
  /** The accessible name of the dismiss button. Without it, the toast has no dismiss button. */
  dismissLabel?: string;
  /** Called when the learner presses the dismiss button. */
  onDismiss?: () => void;
  /** One action under the message, such as Reload. In the stack, pressing it also removes the toast. */
  action?: { label: string; run: () => void };
}

export interface ShowOptions extends ToastOptions {
  /** How long the toast stays, in milliseconds. `TOAST_DURATION_MS` when absent. */
  duration?: number;
}

/** What `toasts` returns: the stack's element, which the page appends, and the call that shows a toast. */
export interface ToastStack {
  element: HTMLElement;
  /** Shows a toast, and returns the call that removes it early. */
  show(options: ShowOptions): () => void;
}

/** How long a toast stays in the stack, in milliseconds, when its caller names no duration. */
export const TOAST_DURATION_MS = 5000;

const VARIANT_ICONS: Record<ToastVariant, IconName> = {
  info: "info",
  success: "circle-check",
  warning: "triangle-alert",
  error: "x",
  reward: "sparkles",
};

/** A toast, as its options describe. */
export function toast(options: ToastOptions): HTMLElement {
  const variant = options.variant ?? "info";
  const dismiss =
    options.dismissLabel === undefined
      ? null
      : iconButton({ label: options.dismissLabel, icon: "x", variant: "ghost", size: "small", onClick: () => options.onDismiss?.() });
  return el("div", {
    class: "toast",
    attrs: { "data-variant": variant },
    children: [
      el("span", {
        class: "toast__badge",
        attrs: { "aria-hidden": "true" },
        children: [icon(options.icon ?? VARIANT_ICONS[variant])],
      }),
      el("div", {
        class: "toast__body",
        children: [
          options.title === undefined ? null : el("p", { class: "toast__title", text: options.title }),
          el("p", { class: "toast__message", text: options.message }),
          options.action === undefined
            ? null
            : button({ label: options.action.label, variant: "secondary", size: "small", onClick: options.action.run }),
        ],
      }),
      dismiss,
    ],
  });
}

/** A stack of toasts, fixed at the bottom of the viewport once the page appends its element. */
export function toasts(): ToastStack {
  const element = el("div", {
    class: "toasts",
    attrs: { role: "status", "aria-live": "polite", "aria-atomic": "false" },
  });

  function show(options: ShowOptions): () => void {
    const duration = options.duration ?? TOAST_DURATION_MS;
    let timer: ReturnType<typeof setTimeout> | undefined;
    let leaving = false;

    const remove = () => {
      if (leaving) return;
      leaving = true;
      clearTimeout(timer);
      node.setAttribute("data-leaving", "");
      // The leave animation runs first. Without one, as when the stack is hidden, the toast goes at once.
      void Promise.allSettled(node.getAnimations().map((animation) => animation.finished)).then(() => node.remove());
    };
    const start = () => {
      clearTimeout(timer);
      if (!leaving) timer = setTimeout(remove, duration);
    };
    const pause = () => clearTimeout(timer);

    const action = options.action;
    const node = toast({
      ...options,
      ...(action === undefined
        ? {}
        : {
            action: {
              label: action.label,
              run: () => {
                remove();
                action.run();
              },
            },
          }),
      onDismiss: () => {
        remove();
        options.onDismiss?.();
      },
    });
    node.addEventListener("pointerenter", pause);
    node.addEventListener("pointerleave", start);
    node.addEventListener("focusin", pause);
    node.addEventListener("focusout", start);
    element.append(node);
    start();
    return remove;
  }

  return { element, show };
}
