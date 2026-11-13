/** The player's bar in Arabic. A text it leaves out shows in English. */
import { formatNumber, isolate } from "../format";
import type { Translation } from "../translation";
import type { playerBar as en } from "./player-bar.en";

export const playerBar: Translation<typeof en> = {
  actions: {
    play: "تشغيل أو إيقاف مؤقت",
    stop: "إيقاف والعودة إلى البداية",
    seekBack: "الرجوع 5 ثوانٍ",
    seekForward: "التقدم 5 ثوانٍ",
    toStart: "الانتقال إلى البداية",
    faster: "تسريع",
    slower: "إبطاء",
    transposeUp: "تصوير إلى الأعلى",
    transposeDown: "تصوير إلى الأسفل",
    loop: "تكرار الموازير المختارة، ثم الأغنية كاملة، ثم تعطيل التكرار",
    loopStart: "التكرار من هذه المازورة",
    loopEnd: "التكرار حتى هذه المازورة",
    zoomIn: "تكبير",
    zoomOut: "تصغير",
    fit: "عرض الأغنية كاملة",
    viewLeft: "تحريك العرض إلى اليسار",
    viewRight: "تحريك العرض إلى اليمين",
    fullscreen: "ملء الشاشة",
  },
  controls: {
    play: "تشغيل",
    pause: "إيقاف مؤقت",
    stop: "إيقاف",
    speed: "السرعة",
    speedPercent: (n: number) => isolate(`${formatNumber("ar", n)}%`),
    transpose: "تصوير",
    loop: "تكرار",
    repeatAll: "تكرار الكل",
    loopTitles: {
      off: "تكرار الموازير المحددة في الإعدادات",
      measures: "تكرار الأغنية كاملة بدلًا من ذلك",
      song: "إيقاف التكرار",
    },
    more: "أدوات أخرى",
    zoom: "التكبير",
    fit: "ملاءمة",
    view: "العرض",
    leaveFullScreen: "الخروج من ملء الشاشة",
    expert: "خبير",
    expertTitles: {
      off: "إظهار كل الأدوات",
      on: "إظهار الأدوات الرئيسية فقط",
    },
  },
  hotkeys: {
    modifiers: { Ctrl: "Ctrl", Alt: "Alt", Shift: "Shift", Meta: "Meta" },
    none: "لا شيء",
  },
  hotkeyDialog: {
    pressKey: "اضغط زرًا…",
    keyFor: (label: string) => `زر ${isolate(label)}`,
    clear: "مسح",
    clearTitle: (label: string) => `مسح زر ${isolate(label)}`,
    resetAll: "إعادة ضبط كل الأزرار",
    help: "اضغط على أحد الاختصارات، ثم اضغط الزر الذي تريده في لوحة المفاتيح. يغلق زر ⁨Esc⁩ هذه النافذة.",
    off: "اختصارات لوحة المفاتيح معطّلة في الإعدادات، لذا لا تعمل هذه الأزرار الآن.",
    open: "تغيير الاختصارات",
  },
  timeline: {
    position: "موضع الأغنية",
  },
};
