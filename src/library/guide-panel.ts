/**
 * The guide panel: how to play the open version of a song of ours, and the practice steps one click
 * applies. It also names the step after a beaten version, which the shell offers in a toast.
 *
 * The panel shows the version's difficulty and tagline, the song's story and fun fact, the version's
 * skills, its practice plan, its tips by bar and its tricky spots.
 *
 * The panel's own labels come from the live locale's catalog when it is built. The guide's own prose,
 * such as its steps, tips and fun fact, is the guide's data and shows as written.
 *
 * Decisions, and what each costs:
 * - A guide is fetched from the version's folder when the version opens, as `guide.json` beside its
 *   file. The service worker caches it on that fetch, like the song, so the guide works offline too.
 * - A practice step sets the hands, the loop and wait mode through their settings, and the speed
 *   through the transport, as the control bar does. It adds no setting, and a reload keeps what the
 *   settings keep. The speed is set last, since a loop trainer that turns on sets its own speed.
 * - A step without a loop turns the loop off, so the step plays the whole song as it says.
 * - Each tricky spot has a Loop button, which loops its bar alone and keeps the hands, the speed and
 *   wait mode. The button sits in the panel, beside the spot's text, and its mark on the lanes only
 *   points the learner there. A DOM button is reachable by keyboard and screen reader, and a sprite on
 *   the lanes is not.
 * - The step after a version is the next version of the same song, then the song's original score.
 *   The hardest version of a song without an original has none, and the offer only congratulates.
 */
import { t } from "../i18n/live";
import type { SettingsStore } from "../settings/store";
import { button, el } from "../ui/dom";
import { type Guide, originalName, type PracticeStep, RARITIES, type Rarity, rarityName, rarityTagline, readGuide } from "./guide";
import type { CatalogSong } from "./search";
import { skillName } from "./skills";
import "./guide-panel.css";

/** One line that sums up what `step` sets, in the live locale, as in "Right hand, 60 %, bars 1–4, waits for you". */
export function stepSummary(step: PracticeStep): string {
  const m = t().player.library.guide;
  const loop = step.loop === null ? m.wholeSong : m.loopBars(step.loop[0], step.loop[1]);
  return m.summary(m.hands[step.hands], Math.round(step.speed * 100), loop, step.wait ? m.waits : m.playsOn);
}

/** Where a practice step lands: the settings, and the transport's speed. */
export interface StepTarget {
  settings: Pick<SettingsStore, "set">;
  transport: { speed: number };
}

/** Sets the hands, the loop, wait mode and the speed `step` asks for. */
export function applyStep(step: PracticeStep, target: StepTarget): void {
  const { settings, transport } = target;
  settings.set("playHands", step.hands);
  if (step.loop !== null) {
    settings.set("loopStart", step.loop[0]);
    settings.set("loopEnd", step.loop[1]);
  }
  settings.set("enableLoop", step.loop !== null);
  settings.set("waitForNotes", step.wait);
  transport.speed = step.speed;
}

/** The path of the guide of the version at catalog file `file`, from `songs/`. */
export function guidePath(file: string): string {
  return `${file.slice(0, file.lastIndexOf("/") + 1)}guide.json`;
}

/** The guide of the version `row` names, or undefined when it has none, or it fails to load or check. */
export async function loadGuide(row: CatalogSong): Promise<Guide | undefined> {
  if (row.song === undefined || row.rarity === undefined) return undefined;
  try {
    const response = await fetch(`./songs/${guidePath(row.file)}`);
    if (!response.ok) return undefined;
    const guide = readGuide(await response.json());
    return guide?.song === row.song ? guide : undefined;
  } catch {
    return undefined;
  }
}

/** The step after a beaten version: the next version's row, the original score's, or undefined. */
export interface LevelUp {
  row: CatalogSong;
  /** The step's name, as in "Easy" or "Original". */
  name: string;
}

