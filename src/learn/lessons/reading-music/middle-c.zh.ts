/** *Middle C* in Chinese. */
import type { Translation } from "../../../i18n/translation";
import type { MiddleCTexts } from "./middle-c.en";

export const middleCZh: Translation<MiddleCTexts> = {
  title: "中央 C",
  steps: {
    "c-d-e-demo": {
      text: "看一看，听一听。琴声从 C 走到 D 和 E，再往下回到 C。你很快就会在谱表上读出这三个音。",
    },
    "the-ledger-line": {
      text: "中央 C 在高音谱表的下加一线上。它有一条自己的短线，从它的中间穿过。这条短线叫作加线。",
    },
    "where-quiz": {
      text: "中央 C 写在哪里？",
      answers: ["在谱表最下面的线上", "在谱表正下方的一条短加线上", "在谱表的中间"],
    },
    "the-c-you-know": {
      text: "这就是你已经认识的那个 C。它在钢琴中间附近，紧挨在两个黑键的左边。现在你也能读出它了。",
    },
    "press-middle-c": {
      text: "在钢琴上弹中央 C。",
    },
    "name-middle-c": {
      text: "说出谱表上每个音的音名。找一找那条短加线。",
    },
    "the-neighbours": {
      text: "中央 C 有两个相邻的音。D 挂在最下面那条线的下面。E 正好在最下面的线上。",
    },
    "neighbour-quiz": {
      text: "高音谱表最下面的线上是哪个音？",
    },
    "name-c-d-e": {
      text: "说出每个音的音名：C、D 还是 E。从加线开始往上数。",
    },
    "play-c-d-e": {
      text: "现在弹出你看到的每个音。每个音都是中央 C 或它的近邻。",
    },
    recap: {
      text: "做得好！现在你能读出中央 C 了。",
      points: ["中央 C 在高音谱表的下加一线上，这是一条短加线。", "它是钢琴中间附近的那个 C。", "D 挂在最下面那条线的下方，E 在这条线上。"],
    },
  },
};
