/**
 * The chip: a short label in a pill, such as a filter, a tag or the version of a song.
 *
 * It follows the button's template. It takes typed options, holds no text of its own, and keeps its
 * variant in a `data-` attribute. Its text is `--c-text`, or the teal's ink on a toggle that is on, so
 * it meets its contrast in both themes.
 *
 * - **Neutral:** a static tag, which is a `span`.
 * - **Selected:** a toggle, which is a `button` with `aria-pressed`. While it is on, it fills with teal
 *   and a check shows before its label. A click flips it, writes the new value to its signal, and
 *   calls `onToggle`.
 * - **Rarity:** a static tag for a version of a song of ours, with a dot in that version's colour.
 *   `rarity` is the version's id. The label names the version, so the colour never carries the meaning
 *   alone.
 * - **Removable:** a static tag with a remove button after its label. The caller names that button,
 *   and removes the chip itself from `onRemove`.
 *
 * On a touch screen the toggle and the remove button are at least 44 pixels square. A signal holds a
 * listener for each chip that reads it, so a view makes its own signals.
 */
import "./chip.css";
import { el } from "../dom";
import { icon } from "../icons/icons";
import type { Signal } from "../signal";

export type ChipRarity = "common" | "rare" | "epic" | "legendary" | "mythic";

export type ChipOptions =
  | {
      /** The visible label. */
      label: string;
      variant?: "neutral";
    }
  | {
      label: string;
      variant: "selected";
      /** Whether it is on, or a signal of it. Off when absent. */
      selected?: boolean | Signal<boolean>;
      /** Called after a click with the new value. */
      onToggle?: (selected: boolean) => void;
    }
  | {
      label: string;
      variant: "rarity";
      rarity: ChipRarity;
    }
  | {
      label: string;
      variant: "removable";
      /** The accessible name of the remove button, such as "Remove the filter Classical". */
      removeLabel: string;
      /** Called when the remove button is clicked. */
      onRemove?: () => void;
    };

/** A chip with a label, as its options describe. */
export function chip(options: ChipOptions): HTMLElement {
  const label = el("span", { class: "chip__label", text: options.label });
  switch (options.variant) {
    case "selected":
      return toggle(options, label);
    case "rarity":
      return el("span", {
        class: "chip",
        attrs: { "data-variant": "rarity", "data-rarity": options.rarity },
        children: [el("span", { class: "chip__dot", attrs: { "aria-hidden": "true" } }), label],
      });
    case "removable": {
      const remove = el("button", {
        class: "chip__remove",
        attrs: { type: "button", "aria-label": options.removeLabel },
        children: [icon("x")],
      });
      const onRemove = options.onRemove;
      remove.addEventListener("click", () => onRemove?.());
      return el("span", { class: "chip", attrs: { "data-variant": "removable" }, children: [label, remove] });
    }
    default:
      return el("span", { class: "chip", attrs: { "data-variant": "neutral" }, children: [label] });
  }
}

/** The toggle chip, which follows its `selected` flag and flips it on a click. */
function toggle(options: Extract<ChipOptions, { variant: "selected" }>, label: HTMLElement): HTMLButtonElement {
  const node = el("button", {
    class: "chip",
    attrs: { type: "button", "data-variant": "selected", "aria-pressed": "false" },
    children: [icon("check"), label],
  });
  const apply = (on: boolean) => node.setAttribute("aria-pressed", String(on));
  const flag = options.selected;
  if (flag === undefined || typeof flag === "boolean") {
    apply(flag ?? false);
  } else {
    apply(flag.get());
    flag.subscribe(apply);
  }
  node.addEventListener("click", () => {
    const next = node.getAttribute("aria-pressed") !== "true";
    if (flag !== undefined && typeof flag !== "boolean") flag.set(next);
    else apply(next);
    options.onToggle?.(next);
  });
  return node;
}
