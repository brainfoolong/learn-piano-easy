/**
 * The landing page: the bands a visitor scrolls through, from the hero down.
 *
 * Each band is a function of its own file under `src/landing/`, and this view stacks them in the order
 * of the goal `landing-page`'s standing decisions. The hero and the last call run the full width under
 * the palette's glow. Every band between them is a section of `src/ui/components/section.ts`, which
 * brings its own container and its own space above and below.
 *
 * - **Each section has a hue,** set here as `data-hue`, so the order and the colours have one home.
 *   The stylesheet draws the section's overline and its icon tiles in that hue. A section of the tone
 *   `band` takes the hue's tint as its ground, so plain and tinted bands alternate down the page.
 * - **Each part enters on its own.** A section's title lines, and each card, step, panel and fold, rise
 *   in as they first scroll into view, through `src/landing/reveal.ts`. The hero's parts enter with the
 *   page, by the stylesheet alone.
 */
import "./landing.css";
import "./bands.css";
import type { Locale } from "../i18n/locale";
import type { View, ViewContext } from "../site/views";
import { el } from "../ui/dom";
import { devices } from "./devices";
import { free } from "./free";
import { hero } from "./hero";
import { howItWorks } from "./how-it-works";
import { lastCall } from "./last-call";
import { questions } from "./questions";
import { rarities } from "./rarities";
import { revealOnEntry } from "./reveal";
import { twoWays } from "./two-ways";

/** A section's hue: one of the palette's four. */
type Hue = "honey" | "teal" | "iris" | "orchid";

/** What enters on its own: a section's title lines, and each card, step, panel and fold of a band. */
const PARTS = [
  ".section__eyebrow",
  ".section__heading",
  ".section__lead",
  ".landing-ways > *",
  ".landing-steps > *",
  ".landing-rarities > *",
  ".landing-devices > *",
  ".landing-devices__piano",
  ".landing-free > *",
  ".landing-questions > *",
  ".landing-last__inner > *",
].join(",");

/** `band` in `hue`. */
function inHue(band: HTMLElement, hue: Hue): HTMLElement {
  band.dataset.hue = hue;
  return band;
}

/** The landing page in `locale`. */
export function landingView(locale: Locale, context: ViewContext): View {
  const element = el("div", {
    class: "landing",
    children: [
      hero(locale, context.settings),
      inHue(twoWays(locale), "honey"),
      inHue(howItWorks(locale), "iris"),
      inHue(rarities(locale, context.settings), "orchid"),
      inHue(devices(locale, context.settings), "teal"),
      inHue(free(locale), "honey"),
      inHue(questions(locale), "iris"),
      lastCall(locale),
    ],
  });
  revealOnEntry([...element.querySelectorAll<HTMLElement>(PARTS)]);
  return { element };
}
