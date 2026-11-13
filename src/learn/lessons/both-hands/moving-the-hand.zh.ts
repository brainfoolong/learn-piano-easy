/** *Moving the hand* in Chinese. */
import type { Translation } from "../../../i18n/translation";
import type { MovingTheHandTexts } from "./moving-the-hand.en";

export const movingTheHandZh: Translation<MovingTheHandTexts> = {
  title: "移动手位",
  steps: {
    "phrase-then-move": {
      text: "看右手。它在 C 手位弹五个音，趁休止符往上移，然后在更高的地方再弹一遍同样的音型。",
    },
    "new-position": {
      text: "五指手位也可以从别的琴键开始。在 G 手位，右手拇指放在中央 C 上面的 G 上。五个手指覆盖 G、A、B、C、D。",
    },
    "new-thumb": {
      text: "找到 G 手位里右手拇指的琴键：中央 C 上面最近的那个 G。",
    },
    "little-finger-quiz": {
      text: "你的右手在 G 手位。小指弹哪个琴键？",
    },
    "middle-finger-quiz": {
      text: "还是 G 手位。3 指弹哪个琴键？",
    },
    "read-g-position": {
      text: "这些是 G 手位在高音谱表上的音。说出每个音的名字。",
    },
    "c-position-phrase": {
      text: "从 C 手位开始。从拇指往上弹到 4 指，再往下弹回中央 C。",
    },
    "g-position-phrase": {
      text: "现在把手移到 G 手位，弹同样的音型。拇指放在 G 上，往上弹到 C，再弹回来。",
    },
    "move-in-a-rest": {
      text: "在休止符处，或者长音快结束的时候移手。把整只手抬起来，保持手型，让拇指落在新的琴键上。",
    },
    "move-and-play": {
      text: "用右手一口气弹两个乐句。从中央 C 开始，弹 C、D、E、F、E、D、C。然后把拇指移到中央 C 上面的 G，弹 G、A、B、C、B、A、G。",
    },
    recap: {
      text: "做得好！现在你的手可以换位置了。",
      points: [
        "在 G 手位，右手拇指放在中央 C 上面的 G 上。",
        "这时五个手指弹 G、A、B、C、D。",
        "在休止符或长音时移动整只手，并保持手型。",
      ],
    },
  },
};
