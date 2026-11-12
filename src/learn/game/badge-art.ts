/**
 * The art of each badge: one motif per kind of badge, drawn as SVG for the badge medal of
 * `src/ui/components/badge-medal.ts`.
 *
 * - **Motifs are our own,** drawn on the 24 pixel grid of the icons, with the same stroke in
 *   `currentColor`. The medal then colours them by its state, as it does an icon.
 * - **A tiered badge shows its count** on the motif, such as `7` on the flame of `streak-7`. The count
 *   is for the eye only, since the medal's label names the badge to a screen reader.
 *
 * Decisions, and what each costs:
 * - **The motifs are data,** and `badgeArt` builds them with `createElementNS`. No string reaches
 *   `innerHTML`, and a test reads the data without a browser.
 * - **The motifs are drawn here, never copied from an icon set,** so they need no license notice. The
 *   cost is plainer shapes than a designer's.
 */
import type { Badge, BadgeMotif } from "./badges";

/** One SVG child element: its tag and its attributes. */
export type ArtPart = readonly ["path" | "circle" | "rect", Readonly<Record<string, string>>];

/** The path of a five-pointed star centred on `x`, `y`, with the outer radius `r`. */
function star(x: number, y: number, r: number): string {
  const points = Array.from({ length: 10 }, (_, i) => {
    const angle = (Math.PI / 5) * i - Math.PI / 2;
    const radius = i % 2 === 0 ? r : r * 0.45;
    return `${(x + radius * Math.cos(angle)).toFixed(2)} ${(y + radius * Math.sin(angle)).toFixed(2)}`;
  });
  return `M${points.join("L")}Z`;
}

/** Every motif's parts. */
export const MOTIFS: Record<BadgeMotif, readonly ArtPart[]> = {
  note: [["circle", { cx: "8", cy: "17", r: "3" }], ["path", { d: "M11 17V4l7 2.5" }]],
  lesson: [["path", { d: "M12 6.5v13M12 6.5C10 5 7 4.5 3 4.5v13c4 0 7 .5 9 2 2-1.5 5-2 9-2v-13c-4 0-7 .5-9 2" }]],
  star: [["path", { d: star(12, 12.5, 9.5) }]],
  stars: [["path", { d: star(12, 7, 5) }], ["path", { d: star(6.5, 15, 4.5) }]],
  goal: [["circle", { cx: "12", cy: "12", r: "9" }], ["circle", { cx: "12", cy: "12", r: "5" }], ["circle", { cx: "12", cy: "12", r: "1" }]],
  flame: [["path", { d: "M11 2.5c.8 3 4.5 5 4.5 9.5a5 5 0 0 1-10 0c0-2.6 1.6-3.8 2-5.5 1 1 1.8 2 1.8 3 1.5-1.8 1.9-4 1.7-7z" }]],
  world: [["path", { d: "M2.5 20.5 9 10l4 6 2.5-3.5 6 8z" }], ["path", { d: "M9 10V3.5l4.5 2L9 7.5" }]],
  notes: [["circle", { cx: "5.5", cy: "15", r: "2.5" }], ["circle", { cx: "13.5", cy: "13", r: "2.5" }], ["path", { d: "M8 15V5l8-2v10" }]],
  metronome: [["path", { d: "M7 21h10L14.5 3.5h-5z" }], ["path", { d: "M12 16l6-9" }], ["path", { d: "M8 16h8" }]],
  staff: [["path", { d: "M2.5 6h19M2.5 10h19M2.5 14h19M2.5 18h19" }], ["circle", { cx: "10", cy: "12", r: "2" }], ["path", { d: "M12 12V3" }]],
  sunrise: [["path", { d: "M2.5 18h19" }], ["path", { d: "M7 18a5 5 0 0 1 10 0" }], ["path", { d: "M12 4.5v3M4.5 9.5l2 1.5M19.5 9.5l-2 1.5" }]],
  moon: [["path", { d: "M20 14.5A8.5 8.5 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5z" }]],
  comeback: [["path", { d: "M3 11 12 3.5l9 7.5v9.5H3z" }], ["path", { d: "M9.5 20.5V15h5v5.5" }]],
  crown: [["path", { d: "M3 7.5l4.5 4.5L12 4.5l4.5 7.5L21 7.5 19 19H5z" }], ["path", { d: "M5 21.5h14" }]],
};

const SVG = "http://www.w3.org/2000/svg";

/** The parts that draw `badge`, its count left out. */
export function artOf(badge: Badge): readonly ArtPart[] {
  return MOTIFS[badge.motif];
}

/** The art of `badge` as an SVG element, hidden from screen readers. The medal sizes it as an icon. */
export function badgeArt(badge: Badge): SVGSVGElement {
  const svg = document.createElementNS(SVG, "svg");
  const attrs: Record<string, string> = {
    class: "icon",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    "stroke-width": "1.75",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "aria-hidden": "true",
  };
  for (const [key, value] of Object.entries(attrs)) svg.setAttribute(key, value);
  for (const [tag, partAttrs] of artOf(badge)) {
    const part = document.createElementNS(SVG, tag);
    for (const [key, value] of Object.entries(partAttrs)) part.setAttribute(key, value);
    svg.append(part);
  }
  if (badge.tier !== undefined) {
    const count = document.createElementNS(SVG, "text");
    const textAttrs: Record<string, string> = {
      x: "18.5",
      y: "23",
      "text-anchor": "middle",
      "font-size": badge.tier.length > 2 ? "6.5" : "8",
      "font-weight": "700",
      fill: "currentColor",
      stroke: "none",
    };
    for (const [key, value] of Object.entries(textAttrs)) count.setAttribute(key, value);
    count.textContent = badge.tier;
    svg.append(count);
  }
  return svg;
}
