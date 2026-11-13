/** *Counting to four* in Chinese. */
import type { Translation } from "../../../i18n/translation";
import type { CountingToFourTexts } from "./counting-to-four.en";

export const countingToFourZh: Translation<CountingToFourTexts> = {
  title: "数到四",
  steps: {
    "bars-demo": {
      text: "看一看，听一听。每组四拍都由一个低音 C 开头，另外三拍弹 G。",
    },
    "what-a-bar-is": {
      text: "拍组成小节，每个小节以一条小节线结束。这里每小节有四拍，数“1、2、3、4”。这就是 4/4 拍，第 1 拍最强。",
    },
    "beats-in-a-bar-quiz": {
      text: "4/4 拍的一个小节有几拍？",
      answers: ["三拍", "四拍", "八拍"],
    },
    "strongest-beat-quiz": {
      text: "一个小节里，哪一拍感觉最强？",
      answers: ["第 1 拍", "第 2 拍", "第 4 拍"],
    },
    "count-aloud-tap": {
      text: "点击“开始”，每响一声滴答，就弹一下任意一个琴键。边弹边大声数“1、2、3、4”。第 1 拍数得稍微响一点。",
    },
    "fill-a-bar-quiz": {
      text: "下面哪一组正好填满 4/4 拍的一个小节？",
      answers: ["两个二分音符", "三个四分音符", "一个全音符和一个四分音符"],
    },
    recap: {
      text: "做得好！你已经会数四拍的小节了。",
      points: ["拍组成小节，每个小节以一条小节线结束。", "4/4 拍要数“1、2、3、4”。", "第 1 拍是一个小节里最强的一拍。"],
    },
  },
};
