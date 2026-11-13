/** *The C major scale* in Chinese. */
import type { Translation } from "../../../i18n/translation";
import type { TheCMajorScaleTexts } from "./the-c-major-scale.en";

export const theCMajorScaleZh: Translation<TheCMajorScaleTexts> = {
  title: "C 大调音阶",
  steps: {
    "scale-demo": {
      text: "听八个音从中央 C 往上走到下一个 C。每个琴键都是白键。",
    },
    "what-a-scale-is": {
      text: "音阶就是一串一步一步往上走的音。C 大调音阶从 C 开始，到下一个 C 结束。",
    },
    "scale-pattern": {
      text: "它的每一步都有固定的规律：全、全、半、全、全、全、半。半音在 E 到 F 和 B 到 C。",
    },
    "first-half-step": {
      text: "C 大调音阶的第一个半音在哪里？",
      answers: ["从 C 到 D", "从 G 到 A", "从 E 到 F"],
    },
    "first-three": {
      text: "把右手拇指放在中央 C 上。用 1、2、3 指弹 C、D 和 E。",
    },
    "thumb-under": {
      text: "八个音，你的手却只有五根手指。弹完 E 后，把拇指从手下面穿过去，用它弹 F。",
    },
    "which-finger-on-f": {
      text: "你用 1、2、3 指弹 C、D 和 E。F 用哪根手指弹？",
      answers: ["4 指", "1 指，也就是拇指", "5 指"],
    },
    "tuck-to-f": {
      text: "再弹一遍 C、D 和 E。然后拇指穿过去弹 F。手腕保持放松、平稳。",
    },
    "last-five": {
      text: "现在你的拇指在 F 上。用 1、2、3、4、5 指弹 F、G、A、B 和 C。",
    },
    "scale-up": {
      text: "用右手往上弹 C 大调音阶，从中央 C 弹到下一个 C。先用 1、2、3 指，然后拇指穿过去，再用 1、2、3、4、5 指。",
    },
    "scale-down": {
      text: "现在用 5、4、3、2、1 指往下弹回来。弹完 F 后，3 指跨过拇指弹 E。",
    },
    recap: {
      text: "做得好！你弹了第一条音阶。",
      points: [
        "C 大调音阶是从 C 到 C 的八个白键。",
        "它的规律是全、全、半、全、全、全、半。",
        "往上弹时，拇指穿过去弹 F。",
        "往下弹时，3 指跨过拇指弹 E。",
      ],
    },
  },
};
