/**
 * Our small DOM helpers: element creation with classes, attributes, children and listeners.
 *
 * The app builds its UI from these calls instead of a framework. Each panel owns its elements and
 * updates them in place, so no virtual DOM or diffing is needed.
 */

/** What `el` accepts beside the tag: classes, attributes, properties, listeners and children. */
export interface ElementSpec<K extends keyof HTMLElementTagNameMap> {
  class?: string;
  attrs?: Record<string, string>;
  props?: Partial<HTMLElementTagNameMap[K]>;
  on?: { [E in keyof HTMLElementEventMap]?: (event: HTMLElementEventMap[E]) => void };
  children?: (Node | string | null | undefined | false)[];
  text?: string;
}

/** Creates an element from its tag and spec. */
export function el<K extends keyof HTMLElementTagNameMap>(
  tag: K,
  spec: ElementSpec<K> = {},
): HTMLElementTagNameMap[K] {
  const node = document.createElement(tag);
  if (spec.class) node.className = spec.class;
  for (const [name, value] of Object.entries(spec.attrs ?? {})) node.setAttribute(name, value);
  if (spec.props) Object.assign(node, spec.props);
  for (const [type, handler] of Object.entries(spec.on ?? {})) {
    node.addEventListener(type, handler as EventListener);
  }
  if (spec.text !== undefined) node.textContent = spec.text;
  for (const child of spec.children ?? []) {
    if (child === null || child === undefined || child === false) continue;
    node.append(child);
  }
  return node;
}

/**
 * A button with a label, an accessible name and a click handler. It is the action control of
 * `src/ui/controls.css`, and its class `primary` fills it with the brand.
 */
export function button(label: string, onClick: () => void, options: { title?: string; class?: string } = {}) {
  return el("button", {
    class: `button${options.class ? ` ${options.class}` : ""}`,
    attrs: { type: "button", title: options.title ?? label, "aria-label": options.title ?? label, "data-control": "action" },
    text: label,
    on: { click: () => onClick() },
  });
}
