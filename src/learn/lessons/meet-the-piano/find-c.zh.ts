/** *Find C* in Chinese. */
import type { Translation } from "../../../i18n/translation";
import type { FindCTexts } from "./find-c.en";

export const findCZh: Translation<FindCTexts> = {
  title: "找到 C",
  steps: {
    "hear-cs": {
      text: "看一看，听一听。钢琴从低到高弹四个琴键。它们的名字都一样：C。",
    },
    "c-rule": {
      text: "找一组两个黑键。紧挨在它左边的白键就是 C。每组两个黑键旁边都有一个 C。",
    },
    "find-any-c": {
      text: "在钢琴上任意找一个 C。先找两个黑键，再看它们左边的那个白键。",
    },
    "middle-c": {
      text: "靠近钢琴中间的 C 有自己的名字：中央 C。很多歌曲都从它开始，所以你会经常遇到它。",
    },
    "find-middle-c": {
      text: "现在按下中央 C，也就是离钢琴中间最近的 C。",
    },
    "find-high-c": {
      text: "找到中央 C 右边的下一个 C。它的声音更高。",
    },
    "find-low-c": {
      text: "现在找到紧挨在中央 C 左边的那个 C。它的声音更低。",
    },
    "cs-low-to-high": {
      text: "从中央 C 下面的 C 开始，从低到高弹四个 C。每次都往右找下一组两个黑键。",
    },
    "c-quiz": {
      text: "C 在哪里？",
      answers: ["紧挨在一组两个黑键的右边", "紧挨在一组两个黑键的左边", "紧挨在一组三个黑键的左边"],
    },
    recap: {
      text: "做得好。你能在钢琴上任何地方找到 C 了。",
      points: ["C 是紧挨在每组两个黑键左边的白键。", "钢琴从低到高，每个区域都有一个 C。", "靠近中间的 C 叫作中央 C。"],
    },
  },
};
