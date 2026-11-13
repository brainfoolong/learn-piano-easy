/** *What a chord is* in Chinese. */
import type { Translation } from "../../../i18n/translation";
import type { WhatAChordIsTexts } from "./what-a-chord-is.en";

export const whatAChordIsZh: Translation<WhatAChordIsTexts> = {
  title: "什么是和弦",
  steps: {
    "chord-demo": {
      text: "听一听 C、E、G 一个接一个地响起。再听三个音同时响起。它们融合成一个饱满的声音。",
    },
    "several-keys": {
      text: "同时按下几个琴键，就构成一个和弦。你已经弹过一个了：左手的空五度。现在你来搭更多的和弦。",
    },
    "a-third": {
      text: "同时按 C 和 E。它们相隔三度，所以中间隔着一个白键。用 1 指和 3 指来弹。",
    },
    "thirds-up": {
      text: "轮到你了。把右手拇指放在中央 C 上，同时弹 C 和 E。然后把手往上移到 D 和 F，再移到 E 和 G。",
    },
    "skipped-key": {
      text: "看白键上的一个三度。它的两个琴键之间隔着几个白键？",
      answers: ["没有", "一个", "两个"],
    },
    "thirds-and-fifths": {
      text: "五度跨越五个白键，比如 C 和 G。用拇指和 5 指来弹。三度听起来甜美，五度听起来空旷。",
    },
    "third-then-fifth": {
      text: "拇指留在 C 上。先弹三度 C 和 E，再弹五度 C 和 G。两个都弹两遍。",
    },
    "stack-thirds": {
      text: "现在把一个三度叠在另一个三度上。C 和 E 是一个三度，E 和 G 是下一个三度。C、E、G 合在一起，就是一个三和弦。",
    },
    "triad-demo": {
      text: "先听三度 C 和 E。然后 G 加在上面，三和弦听起来就饱满了。",
    },
    "first-triad": {
      text: "用 1、3、5 指同时弹 C、E、G。三个琴键一起按下，把这个三和弦弹两遍。",
    },
    "which-is-a-triad": {
      text: "三和弦由两个三度叠成。从 D 开始的三和弦是哪三个琴键？",
      answers: ["D、E、F", "D、G、A", "D、F、A"],
    },
    "triads-up": {
      text: "右手保持这个手型。从中央 C 弹 C、E、G，然后往上移到 D、F、A 和 E、G、B，全都在白键上。最后弹 C、E、G 结束。",
    },
    recap: {
      text: "做得好。你弹出了自己的第一批和弦。",
      points: [
        "和弦就是同时按下的几个琴键。",
        "三度隔开一个白键，用 1 指和 3 指来弹。",
        "两个三度叠在一起就是三和弦，比如 C、E、G。",
        "右手用 1、3、5 指弹三和弦。",
      ],
    },
  },
};
