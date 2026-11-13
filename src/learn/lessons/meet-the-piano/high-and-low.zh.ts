/** *High and low* in Chinese. */
import type { Translation } from "../../../i18n/translation";
import type { HighAndLowTexts } from "./high-and-low.en";

export const highAndLowZh: Translation<HighAndLowTexts> = {
  title: "高与低",
  steps: {
    "low-to-high": {
      text: "看一看，听一听。钢琴从左边往右边弹一串琴键。",
    },
    "left-is-low": {
      text: "你听到声音往上走了吗？越往左的琴键声音越低，越往右的琴键声音越高。",
    },
    "wide-listen": {
      text: "你会听到两个音。第二个音比第一个高、低，还是一样？",
    },
    "climb-up": {
      text: "现在轮到你往上走。从左到右弹标出的琴键，听声音一路升高。",
    },
    "climb-down": {
      text: "再走下来。从右到左弹标出的琴键，听声音一路降低。",
    },
    "low-then-high": {
      text: "大跳：从低到高，弹这三个标出的琴键。",
    },
    "which-way": {
      text: "你的手在琴键上往右移。声音会怎样？",
      answers: ["变低", "变高", "不变"],
    },
    "close-listen": {
      text: "仔细听：这两个音挨得很近，或者是同一个音。第二个音是高、低，还是一样？",
    },
    recap: {
      text: "做得好。你能听出、也能弹出高和低了。",
      points: ["越往左的琴键，声音越低。", "越往右的琴键，声音越高。", "两个音也可能听起来一样。"],
    },
  },
};
