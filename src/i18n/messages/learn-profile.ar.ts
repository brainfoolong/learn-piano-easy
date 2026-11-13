/** The profile of *Learn Piano* in Arabic. It is a translation of the English one, so a text it leaves out shows in English. */
import { formatNumber, isolate, plural } from "../format";
import type { Translation } from "../translation";
import type { learnProfile as en } from "./learn-profile.en";

/** `value` as the locale writes it, isolated so it keeps its place in a right-to-left line. */
const n = (value: number) => isolate(formatNumber("ar", value));
const days = (value: number) =>
  plural("ar", value, { zero: "لا أيام", one: "يوم واحد", two: "يومان", few: `${n(value)} أيام`, many: `${n(value)} يومًا`, other: `${n(value)} يوم` });

export const learnProfile: Translation<typeof en> = {
  loading: "جارٍ تحميل تقدمك…",
  level: {
    heading: "المستوى",
    name: (level: number) => `المستوى ${n(level)}`,
    total: (xp: number) => `${n(xp)} \u2068XP\u2069 في المجموع`,
    toNext: (level: number) => `حتى المستوى ${n(level)}`,
  },
  streak: {
    heading: "أيام متتالية",
    current: (count: number) => days(count),
    currentLabel: "على التوالي حتى الآن",
    best: (count: number) => `الأفضل: ${days(count)}`,
    today: (xp: number, goal: number) =>
      xp >= goal ? `اليوم: ${n(xp)} \u2068XP\u2069، وتحقق الهدف البالغ ${n(goal)}` : `اليوم: ${n(xp)} من ${n(goal)} \u2068XP\u2069`,
  },
  calendar: {
    heading: "آخر 8 أسابيع",
    label: (met: number, played: number) =>
      `في الأسابيع الثمانية الأخيرة، ${plural("ar", met, { zero: "لم يتحقق الهدف في أي يوم", one: "تحقق الهدف في يوم واحد", two: "تحقق الهدف في يومين", few: `تحقق الهدف في ${n(met)} أيام`, many: `تحقق الهدف في ${n(met)} يومًا`, other: `تحقق الهدف في ${n(met)} يوم` })}، و${plural("ar", played, { zero: "لم يجرِ أي درس", one: "جرى درس في يوم واحد", two: "جرى درس في يومين", few: `جرى درس في ${n(played)} أيام`, many: `جرى درس في ${n(played)} يومًا`, other: `جرى درس في ${n(played)} يوم` })}.`,
    met: "تحقق الهدف",
    played: "يوم عزف",
    none: "دون درس",
  },
  stats: {
    heading: "إحصاءات",
    lessons: "الدروس المكتملة",
    threeStars: "دروس نالت 3 نجوم",
    days: "أيام العزف",
    badges: "الشارات المكتسبة",
  },
  badges: {
    heading: "الشارات",
    lead: (earned: number, all: number) => `المكتسبة: ${n(earned)} من ${n(all)}`,
    earned: (name: string) => `${isolate(name)}، مكتسبة`,
    locked: (name: string) => `${isolate(name)}، لم تُكتسب بعد`,
  },
  choices: {
    heading: "إعداداتك",
    goal: "الهدف اليومي",
    goalHelp: "مقدار \u2068XP\u2069 اليومي اللازم لاستمرار أيامك المتتالية.",
    sounds: "أصوات المكافأة",
    soundsHelp: "رنات قصيرة عند اجتياز خطوة، ونيل نجمة، وبلوغ مستوى جديد، وكسب شارة. صوت البيانو مسموع دائمًا.",
  },
  data: {
    heading: "بياناتك",
    lead: "يبقى تقدمك في هذا المتصفح. تحفظه صفحة «بياناتك» مع كل شيء آخر في ملف واحد، وتستعيده منه.",
    open: "نسخ احتياطي أو استعادة",
    reset: "إعادة ضبط كل التقدم",
    failed: "تعذّر الحفظ في المتصفح. لم يتغير شيء.",
    resetDone: "أُعيد ضبط تقدمك. ملف النسخة الاحتياطية يحمل كل ما كان فيه.",
    close: "إغلاق",
    cancel: "الإبقاء على تقدمي",
    ask: {
      title: "إعادة ضبط كل التقدم؟",
      text: "سيُحذف من هذا المتصفح كل درس ونجمة ونقطة \u2068XP\u2069 وشارة. تبقى إعداداتك كما هي.",
      next: "متابعة",
    },
    askAgain: {
      title: "هل تريد ذلك فعلًا؟",
      text: "تُحفظ أولًا نسخة احتياطية في ملف، فتبقى استعادة كل شيء ممكنة لاحقًا. ثم يبدأ تقدمك من جديد.",
      confirm: "إعادة ضبط تقدمي",
    },
  },
};
