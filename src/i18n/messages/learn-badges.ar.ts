/** The badges of *Learn Piano* in Arabic. It is a translation of the English one, so a text it leaves out shows in English. */
import { isolate } from "../format";
import type { Translation } from "../translation";
import type { learnBadges as en } from "./learn-badges.en";

export const learnBadges: Translation<typeof en> = {
  cheer: "القرد العازف يهتف فرحًا بإنجازك",
  fixed: {
    "first-note": { name: "النغمة الأولى", description: "عزف أول نغمة في درس." },
    "first-lesson": { name: "الدرس الأول", description: "إكمال أول درس." },
    "first-three-stars": { name: "النجوم الثلاث", description: "إكمال درس بثلاث نجوم." },
    "three-stars-ten": { name: "كنز النجوم", description: "الفوز بثلاث نجوم في عشرة دروس." },
    "first-daily-goal": { name: "الهدف تحقق!", description: "تحقيق الهدف اليومي لأول مرة." },
    "streak-3": { name: "ثلاثة أيام متتالية", description: "تحقيق الهدف اليومي ثلاثة أيام على التوالي." },
    "streak-7": { name: "أسبوع كامل", description: "تحقيق الهدف اليومي سبعة أيام على التوالي." },
    "streak-30": { name: "شهر كامل", description: "تحقيق الهدف اليومي ثلاثين يومًا على التوالي." },
    "streak-100": { name: "مئة يوم", description: "تحقيق الهدف اليومي مئة يوم على التوالي." },
    "notes-1000": { name: "ألف نغمة", description: "عزف ألف نغمة في الدروس." },
    "notes-10000": { name: "عشرة آلاف نغمة", description: "عزف عشرة آلاف نغمة في الدروس." },
    "rhythm-ace": { name: "نبض لا يخطئ", description: "اجتياز خطوة إيقاع من المحاولة الأولى." },
    "sight-reader": { name: "قراءة بلا تعثر", description: "قراءة عشر نغمات متتالية دون خطأ." },
    "early-bird": { name: "مع العصافير", description: "إكمال درس قبل الساعة 8 صباحًا." },
    "night-owl": { name: "بومة الليل", description: "إكمال درس في الساعة 10 ليلًا أو بعدها." },
    comeback: { name: "أهلًا بعودتك", description: "العودة إلى درس بعد غياب أسبوع." },
    legendary: { name: "أغنية صعبة", description: "عزف النسخة الصعبة من إحدى أغانينا حتى نهايتها في «العزف الحر»." },
  },
  world: {
    name: (world: string) => `إتقان «${isolate(world)}»`,
    description: (world: string) => `الفوز في التحدي الكبير لعالم «${isolate(world)}».`,
  },
};
