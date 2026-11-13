/** The Chinese catalog. It is a translation of the English one, so a text it leaves out shows in English. */
import { formatNumber } from "../format";
import type { Translation } from "../translation";
import { dataPage } from "./data.zh";
import { en, type Messages } from "./en";
import { learnBadges } from "./learn-badges.zh";
import { learnLesson } from "./learn-lesson.zh";
import { learnMap } from "./learn-map.zh";
import { learnProfile } from "./learn-profile.zh";
import { learnSetup } from "./learn-setup.zh";
import { playerBar } from "./player-bar.zh";
import { playerInput } from "./player-input.zh";
import { playerLibrary } from "./player-library.zh";
import { playerSettings } from "./player-settings.zh";
import { playerShell } from "./player-shell.zh";
import { playModes } from "./play-modes.zh";
import { sponsorPage } from "./sponsor.zh";

const SITE_NAME = en.siteName;

export const zh: Translation<Messages> = {
  noscript: `${SITE_NAME} 需要 JavaScript 才能运行。`,
  pages: {
    home: {
      description: "边弹边学钢琴。有引导课程、3D 钢琴，还能连你的 MIDI 键盘。免费、开源、离线可用。",
    },
    play: {
      title: "随心弹琴",
      description: "打开一个 MIDI 文件，看着音符飞向 3D 钢琴，在你的 MIDI 键盘上跟着弹。",
    },
    modes: {
      title: "弹奏模式",
      description: "现成的弹法：有得分和火花的游戏，或者一首会等你、把每个音都标出名字的歌。",
    },
    learn: {
      title: "学钢琴",
      description: "像游戏一样的钢琴引导课程，一次一小步。",
    },
    profile: {
      title: "你的进度",
      description: "你的等级、你的徽章，以及你弹了多少。",
    },
    about: {
      title: "关于",
      description: "Learn Piano Easy 是什么，以及它所含全部内容的许可证。",
    },
    data: {
      title: "你的数据",
      description: "把这个浏览器里的所有内容存成一个文件，在任何设备上都能恢复。",
    },
    sponsor: {
      title: "赞助",
      description: "Learn Piano Easy 是免费的，由一个人制作。这里介绍你可以怎样帮它成长。",
    },
    imprint: {
      title: "法律声明",
      description: "谁在运营 Learn Piano Easy，以及地址和联系方式。",
    },
    privacy: {
      title: "隐私政策",
      description: "Learn Piano Easy 在你的设备上保存什么、统计什么，以及怎样关闭统计。",
    },
    design: {
      title: "设计系统",
      description: "网站的每个组件，以及它们的每种状态。",
    },
    lesson: {
      title: "课",
      description: "学钢琴里的一节短课，一次一步。",
    },
  },
  lessonPage: {
    description: (title: string, world: string, intro: string) => `${title}。来自“${world}”的免费钢琴课。${intro}`,
  },
  topBar: {
    home: `${SITE_NAME}，首页`,
    nav: "主导航",
    learn: "学钢琴",
    play: "随心弹琴",
    modes: "弹奏模式",
    menu: "菜单",
    language: "语言",
    theme: "主题",
    themeSystem: "跟随系统",
    themeLight: "浅色",
    themeDark: "深色",
  },
  landing: {
    hero: {
      eyebrow: "免费且开源",
      lead: "看着音符落到琴键上，然后自己来弹，一次一首歌。",
      start: "开始学习",
      play: "随心弹",
      proofs: ["无需账号", "离线可用", "没有广告"],
      mascot: "我们的钢琴老师，一只蜂蜜色毛发的猿，在洒满阳光的房间里弹立式钢琴",
      greeting: "你好！我是你的钢琴老师。我们一起弹琴吧？",
      demo: {
        eyebrow: "在这里试试",
        heading: "音符落下，你来弹",
        text: "每首歌都是这样。每个音符落到它的琴键上，在它落下的那一刻按下琴键。",
      },
      piano: "播放器，《小星星》的音符正落到琴键上",
      hint: "开始播放后，按它的琴键一起弹。",
      playSong: "播放",
      stopSong: "停止",
    },
    twoWays: {
      eyebrow: "两种弹法",
      heading: "一步步学，或者随心弹",
      lead: "选一个适合你今天的方式。随时都可以切换。",
      learn: {
        tag: "引导课程",
        title: "学钢琴",
        text: "由一个个小步骤组成的引导课程。每一步教一项技能，再用一首歌把它用起来。",
        action: "开始学习",
        picture: "课程地图，第一课已完成，下一课已开放",
      },
      play: {
        tag: "任意歌曲",
        title: "随心弹琴",
        text: "打开任意一首歌，看着音符飞向 3D 钢琴，跟着一起弹。",
        action: "随心弹",
        picture: "3D 钢琴，音符正落到琴键上",
      },
    },
    howItWorks: {
      eyebrow: "怎样学习",
      heading: "四个步骤，循环往复",
      lead: "每一课都走同样简短的流程，所以你总是知道接下来做什么。",
      steps: [
        { title: "学一项技能", text: "一节短课讲一样新东西，比如一个音、一种节奏或一个手位。" },
        { title: "练习它", text: "在你自己的键盘上弹。钢琴会等你，并标出每个弹对的音。" },
        { title: "弹一首真正的歌", text: "在曲库的一首歌里用上这项技能，难度正好适合你。" },
        { title: "赢得徽章", text: "每一课都能得到 XP，每完成一个世界就能得到一枚徽章。" },
      ],
    },
    rarities: {
      eyebrow: "一段旋律，四种难度",
      heading: "每首歌都和你一起成长",
      lead: "我们的每首歌都有四个版本。在它们之间切换，看看《欢乐颂》怎样成长。",
      control: "版本",
      piano: "一架正在弹《欢乐颂》的钢琴",
      names: { common: "入门", rare: "简单", epic: "中等", legendary: "困难" },
      taglines: {
        common: "最初的几天。一个手位、慢慢的音符，还有一个等你的低音。",
        rare: "最初的几周。八分音符、简单的和弦，还有会动的低音。",
        epic: "最初的几个月。分解和弦，还有穿指。",
        legendary: "大约一年后。两只手都很忙，又快又独立。",
      },
    },
    devices: {
      eyebrow: "有什么就用什么弹",
      heading: "没有钢琴？照样开始",
      lead: "这些都能弹出音。真正的键盘手感最好，其他的让你今天就能开始。",
      ways: [
        { title: "MIDI 键盘", text: "用 USB 连上，只需允许一次 MIDI。之后网站会自动找到它。" },
        { title: "触摸屏", text: "点击屏幕上的琴键，想用几根手指都行。" },
        { title: "你的电脑键盘", text: "字母键和数字键能弹两个八度，你也可以把任何音换到另一个按键上。" },
      ],
      piano: "一架可以试弹的小钢琴",
      start: "加载小钢琴来弹",
      hint: "点击一个琴键，听听它的声音。",
    },
    free: {
      eyebrow: "免费，而且属于你",
      heading: "不用付钱，不用注册",
      lead: "这个网站是一位热爱钢琴的人送出的礼物。它会一直免费。",
      promises: [
        { title: "免费，无需账号", text: "打开网站就能弹。不用注册，也没有要买的东西。" },
        { title: "开源", text: "每一行代码都在 MIT 许可证下公开。你可以阅读、修改和分享。" },
        { title: "离线可用", text: "加载一次后，网站不联网也能运行。打开过的歌曲也能离线播放。" },
        { title: "没有广告，没有用户画像", text: "你弹的任何内容都不会离开你的设备。我们只统计页面访问，不用 Cookie，也不卖任何东西。" },
      ],
    },
    questions: {
      eyebrow: "常见问题",
      heading: "大家最先问的问题",
      items: [
        {
          question: "我需要一架钢琴吗？",
          answer: "不需要。MIDI 键盘最好，但触摸屏或电脑键盘也能弹出每个音。",
        },
        {
          question: "哪些浏览器可以用？",
          answer: "任何新版浏览器都能播放。MIDI 键盘需要 Web MIDI，Chrome、Edge 和 Firefox 支持，Safari 不支持。",
        },
        {
          question: "我需要账号吗？",
          answer: "不需要。没有什么要注册的，你的设置保存在这个浏览器里。",
        },
        {
          question: "能离线使用吗？",
          answer: "能。联网时打开一次网站，之后就能离线运行。一首歌打开过一次后，也能离线播放。",
        },
        {
          question: "我能弹自己的歌吗？",
          answer: "能。在随心弹琴里打开任意 MIDI 或 MusicXML 文件。文件在你的设备上读取，绝不会上传。",
        },
        {
          question: "曲库里有哪些歌？",
          answer: "我们自己改编的知名旋律，每首都有四个版本，还有几首我们原创的曲子，以及来自开放曲集的古典乐曲。",
        },
        {
          question: "真的免费吗？",
          answer: "真的。它在 MIT 许可证下开源，没有广告，也没有付费版本。",
        },
      ],
    },
    lastCall: {
      heading: "随时等你开始",
      lead: "选一个入口。随时都可以切换。",
    },
  },
  footer: {
    tagline: "边弹边学钢琴。免费、开源、离线可用。",
    nav: "网站",
    explore: "浏览",
    about: "关于与许可证",
    legal: "法律信息",
    language: "本页的其他语言",
    license: "在 MIT 许可证下开源。",
  },
  counts: {
    badges: (n: number) => `${formatNumber("zh", n)} 枚徽章`,
    minutesPlayed: (n: number) => `弹了 ${formatNumber("zh", n)} 分钟`,
  },
  lesson: learnLesson,
  badges: learnBadges,
  map: learnMap,
  profile: learnProfile,
  setup: learnSetup,
  data: dataPage,
  sponsor: sponsorPage,
  playModes,
  player: { shell: playerShell, bar: playerBar, library: playerLibrary, input: playerInput, settings: playerSettings },
  ui: {
    pianoKeys: {
      noWebgl: "这个浏览器无法绘制钢琴。在它的设置里打开硬件加速，或者用 MIDI 键盘或电脑键盘来弹。",
    },
  },
};
