/** *Mary's first phrase* in Arabic. */
import type { Translation } from "../../../i18n/translation";
import type { MaryFirstPhraseTexts } from "./mary-first-phrase.en";

export const maryFirstPhraseAr: Translation<MaryFirstPhraseTexts> = {
  title: "الجملة الأولى من \u2068Mary Had a Little Lamb\u2069",
  steps: {
    "phrase-demo": {
      text: "استمع إلى النصف الأول من \u2068Mary Had a Little Lamb\u2069. يتكون من خطوات ونغمات مكررة وتخطٍ واحد، وكلها مألوفة لك من قبل.",
    },
    "first-note-quiz": {
      text: "بأي نغمة يبدأ اللحن؟",
      answers: ["دو", "مي", "صول"],
    },
    "the-fingers": {
      text: "أبق يدك اليمنى في وضعية دو، والإبهام على دو الوسطى. يستخدم اللحن 4 أصابع: 1 على دو، و2 على ري، و3 على مي، و5 على صول.",
    },
    "g-finger-quiz": {
      text: "أي إصبع يعزف صول؟",
      answers: ["الإصبع 2", "الإصبع 3", "الإصبع 5"],
    },
    "bars-one-two": {
      text: "اعزف البداية: مي، ري، دو، ري، ثم مي 3 مرات. تتحرك الأصابع هكذا: 3، 2، 1، 2، ثم 3، 3، 3.",
    },
    "bars-three-four": {
      text: "والآن الجزء التالي: ري 3 مرات، ثم مي، ثم صول مرتين. تتحرك الأصابع هكذا: 2، 2، 2، ثم 3، 5، 5.",
    },
    "whole-phrase": {
      text: "والآن اعزف الجملة كاملة دون توقف: مي ري دو ري مي مي مي، ري ري ري، مي صول صول.",
    },
    recap: {
      text: "أحسنت! عزفت النصف الأول من أغنية حقيقية.",
      points: [
        "الخطوات والنغمات المكررة وتخطٍ واحد تصنع هذا اللحن.",
        "يُتعلم اللحن على أجزاء صغيرة، ثم تُجمع الأجزاء معًا.",
        "أرقام الأصابع تدل اليد على طريقها.",
      ],
    },
  },
};
