/** *The bass clef* in Chinese. */
import type { Translation } from "../../../i18n/translation";
import type { TheBassClefTexts } from "./the-bass-clef.en";

export const theBassClefZh: Translation<TheBassClefTexts> = {
  title: "低音谱号",
  steps: {
    "low-notes-demo": {
      text: "看一看，听一听。琴声依次走过中央 C 下面的 C、D、E、F 和 G。这些就是你左手 C 手位的琴键。",
    },
    "what-the-bass-clef-is": {
      text: "高音谱号用来写较高的音，主要给右手读。低音谱号用来写较低的音，主要给左手读。它看起来像一个弯钩，旁边有两个点。",
    },
    "low-notes-clef-quiz": {
      text: "哪个谱号用来写较低的音？",
      answers: ["高音谱号", "低音谱号"],
    },
    "the-f-line": {
      text: "低音谱号的两个点，一个在从下往上数第四线的上方，一个在它的下方。这条线是 F，也就是中央 C 下面的 F。所以低音谱号也叫 F 谱号。",
    },
    "f-line-quiz": {
      text: "低音谱号的两个点夹着哪条线？",
      answers: ["从下往上数的第二线", "从下往上数的第四线", "中间的线"],
    },
    "play-bass-f": {
      text: "这是第四线上的 F。在琴键上把它弹出来。在左手 C 手位里，2 指就放在它上面。",
    },
    "neighbours-of-f": {
      text: "F 正上方的间是 G，F 正下方的间是 E。再往下走一步，在中间的线上，是 D。",
    },
    "name-bass-notes": {
      text: "说出低音谱号里每个音的音名。点击它的字母。从第四线上的 F 开始，往上或往下数。",
    },
    recap: {
      text: "做得好！你能读出低音谱号里的第一批音了。",
      points: ["低音谱号用来写较低的音，主要给左手读。", "它的两个点夹着第四线，这条线是 F。", "从 F 往上或往下数，就能找到它的邻居。"],
    },
  },
};
