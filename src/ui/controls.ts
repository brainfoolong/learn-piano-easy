/**
 * Form controls: a toggle, a slider with its number, a select, a row of chips, a text field and an action
 * button.
 *
 * Decisions, and what each costs:
 * - A control knows nothing of settings. It shows a value, reports what the user picks through
 *   `onChange`, and shows a new value through `set`. The settings panel maps each kind onto one.
 * - A control never trusts its own input. Its owner validates what `onChange` reports and calls `set`
 *   with the value it kept, so a number typed out of range snaps back on screen.
 * - Each control carries its accessible name as `aria-label`, because the panel draws the visible label
 *   beside it.
 * - The slider reports while it is dragged, and the number field reports when it is committed. A drag
 *   then moves the scene live, and a half-typed number never applies.
 * - The select is a native `select`, so the keyboard, a screen reader and a form meet a plain one.
 *   The stylesheet draws its list where the browser allows, and no script of ours opens or closes it.
 *   A select with a drawn list is as wide as the choice made, never as wide as its longest option.
 * - The chips are the toggle chips of `src/ui/components/chip.ts`, in a group named for the setting. Each
 *   is a button that says whether it is on, so a screen reader hears every pick on its own.
 * - Each control's root carries `data-control`: `toggle`, `slider`, `select`, `chips`, `text` or `action`. The
 *   site's look in `src/ui/controls.css` reads only that attribute, inside the `components` layer.
 *   The classes each control keeps, such as `.toggle` and `.button`, carry no look of their own.
 * - The player's own fields, such as the settings search and the device menus, and every button of
 *   `button` in `src/ui/dom.ts` carry the same attribute, so they share this look.
 */

import { chip } from "./components/chip";
import { el } from "./dom";
import "./controls.css";

/** A control that shows a value of type `T`. */
export interface Control<T> {
  readonly element: HTMLElement;
  /** Shows `value` without reporting it. */
  set(value: T): void;
}

/** An on and off switch. */
export function toggleControl(name: string, value: boolean, onChange: (value: boolean) => void): Control<boolean> {
  const input = el("input", {
    class: "toggle",
    attrs: { type: "checkbox", role: "switch", "aria-label": name, "data-control": "toggle" },
    props: { checked: value },
    on: { change: () => onChange(input.checked) },
  });
  return {
    element: input,
    set(next) {
      input.checked = next;
    },
  };
}

/** A slider from `min` to `max` on a grid of `step`, beside a number field that edits the same value. */
export function sliderControl(
  name: string,
  value: number,
  range: { min: number; max: number; step: number },
  onChange: (value: number) => void,
): Control<number> {
  const limits = { min: String(range.min), max: String(range.max), step: String(range.step) };
  const slider = el("input", {
    attrs: { type: "range", "aria-label": name, ...limits },
    on: {
      input: () => {
        showFill();
        onChange(slider.valueAsNumber);
      },
    },
  });
  /** Keeps `--fill` on the range: how far its thumb stands, from 0 to 1, so its track fills up to it. */
  const showFill = () => {
    const span = range.max - range.min;
    slider.style.setProperty("--fill", String(span > 0 ? (slider.valueAsNumber - range.min) / span : 0));
  };
  const field = el("input", {
    class: "number",
    attrs: { type: "number", "aria-label": name, ...limits },
    on: {
      change: () => {
        if (Number.isFinite(field.valueAsNumber)) onChange(field.valueAsNumber);
        else field.value = slider.value;
      },
    },
  });
  const control: Control<number> = {
    element: el("div", { class: "slider", attrs: { "data-control": "slider" }, children: [slider, field] }),
    set(next) {
      slider.value = String(next);
      field.value = String(next);
      showFill();
    },
  };
  control.set(value);
  return control;
}

/** A drop-down of fixed options, each a value and its label. */
export function selectControl<V extends string>(
  name: string,
  value: V,
  options: readonly (readonly [value: V, label: string])[],
  onChange: (value: V) => void,
): Control<V> {
  const select = el("select", {
    attrs: { "aria-label": name, "data-control": "select" },
    children: options.map(([optionValue, label]) => el("option", { props: { value: optionValue }, text: label })),
    on: { change: () => onChange(select.value as V) },
  });
  select.value = value;
  return {
    element: select,
    set(next) {
      select.value = next;
    },
  };
}

/**
 * A row of toggle chips, one per option, any of which may be on. Its value is the options that are on,
 * in the order given.
 */
export function chipsControl<V extends string>(
  name: string,
  value: readonly V[],
  options: readonly (readonly [value: V, label: string])[],
  onChange: (value: V[]) => void,
): Control<readonly V[]> {
  const report = () => onChange(chips.filter(([, node]) => node.getAttribute("aria-pressed") === "true").map(([option]) => option));
  const chips = options.map(([option, label]) => {
    const node = chip({ label, variant: "selected", selected: value.includes(option), onToggle: report });
    node.dataset.value = option;
    return [option, node] as const;
  });
  return {
    element: el("div", { attrs: { role: "group", "aria-label": name, "data-control": "chips" }, children: chips.map(([, node]) => node) }),
    set(next) {
      for (const [option, node] of chips) node.setAttribute("aria-pressed", String(next.includes(option)));
    },
  };
}

/** A one-line text field of at most `maxLength` characters. It reports when the text is committed. */
export function textControl(name: string, value: string, maxLength: number, onChange: (value: string) => void): Control<string> {
  const input = el("input", {
    attrs: { type: "text", "aria-label": name, maxlength: String(maxLength), "data-control": "text" },
    props: { value },
    on: { change: () => onChange(input.value) },
  });
  return {
    element: input,
    set(next) {
      input.value = next;
    },
  };
}

/** A button that runs `run`. It has no value, and a missing `run` disables it. */
export function actionControl(label: string, run: (() => void) | undefined): Control<never> {
  const node = el("button", {
    class: "button outline",
    attrs: { type: "button", "data-control": "action" },
    props: { disabled: run === undefined },
    text: label,
    on: { click: () => run?.() },
  });
  return { element: node, set() {} };
}
