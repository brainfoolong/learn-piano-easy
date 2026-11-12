/**
 * The gallery: the page at `design/` that shows the palette and every component of the site in every
 * state.
 *
 * Contributors read it to see the design system, and the layout checks of `e2e/layout-check.ts` run on
 * it at every width, theme and locale. It is not linked from the site. Each component's section is a
 * module of `src/ui/gallery/` with its own messages, and this page lays the sections out in order. The
 * palette and the mascot's section are this module's own.
 *
 * Decisions, and what each costs:
 * - **The palette reads its tokens from the page's stylesheets,** so `src/ui/tokens.css` stays the one
 *   home of the list. A swatch shows each `--c-` and `--g-` token the root sets, in the theme on
 *   screen. It costs a walk of the style rules as the view is built.
 * - **A token joins a group by its name,** and one that fits no group shows under its own heading, so
 *   a new token is never left out.
 * - **The palette is no component,** so it carries no `data-component` and the tests count only the
 *   components' sections.
 *
 * Its text comes in English and German, since German is the longest language the layout must fit. It
 * is a route of the site, so its locale is its page's, and the top bar's theme switch sets its theme.
 */
import "./gallery.css";
import type { SettingsStore } from "../settings/store";
import { emptyState } from "./components/empty-state";
import { mascot, type MascotSize } from "./components/mascot";
import { el } from "./dom";
import { badgeMedalSection } from "./gallery/badge-medal";
import { buttonSection } from "./gallery/button";
import { cardSection } from "./gallery/card";
import { chipSection } from "./gallery/chip";
import { controlsSection } from "./gallery/controls";
import { dialogSection } from "./gallery/dialog";
import { emptyStateSection } from "./gallery/empty-state";
import { iconButtonSection } from "./gallery/icon-button";
import { linkSection } from "./gallery/link";
import { group, section, specimen, type Locale } from "./gallery/parts";
import { pianoKeysSection } from "./gallery/piano-keys";
import { progressSection } from "./gallery/progress";
import { sectionSection } from "./gallery/section";
import { skeletonSection } from "./gallery/skeleton";
import { staffSection } from "./gallery/staff";
import { tabsSection } from "./gallery/tabs";
import { toastSection } from "./gallery/toast";
import { tooltipSection } from "./gallery/tooltip";
import { topBarSection } from "./gallery/top-bar";
import { xpCounterSection } from "./gallery/xp-counter";

const MESSAGES = {
  en: {
    title: "Design system",
    lead: "The palette and every component of the site, in every state, on the tokens of both themes.",
    palette: "Palette",
    surfaces: "Surfaces and text",
    hues: "Brand hues",
    signals: "Signals and rewards",
    sets: "Song versions and worlds",
    gradients: "Gradients",
    other: "Other tokens",
    mascot: "Mascot",
    portrait: "Portrait",
    scene: "Scene",
    inEmptyState: "In an empty state",
    portraitAlt: "Our piano teacher, an ape with honey fur.",
    sceneAlt: "Our piano teacher, an ape in a corduroy jacket, sits at the piano.",
    emptyTitle: "No songs yet",
    emptyMessage: "Open a MIDI file to start playing along.",
    emptyAction: "Open a song",
  },
  de: {
    title: "Designsystem",
    lead: "Die Farbpalette und jede Komponente der Seite, in jedem Zustand, auf den Tokens beider Farbschemata.",
    palette: "Farbpalette",
    surfaces: "Flächen und Text",
    hues: "Markenfarben",
    signals: "Signale und Belohnungen",
    sets: "Liedfassungen und Welten",
    gradients: "Verläufe",
    other: "Weitere Tokens",
    mascot: "Maskottchen",
    portrait: "Porträt",
    scene: "Szene",
    inEmptyState: "In einem leeren Zustand",
    portraitAlt: "Unser Klavierlehrer, ein Affe mit honigfarbenem Fell.",
    sceneAlt: "Unser Klavierlehrer, ein Affe in einer Cordjacke, sitzt am Klavier.",
    emptyTitle: "Noch keine Lieder",
    emptyMessage: "Öffne eine MIDI-Datei, um mitzuspielen.",
    emptyAction: "Lied öffnen",
  },
} satisfies Record<Locale, Record<string, string>>;

type Messages = (typeof MESSAGES)[Locale];

