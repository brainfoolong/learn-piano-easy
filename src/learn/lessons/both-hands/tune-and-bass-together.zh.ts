/** *Tune and bass together* in Chinese. */
import type { Translation } from "../../../i18n/translation";
import type { TuneAndBassTogetherTexts } from "./tune-and-bass-together.en";

export const tuneAndBassTogetherZh: Translation<TuneAndBassTogetherTexts> = {
  title: "旋律和低音一起弹",
  steps: {
    "whole-tune": {
      text: "听一段四个小节的短旋律。右手弹旋律，左手在每个小节加一个低沉的音。",
    },
    "two-layers": {
      text: "旋律每一拍都在动。低音只在第一拍进来，然后在旋律下面响满整个小节。",
    },
    "tune-alone": {
      text: "先单独弹旋律，用 C 手位。弹 C、D、E、F，G、F、E、D，D、E、F、D，最后停在中央 C 上。",
    },
    "bass-beat-quiz": {
      text: "低音在每个小节的哪一拍进来？",
      answers: ["在第一拍", "在第三拍", "每一拍都进来"],
    },
    "bass-demo": {
      text: "现在单独听低音。每个音都持续一整个小节：先是 C，然后是两个 G，最后又是 C。",
    },
    "bass-alone": {
      text: "用左手在 C 手位弹低音。小指弹 C，拇指弹 G。",
    },
    "press-together": {
      text: "在第一拍，两只手同时按下各自的琴键。然后左手按住它的音，右手继续弹下去。",
    },
    "first-half": {
      text: "用双手弹前两个小节。低音和旋律的第一个音要同时按下。",
    },
    "held-bass-quiz": {
      text: "在第 2 小节，右手弹 G、F、E、D。这时左手在做什么？",
      answers: ["低一个八度弹 G、F、E、D", "按住它的 G", "抬起来休息"],
    },
    "whole-tune-together": {
      text: "现在用双手弹整段旋律。每到第一拍两只手一起弹的地方，都慢慢来。",
    },
    recap: {
      text: "做得好！你弹了一段带低音的旋律。",
      points: [
        "先单独学旋律，再单独学低音，然后把它们合起来。",
        "低音在第一拍进来，和旋律音一起弹。",
        "左手按住低音，右手继续弹下去。",
      ],
    },
  },
};
