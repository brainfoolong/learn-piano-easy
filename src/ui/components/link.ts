/**
 * The link: the site's way to go to another page, inside a sentence or on its own.
 *
 * It follows the button's template. It takes typed options, holds no text of its own, and keeps its
 * variant in a `data-` attribute. Its colour is the brand's, deepened towards the text so it meets 4.5
 * to 1 on every surface. A visited link looks the same as a new one.
 *
 * - **Inline:** it flows in a sentence, underlined. WCAG exempts it from the touch size.
 * - **Standalone:** it stands on its own line with an arrow after its label. Under the pointer its
 *   label is underlined and the arrow slides forward. On a touch screen it is at least 44 pixels tall.
 * - **External:** it opens in a new tab, with `rel="noopener"` so the new page cannot reach this one.
 */
import "./link.css";
import { el } from "../dom";
import { icon } from "../icons/icons";

export type LinkVariant = "inline" | "standalone";

export interface LinkOptions {
  /** The visible label, which is also the accessible name. */
  label: string;
  /** Where it goes, as a relative URL. */
  href: string;
  /** `inline` when absent. */
  variant?: LinkVariant;
  /** Whether it opens in a new tab. */
  external?: boolean;
}

/** A link with a label, as its options describe. */
export function link(options: LinkOptions): HTMLAnchorElement {
  const variant = options.variant ?? "inline";
  const attrs: Record<string, string> = { href: options.href, "data-variant": variant };
  if (options.external) {
    attrs.target = "_blank";
    attrs.rel = "noopener";
  }
  if (variant === "inline") return el("a", { class: "link", attrs, text: options.label });
  return el("a", {
    class: "link",
    attrs,
    children: [el("span", { class: "link__label", text: options.label }), icon("arrow-right")],
  });
}
