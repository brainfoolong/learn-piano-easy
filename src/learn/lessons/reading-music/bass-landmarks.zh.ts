/** *Bass landmarks* in Chinese. */
import type { Translation } from "../../../i18n/translation";
import type { BassLandmarksTexts } from "./bass-landmarks.en";

export const bassLandmarksZh: Translation<BassLandmarksTexts> = {
  title: "低音谱号的标志音",
  steps: {
    "landmarks-demo": {
      text: "看一看，听一听。你会听到低音谱号的三个标志音：低音 C、F 和中央 C。标志音就是一眼就能认出的音。",
    },
    "low-c": {
      text: "低音 C 在低音谱表从下往上数的第二间。它是中央 C 下面的 C。在 C 手位里，你用左手小指弹它。",
    },
    "play-low-c": {
      text: "这是第二间里的低音 C。在琴键上把它弹出来。",
    },
    "middle-c-above": {
      text: "中央 C 在低音谱表正上方，有一条自己的加线。它就是你在高音谱表下面见过的那个中央 C。",
    },
    "middle-c-quiz": {
      text: "在低音谱号里，中央 C 在哪里？",
      answers: ["在谱表正下方的一条加线上", "在谱表正上方的一条加线上", "在中间的线上"],
    },
    "fourth-line-quiz": {
      text: "哪个标志音在从下往上数的第四线上？",
      answers: ["低音 C", "F", "中央 C"],
    },
    "count-from-a-landmark": {
      text: "从一条线到相邻的间是一步，也就是一个字母。读一个音时，先从最近的标志音出发，再往上或往下数步数。",
    },
    "count-quiz": {
      text: "一个音符在中间的线上，比低音 C 高一步。它是哪个音？",
    },
    "play-bass-landmarks": {
      text: "弹出你在低音谱表上看到的每个音。有些是标志音，其他的离标志音只有一两步。",
    },
    "name-by-counting": {
      text: "说出每个音的音名。点击它的字母。从最近的标志音数起：低音 C、F 或中央 C。",
    },
    recap: {
      text: "做得好！你已经能在低音谱表上找到方向了。",
      points: ["低音 C 在第二间。", "F 在第四线上，在谱号的两个点之间。", "中央 C 在谱表正上方的一条加线上。", "从最近的标志音数起，就能读出任何音。"],
    },
  },
};
