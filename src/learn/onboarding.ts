/**
 * The first-visit setup of *Learn Piano*: a dialog over the map that runs once, in three steps.
 *
 * 1. **Your piano.** The mascot greets the learner, who says what they play on: a MIDI keyboard, the
 *    computer keyboard or the screen. Then a key check waits for one note, from any input, and names
 *    the note it heard. A MIDI keyboard is connected on that choice, which asks the browser's
 *    permission once.
 * 2. **Your experience.** The learner says whether they have played before. One who has is told about
 *    the skip tests, which the map offers on each world.
 * 3. **Your daily goal.** The learner picks 10, 20, 30 or 50 XP, stored as `learnDailyGoal`.
 *
 * Decisions, and what each costs:
 * - **It runs once, however it ends.** Closing it, at any step, sets `learnSetupDone`, so a learner who
 *   skips it is never asked again. The profile changes the goal later. Leaving the map, as the
 *   browser's Back does, closes it too, so it never covers another page.
 * - **The key check can be skipped.** A learner without a working input still reaches the course,
 *   since the screen's keys play every step.
 * - **The answer about the piano is not stored.** Every step already takes every input, so the answer
 *   only picks the check's hint. The experience answer is not stored either, since the map always
 *   shows the skip tests.
 * - **The check plays the note it hears,** through the lesson's sound, so the learner hears the piano
 *   before the first lesson. The cost is the sound set's load on the first visit.
 * - **The mascot greets on the first question only,** so the key check and the later questions keep
 *   their room. Its picture is named by the catalog, since here it is the one who speaks.
 */
import "./onboarding.css";
import { messagesOf, type Locale } from "../i18n/locale";
import { attachKeyboard, KEY_VELOCITY } from "../input/keyboard";
import { inputService } from "../site/services";
import type { ViewContext } from "../site/views";
import { button } from "../ui/components/button";
import { dialog } from "../ui/components/dialog";
import { keyboard } from "../ui/components/keyboard";
import { mascot } from "../ui/components/mascot";
import { progressSteps } from "../ui/components/progress";
import { segmented } from "../ui/components/tabs";
import { el } from "../ui/dom";
import { icon, type IconName } from "../ui/icons/icons";
import { signal } from "../ui/signal";
import { noteName } from "../theory/note-names";
import { DAILY_GOALS } from "./game/streak";
import { dailyGoalOf } from "./game/standing";
import { lessonSound } from "./lesson-sound";

/** What the learner plays on. */
type Device = "midi" | "computer" | "screen";

/** The keys of the check: an octave from middle C. */
const CHECK_RANGE = { first: 60, last: 72 };

/** A running setup: `ended` resolves once it ends, whether finished or closed, and `close` ends it now. */
export interface RunningSetup {
  ended: Promise<void>;
  close(): void;
}

