/** *Slowing down* in Chinese. */
import type { Translation } from "../../../i18n/translation";
import type { SlowingDownTexts } from "./slowing-down.en";

export const slowingDownZh: Translation<SlowingDownTexts> = {
  title: "渐慢",
  steps: {
    "slowing-demo": {
      text: "听这个乐句。它用平稳的速度往上走。往下走时，每个音都稍微拖长一点。",
    },
    "what-ritardando-is": {
      text: "刚才音乐是有意放慢的。记号 rit. 是 ritardando 的缩写，意思是渐慢，要你一点一点慢下来。它常常出现在乐曲的结尾。",
    },
    "rit-means": {
      text: "你看到几个小节上方写着 rit.。你该怎么做？",
      answers: ["一点一点慢下来", "弹得更响", "马上停下", "加快速度"],
    },
    "steady-tap": {
      text: "只有先有平稳的节拍，放慢才有意义。跟着滴答声打拍子，和它完全对齐。",
    },
    "play-the-ending": {
      text: "从中央 C 上面的 G 开始，弹乐句的结尾：G、F、E、D、C。每个音都多给一点时间，最后在 C 上停住。",
    },
    "what-a-fermata-is": {
      text: "这个记号像一只眼睛：一条弧线，下面有一个点。它是延长记号，也就是表示停顿的记号。它下面的音要比写的时值更长。",
    },
    "fermata-demo": {
      text: "仔细听 G 上方的延长记号。G 响着的时候，节拍停住了，然后音乐再继续。",
    },
    "fermata-means": {
      text: "一个音符上方有延长记号。它要你怎么做？",
      answers: ["弹得短", "弹得更响", "不弹它", "比写的时值保持得更长"],
    },
    "back-in-tempo": {
      text: "在 rit. 之后，a tempo 让速度回到之前的样子。在意大利语里，它的意思是“回原速”。",
    },
    "a-tempo-demo": {
      text: "听一听。乐句在中间慢下来，然后 a tempo 让它回到最初的速度。",
    },
    "a-tempo-means": {
      text: "你因为 rit. 慢了下来。现在你看到了 a tempo。你该怎么做？",
      answers: ["再慢一些", "回到最初的速度", "保持下一个音", "弹得弱一些"],
    },
    "where-rit-goes": {
      text: "rit. 最常出现在哪里？",
      answers: ["最开头的第一个音上", "每个小节里", "乐曲结尾附近", "只在左手"],
    },
    "ending-with-fermata": {
      text: "从中央 C 上面的 E 开始，弹 E、D、C、D、E、E，边弹边放慢。最后落在一个和弦上：左手弹中央 C 下面的 C 和它上面的 G，右手再弹一个 E。像延长记号要求的那样，让和弦多响一会儿。",
    },
    "rall-means": {
      text: "有些乐谱写的是 rall.，它是 rallentando 的缩写。哪个记号意思一样？",
      answers: ["rit.", "a tempo", "延长记号", "mf"],
    },
    recap: {
      text: "真棒！现在你能有意识地改变速度了。",
      points: [
        "rit. 和 rall. 要你一点一点慢下来，最常出现在结尾。",
        "延长记号让它的音比写的时值保持得更长。",
        "a tempo 让速度回到最初。",
      ],
    },
  },
};
