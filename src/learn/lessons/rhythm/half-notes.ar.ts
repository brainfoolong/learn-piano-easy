/** *Half notes* in Arabic. */
import type { Translation } from "../../../i18n/translation";
import type { HalfNotesTexts } from "./half-notes.en";

export const halfNotesAr: Translation<HalfNotesTexts> = {
  title: "النغمة البيضاء",
  steps: {
    "quarters-then-halves-demo": {
      text: "شاهد واستمع. أولًا 4 نغمات قصيرة، واحدة مع كل نبضة. ثم تدوم كل نغمة ضعف ذلك.",
    },
    "what-a-half-note-is": {
      text: "تدوم البيضاء نبضتين. تُعزف على النبضة الأولى، ويبقى مفتاحها مضغوطًا طوال النبضة الثانية. مع كل بيضاء، عدّ «1، 2».",
    },
    "half-beats-quiz": {
      text: "كم نبضة تدوم البيضاء؟",
      answers: ["نبضة واحدة", "نبضتين", "4 نبضات"],
    },
    "play-and-hold": {
      text: "ضع يدك اليمنى في وضعية دو. اعزف دو، ري، مي، ري، دو، وأبق كل مفتاح مضغوطًا أثناء عدّ «1، 2». تنتظر الخطوة كل نغمة، فلا داعي للعجلة.",
    },
    "count-one-two": {
      text: "اضغط أي مفتاح مع كل نقرة. عدّ «1، 2، 1، 2» أثناء الضغط. كل «1، 2» هي مدة بيضاء واحدة.",
    },
    "which-is-longer-quiz": {
      text: "أي نغمة تدوم أطول؟",
      answers: ["السوداء", "البيضاء"],
    },
    "halves-in-four-quiz": {
      text: "كم بيضاء تملأ 4 نبضات؟",
      answers: ["واحدة", "اثنتان", "4"],
    },
    recap: {
      text: "أحسنت. تعرفت الآن على البيضاء.",
      points: ["تدوم البيضاء نبضتين.", "تُعزف، ثم يبقى مفتاحها مضغوطًا طوال النبضة التالية.", "تملأ بيضاوان 4 نبضات."],
    },
  },
};
