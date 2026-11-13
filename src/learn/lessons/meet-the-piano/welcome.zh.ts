/** *Welcome to the piano* in Chinese. */
import type { Translation } from "../../../i18n/translation";
import type { WelcomeTexts } from "./welcome.en";

export const welcomeZh: Translation<WelcomeTexts> = {
  title: "欢迎来到钢琴世界",
  steps: {
    hello: {
      text: "欢迎！在这里，你一小步一小步地学钢琴。每一课教你一个知识点，你马上就能试一试。",
    },
    "sound-check": {
      text: "先来检查一下声音。钢琴会弹四个音。如果你什么也听不到，把音量调大，再点击“再听一遍”。",
    },
    "ways-to-play": {
      text: "每一课都可以在屏幕上的琴键、电脑键盘或 MIDI 键盘上弹。要用 MIDI 键盘，先把它接上，再在播放器的设置里点击一次“连接 MIDI 设备”。",
    },
    "ways-quiz": {
      text: "你可以在什么上弹一课？",
      answers: ["只能在 MIDI 键盘上", "只能在屏幕上的琴键上", "哪个都行：屏幕、电脑键盘或 MIDI 键盘"],
    },
    "first-key": {
      text: "你的第一个音！按下标出的琴键。",
    },
    "three-keys": {
      text: "现在是连在一起的三个琴键。从左到右，弹每个标出的琴键。",
    },
    recap: {
      text: "做得好。你已经弹出了最初的几个音。",
      points: ["声音检查告诉你，你能听到钢琴的声音。", "你可以在屏幕、电脑键盘或 MIDI 键盘上弹。", "标出的琴键总是你下一个要弹的。"],
    },
  },
};
