/** The sponsor page in Arabic. It is a translation of the English one, so a text it leaves out shows in English. */
import type { Translation } from "../translation";
import type { sponsorPage as en } from "./sponsor.en";

export const sponsorPage: Translation<typeof en> = {
  lead: "\u2068Learn Piano Easy\u2069 مجاني، وسيبقى مجانيًا. إن أضاف شيئًا من الموسيقى إلى يومك، فيمكنك مساعدته على النمو.",
  action: "الرعاية على \u2068GitHub\u2069",
  note: "كل مبلغ يساعد، مرة واحدة أو كل شهر.",
  promises: ["بلا إعلانات", "بلا حساب", "يعمل دون اتصال", "مفتوح المصدر، رخصة \u2068MIT\u2069"],
  picture: "قلب كبير تحوم حوله نغمتان موسيقيتان",
  who: {
    heading: "من يصنعه",
    text: [
      "يبني \u2068Learn Piano Easy\u2069 شخص واحد في وقت فراغه، بين العمل والحياة وتمرين السلالم.",
      "مراقبة الجودة قطة تمشي على المفاتيح من حين لآخر.",
    ],
  },
  spend: {
    heading: "أين يذهب دعمك",
    items: [
      { title: "الوقت", text: "أمسيات لدروس جديدة وأغانٍ جديدة وأخطاء برمجية أقل." },
      { title: "اسم النطاق", text: "ليحتفظ الموقع بعنوانه، ويبقى الوصول إليه سهلًا." },
      { title: "القهوة", text: "تتحول إلى برمجة بإيقاع ثابت يقارب 120 نبضة في الدقيقة." },
    ],
  },
  help: {
    heading: "طرق أخرى للمساعدة",
    lead: "المال طريقة واحدة للمساعدة. وهذه لا تقل عنه قيمة:",
    star: { text: "امنح المشروع نجمة على \u2068GitHub\u2069، ليجده متعلمون آخرون.", action: "نجمة على \u2068GitHub\u2069" },
    bug: { text: "أبلغ عن خطأ حين يبدو صوت شيء ما غير صحيح.", action: "الإبلاغ عن خطأ" },
    friend: "أخبر به من يحلم منذ زمن بتعلم البيانو.",
  },
  thanks: "شكرًا على العزف. بفضلك يوجد هذا الموقع.",
};
