/** The player's settings up to the notes, in Chinese. A text it leaves out shows in English. */
import type { Translation } from "../translation";
import type { playerSettingsPlay as en } from "./player-settings-play.en";

export const playerSettingsPlay: Translation<typeof en> = {
  // Site
  siteTheme: {
    label: "网站主题",
    help: "网站页面的颜色。钢琴和轨道的颜色由场景主题决定。",
    options: { system: "跟随系统", light: "浅色", dark: "深色" },
  },
  language: {
    label: "语言",
    help: "选择“跟随浏览器”时，如果网站有浏览器的语言，就用这种语言打开。",
    options: { auto: "跟随浏览器" },
  },
  learnSounds: {
    label: "奖励音效",
    help: "学钢琴在你通过一步、得到一颗星、升级或获得徽章时播放的提示音。钢琴的声音始终会响。",
  },
  learnDailyGoal: {
    label: "每日目标",
    help: "学钢琴每天需要获得的 XP，达到后才能保持连续练习天数。",
  },
  learnSetupDone: {
    label: "已完成首次访问",
    help: "你第一次访问时，学钢琴会显示简短的初始设置，直到你完成它。",
  },
  expertControls: {
    label: "专家工具",
    help: "控制栏上的“专家”按钮会显示速度、移调、循环的第一个和最后一个小节、适配缩放，以及视角的左右移动。",
  },
  // General
  theme: {
    label: "场景主题",
    help: "设置钢琴和轨道的颜色。播放器的其余部分由顶栏中的网站主题决定。",
    options: { dark: "深色", light: "浅色" },
  },
  yourData: {
    label: "备份或恢复你的数据",
    help: "打开一个页面，把你的设置、进度、歌曲和得分保存到一个文件中，也可以从中恢复。",
  },
  startWithLastSong: {
    label: "启动时重新打开上一首歌",
    help: "每次打开播放器时，都会打开你上次弹的歌曲。",
  },
  saveIndexedDb: {
    label: "把你的文件保存在这个浏览器中",
    help: "你从电脑中打开的歌曲，在页面重新加载后仍会留在曲库中。",
  },
  disableHotkeys: {
    label: "关闭快捷键",
    help: "电脑键盘的按键不再用于播放、跳转或循环歌曲。",
  },
  hotKeyBindings: {
    label: "快捷键",
    help: "用于播放、跳转、循环和缩放歌曲的按键。",
  },
  leadIn: {
    label: "第一个音之前的时间（秒）",
    help: "每首歌都会在第一个音之前留出这段时间，每次从结尾重新播放时也会再等这么久。",
  },
  restartSongOnEnd: {
    label: "歌曲结束后重新开始",
    help: "最后一个音之后，歌曲会从头再播放一遍。",
  },
  playNotesOnScrollEnabled: {
    label: "拖动时间轴时播放音符",
    help: "你在歌曲中拖动时，会听到经过的每个音。",
  },
  fitZoomOnNewSong: {
    label: "为每首新歌适配缩放",
    help: "你打开的歌曲会完整地显示在钢琴前方的轨道中。",
  },
  transposeOffset: {
    label: "移调（半音）",
    help: "把歌曲的每个音往上或往下移。",
  },
  reverseNoteDirection: {
    label: "反转音符方向",
    help: "音符会远离钢琴移动，而不是朝钢琴移动。",
  },
  renderOffset: {
    label: "画面偏移（ms）",
    help: "让画面比声音晚一些显示，低于 0 时则提前显示。",
  },
  showBPM: {
    label: "以 BPM 显示速度",
    help: "在场景上方、每秒帧数旁边显示歌曲当前每分钟的拍数。",
  },
  showFps: {
    label: "显示每秒帧数",
    help: "显示场景每秒绘制多少幅画面。数字低表示画面运行缓慢。",
  },
  showNoteDebugInfo: {
    label: "悬停时显示音符详情",
    help: "指向一个音符时，会显示它的音高、时间、时长和力度。",
  },
  showMilliseconds: {
    label: "在时间轴上显示毫秒",
    help: "时间轴上的时间也会显示到千分之一秒。",
  },
  progressBarMeasures: {
    label: "以小节显示时间轴",
    help: "时间轴按小节计数，而不是按分和秒。",
  },
  progressBarMeasureLines: {
    label: "在时间轴上显示小节线",
    help: "在时间轴上每个小节开始的地方画一条细线。",
  },
  showMarkersTimeline: {
    label: "在时间轴上显示标记",
    help: "在时间轴上显示歌曲自带的标记，例如主歌或副歌。",
  },
  // Loop
  enableLoop: {
    label: "循环播放一段",
    help: "反复播放下面设定的小节，方便你练习。",
  },
  loopStart: {
    label: "循环的第一个小节",
    help: "循环从这个小节的开头开始。",
  },
  loopEnd: {
    label: "循环的最后一个小节",
    help: "循环在这个小节的结尾结束。",
  },
  loopDelay: {
    label: "预备拍（拍）",
    help: "每一遍循环之前播放的拍数。",
  },
  enableLoopBeats: {
    label: "预备拍时发出滴答声",
    help: "预备拍的每一拍都会响一声滴答。",
  },
  autoLoop: {
    label: "每一遍立即开始",
    help: "关闭时，每一遍结束后歌曲会停在预备拍处。",
  },
  muteLoop: {
    label: "循环以外的部分静音",
    help: "只有循环小节中的音会响。",
  },
  loopTrainer: {
    label: "循环训练",
    help: "从慢速开始，每一遍后速度增加 5%，直到 100%。",
  },
  loopTrainerSpeed: {
    label: "循环训练起始速度（%）",
    help: "循环训练第一遍的速度。",
  },
  // Audio
  volumeMain: {
    label: "音量",
    help: "应用播放的所有声音的音量。",
  },
  masterGain: {
    label: "歌曲音量",
    help: "歌曲中音符的响度。",
  },
  inputGain: {
    label: "你弹奏的音量",
    help: "你在键盘上弹的音有多响。",
  },
  velocityStrength: {
    label: "力度影响",
    help: "一个音的力度对它的响度影响有多大。",
  },
  sustainEnabled: {
    label: "延音踏板",
    help: "歌曲或你踩住踏板时，音会继续响。",
  },
  enableReverb: {
    label: "混响",
    help: "给声音加上房间的回声。",
  },
  reverbImpulseResponse: {
    label: "混响空间",
    help: "混响模拟的空间。空间越大，回声越长。",
    options: { room: "房间", hall: "音乐厅", church: "教堂" },
  },
  detune: {
    label: "微调音高（音分）",
    help: "把每个音调高或调低一点。100 音分等于一个半音。",
  },
  adsrAttack: {
    label: "起音（秒）",
    help: "一个音达到最大音量所需的时间。",
  },
  adsrDecay: {
    label: "衰减（秒）",
    help: "一个音降到延音音量所需的时间。",
  },
  adsrSustain: {
    label: "延音音量（%）",
    help: "按住的音保持的音量。",
  },
  adsrReleaseKey: {
    label: "松开琴键后的释音（秒）",
    help: "松开琴键后，一个音淡出所需的时间。",
  },
  adsrReleasePedal: {
    label: "松开踏板后的释音（秒）",
    help: "松开踏板后，按住的音淡出所需的时间。",
  },
  enableMetronome: {
    label: "节拍器",
    help: "在歌曲的每一拍上发出滴答声。",
  },
  metronomeMidiOutput: {
    label: "节拍器输出",
    help: "节拍器在哪里发声。",
    options: { both: "扬声器和 MIDI 设备", midi: "MIDI 设备", speakers: "扬声器" },
  },
  metronomeNoteNumber: {
    label: "节拍器在 MIDI 设备上的音",
    help: "节拍器每一拍发送给 MIDI 设备的音。",
  },
  metronomeInstrument: {
    label: "节拍器在 MIDI 设备上的音色",
    help: "选择架子鼓时，节拍器的音决定用哪种鼓。",
    options: { woodblock: "木鱼", drums: "架子鼓", piano: "钢琴" },
  },
  metronomeVolume: {
    label: "节拍器音量",
    help: "节拍器的滴答声有多响。",
  },
  synchedMetronome: {
    label: "让节拍器与歌曲同步",
    help: "开启时，节拍器在歌曲的拍子上发声，并跟随歌曲的速度变化和播放速度。关闭时，它按播放开始处的歌曲速度保持稳定的节拍。之后的速度变化不会影响这个节拍。它随播放开始和停止。在循环的预备拍中它会暂停，并在循环的第一拍重新开始。",
  },
  enableEqualizer: {
    label: "均衡器",
    help: "让低音、中音和高音更响或更轻。",
  },
  equalizerGain0: {
    label: "低频，60 Hz（dB）",
    help: "提高或降低最低沉的声音。",
  },
  equalizerGain1: {
    label: "中低频，250 Hz（dB）",
    help: "提高或降低声音中温暖的中低部分。",
  },
  equalizerGain2: {
    label: "中频，1 kHz（dB）",
    help: "提高或降低声音的中间部分。",
  },
  equalizerGain3: {
    label: "中高频，4 kHz（dB）",
    help: "提高或降低声音中明亮的中高部分。",
  },
  equalizerGain4: {
    label: "高频，12 kHz（dB）",
    help: "提高或降低最高的声音。",
  },
  scheduleAheadMs: {
    label: "音频提前量（ms）",
    help: "音符提前多久排入队列。时间长更稳定，时间短反应更快。",
  },
  scheduleIntervalMs: {
    label: "音频排队间隔（ms）",
    help: "多久把接下来的音符排入队列一次。",
  },
  // Backing track
  bgTrackFile: {
    label: "选择音频文件",
    help: "一段可以跟着弹的录音，例如伴奏乐队。它会保留到页面重新加载为止。",
  },
  bgTrackEnable: {
    label: "播放背景音轨",
    help: "选定的录音会和歌曲一起播放。",
  },
  bgTrackVolume: {
    label: "音量（%）",
    help: "背景音轨有多响。",
  },
  bgTrackSpeed: {
    label: "速度（%）",
    help: "音轨相对歌曲的快慢，用来配合另一种速度的录音。",
  },
  bgTrackOffset: {
    label: "偏移（秒）",
    help: "音轨的开头对应歌曲的第几秒。低于 0 时会跳过音轨的开头。",
  },
  bgTrackLoop: {
    label: "循环播放背景音轨",
    help: "音轨结束后会从头再开始。",
  },
  // View
  cameraPreset: {
    label: "视角",
    help: "拖动场景可以四处看看，平面视图除外。双击场景可以回到这个视角。平面视图与屏幕正下方的键盘对齐。",
    options: {
      classic: "经典，从上方看",
      player: "从琴凳上看",
      cinematic: "电影感，缓慢移动",
      flat: "平面，琴键占满屏幕宽度",
    },
  },
  resetCamera: {
    label: "回到视角",
    help: "你拖动场景后，把视角恢复原样。",
  },
  glowMode: {
    label: "光晕",
    help: "选择“自动”时，在省电的设备上或画面运行缓慢时会关闭光晕。",
    options: { auto: "自动", on: "开", off: "关" },
  },
  glowStrength: {
    label: "光晕强度",
    help: "音符和琴键发光的亮度。",
  },
  zoomByMeasures: {
    label: "按小节缩放",
    help: "轨道显示若干个小节，而不是若干秒。",
  },
  noteToHeightConst: {
    label: "提前显示的秒数",
    help: "轨道显示接下来多少秒的音符。秒数越少，音符越长、越快。",
  },
  measuresShownOnScreen: {
    label: "提前显示的小节数",
    help: "按小节缩放时，轨道显示接下来多少个小节的音符。",
  },
  // Keyboard
  keyboardFirstNote: {
    label: "第一个琴键",
    help: "你的键盘最低的琴键，例如 C2 或 36。",
  },
  keyboardLastNote: {
    label: "最后一个琴键",
    help: "你的键盘最高的琴键，例如 C7 或 96。",
  },
  foldOutsideNotes: {
    label: "把超出琴键范围的音移进范围",
    help: "你的键盘上没有的音会按八度移到你的琴键上，你就在那里弹它们。",
  },
  // Input
  playMode: {
    label: "模式",
    help: "自由弹奏会把歌曲放在一边，让你弹奏和录音。听音练习会给出音，让你找到它们。",
    options: { player: "弹一首歌", freePlay: "自由弹奏和录音", pitchPractice: "听音练习" },
  },
  pitchPracticeKey: {
    label: "听音练习的调",
    help: "听音练习只考这个调中的音。",
    options: {
      chromatic: "所有琴键，黑键和白键",
      C: "C 大调",
      G: "G 大调",
      D: "D 大调",
      A: "A 大调",
      E: "E 大调",
      B: "B 大调",
      Gb: "降 G 大调",
      Db: "降 D 大调",
      Ab: "降 A 大调",
      Eb: "降 E 大调",
      Bb: "降 B 大调",
      F: "F 大调",
    },
  },
  pitchPracticeFirstNote: {
    label: "听音练习的最低音",
    help: "在你的键盘范围内，听音练习考的最低音。",
  },
  pitchPracticeLastNote: {
    label: "听音练习的最高音",
    help: "在你的键盘范围内，听音练习考的最高音。",
  },
  pitchPracticeCount: {
    label: "听音练习每轮的音数",
    help: "听音练习在显示结果之前考多少个音。",
  },
  saveMidiDevices: {
    label: "记住选定的 MIDI 设备",
    help: "下次打开播放器时，它会连接同样的 MIDI 输入和输出。",
  },
  keyBindings: {
    label: "电脑键盘按键",
    help: "用来弹音的电脑按键。Z 到 M 弹 C3 到 B3，Q 到 I 弹 C4 到 C5。",
  },
  waitForNotes: {
    label: "等你弹",
    help: "歌曲会停在你要弹的每个音上，直到你按住它的所有琴键。在游戏模式中，等了很久的音会算作“慢了”。",
  },
  playHands: {
    label: "你的手",
    help: "按哪只手的弹奏来评分。开启“等你弹”时，你不弹的那只手由应用来弹。",
    options: { both: "双手", right: "右手", left: "左手" },
  },
  playalongSilentNotes: {
    label: "在你的 MIDI 键盘上点亮要弹的琴键",
    help: "把下一个音很轻地发送到 MIDI 输出，让带琴键灯的键盘显示出来。",
  },
  playalongSilentNotesChannel: {
    label: "琴键灯的 MIDI 通道",
    help: "你的键盘接收琴键灯信号的 MIDI 通道。",
  },
  enableScoreMode: {
    label: "为每个音评分",
    help: "把你弹的每个音和歌曲对照评判，并记录你每首歌的准确率。",
  },
  scoreHitWindow: {
    label: "弹对判定范围（ms）",
    help: "弹得离正确时间这么近的音，无论早晚，都算弹对。",
  },
  scorePerfectWindow: {
    label: "完美判定范围（ms）",
    help: "离正确时间这么近的弹对算作完美。",
  },
  enableGameMode: {
    label: "游戏模式",
    help: "准确弹对和按住长音可以得分，每次失误会扣分，连续弹对会形成连击并让得分翻倍。",
  },
  gameDifficulty: {
    label: "游戏难度",
    help: "节奏判定有多严格，以及一个音能得多少分、一次失误扣多少分。",
    options: { easy: "简单：弹过几个小时", normal: "普通：弹过几个月", hard: "困难：弹了大约一年" },
  },
  // Piano
  clickablePiano: {
    label: "点击或触摸钢琴来弹奏",
    help: "点击屏幕上的琴键时，它们会发声。",
  },
  highlightActivePianoKeys: {
    label: "给按下的琴键上色",
    help: "用下面的颜色给你按住的琴键上色。",
  },
  inputNoteColorWhite: {
    label: "你按下的白键颜色",
    help: "你按住的白键的颜色。",
  },
  inputNoteColorBlack: {
    label: "你按下的黑键颜色",
    help: "你按住的黑键的颜色。",
  },
  pianoWhiteKeyColor: {
    label: "白键颜色",
    help: "钢琴白键的颜色。",
  },
  pianoBlackKeyColor: {
    label: "黑键颜色",
    help: "钢琴黑键的颜色。",
  },
  pianoVelvetColor: {
    label: "毛毡颜色",
    help: "琴键后面那条毛毡的颜色。",
  },
  pianoBackgroundColor: {
    label: "背景颜色",
    help: "钢琴和轨道后面的颜色。",
  },
  pianoPosition: {
    label: "钢琴在屏幕上的高度（%）",
    help: "把钢琴在屏幕上往上或往下移。",
  },
  whiteKeyHeight: {
    label: "白键长度（%）",
    help: "白键画出来有多长。",
  },
  enableKeyFlare: {
    label: "按下的琴键发光",
    help: "每个发声的琴键上方都会亮起一道亮光。",
  },
  pianoLineEnabled: {
    label: "琴键上方的波浪线",
    help: "一条在每个发声的琴键上方起伏的线。",
  },
  pianoLineSpeed: {
    label: "波浪速度",
    help: "波浪线的波动有多快。",
  },
  pianoLineResolution: {
    label: "每个八度的波浪数",
    help: "一个八度的宽度内有多少个波浪。波浪越多，看起来越细腻。",
  },
  pianoLineAmplitude: {
    label: "波浪高度",
    help: "高度以琴键宽度为单位，指琴键以最大力度发声时，线在它上方起伏的幅度。",
  },
  pianoLineColor: {
    label: "波浪线颜色",
    help: "波浪线的颜色。",
  },
  pianoLineOpacity: {
    label: "波浪线不透明度",
    help: "波浪线显示得有多明显。数值越低越淡。",
  },
  pianoLineYOffset: {
    label: "波浪线离琴键的高度",
    help: "波浪线离琴键上方有多高，以琴键宽度为单位。",
  },
};
