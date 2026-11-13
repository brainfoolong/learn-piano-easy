/** *Steps* in Chinese. */
import type { Translation } from "../../../i18n/translation";
import type { StepsTexts } from "./steps.en";

export const stepsZh: Translation<StepsTexts> = {
  title: "级进",
  steps: {
    "steps-demo": {
      text: "看一段小旋律。每个音都移到紧挨着前一个音的琴键上。",
    },
    "what-a-step-is": {
      text: "移到紧挨着的下一个白键，叫作级进。级进可以往上，也可以往下。在 C 手位中，级进由下一根手指来弹。",
    },
    "which-is-a-step": {
      text: "下面哪一个是级进？",
      answers: ["C 到 D", "C 到 E", "C 到 G"],
    },
    "hear-steps": {
      text: "往上级进，声音会高一点；往下级进，声音会低一点。听两个音。第二个音比第一个高、低，还是一样？",
    },
    "step-up": {
      text: "把右手放在 C 手位上。从拇指一级一级往上走到小指。",
    },
    "step-down": {
      text: "现在再往下走回来，从小指走到拇指。",
    },
    "next-finger-quiz": {
      text: "3 指在 E 上。从那里往上级进，用哪根手指弹？",
      answers: ["2 指", "4 指", "5 指"],
    },
    "step-up-and-down": {
      text: "一路往上走到顶，再一路往下走回来。跟着标出的琴键弹。",
    },
    "stepping-tune": {
      text: "把右手放在 C 手位上。这段旋律全是级进：C、D、E、D、E、F、E、D、C。",
    },
    recap: {
      text: "做得好！你会弹全是级进的旋律了。",
      points: ["级进就是移到紧挨着的下一个白键。", "级进可以往上，也可以往下。", "在 C 手位中，级进由下一根手指来弹。"],
    },
  },
};
