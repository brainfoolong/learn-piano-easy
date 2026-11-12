/**
 * The section: a band of the landing page, with an eyebrow, a heading, a lead and a body.
 *
 * The eyebrow is a short line above the heading that names the band's topic. The lead is the
 * paragraph that follows the heading, held to `--measure` so its lines stay readable. The body holds
 * the caller's own nodes, such as cards or a button. Like every component it holds no text of its own.
 *
 * - **Level:** the heading is an `h2` or an `h3`, so a page's headings never skip a level.
 * - **Align:** `start` lines everything up on the reading edge, and `center` centres it.
 * - **Tone:** `plain` sits on the page, and `band` on `--c-surface-1` with an edge above and below.
 *
 * The section is labelled by its heading, so a screen reader lists it as a region by that name.
 */
import "./section.css";
import { el } from "../dom";

export interface SectionOptions {
  /** The band's heading, which is also the section's accessible name. */
  heading: string;
  /** A short line above the heading that names the band's topic. */
  eyebrow?: string;
  /** The paragraph after the heading. */
  lead?: string;
  /** The caller's own nodes after the lead. */
  body?: Node[];
  /** The heading's level, 2 when absent. */
  level?: 2 | 3;
  /** `start` when absent. */
  align?: "start" | "center";
  /** `plain` when absent. */
  tone?: "plain" | "band";
}

let sections = 0;

/** A band of the landing page, as its options describe. */
export function section(options: SectionOptions): HTMLElement {
  sections += 1;
  const id = `section-heading-${sections}`;
  const level = options.level ?? 2;
  const body = options.body ?? [];
  return el("section", {
    class: "section",
    attrs: {
      "aria-labelledby": id,
      "data-level": String(level),
      "data-align": options.align ?? "start",
      "data-tone": options.tone ?? "plain",
    },
    children: [
      el("div", {
        class: "section__inner",
        children: [
          options.eyebrow === undefined ? null : el("p", { class: "section__eyebrow", text: options.eyebrow }),
          el(`h${level}` as "h2", { class: "section__heading", attrs: { id }, text: options.heading }),
          options.lead === undefined ? null : el("p", { class: "section__lead", text: options.lead }),
          body.length === 0 ? null : el("div", { class: "section__body", children: body }),
        ],
      }),
    ],
  });
}