/** Opens the setup over the page. */
export function runSetup(locale: Locale, context: ViewContext): RunningSetup {
  const t = messagesOf(locale).setup;
  const { settings } = context;
  const sound = lessonSound(settings);
  const input = inputService(settings);
  const step = signal(0);
  const panel = el("div", { class: "setup__panel" });
  const stops: (() => void)[] = [];
  const stopHearing = () => stops.splice(0).forEach((stop) => stop());
  let played = false;

  const heading = (text: string) => el("h3", { class: "setup__question", attrs: { tabindex: "-1" }, text });
  const show = (index: number, children: (Node | null)[]) => {
    step.set(index);
    panel.replaceChildren(...children.filter((child) => child !== null));
    panel.querySelector<HTMLElement>(".setup__question")?.focus();
  };

  /** An answer: its glyph when it has one, its name over its text, and an arrow that says it moves on. */
  const choice = (name: string, text: string | undefined, onPick: () => void, glyph?: IconName) =>
    el("button", {
      class: "setup__choice",
      attrs: { type: "button" },
      children: [
        glyph === undefined ? null : el("span", { class: "setup__choice-icon", children: [icon(glyph)] }),
        el("span", {
          class: "setup__choice-body",
          children: [el("span", { class: "setup__choice-name", text: name }), text === undefined ? null : el("span", { class: "setup__choice-text", text })],
        }),
        el("span", { class: "setup__choice-go", children: [icon("chevron-right")] }),
      ],
      on: { click: onPick },
    });

  /** The key check of `device`, which waits for one note from any input. */
  const check = (device: Device, note?: string) => {
    void sound.start();
    if (device === "midi") void input.midi.connect();
    const statusText = el("span", { text: note ?? t.device.check });
    const status = el("p", {
      class: "setup__status",
      attrs: { role: "status" },
      children: [el("span", { class: "setup__status-mark", attrs: { "aria-hidden": "true" }, children: [icon("check")] }), statusText],
    });
    const next = button({ label: t.next, variant: "primary", disabled: true, onClick: () => goBefore() });
    const pressed = signal<ReadonlySet<number>>(input.bus.held);
    const keys = keyboard({
      label: t.device.keys,
      range: CHECK_RANGE,
      names: "c",
      pressed,
      markNames: t.device.marks,
      onPress: (pitch) => input.bus.noteOn(pitch, KEY_VELOCITY, "pointer"),
      onRelease: (pitch) => input.bus.noteOff(pitch, "pointer"),
    });
    stopHearing();
    stops.push(
      attachKeyboard(input.bus, settings, window, setup.element),
      input.bus.subscribe((event) => {
        if (event.type === "pedal") return;
        pressed.set(input.bus.held);
        if (event.type === "noteOff") return sound.release(event.pitch);
        sound.press(event.pitch, event.velocity);
        statusText.textContent = t.device.heard(noteName(event.pitch));
        status.dataset.heard = "true";
        next.disabled = false;
      }),
      () => input.bus.releaseAll("pointer"),
    );
    const hint = device === "midi" ? t.device.checkMidi : device === "computer" ? t.device.checkComputer : t.device.checkScreen;
    show(0, [
      heading(hint),
      el("div", { class: "setup__keys", children: [keys] }),
      status,
      el("div", { class: "setup__actions", children: [button({ label: t.device.skip, variant: "ghost", onClick: () => goBefore() }), next] }),
    ]);
  };

  const goDevice = () => {
    const pick = (device: Device) => () => {
      if (device === "midi" && input.midi.state === "unsupported") return check("screen", t.device.noMidi);
      check(device);
    };
    show(0, [
      el("div", {
        class: "setup__welcome",
        children: [mascot({ pose: "portrait", alt: t.mascot, size: "large" }), el("p", { class: "setup__greeting", text: t.welcome })],
      }),
      heading(t.device.question),
      el("div", {
        class: "setup__choices",
        children: [
          choice(t.device.midi.name, t.device.midi.text, pick("midi"), "keyboard-music"),
          choice(t.device.computer.name, t.device.computer.text, pick("computer"), "keyboard"),
          choice(t.device.screen.name, t.device.screen.text, pick("screen"), "pointer"),
        ],
      }),
    ]);
  };

  const goBefore = () => {
    stopHearing();
    const pick = (hasPlayed: boolean) => () => {
      played = hasPlayed;
      goGoal();
    };
    show(1, [
      heading(t.before.question),
      el("div", {
        class: "setup__choices",
        children: [choice(t.before.never, undefined, pick(false)), choice(t.before.little, undefined, pick(true)), choice(t.before.yes, undefined, pick(true))],
      }),
    ]);
  };

  const goGoal = () => {
    let goal = String(dailyGoalOf(settings));
    const options = segmented({
      label: t.goal.label,
      segments: DAILY_GOALS.map((xp) => ({ value: String(xp), label: t.goal.option(xp, t.goal.names[`${xp}`]) })),
      value: goal,
      onChange: (value) => {
        goal = value;
      },
    });
    show(2, [
      heading(t.goal.question),
      played ? el("p", { class: "setup__note", children: [icon("info"), el("span", { text: t.before.skipTests })] }) : null,
      el("p", { class: "setup__lead", text: t.goal.lead }),
      options,
      el("div", {
        class: "setup__actions",
        children: [
          button({
            label: t.goal.start,
            variant: "primary",
            onClick: () => {
              settings.set("learnDailyGoal", goal as `${(typeof DAILY_GOALS)[number]}`);
              setup.close();
            },
          }),
        ],
      }),
    ]);
  };

  let ended = () => {};
  const setup = dialog({
    title: t.title,
    body: el("div", {
      class: "setup",
      children: [progressSteps({ label: t.progress, steps: [...t.steps], done: step, doneLabel: t.doneStep, locale }), panel],
    }),
    closeLabel: t.close,
    dismissOnBackdrop: false,
    onClose: () => {
      stopHearing();
      settings.set("learnSetupDone", true);
      ended();
    },
  });
  const done = new Promise<void>((resolve) => {
    ended = resolve;
  });
  goDevice();
  setup.open();
  return { ended: done, close: setup.close };
}
