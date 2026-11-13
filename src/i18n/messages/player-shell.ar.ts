/** The player's shell in Arabic. A text it leaves out shows in English. */
import { formatNumber, isolate, plural } from "../format";
import type { Translation } from "../translation";
import type { playerShell as en } from "./player-shell.en";

/** `n` as the locale writes it, isolated, so it keeps its place in a right-to-left line. */
const num = (n: number, options?: Intl.NumberFormatOptions) => isolate(formatNumber("ar", n, options));
/** `n` seconds with two decimals and no digit grouping, isolated, such as `12.50`. */
const seconds = (n: number) => num(n, { minimumFractionDigits: 2, maximumFractionDigits: 2, useGrouping: false });
/** `n` with one decimal and no digit grouping, such as `12.5`. */
const tenths = (n: number) => formatNumber("ar", n, { minimumFractionDigits: 1, maximumFractionDigits: 1, useGrouping: false });
/** `n` files as the subject of a sentence or a list item: `ملفان`, `11 ملفًا`. */
const files = (n: number) =>
  plural("ar", n, { zero: "لا ملفات", one: "ملف واحد", two: "ملفان", few: `${num(n)} ملفات`, many: `${num(n)} ملفًا`, other: `${num(n)} ملف` });
/** `n` files after a noun or a preposition, in the genitive: `ملفين`. */
const filesOf = (n: number) =>
  plural("ar", n, { zero: "أي ملف", one: "ملف واحد", two: "ملفين", few: `${num(n)} ملفات`, many: `${num(n)} ملفًا`, other: `${num(n)} ملف` });

