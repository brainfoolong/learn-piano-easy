/** *Finger over the thumb* in Chinese. */
import type { Translation } from "../../../i18n/translation";
import type { FingerOverTheThumbTexts } from "./finger-over-the-thumb.en";

export const fingerOverTheThumbZh: Translation<FingerOverTheThumbTexts> = {
  title: "跨指",
  steps: {
    "down-demo": {
      text: "听 C 大调音阶往下走，从高音 C 到中央 C。手一直不停，音连贯流畅。",
    },
    "finger-over": {
      text: "往下弹时，用 5、4、3、2、1 指弹 C、B、A、G 和 F。然后 3 指跨过拇指弹 E。再用 2 指和 1 指弹 D 和 C。",
    },
    "which-finger-crosses": {
      text: "往下弹时，拇指刚弹完 F。哪根手指跨过它弹 E？",
      answers: ["2 指", "3 指", "5 指"],
    },
    "top-five-down": {
      text: "把小指放在中央 C 上面的 C 上。往下弹到 F，每个琴键用一根手指。",
    },
    "cross-onto-e": {
      text: "用拇指从 F 开始。把 3 指跨过拇指弹 E，再弹 D 和 C。",
    },
    "right-hand-down": {
      text: "现在把整条音阶往下弹一遍，从高音 C 到中央 C。3 指跨过去时，手保持放松。",
    },
    "left-hand-up": {
      text: "左手往上弹时也是这样。用 5、4、3、2、1 指弹 C、D、E、F 和 G。然后 3 指跨过拇指弹 A。",
    },
    "left-hand-demo": {
      text: "看左手往上弹 C 大调，从中央 C 下面的 C 到中央 C。",
    },
    "left-cross-key": {
      text: "你的左手拇指在 G 上。3 指跨过它，会落在哪个琴键上？",
    },
    "left-scale-up": {
      text: "轮到你了。用左手往上弹音阶，从中央 C 下面的 C 弹到中央 C。",
    },
    "scale-up-and-down": {
      text: "用右手弹 C 大调音阶，从中央 C 往上弹到下一个 C，再弹回来。往上时拇指穿过去，往下时 3 指跨过拇指。",
    },
    recap: {
      text: "做得好！现在你的手指两个方向都会交叉了。",
      points: [
        "往下弹时，右手用 5、4、3、2、1 指，然后 3 指跨过拇指。",
        "往上弹时，左手也是这样，3 指跨到 A。",
        "右手往上弹时拇指穿过去，往下弹时 3 指跨过去。",
      ],
    },
  },
};
