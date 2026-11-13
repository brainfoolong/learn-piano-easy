/** The lesson view of *Learn Piano* in Arabic. It is a translation of the English one, so a text it leaves out shows in English. */
import { formatNumber, isolate, plural } from "../format";
import type { Translation } from "../translation";
import type { learnLesson as en } from "./learn-lesson.en";

/** `n` as the locale writes it, isolated so it keeps its place in a right-to-left line. */
const num = (n: number) => isolate(formatNumber("ar", n));

export const learnLesson: Translation<typeof en> = {
  stepOf: (step: number, count: number) => `الخطوة ${num(step)} من ${num(count)}`,
  leave: "الخروج من الدرس",
  leaveDialog: {
    title: "الخروج من هذا الدرس؟",
    body: "لا يُحفظ التقدم في هذا الدرس إلا عند انتهائه.",
    stay: "متابعة التعلم",
    leave: "خروج",
    close: "إغلاق",
  },
  lacks: {
    touch: "آلتي لا تميّز بين العزف بقوة وبهدوء",
    pedal: "آلتي بلا دواسة",
  },
  loading: "جارٍ تحميل الدرس…",
  missing: "هذا الدرس غير موجود.",
  backToCourse: "العودة إلى الدورة",
  band: {
    continue: "متابعة",
    right: "صحيح!",
    tryAgain: "ليس تمامًا. لنجرب مرة أخرى.",
  },
  demo: {
    play: "استماع",
    playAgain: "استماع مجددًا",
    skip: "تخطٍ",
    piano: "البيانو يعزف المثال",
    playing: "جارٍ العزف",
    slow: "ببطء",
    side: "منظر جانبي",
  },
  quiz: {
    answers: "الإجابات",
    wrong: "ليس تمامًا. لنجرب إجابة أخرى.",
    hint: "الإجابة المظللة هي الصحيحة.",
  },
  findKey: {
    piano: "البيانو. اضغط المفتاح الذي تذكره الخطوة.",
    marks: { next: "هذا المفتاح", correct: "صحيح", mistake: "ليس هذا" },
    wrong: "هذا مفتاح آخر. لنجرب مرة أخرى.",
    hint: "المفتاح المظلل هو المطلوب.",
    timeUp: "انتهى الوقت.",
    secondsLeft: (seconds: number) => `${num(seconds)} ث`,
  },
  playNotes: {
    piano: "البيانو. اعزف الجملة الموسيقية بالترتيب.",
    marks: { next: "المفتاح التالي", correct: "عُزف", mistake: "ليس هذا" },
    wrong: "هذه نغمة أخرى. لنجرب مرة أخرى.",
    hint: (note: string) => `النغمة التالية هي ${isolate(note)}.`,
    hintChord: (...notes: string[]) =>
      `بعد ذلك، اعزف ${notes.slice(0, -1).map(isolate).join(" و")}${notes.length > 1 ? " و" : ""}${isolate(notes.at(-1) ?? "")} معًا.`,
    expression: {
      "too-loud": "المفتاح صحيح، لكن العزف قوي جدًا. اعزفه بهدوء.",
      "too-soft": "المفتاح صحيح، لكن العزف هادئ جدًا. اعزفه بقوة.",
      "pedal-up": "المفتاح صحيح. أبق الدواسة مضغوطة أثناء عزفه.",
      "pedal-down": "المفتاح صحيح. ارفع قدمك عن الدواسة قبل عزفه.",
    },
  },
  listen: {
    question: (n: number, count: number) => `الزوج ${num(n)} من ${num(count)}`,
    playAgain: "استماع مجددًا",
    group: "هل النغمة الثانية أعلى أم أخفض أم مثلها؟",
    answers: { higher: "أعلى", lower: "أخفض", same: "مثلها" },
    wrong: "ليس تمامًا. لنستمع مرة أخرى ونجرب إجابة أخرى.",
    hint: "الإجابة المظللة هي الصحيحة.",
    roundAgain: (right: number, asked: number) => `الإجابات الصحيحة: ${num(right)} من ${num(asked)}. لنلعب جولة أخرى.`,
  },
  readNote: {
    staff: { treble: "نغمة على مدرج مفتاح صول", bass: "نغمة على مدرج مفتاح فا" },
    count: (n: number, total: number) => `النغمة ${num(n)} من ${num(total)}`,
    answers: "أسماء النغمات",
    letters: { C: "دو", D: "ري", E: "مي", F: "فا", G: "صول", A: "لا", B: "سي" },
    piano: "البيانو. اعزف النغمة المكتوبة على المدرج.",
    marks: { next: "هذا المفتاح", correct: "صحيح", mistake: "ليس هذا" },
    wrongName: "هذه نغمة أخرى. لننظر من جديد.",
    wrongKey: "هذا مفتاح آخر. لنجرب مرة أخرى.",
    hintName: "الاسم المظلل هو الصحيح.",
    hintKey: "المفتاح المظلل هو المطلوب.",
    again: "بعض الإجابات لم تصح بعد. لنمر عليها مرة أخرى.",
  },
  rhythmTap: {
    start: "بدء",
    listen: "استمع: مازورة واحدة للعد التمهيدي.",
    tap: "والآن اضغط أي مفتاح مع كل نقرة.",
    piano: "لوحة النقر. اضغط أي مفتاح على النبضة.",
    marks: { next: "اضغط هنا", correct: "على النبضة", mistake: "خارج النبضة" },
    short: (hits: number, beats: number) => `النبضات المضغوطة: ${num(hits)} من ${num(beats)}. لنجرب مرة أخرى.`,
    hint: "اضغط لحظة سماع النقرة. تومض النقاط مع كل نبضة.",
    play: "والآن اعزف كل نغمة مع نقرتها.",
    phrasePiano: "المفاتيح. اعزف الجملة الموسيقية في وقتها مع النقرات.",
    shortNotes: (hits: number, notes: number) => `النغمات المعزوفة في وقتها: ${num(hits)} من ${num(notes)}. لنجرب مرة أخرى.`,
    restSounded: "صدر صوت مفتاح أثناء سكتة. ارفع إصبعك واترك السكتة صامتة.",
    phraseHint: "اعزف كل نغمة مع نقرتها، وارفع إصبعك عن المفتاح قبل السكتة. تومض النقاط مع كل نبضة.",
    pattern: {
      taps: (countIn: number, taps: number) =>
        `عدّ ${plural("ar", countIn, { zero: "دون نبضات", one: "نبضة واحدة", two: "نبضتين", few: `${num(countIn)} نبضات`, many: `${num(countIn)} نبضة`, other: `${num(countIn)} نبضة` })}. ثم اضغط على ${plural("ar", taps, { zero: "لا نبضات", one: "نبضة واحدة", two: "نبضتين", few: `${num(taps)} نبضات`, many: `${num(taps)} نبضة`, other: `${num(taps)} نبضة` })}.`,
      phrase: (countIn: number, ...parts: string[]) =>
        `عدّ ${plural("ar", countIn, { zero: "دون نبضات", one: "نبضة واحدة", two: "نبضتين", few: `${num(countIn)} نبضات`, many: `${num(countIn)} نبضة`, other: `${num(countIn)} نبضة` })}. ثم اعزف بالترتيب${parts.length > 0 ? `: ${parts.map(isolate).join("، ")}` : ""}.`,
      held: (note: string, beats: number) =>
        `${isolate(note)} مضغوطة ${plural("ar", beats, { zero: "دون نبضات", one: "نبضة واحدة", two: "نبضتين", few: `${num(beats)} نبضات`, many: `${num(beats)} نبضة`, other: `${num(beats)} نبضة` })}`,
      rest: (beats: number) =>
        plural("ar", beats, { zero: "سكتة", one: "سكتة", two: "سكتة لمدة نبضتين", few: `سكتة لمدة ${num(beats)} نبضات`, many: `سكتة لمدة ${num(beats)} نبضة`, other: `سكتة لمدة ${num(beats)} نبضة` }),
    },
  },
  song: {
    play: "العزف في المشغل",
    goal: (percent: number) => `اعزفها بحيث تكون ${num(percent)}% من النغمات صحيحة.`,
    notYet: (percent: number) => `الأغنية بانتظارك. اعزفها مجددًا متى شئت، واجعل هدفك ${num(percent)}%.`,
    played: (percent: number) => `عزفتها وكانت ${num(percent)}% من النغمات صحيحة.`,
  },
  recap: {
    heading: "ما تعلمته",
  },
  end: {
    heading: "اكتمل الدرس",
    stars: (n: number) => `${num(n)} من ${num(3)} نجوم`,
    again: "العزف مجددًا",
    saving: "جارٍ حفظ تقدمك…",
    saved: "حُفظ على هذا الجهاز.",
    unsaved: "لا يحفظ هذا المتصفح أي بيانات، لذا تبقى هذه النتيجة حتى إغلاق علامة التبويب.",
    failed: "تعذّر حفظ تقدمك.",
    retry: "إعادة المحاولة",
    xp: (number: string) => `\u2066+${isolate(number)} XP\u2069`,
    level: (level: number, toNext: number) => `المستوى ${num(level)}: ${num(toNext)} \u2068XP\u2069 حتى المستوى ${num(level + 1)}`,
    skipOpened: (world: string) => `صارت كل دروس عالم «${isolate(world)}» مفتوحة الآن.`,
    skipShort: (stars: number) =>
      `يُفتح هذا العالم عند جمع ${plural("ar", stars, { zero: "لا نجوم", one: "نجمة واحدة", two: "نجمتين", few: `${num(stars)} نجوم`, many: `${num(stars)} نجمة`, other: `${num(stars)} نجمة` })}. يمكنك المحاولة مرة أخرى متى شئت.`,
  },
  moment: {
    continue: "متابعة",
    level: {
      heading: "مستوى جديد!",
      name: (level: number) => `المستوى ${num(level)}`,
      text: "كل درس يأخذك خطوة إلى الأمام. لنواصل!",
    },
    badge: { heading: "شارة جديدة!" },
  },
};
