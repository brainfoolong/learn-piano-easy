/**
 * The hotkeys: a registry of the actions a key can run, with a default key each that the learner can
 * rebind.
 *
 * A key is a combo such as `Shift+ArrowUp`: the modifiers held, then the key's `KeyboardEvent.code`.
 * The code names the key's place, so a binding holds on any keyboard layout. `keyLabel` shows a combo
 * the way a learner reads it, and `actionLabel` names an action. Both read the live locale's catalog.
 *
 * Decisions, and what each costs:
 * - The setting `hotKeyBindings` stores only the learner's changes, as JSON from action id to combo. An
 *   empty combo unbinds the action. A new default then reaches every learner who left that action alone.
 * - A combo binds one action. Binding it to another unbinds it from the first, so no key runs two.
 * - A key typed in a text field runs nothing. Nor does a key the focused control takes itself, such as
 *   Space on a button or an arrow on a slider. The control then acts once, never twice.
 * - `disableHotkeys` turns every hotkey off, and the dialog to rebind them stays open to the learner.
 * - The defaults follow the common
 *   media player keys: Space plays, arrows seek and change the speed. Stop has no default key, since
 *   the usual one, S, plays a note on the computer keyboard. The learner can bind one.
 * - The registry is pure over a key event's fields, so its tests run without a browser.
 */
import { t } from "../i18n/live";
import type { SettingsStore } from "../settings/store";

/** Every action a hotkey runs, with its default combo or `""` for none, in the order the dialog lists them. */
export const ACTIONS = [
  { id: "play", key: "Space", repeats: false },
  { id: "stop", key: "", repeats: false },
  { id: "seekBack", key: "ArrowLeft", repeats: true },
  { id: "seekForward", key: "ArrowRight", repeats: true },
  { id: "toStart", key: "Home", repeats: false },
  { id: "faster", key: "ArrowUp", repeats: true },
  { id: "slower", key: "ArrowDown", repeats: true },
  { id: "transposeUp", key: "Shift+ArrowUp", repeats: true },
  { id: "transposeDown", key: "Shift+ArrowDown", repeats: true },
  { id: "loop", key: "KeyL", repeats: false },
  { id: "loopStart", key: "BracketLeft", repeats: false },
  { id: "loopEnd", key: "BracketRight", repeats: false },
  { id: "zoomIn", key: "Equal", repeats: true },
  { id: "zoomOut", key: "Minus", repeats: true },
  { id: "fit", key: "Digit0", repeats: false },
  { id: "viewLeft", key: "Shift+ArrowLeft", repeats: true },
  { id: "viewRight", key: "Shift+ArrowRight", repeats: true },
  { id: "fullscreen", key: "KeyF", repeats: false },
] as const;

/** What the action `id` does, in the live locale, such as `Play or pause`. */
export function actionLabel(id: ActionId): string {
  return t().player.bar.actions[id];
}

/** How far the seek actions move the song, in seconds. */
export const SEEK_STEP = 5;

/** The id of an action. */
export type ActionId = (typeof ACTIONS)[number]["id"];

/** What runs each action. */
export type ActionRuns = Record<ActionId, () => void>;

/** The actions a held key runs again on each repeat, such as a seek. A toggle runs once per press. */
const REPEATS: ReadonlySet<ActionId> = new Set(ACTIONS.filter((action) => action.repeats).map((action) => action.id));

/** The fields of a key event the registry reads. A `KeyboardEvent` gives them. */
export interface KeyPress {
  code: string;
  ctrlKey: boolean;
  altKey: boolean;
  shiftKey: boolean;
  metaKey: boolean;
  /** Whether the key is held down and repeats. Only an action with `repeats` runs again then. */
  repeat?: boolean;
  /** The element the key went to, read by its tag, type, role and `isContentEditable`. */
  target: unknown;
}

/** The modifiers in the order a combo names them. */
const MODIFIERS = [
  ["ctrlKey", "Ctrl"],
  ["altKey", "Alt"],
  ["shiftKey", "Shift"],
  ["metaKey", "Meta"],
] as const;

/** The codes of the modifier keys alone, which bind nothing on their own. */
const MODIFIER_CODES = new Set(["ControlLeft", "ControlRight", "AltLeft", "AltRight", "ShiftLeft", "ShiftRight", "MetaLeft", "MetaRight"]);

/** The input types a learner types text into. Every other type, such as a range or a checkbox, is not. */
const TEXT_INPUTS = new Set(["text", "search", "email", "number", "password", "tel", "url", "date", "time", "datetime-local", "month", "week"]);

/** The combo of `press`, or `undefined` for a modifier key alone. */
export function comboOf(press: Pick<KeyPress, "code" | "ctrlKey" | "altKey" | "shiftKey" | "metaKey">): string | undefined {
  if (press.code === "" || MODIFIER_CODES.has(press.code)) return undefined;
  const held = MODIFIERS.filter(([field]) => press[field]).map(([, name]) => name);
  return [...held, press.code].join("+");
}

