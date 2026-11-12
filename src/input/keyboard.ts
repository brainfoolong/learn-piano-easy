/**
 * The computer keyboard as a piano: each bound key plays one note on the input bus.
 *
 * A binding ties a key's `KeyboardEvent.code` to a MIDI note. The code names the key's place, so the
 * bindings hold on any keyboard layout, as the hotkeys' do.
 *
 * Decisions, and what each costs:
 * - The defaults follow the common layout of music software. The bottom letter row plays C3 to B3, with
 *   the row above it as the black keys. The top letter row plays C4 to C5, with the digits as the black
 *   keys. No default key is a default hotkey.
 * - The setting `keyBindings` stores only the learner's changes, as JSON from note to code. An empty
 *   code unbinds the note. A note has one key, and binding a key to a note unbinds it from any other.
 * - The editor lists the notes from C2 to C6. A note outside them keeps no key, which keeps the list short.
 * - A note key comes before the hotkeys. Its key event is marked handled, so a hotkey on the same key
 *   runs nothing.
 * - A key held with Ctrl, Alt or Meta plays nothing, so the browser's own shortcuts still work. Nor does
 *   a key typed into a text field or a dialog, and a held key's repeats play nothing.
 * - Every note plays at velocity `KEY_VELOCITY`, because a key has no force to read.
 * - The window losing focus lets every key go, because its key-up never arrives.
 * - The pure parts read only a key event's fields, so their tests run without a browser.
 */
import { takesKey, type KeyPress } from "../play/hotkeys";
import type { SettingsStore } from "../settings/store";
import type { InputBus } from "./input-bus";

/** The velocity of every note a computer key plays. */
export const KEY_VELOCITY = 96;

/** The lowest and highest notes the editor lists. */
export const EDITOR_FIRST = 36;
export const EDITOR_LAST = 84;

/** The default key of each note, from C3 to C5. */
export const DEFAULT_KEYS: ReadonlyMap<number, string> = new Map(
  [
    ["KeyZ", "KeyS", "KeyX", "KeyD", "KeyC", "KeyV", "KeyG", "KeyB", "KeyH", "KeyN", "KeyJ", "KeyM"],
    ["KeyQ", "Digit2", "KeyW", "Digit3", "KeyE", "KeyR", "Digit5", "KeyT", "Digit6", "KeyY", "Digit7", "KeyU", "KeyI"],
  ].flatMap((row, octave) => row.map((code, step) => [48 + 12 * octave + step, code] as const)),
);

/** The learner's changes stored in `text`, from note to code. Text that is not such JSON reads as none. */
export function parseKeyBindings(text: string): Map<number, string> {
  const out = new Map<number, string>();
  let raw: unknown;
  try {
    raw = text === "" ? {} : JSON.parse(text);
  } catch {
    return out;
  }
  if (typeof raw !== "object" || raw === null) return out;
  for (const [key, code] of Object.entries(raw)) {
    const pitch = Number(key);
    if (Number.isInteger(pitch) && pitch >= EDITOR_FIRST && pitch <= EDITOR_LAST && typeof code === "string") out.set(pitch, code);
  }
  return out;
}

/** The key of each note under the changes in `text`, the default where it has none. Unbound notes are left out. */
export function keysOf(text: string): Map<number, string> {
  const out = new Map(DEFAULT_KEYS);
  for (const [pitch, code] of parseKeyBindings(text)) {
    if (code === "") out.delete(pitch);
    else out.set(pitch, code);
  }
  return out;
}

/** The note of each bound key under the changes in `text`. */
export function notesOf(text: string): Map<string, number> {
  return new Map([...keysOf(text)].map(([pitch, code]) => [code, pitch]));
}

/** The setting text after binding `code` to `pitch`, which unbinds `code` from any other note. */
export function rebindKey(text: string, pitch: number, code: string): string {
  const now = keysOf(text);
  if (code !== "") for (const [other, bound] of now) if (other !== pitch && bound === code) now.delete(other);
  if (code === "") now.delete(pitch);
  else now.set(pitch, code);
  const changes: Record<string, string> = {};
  for (let p = EDITOR_FIRST; p <= EDITOR_LAST; p++) {
    const key = now.get(p) ?? "";
    if (key !== (DEFAULT_KEYS.get(p) ?? "")) changes[p] = key;
  }
  return Object.keys(changes).length === 0 ? "" : JSON.stringify(changes);
}

/** Whether `press` may play a note: no Ctrl, Alt or Meta held, and not typed into a text field. */
export function playsNote(press: KeyPress): boolean {
  return !press.ctrlKey && !press.altKey && !press.metaKey && !takesKey(press.target, press.code);
}

/**
 * Plays the bound keys of `settings` on `bus` from `target`'s key events. Returns what stops it.
 * A key pressed inside a dialog plays nothing, unless the dialog is `playsIn`, one that listens for notes.
 */
export function attachKeyboard(bus: InputBus, settings: Pick<SettingsStore, "get">, target: Window = window, playsIn?: Element): () => void {
  let text: string | undefined;
  let notes = new Map<string, number>();
  /** The note each held key plays, by code, so a rebinding while held still ends the right note. */
  const held = new Map<string, number>();

  const onDown = (event: KeyboardEvent) => {
    if (!playsNote(event) || (insideDialog(event.target) && !(event.target instanceof Node && playsIn?.contains(event.target)))) return;
    const now = settings.get("keyBindings");
    if (now !== text) {
      text = now;
      notes = notesOf(now);
    }
    const pitch = notes.get(event.code);
    if (pitch === undefined) return;
    event.preventDefault();
    if (event.repeat || held.has(event.code)) return;
    held.set(event.code, pitch);
    bus.noteOn(pitch, KEY_VELOCITY, "keyboard");
  };
  const onUp = (event: KeyboardEvent) => {
    const pitch = held.get(event.code);
    if (pitch === undefined) return;
    held.delete(event.code);
    bus.noteOff(pitch, "keyboard");
  };
  const onBlur = () => {
    held.clear();
    bus.releaseAll("keyboard");
  };

  // The capture phase runs before the hotkeys' listener, which skips an event already handled.
  target.addEventListener("keydown", onDown, true);
  target.addEventListener("keyup", onUp, true);
  target.addEventListener("blur", onBlur);
  return () => {
    target.removeEventListener("keydown", onDown, true);
    target.removeEventListener("keyup", onUp, true);
    target.removeEventListener("blur", onBlur);
    onBlur();
  };
}

function insideDialog(target: EventTarget | null): boolean {
  return typeof Element !== "undefined" && target instanceof Element && target.closest("dialog, [role=dialog]") !== null;
}
