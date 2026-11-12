/**
 * The dialog: a panel that asks the learner one thing over the page, and a sheet from the bottom on a
 * narrow screen.
 *
 * `dialog` builds a native `<dialog>` and returns the calls that open and close it. `showModal` makes
 * the rest of the page inert and keeps the focus inside, so no focus trap of our own is needed. The
 * page behind keeps its scroll, because locking it would shift the layout when the scrollbar goes.
 *
 * - **Parts:** a heading, which is the accessible name through `aria-labelledby`, a body, optional
 *   actions, and a close icon button. The caller passes every text and every action.
 * - **Width:** narrow for a question, and `wide` for a body such as a list of songs. Both fill a
 *   narrow screen as a sheet.
 * - **Opening:** `open` appends the dialog to the body and focuses the dialog itself, so a screen
 *   reader reads its name first. It remembers the element that had the focus.
 * - **Closing:** Esc, the close button, `close`, and a click on the backdrop close it. With
 *   `dismissOnBackdrop` off, the backdrop does nothing. On close, the dialog leaves the document, the
 *   remembered element gets the focus back, and `onClose` runs.
 * - **Preview:** `dialogPreview` builds the same panel in flow, never modal, so the gallery shows its
 *   look without covering the page.
 */
import "./dialog.css";
import { el } from "../dom";
import { iconButton } from "./icon-button";

export interface DialogOptions {
  /** The heading, which is also the accessible name. */
  title: string;
  /** What the dialog says or asks. */
  body: Node;
  /** The actions at its foot, such as buttons. No foot when absent. */
  actions?: Node[];
  /** The accessible name of the close button. */
  closeLabel: string;
  /** Whether the panel is wide, for a body such as a list or a table. Narrow when absent. */
  wide?: boolean;
  /** The heading's level, 2 when absent. */
  titleLevel?: 2 | 3 | 4;
  /** Whether a click on the backdrop closes it, true when absent. */
  dismissOnBackdrop?: boolean;
  /** Called once the dialog has closed, however it closed. */
  onClose?: () => void;
}

/** What `dialog` returns: its element, and the calls that open and close it. */
export interface Dialog {
  element: HTMLDialogElement;
  open(): void;
  close(): void;
}

let nextId = 0;

/** The panel's parts inside `host`: the head with the heading and the close button, the body and the foot. */
function fill(host: HTMLElement, options: DialogOptions, onCloseClick: () => void): void {
  const id = `dialog-title-${++nextId}`;
  host.classList.add("dialog");
  host.setAttribute("aria-labelledby", id);
  if (options.wide) host.setAttribute("data-size", "wide");
  host.append(
    el("div", {
      class: "dialog__head",
      children: [
        el(`h${options.titleLevel ?? 2}`, { class: "dialog__title", attrs: { id }, text: options.title }),
        iconButton({ label: options.closeLabel, icon: "x", variant: "ghost", size: "small", onClick: onCloseClick }),
      ],
    }),
    el("div", { class: "dialog__body", children: [options.body] }),
  );
  if (options.actions !== undefined && options.actions.length > 0) {
    host.append(el("div", { class: "dialog__actions", children: options.actions }));
  }
}

/** A modal dialog, as its options describe. It enters the document on `open` and leaves it on close. */
export function dialog(options: DialogOptions): Dialog {
  const element = el("dialog", { attrs: { tabindex: "-1" } });
  let returnTo: HTMLElement | null = null;
  let pressedOutside = false;

  const close = () => {
    if (element.open) element.close();
  };
  fill(element, options, close);

  // A click closes only when both its press and its release fall outside the panel, so a text
  // selection dragged out of the panel does not close it.
  const outside = (event: MouseEvent) => {
    const box = element.getBoundingClientRect();
    return event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom;
  };
  element.addEventListener("pointerdown", (event) => {
    pressedOutside = event.target === element && outside(event);
  });
  element.addEventListener("click", (event) => {
    const dismiss = options.dismissOnBackdrop ?? true;
    if (dismiss && pressedOutside && event.target === element && outside(event)) close();
    pressedOutside = false;
  });

  element.addEventListener("close", () => {
    element.remove();
    const target = returnTo;
    returnTo = null;
    if (target?.isConnected) target.focus();
    options.onClose?.();
  });

  const open = () => {
    if (element.open) return;
    returnTo = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    document.body.append(element);
    element.showModal();
    element.focus();
  };

  return { element, open, close };
}

/** The dialog's panel in flow, for the gallery: it looks open, and its close button does nothing. */
export function dialogPreview(options: Omit<DialogOptions, "dismissOnBackdrop" | "onClose">): HTMLElement {
  const host = el("div", { attrs: { role: "group", "data-preview": "" } });
  fill(host, options, () => {});
  return host;
}