/** The palette's groups in order, each with the token names it takes. The last takes the rest. */
const PALETTE_GROUPS: { heading: keyof Messages; takes: RegExp }[] = [
  { heading: "surfaces", takes: /^--c-(bg|surface|sunken|line|glass|scrim|text)\b/ },
  { heading: "hues", takes: /^--c-(brand|accent|iris|orchid|focus)\b/ },
  { heading: "signals", takes: /^--c-(success|danger|warning|info|reward|mistake)\b/ },
  { heading: "sets", takes: /^--c-(rarity|world)\b/ },
  { heading: "gradients", takes: /^--g-/ },
  { heading: "other", takes: /^/ },
];

/** Every colour and gradient token the page's stylesheets set on the root, in the order they set it. */
function paletteTokens(): string[] {
  const names = new Set<string>();
  const walk = (rules: CSSRuleList) => {
    for (const rule of rules) {
      if (rule instanceof CSSStyleRule && rule.selectorText === ":root") {
        for (let i = 0; i < rule.style.length; i++) {
          const name = rule.style.item(i);
          if (name.startsWith("--c-") || name.startsWith("--g-")) names.add(name);
        }
      } else if ("cssRules" in rule) {
        walk((rule as CSSGroupingRule).cssRules);
      }
    }
  };
  for (const sheet of document.styleSheets) walk(sheet.cssRules);
  return [...names];
}

/** One token's swatch: its colour over its name. The name is code, so no locale translates it. */
function swatch(name: string): HTMLElement {
  return el("li", {
    class: "gallery__swatch",
    children: [
      el("span", { class: "gallery__swatch-colour", attrs: { style: `background: var(${name})` } }),
      el("code", { class: "gallery__swatch-name", attrs: { translate: "no" }, text: name }),
    ],
  });
}

/** The palette: every colour token as a labelled swatch, grouped by its role. */
function paletteSection(locale: Locale): HTMLElement {
  const t = MESSAGES[locale];
  const groups = new Map<keyof Messages, string[]>();
  for (const name of paletteTokens()) {
    const heading = PALETTE_GROUPS.find((entry) => entry.takes.test(name))!.heading;
    groups.set(heading, [...(groups.get(heading) ?? []), name]);
  }
  return el("section", {
    class: "gallery__component",
    attrs: { "aria-labelledby": "gallery-palette" },
    children: [
      el("h2", { class: "gallery__component-title", attrs: { id: "gallery-palette" }, text: t.palette }),
      ...PALETTE_GROUPS.filter(({ heading }) => groups.has(heading)).map(({ heading }) =>
        group(t[heading], [el("ul", { class: "gallery__swatches", children: groups.get(heading)!.map(swatch) })]),
      ),
    ],
  });
}

/** The mascot's section: its portrait in each size, its scene, and its place in an empty state. */
function mascotSection(locale: Locale): HTMLElement {
  const t = MESSAGES[locale];
  const sizes: MascotSize[] = ["small", "medium", "large"];
  return section("mascot", t.mascot, [
    group(
      t.portrait,
      sizes.map((size) => specimen(`portrait-${size}`, mascot({ pose: "portrait", size, alt: t.portraitAlt }))),
    ),
    group(t.scene, [
      specimen("scene", el("div", { class: "gallery__scene", children: [mascot({ pose: "scene", alt: t.sceneAlt })] })),
    ]),
    group(t.inEmptyState, [
      specimen(
        "in-empty-state",
        emptyState({ mascot: true, title: t.emptyTitle, level: 4, message: t.emptyMessage, actionLabel: t.emptyAction }),
      ),
    ]),
  ]);
}

/** Each section, in the order the page shows them: the palette, the mascot, then each component. */
const SECTIONS: ((locale: Locale, settings: SettingsStore) => HTMLElement)[] = [
  paletteSection,
  mascotSection,
  topBarSection,
  buttonSection,
  iconButtonSection,
  linkSection,
  chipSection,
  tooltipSection,
  cardSection,
  sectionSection,
  toastSection,
  emptyStateSection,
  skeletonSection,
  progressSection,
  xpCounterSection,
  badgeMedalSection,
  tabsSection,
  controlsSection,
  dialogSection,
  pianoKeysSection,
  staffSection,
];

/** The gallery's view in `locale`, whose embedded player sounds on the services of the site's `settings`. */
export function galleryView(locale: Locale, settings: SettingsStore): HTMLElement {
  const t = MESSAGES[locale];
  return el("div", {
    class: "gallery",
    children: [
      el("header", {
        class: "gallery__head",
        children: [el("h1", { text: t.title }), el("p", { class: "gallery__lead", text: t.lead })],
      }),
      ...SECTIONS.map((make) => make(locale, settings)),
    ],
  });
}
