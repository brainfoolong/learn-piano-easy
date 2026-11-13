/** *Hands apart, then together* in Chinese. */
import type { Translation } from "../../../i18n/translation";
import type { HandsApartThenTogetherTexts } from "./hands-apart-then-together.en";

export const handsApartThenTogetherZh: Translation<HandsApartThenTogetherTexts> = {
  title: "先分手，再合手",
  steps: {
    "three-passes": {
      text: "把一段短小的旋律听三遍。先是右手弹，然后是左手，最后双手一起弹。",
    },
    "why-apart": {
      text: "一只手单独练，学起来更容易。等两只手都熟悉了各自的音，再把它们合在一起。",
    },
    "first-step-quiz": {
      text: "你开始练一首新的双手曲子。先练什么？",
      answers: ["每只手单独练", "双手一起练，直接用原速", "只练左手，从不练右手"],
    },
    "right-alone": {
      text: "先练右手。从中央 C 开始，弹 C、D、E、D、C。",
    },
    "left-alone": {
      text: "现在单独练左手。从低一个八度的 C 开始，弹同样的 C、D、E、D、C。",
    },
    "together-steps": {
      text: "现在双手一起弹。每一对琴键都要同时按下，开头两只手各弹一个 C。",
    },
    "slow-together": {
      text: "双手一起弹是新的技巧，所以要慢慢来。等两只手合在一起都有把握了，再加快速度。",
    },
    "mirror-tune": {
      text: "这是一段新旋律。你的两只手先向两边分开，再回到一起，就像照镜子一样。",
    },
    "mirror-right": {
      text: "单独练右手。弹 E、F、G、F、E。",
    },
    "mirror-left": {
      text: "单独练左手。从中央 C 下面的 E 开始，弹 E、D、C、D、E。右手刚才往上走，这次左手往下走。",
    },
    "mirror-together": {
      text: "现在把两只手合起来。慢慢来，每一对琴键都要同时按下。",
    },
    recap: {
      text: "做得好！你第一次用双手同时弹琴了。",
      points: [
        "学新曲子时，先每只手单独练。",
        "然后慢慢地把双手合起来。",
        "两只手可以朝同一个方向走，也可以朝相反的方向走。",
      ],
    },
  },
};
