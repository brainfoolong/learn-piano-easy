/** The lesson view of *Learn Piano* in Chinese. A text it leaves out shows in English. */
import { formatNumber } from "../format";
import type { Translation } from "../translation";
import type { learnLesson as en } from "./learn-lesson.en";

export const learnLesson: Translation<typeof en> = {
  stepOf: (step: number, count: number) => `第 ${formatNumber("zh", step)} 步，共 ${formatNumber("zh", count)} 步`,
  leave: "退出这一课",
  leaveDialog: {
    title: "要退出这一课吗？",
    body: "这一课要学完，进度才会保存。",
    stay: "继续学习",
    leave: "退出",
    close: "关闭",
  },
  lacks: {
    touch: "我的键盘弹不出强弱",
    pedal: "我的键盘没有踏板",
  },
  loading: "正在加载这一课……",
  missing: "这一课不存在。",
  backToCourse: "返回课程",
  band: {
    continue: "继续",
    right: "对了！",
    tryAgain: "差一点。再试一次。",
  },
  demo: {
    play: "听示范",
    playAgain: "再听一遍",
    skip: "跳过",
    piano: "正在弹示范的钢琴",
    playing: "正在播放",
    slow: "慢速",
    side: "侧视图",
  },
  quiz: {
    answers: "答案",
    wrong: "差一点。换个答案试试。",
    hint: "高亮的答案是对的。",
  },
  findKey: {
    piano: "钢琴。按下这一步说的琴键。",
    marks: { next: "这个琴键", correct: "对了", mistake: "不是这个" },
    wrong: "这是另一个琴键。再试一次。",
    hint: "高亮的琴键就是它。",
    timeUp: "时间到了。",
    secondsLeft: (seconds: number) => `${seconds} 秒`,
  },
  playNotes: {
    piano: "钢琴。按顺序弹这个乐句。",
    marks: { next: "接下来弹这个", correct: "弹过了", mistake: "不是这个" },
    wrong: "这是另一个音。再试一次。",
    hint: (note: string) => `下一个音是 ${note}。`,
    hintChord: (...notes: string[]) => `接下来，同时弹 ${notes.join("、")}。`,
    expression: {
      "too-loud": "琴键对了，但太强了。弹弱一点。",
      "too-soft": "琴键对了，但太弱了。弹强一点。",
      "pedal-up": "琴键对了。弹的时候踩住踏板。",
      "pedal-down": "琴键对了。弹之前先松开踏板。",
    },
  },
  listen: {
    question: (n: number, count: number) => `第 ${formatNumber("zh", n)} 组，共 ${formatNumber("zh", count)} 组`,
    playAgain: "再听一遍",
    group: "第二个音更高、更低，还是一样？",
    answers: { higher: "更高", lower: "更低", same: "一样" },
    wrong: "差一点。再听一遍，换个答案试试。",
    hint: "高亮的答案是对的。",
    roundAgain: (right: number, asked: number) =>
      `${formatNumber("zh", asked)} 组里答对了 ${formatNumber("zh", right)} 组。我们再来一轮吧。`,
  },
  readNote: {
    staff: { treble: "高音谱表上的一个音符", bass: "低音谱表上的一个音符" },
    count: (n: number, total: number) => `第 ${formatNumber("zh", n)} 个音，共 ${formatNumber("zh", total)} 个`,
    answers: "音名",
    piano: "钢琴。弹出谱表上的这个音。",
    marks: { next: "这个琴键", correct: "对了", mistake: "不是这个" },
    wrongName: "这是另一个音。再看一看。",
    wrongKey: "这是另一个琴键。再试一次。",
    hintName: "高亮的音名是对的。",
    hintKey: "高亮的琴键就是它。",
    again: "有几个还没答对。我们再过一遍吧。",
  },
  rhythmTap: {
    start: "开始",
    listen: "听：先有一小节预备拍。",
    tap: "现在每响一声，就按一下任意琴键。",
    piano: "节拍板。跟着节拍按任意琴键。",
    marks: { next: "在这里按", correct: "合拍", mistake: "不合拍" },
    short: (hits: number, beats: number) =>
      `${formatNumber("zh", beats)} 拍里只按中了 ${formatNumber("zh", hits)} 拍。再试一次。`,
    hint: "一听到响声就按。圆点会在每一拍上闪动。",
    play: "现在每响一声，就弹一个音。",
    phrasePiano: "琴键。跟着响声按节奏弹这个乐句。",
    shortNotes: (hits: number, notes: number) =>
      `${formatNumber("zh", notes)} 个音里只有 ${formatNumber("zh", hits)} 个弹准了时间。再试一次。`,
    restSounded: "休止的地方响了一个琴键。抬起手指，在那里保持安静。",
    phraseHint: "每响一声就弹一个音，休止之前先抬起琴键。圆点会在每一拍上闪动。",
    pattern: {
      taps: (countIn: number, taps: number) =>
        `预备拍 ${formatNumber("zh", countIn)} 拍。然后按 ${formatNumber("zh", taps)} 拍。`,
      phrase: (countIn: number, ...parts: string[]) =>
        `预备拍 ${formatNumber("zh", countIn)} 拍。然后弹：${parts.join("、")}。`,
      held: (note: string, beats: number) => `${note} 保持 ${formatNumber("zh", beats)} 拍`,
      rest: (beats: number) => (beats === 1 ? "休止" : `休止 ${formatNumber("zh", beats)} 拍`),
    },
  },
  song: {
    play: "在播放器里弹",
    goal: (percent: number) => `弹这首歌，弹对 ${formatNumber("zh", percent)}% 的音。`,
    notYet: (percent: number) =>
      `这首歌在等你。随时可以再弹一遍，目标是 ${formatNumber("zh", percent)}%。`,
    played: (percent: number) => `你弹对了 ${formatNumber("zh", percent)}% 的音。`,
  },
  recap: {
    heading: "你学到了什么",
  },
  end: {
    heading: "这一课完成了",
    stars: (n: number) => `${formatNumber("zh", n)} 颗星，共 ${formatNumber("zh", 3)} 颗`,
    again: "再练一次",
    saving: "正在保存你的进度……",
    saved: "已保存在这台设备上。",
    unsaved: "这个浏览器不能存储数据，所以这次的成绩只保留到你关闭标签页为止。",
    failed: "无法保存你的进度。",
    retry: "再试一次",
    level: (level: number, toNext: number) =>
      `等级 ${formatNumber("zh", level)}：还差 ${formatNumber("zh", toNext)} XP 升到等级 ${formatNumber("zh", level + 1)}`,
    skipOpened: (world: string) => `“${world}”的每一课现在都开放了。`,
    skipShort: (stars: number) => `得到 ${formatNumber("zh", stars)} 颗星就能开放这个世界。随时可以再试一次。`,
  },
  moment: {
    continue: "继续",
    level: {
      heading: "升级了！",
      name: (level: number) => `等级 ${formatNumber("zh", level)}`,
      text: "每一课都让你更进一步。继续加油！",
    },
    badge: { heading: "新徽章！" },
  },
};
