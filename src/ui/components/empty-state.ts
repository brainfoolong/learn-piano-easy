/**
 * The empty state: what a view shows when it has nothing yet, with one way forward.
 *
 * It stacks an illustration, an optional heading, one sentence and one primary button, centred. The
 * illustration is our own drawing: a large circle with the caller's icon, `piano` by default, and soft
 * shapes in the palette's hues around it. With `mascot`, the mascot's portrait takes the circle's
 * place, so the teacher waits where a person would. The illustration is decoration, hidden from screen
 * readers, because the sentence carries the meaning.
 *
 * The heading's level comes from the caller, `2` by default, so it fits the outline of its view without
 * skipping a level.
 */
import "./empty-state.css";
import { el } from "../dom";
import { icon, type IconName } from "../icons/icons";
import { button } from "./button";
import { mascot } from "./mascot";

export interface EmptyStateOptions {
  /** The one sentence that says why the view is empty. */
  message: string;
  /** The label of the one action. */
  actionLabel: string;
  /** Called when the learner presses the action. */
  onAction?: () => void;
  /** A heading above the sentence. */
  title?: string;
  /** The heading's level, `2` when absent. */
  level?: 2 | 3 | 4;
  /** The icon in the illustration, `piano` when absent. */
  icon?: IconName;
  /** Whether the mascot's portrait shows in place of the icon. */
  mascot?: boolean;
}

/** An empty state, as its options describe. */
export function emptyState(options: EmptyStateOptions): HTMLElement {
  const art = el("div", {
    class: "empty-state__art",
    attrs: { "aria-hidden": "true" },
    children: [
      el("span", { class: "empty-state__shape", attrs: { "data-shape": "blob" } }),
      el("span", { class: "empty-state__shape", attrs: { "data-shape": "square" } }),
      el("span", { class: "empty-state__shape", attrs: { "data-shape": "dot" } }),
      options.mascot
        ? mascot({ pose: "portrait", size: "large", alt: "" })
        : el("span", { class: "empty-state__circle", children: [icon(options.icon ?? "piano")] }),
    ],
  });
  const heading =
    options.title === undefined
      ? null
      : el(`h${options.level ?? 2}` as "h2" | "h3" | "h4", { class: "empty-state__title", text: options.title });
  return el("div", {
    class: "empty-state",
    children: [
      art,
      heading,
      el("p", { class: "empty-state__message", text: options.message }),
      button({ label: options.actionLabel, variant: "primary", onClick: () => options.onAction?.() }),
    ],
  });
}
