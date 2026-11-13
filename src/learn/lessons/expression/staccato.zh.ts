/** *Staccato* in Chinese. */
import type { Translation } from "../../../i18n/translation";
import type { StaccatoTexts } from "./staccato.en";

export const staccatoZh: Translation<StaccatoTexts> = {
  title: "跳音",
  steps: {
    "staccato-demo": {
      text: "听 C 往上到 G，再回到 C。每个音都很短，后面跟着一小段安静。",
    },
    "short-and-detached": {
      text: "弹得短促、断开，叫作跳音。每个音都分开站着，就像雨点轻轻敲在窗户上。",
    },
    "what-staccato-means": {
      text: "跳音是什么意思？",
      answers: ["短促而断开", "圆滑而连贯", "又慢又弱", "越来越响"],
    },
    "the-dot": {
      text: "符头上方或下方的一个小圆点，要你弹跳音。附点音符的附点在符头旁边，它让音符变长。",
    },
    "where-the-dot-sits": {
      text: "跳音的圆点在哪里？",
      answers: ["在符头右边", "在小节的末尾", "在符头上方或下方", "在符干顶端"],
    },
    bounce: {
      text: "弹跳音时，手指从琴键上弹起来，就像球从地板上弹起。用手腕轻轻地弹，让琴键马上弹回去。",
    },
    "both-hands-bounce": {
      text: "双手一起弹 C、E、G、E、C，右手从中央 C 开始，左手低一个八度。每个音弹完都像球一样从琴键上跳起来。",
    },
    "contrast-demo": {
      text: "听同样的五个音弹两遍。一遍是连奏，另一遍是跳音。",
    },
    "which-came-first": {
      text: "这两个乐句听起来怎么样？",
      answers: ["都很短", "先圆滑，后短促", "先短促，后圆滑", "都很圆滑"],
    },
    "mixing-both": {
      text: "音乐常常把两者混在一起。圆滑线把一些音连起来，圆点让另一些音变短。",
    },
    "mixed-phrase": {
      text: "从中央 C 开始，在圆滑线下连奏 C、D、E、F、G。然后再弹三个短促的 G。",
    },
    "dot-above-quiz": {
      text: "一个音符上方有一个小圆点。怎么弹它？",
      answers: ["圆滑地连到下一个音", "弹两倍长", "用踏板保持", "短促地从琴键上弹起"],
    },
    "bounced-chords": {
      text: "右手从中央 C 开始，用跳音弹和弦：C 大三和弦弹两次，然后弹 F 大三和弦（C、F、A）、G 大三和弦（B、D、G），最后再弹 C 大三和弦。",
    },
    "which-lets-go-early": {
      text: "哪种弹法里，手指在下一个音之前很早就离开琴键？",
      answers: ["跳音", "连奏", "在圆滑线下", "弹全音符时"],
    },
    recap: {
      text: "真棒！现在你会弹得短促、断开了。",
      points: [
        "跳音的意思是短促而断开。",
        "符头上方或下方的圆点标出跳音。",
        "用手腕轻轻地从琴键上弹起。",
        "连奏把音连起来，跳音把音分开。",
      ],
    },
  },
};
