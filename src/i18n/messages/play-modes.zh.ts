/** The play modes in Chinese. A text it leaves out shows in English. */
import type { Translation } from "../translation";
import type { playModes as en } from "./play-modes.en";

export const playModes: Translation<typeof en> = {
  eyebrow: "预备，开弹！",
  lead: "选一个模式，播放器就会自动配好合适的歌曲、合适的帮助和合适的外观。然后你来弹。",
  note: "模式会更改播放器的几项设置。开始后，点击一下就能撤销，之后也可以随时更改任何设置。",
  traits: "它会设置什么",
  song: (title: string) => `歌曲：${title}`,
  noSong: "不需要歌曲",
  start: "开始",
  groups: {
    fun: {
      heading: "弹着玩",
      lead: "得分、火花和一场表演。选一个，让钢琴给你带来乐趣。",
    },
    learn: {
      heading: "学一首歌",
      lead: "每个模式都用自己的方式帮你学歌，从一次练一只手，到看谱弹奏。",
    },
    skills: {
      heading: "练一项技巧",
      lead: "快速找音、自由弹奏，或者听听和弦是怎么构成的。有些模式完全不需要歌曲。",
    },
  },
  modes: {
    game: {
      tag: "图个开心",
      name: "游戏模式",
      text: "每弹对一个音都能得分，钢琴还会闪闪发光来回应你。冲击连击，打破你的最高分。",
      traits: ["简单难度下的得分和连击", "火花、光芒和发光的钢琴", "一首简短上口的歌"],
      song: "In the Hall of the Mountain King（入门）",
    },
    challenge: {
      tag: "高手专属",
      name: "挑战",
      text: "最高难度的游戏模式，没有音名，也没有提示。只有一遍零失误，才能拿到最高分。",
      traits: ["困难难度下的得分和连击", "没有音名，也没有琴键提示", "这首歌更难的版本"],
      song: "In the Hall of the Mountain King（中等）",
    },
    concert: {
      tag: "放松欣赏",
      name: "音乐会",
      text: "钢琴为你弹一首歌，伴着火焰、星光和移动的镜头。看表演吧，敢的话也可以一起弹。",
      traits: ["电影般的镜头", "火焰、星光和火花", "发光的钢琴和一道光波"],
      song: "Carol of the Bells（困难）",
    },
    playAlong: {
      tag: "一步一步",
      name: "跟着弹",
      text: "歌曲会在每个音上等你。每个音符都显示它的音名和指法，每个琴键也显示它的音名。",
      traits: ["音符会等你", "音符上有音名和指法", "白键和黑键上都有音名"],
      song: "Ode to Joy（入门）",
    },
    oneHand: {
      tag: "从小处开始",
      name: "一次练一只手",
      text: "先学右手，左手由应用来弹。歌曲会等你弹出每一个音。",
      traits: ["只有你的右手弹", "应用弹左手", "在设置的“你的手”下换手"],
      song: "Jingle Bells（入门）",
    },
    readMusic: {
      tag: "乐谱",
      name: "看谱弹",
      text: "乐谱显示在钢琴上方，歌曲会等你。音符上没有音名，所以你要从谱表上读出它们。",
      traits: ["钢琴上方显示乐谱", "音符会等你", "每个正在响的音后面有柔和的光"],
      song: "Mary Had a Little Lamb（入门）",
    },
    slowSteady: {
      tag: "练习",
      name: "慢慢来",
      text: "前四个小节循环播放，从一半速度开始。每一遍都会稍快一点，直到你能用原速弹。",
      traits: ["前四个小节循环播放", "先用一半速度，每遍加快", "每一遍前都有预备拍"],
      song: "Für Elise（简单）",
    },
    rhythm: {
      tag: "节奏",
      name: "节奏达人",
      text: "节拍器嘀嗒作响，你弹的每个音都按时机准不准来打分。没有音名，也不会等你，只有节拍。",
      traits: ["每一拍都有节拍器", "每个音都按时机打分", "歌曲从不等待"],
      song: "Twinkle Twinkle Little Star（简单）",
    },
    colourByFinger: {
      tag: "手指",
      name: "按手指上色",
      text: "每根手指都有自己的颜色，音符和琴键上都是。你找对手指之前，歌曲会一直等你。",
      traits: ["音符按手指上色", "琴键亮起手指的颜色", "音符会等你"],
      song: "Twinkle Twinkle Little Star（入门）",
    },
    noteTrainer: {
      tag: "认音",
      name: "认音训练",
      text: "应用说出一个音，你在琴键上找到它。最后你会看到自己把哪些音弄混了。",
      traits: ["C 大调的音，从中央 C 往上", "每轮十个音", "最后列出弄混的音"],
    },
    freeJam: {
      tag: "只有你",
      name: "自由即兴",
      text: "没有歌曲，也没有规则。随便弹什么，钢琴都会用火花和光来回应。还能录下来，存为 MIDI 文件。",
      traits: ["自由弹奏，不用歌曲", "火花、星光和发光的钢琴", "录制并保存你弹的内容"],
    },
    chordExplorer: {
      tag: "和声",
      name: "和弦探索",
      text: "歌曲播放时，每个和弦都会显示名称，以及它在调中的级数。音符上方的方块标出每个音在音阶中的位置。",
      traits: ["播放时显示和弦名称", "每个和弦都有罗马数字", "音阶级数，并标出每个根音"],
      song: "Canon in D（简单）",
    },
  },
  toast: {
    started: (name: string) => `已开启：${name}。`,
    undo: "撤销",
    undone: "你自己的设置已恢复。",
  },
};
