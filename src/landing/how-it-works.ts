/**
 * The landing page's band of how learning works: four steps, in the order a lesson runs them. Learn a
 * skill, practise it on your keyboard, play a real song, and earn badges.
 *
 * The steps are an ordered list, so a screen reader counts them. Each sits on a surface, with its
 * number on a tile in the band's hue and an icon beside it. They stand in a row of four from 1280
 * pixels, two by two from 768, and one above another below.
 */
import { messagesOf, type Locale } from "../i18n/locale";
import { section } from "../ui/components/section";
import { el } from "../ui/dom";
import { icon, type IconName } from "../ui/icons/icons";

/** Each step's icon, in the order of the steps. */
const STEP_ICONS: readonly IconName[] = ["sparkles", "piano", "play", "trophy"];

/** The band of how learning works in `locale`. */
export function howItWorks(locale: Locale): HTMLElement {
  const t = messagesOf(locale).landing.howItWorks;
  const steps = t.steps.map((step, index) =>
    el("li", {
      class: "landing-steps__step",
      children: [
        el("span", {
          class: "landing-steps__mark",
          attrs: { "aria-hidden": "true" },
          children: [el("span", { class: "landing-tile landing-steps__number", text: String(index + 1) }), icon(STEP_ICONS[index] ?? "star")],
        }),
        el("h3", { class: "landing-steps__title", text: step.title }),
        el("p", { class: "landing-steps__text", text: step.text }),
      ],
    }),
  );
  return section({
    eyebrow: t.eyebrow,
    heading: t.heading,
    lead: t.lead,
    tone: "band",
    body: [el("ol", { class: "landing-steps", children: steps })],
  });
}
