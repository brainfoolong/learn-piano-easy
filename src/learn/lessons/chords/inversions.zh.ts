/** *Inversions* in Chinese. */
import type { Translation } from "../../../i18n/translation";
import type { InversionsTexts } from "./inversions.en";

export const inversionsZh: Translation<InversionsTexts> = {
  title: "转位",
  steps: {
    "inversions-demo": {
      text: "听三个和弦。每个都由 C、E、G 这三个音组成，只是顺序不同。",
    },
    "same-three-notes": {
      text: "C 在最下面的 C、E、G 是原位。转位就是把同样的三个音换一种顺序来弹。它仍然是 C 大三和弦。",
    },
    "root-position": {
      text: "弹原位的 C 大三和弦：从中央 C 起，C、E、G 一起弹。用 1、3、5 指。",
    },
    "first-inversion": {
      text: "现在把最下面的音移高一个八度。C、E、G 就变成 E、G、C。这是第一转位。",
    },
    "play-first-inversion": {
      text: "弹第一转位：中央 C 上面的 E 和 G，再加上它们上面的 C。三个琴键一起按下。",
    },
    "which-chord-is-e-g-c": {
      text: "E、G、C 听起来和 C、E、G 有点不一样。它是什么和弦？",
      answers: ["A 小三和弦", "E 小三和弦", "C 大三和弦"],
    },
    "second-inversion": {
      text: "再把最下面的音移高一次。E、G、C 就变成 G、C、E。这是第二转位。",
    },
    "play-second-inversion": {
      text: "弹第二转位：中央 C 上面的 G，再加上它上面紧接着的 C 和 E。三个琴键一起按下。",
    },
    "climb-the-inversions": {
      text: "用 C 大三和弦沿着琴键往上走：原位、第一转位、第二转位，再到高一个八度的原位。",
    },
    "move-less": {
      text: "有了转位，手在和弦之间就能少移动。F 大三和弦弹成 C、F、A，G 大三和弦弹成 B、D、G，它们都紧挨着 C、E、G。",
    },
    "close-chords-demo": {
      text: "再听一次 C、F、G、C，这次和弦弹得很紧凑。每根手指只移动一两个琴键。",
    },
    "which-chord-is-c-f-a": {
      text: "C、F、A 是把 F、A、C 这三个音换了顺序。它是什么和弦？",
      answers: ["C 大三和弦", "F 大三和弦", "A 小三和弦"],
    },
    "close-chords": {
      text: "从中央 C 开始，依次弹 C、E、G；C、F、A；B、D、G；C、E、G。手留在原处，让手指移动。",
    },
    "close-chords-with-bass": {
      text: "现在在每个和弦下面，用左手加上根音：中央 C 下面的 C、F、G、C。",
    },
    recap: {
      text: "做得好。现在你能用三种位置弹一个和弦了。",
      points: [
        "转位就是把和弦的三个音换一种顺序来弹。",
        "把最下面的音移高一个八度：C、E、G 变成 E、G、C，再变成 G、C、E。",
        "和弦不变：E、G、C 和 G、C、E 仍然是 C 大三和弦。",
        "转位让和弦靠得更近，手就少移动。",
      ],
    },
  },
};
