/** *Legato* in Chinese. */
import type { Translation } from "../../../i18n/translation";
import type { LegatoTexts } from "./legato.en";

export const legatoZh: Translation<LegatoTexts> = {
  title: "连奏",
  steps: {
    "legato-demo": {
      text: "听 C 往上到 G，再回到 C。每个音都流进下一个音，中间没有空隙。",
    },
    "smooth-and-connected": {
      text: "弹得圆滑、连贯，叫作连奏。音和音连在一起，就像一口气唱完的一句歌词。",
    },
    "what-legato-means": {
      text: "连奏是什么意思？",
      answers: ["非常响", "非常快", "每个音后面都有休止符", "圆滑而连贯"],
    },
    "hand-over": {
      text: "连奏时，下一个琴键按下的同时，松开前一个琴键。一个手指抬起，下一个手指落下。",
    },
    "five-notes-legato": {
      text: "从中央 C 开始，用 1～5 指弹 C、D、E、F、G。每个音都交接给下一个音，不留空隙。",
    },
    "when-to-let-go": {
      text: "你在弹连奏。手指什么时候离开琴键？",
      answers: ["下一个琴键按下之前", "下一个琴键按下的同时", "下一个琴键按下很久之后", "只在乐曲结束时"],
    },
    "the-slur": {
      text: "一组音符上方或下方的弧线叫作圆滑线。它要你把这些音连奏。",
    },
    "what-a-slur-asks": {
      text: "一条弧线连着五个音符。怎么弹它们？",
      answers: ["每个都弹得短", "越来越响", "圆滑而连贯", "同时弹"],
    },
    "slurred-phrase": {
      text: "一条圆滑线连着这个乐句：G、F、E、D、C，然后是 D 和 E。把它连奏出来，一个手指把音交接给下一个手指。",
    },
    "fingers-make-it": {
      text: "连奏时，接下来的每个音都需要一个空闲的手指去弹。弹音阶时，拇指从下面穿过去，线条就不会断。",
    },
    "scale-legato": {
      text: "从中央 C 往上弹 C 大调音阶，用 1、2、3 指，然后拇指穿过去弹 F。每个音都和下一个音连在一起。",
    },
    "which-move-keeps-it-smooth": {
      text: "你在连奏 C 大调上行音阶。用 3 指弹完 E 后，怎么到 F？",
      answers: ["拇指穿过去弹 F", "抬起手跳到 F", "再用 3 指弹 F", "跳过 F 不弹"],
    },
    "both-hands-legato": {
      text: "双手一起从 C 弹到 G，左手低一个八度。两只手都要弹得圆滑。",
    },
    "which-is-legato": {
      text: "哪些音要连奏？",
      answers: ["每个后面都有休止符的音", "都在同一个琴键上的音", "离得很远、需要跳过去的音", "圆滑线下的音"],
    },
    recap: {
      text: "真棒！现在你会弹得圆滑、连贯了。",
      points: [
        "连奏的意思是圆滑而连贯。",
        "下一个琴键按下的同时，松开前一个琴键。",
        "圆滑线，也就是那条弧线，标出要连奏的音。",
        "好的指法，比如拇指穿过去，能让线条连在一起。",
      ],
    },
  },
};
