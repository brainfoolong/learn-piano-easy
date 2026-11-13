/** The player's settings panel in Arabic. A text it leaves out shows in English. */
import { parsePitch } from "../../keyboard/range";
import { pitchClassName } from "../../theory/note-names";
import { formatNumber, isolate, plural } from "../format";
import type { Translation } from "../translation";
import type { playerSettings as en } from "./player-settings.en";
import { playerSettingsLook } from "./player-settings-look.ar";
import { playerSettingsPlay } from "./player-settings-play.ar";

/** A tonic given in letters, such as `B♭`, in Arabic solfège, such as `سي♭`. Any other name stays as it is. */
function solfege(tonic: string): string {
  const pitch = parsePitch(`${tonic}4`);
  if (pitch === undefined) return tonic;
  return pitchClassName(pitch, { system: "solfege", accidentals: tonic.endsWith("♭") ? "flats" : "sharps", locale: "ar" });
}

export const playerSettings: Translation<typeof en> = {
  panel: {
    title: "الإعدادات",
    close: "إغلاق الإعدادات",
    search: "البحث في الإعدادات",
    clearSearch: "مسح البحث",
    sections: "أقسام الإعدادات",
    found: (count) => {
      const n = isolate(formatNumber("ar", count));
      return plural("ar", count, {
        zero: "لا إعدادات مطابقة",
        one: "إعداد واحد مطابق",
        two: "إعدادان مطابقان",
        few: `${n} إعدادات مطابقة`,
        many: `${n} إعدادًا مطابقًا`,
        other: `${n} إعداد مطابق`,
      });
    },
    emptyTitle: "لا نتائج",
    empty: (query) => `لا يوجد إعداد يطابق «${isolate(query)}». لنجرب كلمة أخرى.`,
    showAll: "عرض كل الإعدادات",
    changed: (count) => {
      const n = isolate(formatNumber("ar", count));
      return plural("ar", count, {
        zero: "لا تغييرات",
        one: "تغيير واحد",
        two: "تغييران",
        few: `${n} تغييرات`,
        many: `${n} تغييرًا`,
        other: `${n} تغيير`,
      });
    },
    changedTotal: (count) => {
      const n = isolate(formatNumber("ar", count));
      return plural("ar", count, {
        zero: "كل إعداد على قيمته الافتراضية.",
        one: "تغير إعداد واحد",
        two: "تغير إعدادان",
        few: `تغيرت ${n} إعدادات`,
        many: `تغير ${n} إعدادًا`,
        other: `تغير ${n} إعداد`,
      });
    },
    reset: (label) => `إعادة «${isolate(label)}» إلى القيمة الافتراضية`,
    resetAll: "إعادة ضبط الكل",
    confirmResetAll: "هل تريد إعادة كل الإعدادات إلى قيمها الافتراضية؟ ستضيع التغييرات.",
  },
  groups: {
    basics: "الأساسيات",
    audio: "الصوتيات",
    instrument: "آلتك",
    scene: "المشهد",
    reading: "مساعدات القراءة",
    app: "التطبيق",
  },
  sections: {
    general: "عام",
    loop: "التكرار",
    audio: "الصوت",
    backing: "الصوت المرافق",
    view: "العرض",
    keyboard: "بيانوك",
    input: "الإدخال",
    piano: "البيانو",
    notes: "النغمات",
    lanes: "الأعمدة والخطوط",
    particles: "الجزيئات",
    labels: "التسميات",
    lyrics: "الكلمات",
    coding: "الترميز بالألوان",
    sheet: "النوتة الموسيقية",
    pdf: "تصدير ⁨PDF⁩",
    offline: "دون اتصال",
  },
  about: {
    general: "طريقة بدء المشغل، وسير الأغنية، وما يعرضه الخط الزمني.",
    loop: "تكرار مقطع حتى يثبت في اليدين.",
    audio: "مستوى الصوت، ونبرة البيانو، والمترونوم، ومعادل الصوت.",
    backing: "ملف صوتي من عندك يُشغل مع الأغنية.",
    view: "الكاميرا، والتوهج، وكم يظهر من الأغنية مسبقًا.",
    keyboard: "عدد مفاتيح البيانو لديك، ليطابقه البيانو على الشاشة.",
    input: "طريقة العزف: الوضع، والأجهزة، وما يتحقق منه المشغل.",
    piano: "البيانو على الشاشة: مفاتيحه وألوانه وتأثيراته.",
    notes: "شكل النغمات المتساقطة وتوهجها.",
    lanes: "الأعمدة خلف النغمات، والخطوط والعلامات عليها.",
    particles: "لهب وشرر وجزيئاتك الخاصة حيث تصل النغمة إلى مفتاحها.",
    labels: "أسماء على النغمات والمفاتيح، وتآلفات الأغنية.",
    lyrics: "كلمات الأغنية، سطرًا بعد سطر فوق المشهد.",
    coding: "لون لكل نغمة أو لكل إصبع.",
    sheet: "الأغنية بالنوتة الموسيقية، بجانب النغمات المتساقطة أو بدلًا منها.",
    pdf: "حفظ النغمات المتساقطة في صفحات للطباعة.",
    offline: "ما يحفظه التطبيق للعزف دون اتصال بالشبكة.",
  },
  subheadings: {
    generalApp: "التطبيق والبيانات",
    generalSong: "الأغنية",
    generalReadouts: "المؤشرات والخط الزمني",
    audioVolume: "مستوى الصوت وقوة الضغط",
    audioRoom: "الصدى والدوزان",
    audioEnvelope: "غلاف الصوت",
    audioMetronome: "المترونوم",
    audioEqualizer: "معادل الصوت",
    audioTiming: "التوقيت",
    inputMode: "الوضع",
    inputDevices: "الأجهزة والأزرار",
    inputAlong: "العزف مع الأغنية",
    inputScore: "النتيجة واللعب",
    pianoPressed: "المفاتيح المضغوطة",
    pianoLook: "الألوان والحجم",
    pianoFlare: "الوهج",
    pianoWave: "خط الموجة",
    lanesColours: "ألوان الأعمدة",
    lanesLines: "خطوط الموازير والنبضات",
    lanesHeld: "المفاتيح المضغوطة باستمرار",
    lanesMarkers: "العلامات والدواسة",
    particlesEffects: "التأثيرات",
    particlesLook: "جزيئاتك: الشكل",
    particlesLife: "جزيئاتك: الكمية والعمر",
    particlesMotion: "جزيئاتك: الحركة",
    particlesWander: "جزيئاتك: الانجراف والتمايل",
    particlesStart: "جزيئاتك: نقطة البداية",
    labelsNotes: "على النغمات",
    labelsPiano: "على البيانو",
    labelsChords: "التآلفات",
    codingPitch: "حسب النغمة",
    codingFinger: "حسب الإصبع",
    sheetLayout: "التخطيط",
    sheetNotation: "طريقة الكتابة",
    sheetCursor: "المؤشر والألوان",
  },
  settings: { ...playerSettingsPlay, ...playerSettingsLook },
  range: {
    label: "عدد المفاتيح",
    keys: (count) => {
      const n = isolate(formatNumber("ar", count));
      return plural("ar", count, {
        zero: "لا مفاتيح",
        one: "مفتاح واحد",
        two: "مفتاحان",
        few: `${n} مفاتيح`,
        many: `${n} مفتاحًا`,
        other: `${n} مفتاح`,
      });
    },
    custom: "مخصص",
    summary: (keys, first, last) => `${isolate(keys)}، من ${isolate(first)} إلى ${isolate(last)}`,
    octaveDown: "− أوكتاف",
    octaveDownName: "أوكتاف إلى الأسفل",
    octaveUp: "أوكتاف +",
    octaveUpName: "أوكتاف إلى الأعلى",
  },
  key: (tonic, mode) => `${isolate(solfege(tonic))} ${{ major: "الكبير", minor: "الصغير" }[mode] ?? isolate(mode)}`,
};
