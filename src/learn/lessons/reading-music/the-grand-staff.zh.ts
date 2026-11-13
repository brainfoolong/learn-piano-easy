/** *The grand staff* in Chinese. */
import type { Translation } from "../../../i18n/translation";
import type { TheGrandStaffTexts } from "./the-grand-staff.en";

export const theGrandStaffZh: Translation<TheGrandStaffTexts> = {
  title: "大谱表",
  steps: {
    "climb-demo": {
      text: "听一听。琴声从低音 C 出发，经过中央 C，一直走到高音 C。这一路跨过了你认识的两个谱表。",
    },
    "two-staves": {
      text: "钢琴谱把两个谱表上下叠在一起，左边用一个大括号连起来。合在一起，就是大谱表。高音谱表在上面，低音谱表在下面。",
    },
    "which-hand-quiz": {
      text: "上面的高音谱表通常由哪只手来读？",
      answers: ["右手", "左手"],
    },
    "middle-c-between": {
      text: "中央 C 在两个谱表之间的一条短加线上。它同时属于两个谱表。哪个谱表都可以写它，弹的都是同一个琴键。",
    },
    "middle-c-quiz": {
      text: "中央 C 在大谱表的什么位置？",
      answers: ["在高音谱表最上面的线上", "在两个谱表之间的一条加线上", "在低音谱表最下面的线上"],
    },
    "treble-names": {
      text: "这是高音谱表。说出每个音的音名。",
    },
    "bass-names": {
      text: "现在是低音谱表。说出每个音的音名。",
    },
    "low-c-staff-quiz": {
      text: "你的左手弹低音 C。它在哪个谱表上？",
      answers: ["在高音谱表上", "在低音谱表上"],
    },
    "bass-play": {
      text: "读出低音谱表上的每个音，用左手把它弹出来。",
    },
    "treble-play": {
      text: "读出高音谱表上的每个音，用右手把它弹出来。",
    },
    recap: {
      text: "做得好！现在你能读大谱表了。",
      points: ["大谱表用大括号把一个高音谱表和一个低音谱表连在一起。", "右手主要读高音谱表，左手主要读低音谱表。", "中央 C 在它们之间的一条加线上，同时属于两个谱表。"],
    },
  },
};
