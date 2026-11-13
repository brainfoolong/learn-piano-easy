/** *F major* in Chinese. */
import type { Translation } from "../../../i18n/translation";
import type { FMajorTexts } from "./f-major.en";

export const fMajorZh: Translation<FMajorTexts> = {
  title: "F 大调",
  steps: {
    "f-major-sound": {
      text: "听一条新的音阶。它从 F 开始，也在 F 结束。你能听出里面有一个黑键吗？",
    },
    "pattern-on-f": {
      text: "从 F 开始套用音阶的规律：全、全、半、全、全、全、半。F 到 G 是一个全音，G 到 A 也是。",
    },
    "after-a": {
      text: "接下来要从 A 往上走一个半音。那是哪个琴键？",
    },
    "find-b-flat": {
      text: "找到降 B。它是紧挨在 B 左边的黑键。",
    },
    "f-fingering": {
      text: "把右手拇指放在 F 上。用 1、2、3、4 指弹 F、G、A 和降 B。然后拇指穿过去弹 C，再接着用 1、2、3、4 指往上弹。",
    },
    "where-thumb-under": {
      text: "在 F 大调里，弹完哪个琴键后拇指要穿过去？",
    },
    "f-scale-up": {
      text: "轮到你了。往上弹 F 大调音阶，从中央 C 上面的 F 弹到下一个 F。别忘了降 B。",
    },
    "f-scale-down": {
      text: "现在往下弹。弹完 C 后，把 4 指跨过拇指弹降 B。",
    },
    "tune-in-f": {
      text: "这是一段 F 大调的短旋律。左手在下面按住 F 和 C 组成的五度。",
    },
    "tune-and-fifth": {
      text: "左手弹低音区的五度：中央 C 下面的 C，和它下面的 F。右手从中央 C 上面的 F 开始。每小节的第一个音都和这个五度一起按下。",
    },
    recap: {
      text: "做得好！现在你会弹 F 大调了。",
      points: [
        "从 F 开始的音阶规律需要一个黑键：降 B。",
        "右手用 1、2、3、4 指，拇指穿过去弹 C，再用 1、2、3、4 指。",
        "往下弹时，4 指跨过拇指弹降 B。",
      ],
    },
  },
};
