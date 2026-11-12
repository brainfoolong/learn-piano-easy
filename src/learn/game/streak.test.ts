import { expect, test } from "../../testing";
import { addDays, dayOf, streakOf } from "./streak";
import type { XpGain } from "./xp";

/** Local time on the date `day` (`YYYY-MM-DD`) at `hour`, in ms since the epoch. */
function at(day: string, hour = 12, minute = 0): number {
  const [year, month, date] = day.split("-").map(Number) as [number, number, number];
  return new Date(year, month - 1, date, hour, minute).getTime();
}

/** A gain of `xp` at `when`. */
function gain(when: number, xp: number): XpGain {
  return { at: when, lesson: "w/a", xp, stars: 3, newStars: 0 };
}

test("a_day_without_the_daily_goal_ends_the_streak", () => {
  const gains = [gain(at("2026-05-01"), 20), gain(at("2026-05-02"), 20), gain(at("2026-05-03"), 10), gain(at("2026-05-04"), 20)];
  // May 3 earned 10 of 20, so the streak starts again on May 4.
  expect(streakOf(gains, 20, at("2026-05-04", 18)).current).toBe(1);
  expect(streakOf(gains, 10, at("2026-05-04", 18)).current).toBe(4);
  // Two lessons on one day add up to the goal.
  expect(streakOf([...gains, gain(at("2026-05-03", 20), 10)], 20, at("2026-05-04", 18)).current).toBe(4);
  // Today keeps yesterday's streak until it ends, and a whole day missed ends it.
  const morning = streakOf(gains, 10, at("2026-05-05", 7));
  expect(morning.current).toBe(4);
  expect(morning.today).toBe(false);
  expect(morning.todayXp).toBe(0);
  expect(streakOf(gains, 10, at("2026-05-06", 7)).current).toBe(0);
});

test("the_best_streak_is_kept", () => {
  const days = ["2026-05-01", "2026-05-02", "2026-05-03", "2026-05-10", "2026-05-11"];
  const streak = streakOf(days.map((d) => gain(at(d), 30)), 20, at("2026-05-11", 20));
  expect(streak.current).toBe(2);
  expect(streak.best).toBe(3);
  expect(streak.today).toBe(true);
  expect(streak.metDays).toEqual(days);
  expect(streakOf(days.map((d) => gain(at(d), 30)), 20, at("2026-06-01")).current).toBe(0);
  expect(streakOf(days.map((d) => gain(at(d), 30)), 20, at("2026-06-01")).best).toBe(3);
});

test("days_follow_the_local_calendar", () => {
  // Two lessons an hour apart across local midnight fall on two days, whatever the time zone.
  expect(dayOf(at("2026-05-01", 23, 30))).toBe("2026-05-01");
  expect(dayOf(at("2026-05-02", 0, 30))).toBe("2026-05-02");
  const late = streakOf([gain(at("2026-05-01", 23, 30), 20), gain(at("2026-05-02", 0, 30), 20)], 20, at("2026-05-02", 9));
  expect(late.current).toBe(2);
  // Days step by the calendar across months, years, leap days and clock changes.
  expect(addDays("2026-01-31", 1)).toBe("2026-02-01");
  expect(addDays("2026-12-31", 1)).toBe("2027-01-01");
  expect(addDays("2028-02-28", 1)).toBe("2028-02-29");
  expect(addDays("2026-03-29", -1)).toBe("2026-03-28");
  expect(addDays("2026-03-28", 1)).toBe("2026-03-29");
  expect(addDays("2026-10-25", 1)).toBe("2026-10-26");
  expect(addDays("2026-11-01", -1)).toBe("2026-10-31");
});
