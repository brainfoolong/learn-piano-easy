/** *Major triads* in Chinese. */
import type { Translation } from "../../../i18n/translation";
import type { MajorTriadsTexts } from "./major-triads.en";

export const majorTriadsZh: Translation<MajorTriadsTexts> = {
  title: "大三和弦",
  steps: {
    "major-demo": {
      text: "听四个三和弦：C、F、G，再回到 C。每一个都明亮、欢快。它们是大三和弦。",
    },
    "count-the-steps": {
      text: "数一数 C、E、G 之间的半音。每个琴键都算，黑键也算。从 E 往上到 G 是三个半音。",
    },
    "half-steps-c-to-e": {
      text: "现在从 C 往上数到 E。一共几个半音？",
      answers: ["两个", "三个", "四个"],
    },
    "major-recipe": {
      text: "这就是大三和弦的构成方法。从根音开始，也就是给三和弦命名的那个键。先往上数四个半音，再往上数三个。",
    },
    "right-hand-fingers": {
      text: "右手用 1、3、5 指弹三和弦。拇指弹根音。",
    },
    "c-major-triad": {
      text: "把右手拇指放在中央 C 上。先一个一个地弹 C、E、G，再三个一起弹。",
    },
    "f-major-triad": {
      text: "把拇指往上移到 F。往上四个半音是 A，再往上三个是 C。先一个一个地弹，再一起弹。",
    },
    "g-major-triad": {
      text: "现在把拇指移到 G。按这个方法得到 G、B、D。先一个一个地弹，再一起弹。",
    },
    "four-up-from-d": {
      text: "从 D 开始，往上数四个半音。你落在哪个键上？",
      answers: ["升 F", "F", "G"],
    },
    "find-f-sharp": {
      text: "所以 D 大三和弦需要一个黑键。找到升 F，就是紧挨在 F 右边的黑键。",
    },
    "d-major-triad": {
      text: "把右手拇指放在中央 C 上面的 D 上，3 指落在升 F 上。先一个一个地弹 D、升 F、A，再一起弹。",
    },
    "left-hand-fingers": {
      text: "左手用 5、3、1 指弹三和弦。5 指弹根音，拇指弹最上面的键。",
    },
    "left-c-major": {
      text: "把左手 5 指放在中央 C 下面的 C 上。先一个一个地弹 C、E、G，再一起弹。",
    },
    "chord-walk-demo": {
      text: "这是连着弹出的 C、F、G、C 大三和弦。手保持手型，整只手一起移动。",
    },
    "chord-walk": {
      text: "轮到你了。用右手弹这四个三和弦。保持手型，从一个根音移到下一个根音。",
    },
    recap: {
      text: "做得好。现在你能在任何一个键上搭出大三和弦了。",
      points: [
        "大三和弦从根音开始。",
        "中间的键在根音上方四个半音，最上面的键再往上三个半音。",
        "C、F、G 大三和弦只用白键，D 大三和弦需要升 F。",
        "右手用 1、3、5 指，左手用 5、3、1 指。",
      ],
    },
  },
};