/**
 * `combo` as a learner reads it in the live locale, such as `Shift + ↑` or `F`. An empty combo reads as
 * `None`, and the modifiers take the locale's names, such as `Strg` in German.
 */
export function keyLabel(combo: string): string {
  const words = t().player.bar.hotkeys;
  if (combo === "") return words.none;
  const modifiers: Partial<Record<string, string>> = words.modifiers;
  const NAMES: Record<string, string> = {
    ArrowUp: "↑",
    ArrowDown: "↓",
    ArrowLeft: "←",
    ArrowRight: "→",
    BracketLeft: "[",
    BracketRight: "]",
    Equal: "=",
    Minus: "-",
    Comma: ",",
    Period: ".",
    Slash: "/",
    Backslash: "\\",
    Semicolon: ";",
    Quote: "'",
    Backquote: "`",
  };
  return combo
    .split("+")
    .map((part) => NAMES[part] ?? modifiers[part] ?? part.replace(/^(Key|Digit)/, ""))
    .join(" + ");
}

/** The learner's changes stored in `text`. Text that is not such JSON reads as no change. */
export function parseBindings(text: string): Partial<Record<ActionId, string>> {
  let raw: unknown;
  try {
    raw = text === "" ? {} : JSON.parse(text);
  } catch {
    return {};
  }
  if (typeof raw !== "object" || raw === null) return {};
  const out: Partial<Record<ActionId, string>> = {};
  for (const { id } of ACTIONS) {
    const combo = (raw as Record<string, unknown>)[id];
    if (typeof combo === "string") out[id] = combo;
  }
  return out;
}

/** The combo of each action under the changes in `text`, the default where it has none. */
export function bindingsOf(text: string): Record<ActionId, string> {
  const changes = parseBindings(text);
  const out = {} as Record<ActionId, string>;
  for (const { id, key } of ACTIONS) out[id] = changes[id] ?? key;
  return out;
}

/** The setting text after binding `combo` to `id`, which unbinds `combo` from any other action. */
export function rebind(text: string, id: ActionId, combo: string): string {
  const now = bindingsOf(text);
  if (combo !== "") for (const { id: other } of ACTIONS) if (other !== id && now[other] === combo) now[other] = "";
  now[id] = combo;
  const changes: Partial<Record<ActionId, string>> = {};
  for (const { id: action, key } of ACTIONS) if (now[action] !== key) changes[action] = now[action];
  return Object.keys(changes).length === 0 ? "" : JSON.stringify(changes);
}

/** Whether `target` takes the key `code` itself: a text field takes every key, a control some keys. */
export function takesKey(target: unknown, code: string): boolean {
  if (typeof target !== "object" || target === null) return false;
  const node = target as { tagName?: unknown; type?: unknown; isContentEditable?: unknown; getAttribute?: (name: string) => string | null };
  if (node.isContentEditable === true) return true;
  const tag = typeof node.tagName === "string" ? node.tagName.toUpperCase() : "";
  const type = typeof node.type === "string" ? node.type : "";
  if (tag === "TEXTAREA" || tag === "SELECT") return true;
  if (tag === "INPUT" && TEXT_INPUTS.has(type)) return true;
  const role = node.getAttribute?.("role") ?? "";
  const pressable = tag === "BUTTON" || tag === "A" || (tag === "INPUT" && (type === "checkbox" || type === "radio")) || role === "switch";
  if (pressable && (code === "Space" || code === "Enter" || code === "NumpadEnter")) return true;
  const slides = (tag === "INPUT" && type === "range") || role === "slider";
  return slides && /^(Arrow|Home$|End$|Page)/.test(code);
}

/** The hotkeys over `runs`, bound as `settings` says. */
export interface Hotkeys {
  /** Runs the action bound to `press`, and says whether one ran. */
  handle(press: KeyPress): boolean;
}

/** Hotkeys that run `runs`, under the settings `hotKeyBindings` and `disableHotkeys`. */
export function createHotkeys(runs: ActionRuns, settings: Pick<SettingsStore, "get">): Hotkeys {
  let text: string | undefined;
  const byCombo = new Map<string, ActionId>();
  return {
    handle(press) {
      if (settings.get("disableHotkeys")) return false;
      const combo = comboOf(press);
      if (combo === undefined || takesKey(press.target, press.code)) return false;
      const now = settings.get("hotKeyBindings");
      if (now !== text) {
        text = now;
        byCombo.clear();
        for (const [id, bound] of Object.entries(bindingsOf(now)) as [ActionId, string][]) if (bound !== "") byCombo.set(bound, id);
      }
      const id = byCombo.get(combo);
      if (id === undefined) return false;
      // A held key still counts as taken, so the browser does not scroll on a held Space.
      if (press.repeat === true && !REPEATS.has(id)) return true;
      runs[id]();
      return true;
    },
  };
}
