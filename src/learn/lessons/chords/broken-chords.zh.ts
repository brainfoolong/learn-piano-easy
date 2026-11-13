/** *Broken chords* in Chinese. */
import type { Translation } from "../../../i18n/translation";
import type { BrokenChordsTexts } from "./broken-chords.en";

export const brokenChordsZh: Translation<BrokenChordsTexts> = {
  title: "分解和弦",
  steps: {
    "broken-demo": {
      text: "听 C 大三和弦一次弹一个音。它先往上走，再往下回来。你仍然能听出这个和弦。",
    },
    "one-after-another": {
      text: "分解和弦就是把和弦的音一个接一个地弹，而不是同时弹。音还是那些音，所以和弦也一样。",
    },
    "chord-together": {
      text: "先同时弹 C 大三和弦：从中央 C 起，用 1、3、5 指弹 C、E、G。",
    },
    "broken-up": {
      text: "现在把它分解开。手不动，依次弹 C、E、G。",
    },
    "which-chord-broken": {
      text: "你一个一个地弹了 C、E、G。你弹的是什么和弦？",
      answers: ["F 大三和弦", "C 大三和弦", "A 小三和弦", "G 大三和弦"],
    },
    "up-and-down": {
      text: "分解和弦常常先往上再往下：C、E、G、E。一遍又一遍地弹，它就像波浪一样来回起伏。",
    },
    "broken-up-and-down": {
      text: "把 C、E、G、E 弹两遍，最后落在 C 上。手保持不动，让手指来回弹。",
    },
    "three-chords-broken": {
      text: "从中央 C 开始，用右手分解三个和弦：C、E、G、E；F、A、C、A；G、B、D、B。最后弹 C、E、G 结束。每换一个和弦，手就跟着移动。",
    },
    "which-is-broken": {
      text: "下面哪一个是分解的 C 大三和弦？",
      answers: ["C、D、E、F", "C、D、C、D", "E、F、G、A", "C、E、G、E"],
    },
    "left-hand-broken": {
      text: "左手常常在旋律下面弹分解和弦。右手唱出旋律时，左手让和弦一直响着。",
    },
    "left-hand-demo": {
      text: "听一段短旋律。左手先分解 C 大三和弦，然后是 G 大三和弦，最后又回到 C 大三和弦。",
    },
    "left-hand-alone": {
      text: "单独弹左手，从中央 C 下面的 C 开始：先弹 C、E、G、E，然后从往下最近的 G 开始弹 G、B、D、B，最后弹 C、E、G、E。",
    },
    "tune-over-broken-chords": {
      text: "现在用右手在 C 手位上加上旋律。每个旋律音都和一个左手音同时开始。",
    },
    recap: {
      text: "做得好。现在你的双手都能弹分解和弦了。",
      points: [
        "分解和弦把它的音一个接一个地弹出来。",
        "音还是那些音，所以和弦听起来也一样。",
        "一种常见的音型是先往上再往下：C、E、G、E。",
        "左手常常在旋律下面弹分解和弦。",
      ],
    },
  },
};
