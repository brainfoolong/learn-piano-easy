/** *Half and whole steps* in Chinese. */
import type { Translation } from "../../../i18n/translation";
import type { HalfAndWholeStepsTexts } from "./half-and-whole-steps.en";

export const halfAndWholeStepsZh: Translation<HalfAndWholeStepsTexts> = {
  title: "半音和全音",
  steps: {
    "key-by-key": {
      text: "听钢琴从 C 一路往上走到 E。路上的每个琴键它都弹了，黑键也不例外。",
    },
    "half-step": {
      text: "刚才往上走的每一步都是一个半音。半音就是走到紧挨着的下一个琴键，不管是黑键还是白键，中间没有别的琴键。",
    },
    "half-step-from-c": {
      text: "轮到你了。弹中央 C，再弹紧挨在它右边的黑键，这两个音弹两遍。每一步都是一个半音。",
    },
    "no-black-key-between": {
      text: "看 E 和 F。它们中间没有黑键。所以 E 到 F 是一个半音，B 到 C 也是。",
    },
    "white-half-step": {
      text: "哪两个白键相隔一个半音？",
      answers: ["C 和 D", "E 和 F", "F 和 G"],
    },
    "e-f-and-b-c": {
      text: "弹中央 C 上面的 E 和 F。再弹 B 和它上面的 C。这两组都是两个白键之间的半音。",
    },
    "whole-step": {
      text: "两个半音合成一个全音。全音要跳过一个琴键。C 到 D 是一个全音，因为中间有一个黑键。",
    },
    "whole-and-half": {
      text: "听：C 到 D 是一个全音，D 到 E 也是一个全音。而 E 到 F 只是一个半音。",
    },
    "whole-steps-from-c": {
      text: "轮到你了。弹中央 C、D 和 E。每一步都是一个全音，越过一个黑键。",
    },
    "f-to-g": {
      text: "从 F 往上到 G，是一个半音还是一个全音？",
      answers: ["一个全音", "一个半音"],
    },
    "whole-step-above-e": {
      text: "按下比 E 高一个全音的琴键。往上数两个半音，注意：第一个半音落在 F 上。",
    },
    recap: {
      text: "做得好！现在你会量两个琴键之间的距离了。",
      points: [
        "半音就是走到紧挨着的下一个琴键，不管是黑键还是白键。",
        "E 到 F、B 到 C 是白键之间的半音。",
        "全音等于两个半音，中间隔着一个琴键。",
      ],
    },
  },
};
