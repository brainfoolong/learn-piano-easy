/**
 * The settings panel: every section of the schema in its group, with a navigation, a search and a
 * reset for each setting.
 *
 * Decisions, and what each costs:
 * - The panel is built from `GROUPS` and `SETTINGS` alone. A setting a goal adds to the schema shows up
 *   with no change here, so the panel never drifts from the code.
 * - Two levels show at all times. The navigation lists every group, and opens the sections of the one
 *   the learner is in. Each group has a hue, which tints its tab, its title and its sections' headers.
 *   A name and an icon always stand beside the hue, so the colour never carries the meaning alone.
 * - Every section stays in one scroll, as a card of its own. A control is then always in the page, so a
 *   test or a hotkey reaches it without opening a tab first. The navigation follows the scroll.
 * - A click in the navigation jumps, and the body fades in at the new place. A smooth scroll past
 *   hundreds of rows would take long and show nothing. The jump holds its target as the current section
 *   until the learner scrolls, because the last sections are too short to reach the top.
 * - Every text comes from `player.settings` of the live catalog. `localize` rewrites the fixed ones on a
 *   change of locale. The panel repaints each setting's label and help itself, so a search keeps its
 *   marks across a language switch.
 * - Each kind maps onto one control: a toggle, a slider with its number, a note field, a select, a row
 *   of chips, a text field, the colour picker, or an action button. An action runs the handler its owner passes by id,
 *   and an action with no handler shows disabled.
 * - A control carries its setting's label as its accessible name. The panel localizes every node whose
 *   name is that label, so the controls of `src/ui/controls.ts` stay unaware of locales.
 * - A module whose settings must change together passes its own control for a setting, which writes to
 *   the store itself, and tools shown at the head of a section. The keyboard range uses both, so a typed
 *   note can never form a broken range. The panel still gives such a row its reset and its search.
 * - A change goes through the store, and the control then shows the value the store kept. The store's
 *   subscription updates every control, so a change from a hotkey or an import shows here too.
 * - A setting away from its default shows a mark and a reset button. Its section and its group count
 *   their changed settings in the navigation, and the footer counts them all. Reset all asks first,
 *   because it throws away every choice the learner made.
 * - Search matches a setting's label and help, and the name of its section and its group, in the live
 *   locale, ignoring case. It marks each match, hides every row, section and group with none, and walks
 *   every row per key press, which the schema's size keeps cheap. It leaves a setting's id out, so
 *   every hit shows why it is one.
 * - It stays a panel at the side, never a modal dialog, so the scene stays in view and live while a
 *   setting changes. A touch screen gets no focus in the search field on opening, so no on-screen
 *   keyboard covers the settings.
 */

import { noteField } from "../keyboard/range-control";
import { localize, onLocale, type Pick, t } from "../i18n/live";
import type { Messages } from "../i18n/messages/en";
import { actionControl, chipsControl, selectControl, sliderControl, textControl, toggleControl, type Control } from "../ui/controls";
import { colorPicker } from "../ui/color-picker";
import { button as componentButton } from "../ui/components/button";
import { emptyState } from "../ui/components/empty-state";
import { iconButton } from "../ui/components/icon-button";
import { el } from "../ui/dom";
import { icon, type IconName } from "../ui/icons/icons";
import { GROUPS, SETTINGS, SUBHEADINGS, VALUE_SETTINGS, picksOf, type PanelSection, type Section, type Setting, type SettingId, type SettingsTexts, type Subheading } from "./schema";
import type { SettingsStore } from "./store";
import "./panel.css";

/** What the panel needs beside the store. */
export interface PanelOptions {
  /** The handler of each action setting, by id. */
  actions?: Partial<Record<string, () => void>>;
  /** A control its owner built for a setting, by id. It writes to the store itself. */
  controls?: Partial<Record<string, Control<unknown>>>;
  /** An element shown under a section's heading, by section. */
  sectionTools?: Partial<Record<Section, HTMLElement>>;
  /** Called when the learner closes the panel. */
  onClose: () => void;
}

/** A built panel. */
export interface SettingsPanel {
  readonly element: HTMLElement;
  /** Moves the focus into the panel: into its search field, or onto the panel on a touch screen. */
  focus(): void;
  /** Stops listening to the store and to the locale. */
  dispose(): void;
}

/** One row of the panel, with what search and reset need. */
interface Row {
  setting: Setting;
  element: HTMLElement;
  control: Control<unknown>;
  /** The nodes that show the label and the help, which a search repaints with its marks. */
  label: HTMLElement | null;
  help: HTMLElement;
  reset: HTMLButtonElement | null;
}

