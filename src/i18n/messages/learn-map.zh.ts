/** The world map of *Learn Piano* in Chinese. A text it leaves out shows in English. */
import { formatNumber } from "../format";
import type { Translation } from "../translation";
import type { learnMap as en } from "./learn-map.en";

export const learnMap: Translation<typeof en> = {
  lead: "沿着小路一课一课往前走。每个世界的最后都有一个终极挑战。",
  loading: "正在加载课程……",
  continue: "继续",
  nextUp: "下一课",
  world: (n: number) => `世界 ${formatNumber("zh", n)}`,
  progress: (done: number, all: number) => `已完成 ${formatNumber("zh", done)} 课，共 ${formatNumber("zh", all)} 课`,
  locked: "通过上一个世界的终极挑战，或通过这个世界的跳级测试，就能开放它。",
  beaten: "已通过",
  node: {
    locked: (name: string) => `${name}，未开放`,
    open: (name: string) => `${name}，已开放`,
    done: (name: string, stars: number) => `${name}，${formatNumber("zh", stars)} 颗星，共 3 颗`,
  },
  medal: (world: string, earned: boolean) => `“${world}”徽章，${earned ? "已获得" : "还未获得"}`,
  skipTest: {
    title: (world: string) => `跳级测试：${world}`,
    text: "已经会了吗？通过跳级测试，就能开放这里的每一课。",
    action: "参加跳级测试",
  },
  bar: {
    label: "你的进度",
    streak: (days: number) => `连续 ${formatNumber("zh", days)} 天`,
    level: (level: number) => `等级 ${formatNumber("zh", level)}`,
    today: "今天",
    todayGoal: (xp: number, goal: number) => `今天：${formatNumber("zh", xp)} XP，目标 ${formatNumber("zh", goal)} XP`,
    days: (days: number) => `${formatNumber("zh", days)} 天`,
  },
};
