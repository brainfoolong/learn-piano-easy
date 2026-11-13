/** *The sustain pedal* in Chinese. */
import type { Translation } from "../../../i18n/translation";
import type { TheSustainPedalTexts } from "./the-sustain-pedal.en";

export const theSustainPedalZh: Translation<TheSustainPedalTexts> = {
  title: "延音踏板",
  steps: {
    "pedal-demo": {
      text: "听 C、E、G、C 弹两遍。第一遍，每个音在琴键抬起时就停了。第二遍，所有的音都一起继续响着。",
    },
    "what-the-pedal-does": {
      text: "右踏板是延音踏板。踩住它时，你松开琴键后，每个音都会继续响。",
    },
    "pedal-keeps": {
      text: "右踏板有什么作用？",
      answers: ["让每个音更响", "让音变短", "松开琴键后让音继续响", "把琴键升高一个八度"],
    },
    "foot-on-pedal": {
      text: "用右脚。脚跟放在地上，用前脚掌踩下踏板。松开踏板时也这样，动作要轻。",
    },
    "which-foot": {
      text: "你的脚怎样放在延音踏板上？",
      answers: ["左脚，脚跟悬空", "右脚，脚尖离开踏板", "左脚，脚跟放在地上", "右脚，脚跟放在地上"],
    },
    "pedal-down-c": {
      text: "踩下右踏板，一直踩住。用左手弹中央 C 下面的 C，然后弹 E，再弹 G。每个琴键都松开。",
    },
    "hear-pedal-hold": {
      text: "听 C、E、G 在踩住踏板时一个接一个地弹出来。下一个音开始时，前一个音还在继续响。",
    },
    "what-pedal-did": {
      text: "在示范里，下一个音开始后，每个音都还在继续响。是什么让它们延续的？",
      answers: ["延音踏板", "把琴键按得更重", "把音弹得更快", "右手"],
    },
    "pedal-marks": {
      text: "在谱表下方，Ped. 表示踩下踏板，星号表示松开踏板。有的乐谱改用一条括号形的线，从踩下画到松开。",
    },
    "star-means": {
      text: "谱表下方有一个星号。它告诉你的脚做什么？",
      answers: ["踩下踏板", "松开踏板", "踩两下踏板", "一直踩住踏板到最后"],
    },
    "chords-without-pedal": {
      text: "先不用踏板，用左手学四个分解和弦。从中央 C 下面的 C 开始：C、E、G，然后 C、F、A，然后 B、D、G，最后再弹 C、E、G。",
    },
    "chords-blur": {
      text: "如果踏板从一个和弦一直踩到下一个和弦，两个和弦会同时响，混在一起。所以每换一个新和弦，就要换一次踏板。",
    },
    "change-the-pedal": {
      text: "弹同样的和弦。每个和弦之前，先松开踏板，弹它的第一个音。然后踩下踏板，弹它另外两个音。",
    },
    "hear-pedal-change": {
      text: "听这四个和弦，每个和弦都换一次踏板。每个和弦都继续响着，下一个和弦开始时就干净地停下。",
    },
    "why-change": {
      text: "为什么每换一个新和弦都要换踏板？",
      answers: ["为了弹得更响", "为了让脚休息", "为了不让和弦混在一起", "为了让音更短"],
    },
    recap: {
      text: "真棒！现在你的右脚也一起弹琴了。",
      points: [
        "松开琴键后，右踏板让音继续响。",
        "用右脚踩它，脚跟放在地上。",
        "Ped. 表示踩下踏板，星号表示松开踏板。",
        "每换一个新和弦就换一次踏板，和弦就不会混在一起。",
      ],
    },
  },
};
