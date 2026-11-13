/** *C, F and G* in Chinese. */
import type { Translation } from "../../../i18n/translation";
import type { CFAndGTexts } from "./c-f-and-g.en";

export const cFAndGZh: Translation<CFAndGTexts> = {
  title: "C、F 和 G",
  steps: {
    "progression-demo": {
      text: "听四个和弦：C、F、G，再回到 C。它们听起来像一首短短的歌，最后停在 C 上。",
    },
    "three-main-chords": {
      text: "在 C 大调音阶的第 1、4、5 级上各搭一个三和弦。你会得到 C、F、G，它们是 C 大调的三个主要和弦。",
    },
    "fourth-step": {
      text: "从 C 开始往上数 C 大调音阶。它的第 4 级是哪个音？",
    },
    "the-f-triad": {
      text: "F 三和弦是 F、A、C。它和 C 大三和弦一样是大三和弦，所以手指保持同样的手型。",
    },
    "c-and-f": {
      text: "轮到你了。从中央 C 开始，用 1、3、5 指弹 C 大三和弦。然后把拇指移到中央 C 上面的 F，弹 F 三和弦，再回到 C。",
    },
    "g-triad-notes": {
      text: "G 三和弦建在音阶的第 5 级上。它由哪些音组成？",
      answers: ["G、降 B、D", "G、B、D", "G、A、B", "F、A、C"],
    },
    "c-and-g": {
      text: "从中央 C 开始弹 C 大三和弦，然后把拇指移到中央 C 上面的 G，弹 G 三和弦，再回到 C。",
    },
    "move-the-hand": {
      text: "从一个和弦换到下一个和弦时，把整只手抬起来。1、3、5 指保持手型，让拇指找到新的根音。",
    },
    "c-f-g-c": {
      text: "用右手弹四个和弦：先从中央 C 弹 C、E、G，再弹 F、A、C，然后弹 G、B、D，最后弹 C、E、G。和弦之间慢慢来。",
    },
    "left-hand-chords": {
      text: "左手在低处弹同样的和弦，用 5、3、1 指。5 指放在根音上。",
    },
    "left-c-f-g-c": {
      text: "把左手 5 指放在中央 C 下面的 C 上。依次弹 C、F、G、C 和弦，5 指移到每个根音上。",
    },
    "tune-demo": {
      text: "这是一段配着这三个和弦的短旋律。左手弹每个和弦，右手在和弦上方弹两个音。",
    },
    tune: {
      text: "把右手拇指放在中央 C 上面的 G 上。每个和弦都和这一小节的第一个音一起弹，然后单独弹第二个音。最后一小节没有第二个音。",
    },
    recap: {
      text: "做得好。现在你能弹 C 大调的三个主要和弦了。",
      points: [
        "C、F、G 是 C 大调第 1、4、5 级上的三和弦。",
        "F 三和弦是 F、A、C，G 三和弦是 G、B、D。",
        "在和弦之间移动时，抬起整只手并保持手型。",
        "从 G 回到 C，听起来有结束感。",
      ],
    },
  },
};
