/** The world map of *Learn Piano* in Arabic. It is a translation of the English one, so a text it leaves out shows in English. */
import { formatNumber, isolate, plural } from "../format";
import type { Translation } from "../translation";
import type { learnMap as en } from "./learn-map.en";

/** `n` as the locale writes it, isolated so it keeps its place in a right-to-left line. */
const num = (n: number) => isolate(formatNumber("ar", n));

export const learnMap: Translation<typeof en> = {
  lead: "تقدم في الطريق درسًا بعد درس. ينتهي كل عالم بالتحدي الكبير.",
  loading: "جارٍ تحميل الدورة…",
  continue: "متابعة",
  nextUp: "التالي",
  world: (n: number) => `العالم ${num(n)}`,
  progress: (done: number, all: number) =>
    `${num(done)} من ${plural("ar", all, { zero: "لا دروس", one: "درس واحد", two: "درسين", few: `${num(all)} دروس`, many: `${num(all)} درسًا`, other: `${num(all)} درس` })}`,
  locked: "يُفتح هذا العالم بالفوز في التحدي الكبير للعالم السابق، أو باجتياز اختبار التخطي فيه.",
  beaten: "تم الفوز",
  node: {
    locked: (name: string) => `${isolate(name)}، مقفل`,
    open: (name: string) => `${isolate(name)}، مفتوح`,
    done: (name: string, stars: number) => `${isolate(name)}، ${num(stars)} من ${num(3)} نجوم`,
  },
  medal: (world: string, earned: boolean) => `شارة «${isolate(world)}»، ${earned ? "مكتسبة" : "لم تُكتسب بعد"}`,
  skipTest: {
    title: (world: string) => `اختبار التخطي: ${isolate(world)}`,
    text: "هل تعرف هذا من قبل؟ اجتياز اختبار التخطي يفتح كل الدروس هنا.",
    action: "بدء اختبار التخطي",
  },
  bar: {
    label: "تقدمك",
    streak: (days: number) =>
      plural("ar", days, { zero: "لا أيام متتالية", one: "يوم واحد", two: "يومان متتاليان", few: `${num(days)} أيام متتالية`, many: `${num(days)} يومًا متتاليًا`, other: `${num(days)} يوم متتالٍ` }),
    level: (level: number) => `المستوى ${num(level)}`,
    today: "اليوم",
    todayGoal: (xp: number, goal: number) => `اليوم: ${num(xp)} من ${num(goal)} \u2068XP\u2069`,
    days: (days: number) =>
      plural("ar", days, { zero: "لا أيام", one: "يوم واحد", two: "يومان", few: `${num(days)} أيام`, many: `${num(days)} يومًا`, other: `${num(days)} يوم` }),
  },
};
