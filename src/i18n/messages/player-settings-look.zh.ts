/** The player's settings from the notes to the offline files, in Chinese. A text it leaves out shows in English. */
import type { Translation } from "../translation";
import type { playerSettingsLook as en } from "./player-settings-look.en";

export const playerSettingsLook: Translation<typeof en> = {
  // Notes
  showHitKeys: {
    label: "点亮正在发声的音符",
    help: "音符发声时，会以自己的颜色发光。",
  },
  noteWidth: {
    label: "音符宽度（占琴键的百分比）",
    help: "每个下落音符有多宽，以它的琴键为准。",
  },
  roundedNotes: {
    label: "圆角音符",
    help: "让下落音符带上圆角。",
  },
  noteBorderRadius: {
    label: "圆角半径（%）",
    help: "音符的角有多圆。",
  },
  minNoteHeight: {
    label: "最短音符长度",
    help: "以琴键宽度为单位，让很短的音符也能看见。",
  },
  strokeNotes: {
    label: "边缘光晕",
    help: "每个音符周围一圈它自己颜色的光。",
  },
  strokeNotesWidth: {
    label: "边缘光晕强度",
    help: "每个音符周围那圈光有多亮。",
  },
  noteEndedShrink: {
    label: "弹过的音符缩进琴键",
    help: "音符发声时会沉入它的琴键。关闭时，它会继续穿过琴键往下走。",
  },
  playedNoteFalloffSpeed: {
    label: "弹过的音符穿过琴键多远",
    help: "以琴键宽度为单位，在弹过的音符不缩进时生效。",
  },
  showSustainedNotes: {
    label: "显示踏板让音符延续多久",
    help: "踏板延续的每个音符后面拖着一条细尾巴。",
  },
  sustainedNotesOpacity: {
    label: "踏板尾巴亮度（%）",
    help: "音符后面的踏板尾巴显示得多明显。",
  },

  // Lanes
  bgCol1: {
    label: "轨道颜色",
    help: "白键上方轨道的颜色。",
  },
  bgCol5: {
    label: "黑键轨道颜色",
    help: "黑键上方轨道的颜色。",
  },
  bgCol3: {
    label: "八度分隔线颜色",
    help: "每个 B 和下一个 C 之间那条线的颜色。",
  },
  drawMeasureLines: {
    label: "小节线",
    help: "每个小节开头横穿轨道的一条线。",
  },
  measureLineThickness: {
    label: "小节线粗细",
    help: "每个小节处的线有多粗。",
  },
  measureLineColor: {
    label: "小节线颜色",
    help: "每个小节处那条线的颜色。",
  },
  enableDrawBeatLines: {
    label: "拍线",
    help: "每一拍上横穿轨道的一条较淡的线。",
  },
  beatLineThickness: {
    label: "拍线粗细",
    help: "每一拍上的线有多粗。",
  },
  beatLineColor: {
    label: "拍线颜色",
    help: "每一拍上那条线的颜色。",
  },
  enableDrawMeasureNumbers: {
    label: "小节号",
    help: "每个小节的编号，显示在它的线旁边。",
  },
  measureNumbersColor: {
    label: "小节号颜色",
    help: "小节号的颜色。",
  },
  highlightInputLanes: {
    label: "点亮你按住的琴键的轨道",
    help: "你按住一个琴键时，它上方的轨道会变亮。",
  },
  inputLaneOpacity: {
    label: "轨道亮光强度",
    help: "你按住琴键时，它的轨道变得多亮。",
  },
  showMarkersSong: {
    label: "标记",
    help: "歌曲标出一个段落（比如主歌）的地方，显示一条线和它的文字。",
  },
  showSustainPeriods: {
    label: "踏板区段",
    help: "歌曲踩住延音踏板期间，横穿轨道的一条色带。",
  },
  showSustainOnOffs: {
    label: "踩下和松开踏板",
    help: "踩下踏板的地方是一条标着“Ped.”的线，松开的地方标着“✱”。",
  },
  showSustainChannels: {
    label: "踏板通道",
    help: "标出每个踏板区段的 MIDI 通道。",
  },

  // Particles
  showParticles: {
    label: "粒子",
    help: "每个发声的琴键上都会升起特效。它们会占用显卡，所以默认关闭。",
  },
  particlesFlames: {
    label: "火焰",
    help: "每个琴键以它的音符的颜色燃烧。它们最占用显卡。",
  },
  particlesSparks: {
    label: "火花",
    help: "每个琴键上飞起明亮的小火花。",
  },
  particlesEmbers: {
    label: "余烬",
    help: "发光的余烬从每个琴键上慢慢飘起。",
  },
  particlesStars: {
    label: "星星",
    help: "旋转的小星星和小圆点从每个琴键升起，再落下来。",
  },
  particlesCustom: {
    label: "你自己的粒子",
    help: "用下面的设置做出的粒子。",
  },
  particlesTexture: {
    label: "形状",
    help: "你的每个粒子显示的图案。",
    options: { circle: "光点", spark: "火花", smoke: "烟雾", star: "星星", ring: "圆环" },
  },
  particlesBlending: {
    label: "混合方式",
    help: "“叠加光亮”会让后面的东西变亮，就像火一样。“覆盖”会把它挡住，就像烟一样。",
    options: { additive: "叠加光亮", normal: "覆盖" },
  },
  particleOverrideColor: {
    label: "自定颜色",
    help: "关闭时，每个粒子取它的琴键的颜色。",
  },
  particleColor: {
    label: "颜色",
    help: "粒子使用自定颜色时的颜色。",
  },
  particlesOpacity: {
    label: "不透明度",
    help: "每个粒子看起来有多实。数值越低，越能透出后面的东西。",
  },
  particleSize: {
    label: "大小",
    help: "以琴键宽度为单位。",
  },
  particleAmount: {
    label: "数量",
    help: "每个琴键每帧产生的粒子数，按每秒 60 帧计算。",
  },
  particleLife: {
    label: "寿命（秒）",
    help: "每个粒子消失前存在多久。",
  },
  particleSpeed: {
    label: "运动速度",
    help: "让粒子的所有运动都变快或变慢。",
  },
  particleFadeOut: {
    label: "淡出",
    help: "粒子在寿命末尾用来淡出的那一部分时间所占的比例。",
  },
  particlesShrink: {
    label: "缩小",
    help: "粒子缩小掉的大小比例。低于 0 时它会变大。",
  },
  particleSpeedX: {
    label: "横向速度",
    help: "最快的横向速度，单位是每秒多少个琴键宽度。",
  },
  particleSpeedY: {
    label: "上升速度",
    help: "最快的上升速度，单位是每秒多少个琴键宽度。",
  },
  particlesFriction: {
    label: "阻力",
    help: "粒子在飞行中减速有多快。",
  },
  particleRising: {
    label: "重力",
    help: "高于 0 时粒子会落回来，低于 0 时它们上升得更快。",
  },
  particlesRotation: {
    label: "角度（°）",
    help: "每个粒子出现时转过多少角度。",
  },
  particlesRotationRandom: {
    label: "随机角度（°）",
    help: "每个粒子出现时随机转过一个角度，最多到这个值。",
  },
  particlesRotationSpeed: {
    label: "旋转（每秒度数）",
    help: "每个粒子飞行时转得多快。",
  },
  particleNoiseResX: {
    label: "横向漂移细节",
    help: "数值越高，相邻琴键的粒子横向漂移得越不一样。",
  },
  particleNoiseStrengthX: {
    label: "横向漂移",
    help: "粒子随机向两侧漂移多远。",
  },
  particleNoiseResY: {
    label: "上升漂移细节",
    help: "数值越高，相邻琴键的上升漂移越不一样。",
  },
  particleNoiseStrengthY: {
    label: "上升漂移",
    help: "粒子上升时随机上下漂移多远。",
  },
  particleNoiseStrengthSize: {
    label: "大小漂移",
    help: "每个粒子随机变大变小的幅度。",
  },
  turbulenceXAmplitude: {
    label: "横向摆动",
    help: "粒子左右摆动多远。",
  },
  turbulenceXFrequency: {
    label: "横向摆动频率",
    help: "每秒摆动的次数。",
  },
  turbulenceYAmplitude: {
    label: "上升摆动",
    help: "粒子上升时上下摆动多远。",
  },
  turbulenceYFrequency: {
    label: "上升摆动频率",
    help: "每秒摆动的次数。",
  },
  particleYOffset: {
    label: "起始高度",
    help: "琴键上方多少个琴键宽度。",
  },
  particleDistributionX: {
    label: "横向起始位置",
    help: "每个粒子在琴键宽度上的哪里出现。",
    options: { across: "整个宽度上任意位置", centre: "琴键中间" },
  },
  particleDistributionXSpread: {
    label: "起始范围（%）",
    help: "粒子出现的范围占琴键宽度的比例。",
  },
  particleDistributionY: {
    label: "纵向起始位置",
    help: "每个粒子在琴键长度上的哪里出现。",
    options: { hitLine: "在击键线上", key: "琴键顶面任意位置" },
  },
  particleDistributionZ: {
    label: "图层",
    help: "是琴键挡住粒子，还是粒子盖在钢琴前面。",
    options: { behind: "被琴键挡住", front: "在钢琴前面" },
  },

  // Labels
  pitchNotationSystem: {
    label: "音名",
    help: "音符和琴键上的名称怎么写。Do 始终是 C。",
    options: { auto: "跟随我的语言", letters: "字母：C D E", solfege: "唱名：Do Re Mi" },
  },
  noteLabel: {
    label: "音符标签",
    help: "每个音符上显示的文字：可以选任意几项，也可以都不选。点击一个音符，再按 1～5 设置它的手指。",
    options: { name: "音名", keyBinding: "电脑按键", fingering: "手指" },
  },
  noteLabelColor: {
    label: "音符标签颜色",
    help: "每个音符上文字的颜色。",
  },
  showKeyNamesOnPianoWhite: {
    label: "白键上的音名",
    help: "每个白键显示它的音名。",
  },
  showKeyNamesOnPianoBlack: {
    label: "黑键上的音名",
    help: "每个黑键显示它的音名。",
  },
  showPianoKeyNameFlats: {
    label: "黑键用降号命名",
    help: "用 D♭ 代替 C♯，只用于琴键。音符跟随歌曲的调。",
  },
  octaveLabel: {
    label: "琴键名称上的八度",
    help: "在琴键的名称上加上八度编号，比如 C4。",
    options: { none: "不显示", all: "每个琴键上", onlyC: "只在 C 上" },
  },
  showKeyBindingsOnPiano: {
    label: "钢琴上的电脑按键",
    help: "每个琴键显示弹它的电脑按键。",
  },
  showChords: {
    label: "和弦名称",
    help: "标出音符组成的每个和弦，包括踏板延续的音。",
  },
  chordLabelStyle: {
    label: "和弦标签样式",
    help: "每个和弦名称的显示方式。",
    options: { bar: "和弦琴键上方的横条", ribbon: "横穿轨道的飘带" },
  },
  chordLabelPlacement: {
    label: "和弦标签位置",
    help: "顶部是和弦离钢琴较远的那一端。",
    options: {
      above: "和弦上方",
      top: "和弦顶部",
      middle: "和弦中间",
      bottom: "和弦底部",
      below: "和弦下方",
    },
  },
  showChordRomanNumerals: {
    label: "罗马数字",
    help: "每个和弦在歌曲调中的级数，比如 V7。",
  },
  chordBlocks: {
    label: "音块",
    help: "已命名和弦的每个音上方有一个小块，说明这个音是什么。",
    options: { none: "不显示", tone: "和弦音", degree: "音阶级数" },
  },
  chordToneNotation: {
    label: "音块写法",
    help: "音块用简短符号还是完整文字。",
    options: { simple: "简写：R ♭3 5", full: "完整：根音、♭3 度、5 度" },
  },
  chordMarkRoot: {
    label: "标出根音",
    help: "每个和弦的根音带一个金色小块。",
  },

  // Lyrics
  lyricsEnabled: {
    label: "歌词",
    help: "歌曲有歌词时，一次显示一行。",
  },
  lyricsBackground: {
    label: "背景颜色",
    help: "歌词后面那条底色的颜色。",
  },
  lyricsFontColor: {
    label: "文字颜色",
    help: "还没唱到的歌词的颜色。",
  },
  lyricsFontColorPlayed: {
    label: "已唱文字颜色",
    help: "已经唱过的歌词的颜色。",
  },
  lyricsFontColorActive: {
    label: "正在唱的音节颜色",
    help: "正在唱的音节用这个颜色突出显示。",
  },
  lyricsFontSize: {
    label: "文字大小（px）",
    help: "歌词写得多大。",
  },
  lyricsY: {
    label: "高度（距顶部的百分比）",
    help: "歌词行的中线在场景中的位置。0 是顶边。",
  },
  lyricsCursorEnabled: {
    label: "光标",
    help: "正在唱的音节上方的一个圆点。",
  },
  lyricsBouncingCursor: {
    label: "跳动光标",
    help: "圆点从一个音节跳到下一个音节。",
  },

  // Coding
  enableColorCodingNote: {
    label: "按音高给音符上色",
    help: "12 个音高各有自己的颜色。",
  },
  enableColorCodingNotePiano: {
    label: "按音高给琴键上色",
    help: "琴键发声时，以它的音高的颜色点亮。",
  },
  colorCodeNote0: { help: "每个 C 的颜色。" },
  colorCodeNote1: { label: "C♯ 或 D♭", help: "每个 C♯ 或 D♭ 的颜色。" },
  colorCodeNote2: { help: "每个 D 的颜色。" },
  colorCodeNote3: { label: "D♯ 或 E♭", help: "每个 D♯ 或 E♭ 的颜色。" },
  colorCodeNote4: { help: "每个 E 的颜色。" },
  colorCodeNote5: { help: "每个 F 的颜色。" },
  colorCodeNote6: { label: "F♯ 或 G♭", help: "每个 F♯ 或 G♭ 的颜色。" },
  colorCodeNote7: { help: "每个 G 的颜色。" },
  colorCodeNote8: { label: "G♯ 或 A♭", help: "每个 G♯ 或 A♭ 的颜色。" },
  colorCodeNote9: { help: "每个 A 的颜色。" },
  colorCodeNote10: { label: "A♯ 或 B♭", help: "每个 A♯ 或 B♭ 的颜色。" },
  colorCodeNote11: { help: "每个 B 的颜色。" },
  enableColorCodingFinger: {
    label: "按手指给音符上色",
    help: "没有指定手指的音符保持原来的颜色。",
  },
  enableColorCodingFingerPiano: {
    label: "按手指给琴键上色",
    help: "琴键以弹它的手指的颜色点亮。",
  },
  colorCodeFinger1Right: { label: "右手 1 指", help: "右手拇指所弹音符的颜色。" },
  colorCodeFinger2Right: { label: "右手 2 指", help: "右手食指所弹音符的颜色。" },
  colorCodeFinger3Right: { label: "右手 3 指", help: "右手中指所弹音符的颜色。" },
  colorCodeFinger4Right: { label: "右手 4 指", help: "右手无名指所弹音符的颜色。" },
  colorCodeFinger5Right: { label: "右手 5 指", help: "右手小指所弹音符的颜色。" },
  colorCodeFingerDefaultRight: {
    label: "右手，未指定手指",
    help: "没有指定手指的右手音符的颜色。",
  },
  colorCodeFinger1Left: { label: "左手 1 指", help: "左手拇指所弹音符的颜色。" },
  colorCodeFinger2Left: { label: "左手 2 指", help: "左手食指所弹音符的颜色。" },
  colorCodeFinger3Left: { label: "左手 3 指", help: "左手中指所弹音符的颜色。" },
  colorCodeFinger4Left: { label: "左手 4 指", help: "左手无名指所弹音符的颜色。" },
  colorCodeFinger5Left: { label: "左手 5 指", help: "左手小指所弹音符的颜色。" },
  colorCodeFingerDefaultLeft: {
    label: "左手，未指定手指",
    help: "没有指定手指的左手音符的颜色。",
  },

  // Sheet
  enableSheet: {
    label: "显示乐谱",
    help: "以乐谱显示歌曲，盖在场景上方。",
  },
  enableFullSheet: {
    label: "只显示乐谱",
    help: "乐谱铺满屏幕，取代场景。",
  },
  sheetMeasureScroll: {
    label: "乐谱随歌曲滚动",
    help: "关闭时，小节分行排列，正在弹的那一行始终可见。",
  },
  sheetMeasureNumbers: {
    label: "小节号",
    help: "乐谱在哪里显示每个小节的编号。",
    options: { off: "不显示", lineStart: "每行开头", every: "每个小节上" },
  },
  enableGrandStaff: {
    label: "用连谱号连接两行谱表",
    help: "大谱表的连谱号，显示在每行开头。",
  },
  sheetAutoClef: {
    label: "按音符选择谱号",
    help: "关闭时，第一行谱表用高音谱号，其余用低音谱号。",
  },
  overrideTimeSignature: {
    label: "拍号",
    help: "乐谱所用的拍号。如果歌曲自带的拍号不对，就选一个。",
    options: { auto: "按歌曲" },
  },
  sheetMinNoteDenom: {
    label: "最短音符时值",
    help: "乐谱写出的最短音符。它的三连音也能写出。",
    options: { "4": "四分音符", "8": "八分音符", "16": "十六分音符", "32": "三十二分音符", "64": "六十四分音符" },
  },
  hideRestsBelow: {
    label: "隐藏短于此值的休止符",
    help: "省略短的休止符，让乐谱更容易读。",
    options: { none: "不隐藏", "4": "四分休止符", "8": "八分休止符", "16": "十六分休止符", "32": "三十二分休止符" },
  },
  renderSheetCursor: {
    label: "光标",
    help: "一条线标出歌曲当前的位置。",
  },
  sheetColorActiveNotes: {
    label: "给发声的音符上色",
    help: "乐谱上的音符发声时会变色。",
  },
  sheetColorByTrack: {
    label: "发声的音符用音轨的颜色",
    help: "关闭时，它们用下面的颜色。",
  },
  sheetActiveNotesColor: {
    label: "发声音符的颜色",
    help: "乐谱上的音符发声时的颜色。",
  },
  sheetHighlightActiveNotes: {
    label: "发声音符背后的光晕",
    help: "乐谱上的音符发声时，背后会亮起柔和的光。",
  },
  sheetActiveHighlightColor: {
    label: "光晕颜色",
    help: "发声音符背后那团光的颜色。",
  },
  sheetActiveGrowEffect: {
    label: "发声的音符变大",
    help: "乐谱上的音符发声时会变大。",
  },
  sheetRenderInputNotes: {
    label: "画出你弹的音",
    help: "你按住的每个琴键都会在光标处显示成一个音符。",
  },
  sheetShowHoverInfo: {
    label: "显示指针下音符的名称",
    help: "把指针移到乐谱上的音符或和弦上，就能看到它的音名。",
  },
  sheetBgColor: {
    label: "纸张颜色",
    help: "乐谱后面的颜色。纸张颜色深时，墨色会变浅。",
  },

  // PDF
  pdfExportButtonGroup: {
    label: "把音符保存为 PDF",
    help: "打开一个对话框，把当前歌曲的下落音符保存成页面，每页的长度由你设定。",
  },
  exportPdfBackground: {
    label: "使用背景颜色",
    help: "页面使用轨道和琴键的颜色。关闭时，页面打印在白纸上。",
  },

  // Offline
  offlineCache: {
    label: "管理离线文件",
    help: "显示应用、歌曲和钢琴音色各占多大空间，并可以分别保存或移除。",
  },
  autoCacheSongs: {
    label: "保留歌曲",
    help: "现在保存所有示例歌曲，并在每次更新后再保存一次。",
  },
  autoCacheSounds: {
    label: "保留钢琴音色",
    help: "现在保存所有音色，并在每次更新后再保存一次。",
  },
};
