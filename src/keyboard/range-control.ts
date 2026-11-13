/**
 * The range control: how the learner sets their keyboard's keys in the settings panel, and how every
 * module reads and writes that range in the settings store.
 *
 * Decisions, and what each costs:
 * - The range is read through `storedRange`, which passes the two stored notes through
 *   `normalizeRange`. A saved file or a reset of one note then never forms a broken range.
 * - Every write goes through `storeRange`, which normalizes first. It sets the end that widens the
 *   range before the other, so the store never holds a range narrower than an octave in between.
 * - The preset menu shows the preset whose shape the range has, at any octave, or "Custom". Choosing a
 *   preset puts it at its usual octave. A summary beside it names the key count and the two end notes.
 * - A note field shows a name such as `C4` and takes a name or a number. Text it cannot read puts the
 *   last value back, so a typo never moves the range.
 * - The octave buttons are off when the move would leave the 88 keys, as `shiftOctaves` refuses it.
 * - Every text comes from the live catalog's `player.settings.range`, and follows a change of locale.
 *   The note names stay as `noteName` writes them, in every locale.
 */
import { localize, onLocale, type Pick, t } from "../i18n/live";
import type { Messages } from "../i18n/messages/en";
import type { KeyRange } from "../render/key-layout";
import type { SettingsStore } from "../settings/store";
import type { Control } from "../ui/controls";
import { button, el } from "../ui/dom";
import { noteName } from "../theory/note-names";
import { KEYBOARD_PRESETS, keyCount, normalizeRange, parsePitch, presetOf, shiftOctaves } from "./range";

/** The two settings that hold the range. */
export type RangeSettingId = "keyboardFirstNote" | "keyboardLastNote";

/** The learner's keyboard as the store holds it, made valid. */
export function storedRange(store: SettingsStore): KeyRange {
  return normalizeRange(store.get("keyboardFirstNote"), store.get("keyboardLastNote"));
}

/** Stores `first` to `last`, made valid, setting the end that widens the range first. */
export function storeRange(store: SettingsStore, first: number, last: number): void {
  const next = normalizeRange(first, last);
  if (next.last > store.get("keyboardLastNote")) {
    store.set("keyboardLastNote", next.last);
    store.set("keyboardFirstNote", next.first);
  } else {
    store.set("keyboardFirstNote", next.first);
    store.set("keyboardLastNote", next.last);
  }
}

/** The range's label in the live locale, such as `61 keys, C2 to C7`. */
export function rangeLabel(range: KeyRange): string {
  const say = t().player.settings.range;
  return say.summary(say.keys(keyCount(range)), noteName(range.first), noteName(range.last));
}

/** A text field that shows a MIDI note by name and reports the note of a typed name or number. */
export function noteField(name: string, value: number, onChange: (value: number) => void): Control<number> {
  let shown = value;
  const input = el("input", {
    class: "note-field",
    attrs: { type: "text", dir: "ltr", "aria-label": name, maxlength: "5", spellcheck: "false", autocomplete: "off", "data-control": "text" },
    props: { value: noteName(value) },
    on: {
      change: () => {
        const pitch = parsePitch(input.value);
        if (pitch === undefined) input.value = noteName(shown);
        else onChange(pitch);
      },
    },
  });
  return {
    element: input,
    set(next) {
      shown = next;
      input.value = noteName(next);
    },
  };
}

/** The parts of the range control the panel places. */
export interface RangeControl {
  /** The note field of each range setting, which writes the whole range through `storeRange`. */
  fields: Record<RangeSettingId, Control<number>>;
  /** The preset menu, the summary and the octave buttons, shown at the head of the keyboard section. */
  tools: HTMLElement;
  /** Stops listening to the store. */
  dispose(): void;
}

const CUSTOM = "custom";

/** Builds the range control over `store`, with `extras`, such as the learn button, after its octave buttons. */
export function createRangeControl(store: SettingsStore, extras: readonly HTMLElement[] = []): RangeControl {
  const fields: Record<RangeSettingId, Control<number>> = {
    keyboardFirstNote: noteField(t().player.settings.settings.keyboardFirstNote.label, store.get("keyboardFirstNote"), (pitch) => {
      storeRange(store, pitch, storedRange(store).last);
      fields.keyboardFirstNote.set(store.get("keyboardFirstNote"));
    }),
    keyboardLastNote: noteField(t().player.settings.settings.keyboardLastNote.label, store.get("keyboardLastNote"), (pitch) => {
      storeRange(store, storedRange(store).first, pitch);
      fields.keyboardLastNote.set(store.get("keyboardLastNote"));
    }),
  };

  const say = (m: Messages) => m.player.settings.range;
  const menu = el("select", {
    attrs: { "data-control": "select" },
    children: [
      ...KEYBOARD_PRESETS.map((p) => localize(el("option", { props: { value: String(p.keys) } }), (m) => say(m).keys(p.keys))),
      localize(el("option", { props: { value: CUSTOM, disabled: true } }), (m) => say(m).custom),
    ],
    on: {
      change: () => {
        const preset = KEYBOARD_PRESETS.find((p) => String(p.keys) === menu.value);
        if (preset) storeRange(store, preset.range.first, preset.range.last);
      },
    },
  });
  const summary = el("span", { class: "range-summary", attrs: { "aria-live": "polite" } });
  const shift = (octaves: number) => {
    const next = shiftOctaves(storedRange(store), octaves);
    storeRange(store, next.first, next.last);
  };
  localize(menu, (m) => say(m).label, "aria-label");
  const octave = (label: Pick, name: Pick, octaves: number) => {
    const node = button(label(t()), () => shift(octaves));
    localize(node, label);
    localize(node, name, "data-tip");
    return localize(node, name, "aria-label");
  };
  const down = octave((m) => say(m).octaveDown, (m) => say(m).octaveDownName, -1);
  const up = octave((m) => say(m).octaveUp, (m) => say(m).octaveUpName, 1);

  const show = () => {
    const range = storedRange(store);
    menu.value = String(presetOf(range)?.keys ?? CUSTOM);
    summary.textContent = rangeLabel(range);
    down.disabled = shiftOctaves(range, -1) === range;
    up.disabled = shiftOctaves(range, 1) === range;
  };
  show();

  const stopStore = store.subscribe((id) => {
    if (id === "keyboardFirstNote" || id === "keyboardLastNote") show();
  });
  const stopLocale = onLocale(show);

  const tools = el("div", {
    class: "setting-row range-tools",
    children: [
      el("div", { class: "setting-text", children: [localize(el("span", { class: "setting-label" }), (m) => say(m).label), summary] }),
      el("div", { class: "range-buttons", children: [menu, down, up, ...extras] }),
    ],
  });

  return {
    fields,
    tools,
    dispose: () => {
      stopStore();
      stopLocale();
    },
  };
}
