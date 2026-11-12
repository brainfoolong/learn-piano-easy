/**
 * The skeleton: a stand-in for a slow part, drawn at that part's final size so nothing shifts when it
 * arrives.
 *
 * It follows the button's template. It takes typed options and keeps its shape in a `data-` attribute.
 * It holds no text, and it is `aria-hidden`, because it says nothing a reader needs. The caller marks the
 * region it fills `aria-busy` until the part arrives, and then replaces the skeleton with it.
 *
 * - **Text:** a number of lines, the last one shorter. Each line is as tall as a line of the text it
 *   stands in for, at that text's size and line height, so the real text takes the same room.
 * - **Block:** a width and a height, or a width and an aspect ratio. A length is a token name, such as
 *   `--s-10`, or any CSS length.
 * - **Circle:** a diameter, for an avatar or a medal.
 *
 * A soft shimmer crosses each shape. It moves by `transform` on a pseudo-element only, and it stops
 * under reduced motion.
 */
import "./skeleton.css";
import { el } from "../dom";

/** The text sizes a text skeleton matches, each a `--t-*` token. */
export type SkeletonTextSize = "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl";

export type SkeletonOptions =
  | {
      shape: "text";
      /** How many lines, 3 when absent. */
      lines?: number;
      /** The size of the text it stands in for, `md` when absent. */
      size?: SkeletonTextSize;
      /** Whether the text is a heading, which sets lines closer. */
      heading?: boolean;
    }
  | {
      shape: "block";
      /** A token name such as `--s-12`, or a CSS length. The full width when absent. */
      width?: string;
      /** A token name or a CSS length. Ignored when `ratio` is given. */
      height?: string;
      /** An aspect ratio such as `16 / 9`, which sets the height from the width. */
      ratio?: string;
    }
  | {
      shape: "circle";
      /** The diameter, a token name or a CSS length. `--s-9` when absent. */
      size?: string;
    };

/** A skeleton of the shape its options describe. */
export function skeleton(options: SkeletonOptions): HTMLElement {
  const node = el("div", { class: "skel", attrs: { "aria-hidden": "true", "data-shape": options.shape } });
  if (options.shape === "text") {
    node.dataset.size = options.size ?? "md";
    if (options.heading) node.dataset.heading = "";
    const count = Math.max(1, Math.floor(options.lines ?? 3));
    for (let index = 0; index < count; index++) {
      node.append(el("div", { class: "skel__line", children: [el("span", { class: "skel__bar" })] }));
    }
  } else if (options.shape === "block") {
    if (options.width !== undefined) node.style.setProperty("--skel-width", length(options.width));
    if (options.ratio !== undefined) {
      node.style.setProperty("--skel-ratio", options.ratio);
      node.style.setProperty("--skel-height", "auto");
    } else if (options.height !== undefined) {
      node.style.setProperty("--skel-height", length(options.height));
    }
  } else if (options.size !== undefined) {
    node.style.setProperty("--skel-size", length(options.size));
  }
  return node;
}

/** A length as CSS: a token name becomes a `var()` of it, and anything else passes as it is. */
function length(value: string): string {
  return value.startsWith("--") ? `var(${value})` : value;
}
