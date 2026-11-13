/** *The treble clef* in Chinese. */
import type { Translation } from "../../../i18n/translation";
import type { TheTrebleClefTexts } from "./the-treble-clef.en";

export const theTrebleClefZh: Translation<TheTrebleClefTexts> = {
  title: "高音谱号",
  steps: {
    "a-clef-starts-the-staff": {
      text: "每个谱表的开头都有一个谱号。谱号告诉你每条线、每个间是哪个音。你的右手主要读高音谱号。",
    },
    "the-g-line": {
      text: "高音谱号的圈绕在从下往上数的第二线上。这条线是 G，所以高音谱号也叫 G 谱号。这个 G 是中央 C 上面的第一个 G。",
    },
    "g-line-quiz": {
      text: "高音谱号的圈绕在哪条线上？",
      answers: ["最下面的线", "从下往上数的第二线", "最上面的线"],
    },
    "hear-g-demo": {
      text: "听一听。这是第二线上的 G，钢琴弹两遍。",
    },
    "play-g": {
      text: "这个音符在 G 线上。在钢琴上把它弹出来。",
    },
    "g-neighbours": {
      text: "从 G 出发，你可以找到它的邻居。往上走一步，在上面的间里，是 A。往下走一步，在下面的间里，是 F。",
    },
    "neighbours-demo": {
      text: "看一看，听一听：G，往上一步到 A，回到 G，往下一步到 F，再回到 G。",
    },
    "space-above-g-quiz": {
      text: "一个音符在 G 线正上方的间里。它是哪个音？",
    },
    "one-more-step": {
      text: "继续按字母一步步走。A 上面是 B，在中间的线上。F 下面是 E，在最下面的线上。",
    },
    "middle-line-quiz": {
      text: "高音谱号中间那条线上是哪个音？",
    },
    "play-treble-notes": {
      text: "弹出你看到的每个音。先找到 G 线，再往上或往下数步数。",
    },
    "name-treble-notes": {
      text: "现在说出每个音的音名。从 G 线出发，往上或往下一步步数到它。",
    },
    recap: {
      text: "做得好！你能读出高音谱号里的第一批音了。",
      points: ["高音谱号的圈绕在第二线上，这条线是 G。", "往上或往下走一步，就到下一条线或下一个间，也到下一个字母。", "G 的周围是 E、F、A 和 B。"],
    },
  },
};
