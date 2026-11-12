/**
 * The tabs and the segmented control: two ways to pick one of two to five options.
 *
 * Both follow the button's template. They take typed options, hold no text of their own, and report
 * through `onChange`. The chosen value is a plain value or a signal, and a click or a key sets it.
 *
 * - **Tabs** switch between panels. They follow the WAI-ARIA tabs pattern: a named `tablist` of `tab`
 *   buttons, each controlling its `tabpanel`. Only the chosen panel shows, and a teal bar under its
 *   tab marks it. Left and Right move to the previous and next tab, wrapping round, and Home and End
 *   to the first and last. Moving to a tab selects it.
 * - **The segmented control** picks a setting from options in a sunken pill track. It is a named
 *   `radiogroup` of `radio` buttons, and the chosen one reads in teal on a raised thumb. Every arrow
 *   key moves and selects, and so do Home and End.
 *
 * Only the chosen option is in the tab order, so Tab enters and leaves the group in one step. Each
 * component fills its width and is a size container. Its tabs wrap onto a second row, and five
 * segments stack in a narrow box, so neither scrolls the page. A signal holds a listener for each
 * component that reads it, so a view makes its own signals.
 */
import "./tabs.css";
import { el } from "../dom";
import { icon, type IconName } from "../icons/icons";
import { signal, type Signal } from "../signal";

/** One tab: its label, an optional icon, and the panel it shows. */
export interface Tab {
  /** The value `onChange` reports, unique among the tabs. */
  value: string;
  /** The visible label, which is also the tab's accessible name. */
  label: string;
  /** An icon before the label. */
  icon?: IconName;
  /** What the tab shows while it is chosen. */
  panel: Node;
}

export interface TabsOptions {
  /** The accessible name of the tab list, such as "Song views". */
  label: string;
  /** Two to five tabs. */
  tabs: Tab[];
  /** The chosen tab's value, or a signal of it. The first tab when absent or unknown. */
  value?: string | Signal<string>;
  /** Called with the new value when the learner chooses another tab. */
  onChange?: (value: string) => void;
}

/** One option of the segmented control. */
export interface Segment {
  /** The value `onChange` reports, unique among the segments. */
  value: string;
  /** The visible label, which is also the option's accessible name. */
  label: string;
}

export interface SegmentedOptions {
  /** The accessible name of the group, such as "Speed". */
  label: string;
  /** Two to five options. */
  segments: Segment[];
  /** The chosen option's value, or a signal of it. The first option when absent or unknown. */
  value?: string | Signal<string>;
  /** Called with the new value when the learner chooses another option. */
  onChange?: (value: string) => void;
}

/** One option's button and its value. */
interface Choice {
  value: string;
  node: HTMLButtonElement;
}

/** The number of tab sets made, which keeps every generated id unique on the page. */
let made = 0;

/** Tabs over their panels, as the options describe. */
export function tabs(options: TabsOptions): HTMLElement {
  checkCount(options.tabs.length, "Tabs");
  const id = `tabs-${++made}`;
  const choices = options.tabs.map((tab, index) => {
    const tabId = `${id}-tab-${index}`;
    const panelId = `${id}-panel-${index}`;
    const node = el("button", {
      class: "tabs__tab",
      attrs: { type: "button", role: "tab", id: tabId, "aria-controls": panelId, "aria-selected": "false" },
      children: [tab.icon === undefined ? null : icon(tab.icon), el("span", { class: "tabs__label", text: tab.label })],
    });
    const panel = el("div", {
      class: "tabs__panel",
      attrs: { role: "tabpanel", id: panelId, "aria-labelledby": tabId, tabindex: "0" },
      children: [tab.panel],
    });
    return { value: tab.value, node, panel };
  });
  const list = el("div", {
    class: "tabs__list",
    attrs: { role: "tablist", "aria-label": options.label, "aria-orientation": "horizontal" },
    children: choices.map((choice) => choice.node),
  });
  rove(choices, options, { previous: ["ArrowLeft"], next: ["ArrowRight"] }, (choice, on) => {
    choice.node.setAttribute("aria-selected", String(on));
    choice.panel.hidden = !on;
  });
  return el("div", {
    class: "tabs",
    attrs: { "data-count": String(choices.length) },
    children: [list, ...choices.map((choice) => choice.panel)],
  });
}

/** A segmented control of mutually exclusive options, as the options describe. */
export function segmented(options: SegmentedOptions): HTMLElement {
  checkCount(options.segments.length, "A segmented control");
  const choices = options.segments.map((segment) => ({
    value: segment.value,
    node: el("button", {
      class: "seg__option",
      attrs: { type: "button", role: "radio", "aria-checked": "false" },
      children: [el("span", { class: "seg__label", text: segment.label })],
    }),
  }));
  const track = el("div", {
    class: "seg__track",
    attrs: { role: "radiogroup", "aria-label": options.label },
    children: choices.map((choice) => choice.node),
  });
  rove(choices, options, { previous: ["ArrowLeft", "ArrowUp"], next: ["ArrowRight", "ArrowDown"] }, (choice, on) => {
    choice.node.setAttribute("aria-checked", String(on));
  });
  return el("div", { class: "seg", attrs: { "data-count": String(choices.length) }, children: [track] });
}

/** Throws unless a component holds two to five options, the range its layout is drawn for. */
function checkCount(count: number, what: string): void {
  if (count < 2 || count > 5) throw new Error(`${what} must hold two to five options, and this one holds ${count}.`);
}

/**
 * Wires a group of choices: `mark` shows the chosen one, and only it is in the tab order.
 * A click or a key sets the value, writes it to the signal, and calls `onChange`.
 */
function rove<C extends Choice>(
  choices: C[],
  options: { value?: string | Signal<string>; onChange?: (value: string) => void },
  keys: { previous: string[]; next: string[] },
  mark: (choice: C, on: boolean) => void,
): void {
  const first = choices[0]!;
  const given = options.value;
  const state = given === undefined || typeof given === "string" ? signal(given ?? first.value) : given;
  const find = (value: string) => choices.find((choice) => choice.value === value) ?? first;
  const apply = (value: string) => {
    const chosen = find(value);
    for (const choice of choices) {
      mark(choice, choice === chosen);
      choice.node.tabIndex = choice === chosen ? 0 : -1;
    }
  };
  apply(state.get());
  state.subscribe(apply);
  const choose = (choice: C) => {
    if (choice === find(state.get())) return;
    state.set(choice.value);
    options.onChange?.(choice.value);
  };
  const last = choices.length - 1;
  choices.forEach((choice, index) => {
    choice.node.addEventListener("click", () => choose(choice));
    choice.node.addEventListener("keydown", (event) => {
      let target: number;
      if (keys.previous.includes(event.key)) target = index === 0 ? last : index - 1;
      else if (keys.next.includes(event.key)) target = index === last ? 0 : index + 1;
      else if (event.key === "Home") target = 0;
      else if (event.key === "End") target = last;
      else return;
      event.preventDefault();
      const next = choices[target]!;
      next.node.focus();
      choose(next);
    });
  });
}
