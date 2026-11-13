/** *Quarter notes* in Chinese. */
import type { Translation } from "../../../i18n/translation";
import type { QuarterNotesTexts } from "./quarter-notes.en";

export const quarterNotesZh: Translation<QuarterNotesTexts> = {
  title: "四分音符",
  steps: {
    "quarter-demo": {
      text: "看一看，听一听。中央 C 每拍响一次，每个音都一样长。",
    },
    "what-a-quarter-note-is": {
      text: "你听到的每个音都是四分音符。一个四分音符持续一拍。所以每一拍弹一个音。",
    },
    "quarter-beats-quiz": {
      text: "一个四分音符持续多久？",
      answers: ["一拍", "两拍", "四拍"],
    },
    "quarter-taps": {
      text: "每弹一下就是一个四分音符。点击“开始”，听四声滴答，然后每响一声，就弹一下任意一个琴键。",
    },
    "phrase-demo": {
      text: "这是一段著名旋律的开头。每个音都是四分音符，每拍一个。",
    },
    "quarter-phrase": {
      text: "把右手放在 C 手位上。弹这段旋律，每个音数一拍。",
    },
    recap: {
      text: "做得好！你已经认识第一种音符长度了。",
      points: ["一个四分音符持续一拍。", "每一拍弹一个四分音符。", "很多旋律主要由四分音符组成。"],
    },
  },
};
