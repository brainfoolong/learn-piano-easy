/** *Minor triads* in Chinese. */
import type { Translation } from "../../../i18n/translation";
import type { MinorTriadsTexts } from "./minor-triads.en";

export const minorTriadsZh: Translation<MinorTriadsTexts> = {
  title: "小三和弦",
  steps: {
    "major-then-minor": {
      text: "听两个以 C 为根音的和弦。第一个是 C 大三和弦，听起来明亮。第二个是 C 小三和弦，听起来暗一些。",
    },
    "thirds-swap": {
      text: "在大三和弦里，下面的三度是大三度：四个半音。上面的是小三度。小三和弦把它们对调，所以先是小三度。",
    },
    "minor-third-size": {
      text: "大三度是四个半音。小三度是几个半音？",
      answers: ["四个", "三个", "两个"],
    },
    "lower-the-middle": {
      text: "所以只要一步，就能把大三和弦变成小三和弦：把中间的音降低半音。C、E、G 就变成 C、降 E、G。",
    },
    "find-e-flat": {
      text: "在琴键上找到降 E。它是紧挨在 E 左边的黑键。",
    },
    "c-major-to-minor": {
      text: "轮到你了。从中央 C 开始，用 1、3、5 指弹 C 大三和弦。然后把 3 指滑到降 E，弹出 C 小三和弦。两个和弦都弹两遍。",
    },
    "hear-the-middle-drop": {
      text: "从大三和弦到小三和弦，只有中间的音移动半音。第二个琴键比第一个高、低，还是一样？",
    },
    "white-key-minors": {
      text: "有三个小三和弦只用白键。A 小三和弦是 A、C、E，D 小三和弦是 D、F、A，E 小三和弦是 E、G、B。",
    },
    "a-minor": {
      text: "把右手拇指放在中央 C 下面的 A 上。把 A 小三和弦弹两遍：A、C、E 一起弹。",
    },
    "d-and-e-minor": {
      text: "现在移动一下手。从中央 C 上面的 D 弹 D 小三和弦，然后高一个白键弹 E 小三和弦，再弹一次 D 小三和弦。",
    },
    "g-major-to-minor": {
      text: "G 大三和弦是 G、B、D。要弹 G 小三和弦，你要把哪个音降低？",
    },
    "major-minor-pairs": {
      text: "先弹带升 F 的 D 大三和弦，再弹带 F 的 D 小三和弦。然后弹带 B 的 G 大三和弦，再弹带降 B 的 G 小三和弦。",
    },
    recap: {
      text: "做得好。现在你能弹大三和弦和小三和弦了。",
      points: [
        "小三和弦先叠一个小三度，再叠一个大三度。",
        "把大三和弦中间的音降低，它就变成小三和弦。",
        "大三和弦听起来明亮，小三和弦听起来暗一些。",
        "A、D、E 小三和弦只用白键。",
      ],
    },
  },
};
