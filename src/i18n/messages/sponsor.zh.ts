/** The sponsor page in Chinese. A text it leaves out shows in English. */
import type { Translation } from "../translation";
import type { sponsorPage as en } from "./sponsor.en";

export const sponsorPage: Translation<typeof en> = {
  lead: "Learn Piano Easy 是免费的，以后也会一直免费。如果它给你的生活带来了一些音乐，你可以帮它成长。",
  action: "在 GitHub 上赞助",
  note: "金额不限，一次或每月都可以。",
  promises: ["没有广告", "无需账号", "离线可用", "开源，MIT 许可证"],
  picture: "一颗大大的心，周围飘着两个音符",
  who: {
    heading: "谁在做它",
    text: [
      "Learn Piano Easy 由一个人利用业余时间开发，穿插在工作、生活和练音阶之间。",
      "质量检查由一只猫负责，它时不时从琴键上走过。",
    ],
  },
  spend: {
    heading: "你的赞助用在哪里",
    items: [
      { title: "时间", text: "一个个夜晚，用来做新课、新歌，修掉更多错误。" },
      { title: "域名", text: "让网站保住它的地址，你也总能找到它。" },
      { title: "咖啡", text: "它会以每分钟约 120 拍的稳定速度变成代码。" },
    ],
  },
  help: {
    heading: "其他帮忙的方式",
    lead: "钱只是一种帮忙的方式。这些同样重要：",
    star: { text: "在 GitHub 上给项目加星，让其他学琴的人找到它。", action: "在 GitHub 上加星" },
    bug: { text: "如果有什么听起来不对，就反馈给我们。", action: "反馈问题" },
    friend: "告诉一位一直想学钢琴的朋友。",
  },
  thanks: "谢谢你来弹琴。正是因为你，才有了这一切。",
};
