/** *Black key groups* in Chinese. */
import type { Translation } from "../../../i18n/translation";
import type { BlackKeyGroupsTexts } from "./black-key-groups.en";

export const blackKeyGroupsZh: Translation<BlackKeyGroupsTexts> = {
  title: "黑键的分组",
  steps: {
    "see-the-groups": {
      text: "看看黑键。它们是一组一组的：先是两个一组，再是三个一组。这个规律在整架钢琴上不断重复。",
    },
    "smaller-group-quiz": {
      text: "小的那组有几个黑键？",
      answers: ["一个", "两个", "三个", "四个"],
    },
    "two-left": {
      text: "找到一组两个黑键。按下它左边的那个。",
    },
    "two-right": {
      text: "现在按两个黑键那一组中右边的那个。",
    },
    "group-of-three": {
      text: "每组两个黑键的旁边，都有一组三个黑键。这一组稍宽一些，所以你一眼就能找到。",
    },
    "three-left": {
      text: "找到一组三个黑键。按下它左边的那个。",
    },
    "three-middle": {
      text: "现在按三个黑键那一组中间的那个。",
    },
    "all-five": {
      text: "从左到右，先把一组两个黑键都弹一遍，再把它旁边那组三个黑键都弹一遍。",
    },
    "find-your-way": {
      text: "白键看起来都一样。什么能帮你在钢琴上找到位置？",
      answers: ["白键的颜色", "两个一组和三个一组的黑键", "每个琴键的大小"],
    },
    "three-right": {
      text: "最后再找一次：按三个黑键那一组中右边的那个。",
    },
    recap: {
      text: "做得好。你能靠黑键找到位置了。",
      points: ["黑键分成两个一组和三个一组。", "这两种分组在整架钢琴上轮流出现。", "黑键的分组让你知道自己在键盘上的哪个位置。"],
    },
  },
};
