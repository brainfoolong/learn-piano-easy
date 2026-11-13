/** *Octaves* in Chinese. */
import type { Translation } from "../../../i18n/translation";
import type { OctavesTexts } from "./octaves.en";

export const octavesZh: Translation<OctavesTexts> = {
  title: "八度",
  steps: {
    "three-cs": {
      text: "从低到高，听三个 C。看看每个 C 在钢琴上的位置。",
    },
    "same-letter": {
      text: "从 C 开始往上数白键：C、D、E、F、G、A、B，然后又是 C。连起点那个白键一起数，同一个字母在第八个白键上再次出现。这段距离叫作八度。",
    },
    "count-quiz": {
      text: "从一个 C 往上到下一个 C，两头都算，一共有几个白键？",
      answers: ["五个", "八个", "十二个"],
    },
    "sound-alike": {
      text: "相差八度的两个音听起来很像，好像是同一个音。其中一个比另一个高。",
    },
    "octave-listen": {
      text: "每次你会听到两个音。第二个音比第一个高、低，还是一样？",
    },
    "e-above": {
      text: "中央 C 上面的第一个 E，是它右边的第二个白键。按下比这个 E 高一个八度的 E。",
    },
    "c-below": {
      text: "现在往另一个方向走。按下比中央 C 低一个八度的 C。",
    },
    "octave-pair": {
      text: "自己弹一个八度：先弹中央 C 上面的第一个 E，再弹高一个八度的 E。听听它们有多像。",
    },
    "octave-quiz": {
      text: "什么是八度？",
      answers: ["紧挨着的两个琴键", "一组里的两个黑键", "从一个字母到下一个同名字母的距离，两头都算，共八个白键"],
    },
    recap: {
      text: "做得好。你知道什么是八度了。",
      points: ["连第一个白键一起数，同一个字母在第八个白键上再次出现。", "这段距离就是一个八度。", "相差八度的两个音听起来很像，其中一个更高。"],
    },
  },
};
