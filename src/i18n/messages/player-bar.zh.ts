/** The player's bar in Chinese. A text it leaves out shows in English. */
import type { Translation } from "../translation";
import type { playerBar as en } from "./player-bar.en";

export const playerBar: Translation<typeof en> = {
  actions: {
    play: "播放或暂停",
    stop: "停止并回到开头",
    seekBack: "后退 5 秒",
    seekForward: "前进 5 秒",
    toStart: "回到开头",
    faster: "加快",
    slower: "放慢",
    transposeUp: "向上移调",
    transposeDown: "向下移调",
    loop: "循环播放选定的小节，再循环整首歌，然后关闭",
    loopStart: "从这一小节开始循环",
    loopEnd: "循环到这一小节",
    zoomIn: "放大",
    zoomOut: "缩小",
    fit: "适应整首歌",
    viewLeft: "视图左移",
    viewRight: "视图右移",
    fullscreen: "全屏",
  },
  controls: {
    play: "播放",
    pause: "暂停",
    stop: "停止",
    speed: "速度",
    transpose: "移调",
    loop: "循环",
    repeatAll: "全部循环",
    loopTitles: {
      off: "循环播放设置中选定的小节",
      measures: "改为循环整首歌",
      song: "停止循环",
    },
    more: "更多工具",
    zoom: "缩放",
    fit: "适应",
    view: "视图",
    leaveFullScreen: "退出全屏",
    expert: "专家",
    expertTitles: {
      off: "显示所有工具",
      on: "只显示主要工具",
    },
  },
  hotkeys: {
    none: "无",
  },
  hotkeyDialog: {
    pressKey: "按一个按键……",
    keyFor: (label: string) => `“${label}”的按键`,
    clear: "清除",
    clearTitle: (label: string) => `清除“${label}”的按键`,
    resetAll: "重置所有按键",
    help: "点击一个按键，再按你想用的按键。按 Esc 关闭这个对话框。",
    off: "快捷键已在设置中关闭，所以这些按键现在不起作用。",
    open: "更改快捷键",
  },
  timeline: {
    position: "歌曲位置",
  },
};
