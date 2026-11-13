/** *G major* in Chinese. */
import type { Translation } from "../../../i18n/translation";
import type { GMajorTexts } from "./g-major.en";

export const gMajorZh: Translation<GMajorTexts> = {
  title: "G 大调",
  steps: {
    "g-scale-demo": {
      text: "听一条从 G 开始的音阶。它听起来和 C 大调一样明亮。路上有一个琴键是黑键。",
    },
    "pattern-from-g": {
      text: "从 G 开始套用音阶的规律：全、全、半、全、全。这样得到 G、A、B、C、D 和 E。到这里每个琴键都是白键。",
    },
    "whole-step-above-e": {
      text: "从 E 开始，规律要求走一个全音。比 E 高一个全音的是哪个琴键？",
    },
    "one-sharp": {
      text: "所以 G 大调音阶弹升 F，不弹 F。从升 F 往上一个半音，就到了最上面的 G。G 大调有一个升号：升 F。",
    },
    "find-f-sharp": {
      text: "在琴键上找到升 F。它是紧挨在 F 右边的黑键。",
    },
    "same-fingering": {
      text: "右手弹 G 大调和弹 C 大调一样。用 1、2、3 指弹 G、A 和 B。拇指穿过去弹 C，然后用 1、2、3、4、5 指弹 C、D、E、升 F 和 G。",
    },
    "g-scale-up": {
      text: "轮到你了。把右手拇指放在中央 C 上面的 G 上，往上弹 G 大调音阶，弹到下一个 G。用 4 指弹升 F。",
    },
    "g-scale-down": {
      text: "现在往下弹，从上面的 G 弹回你开始的那个 G。3 指跨过拇指弹 B。",
    },
    "hear-f-and-f-sharp": {
      text: "升 F 只比 F 高半音，所以要仔细听。第二个琴键比第一个高、低，还是一样？",
    },
    "g-tune-demo": {
      text: "这是一段 G 大调的短旋律。左手按住 G 和 D 组成的五度，右手弹升 F。",
    },
    "g-tune": {
      text: "把右手拇指放在中央 C 上面的 D 上，这样 3 指正好落在升 F 上。左手弹低音区的五度：中央 C 下面那个 C 再往下的 G，和它上面的 D。弹第一个 G 时同时弹这个五度，弹第二个 G 时再弹一次。",
    },
    recap: {
      text: "做得好！你弹了第二条音阶。",
      points: [
        "大调音阶的规律可以从任何一个琴键开始。",
        "从 G 开始时，要用升 F，这样半音才会落在最上面的音下面。",
        "G 大调有一个升号：升 F。",
        "它的指法和 C 大调一样。",
      ],
    },
  },
};
