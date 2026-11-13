/** *Flats* in Chinese. */
import type { Translation } from "../../../i18n/translation";
import type { FlatsTexts } from "./flats.en";

export const flatsZh: Translation<FlatsTexts> = {
  title: "降号",
  steps: {
    "flat-sound": {
      text: "听 B，再听紧挨在它左边的黑键。然后听 E，和紧挨在 E 左边的黑键。",
    },
    "what-a-flat-is": {
      text: "这个记号是降号：♭。降号把一个音降低半音。你要弹紧挨在它左边的那个琴键。",
    },
    "find-b-flat": {
      text: "找到降 B，写作 B♭。从 B 开始，往左移一个琴键。",
    },
    "find-e-flat": {
      text: "现在找到降 E，写作 E♭。它是紧挨在 E 左边的黑键。",
    },
    "which-is-e-flat": {
      text: "哪个琴键是降 E？",
      answers: ["白键 D", "E 右边的黑键", "E 左边的黑键"],
    },
    "hear-flats": {
      text: "降号音听起来低一点。听两个音。第二个音比第一个高、低，还是一样？",
    },
    "two-names": {
      text: "升 C 把 C 升高到右边的黑键。降 D 把 D 降低到左边的黑键。这是同一个琴键，所以它有两个名字。",
    },
    "other-name-quiz": {
      text: "升 C 和某个降号音是同一个黑键。是哪一个？",
    },
    "half-steps-down": {
      text: "轮到你了。弹 B、降 B 和 A，再弹 E、降 E 和 D。每个音都比前一个低半音。",
    },
    recap: {
      text: "做得好！你知道降号是什么了。",
      points: [
        "降号 ♭ 把一个音降低半音。",
        "降 B 是 B 左边的黑键，降 E 是 E 左边的黑键。",
        "一个黑键可以有两个名字：升 C 也是降 D。",
      ],
    },
  },
};
