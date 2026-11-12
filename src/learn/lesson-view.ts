/**
 * The lesson view: runs one lesson at `learn/<world>/<lesson>/`, step by step, and ends on its stars.
 *
 * Its parts, top to bottom: a thin bar with the Leave button and one segment per step, the step's count
 * above the lesson's title, the step host that a step kind of `src/learn/steps/kinds.ts` mounts into,
 * and the feedback band. The band says right or try again, each with its mark, a check or a cross. It
 * shows Continue once the step has passed.
 *
 * Decisions, and what each costs:
 * - **The lesson carries its world's accent** as `--c-world`, once the lesson is found, so a lesson
 *   looks like a part of its world on the map.
 * - **The count above the title is for the eye.** The step bar already tells a screen reader the same
 *   words, so the count is hidden from it.
 * - **The calm layout of the curriculum.** The site's top bar stays, as the user asks, and the lesson's
 *   own bar is thin. A step passed gets only a pulse of the band and a chime, by `pulse` of
 *   `src/learn/game/celebrate.ts` and the sounds of `src/learn/game/sfx.ts`.
 * - **The end screen is the lesson's reward.** Its stars rise one by one, each with a chime. Once the
 *   run is saved, the XP it earned counts up and the level bar fills. A new level, then each new badge,
 *   gets a full-screen moment of `showMoments`. A skip test says whether it opened its world.
 * - **The rewards are the difference of two standings,** read by `readStanding` on the lesson's own
 *   store before its first write and after its last. So a badge shows once, in the run that earned it,
 *   and a browser without IndexedDB rewards the run it keeps in memory. A failed read shows no reward,
 *   and the save's own status stays right.
 * - **The steps are chosen at the start** by `stepsToRun`, on whether a MIDI keyboard is connected.
 *   A step that needs touch or the pedal shows a button under it, for a keyboard without them. It
 *   swaps in the step's listening and quiz, so no learner is ever stuck on a step.
 * - **The progress is written only at the end,** each step's event, then the lesson's. A write that
 *   fails keeps the rest queued, and Try again writes only those, so no event is written twice.
 *   Without IndexedDB the log lives in memory, and the end screen says the result lasts the tab.
 * - **Leaving a running lesson asks first:** the Leave button, a link, Back and the language switch
 *   through the site's `mayLeave`, and a reload through `beforeunload`. A lesson shown again after it
 *   was left or ended starts from its first step.
 * - **The focus moves to the step host** when a step mounts, so a screen reader starts at the new step.
 * - **The learner's notes sound while the lesson shows,** from every input on the bus, and the computer
 *   keyboard plays. The player's shell stays silent then, so a note never sounds twice.
 * - **The computer keyboard shifts by octaves for the step that shows.** A step names its notes through
 *   `reachKeys`, and `octaveShift` picks the shift. Each new step starts unshifted. A phrase wider
 *   than the keys aims them at its next entry through `aimKeys`, and they move only when that entry
 *   is out of reach. The reach is marked
 *   under the step's keys while no MIDI keyboard is on, and follows the MIDI state as it changes.
 * - **The steps share one piano view,** the 3D piano of `pianoKeys`, made when a step first shows keys
 *   and freed when the lesson ends or hides. A lesson then holds one WebGL context, and one without keys
 *   holds none. The view's chunk is imported statically, since the service worker precaches it.
 * - **A song step moves to the player and back** through `songHandoff` of `src/learn/song-handoff.ts`.
 *   The lesson keeps its step while the song is out, and moves back once the player ends the request.
 *   Shown again by Back or a link meanwhile, it ends the request without a take. The way back is a new
 *   history entry, so Back from the lesson then shows the player once more.
 */
