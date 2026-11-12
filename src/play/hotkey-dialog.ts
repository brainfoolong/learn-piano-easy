/**
 * The hotkey dialog: a list of every action with the key bound to it, where the learner rebinds a key.
 *
 * A click on an action's key button waits for the next key, and binds that key to the action. The
 * setting `hotKeyBindings` keeps the change, through `rebind` in `src/play/hotkeys.ts`.
 *
 * Decisions, and what each costs:
 * - Escape and Tab never bind. Escape closes the dialog in `src/app/shell.ts`, and Tab moves the focus,
 *   so a keyboard learner is never trapped. Neither key can then be a hotkey.
 * - A key already bound elsewhere moves to the new action, and the list shows the old one as `None`.
 * - A key bound with Space or Enter would also click the focused button, so that one click is ignored.
 * - The dialog opens from the settings panel's Hotkeys row. Its reset button there returns every key
 *   to its default, as does the dialog's own reset button.
 * - The dialog is built on each open, so it takes its texts from the live locale then. The button that
 *   opens it lives on, so its label follows each change of the locale.
 */
import { localize, t } from "../i18n/live";
import type { Messages } from "../i18n/messages/en";
import type { SettingsStore } from "../settings/store";
import type { Control } from "../ui/controls";
import { button, el } from "../ui/dom";
import { ACTIONS, type ActionId, actionLabel, bindingsOf, comboOf, keyLabel, rebind } from "./hotkeys";
import "./hotkey-dialog.css";

/** The keys that never bind, because the dialog and the browser need them. */
const NEVER_BOUND = new Set(["Escape", "Tab"]);

/** The body of the hotkey dialog over `settings`. */
export function createHotkeyDialog(settings: SettingsStore): HTMLElement {
  const keys = new Map<ActionId, HTMLButtonElement>();
  let waiting: ActionId | undefined;
  let swallowClick = false;

  const words = t().player.bar.hotkeyDialog;
  const show = () => {
    const bound = bindingsOf(settings.get("hotKeyBindings"));
    for (const { id } of ACTIONS) {
      const key = keys.get(id);
      if (key === undefined) continue;
      key.textContent = waiting === id ? words.pressKey : keyLabel(bound[id]);
      key.setAttribute("aria-pressed", String(waiting === id));
      key.setAttribute("aria-label", words.keyFor(actionLabel(id)));
    }
  };
  const wait = (id: ActionId | undefined) => {
    waiting = id;
    show();
  };

  const rows = ACTIONS.map(({ id }) => {
    const label = actionLabel(id);
    const key = el("button", {
      class: "button outline hotkey-key",
      attrs: { type: "button", "data-control": "action" },
      on: {
        click: () => {
          if (swallowClick) return void (swallowClick = false);
          wait(waiting === id ? undefined : id);
        },
        blur: () => waiting === id && wait(undefined),
        keydown: (event) => {
          if (waiting !== id || NEVER_BOUND.has(event.code)) return;
          const combo = comboOf(event);
          if (combo === undefined) return;
          event.preventDefault();
          event.stopPropagation();
          settings.set("hotKeyBindings", rebind(settings.get("hotKeyBindings"), id, combo));
          swallowClick = event.code === "Space" || event.code === "Enter" || event.code === "NumpadEnter";
          wait(undefined);
        },
        keyup: () => setTimeout(() => (swallowClick = false), 0),
      },
    });
    keys.set(id, key);
    const clear = button(words.clear, () => {
      settings.set("hotKeyBindings", rebind(settings.get("hotKeyBindings"), id, ""));
      wait(undefined);
    }, { title: words.clearTitle(label), class: "outline" });
    return el("li", { class: "hotkey-row", children: [el("span", { class: "hotkey-label", text: label }), key, clear] });
  });
  show();

  const reset = button(words.resetAll, () => {
    settings.reset("hotKeyBindings");
    wait(undefined);
  }, { class: "outline" });

  return el("div", {
    class: "hotkey-dialog",
    children: [
      el("p", { text: words.help }),
      settings.get("disableHotkeys") ? el("p", { class: "hotkey-off", text: words.off }) : null,
      el("ul", { class: "hotkey-list", children: rows }),
      reset,
    ],
  });
}

/** The settings panel's control for `hotKeyBindings`: a button that runs `open`, which shows the dialog. */
export function hotkeysControl(open: () => void): Control<string> {
  const node = button("", open, { class: "outline" });
  const pick = (m: Messages) => m.player.bar.hotkeyDialog.open;
  localize(node, pick);
  localize(node, pick, "aria-label");
  return { element: node, set() {} };
}
