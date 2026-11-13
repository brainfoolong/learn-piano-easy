/** *Crescendo and diminuendo* in Chinese. */
import type { Translation } from "../../../i18n/translation";
import type { CrescendoAndDiminuendoTexts } from "./crescendo-and-diminuendo.en";

export const crescendoAndDiminuendoZh: Translation<CrescendoAndDiminuendoTexts> = {
  title: "渐强与渐弱",
  steps: {
    "crescendo-demo": {
      text: "听 C、D、E、F、G。每个音都比前一个稍微响一点。",
    },
    "getting-louder": {
      text: "声音一点一点变响，叫作渐强（crescendo）。乐谱上写作 cresc.，或者画一个张开的渐强记号 <，它随着声音变响而张开。",
    },
    "what-cresc-asks": {
      text: "谱表下方写着 cresc.。它要你怎么弹？",
      answers: ["一点一点变弱", "一点一点变强", "弹得更快", "弹得更高"],
    },
    "play-crescendo": {
      text: "从中央 C 开始，渐强地弹 C、D、E、F、G。C、D、E 轻轻地、慢慢地按，F 和 G 按得又快又稳。",
    },
    "hear-crescendo": {
      text: "听 C、D、E、F、G 的渐强。每个琴键都比前一个按得稍快一点。",
    },
    "how-crescendo-changed": {
      text: "从第一个音到最后一个音，声音有什么变化？",
      answers: ["一直很弱", "越来越弱", "一直很强", "越来越强"],
    },
    "diminuendo-demo": {
      text: "现在听 G、F、E、D、C。每个音都比前一个稍微轻一点。",
    },
    "getting-softer": {
      text: "声音一点一点变轻，叫作渐弱（diminuendo），写作 dim.。它也叫 decrescendo，写作 decresc.。收拢的渐弱记号 > 也是同样的意思。",
    },
    "which-hairpin-softer": {
      text: "哪个记号要你一点一点变弱？",
      answers: ["收拢的渐弱记号 >", "张开的渐强记号 <", "记号 f", "记号 mf"],
    },
    "play-diminuendo": {
      text: "从中央 C 上面的 G 开始，渐弱地弹 G、F、E、D、C。G、F、E 按得又快又稳，D 和 C 轻轻地、慢慢地按。",
    },
    "hear-diminuendo": {
      text: "听 G、F、E、D、C 的渐弱。每个琴键都比前一个按得稍慢一点。",
    },
    "how-diminuendo-changed": {
      text: "从第一个音到最后一个音，声音有什么变化？",
      answers: ["越来越强", "一直很强", "越来越弱", "一直很弱"],
    },
    "swell-and-fade": {
      text: "一个乐句往上走时常常渐强，往下走时常常渐弱。它像波浪一样涌起，又退去。",
    },
    "play-swell": {
      text: "从中央 C 弹到 G，再弹回 C。往上走时渐强，往下走时渐弱。这一步只检查音，强弱就交给你的耳朵来判断吧。",
    },
    "how-it-ends": {
      text: "一个乐句以 p 开始，下方有一个张开的渐强记号 <。它结束时应该怎样？",
      answers: ["比 p 更弱", "和开始时一样弱", "比开始时更快", "比开始时更强"],
    },
    recap: {
      text: "真棒！现在你会让音乐变强和变弱了。",
      points: [
        "渐强就是越来越响，写作 cresc. 或张开的渐强记号 <。",
        "渐弱就是越来越轻，写作 dim.、decresc. 或收拢的渐弱记号 >。",
        "一个乐句常常往上走时渐强，往下走时渐弱。",
      ],
    },
  },
};
