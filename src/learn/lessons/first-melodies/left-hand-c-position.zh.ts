/** *Left hand in C position* in Chinese. */
import type { Translation } from "../../../i18n/translation";
import type { LeftHandCPositionTexts } from "./left-hand-c-position.en";

export const leftHandCPositionZh: Translation<LeftHandCPositionTexts> = {
  title: "左手 C 手位",
  steps: {
    "left-hand-demo": {
      text: "听一听中央 C 下面的五个琴键，先往上，再往下回来。这一课里，由你的左手来弹它们。",
    },
    "place-left-hand": {
      text: "找到比中央 C 低一个八度的 C。把左手小指，也就是 5 指，放在它上面，再在它右边的每个白键上各放一根手指。拇指，也就是 1 指，放在 G 上。",
    },
    "c-finger-quiz": {
      text: "你的左手在 C 手位上。哪根手指弹 C？",
      answers: ["1 指，拇指", "3 指，中指", "5 指，小指"],
    },
    "find-left-thumb": {
      text: "手保持不动。按下左手拇指下面的琴键。",
    },
    "find-left-middle": {
      text: "现在按下左手 3 指下面的琴键。",
    },
    "up-and-down": {
      text: "把这五个琴键往上弹，再往下弹回来。边弹边数手指：5、4、3、2、1，再回到 5。",
    },
    "left-steps": {
      text: "现在用左手弹级进，从拇指开始。每个音都移到下一个白键。",
    },
    "left-skips-repeats": {
      text: "左手保持在 C 手位上。弹跳进和重复音：C，E E，G G，E，C。手指依次是 5、3、3、1、1、3、5。",
    },
    recap: {
      text: "做得好！你的左手在琴键上有了自己的家。",
      points: [
        "左手放在 C、D、E、F、G 上，比中央 C 低一个八度。",
        "小指，也就是 5 指，弹 C；拇指弹 G。",
        "左手的手指编号和右手的方向相反。",
      ],
    },
  },
};