export const playerShell: Translation<typeof en> = {
  dialog: {
    close: "إغلاق",
    hotkeys: "اختصارات لوحة المفاتيح",
    keyBindings: "أزرار لوحة المفاتيح",
    pdf: "حفظ بصيغة ⁨PDF⁩",
    offlineFiles: "الملفات دون اتصال",
    tracks: "المسارات",
    songs: "الأغاني",
    guide: (title) => `دليل التمرين: ${isolate(title)}`,
    about: "حول ⁨Learn Piano Easy⁩",
  },
  toast: {
    dismiss: "إغلاق",
  },
  topbar: {
    songs: "الأغاني",
    tracks: "المسارات",
    guide: "الدليل",
    settings: "الإعدادات",
    about: "حول",
    openSong: "الأغنية المفتوحة",
    demoSong: "أغنية العرض",
    songFallback: "أغنية",
  },
  songs: {
    noneFound: "لم يُعثر على أي ملف أغنية.",
    wrongKind: "يمكن إضافة ملفات ⁨MIDI⁩ و⁨MusicXML⁩ فقط.",
    added: (n) =>
      `${plural("ar", n, {
        zero: "لم تُضف أي أغنية",
        one: "أُضيفت أغنية واحدة",
        two: "أُضيفت أغنيتان",
        few: `أُضيفت ${isolate(formatNumber("ar", n))} أغانٍ`,
        many: `أُضيفت ${isolate(formatNumber("ar", n))} أغنيةً`,
        other: `أُضيفت ${isolate(formatNumber("ar", n))} أغنية`,
      })} إلى «أغانيك».`,
    notKept: (reason) => `تعذّر حفظ الأغاني: ${isolate(reason)}`,
    soundsFailed: "تعذّر تحميل أصوات البيانو، لذا تُشغل الأغاني دون صوت.",
  },
  guide: {
    step: (n, summary) => `الخطوة ${isolate(formatNumber("ar", n))}: ${isolate(summary)}.`,
    barLoops: (bar) => `تتكرر المازورة ${isolate(formatNumber("ar", bar))}.`,
    topBeaten: (title) => `اجتزت ${isolate(title)}، آخر خطوة في هذه الأغنية. أحسنت!`,
    beaten: (title, next) => `اجتزت ${isolate(title)}! وبعده: ${isolate(next)}.`,
    playNext: (next) => `عزف ${isolate(next)}`,
  },
  lesson: {
    label: "الدرس",
    target: (percent) => `الهدف: إصابة ${isolate(formatNumber("ar", percent))}% من النغمات في محاولة محتسبة.`,
    back: "العودة إلى الدرس",
    missing: "أغنية هذا الدرس غير موجودة في مكتبة الأغاني.",
  },
  finger: {
    label: "النغمة المحددة",
    setByYou: "من اختيارك",
    fromGuide: "من دليل التمرين",
    suggested: "مقترح",
    none: "بلا إصبع",
    finger: (finger, source) => `الإصبع ${isolate(formatNumber("ar", finger))}، ${isolate(source)}`,
    line: (note, said) =>
      `${isolate(note)}: ${isolate(said)}. اضغط رقمًا من 1 إلى 5 لتحديد الإصبع، و0 لمسحه، و⁨Esc⁩ للإنهاء.`,
  },
  backgroundTrack: {
    notAudio: (file) => `${isolate(file)} ليس ملفًا صوتيًا يستطيع هذا المتصفح تشغيله.`,
    playsAlong: (file) => `يُشغل ${isolate(file)} مع الأغنية.`,
  },
  about: {
    license: "الترخيص",
    notices: "إشعارات الأطراف الثالثة",
    packageLicense: (name) => `ترخيص ${isolate(name)}`,
    offline: "هذا النص غير متاح دون اتصال بعد.",
    intro:
      "⁨Learn Piano Easy⁩ تطبيق مجاني مفتوح المصدر لتعلم البيانو، وفيه دورة موجهة، ويمكنك أيضًا عزف ملفات ⁨MIDI⁩ لديك. يعمل دون اتصال في المتصفح.",
    build: (version) => `الإصدار ${isolate(version)}`,
  },
  cache: {
    groups: {
      app: { label: "التطبيق", description: "الصفحة وشيفرتها وقائمة الأغاني. يحتاجها التطبيق ليُفتح دون اتصال." },
      songs: { label: "الأغاني", description: "كل أغنية تأتي مع التطبيق، لتُفتح أي منها دون اتصال." },
      sounds: { label: "أصوات البيانو", description: "كل مجموعات الأصوات، ليعزف البيانو دون اتصال أيًا كانت المجموعة المختارة." },
    },
    bytes: (n) => `${num(n, { useGrouping: false })} بايت`,
    kilobytes: (n) => isolate(`${isolate(tenths(n))} KB`),
    megabytes: (n) => isolate(`${isolate(tenths(n))} MB`),
    groupsFailed: (n, labels) => `تعذّر حفظ ${filesOf(n)} من ${isolate(labels)} للاستخدام دون اتصال.`,
    updated: (labels) => `تم التحديث. تم حفظ ${isolate(labels)} مجددًا للاستخدام دون اتصال.`,
    unavailable: "لا يحفظ هذا المتصفح أي ملفات دون اتصال لهذه الصفحة.",
    reading: "جارٍ قراءة ما حُفظ…",
    unreadable: "تعذّرت قراءة قائمة الملفات المحفوظة دون اتصال. أعد تحميل الصفحة، ثم حاول مرة أخرى.",
    intro: "تعمل الملفات المحفوظة دون اتصال. ويمكن حفظ كل جزء أو إزالته وحده.",
    allSaved: "تم حفظه كاملًا",
    noneSaved: "لم يُحفظ بعد",
    someSaved: (count, total) => `حُفظ ${num(count)} من ${filesOf(total)}`,
    status: (size, total, state) => `${isolate(size)}، ${files(total)}، ${isolate(state)}.`,
    saving: (done, total) => `جارٍ حفظ ${num(done)} من ${filesOf(total)}…`,
    failed: (n) => `تعذّر حفظ ${filesOf(n)}.`,
    save: "حفظ",
    saveAgain: "إعادة الحفظ",
    remove: "إزالة",
    saveGroup: (label) => `حفظ ${isolate(label)}`,
    removeGroup: (label) => `إزالة ${isolate(label)}`,
    keep: "إبقاء الملفات محفوظة بعد كل تحديث",
  },
  update: {
    ready: "إصدار جديد جاهز.",
    reload: "إعادة التحميل",
  },
  scene: {
    piano: "البيانو",
    pianoRange: (range) => `البيانو، ${isolate(range)}`,
    startKeys: (keys) => `، مفاتيح البداية ${isolate(keys)}`,
    chord: (chord) => `، التآلف ${isolate(chord)}`,
  },
  demo: {
    /** One syllable per word: a word is never split, since a split would break its joined letters. */
    lyrics: [
      "أضواء تتساقط نحو المفاتيح",
      "اضغط كل مفتاح حين تصل",
      "ببطء في البداية ثم أسرع",
      "وستعرف يداك الطريق قريبًا",
    ],
    part: (n) => `الجزء ${isolate(formatNumber("ar", n))}`,
    leftHand: "اليد اليسرى",
    rightHand: "اليد اليمنى",
  },
  chords: {
    root: "الأصل",
    /** A chord tone, such as `♭3`, as a scale degree: `الدرجة ♭3`. */
    ordinal: (tone) => `الدرجة ${isolate(String(tone))}`,
  },
  overlays: {
    fps: "الإطارات في الثانية",
    fpsValue: (n) => isolate(`${isolate(formatNumber("ar", n, { useGrouping: false }))} FPS`),
    fpsNone: isolate("– FPS"),
    tempo: "السرعة",
    bpmValue: (n) => isolate(`${isolate(formatNumber("ar", n, { useGrouping: false }))} BPM`),
    track: (track, channel) => `المسار ${isolate(formatNumber("ar", track))}، القناة ${isolate(formatNumber("ar", channel))}`,
    velocity: (velocity) => `قوة الضغط ${isolate(formatNumber("ar", velocity))}`,
    timing: (start, length) => `يبدأ عند الثانية ${seconds(start)}، ومدته ${seconds(length)} ثانية`,
  },
  sheet: {
    label: "النوتة الموسيقية",
    empty: "لا يظهر أي مسار في النوتة الموسيقية. اختر مسارًا لإظهاره من «المسارات».",
  },
};
