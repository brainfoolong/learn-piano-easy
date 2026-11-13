/** *Quarter notes* in Arabic. */
import type { Translation } from "../../../i18n/translation";
import type { QuarterNotesTexts } from "./quarter-notes.en";

export const quarterNotesAr: Translation<QuarterNotesTexts> = {
  title: "النغمة السوداء",
  steps: {
    "quarter-demo": {
      text: "شاهد واستمع. تُعزف دو الوسطى مرة مع كل نبضة، وكل نغمة بطول النغمة التي تليها.",
    },
    "what-a-quarter-note-is": {
      text: "كل نغمة سمعتها كانت سوداء. تدوم السوداء نبضة واحدة. لذلك تُعزف نغمة واحدة مع كل نبضة.",
    },
    "quarter-beats-quiz": {
      text: "كم تدوم السوداء؟",
      answers: ["نبضة واحدة", "نبضتين", "4 نبضات"],
    },
    "quarter-taps": {
      text: "كل ضغطة تمثل سوداء واحدة. اضغط على «بدء»، واستمع إلى 4 نقرات، ثم اضغط أي مفتاح مرة واحدة مع كل نقرة.",
    },
    "phrase-demo": {
      text: "إليك بداية لحن مشهور. كل نغماته سوداء، واحدة مع كل نبضة.",
    },
    "quarter-phrase": {
      text: "ضع يدك اليمنى في وضعية دو. اعزف اللحن، وعدّ نبضة واحدة لكل نغمة.",
    },
    recap: {
      text: "أحسنت. تعرفت الآن على أول مدة من مدد النغمات.",
      points: ["تدوم السوداء نبضة واحدة.", "تُعزف سوداء واحدة مع كل نبضة.", "تتكون ألحان كثيرة في معظمها من السوداوات."],
    },
  },
};
