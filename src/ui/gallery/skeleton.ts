/** The gallery's section of the skeleton: text, block and circle, and a card placeholder built of them. */
import { el } from "../dom";
import { skeleton } from "../components/skeleton";
import { group, section, specimen, type Locale } from "./parts";

const MESSAGES = {
  en: {
    skeleton: "Skeleton",
    text: "Text",
    shapes: "Blocks and circles",
    composed: "A card while it loads",
  },
  de: {
    skeleton: "Ladeplatzhalter",
    text: "Text",
    shapes: "Blöcke und Kreise",
    composed: "Eine Karte beim Laden",
  },
} satisfies Record<Locale, Record<string, string>>;

/**
 * A region that waits for its part, as a caller marks it, with a width a skeleton can fill.
 * A specimen is only as wide as its content, so the region sets the width itself.
 */
function busy(width: string, children: Node[], style = ""): HTMLElement {
  return el("div", {
    attrs: {
      "aria-busy": "true",
      style: `display: grid; gap: var(--s-3); width: ${width}; max-width: 100%; ${style}`,
    },
    children,
  });
}

const WIDE = "calc(var(--s-12) * 2.5)";

/** The skeleton's section in the gallery. */
export function skeletonSection(locale: Locale): HTMLElement {
  const t = MESSAGES[locale];
  const card = busy(
    WIDE,
    [
      el("div", {
        attrs: { style: "display: flex; align-items: center; gap: var(--s-3); min-width: 0" },
        children: [skeleton({ shape: "circle" }), skeleton({ shape: "text", lines: 2, size: "sm" })],
      }),
      skeleton({ shape: "block", ratio: "16 / 9" }),
      skeleton({ shape: "text", lines: 1, size: "xl", heading: true }),
      skeleton({ shape: "text", lines: 3 }),
    ],
    "padding: var(--s-4); border: 1px solid var(--c-line); border-radius: var(--r-card); background: var(--c-surface-2); box-shadow: var(--e-1)",
  );
  return section("skeleton", t.skeleton, [
    group(t.text, [
      specimen("text", busy(WIDE, [skeleton({ shape: "text" })])),
      specimen("text-small", busy(WIDE, [skeleton({ shape: "text", lines: 2, size: "sm" })])),
      specimen("text-heading", busy(WIDE, [skeleton({ shape: "text", lines: 1, size: "2xl", heading: true })])),
    ]),
    group(t.shapes, [
      specimen("block", busy("var(--s-12)", [skeleton({ shape: "block", width: "--s-12", height: "--s-11" })])),
      specimen("block-ratio", busy(WIDE, [skeleton({ shape: "block", ratio: "16 / 9" })])),
      specimen("circle", busy("auto", [skeleton({ shape: "circle" })])),
      specimen("circle-large", busy("auto", [skeleton({ shape: "circle", size: "--s-11" })])),
    ]),
    group(t.composed, [specimen("card", card)]),
  ]);
}
