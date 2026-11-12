/**
 * The card: a surface with a visible edge that holds one piece of content, such as a song or a lesson.
 *
 * A card rests on `--c-surface-1` at elevation `--e-1`. Its optional media sits above its body, and
 * the body holds a title, a text and the caller's own nodes, in that order. Like every component it
 * holds no text of its own.
 *
 * - **Variants:** `plain` is still, `interactive` is one target, and `featured` is raised on
 *   `--c-surface-2` with a firmer edge and a honey band across its top.
 * - **Selected:** with `selected`, the card is the chosen one of its group. It carries `data-selected`
 *   and takes a teal edge and tint. The caller says so to a screen reader in the card's own text.
 * - **One target:** a card with a title and an `href` or an `onClick` is one target, whatever its
 *   variant. Its title is the link or the button, and that element's `::after` covers the whole card.
 *   So a click anywhere on the card follows it, and no interactive element nests in another.
 *   `interactive` is the variant such a card takes when the caller names none.
 * - **A target's body holds no control,** since the title's cover lies over the body. For the same
 *   reason, its body text cannot be selected.
 * - **Pointer:** a target lifts to the next elevation under the pointer, and shrinks a little while
 *   pressed. Its focus ring circles the whole card.
 * - **Width:** a card fills the width its parent gives it, and adapts to that width through a
 *   container query. A parent that sizes to its content must give the card a width.
 */
import "./card.css";
import { el } from "../dom";

export type CardVariant = "plain" | "interactive" | "featured";

export interface CardOptions {
  /** `interactive` when the card is a target, and `plain` otherwise. */
  variant?: CardVariant;
  /** The card's heading, which is also the target's accessible name. */
  title?: string;
  /** The title's heading level, 3 when absent, so it never skips a level under its page. */
  titleLevel?: 2 | 3 | 4 | 5;
  /** A short text under the title. */
  text?: string;
  /** A picture or drawing above the body, which takes the card's top corners. */
  media?: Node;
  /** The caller's own nodes after the text. A target's body holds no control. */
  body?: Node[];
  /** Where the card leads, which makes its title a link. */
  href?: string;
  /** Called on a click. Without an `href`, it makes the title a button. */
  onClick?: () => void;
  /** Whether the card is the chosen one of its group. */
  selected?: boolean;
}

/** A card with its media and body, as its options describe. */
export function card(options: CardOptions): HTMLElement {
  const target = options.title !== undefined && (options.href !== undefined || options.onClick !== undefined);
  const node = el("article", {
    class: "card",
    attrs: { "data-variant": options.variant ?? (target ? "interactive" : "plain") },
  });
  if (target) node.setAttribute("data-target", "");
  if (options.selected) node.setAttribute("data-selected", "");
  if (options.media !== undefined) {
    node.append(el("div", { class: "card__media", children: [options.media] }));
  }
  node.append(
    el("div", {
      class: "card__body",
      children: [
        options.title === undefined ? null : title(options, target),
        options.text === undefined ? null : el("p", { class: "card__text", text: options.text }),
        ...(options.body ?? []),
      ],
    }),
  );
  return node;
}

/** The card's heading, holding the target's link or button when the card is a target. */
function title(options: CardOptions, target: boolean): HTMLElement {
  const heading = el(`h${options.titleLevel ?? 3}` as "h3", { class: "card__title" });
  const text = options.title ?? "";
  if (!target) {
    heading.textContent = text;
    return heading;
  }
  const action =
    options.href === undefined
      ? el("button", { class: "card__action", attrs: { type: "button" }, text })
      : el("a", { class: "card__action", attrs: { href: options.href }, text });
  action.addEventListener("click", () => options.onClick?.());
  heading.append(action);
  return heading;
}
