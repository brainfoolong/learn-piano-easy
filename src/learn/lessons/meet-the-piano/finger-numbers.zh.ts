/** *Finger numbers* in Chinese. */
import type { Translation } from "../../../i18n/translation";
import type { FingerNumbersTexts } from "./finger-numbers.en";

export const fingerNumbersZh: Translation<FingerNumbersTexts> = {
  title: "手指编号",
  steps: {
    "right-hand-numbers": {
      text: "每根手指都有一个编号。右手的拇指是 1，小指是 5。它们中间的手指是 2、3 和 4。",
    },
    "finger-three-quiz": {
      text: "哪根手指是 3 指？",
      answers: ["拇指", "中指", "小指"],
    },
    "left-hand-numbers": {
      text: "左手也是这样数：拇指是 1，小指是 5。两只手的拇指都是 1，所以两边的编号像照镜子一样对称。",
    },
    "left-thumb-quiz": {
      text: "左手拇指是几号？",
    },
    "five-fingers-demo": {
      text: "看连在一起的五个琴键，右手每根手指对应一个。拇指弹第一个琴键，然后是 2、3、4、5 指。",
    },
    "right-hand-five": {
      text: "现在轮到你弹。把右手拇指放在中央 C 上，其余每根手指各放在它右边的一个白键上。用 1、2、3、4、5 指弹。",
    },
    "finger-pattern": {
      text: "手保持不动。依次用 1、3、5、3、1 指弹。",
    },
    "left-hand-five": {
      text: "现在换左手。把小指，也就是 5 指，放在标出的 C 上。一直弹到拇指：5、4、3、2、1。",
    },
    recap: {
      text: "做得好。现在你的手指都有编号了。",
      points: ["拇指是 1，小指是 5。", "两只手的数法一样，都从拇指开始。", "课里的编号告诉你用哪根手指弹。"],
    },
  },
};
