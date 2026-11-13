/**
 * The body of the legal notice at `imprint/` and of the privacy policy at `privacy/`.
 *
 * The texts are `src/i18n/messages/legal.en.ts` and its German twin. This module is a chunk of its
 * own, so only the two legal pages load them.
 *
 * Decisions, and what each costs:
 * - A link to another site opens in a new tab, so the learner keeps the page. A link to a page of
 *   this site stays in the tab, and the router takes it.
 * - The privacy policy holds the switch of the visitor statistics of `src/site/stats.ts`. While the
 *   browser sends Do Not Track or Global Privacy Control, the switch is off and disabled, since the
 *   site never counts that browser. A line under it says what the site does now, and a screen reader
 *   hears it change.
 */
import { legalDe } from "../i18n/messages/legal.de";
import { legalEn, type Block, type Inline, type LegalTexts } from "../i18n/messages/legal.en";
import type { Locale, ShippedLocale } from "../i18n/locale";
import { textFor } from "../i18n/pseudo";
import { link } from "../ui/components/link";
import { toggleControl } from "../ui/controls";
import { el } from "../ui/dom";
import "./legal-view.css";
import { hrefOf } from "./site-bar";
import { browserRefuses, optedOut, setOptedOut } from "./stats";

const TEXTS: Record<ShippedLocale, LegalTexts> = { en: legalEn, de: legalDe };

/** The switch of the visitor statistics, with the line of what the site does now. */
function optOutSwitch(say: LegalTexts["optOut"]): HTMLElement {
  const status = el("p", { class: "legal__status", attrs: { "aria-live": "polite" } });
  const refused = browserRefuses();
  const show = () => {
    status.textContent = refused ? say.refused : optedOut() ? say.off : say.on;
  };
  const toggle = toggleControl(say.label, !refused && !optedOut(), (on) => {
    setOptedOut(!on);
    show();
  });
  const input = toggle.element as HTMLInputElement;
  input.id = "legal-stats";
  input.disabled = refused;
  show();
  return el("div", {
    class: "legal__switch",
    children: [
      el("div", {
        class: "legal__switch-row",
        children: [el("label", { class: "legal__switch-label", attrs: { for: input.id }, text: say.label }), input],
      }),
      status,
    ],
  });
}

/** The nodes of `runs`, with each link built for `locale`. */
function inline(runs: string | Inline[], locale: Locale): (Node | string)[] {
  if (typeof runs === "string") return [runs];
  return runs.map((run) => {
    if (typeof run === "string") return run;
    if ("href" in run) return link({ label: run.text, href: run.href, external: true });
    return link({ label: run.text, href: hrefOf(run.route, locale) });
  });
}

/** The element of `block`. */
function blockElement(block: Block, texts: LegalTexts, locale: Locale): HTMLElement {
  if (typeof block === "string" || Array.isArray(block)) return el("p", { children: inline(block, locale) });
  if ("list" in block) return el("ul", { children: block.list.map((item) => el("li", { children: inline(item, locale) })) });
  if ("lines" in block) return el("p", { class: "legal__lines", children: block.lines.flatMap((line, i) => (i === 0 ? [line] : [el("br"), line])) });
  return optOutSwitch(texts.optOut);
}

/** The body of the legal page `kind` in `locale`. */
export function legalBody(kind: "imprint" | "privacy", locale: Locale): HTMLElement {
  const texts = textFor(TEXTS, locale);
  const doc = texts[kind];
  const blocks = (list: Block[]) => list.map((block) => blockElement(block, texts, locale));
  return el("div", {
    class: "legal",
    children: [
      ...blocks(doc.lead),
      ...doc.sections.map((section) =>
        el("section", { class: "legal__section", children: [el("h2", { text: section.heading }), ...blocks(section.blocks)] }),
      ),
      el("p", { class: "legal__updated", text: doc.updated }),
    ],
  });
}
