/** *Eighth notes* in Chinese. */
import type { Translation } from "../../../i18n/translation";
import type { EighthNotesTexts } from "./eighth-notes.en";

export const eighthNotesZh: Translation<EighthNotesTexts> = {
  title: "八分音符",
  steps: {
    "eighth-demo": {
      text: "看一看，听一听。先是中央 C 每拍响一次。然后它每拍响两次。",
    },
    "what-an-eighth-note-is": {
      text: "那些快的音是八分音符。一个八分音符持续半拍。所以两个八分音符正好占一拍。",
    },
    "eighths-per-beat-quiz": {
      text: "几个八分音符正好占一拍？",
      answers: ["一个", "两个", "四个"],
    },
    "count-and": {
      text: "数八分音符时，在两拍之间说“哒”：“1 哒 2 哒 3 哒 4 哒”。数字落在拍点上，每个“哒”落在两拍正中间。",
    },
    "counting-demo": {
      text: "跟着数：“1、2、3 哒、4”。两个快的 E 落在“3”和它的“哒”上。",
    },
    "eighth-taps": {
      text: "现在节拍很慢，每分钟 60 拍，滴答声快了一倍。每一声滴答就是一个八分音符。数“1 哒 2 哒”，每响一声就按一下任意琴键。",
    },
    "eighths-per-bar-quiz": {
      text: "一个小节有四拍。几个八分音符能填满它？",
      answers: ["四个", "六个", "八个"],
    },
    "phrase-demo": {
      text: "现在双手一起弹。左手按住一个低音 C，右手用八分音符往上走到 G。然后再往下走回 C。",
    },
    "eighth-phrase": {
      text: "把两只手都放在 C 手位。右手从中央 C 开始，弹 C、D、E、F、G、G、F、E、D、C。左手小指在第一个 C 时按下中央 C 下面的 C，在第二个 G 时再按一次。",
    },
    recap: {
      text: "做得好！现在你的音可以快一倍了。",
      points: ["一个八分音符持续半拍。", "两个八分音符占一拍。", "数八分音符时，数“1 哒 2 哒”。"],
    },
  },
};
