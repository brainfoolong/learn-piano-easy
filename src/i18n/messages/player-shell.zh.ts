/** The player's shell in Chinese. A text it leaves out shows in English. */
import { formatNumber } from "../format";
import type { Translation } from "../translation";
import type { playerShell as en } from "./player-shell.en";

/** `n` seconds with two decimals and no digit grouping, such as `12.50`. */
const seconds = (n: number) => formatNumber("zh", n, { minimumFractionDigits: 2, maximumFractionDigits: 2, useGrouping: false });
const files = (n: number) => `${formatNumber("zh", n)} 个文件`;

export const playerShell: Translation<typeof en> = {
  dialog: {
    close: "关闭",
    hotkeys: "快捷键",
    keyBindings: "电脑键盘按键",
    pdf: "保存为 PDF",
    offlineFiles: "离线文件",
    tracks: "音轨",
    songs: "歌曲",
    guide: (title) => `《${title}》练习指南`,
    about: "关于 Learn Piano Easy",
  },
  toast: {
    dismiss: "关闭",
  },
  topbar: {
    songs: "歌曲",
    tracks: "音轨",
    guide: "指南",
    settings: "设置",
    about: "关于",
    openSong: "当前歌曲",
    demoSong: "示范歌曲",
    songFallback: "歌曲",
  },
  songs: {
    noneFound: "没有找到歌曲文件。",
    wrongKind: "只能添加 MIDI 和 MusicXML 文件。",
    added: (n) => `已把 ${formatNumber("zh", n)} 首歌添加到“你的歌曲”。`,
    notKept: (reason) => `无法保存这些歌曲：${reason}`,
    soundsFailed: "无法加载钢琴音色，所以歌曲会无声播放。",
  },
  guide: {
    step: (n, summary) => `第 ${formatNumber("zh", n)} 步：${summary}。`,
    barLoops: (bar) => `第 ${formatNumber("zh", bar)} 小节循环播放。`,
    topBeaten: (title) => `你通过了“${title}”，这是这首歌的最后一步。弹得真好！`,
    beaten: (title, next) => `你通过了“${title}”！下一步是“${next}”。`,
    playNext: (next) => `弹“${next}”`,
  },
  lesson: {
    label: "课",
    target: (percent) => `在一遍计分的演奏中弹对 ${formatNumber("zh", percent)}% 的音。`,
    back: "返回这一课",
    missing: "曲库中没有这一课的歌曲。",
  },
  finger: {
    label: "选中的音",
    setByYou: "你设定的",
    fromGuide: "来自练习指南",
    suggested: "建议",
    none: "无指法",
    finger: (finger, source) => `${finger} 指，${source}`,
    line: (note, said) => `${note}：${said}。按 1～5 设定指法，按 0 清除，按 Esc 完成。`,
  },
  backgroundTrack: {
    notAudio: (file) => `${file} 不是这个浏览器能播放的音频。`,
    playsAlong: (file) => `${file} 会随歌曲一起播放。`,
  },
  about: {
    license: "许可证",
    notices: "第三方声明",
    packageLicense: (name) => `${name} 许可证`,
    offline: "这段文字暂时无法离线查看。",
    intro: "Learn Piano Easy 是一款免费、开源的钢琴学习应用，有引导式课程，也能用你自己的 MIDI 文件。它在你的浏览器中离线运行。",
    build: (version) => `构建版本 ${version}`,
  },
  cache: {
    groups: {
      app: { label: "应用", description: "页面、代码和歌曲列表。应用要离线打开，就需要它们。" },
      songs: { label: "歌曲", description: "应用自带的所有歌曲，让每一首都能离线打开。" },
      sounds: { label: "钢琴音色", description: "所有音色，无论选哪一套，钢琴都能离线发声。" },
    },
    groupsFailed: (n, labels) => `以下部分有 ${files(n)}无法离线保存：${labels}。`,
    updated: (labels) => `已更新。以下部分已重新离线保存：${labels}。`,
    unavailable: "这个浏览器不会为本页面保存离线文件。",
    reading: "正在读取已保存的内容……",
    unreadable: "无法读取离线文件列表。重新加载页面后再试一次。",
    intro: "已保存的文件在没有网络时也能用。每一部分都可以单独保存或移除。",
    allSaved: "全部已保存",
    noneSaved: "未保存",
    someSaved: (count, total) => `已保存 ${formatNumber("zh", count)} 个，共 ${files(total)}`,
    status: (size, total, state) => `${size}，${files(total)}，${state}。`,
    saving: (done, total) => `正在保存第 ${formatNumber("zh", done)} 个，共 ${files(total)}……`,
    failed: (n) => `${files(n)}无法保存。`,
    save: "保存",
    saveAgain: "重新保存",
    remove: "移除",
    saveGroup: (label) => `保存“${label}”`,
    removeGroup: (label) => `移除“${label}”`,
    keep: "每次更新后仍保持保存",
  },
  update: {
    ready: "新版本已就绪。",
    reload: "重新加载",
  },
  scene: {
    piano: "钢琴",
    pianoRange: (range) => `钢琴，${range}`,
    startKeys: (keys) => `，起始键 ${keys}`,
    chord: (chord) => `，和弦 ${chord}`,
  },
  demo: {
    /** Each Han character is one syllable, so "|" parts every character and no space stands between them. */
    lyrics: [
      "看|光|点|纷|纷|落|下",
      "光|一|到|就|按|琴|键",
      "先|慢|慢|来|再|加|快",
      "手|指|很|快|会|认|路",
    ],
    part: (n) => `第 ${formatNumber("zh", n)} 部分`,
    leftHand: "左手",
    rightHand: "右手",
  },
  chords: {
    root: "根音",
    /** A chord tone, such as `♭3`, written as an interval, such as `♭3 度`. */
    ordinal: (tone) => `${tone} 度`,
  },
  overlays: {
    fps: "每秒帧数",
    tempo: "速度",
    track: (track, channel) => `音轨 ${track}，通道 ${channel}`,
    velocity: (velocity) => `力度 ${velocity}`,
    timing: (start, length) => `从 ${seconds(start)} 秒开始，持续 ${seconds(length)} 秒`,
  },
  sheet: {
    label: "乐谱",
    empty: "乐谱中没有显示任何音轨。在“音轨”中打开一条。",
  },
};
