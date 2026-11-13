/** The first setup of *Learn Piano* in Arabic. It is a translation of the English one, so a text it leaves out shows in English. */
import { formatNumber, isolate } from "../format";
import type { Translation } from "../translation";
import type { learnSetup as en } from "./learn-setup.en";

export const learnSetup: Translation<typeof en> = {
  title: "أهلًا بك في «تعلم البيانو»",
  welcome: "أهلًا! أنا هنا لأعلمك العزف على البيانو. ثلاثة أسئلة سريعة، ثم نبدأ العزف.",
  mascot: "قرد بفرو بلون العسل يرتدي سترة من المخمل المضلع، ومعه تتعلم البيانو",
  close: "تخطي الإعداد",
  progress: "الإعداد",
  steps: ["آلتك", "خبرتك", "هدفك اليومي"],
  doneStep: "تم",
  next: "متابعة",
  device: {
    question: "على أي آلة سيكون العزف؟",
    midi: { name: "لوحة مفاتيح \u2068MIDI\u2069", text: "بيانو رقمي أو لوحة مفاتيح موسيقية، موصولة بمنفذ \u2068USB\u2069." },
    computer: { name: "لوحة مفاتيح الحاسوب", text: "أزرار الحروف تعزف النغمات." },
    screen: { name: "الشاشة", text: "اضغط على المفاتيح الظاهرة على الشاشة." },
    noMidi: "هذا المتصفح لا يدعم \u2068MIDI\u2069. يمكنك العزف على لوحة مفاتيح الحاسوب أو على الشاشة بدلًا منه.",
    check: "اضغط أي مفتاح لنتأكد من أننا نسمعه.",
    checkMidi: "اضغط أي مفتاح على لوحة مفاتيح \u2068MIDI\u2069.",
    checkComputer: "اضغط زر حرف، مثل \u2068Q\u2069 أو \u2068W\u2069 أو \u2068E\u2069.",
    checkScreen: "اضغط على مفتاح في الأسفل.",
    heard: (note: string) => `نسمعك: هذه النغمة ${isolate(note)}.`,
    keys: "بيانو للتجربة",
    skip: "تخطي الفحص",
    marks: { next: "مفتاح للتجربة", correct: "مسموع", mistake: "مسموع" },
  },
  before: {
    question: "هل عزفت على البيانو من قبل؟",
    never: "أبدًا",
    little: "قليلًا",
    yes: "نعم، أجيد العزف",
    skipTests: "لكل عالم على الخريطة اختبار التخطي. اجتيازه يفتح كل دروس ذلك العالم دفعة واحدة.",
  },
  goal: {
    question: "ما الهدف اليومي؟",
    lead: "تحقيق الهدف كل يوم يزيد أيامك المتتالية. الدرس الجديد بثلاث نجوم يمنحك 30 \u2068XP\u2069.",
    label: "الهدف اليومي",
    names: { "10": "استرخاء", "20": "انتظام", "30": "حماس", "50": "جرأة" },
    option: (xp: number, name: string) => `${isolate(formatNumber("ar", xp))} \u2068XP\u2069، ${isolate(name)}`,
    start: "بدء التعلم",
  },
};