/** A run of rows under one sub-heading, or under none. */
interface Block {
  element: HTMLElement;
  rows: Row[];
}

/** A section: its card in the body and its link in the navigation. */
interface SectionView {
  id: PanelSection;
  group: GroupView;
  element: HTMLElement;
  /** The node that shows the section's name in its card. */
  name: HTMLElement;
  tools: HTMLElement | undefined;
  blocks: Block[];
  item: HTMLElement;
  link: HTMLButtonElement;
  count: Count;
}

/** A group: its title and cards in the body, and its tab and list in the navigation. */
interface GroupView {
  id: (typeof GROUPS)[number]["id"];
  element: HTMLElement;
  /** The node that shows the group's name above its cards. */
  name: HTMLElement;
  /** The group's entry in the navigation, which holds its tab and its list. */
  item: HTMLElement;
  tab: HTMLButtonElement;
  list: HTMLElement;
  sections: SectionView[];
  count: Count;
}

/** The mark that counts the changed settings of a section or a group. */
interface Count {
  element: HTMLElement;
  show(count: number): void;
}

/** A setting's texts in `messages`. A choice's `options` holds each value's label. */
function textsOf(messages: Messages, id: string): { label: string; help: string; options?: Record<string, string> } {
  return messages.player.settings.settings[id as keyof SettingsTexts];
}

/** Writes `pick` into every accessible name of `element` that reads `name`, now and on every change of locale. */
function localizeNames(element: Element, name: string, pick: Pick): void {
  for (const node of [element, ...element.querySelectorAll("[aria-label]")]) {
    if (node.getAttribute("aria-label") === name) localize(node, pick, "aria-label");
  }
}

/** The tile that shows the icon `name`, hidden from screen readers because a name stands beside it. */
function glyph(name: IconName): HTMLElement {
  return el("span", { class: "settings-glyph", attrs: { "aria-hidden": "true" }, children: [icon(name, { size: 20 })] });
}

/**
 * Writes `text` into `node`, with every run that matches `needle` inside a `mark`, and tells whether
 * any did. `needle` is in lower case, and an empty one matches nothing.
 */
function paint(node: HTMLElement, text: string, needle: string): boolean {
  const lower = text.toLowerCase();
  let at = needle === "" || lower.length !== text.length ? -1 : lower.indexOf(needle);
  if (at < 0) {
    node.textContent = text;
    return needle !== "" && lower.includes(needle);
  }
  const parts: (Node | string)[] = [];
  let from = 0;
  while (at >= 0) {
    parts.push(text.slice(from, at), el("mark", { text: text.slice(at, at + needle.length) }));
    from = at + needle.length;
    at = lower.indexOf(needle, from);
  }
  node.replaceChildren(...parts, text.slice(from));
  return true;
}

/** A mark that shows a count, and says it as `changed` words to a screen reader. It hides at zero. */
function countMark(): Count {
  const figure = el("span", { attrs: { "aria-hidden": "true" } });
  const words = el("span", { class: "visually-hidden" });
  const element = el("span", { class: "settings-count", props: { hidden: true }, children: [figure, words] });
  return {
    element,
    show(count) {
      element.hidden = count === 0;
      figure.textContent = String(count);
      words.textContent = t().player.settings.panel.changed(count);
    },
  };
}

