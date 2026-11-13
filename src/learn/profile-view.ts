/**
 * The profile of *Learn Piano* at `learn/profile/`: the learner's level, streak, calendar, stats and
 * badges, their own choices, and their data.
 *
 * Its parts, top to bottom: the heading, then the level card and the streak card side by side. Under
 * them, the calendar of the last eight weeks and the stats. Then every badge, the choices, and the data.
 *
 * - **The level card** shows the level, the XP in all, and a bar to the next level. Its emblem is the
 *   level's number on a honey disc, hidden from a screen reader, since the card's text says it too.
 * - **The streak card** shows the days in a row, the best streak, and today's XP towards the goal. Its
 *   emblem is the flame of the streak badges.
 * - **The calendar** is eight weeks of seven days, Monday first, ending with this week. A day that met
 *   the goal is filled, a day with a lesson is outlined, and a day ahead is blank. Today carries
 *   `data-today`, and a row of weekday letters from `Intl` heads the columns. It is one image to a
 *   screen reader, named by a sentence of its counts.
 * - **Every badge shows,** as `badgesOf` lists them, earned ones in colour and locked ones greyed. Each
 *   names what earns it, from `messagesOf(locale).badges`.
 * - **The choices** are the daily goal and the reward sounds, the settings `learnDailyGoal` and
 *   `learnSounds`. A new goal applies at once, to the streak and to every past day.
 * - **The data** is a link to the Data page at `data/`, which saves and restores everything, and the
 *   reset. The reset asks twice, saves the whole backup of `src/data/backup-file.ts` first, then
 *   empties the log. A line under the buttons says what it did.
 *
 * Decisions, and what each costs:
 * - **It reads the standing on each show,** and draws again from scratch, as the map does. The cost is
 *   one pass over the log and about a hundred elements.
 * - **Its body holds a loading line until the first read,** and fills a screen's height, so the footer
 *   never shifts as the cards arrive. The cost is an empty screen under the line while it loads.
 * - **It opens the store on each show,** and its actions write through that store. The standing is read
 *   from the same store, so a browser without IndexedDB still sees a restore.
 * - **The reset saves a backup file before it removes anything.** A learner who regrets it restores
 *   that file, so even a reset loses no work. The cost is one download the learner may not want.
 */
import "./profile-view.css";
import { messagesOf, rowOf, type Locale } from "../i18n/locale";
import { textFor } from "../i18n/pseudo";
import type { View, ViewContext } from "../site/views";
import { badgeMedal } from "../ui/components/badge-medal";
import { button, buttonLink } from "../ui/components/button";
import { dialog } from "../ui/components/dialog";
import { progressBar } from "../ui/components/progress";
import { segmented } from "../ui/components/tabs";
import { toggleControl } from "../ui/controls";
import { el } from "../ui/dom";
import { browserStores, saveBackup } from "../data/backup-file";
import { hrefOf } from "../site/site-bar";
import { formatNumber } from "../i18n/format";
import { worldBadgeText } from "../i18n/messages/learn-badges.en";
import { badgeArt } from "./game/badge-art";
import { badgesOf, type FixedBadgeId } from "./game/badges";
import { dailyGoalOf, readStanding, type Standing } from "./game/standing";
import { addDays, DAILY_GOALS, dayOf, xpByDay } from "./game/streak";
import { openProgress, type ProgressStore } from "./progress/store";

/** The weeks the calendar shows, this one included. */
export const CALENDAR_WEEKS = 8;

/** One day of the calendar. */
type DayState = "met" | "played" | "none" | "ahead";

/** The calendar's days, Monday first, `CALENDAR_WEEKS` weeks ending with the week of `now`. */
export function calendarDays(standing: Pick<Standing, "streak" | "tally">, now: number): { day: string; state: DayState }[] {
  const today = dayOf(now);
  const weekday = (new Date(now).getDay() + 6) % 7;
  const first = addDays(today, -weekday - 7 * (CALENDAR_WEEKS - 1));
  const met = new Set(standing.streak.metDays);
  const played = xpByDay(standing.tally.gains);
  return Array.from({ length: CALENDAR_WEEKS * 7 }, (_, i) => {
    const day = addDays(first, i);
    const state: DayState = day > today ? "ahead" : met.has(day) ? "met" : played.has(day) ? "played" : "none";
    return { day, state };
  });
}

/** A card of the profile, headed `heading`. */
function card(heading: string, children: (Node | null)[], className: string): HTMLElement {
  return el("section", { class: `profile__card ${className}`, children: [el("h2", { class: "profile__heading", text: heading }), ...children] });
}

