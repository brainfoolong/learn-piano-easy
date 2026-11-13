/** The Arabic catalog. It is a translation of the English one, so a text it leaves out shows in English. */
import { formatNumber, isolate, plural } from "../format";
import type { Translation } from "../translation";
import { dataPage } from "./data.ar";
import { en, type Messages } from "./en";
import { learnBadges } from "./learn-badges.ar";
import { learnLesson } from "./learn-lesson.ar";
import { learnMap } from "./learn-map.ar";
import { learnProfile } from "./learn-profile.ar";
import { learnSetup } from "./learn-setup.ar";
import { playerBar } from "./player-bar.ar";
import { playerInput } from "./player-input.ar";
import { playerLibrary } from "./player-library.ar";
import { playerSettings } from "./player-settings.ar";
import { playerShell } from "./player-shell.ar";
import { playModes } from "./play-modes.ar";
import { sponsorPage } from "./sponsor.ar";

const SITE_NAME = isolate(en.siteName);

/** `n` as the locale writes it, isolated so it keeps its place in a right-to-left line. */
const num = (n: number) => isolate(formatNumber("ar", n));

export const ar: Translation<Messages> = {
  siteName: en.siteName,
  noscript: `يحتاج ${SITE_NAME} إلى \u2068JavaScript\u2069 ليعمل.`,
  pages: {
    home: {
      title: en.siteName,
      description: "تعلم البيانو بالعزف. دورة موجهة وبيانو \u20683D\u2069 ولوحة مفاتيح \u2068MIDI\u2069. مجاني ومفتوح المصدر ويعمل دون اتصال.",
    },
    play: {
      title: "العزف الحر",
      description: "افتح ملف \u2068MIDI\u2069، وشاهد نغماته تطير نحو بيانو \u20683D\u2069، واعزف معها على لوحة مفاتيح \u2068MIDI\u2069.",
    },
    modes: {
      title: "أوضاع العزف",
      description: "طرق جاهزة للعزف: لعبة بالنقاط والشرارات، أو أغنية تنتظرك وتسمي لك كل نغمة.",
    },
    learn: {
      title: "تعلم البيانو",
      description: "دورة بيانو موجهة، مبنية مثل لعبة، خطوة صغيرة في كل مرة.",
    },
    profile: {
      title: "تقدمك",
      description: "مستواك وشاراتك ومقدار ما عزفته.",
    },
    about: {
      title: "حول الموقع",
      description: "ما هو \u2068Learn Piano Easy\u2069، وتراخيص كل ما يأتي معه.",
    },
    data: {
      title: "بياناتك",
      description: "احفظ كل ما لديك في هذا المتصفح في ملف واحد، واستعده على أي جهاز.",
    },
    sponsor: {
      title: "الرعاية",
      description: "\u2068Learn Piano Easy\u2069 مجاني، ويصنعه شخص واحد. هنا طرق مساعدته على النمو.",
    },
    imprint: {
      title: "البيانات القانونية",
      description: "من يدير \u2068Learn Piano Easy\u2069، مع العنوان ووسيلة التواصل.",
    },
    privacy: {
      title: "سياسة الخصوصية",
      description: "ما يحفظه \u2068Learn Piano Easy\u2069 على جهازك، وما يحصيه، وكيف يُوقف هذا الإحصاء.",
    },
    design: {
      title: "نظام التصميم",
      description: "كل مكون في الموقع، بكل حالاته.",
    },
    lesson: {
      title: "درس",
      description: "درس قصير من «تعلم البيانو»، خطوة في كل مرة.",
    },
  },
  lessonPage: {
    description: (title: string, world: string, intro: string) =>
      `${isolate(title)}. درس بيانو مجاني من عالم «${isolate(world)}». ${isolate(intro)}`,
  },
  topBar: {
    home: `${SITE_NAME}، الصفحة الرئيسية`,
    nav: "الرئيسية",
    learn: "تعلم البيانو",
    play: "العزف الحر",
    modes: "أوضاع العزف",
    menu: "القائمة",
    language: "اللغة",
    theme: "المظهر",
    themeSystem: "مثل النظام",
    themeLight: "فاتح",
    themeDark: "داكن",
  },
  landing: {
    hero: {
      eyebrow: "مجاني ومفتوح المصدر",
      lead: "شاهد النغمات تسقط على المفاتيح، ثم اعزفها بنفسك، أغنية بعد أغنية.",
      start: "بدء التعلم",
      play: "العزف الحر",
      proofs: ["بلا حساب", "يعمل دون اتصال", "بلا إعلانات"],
      mascot: "قرد بفرو بلون العسل يعزف على بيانو قائم في غرفة مشمسة، ومعه تتعلم البيانو",
      greeting: "أهلًا! أنا هنا لأعلمك العزف على البيانو. هل نبدأ؟",
      demo: {
        eyebrow: "جربه هنا",
        heading: "النغمات تسقط، والعزف عليك",
        text: "هكذا تبدو كل أغنية. تسقط كل نغمة على مفتاحها، ويُضغط المفتاح لحظة وصولها.",
      },
      piano: "المشغل، ونغمات \u2068Twinkle, Twinkle, Little Star\u2069 تسقط على مفاتيحه",
      hint: "حين يبدأ العزف، اضغط مفاتيحه لتشارك فيه.",
      playSong: "تشغيل",
      stopSong: "إيقاف",
    },
    twoWays: {
      eyebrow: "طريقتان للعزف",
      heading: "تعلم خطوة بخطوة، أو اعزف فحسب",
      lead: "اختر ما يناسب يومك. يمكنك التبديل في أي وقت.",
      learn: {
        tag: "الدورة الموجهة",
        title: "تعلم البيانو",
        text: "دورة موجهة من خطوات صغيرة. كل خطوة تعلم مهارة، وأغنية تضعها موضع التطبيق.",
        action: "بدء التعلم",
        picture: "خريطة الدورة، وقد اكتمل درسها الأول وانفتح الدرس التالي",
      },
      play: {
        tag: "أي أغنية",
        title: "العزف الحر",
        text: "افتح أي أغنية، وشاهد نغماتها تطير نحو بيانو \u20683D\u2069، واعزف معها.",
        action: "العزف الحر",
        picture: "بيانو \u20683D\u2069، والنغمات تسقط على مفاتيحه",
      },
    },
    howItWorks: {
      eyebrow: "كيف يجري التعلم",
      heading: "أربع خطوات، مرة بعد مرة",
      lead: "كل درس يتبع الحلقة القصيرة نفسها، فتعرف دائمًا ما يأتي بعد ذلك.",
      steps: [
        { title: "تعلّم مهارة", text: "درس قصير يعرض شيئًا جديدًا واحدًا، مثل نغمة أو إيقاع أو وضعية يد." },
        { title: "تمرين عليها", text: "اعزفها على آلتك. ينتظرك البيانو ويضع علامة على كل نغمة صحيحة." },
        { title: "عزف أغنية حقيقية", text: "استعمل المهارة في أغنية من المكتبة، بمستوى يناسبك." },
        { title: "كسب الشارات", text: "كل درس يمنحك \u2068XP\u2069، وكل عالم تكمله يمنحك شارة." },
      ],
    },
    rarities: {
      eyebrow: "لحن واحد، أربعة مستويات",
      heading: "كل أغنية تكبر معك",
      lead: "لكل أغنية من أغانينا أربع نسخ. انتقل بينها وشاهد \u2068Ode to Joy\u2069 يكبر.",
      control: "النسخة",
      piano: "بيانو يعزف \u2068Ode to Joy\u2069",
      names: { common: "مبتدئ", rare: "سهل", epic: "متوسط", legendary: "صعب" },
      taglines: {
        common: "أيامك الأولى. وضعية يد واحدة، ونغمات بطيئة، وباص يصبر عليك.",
        rare: "أسابيعك الأولى. ذوات السن، وتآلفات بسيطة، وباص يتحرك.",
        epic: "شهورك الأولى. تآلفات مفككة، وإبهام يمر من تحت.",
        legendary: "بعد عام تقريبًا. اليدان مشغولتان، سريعتان، ولكل منهما طريقها.",
      },
    },
    devices: {
      eyebrow: "اعزف على ما لديك",
      heading: "لا بيانو عندك؟ ابدأ رغم ذلك",
      lead: "كل واحد من هذه يعزف النغمات. لوحة المفاتيح الموسيقية الحقيقية أفضل إحساسًا، والبقية تتيح البدء اليوم.",
      ways: [
        { title: "لوحة مفاتيح \u2068MIDI\u2069", text: "اربطها بمنفذ \u2068USB\u2069، واسمح باستخدام \u2068MIDI\u2069 مرة واحدة. بعدها يجدها الموقع تلقائيًا." },
        { title: "شاشة اللمس", text: "اضغط المفاتيح على الشاشة، بعدد ما تشاء من الأصابع." },
        { title: "لوحة مفاتيح الحاسوب", text: "أزرار الحروف والأرقام تعزف أوكتافين، ويمكنك نقل أي نغمة إلى زر آخر." },
      ],
      piano: "بيانو صغير للتجربة",
      start: "تحميل البيانو الصغير للعزف عليه",
      hint: "المس مفتاحًا لتسمعه.",
    },
    free: {
      eyebrow: "مجاني، وملكك",
      heading: "لا دفع، ولا تسجيل",
      lead: "هذا الموقع هدية من شخص يحب البيانو. وسيبقى مجانيًا.",
      promises: [
        { title: "مجاني، بلا حساب", text: "افتح الموقع واعزف. لا تسجيل، ولا شيء للشراء." },
        { title: "مفتوح المصدر", text: "كل سطر من الشيفرة متاح للجميع برخصة \u2068MIT\u2069. اقرأه، وغيّره، وشاركه." },
        { title: "يعمل دون اتصال", text: "بعد التحميل الأول، يعمل الموقع دون شبكة. والأغاني التي فتحتها تعمل دون اتصال أيضًا." },
        { title: "بلا إعلانات ولا تتبع", text: "لا يغادر جهازك شيء مما تعزفه. نحصي زيارات الصفحات فقط، دون ملفات تعريف الارتباط، ولا نبيع شيئًا." },
      ],
    },
    questions: {
      eyebrow: "أسئلة",
      heading: "ما يسأل عنه الناس أولًا",
      items: [
        {
          question: "هل أحتاج إلى بيانو؟",
          answer: "لا. لوحة مفاتيح \u2068MIDI\u2069 هي الأفضل، لكن شاشة اللمس أو لوحة مفاتيح الحاسوب تعزف كل نغمة أيضًا.",
        },
        {
          question: "ما المتصفحات التي يعمل عليها؟",
          answer: "يعمل على أي متصفح حديث. تحتاج لوحة مفاتيح \u2068MIDI\u2069 إلى \u2068Web MIDI\u2069، وهي متوفرة في \u2068Chrome\u2069 و\u2068Edge\u2069 و\u2068Firefox\u2069، وغائبة عن \u2068Safari\u2069.",
        },
        {
          question: "هل أحتاج إلى حساب؟",
          answer: "لا. لا شيء للتسجيل فيه، وتبقى إعداداتك في هذا المتصفح.",
        },
        {
          question: "هل يعمل دون اتصال؟",
          answer: "نعم. افتح الموقع مرة واحدة وأنت متصل، ثم يعمل دون اتصال بعدها. وتعمل الأغنية دون اتصال بعد فتحها مرة.",
        },
        {
          question: "هل أستطيع عزف أغانيّ الخاصة؟",
          answer: "نعم. افتح أي ملف \u2068MIDI\u2069 أو \u2068MusicXML\u2069 في «العزف الحر». يُقرأ الملف على جهازك ولا يُرفع أبدًا.",
        },
        {
          question: "ما الأغاني الموجودة في المكتبة؟",
          answer: "توزيعاتنا الخاصة لألحان معروفة، كل منها في أربع نسخ، وبعض المقطوعات من تأليفنا، ومقطوعات كلاسيكية من مجموعات مفتوحة.",
        },
        {
          question: "هل هو مجاني حقًا؟",
          answer: "نعم. إنه مفتوح المصدر برخصة \u2068MIT\u2069، بلا إعلانات ولا خطة مدفوعة.",
        },
      ],
    },
    lastCall: {
      heading: "نحن جاهزون متى شئت",
      lead: "اختر طريقك للبدء. يمكنك التبديل في أي وقت.",
    },
  },
  footer: {
    tagline: "تعلم البيانو بالعزف. مجاني ومفتوح المصدر ويعمل دون اتصال.",
    nav: "الموقع",
    explore: "استكشاف",
    about: "حول الموقع والتراخيص",
    legal: "قانوني",
    language: "هذه الصفحة باللغة",
    license: "مفتوح المصدر برخصة \u2068MIT\u2069.",
  },
  counts: {
    badges: (n: number) =>
      plural("ar", n, { zero: "لا شارات", one: "شارة واحدة", two: "شارتان", few: `${num(n)} شارات`, many: `${num(n)} شارة`, other: `${num(n)} شارة` }),
    minutesPlayed: (n: number) =>
      plural("ar", n, { zero: "لا دقائق عزف", one: "دقيقة عزف واحدة", two: "دقيقتا عزف", few: `${num(n)} دقائق عزف`, many: `${num(n)} دقيقة عزف`, other: `${num(n)} دقيقة عزف` }),
    xp: (n: number) => `${num(n)} \u2068XP\u2069`,
  },
  lesson: learnLesson,
  badges: learnBadges,
  map: learnMap,
  profile: learnProfile,
  setup: learnSetup,
  data: dataPage,
  sponsor: sponsorPage,
  playModes,
  player: { shell: playerShell, bar: playerBar, library: playerLibrary, input: playerInput, settings: playerSettings },
  ui: {
    pianoKeys: {
      noWebgl: "لا يستطيع هذا المتصفح رسم البيانو. يمكنك تشغيل تسريع العتاد في إعداداته، أو العزف على لوحة مفاتيح \u2068MIDI\u2069 أو لوحة مفاتيح الحاسوب.",
    },
  },
};
