/** The first setup of *Learn Piano* in Chinese. A text it leaves out shows in English. */
import { formatNumber } from "../format";
import type { Translation } from "../translation";
import type { learnSetup as en } from "./learn-setup.en";

export const learnSetup: Translation<typeof en> = {
  title: "欢迎来到学钢琴",
  welcome: "你好！我是你的钢琴老师。先回答三个小问题，然后我们就开始弹琴。",
  mascot: "你的钢琴老师，一只蜂蜜色毛发、穿着灯芯绒外套的猿",
  close: "跳过设置",
  progress: "初始设置",
  steps: ["你的钢琴", "你的基础", "你的每日目标"],
  doneStep: "完成",
  next: "继续",
  device: {
    question: "你要用什么来弹？",
    midi: { name: "MIDI 键盘", text: "通过 USB 连接的电钢琴或电子琴。" },
    computer: { name: "电脑键盘", text: "用字母键弹音。" },
    screen: { name: "屏幕", text: "点击屏幕上的琴键。" },
    noMidi: "这个浏览器不支持 MIDI。改用电脑键盘或屏幕来弹吧。",
    check: "按任意一个键，确认我们能听到。",
    checkMidi: "按一下 MIDI 键盘上的任意琴键。",
    checkComputer: "按一个字母键，比如 Q、W 或 E。",
    checkScreen: "点击下面的一个琴键。",
    heard: (note: string) => `听到了：这是 ${note}。`,
    keys: "试弹的钢琴",
    skip: "跳过检查",
    marks: { next: "试试这个琴键", correct: "听到了", mistake: "听到了" },
  },
  before: {
    question: "你以前弹过钢琴吗？",
    never: "从没弹过",
    little: "弹过一点",
    yes: "弹过，我会弹",
    skipTests: "地图上的每个世界都有跳级测试。通过它，就能一次开放这个世界的每一课。",
  },
  goal: {
    question: "每天练多少？",
    lead: "每天达成目标，连续练习天数就会增加。拿三颗星学完新的一课，可以得到 30 XP。",
    label: "每日目标",
    names: { "10": "轻松", "20": "稳步", "30": "认真", "50": "挑战" },
    option: (xp: number, name: string) => `${formatNumber("zh", xp)} XP，${name}`,
    start: "开始学习",
  },
};
