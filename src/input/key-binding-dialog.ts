/**
 * The key binding dialog: a list of the notes from C2 to C6 with the computer key bound to each, where
 * the learner rebinds a key.
 *
 * A click on a note's key button waits for the next key, and binds that key to the note. The setting
 * `keyBindings` keeps the change, through `rebindKey` in `src/input/keyboard.ts`.
 *
 * Decisions, and what each costs:
 * - It works as the hotkey dialog does. Escape and Tab never bind, so a keyboard learner is never
 *   trapped. A key bound with Space or Enter would also click the focused button, so that click is ignored.
 * - A key held with Ctrl, Alt or Meta never binds, because such a key plays no note.
 * - The list opens scrolled to the first bound note, so the defaults show without a scroll.
 * - The dialog is built on each open, in the live locale. It shares the hotkey dialog's words, such as
 *   *Clear* and *Reset all keys*, from `player.bar.hotkeyDialog`. The button that opens it follows each
 *   change of the locale.
 */
import { localize, t } from "../i18n/live";
import type { Messages } from "../i18n/messages/en";
import { keyLabel } from "../play/hotkeys";
import type { SettingsStore } from "../settings/store";
import { noteName } from "../theory/note-names";
import type { Control } from "../ui/controls";
import { button, el } from "../ui/dom";
import { EDITOR_FIRST, EDITOR_LAST, keysOf, rebindKey } from "./keyboard";
import "../play/hotkey-dialog.css";

/** The keys that never bind, because the dialog and the browser need them. */
const NEVER_BOUND = new Set(["Escape", "Tab", "ShiftLeft", "ShiftRight", "ControlLeft", "ControlRight", "AltLeft", "AltRight", "MetaLeft", "MetaRight"]);

/** The body of the key binding dialog over `settings`. */
export function createKeyBindingDialog(settings: SettingsStore): HTMLElement {
  const keys = new Map<number, HTMLButtonElement>();
  let waiting: number | undefined;
  let swallowClick = false;

  const words = t().player.bar.hotkeyDialog;
  const show = () => {
    const bound = keysOf(settings.get("keyBindings"));
    for (const [pitch, key] of keys) {
      key.textContent = waiting === pitch ? words.pressKey : keyLabel(bound.get(pitch) ?? "");
      key.setAttribute("aria-pressed", String(waiting === pitch));
    }
  };
  const wait = (pitch: number | undefined) => {
    waiting = pitch;
    show();
  };

  const rows: HTMLElement[] = [];
  for (let pitch = EDITOR_FIRST; pitch <= EDITOR_LAST; pitch++) {
    const name = noteName(pitch);
    const key = el("button", {
      class: "button outline hotkey-key",
      attrs: { type: "button", "aria-label": words.keyFor(name), "data-control": "action" },
      on: {
        click: () => {
          if (swallowClick) return void (swallowClick = false);
          wait(waiting === pitch ? undefined : pitch);
        },
        blur: () => waiting === pitch && wait(undefined),
        keydown: (event) => {
          if (waiting !== pitch || NEVER_BOUND.has(event.code) || event.ctrlKey || event.altKey || event.metaKey) return;
          event.preventDefault();
          event.stopPropagation();
          settings.set("keyBindings", rebindKey(settings.get("keyBindings"), pitch, event.code));
          swallowClick = event.code === "Space" || event.code === "Enter" || event.code === "NumpadEnter";
          wait(undefined);
        },
        keyup: () => setTimeout(() => (swallowClick = false), 0),
      },
    });
    keys.set(pitch, key);
    const clear = button(words.clear, () => {
      settings.set("keyBindings", rebindKey(settings.get("keyBindings"), pitch, ""));
      wait(undefined);
    }, { title: words.clearTitle(name), class: "outline" });
    rows.push(el("li", { class: "hotkey-row", children: [el("span", { class: "hotkey-label", text: name }), key, clear] }));
  }
  show();

  const list = el("ul", { class: "hotkey-list", children: rows });
  const firstBound = Math.min(...keysOf(settings.get("keyBindings")).keys());
  if (Number.isFinite(firstBound)) requestAnimationFrame(() => keys.get(firstBound)?.scrollIntoView({ block: "start" }));

  const reset = button(words.resetAll, () => {
    settings.reset("keyBindings");
    wait(undefined);
  }, { class: "outline" });

  return el("div", {
    class: "hotkey-dialog",
    children: [
      el("p", { text: t().player.input.keyBinding.help }),
      list,
      reset,
    ],
  });
}

/** The settings panel's control for `keyBindings`: a button that runs `open`, which shows the dialog. */
export function keyBindingsControl(open: () => void): Control<string> {
  const node = button("", open, { class: "outline" });
  const pick = (m: Messages) => m.player.input.keyBinding.open;
  localize(node, pick);
  localize(node, pick, "title");
  localize(node, pick, "aria-label");
  return { element: node, set() {} };
}