/** The profile view of `locale`. `refreshSlot` runs after a change of the log or the goal, so the top bar's slot reads it. */
export function profilePage(locale: Locale, context: ViewContext, refreshSlot: () => void = () => {}): View {
  const all = messagesOf(locale);
  const t = all.profile;
  const n = (value: number) => formatNumber(locale, value);
  const body = el("div", { class: "profile__body", attrs: { "aria-busy": "true" }, children: [el("p", { class: "profile__soft", text: t.loading })] });
  const status = el("p", { class: "profile__status", attrs: { role: "status" } });
  const element = el("div", { class: "site-page profile", children: [el("h1", { class: "site-page__title", text: all.pages.profile.title }), body] });
  let reading = 0;
  let store: ProgressStore | undefined;

  const levelCard = (standing: Standing) => {
    const { level, into, span } = standing.level;
    return card(
      t.level.heading,
      [
        el("div", {
          class: "profile__hero",
          children: [
            el("span", { class: "profile__emblem profile__emblem--level", attrs: { "aria-hidden": "true" }, text: n(level) }),
            el("div", {
              class: "profile__hero-text",
              children: [el("p", { class: "profile__big", text: t.level.name(level) }), el("p", { class: "profile__soft", text: t.level.total(standing.tally.total) })],
            }),
          ],
        }),
        progressBar({ label: t.level.toNext(level + 1), value: into / span, locale }),
      ],
      "profile__level",
    );
  };

  const streakCard = (standing: Standing) => {
    const { current, best, todayXp } = standing.streak;
    return card(
      t.streak.heading,
      [
        el("div", {
          class: "profile__hero",
          children: [
            el("span", { class: "profile__emblem profile__emblem--streak", attrs: { "aria-hidden": "true" }, children: [badgeArt({ id: "streak", motif: "flame" })] }),
            el("div", {
              class: "profile__hero-text",
              children: [el("p", { class: "profile__big", text: t.streak.current(current) }), el("p", { class: "profile__soft", text: t.streak.currentLabel })],
            }),
          ],
        }),
        el("div", {
          class: "profile__facts",
          children: [el("p", { class: "profile__soft", text: t.streak.best(best) }), el("p", { class: "profile__soft", text: t.streak.today(todayXp, standing.goal) })],
        }),
      ],
      "profile__streak",
    );
  };

  const calendarCard = (standing: Standing) => {
    const days = calendarDays(standing, Date.now());
    const met = days.filter((d) => d.state === "met").length;
    const played = met + days.filter((d) => d.state === "played").length;
    const title = { met: t.calendar.met, played: t.calendar.played, none: t.calendar.none, ahead: "" };
    const today = dayOf(Date.now());
    // The first seven days are a week from Monday, so they name the columns in the locale's own letters.
    const letter = new Intl.DateTimeFormat(rowOf(locale).intl, { weekday: "narrow", timeZone: "UTC" });
    const weekdays = el("div", {
      class: "profile__weekdays",
      attrs: { "aria-hidden": "true" },
      children: days.slice(0, 7).map(({ day }) => el("span", { text: letter.format(new Date(`${day}T00:00:00Z`)) })),
    });
    const grid = el("div", {
      class: "profile__calendar",
      attrs: { role: "img", "aria-label": t.calendar.label(met, played) },
      children: days.map(({ day, state }) =>
        el("span", { class: "profile__day", attrs: { "data-state": state, "data-today": String(day === today), "data-tip": state === "ahead" ? "" : `${day}: ${title[state]}` } }),
      ),
    });
    const key = el("ul", {
      class: "profile__key",
      attrs: { "aria-hidden": "true" },
      children: (["met", "played", "none"] as const).map((state) =>
        el("li", { children: [el("span", { class: "profile__day", attrs: { "data-state": state } }), el("span", { text: title[state] })] }),
      ),
    });
    return card(t.calendar.heading, [el("div", { class: "profile__month", children: [weekdays, grid] }), key], "profile__weeks");
  };

  const statsCard = (standing: Standing, badges: number) => {
    const stars = [...standing.tally.stars.values()];
    const rows: [string, number][] = [
      [t.stats.lessons, stars.length],
      [t.stats.threeStars, stars.filter((s) => s >= 3).length],
      [t.stats.days, xpByDay(standing.tally.gains).size],
      [t.stats.badges, badges],
    ];
    return card(
      t.stats.heading,
      [el("dl", { class: "profile__stats", children: rows.map(([label, value]) => el("div", { children: [el("dt", { text: label }), el("dd", { text: n(value) })] })) })],
      "profile__numbers",
    );
  };

  const badgesCard = (standing: Standing) => {
    const badges = badgesOf(standing.course.map(({ world }) => world.id));
    const earned = new Set(standing.badges.map((b) => b.id));
    const items = badges.map((badge) => {
      const world = standing.course.find(({ world }) => world.id === badge.world)?.world;
      const texts = world !== undefined ? worldBadgeText(all.badges, textFor(world.title, locale)) : all.badges.fixed[badge.id as FixedBadgeId];
      const has = earned.has(badge.id);
      return el("li", {
        class: "profile__badge",
        attrs: { "data-earned": String(has) },
        children: [
          badgeMedal({ label: has ? t.badges.earned(texts.name) : t.badges.locked(texts.name), icon: badgeArt(badge), state: has ? "earned" : "locked", size: "medium", caption: texts.name }),
          el("p", { class: "profile__soft profile__badge-text", text: texts.description }),
        ],
      });
    });
    return card(t.badges.heading, [el("p", { class: "profile__soft", text: t.badges.lead(earned.size, badges.length) }), el("ul", { class: "profile__badges", children: items })], "profile__all-badges");
  };

  const choicesCard = () => {
    const goal = segmented({
      label: t.choices.goal,
      segments: DAILY_GOALS.map((value) => ({ value: String(value), label: all.counts.xp(value) })),
      value: String(dailyGoalOf(context.settings)),
      onChange: (value) => {
        context.settings.set("learnDailyGoal", value as `${(typeof DAILY_GOALS)[number]}`);
        refreshSlot();
        read();
      },
    });
    const sounds = toggleControl(t.choices.sounds, context.settings.get("learnSounds"), (on) => context.settings.set("learnSounds", on));
    return card(
      t.choices.heading,
      [
        el("div", { class: "profile__choice", children: [el("p", { class: "profile__label", text: t.choices.goal }), el("p", { class: "profile__soft", text: t.choices.goalHelp }), goal] }),
        el("label", {
          class: "profile__choice profile__switch",
          children: [el("span", { children: [el("span", { class: "profile__label", text: t.choices.sounds }), el("span", { class: "profile__soft", text: t.choices.soundsHelp })] }), sounds.element],
        }),
      ],
      "profile__choices",
    );
  };

  const say = (text: string) => {
    status.textContent = text;
  };

  /** Runs `change` on the store, then reads the standing again and says `done`'s line, or that the browser refused. */
  const write = async (change: (opened: ProgressStore) => Promise<string>) => {
    try {
      const opened = store ?? (await openProgress());
      say(await change(opened));
      refreshSlot();
      read();
    } catch {
      say(t.data.failed);
    }
  };

  const askReset = () => {
    const again = dialog({
      title: t.data.askAgain.title,
      body: el("p", { text: t.data.askAgain.text }),
      closeLabel: t.data.close,
      actions: [
        button({ label: t.data.cancel, onClick: () => again.close() }),
        button({
          label: t.data.askAgain.confirm,
          variant: "danger",
          onClick: () => {
            again.close();
            void write(async (opened) => {
              await saveBackup(await browserStores(context.settings, opened));
              await opened.reset();
              return t.data.resetDone;
            });
          },
        }),
      ],
    });
    const first = dialog({
      title: t.data.ask.title,
      body: el("p", { text: t.data.ask.text }),
      closeLabel: t.data.close,
      actions: [
        button({ label: t.data.cancel, onClick: () => first.close() }),
        button({
          label: t.data.ask.next,
          variant: "danger",
          onClick: () => {
            first.close();
            again.open();
          },
        }),
      ],
    });
    first.open();
  };

  const dataCard = () =>
    card(
      t.data.heading,
      [
        el("p", { class: "profile__soft", text: t.data.lead }),
        el("div", {
          class: "profile__actions",
          children: [
            buttonLink({ label: t.data.open, href: hrefOf("data", locale), icon: "arrow-right", iconAt: "end" }),
            button({ label: t.data.reset, variant: "danger", onClick: askReset }),
          ],
        }),
        status,
      ],
      "profile__data",
    );

  const draw = (standing: Standing) => {
    body.replaceChildren(
      el("div", { class: "profile__pair", children: [levelCard(standing), streakCard(standing)] }),
      el("div", { class: "profile__pair", children: [calendarCard(standing), statsCard(standing, standing.badges.length)] }),
      badgesCard(standing),
      choicesCard(),
      dataCard(),
    );
    body.removeAttribute("aria-busy");
  };

  function read(): void {
    const own = ++reading;
    void (async () => {
      store = await openProgress();
      const standing = await readStanding(dailyGoalOf(context.settings), Date.now(), store);
      if (own === reading && !element.hidden) draw(standing);
    })();
  }

  return { element, shown: read };
}