/** Builds the settings panel over `store`. */
export function createSettingsPanel(store: SettingsStore, options: PanelOptions): SettingsPanel {
  const rows = new Map<string, Row>();
  const groups: GroupView[] = [];

  /** Sets `id` to `value` through the store, and returns the value it kept. */
  const apply = (id: string, value: unknown): unknown => store.set(id as SettingId, value as never);

  const isDefault = (setting: Setting) =>
    setting.kind === "action" || store.get(setting.id as SettingId) === setting.default;

  /** The control of `setting`, which shows the value the store keeps after each change. */
  const controlFor = (setting: Setting): Control<unknown> => {
    const label: Pick = (m) => textsOf(m, setting.id).label;
    // A tool's own field, such as a note field of the range, is named after its setting too. A tool's
    // own button keeps its name, which matches the text it shows, such as "Change keys".
    const own = options.controls?.[setting.id];
    if (own !== undefined) {
      if (own.element.hasAttribute("aria-label") && own.element.tagName !== "BUTTON") localize(own.element, label, "aria-label");
      return own;
    }
    const control: Control<unknown> = build(setting, (value) => control.set(apply(setting.id, value)));
    localizeNames(control.element, label(t()), label);
    if (setting.kind === "action") localize(control.element, label);
    if (setting.kind === "choice") {
      for (const option of control.element.querySelectorAll("option")) {
        localize(option, (m) => textsOf(m, setting.id).options?.[option.value] ?? option.value);
      }
    }
    if (setting.kind === "multi") {
      for (const chip of control.element.querySelectorAll<HTMLElement>("[data-value]")) {
        const value = chip.dataset.value ?? "";
        localize(chip.querySelector(".chip__label")!, (m) => textsOf(m, setting.id).options?.[value] ?? value);
      }
    }
    return control;
  };

  /** The control of `setting`'s kind, which hands each pick to `report`. */
  const build = (setting: Setting, report: (value: unknown) => void): Control<unknown> => {
    const name = textsOf(t(), setting.id).label;
    const value = setting.kind === "action" ? undefined : store.get(setting.id as SettingId);
    switch (setting.kind) {
      case "toggle":
        return toggleControl(name, value as boolean, report);
      case "number":
        return sliderControl(name, value as number, setting, report);
      case "note":
        return noteField(name, value as number, report);
      case "choice":
        return selectControl(name, value as string, setting.options.map((option) => [option, option] as const), report);
      case "multi": {
        const chips = chipsControl(name, picksOf(value as string, setting.options), setting.options.map((option) => [option, option] as const), (picked) =>
          report(picked.join(",")),
        );
        return { element: chips.element, set: (next) => chips.set(picksOf(next as string, setting.options)) };
      }
      case "colour":
        return colorPicker(name, value as string, report);
      case "text":
        return textControl(name, value as string, setting.maxLength, report);
      case "action":
        return actionControl(name, options.actions?.[setting.id]);
    }
  };

  /** The row of `setting`: its label and help, its control, and its reset. An action's button is its label. */
  const rowFor = (setting: Setting): Row => {
    const control = controlFor(setting);
    const reset =
      setting.kind === "action"
        ? null
        : el("button", {
            class: "reset",
            attrs: { type: "button" },
            children: [icon("rotate-ccw", { size: 16 })],
            on: {
              click: () => {
                store.reset(setting.id as SettingId);
                // The button hides with the change, so the focus moves on to the setting's control.
                const field = control.element.matches("input, select, button") ? control.element : control.element.querySelector<HTMLElement>("input, select, button");
                field?.focus();
              },
            },
          });
    if (reset !== null) {
      const name: Pick = (m) => m.player.settings.panel.reset(textsOf(m, setting.id).label);
      localize(reset, name, "aria-label");
      localize(reset, name, "data-tip");
    }
    const label = setting.kind === "action" ? null : el("span", { class: "setting-label" });
    const help = el("span", { class: "setting-description" });
    const element = el("div", {
      class: setting.kind === "action" ? "setting-row setting-row--action" : "setting-row",
      attrs: { "data-kind": setting.kind },
      children: [el("div", { class: "setting-text", children: [label, help] }), control.element, reset ?? el("span", { class: "reset-space" })],
    });
    return { setting, element, control, label, help, reset };
  };

  for (const spec of GROUPS) {
    const groupName: Pick = (m) => m.player.settings.groups[spec.id];
    const name = el("span");
    const count = countMark();
    const list = el("ul", { class: "settings-nav__sections", attrs: { id: `settings-nav-${spec.id}` }, props: { hidden: true } });
    const tab = el("button", {
      class: "settings-nav__tab",
      attrs: { type: "button", "aria-expanded": "false", "aria-controls": list.id },
      children: [glyph(spec.icon), localize(el("span", { class: "settings-nav__name" }), groupName), count.element],
      on: { click: () => jump(group.sections.find((section) => !section.element.hidden)) },
    });
    const group: GroupView = {
      id: spec.id,
      element: el("div", {
        class: "settings-group",
        attrs: { "data-hue": spec.hue },
        children: [el("h3", { class: "settings-group__title", children: [glyph(spec.icon), name] })],
      }),
      name,
      item: el("li", { class: "settings-nav__group", attrs: { "data-hue": spec.hue }, children: [tab, list] }),
      tab,
      list,
      sections: [],
      count,
    };

    for (const { id, icon: sectionIcon } of spec.sections) {
      const blocks: Block[] = [];
      for (const setting of SETTINGS as readonly Setting[]) {
        if (setting.section !== id) continue;
        const row = rowFor(setting);
        rows.set(setting.id, row);
        const heading = (SUBHEADINGS as Partial<Record<string, Subheading>>)[setting.id];
        let block = blocks.at(-1);
        if (block === undefined || heading !== undefined) {
          block = { element: el("div", { class: "settings-block" }), rows: [] };
          if (heading !== undefined) {
            block.element.append(localize(el("h5", { class: "settings-block__title" }), (m) => m.player.settings.subheadings[heading]));
          }
          blocks.push(block);
        }
        block.rows.push(row);
        block.element.append(row.element);
      }
      if (blocks.length === 0) continue;

      const sectionName: Pick = (m) => m.player.settings.sections[id];
      const cardName = el("h4");
      const tools = options.sectionTools?.[id];
      const sectionCount = countMark();
      const link = el("button", {
        class: "settings-nav__link",
        attrs: { type: "button" },
        children: [glyph(sectionIcon), localize(el("span", { class: "settings-nav__name" }), sectionName), sectionCount.element],
        on: { click: () => jump(section) },
      });
      const section: SectionView = {
        id,
        group,
        element: el("section", {
          class: "settings-section",
          attrs: { id: `settings-${id}` },
          children: [
            el("header", {
              class: "settings-section__head",
              children: [
                glyph(sectionIcon),
                el("div", {
                  class: "settings-section__titles",
                  children: [cardName, localize(el("p", { class: "settings-section__about" }), (m) => m.player.settings.about[id])],
                }),
              ],
            }),
            tools,
            ...blocks.map((block) => block.element),
          ],
        }),
        name: cardName,
        tools,
        blocks,
        item: el("li", { children: [link] }),
        link,
        count: sectionCount,
      };
      group.sections.push(section);
      group.element.append(section.element);
      list.append(section.item);
    }
    if (group.sections.length > 0) groups.push(group);
  }
  const sections = groups.flatMap((group) => group.sections);

  /** Shows whether `row` is away from its default: its mark and its reset button. */
  const showChanged = (row: Row) => {
    const changed = !isDefault(row.setting);
    row.element.toggleAttribute("data-changed", changed);
    if (row.reset) row.reset.hidden = !changed;
  };

  const summary = el("p", { class: "settings-summary" });
  /** Counts the changed settings of each section and group, and of the whole panel. */
  const showCounts = () => {
    let total = 0;
    for (const group of groups) {
      let inGroup = 0;
      for (const section of group.sections) {
        const inSection = section.blocks.reduce((sum, block) => sum + block.rows.filter((row) => !isDefault(row.setting)).length, 0);
        section.count.show(inSection);
        inGroup += inSection;
      }
      group.count.show(inGroup);
      total += inGroup;
    }
    summary.textContent = t().player.settings.panel.changedTotal(total);
  };

  // The search field, with its icon and a button that clears it.
  const search = el("input", {
    attrs: { type: "search", dir: "auto", "data-control": "text", autocomplete: "off", spellcheck: "false" },
    on: {
      input: () => filter(),
      keydown: (event) => {
        // Escape first clears a search, and closes the panel only from an empty field.
        if (event.key !== "Escape" || search.value === "") return;
        event.stopPropagation();
        clearSearch();
      },
    },
  });
  localize(search, (m) => m.player.settings.panel.search, "placeholder");
  localize(search, (m) => m.player.settings.panel.search, "aria-label");
  const clearSearch = () => {
    search.value = "";
    filter();
    search.focus();
  };
  const clear = iconButton({ label: "", icon: "x", variant: "ghost", size: "small", onClick: clearSearch });
  clear.hidden = true;
  localize(clear, (m) => m.player.settings.panel.clearSearch, "aria-label");
  const clearTip = clear.querySelector(".tip");
  if (clearTip !== null) localize(clearTip, (m) => m.player.settings.panel.clearSearch);

  const found = el("p", { class: "settings-found", attrs: { role: "status" } });
  const empty = emptyState({ title: "", message: "", actionLabel: "", level: 3, icon: "search", onAction: clearSearch });
  empty.classList.add("settings-empty");
  empty.hidden = true;
  const emptyTitle = empty.querySelector(".empty-state__title");
  const emptyMessage = empty.querySelector(".empty-state__message");
  const emptyAction = empty.querySelector(".btn__label");
  if (emptyTitle !== null) localize(emptyTitle, (m) => m.player.settings.panel.emptyTitle);
  if (emptyAction !== null) localize(emptyAction, (m) => m.player.settings.panel.showAll);

  /**
   * Shows only what matches the search field in the live locale, with each match marked. A match in a
   * section's or a group's name shows all of its settings. It also repaints every text of a row.
   */
  function filter(): void {
    const query = search.value.trim();
    const needle = query.toLowerCase();
    const messages = t();
    const words = messages.player.settings;
    let hits = 0;
    for (const group of groups) {
      const wholeGroup = paint(group.name, words.groups[group.id], needle);
      let inGroup = 0;
      for (const section of group.sections) {
        const whole = paint(section.name, words.sections[section.id], needle) || wholeGroup;
        let inSection = 0;
        for (const block of section.blocks) {
          let inBlock = 0;
          for (const row of block.rows) {
            const texts = textsOf(messages, row.setting.id);
            const inLabel = row.label === null ? needle !== "" && texts.label.toLowerCase().includes(needle) : paint(row.label, texts.label, needle);
            const inHelp = paint(row.help, texts.help, needle);
            const match = needle === "" || whole || inLabel || inHelp;
            row.element.hidden = !match;
            if (match) inBlock++;
          }
          block.element.hidden = inBlock === 0;
          inSection += inBlock;
        }
        // A section's tools belong to no setting, so a search shows them only with the whole section.
        if (section.tools !== undefined) section.tools.hidden = needle !== "" && !whole;
        section.element.hidden = inSection === 0;
        section.item.hidden = inSection === 0;
        inGroup += inSection;
      }
      group.element.hidden = inGroup === 0;
      group.tab.disabled = inGroup === 0;
      hits += inGroup;
    }
    clear.hidden = search.value === "";
    // The empty state says that nothing matched, so the count then goes to a screen reader alone.
    found.textContent = needle === "" ? "" : words.panel.found(hits);
    found.classList.toggle("visually-hidden", hits === 0);
    empty.hidden = hits > 0;
    if (emptyMessage !== null) emptyMessage.textContent = words.panel.empty(query);
    // A new search shows its results from the top, and the navigation follows what is left.
    if (needle !== shownNeedle) {
      shownNeedle = needle;
      body.scrollTop = 0;
      held = undefined;
    }
    follow();
  }
  let shownNeedle = "";

  const content = el("div", { class: "settings-content", children: [found, ...groups.map((group) => group.element), empty] });
  const body = el("div", { class: "settings-body", children: [content] });

  // The navigation: each group's tab, and under the open one the links of its sections.
  const marker = el("span", { class: "settings-nav__marker", attrs: { "aria-hidden": "true" }, props: { hidden: true } });
  const navList = el("ul", { class: "settings-nav__groups", children: groups.map((group) => group.item) });
  const nav = localize(el("nav", { class: "settings-nav", children: [marker, navList] }), (m) => m.player.settings.panel.sections, "aria-label");

  /** The section the navigation shows as current, if any is shown. */
  let current: SectionView | undefined;
  /** The section a jump went to, with the scroll position it left, until the learner scrolls on. */
  let held: { section: SectionView; top: number } | undefined;

  /** Makes `next` the current section: opens its group in the navigation and moves the marker onto it. */
  const show = (next: SectionView | undefined) => {
    current = next;
    for (const group of groups) {
      const open = group === next?.group;
      group.tab.setAttribute("aria-expanded", String(open));
      group.list.hidden = !open;
      for (const section of group.sections) {
        if (section === next) section.link.setAttribute("aria-current", "true");
        else section.link.removeAttribute("aria-current");
      }
    }
    place();
  };

  /**
   * Moves the marker onto the current section's link, and scrolls the navigation so the link and, where
   * both fit, its group's tab are in view. The marker moves by a transform alone, to the link's physical
   * offset, so it lands the same in either reading way. A right-to-left navigation scrolls by the same
   * sum on mirrored coordinates, where its tab starts on the right and `scrollLeft` runs negative.
   */
  const place = () => {
    const link = current?.link;
    if (link === undefined || link.offsetParent === null) {
      marker.hidden = true;
      return;
    }
    marker.hidden = false;
    marker.dataset.hue = current?.group.item.dataset.hue ?? "";
    marker.style.setProperty("--marker-x", `${link.offsetLeft}px`);
    marker.style.setProperty("--marker-y", `${link.offsetTop}px`);
    marker.style.setProperty("--marker-width", `${link.offsetWidth}px`);
    marker.style.setProperty("--marker-height", `${link.offsetHeight}px`);
    const tab = current?.group.tab ?? link;
    const style = getComputedStyle(nav);
    const along = (start: number, end: number, room: number, pad: number) => (end - start + 2 * pad > room ? end - room + pad : start - pad);
    const pad = Number.parseFloat(style.paddingInlineStart);
    const room = nav.clientWidth;
    const left =
      style.direction === "rtl"
        ? -room - along(-(tab.offsetLeft + tab.offsetWidth), -link.offsetLeft, room, pad)
        : along(tab.offsetLeft, link.offsetLeft + link.offsetWidth, room, pad);
    nav.scrollTo({
      left,
      top: along(tab.offsetTop, link.offsetTop + link.offsetHeight, nav.clientHeight, Number.parseFloat(style.paddingTop)),
    });
  };

  /**
   * Makes the section under the top of the body the current one, unless a jump still holds its own.
   * A hidden panel has no layout to read, so it waits for the panel to show.
   */
  const follow = () => {
    if (body.clientHeight === 0) return;
    if (held !== undefined && Math.abs(body.scrollTop - held.top) <= 1 && !held.section.element.hidden) {
      if (current !== held.section) show(held.section);
      return;
    }
    held = undefined;
    const shown = sections.filter((section) => !section.element.hidden);
    const top = body.getBoundingClientRect().top;
    const line = top + body.clientHeight / 4;
    const atEnd = body.scrollTop + body.clientHeight >= body.scrollHeight - 1 && body.scrollTop > 0;
    const next = atEnd ? shown.at(-1) : (shown.findLast((section) => section.element.getBoundingClientRect().top <= line) ?? shown[0]);
    if (next !== current) show(next);
    else if (marker.hidden) place();
  };

  /** Scrolls the body to `section` at once, fades the body in there, and holds the section as current. */
  function jump(section: SectionView | undefined): void {
    if (section === undefined) return;
    // The first section of a group brings the group's title along.
    const first = section.group.sections.find((other) => !other.element.hidden) === section;
    (first ? section.group.element : section.element).scrollIntoView({ block: "start", behavior: "instant" });
    held = { section, top: body.scrollTop };
    content.dataset.jump = content.dataset.jump === "a" ? "b" : "a";
    show(section);
  }

  body.addEventListener("scroll", follow, { passive: true });
  // The navigation changes shape with the window, the locale and the panel's showing.
  const watch = new ResizeObserver(() => (current === undefined ? follow() : place()));
  watch.observe(nav);
  watch.observe(navList);

  const resetAll = () => {
    if (!confirm(t().player.settings.panel.confirmResetAll)) return;
    for (const id of VALUE_SETTINGS.keys()) store.reset(id as SettingId);
  };

  const close = localize(iconButton({ label: "", icon: "x", variant: "ghost", size: "small", onClick: options.onClose }), (m) => m.player.settings.panel.close, "aria-label");
  const closeTip = close.querySelector(".tip");
  if (closeTip !== null) localize(closeTip, (m) => m.player.settings.panel.close);
  const resetAllButton = componentButton({ label: "", variant: "danger", size: "small", onClick: resetAll });
  const resetAllLabel = resetAllButton.querySelector(".btn__label");
  if (resetAllLabel !== null) localize(resetAllLabel, (m) => m.player.settings.panel.resetAll);
  const element = localize(
    el("aside", {
      class: "settings-panel",
      attrs: { tabindex: "-1" },
      children: [
        el("header", {
          class: "settings-head",
          children: [
            localize(el("h2"), (m) => m.player.settings.panel.title),
            el("div", { class: "settings-search", children: [icon("search", { size: 20 }), search, clear] }),
            close,
          ],
        }),
        nav,
        body,
        el("footer", { class: "settings-foot", children: [summary, resetAllButton] }),
      ],
      on: {
        keydown: (event) => {
          if (event.key === "Escape") options.onClose();
        },
      },
    }),
    (m) => m.player.settings.panel.title,
    "aria-label",
  );

  for (const row of rows.values()) showChanged(row);
  showCounts();
  filter();

  const unsubscribe = store.subscribe((id: SettingId, value: unknown) => {
    const row = rows.get(id);
    if (row === undefined) return;
    row.control.set(value);
    showChanged(row);
    showCounts();
  });
  const stopLocale = onLocale(() => {
    showCounts();
    filter();
  });

  return {
    element,
    focus: () => (matchMedia("(pointer: coarse)").matches ? element : search).focus(),
    dispose: () => {
      unsubscribe();
      stopLocale();
      watch.disconnect();
    },
  };
}