import "./lesson-view.css";
import { messagesOf, type Locale } from "../i18n/locale";
import { attachKeyboard, keyReach, octaveShift } from "../input/keyboard";
import type { KeyRange } from "../render/key-layout";
import { type PianoKeys, pianoKeys } from "../render/piano-keys";
import { inputService } from "../site/services";
import { lessonRoute, pageOf } from "../site/routes";
import { hrefOf } from "../site/site-bar";
import type { View, ViewContext } from "../site/views";
import { button, buttonLink } from "../ui/components/button";
import { dialog } from "../ui/components/dialog";
import { iconButton } from "../ui/components/icon-button";
import { el } from "../ui/dom";
import { icon } from "../ui/icons/icons";
import { badgeMedal } from "../ui/components/badge-medal";
import { progressBar } from "../ui/components/progress";
import { xpCounter } from "../ui/components/xp-counter";
import { animate, durationMs } from "../ui/motion";
import { type Signal, signal } from "../ui/signal";
import { formatNumber } from "../i18n/format";
import { worldBadgeText } from "../i18n/messages/learn-badges.en";
import { findLesson } from "./course";
import { badgeArt } from "./game/badge-art";
import { badgesOf, type FixedBadgeId } from "./game/badges";
import { type Moment, pulse, showMoments } from "./game/celebrate";
import { gameSounds } from "./game/sfx";
import { dailyGoalOf, readStanding, type Standing } from "./game/standing";
import { inputHas, lessonKey, starsOf, stepsToRun, withoutNeed } from "./lesson-run";
import { lessonSound } from "./lesson-sound";
import { CHECKING_KINDS, type Lesson, type Step, type World } from "./model";
import { SKIP_TEST_ID, SKIP_TEST_STARS } from "./skip-test";
import type { NewEvent } from "./progress/event";
import { indexedDbBackend, memoryBackend, ProgressStore } from "./progress/store";
import { songHandoff, type SongRequest } from "./song-handoff";
import { viewOf } from "./steps/kinds";
import type { MountedStep, StepResult } from "./steps/step";

/** Where a lesson stands. */
type Phase = "loading" | "missing" | "running" | "ended" | "idle";

/** Opens the progress store of this browser, and says whether it lasts beyond the tab. */
async function openStore(): Promise<{ store: ProgressStore; lasting: boolean }> {
  const backend = await indexedDbBackend();
  return { store: await ProgressStore.open(backend ?? memoryBackend()), lasting: backend !== undefined };
}

