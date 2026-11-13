/** *Phrases* in Chinese. */
import type { Translation } from "../../../i18n/translation";
import type { PhrasesTexts } from "./phrases.en";

export const phrasesZh: Translation<PhrasesTexts> = {
  title: "乐句",
  steps: {
    "phrase-demo": {
      text: "听两段短短的旋律，一段接一段。第一段好像在问什么，第二段在回答它。听一听它们之间那一小口气。",
    },
    "musical-sentences": {
      text: "音乐像你说话一样，也是一句一句的。音乐里的一句话叫作乐句。它常常有四个小节长。",
    },
    "what-is-a-phrase": {
      text: "什么是乐句？",
      answers: ["一个很响的音", "音乐里的一句话，常常有四个小节长", "分解弹奏的和弦", "表示弹快的记号"],
    },
    "the-long-slur": {
      text: "短的圆滑线把几个音连奏起来。跨过好几个小节的长圆滑线标出整个乐句。把它的音弹成一条圆滑的线。",
    },
    "slur-shows": {
      text: "一条长圆滑线跨过四个小节。它表示什么？",
      answers: ["一个乐句，弹成一条圆滑的线", "四个很响的音", "每个音之后抬起手", "一直踩住踏板"],
    },
    "play-question": {
      text: "右手放在 C 手位，弹第一个乐句：C-D-E-F、G、E、F-E-D-E，最后落在 D 上。弹得圆滑一些。",
    },
    breathe: {
      text: "乐句结束时，把手稍微抬起，就像歌手换一口气。然后开始下一个乐句。",
    },
    "question-and-answer": {
      text: "弹第一个乐句，在最后的 D 之后抬起手。然后弹第二个乐句：C-D-E-F、G、E、F-E-D-D，最后落在 C 上。",
    },
    "open-and-home": {
      text: "第一个乐句结束在 D 上，所以听起来没有结束，像一个问题。第二个乐句结束在 C 上，C 大调就停在这个音上，所以像一个回答。",
    },
    "which-ends-answer": {
      text: "在 C 大调里，最后落在哪个音上，乐句听起来才像回答一样结束了？",
    },
    "rise-and-fall-demo": {
      text: "听一个乐句。它轻轻地开始，一路渐强到 G，快结束时又渐渐变弱。",
    },
    "where-loudest": {
      text: "一个乐句常常在哪里最响？",
      answers: ["第一个音", "最后一个音", "中间附近或最高的音", "哪里都不是，一直一样"],
    },
    "shape-both-phrases": {
      text: "用右手从中央 C 开始弹两个乐句，中间换一口气。先弹 C D E F G、E F E D、E D，再弹 C D E F G、E F E D、D C。这里只检查音，所以让你的耳朵来塑造每个乐句：往 G 走时渐强，往结尾走时渐弱。",
    },
    "when-to-breathe": {
      text: "什么时候抬手换气？",
      answers: ["每个音之后", "两个乐句之间", "乐句中间", "从不"],
    },
    recap: {
      text: "真棒！现在你会一句一句地弹音乐了。",
      points: [
        "乐句是音乐里的一句话，常常有四个小节长。",
        "长圆滑线标出一个乐句。把它弹成一条圆滑的线。",
        "在两个乐句之间抬起手换一口气。",
        "乐句常常有问有答，先渐强，再渐弱。",
      ],
    },
  },
};
