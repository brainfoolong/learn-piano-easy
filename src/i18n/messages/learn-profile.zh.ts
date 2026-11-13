/** The profile of *Learn Piano* in Chinese. A text it leaves out shows in English. */
import { formatNumber } from "../format";
import type { Translation } from "../translation";
import type { learnProfile as en } from "./learn-profile.en";

const n = (value: number) => formatNumber("zh", value);
const days = (value: number) => `${n(value)} 天`;

export const learnProfile: Translation<typeof en> = {
  loading: "正在加载你的进度……",
  level: {
    heading: "等级",
    name: (level: number) => `等级 ${n(level)}`,
    total: (xp: number) => `共 ${n(xp)} XP`,
    toNext: (level: number) => `距离升到等级 ${n(level)}`,
  },
  streak: {
    heading: "连续练习天数",
    current: (count: number) => days(count),
    currentLabel: "当前连续",
    best: (count: number) => `最长：${days(count)}`,
    today: (xp: number, goal: number) =>
      xp >= goal ? `今天：${n(xp)} XP，已达成 ${n(goal)} XP 的目标` : `今天：${n(xp)} XP，目标 ${n(goal)} XP`,
  },
  calendar: {
    heading: "最近八周",
    label: (met: number, played: number) => `最近八周里，有 ${days(met)}达成了目标，有 ${days(played)}上了课。`,
    met: "达成目标",
    played: "上过课",
    none: "没有上课",
  },
  stats: {
    heading: "统计",
    lessons: "学完的课",
    threeStars: "三颗星的课",
    days: "练习天数",
    badges: "获得的徽章",
  },
  badges: {
    heading: "徽章",
    lead: (earned: number, all: number) => `已获得 ${n(earned)} 枚，共 ${n(all)} 枚`,
    earned: (name: string) => `${name}，已获得`,
    locked: (name: string) => `${name}，还未获得`,
  },
  choices: {
    heading: "你的设置",
    goal: "每日目标",
    goalHelp: "每天需要多少 XP，才能保持连续练习天数。",
    sounds: "奖励音效",
    soundsHelp: "通过一步、得到一颗星、升级和获得徽章时会响起提示音。钢琴的声音一直都在。",
  },
  data: {
    heading: "你的数据",
    lead: "你的进度保存在这个浏览器里。“你的数据”页面会把它和其他所有内容一起存成一个文件，也能恢复它。",
    open: "备份或恢复",
    reset: "重置全部进度",
    failed: "浏览器无法保存。没有任何更改。",
    resetDone: "你的进度已重置。备份文件里保存着之前的所有内容。",
    close: "关闭",
    cancel: "保留我的进度",
    ask: {
      title: "要重置全部进度吗？",
      text: "这会从这个浏览器里移除每一课的完成记录、每颗星、所有 XP 和徽章。你的设置会保留。",
      next: "继续",
    },
    askAgain: {
      title: "确定要这样做吗？",
      text: "会先保存一个备份文件，以后你可以恢复所有内容。然后你的进度会从头开始。",
      confirm: "重置我的进度",
    },
  },
};