/** The view of lesson `at.lesson` of world `at.world` in `locale`. `onSaved` runs once a run's result is saved, so the top bar's slot reads it. */
export function lessonPage(at: { world: string; lesson: string }, locale: Locale, context: ViewContext, onSaved: () => void = () => {}): View {
  const t = messagesOf(locale).lesson;
  const sound = lessonSound(context.settings);
  const sounds = gameSounds(context.settings);
  const learnPath = hrefOf("learn", locale).slice("./".length);
  const playPath = hrefOf("play", locale).slice("./".length);
  const ownPath = pageOf(lessonRoute(at.world, at.lesson), locale).path;

  const segments = el("ol", { class: "lesson__segments", attrs: { "aria-hidden": "true" } });
  const progress = el("div", { class: "lesson__progress", attrs: { role: "progressbar", "aria-valuemin": "0" }, children: [segments] });
  const leave = iconButton({ label: t.leave, icon: "x", variant: "ghost", onClick: () => void leaveByButton() });
  const count = el("p", { class: "lesson__count", attrs: { "aria-hidden": "true" } });
  const title = el("h1", { class: "lesson__title", text: t.loading });
  const head = el("header", { class: "lesson__head", children: [count, title] });
  const stage = el("div", { class: "lesson__stage", attrs: { tabindex: "-1" } });
  const bandMark = el("span", { class: "lesson__band-mark", attrs: { "aria-hidden": "true" } });
  const bandText = el("p", { class: "lesson__band-text", attrs: { "aria-live": "polite" } });
  const next = button({ label: t.band.continue, variant: "primary", size: "large", icon: "arrow-right", iconAt: "end", onClick: () => advance() });
  next.classList.add("lesson__continue");
  const band = el("div", { class: "lesson__band", attrs: { "data-tone": "idle" }, children: [el("div", { class: "lesson__band-say", children: [bandMark, bandText] }), next] });
  const bar = el("div", { class: "lesson__bar", children: [leave, progress] });
  const element = el("div", { class: "lesson", children: [bar, head, stage, band] });

  let phase: Phase = "loading";
  let world: World | undefined;
  let lesson: Lesson | undefined;
  let steps: Step[] = [];
  let results: StepResult[] = [];
  let index = 0;
  let mounted: MountedStep | undefined;
  let passed: StepResult | undefined;
  let showing = false;
  /** The piano view the steps share, made when a step first shows keys. */
  let piano: PianoKeys | undefined;
  const freePiano = () => {
    piano?.dispose();
    piano = undefined;
  };

  const setBand = (tone: "idle" | "right" | "try-again" | "ready", text: string) => {
    band.dataset.tone = tone;
    bandMark.replaceChildren(...(tone === "right" ? [icon("check")] : tone === "try-again" ? [icon("x")] : []));
    bandText.textContent = text;
    next.classList.toggle("is-absent", tone !== "right" && tone !== "ready");
  };

  /** Whether a song step is out at the player. The lesson then keeps its step while hidden. */
  let away = false;
  const playSong = async (request: SongRequest) => {
    away = true;
    const asked = songHandoff.ask(request);
    context.go(playPath);
    const take = await asked;
    if (away) {
      away = false;
      context.go(ownPath);
    }
    return take;
  };

  const paintProgress = () => {
    segments.replaceChildren(
      ...steps.map((_, i) => el("li", { class: "lesson__segment", attrs: { "data-state": i < index ? "done" : i === index ? "current" : "ahead" } })),
    );
    progress.setAttribute("aria-valuemax", String(steps.length));
    progress.setAttribute("aria-valuenow", String(index + 1));
    progress.setAttribute("aria-label", t.stepOf(index + 1, steps.length));
    count.textContent = t.stepOf(index + 1, steps.length);
  };

  /** The semitones the computer keyboard's notes move by, for the step that shows. */
  let keyShift = 0;
  /** The notes the step that shows asks for, and the keys the computer keyboard reaches for them. */
  let asked: { notes: readonly number[]; reach: Signal<KeyRange | undefined> } | undefined;
  /** Shifts the computer keyboard to reach the asked notes, and shows its reach while no MIDI keyboard is on. */
  const fitKeys = () => {
    const bound = keyReach(context.settings.get("keyBindings"));
    keyShift = asked === undefined || bound === undefined ? 0 : octaveShift(asked.notes, bound, keyShift);
    const midi = inputService(context.settings).midi.state === "on";
    asked?.reach.set(bound === undefined || midi ? undefined : { first: bound.first + keyShift, last: bound.last + keyShift });
  };
  const unshift = () => {
    asked = undefined;
    keyShift = 0;
  };

  const mountStep = () => {
    mounted?.dispose();
    unshift();
    stage.replaceChildren();
    passed = undefined;
    setBand("idle", "");
    paintProgress();
    const step = steps[index]!;
    const texts = lesson!.texts[locale].steps[step.id] ?? { text: "" };
    mounted = viewOf(step)(stage, step, {
      locale,
      texts,
      input: inputService(context.settings).bus,
      sound,
      get piano() {
        piano ??= pianoKeys();
        return piano;
      },
      reachKeys: (notes) => {
        asked = { notes, reach: signal<KeyRange | undefined>(undefined) };
        fitKeys();
        return asked.reach;
      },
      aimKeys: (notes) => {
        if (asked === undefined) return;
        asked.notes = notes;
        fitKeys();
      },
      tryAgain: (message) => {
        if (passed === undefined) setBand("try-again", message);
      },
      pass: (result) => {
        if (passed !== undefined) return;
        passed = result;
        if (CHECKING_KINDS.has(step.kind)) {
          setBand("right", t.band.right);
          pulse(band);
          sounds.play("step");
        } else setBand("ready", "");
      },
      playSong,
    });
    if (step.needs !== undefined && step.instead !== undefined) {
      const lacks = button({ label: t.lacks[step.needs], variant: "ghost", size: "small", onClick: () => swapOut() });
      lacks.classList.add("lesson__lacks");
      stage.append(lacks);
    }
    if (showing) stage.focus({ preventScroll: true });
  };

  /** Runs the current step's `instead` in its place, for a keyboard without its need. */
  const swapOut = () => {
    if (phase !== "running" || passed !== undefined) return;
    steps = withoutNeed(steps, index);
    mountStep();
  };

  const advance = () => {
    if (phase !== "running" || passed === undefined) return;
    results.push(passed);
    index += 1;
    if (index >= steps.length) return end();
    mountStep();
    // A new step opens at the lesson's top, as the end does, so the bar never hides its header.
    window.scrollTo(0, 0);
  };

  const start = () => {
    if (lesson === undefined) return;
    const midi = inputService(context.settings).midi.state === "on";
    steps = stepsToRun(lesson.steps, inputHas(midi));
    results = [];
    index = 0;
    phase = "running";
    element.replaceChildren(bar, head, stage, band);
    mountStep();
  };

  const stop = () => {
    mounted?.dispose();
    mounted = undefined;
    unshift();
    freePiano();
    if (phase === "running" || phase === "ended") phase = "idle";
  };

  const end = () => {
    mounted?.dispose();
    mounted = undefined;
    unshift();
    freePiano();
    phase = "ended";
    const stars = starsOf(steps, results);
    const key = lessonKey(at.world, at.lesson);
    const queue: NewEvent[] = [
      ...steps.map((step, i) => ({ kind: "step" as const, lesson: key, step: step.id, mistakes: results[i]!.mistakes, score: results[i]!.score })),
      { kind: "lesson", lesson: key, stars },
    ];
    element.replaceChildren(endScreen(stars, queue));
    // The end is a new screen, so it opens at its top wherever the lesson was scrolled.
    window.scrollTo(0, 0);
  };

  const endScreen = (stars: number, queue: NewEvent[]) => {
    const row = el("div", {
      class: "lesson-end__stars",
      attrs: { role: "img", "aria-label": t.end.stars(stars) },
      children: [0, 1, 2].map((i) => el("span", { class: "lesson-end__star", attrs: { "data-earned": String(i < stars) }, children: [icon("star")] })),
    });
    const status = el("p", { class: "lesson-end__status", attrs: { "aria-live": "polite" }, text: t.end.saving });
    const retry = button({ label: t.end.retry, onClick: () => void save() });
    retry.classList.add("is-absent");
    const rewards = el("div", { class: "lesson-end__rewards" });
    const worldTitle = world?.title[locale] ?? "";
    const skipLine =
      at.lesson !== SKIP_TEST_ID ? null
      : el("p", { class: "lesson-end__skip", text: stars >= SKIP_TEST_STARS ? t.end.skipOpened(worldTitle) : t.end.skipShort(SKIP_TEST_STARS) });
    let opened: Promise<{ store: ProgressStore; lasting: boolean }> | undefined;
    let before: Promise<Standing | undefined> | undefined;
    let rewarded = false;
    const save = async () => {
      retry.classList.add("is-absent");
      status.textContent = t.end.saving;
      try {
        opened ??= openStore();
        const { store, lasting } = await opened;
        // Read once, before the first write, so a retry compares with the log as the run found it.
        before ??= readStanding(dailyGoalOf(context.settings), Date.now(), store).catch(() => undefined);
        await before;
        while (queue.length > 0) {
          await store.record(queue[0]!);
          queue.shift();
        }
        status.textContent = lasting ? t.end.saved : t.end.unsaved;
        onSaved();
        if (!rewarded) {
          rewarded = true;
          void reward(await before, store);
        }
      } catch {
        opened = undefined;
        status.textContent = t.end.failed;
        retry.classList.remove("is-absent");
      }
    };
    const reward = async (from: Standing | undefined, store: ProgressStore) => {
      const to = await readStanding(dailyGoalOf(context.settings), Date.now(), store).catch(() => undefined);
      if (from === undefined || to === undefined || !screen.isConnected) return;
      const xp = signal(0);
      const fill = (standing: Standing) => standing.level.into / standing.level.span;
      const levelled = to.level.level > from.level.level;
      const bar = signal(levelled ? 0 : fill(from));
      rewards.replaceChildren(
        xpCounter({ xp, format: (number) => t.end.xp(number), locale }),
        progressBar({ label: t.end.level(to.level.level, to.level.span - to.level.into), value: bar, locale }),
      );
      // A frame later, so the counter and the bar move from where they first drew.
      requestAnimationFrame(() => {
        xp.set(to.tally.total - from.tally.total);
        bar.set(fill(to));
      });
      const moments = momentsOf(from, to);
      if (moments.length === 0) return;
      await new Promise((resolve) => setTimeout(resolve, durationMs("reward")));
      if (screen.isConnected && showing) await showMoments(moments, { continue: t.moment.continue, mascot: messagesOf(locale).badges.cheer }, sounds);
    };
    void save();
    const screen = el("section", {
      class: "lesson-end",
      children: [
        el("div", {
          class: "lesson-end__card",
          children: [
            el("h1", { class: "lesson-end__title", text: title.textContent ?? "" }),
            el("h2", { class: "lesson-end__heading", text: t.end.heading }),
            row,
            skipLine,
            rewards,
            el("div", { class: "lesson-end__save", children: [status, retry] }),
            el("div", {
              class: "lesson-end__actions",
              children: [button({ label: t.end.again, size: "large", onClick: start }), buttonLink({ label: t.backToCourse, href: `./${learnPath}`, variant: "primary", size: "large" })],
            }),
          ],
        }),
      ],
    });
    row.querySelectorAll("[data-earned=true]").forEach((star, i) => {
      animate(star, [{ opacity: 0, transform: "scale(0.2) rotate(-40deg)" }, { opacity: 1, transform: "scale(1.2) rotate(8deg)", offset: 0.55 }, { opacity: 1, transform: "none" }], {
        duration: "reward",
        easing: "emphasis",
        delayMs: i * 150,
      });
      sounds.play("star", { delayMs: i * 150, index: i });
    });
    return screen;
  };

  /** The moments that the change from `from` to `to` earned: a new level, then each new badge. */
  const momentsOf = (from: Standing, to: Standing): Moment[] => {
    const moments: Moment[] = [];
    if (to.level.level > from.level.level) {
      moments.push({
        cue: "level",
        art: el("div", { class: "moment__level", attrs: { "aria-hidden": "true" }, text: formatNumber(locale, to.level.level) }),
        heading: t.moment.level.heading,
        name: t.moment.level.name(to.level.level),
        text: t.moment.level.text,
      });
    }
    const had = new Set(from.badges.map((badge) => badge.id));
    const all = badgesOf(to.course.map(({ world }) => world.id));
    const badgeTexts = messagesOf(locale).badges;
    for (const earned of to.badges) {
      const badge = all.find((b) => b.id === earned.id);
      if (had.has(earned.id) || badge === undefined) continue;
      const worldOf = to.course.find(({ world }) => world.id === badge.world)?.world;
      const texts = worldOf !== undefined ? worldBadgeText(badgeTexts, worldOf.title[locale]) : badgeTexts.fixed[badge.id as FixedBadgeId];
      moments.push({
        cue: "badge",
        art: badgeMedal({ label: texts.name, icon: badgeArt(badge), state: "earned", size: "large" }),
        heading: t.moment.badge.heading,
        name: texts.name,
        text: texts.description,
      });
    }
    return moments;
  };

  /** Asks whether to leave the running lesson, and resolves the answer. */
  const ask = () =>
    new Promise<boolean>((resolve) => {
      let answer = false;
      const choose = (leaving: boolean) => {
        answer = leaving;
        asked.close();
      };
      const asked = dialog({
        title: t.leaveDialog.title,
        body: el("p", { text: t.leaveDialog.body }),
        actions: [button({ label: t.leaveDialog.leave, onClick: () => choose(true) }), button({ label: t.leaveDialog.stay, variant: "primary", onClick: () => choose(false) })],
        closeLabel: t.leaveDialog.close,
        onClose: () => resolve(answer),
      });
      asked.open();
    });

  const mayLeave = async () => {
    if (phase !== "running") return true;
    const leaving = await ask();
    if (leaving) stop();
    return leaving;
  };

  const leaveByButton = async () => {
    if (await mayLeave()) context.go(learnPath);
  };

  /** Plays the learner's notes and binds the computer keyboard, shifted for the step, while the lesson shows. */
  let stopHearing: (() => void) | undefined;
  const hear = () => {
    const { bus, midi } = inputService(context.settings);
    const stops = [
      attachKeyboard(bus, context.settings, window, undefined, () => keyShift),
      midi.subscribe(fitKeys),
      bus.subscribe((event) => {
        if (event.type === "noteOn") sound.press(event.pitch, event.velocity);
        else if (event.type === "noteOff") sound.release(event.pitch);
      }),
    ];
    return () => stops.forEach((stop) => stop());
  };

  const onUnload = (event: BeforeUnloadEvent) => {
    if (phase === "running") event.preventDefault();
  };

  const nameTab = () => {
    if (lesson !== undefined) document.title = `${lesson.texts[locale].title} · ${messagesOf(locale).siteName}`;
  };

  void findLesson(at.world, at.lesson).then((found) => {
    if (found === undefined) {
      phase = "missing";
      title.textContent = t.missing;
      element.replaceChildren(
        el("div", { class: "lesson__missing", children: [title, buttonLink({ label: t.backToCourse, href: `./${learnPath}`, variant: "primary" })] }),
      );
      return;
    }
    world = found.world;
    lesson = found.lesson;
    element.style.setProperty("--c-world", `var(--c-world-${world.accent})`);
    title.textContent = lesson.texts[locale].title;
    phase = "idle";
    if (showing) {
      nameTab();
      start();
    }
  });

  return {
    element,
    shown() {
      showing = true;
      addEventListener("beforeunload", onUnload);
      stopHearing ??= hear();
      nameTab();
      // Shown while its song is out, by Back or a link, the lesson takes the song step back without a take.
      if (away) {
        away = false;
        songHandoff.end(undefined);
      }
      if (phase === "idle" || phase === "ended") start();
    },
    hidden() {
      showing = false;
      removeEventListener("beforeunload", onUnload);
      stopHearing?.();
      stopHearing = undefined;
      if (!away) stop();
    },
    mayLeave,
  };
}
