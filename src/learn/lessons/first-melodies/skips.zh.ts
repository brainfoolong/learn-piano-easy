/** *Skips* in Chinese. */
import type { Translation } from "../../../i18n/translation";
import type { SkipsTexts } from "./skips.en";

export const skipsZh: Translation<SkipsTexts> = {
  title: "跳进",
  steps: {
    "skip-demo": {
      text: "仔细看，仔细听。每个音都跳过一个白键，先往上，再往下回来。",
    },
    "what-a-skip-is": {
      text: "跳进就是跳过一个白键。从 C 到 E，就跳过了 D。拇指弹 C，3 指弹 E，2 指歇着不弹。",
    },
    "skip-from-c-quiz": {
      text: "拇指在 C 上。从这里跳进，会到哪个琴键？",
    },
    "skips-up": {
      text: "把右手放在 C 手位上。往上弹跳进：先 1 指和 3 指，再 2 指和 4 指，然后 3 指和 5 指。",
    },
    "skips-down": {
      text: "现在把同样的跳进往下弹回来。从 5 指开始，跟着标出的琴键弹。",
    },
    "step-or-skip-quiz": {
      text: "4 指弹 F，接着 5 指弹 G。这是级进还是跳进？",
      answers: ["级进", "跳进"],
    },
    "mixed-phrase": {
      text: "把右手放在 C 手位上。这段旋律有级进，也有一个跳进：C、D、E，往上跳到 G，再 F、E、D、C。",
    },
    recap: {
      text: "做得好！你会弹跳进了。",
      points: ["跳进就是跳过一个白键。", "在 C 手位中，跳进会跳过一根手指。", "一段旋律可以既有级进，又有跳进。"],
    },
  },
};
