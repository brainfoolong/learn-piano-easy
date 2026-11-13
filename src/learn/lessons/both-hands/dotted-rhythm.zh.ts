/** *The dotted rhythm* in Chinese. */
import type { Translation } from "../../../i18n/translation";
import type { DottedRhythmTexts } from "./dotted-rhythm.en";

export const dottedRhythmZh: Translation<DottedRhythmTexts> = {
  title: "附点节奏",
  steps: {
    "even-and-dotted-demo": {
      text: "听 E 和 D 用两种节奏弹。先是均匀的四分音符：E、E、D、D。然后一个长的 E 后面跟着一个短的 D，最后以一个长的 D 结束。",
    },
    "what-a-dot-does": {
      text: "那个长音后面带着一个小圆点。附点会加上这个音符本身时值的一半。所以附点音符的时值是原来的 1.5 倍。",
    },
    "dotted-half-demo": {
      text: "一个二分音符持续两拍，它的附点再加一拍。每个附点二分音符都数“1、2、3”。",
    },
    "dotted-half-quiz": {
      text: "一个附点二分音符持续几拍？",
      answers: ["两拍", "三拍", "四拍"],
    },
    "dotted-quarter": {
      text: "一个四分音符持续一拍，它的附点再加半拍。附点四分音符从“1”开始，一直持续到“2 哒”。“2 哒”上的一个八分音符补满剩下的时间。",
    },
    "dotted-quarter-quiz": {
      text: "一个附点四分音符持续几拍？",
      answers: ["一拍", "一拍半", "两拍"],
    },
    "partner-quiz": {
      text: "一个附点四分音符加上另一个音符，一起正好占两拍。这个音符是什么？",
      answers: ["四分音符", "八分音符", "二分音符"],
    },
    "ode-demo": {
      text: "这是《欢乐颂》的开头。它的最后一个小节有附点节奏：一个长的 E，一个短的 D，然后一个长的 D。",
    },
    "ode-phrase": {
      text: "把右手拇指放在中央 C 上，弹这段旋律。最后一个 E 稍微按长一点，然后快一点弹后面的 D。",
    },
    "fourth-demo": {
      text: "听终极挑战里的左手。它在 C 加 G 和 D 加 G 之间来回换。C 加 G 是你学过的五度，D 加 G 是四度：两端都算上，它跨四个白键。",
    },
    "fifth-and-fourth": {
      text: "轮到你了。把 5 指放在中央 C 下面的 C 上，拇指放在 G 上。同时弹 C 和 G，再用 4 指按 D，同时弹 D 和 G，然后两个都再弹一遍。",
    },
    recap: {
      text: "做得好！现在你会弹一首名曲的节奏了。",
      points: ["附点给音符加上它时值的一半。", "附点二分音符持续三拍。", "附点四分音符持续一拍半。", "附点四分音符后面常常跟着一个八分音符。"],
    },
  },
};
