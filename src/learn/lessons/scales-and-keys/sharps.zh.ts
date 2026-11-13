/** *Sharps* in Chinese. */
import type { Translation } from "../../../i18n/translation";
import type { SharpsTexts } from "./sharps.en";

export const sharpsZh: Translation<SharpsTexts> = {
  title: "升号",
  steps: {
    "raised-by-a-half-step": {
      text: "听：先是 C，再是紧挨在它右边的黑键。然后是 F，和紧挨在 F 右边的黑键。",
    },
    "the-sharp-sign": {
      text: "这个记号 ♯ 是升号。它把一个音升高半音，变成紧挨在右边的琴键。所以升 C，写作 C♯，就是 C 右边的黑键。",
    },
    "find-c-sharp": {
      text: "找到升 C。从任意一个 C 开始，往上走一个半音。",
    },
    "find-f-sharp": {
      text: "现在找到升 F。它是三个一组的黑键里的第一个。",
    },
    "where-is-g-sharp": {
      text: "升 G 在哪里？",
      answers: ["紧挨在 G 左边的黑键", "紧挨在 G 右边的黑键", "白键 A"],
    },
    "e-sharp": {
      text: "E 的右边没有黑键。从 E 往上一个半音就落在 F 上。所以升 E 就是 F，升 B 就是 C。",
    },
    "e-sharp-is": {
      text: "升 E 要按哪个琴键？",
    },
    "sharp-on-the-staff": {
      text: "在谱表上，♯ 写在音符紧挨着的左边，和音符在同一条线或同一个间里。先读出这个音，再往上走一个半音。",
    },
    "play-sharps": {
      text: "读出每个带升号的音，再把它弹出来。先找到白键，再往上走一个半音。",
    },
    "through-f-sharp": {
      text: "把右手拇指放在中央 C 上面的 D 上，中指放在升 F 上。弹 D、E、升 F 和 G，再弹回 D。",
    },
    recap: {
      text: "做得好！你会读、也会弹升号了。",
      points: [
        "升号 ♯ 把一个音升高半音，变成紧挨在右边的琴键。",
        "大多数升号音是黑键，比如升 C 和升 F。",
        "升 E 就是 F，升 B 就是 C，因为中间没有黑键。",
        "在谱表上，♯ 写在它的音符紧挨着的左边。",
      ],
    },
  },
};
