/** The gallery's section of progress: a bar and a ring empty, part full and full, and steps at each stage. */
import { progressBar, progressRing, progressSteps } from "../components/progress";
import { el } from "../dom";
import { group, section, specimen, textFor, type Locale, type ShippedLocale } from "./parts";

const MESSAGES = {
  en: {
    progress: "Progress",
    bar: "Bar",
    ring: "Ring",
    steps: "Steps",
    songProgress: "Progress through the song",
    lessonDone: "Lesson complete",
    lessonPath: "Your path through the lesson",
    done: "Done",
    listen: "Listen",
    rightHand: "Right hand",
    leftHand: "Left hand",
    bothHands: "Both hands",
  },
  de: {
    progress: "Fortschritt",
    bar: "Balken",
    ring: "Ring",
    steps: "Schritte",
    songProgress: "Fortschritt im Lied",
    lessonDone: "Lektion abgeschlossen",
    lessonPath: "Dein Weg durch die Lektion",
    done: "Erledigt",
    listen: "Anhören",
    rightHand: "Rechte Hand",
    leftHand: "Linke Hand",
    bothHands: "Beide Hände",
  },
} satisfies Record<ShippedLocale, Record<string, string>>;

/** A part in a box of a set width, since a bar and steps fill their parent and a specimen sizes to its content. */
function sized(child: HTMLElement, wide = false): HTMLElement {
  const width = wide ? "calc(var(--s-12) * 4)" : "calc(var(--s-12) * 2.5)";
  return el("div", { attrs: { style: `width: ${width}; max-width: 100%` }, children: [child] });
}

/** The progress section in the gallery. */
export function progressSection(locale: Locale): HTMLElement {
  const t = textFor(MESSAGES, locale);
  const levels: [string, number][] = [
    ["empty", 0],
    ["part", 0.4],
    ["full", 1],
  ];
  const steps = [t.listen, t.rightHand, t.leftHand, t.bothHands];
  const stages: [string, number, boolean?][] = [
    ["steps-none", 0],
    ["steps-some", 2],
    ["steps-all", steps.length],
    ["steps-some-wide", 2, true],
  ];
  return section("progress", t.progress, [
    group(
      t.bar,
      levels.map(([state, value]) =>
        specimen(`bar-${state}`, sized(progressBar({ label: t.songProgress, value, locale, tone: value === 1 ? "success" : "brand" }))),
      ),
    ),
    group(
      t.ring,
      levels.map(([state, value]) =>
        specimen(`ring-${state}`, progressRing({ label: t.lessonDone, value, locale, tone: value === 1 ? "success" : "brand" })),
      ),
    ),
    group(
      t.steps,
      stages.map(([state, done, wide]) =>
        specimen(state, sized(progressSteps({ label: t.lessonPath, steps, done, doneLabel: t.done, locale }), wide)),
      ),
    ),
  ]);
}
