/** *Loud and soft* in Chinese. */
import type { Translation } from "../../../i18n/translation";
import type { LoudAndSoftTexts } from "./loud-and-soft.en";

export const loudAndSoftZh: Translation<LoudAndSoftTexts> = {
  title: "强与弱",
  steps: {
    "soft-and-loud-demo": {
      text: "听 C、D、E、F、G 弹两遍。第一遍弱，第二遍强。",
    },
    "key-speed": {
      text: "一个音有多响，取决于琴键按下去有多快。轻轻地、慢慢地按，声音就弱。按得快，声音就强。",
    },
    "what-makes-loud": {
      text: "怎样让一个音更响？",
      answers: ["把琴键按得更久", "按更靠左边的琴键", "把琴键按得更快", "按黑键"],
    },
    "play-softly": {
      text: "从中央 C 开始，弱奏 C、D、E、F、G。每个琴键都轻轻地、慢慢地按。",
    },
    "hear-softly": {
      text: "听 C、D、E、F、G 弹得很弱。每个琴键都是轻轻地、慢慢地按下去的。",
    },
    "how-softly-sounded": {
      text: "刚才这五个音听起来怎么样？",
      answers: ["弱", "强", "先弱后强", "先强后弱"],
    },
    "play-loudly": {
      text: "现在把这五个音强奏一遍。每个琴键都按得又快又稳，但千万不要用力砸。",
    },
    "hear-loudly": {
      text: "听 C、D、E、F、G 弹得很强。每个琴键都是又快又稳地按下去的。",
    },
    "how-loudly-sounded": {
      text: "刚才这五个音听起来怎么样？",
      answers: ["弱", "先弱后强", "先强后弱", "强"],
    },
    "piano-and-forte": {
      text: "乐谱用谱表下方的字母标出弹多响。记号 p 是意大利语 piano，意思是“弱”。记号 f 是意大利语 forte，意思是“强”。",
    },
    "what-f-asks": {
      text: "谱表下方有一个记号 f。它要你怎么弹？",
      answers: ["弹得弱", "弹得强", "弹得快", "弹得慢"],
    },
    "mezzo-marks": {
      text: "两者之间还有两个记号。mp 是 mezzo-piano，意思是中弱。mf 是 mezzo-forte，意思是中强。",
    },
    "softest-to-loudest": {
      text: "哪个顺序是从最弱的记号排到最强的记号？",
      answers: ["f、mf、mp、p", "mp、p、mf、f", "p、mp、mf、f", "p、f、mp、mf"],
    },
    "echo-demo": {
      text: "听一个标着 f 的乐句，再听它标着 p 的回声。音完全一样，变的只是强弱。",
    },
    "play-the-echo": {
      text: "先强奏 C、E、G，再弱奏一遍，像回声一样。这一步只检查音，强弱就交给你的耳朵来判断吧。",
    },
    recap: {
      text: "真棒！现在你会弹强和弱了。",
      points: [
        "琴键按下去有多快，决定了声音有多响。",
        "记号 p 表示弱，f 表示强。",
        "记号 mp 和 mf 在两者之间。",
      ],
    },
  },
};
