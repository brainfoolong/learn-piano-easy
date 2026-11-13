/** *Twinkle's first phrase* in Chinese. */
import type { Translation } from "../../../i18n/translation";
import type { TwinkleFirstPhraseTexts } from "./twinkle-first-phrase.en";

export const twinkleFirstPhraseZh: Translation<TwinkleFirstPhraseTexts> = {
  title: "《小星星》第一句",
  steps: {
    "phrase-demo": {
      text: "听一听《小星星》的第一个乐句。其中有一个音在 C 手位之外。",
    },
    "one-key-past": {
      text: "这个音是 A，就是紧挨在 G 后面的白键。手仍然留在 C 手位上，小指往右多伸一个琴键去弹 A。",
    },
    "find-a": {
      text: "把右手放在 C 手位上。小指伸过 G，按下 A。",
    },
    "leap-quiz": {
      text: "这段旋律从 C 开始，然后往上大跳。它跳到了哪个音？",
    },
    "climb-up": {
      text: "弹第一部分：两次 C，两次 G，两次 A，然后 G。拇指弹两个 C，其余的音都由小指来弹，它要伸到 A 再回来。",
    },
    "walk-down": {
      text: "现在第二部分一级一级往下走：F、E、D、C，每个弹两次。手指依次是 4、3、2、1。",
    },
    "whole-phrase": {
      text: "把两部分连起来。不停顿地弹完整个乐句。",
    },
    recap: {
      text: "做得好！你第一次弹到了五根手指之外的琴键。",
      points: ["一段旋律可以为了一个音离开 C 手位。", "小指从 G 伸到 A。", "旋律可以大跳，比如从 C 往上跳到 G。"],
    },
  },
};
