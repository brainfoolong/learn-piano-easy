/** *Reading steps and skips* in Chinese. */
import type { Translation } from "../../../i18n/translation";
import type { ReadingStepsAndSkipsTexts } from "./reading-steps-and-skips.en";

export const readingStepsAndSkipsZh: Translation<ReadingStepsAndSkipsTexts> = {
  title: "看懂级进和跳进",
  steps: {
    "moves-demo": {
      text: "听一听。这些音先级进往上走，再跳进往上走。在谱表上，每种走法都有自己的样子。",
    },
    "step-on-the-staff": {
      text: "在谱表上，级进是从一条线走到相邻的间，或从一个间走到相邻的线。在琴键上，就是走到下一个白键。",
    },
    "step-from-line-quiz": {
      text: "一个音符在一条线上。往上级进一步，音符在哪里？",
      answers: ["在正上方的间里", "在上面一条线上", "往上两条线"],
    },
    "skip-on-the-staff": {
      text: "在谱表上，跳进是从一条线走到下一条线，或从一个间走到下一个间。在琴键上，就是跳过一个白键。",
    },
    "step-or-skip-quiz": {
      text: "一个音符从一条线走到上面一条线。这是级进还是跳进？",
      answers: ["级进", "跳进"],
    },
    "space-to-line-quiz": {
      text: "一个音符从一个间走到正上方的线。这是级进还是跳进？",
      answers: ["级进", "跳进"],
    },
    "read-by-moves": {
      text: "你不必说出每个音的音名。说出第一个音，然后看每一步怎么走：往上还是往下，级进还是跳进。",
    },
    "skip-from-e-quiz": {
      text: "一个音是 E，在高音谱表最下面的线上。下一个音在上面一条线上。它是哪个音？",
    },
    "first-note": {
      text: "下一首歌从这个音开始。说出它的音名。",
    },
    "hand-on-d": {
      text: "看右手从 C 手位往上移。拇指放在 D 上，2～5 指盖住 E、G、A 和 B。F 被跳过了，所以 2 指和 3 指要张开一点。",
    },
    "d-position": {
      text: "轮到你了。把右手拇指放在 D 上，用 1～5 指弹 D、E、G、A、B。然后一步步往下走回 D。",
    },
    "song-notes": {
      text: "下一首歌用的就是这五个音。读出每个音，用右手把它弹出来。",
    },
    "song-opening": {
      text: "这是下一首歌的开头。右手保持在 D、E、G、A 和 B 上，跟着标出的琴键弹。",
    },
    "opening-move-quiz": {
      text: "在这段旋律里，E 往下走到 D。E 在最下面的线上。D 在哪里？",
      answers: ["在正下方的间里", "在下面一条线上", "在同一条线上"],
    },
    "dotted-demo": {
      text: "听一听这首歌的两个小节。附点让音符再延长一半：附点二分音符持续三拍。附点四分音符 D 持续一拍半，一个八分休止符填满最后的半拍。",
    },
    "dotted-half-quiz": {
      text: "二分音符持续两拍。附点二分音符持续几拍？",
      answers: ["两拍", "三拍", "四拍"],
    },
    "dotted-tap": {
      text: "轮到你了，先听一小节预备拍。跟着滴答声弹 E、E 和 D，D 弹满一拍半后抬起。G 保持三拍，然后弹 D。",
    },
    recap: {
      text: "做得好！现在你能看走向读旋律了。",
      points: [
        "级进是从一条线到相邻的间，或从一个间到相邻的线。",
        "跳进是从线到线，或从间到间。",
        "说出第一个音，再看每一步的方向和大小。",
        "附点让音符再延长一半。",
      ],
    },
  },
};
