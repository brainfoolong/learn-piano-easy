/** The badges of *Learn Piano* in Chinese. A text it leaves out shows in English. */
import type { Translation } from "../translation";
import type { learnBadges as en } from "./learn-badges.en";

export const learnBadges: Translation<typeof en> = {
  cheer: "你的钢琴老师在为你欢呼",
  fixed: {
    "first-note": { name: "第一个音", description: "在课里弹出你的第一个音。" },
    "first-lesson": { name: "第一课", description: "学完你的第一课。" },
    "first-three-stars": { name: "三颗星", description: "拿三颗星学完一课。" },
    "three-stars-ten": { name: "集星达人", description: "在十课里拿到三颗星。" },
    "first-daily-goal": { name: "达成目标", description: "第一次达成每日目标。" },
    "streak-3": { name: "连续三天", description: "连续三天达成每日目标。" },
    "streak-7": { name: "连续一周", description: "连续七天达成每日目标。" },
    "streak-30": { name: "连续一个月", description: "连续三十天达成每日目标。" },
    "streak-100": { name: "百日坚持", description: "连续一百天达成每日目标。" },
    "notes-1000": { name: "千音", description: "在课里弹一千个音。" },
    "notes-10000": { name: "万音", description: "在课里弹一万个音。" },
    "rhythm-ace": { name: "节奏高手", description: "第一次尝试就通过一个节奏步骤。" },
    "sight-reader": { name: "识谱能手", description: "连续读对十个音，一个都不错。" },
    "early-bird": { name: "早起的鸟儿", description: "在早上 8 点前学完一课。" },
    "night-owl": { name: "夜猫子", description: "在晚上 10 点或更晚学完一课。" },
    comeback: { name: "欢迎回来", description: "离开一周后，回来学一课。" },
    legendary: { name: "困难之歌", description: "在随心弹琴里，把我们一首歌的“困难”版本从头弹到尾。" },
  },
  world: {
    name: (world: string) => `精通“${world}”`,
    description: (world: string) => `通过“${world}”的终极挑战。`,
  },
};
