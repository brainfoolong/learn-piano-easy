/** *Treble landmarks* in Chinese. */
import type { Translation } from "../../../i18n/translation";
import type { TrebleLandmarksTexts } from "./treble-landmarks.en";

export const trebleLandmarksZh: Translation<TrebleLandmarksTexts> = {
  title: "高音谱号的标志音",
  steps: {
    "landmarks-demo": {
      text: "看一看，听一听。琴声先是中央 C，接着是 G，然后是上面的 C。这三个音就是你的标志音。",
    },
    "three-landmarks": {
      text: "标志音就是一眼就能认出的音。中央 C 在它的加线上，G 在第二线上。高音 C 在从下往上数的第三间。",
    },
    "high-c-quiz": {
      text: "高音 C 在高音谱表的什么位置？",
      answers: ["在第二线上", "在谱表下面的一条加线上", "在从下往上数的第三间"],
    },
    "name-landmarks": {
      text: "说出每个标志音的音名：C 还是 G。",
    },
    "count-from-a-landmark": {
      text: "其他的音离某个标志音都只有几步。从一条线到相邻的间是一步，从一个间到相邻的线也是一步。每往上走一步，就是下一个字母。",
    },
    "count-quiz": {
      text: "一个音符比 G 高一步，在第二线上面的间里。它是哪个音？",
    },
    "name-neighbours": {
      text: "说出每个音的音名。先找到最近的标志音，再往上或往下数步数。",
    },
    "read-treble-landmarks": {
      text: "弹出你在高音谱表上看到的每个音。有些是标志音，其他的离标志音只有一步。",
    },
    recap: {
      text: "做得好！你在高音谱号里有了三个标志音。",
      points: ["中央 C 在谱表的下加一线上。", "G 在第二线上，高音 C 在第三间。", "从最近的标志音数步数，就能找到任何音。"],
    },
  },
};