/** The step after the version `row`, found in `catalog`, or undefined when `row` is the last. */
export function levelUpOf(catalog: readonly CatalogSong[], row: CatalogSong): LevelUp | undefined {
  if (row.song === undefined || row.rarity === undefined) return undefined;
  const next: Rarity | undefined = RARITIES[RARITIES.indexOf(row.rarity) + 1];
  if (next !== undefined) {
    const found = catalog.find((other) => other.song === row.song && other.rarity === next);
    if (found !== undefined) return { row: found, name: rarityName(next) };
  }
  if (row.mythic === undefined) return undefined;
  const original = catalog.find((other) => other.file === row.mythic);
  return original === undefined ? undefined : { row: original, name: originalName() };
}

/** A heading and the content under it. `part` names the section, so `guide-panel.css` can shape it. */
function section(part: "about" | "funFact" | "skills" | "practice" | "tips" | "tricky", title: string, ...content: Node[]): HTMLElement {
  return el("section", { class: "guide-section", attrs: { "data-part": part }, children: [el("h3", { text: title }), ...content] });
}

/** What the guide panel's buttons do: apply a practice step, and loop a tricky spot's bar. */
export interface GuideActions {
  apply(step: PracticeStep, index: number): void;
  loop(bar: number): void;
}

/** Loops bar `bar` alone, from 1, through the loop's settings. The hands, the speed and wait mode stay. */
export function loopBar(bar: number, settings: Pick<SettingsStore, "set">): void {
  settings.set("loopStart", bar);
  settings.set("loopEnd", bar);
  settings.set("enableLoop", true);
}

/** The panel of `guide` for its version at `rarity`, its buttons running `actions`. */
export function createGuidePanel(guide: Guide, rarity: Rarity, actions: GuideActions): HTMLElement {
  const { apply, loop } = actions;
  const m = t().player.library.guide;
  const version = guide.versions[rarity];
  const steps = version.practice.map((step, index) =>
    el("li", {
      class: "guide-step",
      children: [
        el("div", {
          class: "guide-step-row",
          children: [
            el("div", { children: [el("p", { text: step.text }), el("p", { class: "guide-step-summary", text: stepSummary(step) })] }),
            button(m.apply, () => apply(step, index), { title: m.applyTitle(index + 1) }),
          ],
        }),
      ],
    }),
  );
  const tips = version.tips.map((tip) =>
    el("li", { children: [el("strong", { text: m.tip(m.bars(tip.fromBar, tip.toBar), m.tipKinds[tip.kind]) }), tip.text] }),
  );
  const tricky = [...version.tricky]
    .sort((a, b) => a.bar - b.bar)
    .map((spot) =>
      el("li", {
        class: "guide-step-row",
        children: [
          el("p", { children: [el("strong", { text: `${m.bars(spot.bar, spot.bar)}: ` }), spot.text] }),
          button(m.loop, () => loop(spot.bar), { title: m.loopTitle(spot.bar) }),
        ],
      }),
    );
  return el("div", {
    class: "guide-panel",
    children: [
      el("p", {
        class: "guide-rarity",
        children: [
          el("span", { class: "library-rarity", attrs: { "data-rarity": rarity }, text: rarityName(rarity) }),
          ` ${rarityTagline(rarity)}`,
        ],
      }),
      section("about", m.headings.about, el("p", { text: guide.about }), el("p", { class: "guide-composer", text: guide.composer })),
      section("funFact", m.headings.funFact, el("p", { text: guide.funFact })),
      section("skills", m.headings.skills, el("ul", { class: "guide-skills", children: version.skills.map((id) => el("li", { text: skillName(id) })) })),
      section("practice", m.headings.practice, el("ol", { class: "guide-steps", children: steps })),
      section("tips", m.headings.tips, el("ul", { children: tips })),
      tricky.length === 0 ? null : section("tricky", m.headings.tricky, el("ul", { children: tricky })),
    ],
  });
}
